#!/usr/bin/env node
/**
 * Seed a development kid-code into Supabase so you can log into the app
 * without going through the MomTalk RN app to generate one.
 *
 * Usage:
 *   node scripts/seed-dev-code.mjs            # uses default code DEVKID
 *   node scripts/seed-dev-code.mjs ABCDEF     # custom 6-char code
 *
 * Reads SUPABASE_URL + SUPABASE_SERVICE_ROLE_KEY from .env.local.
 * Code is valid 30 days. Mapped to profileId=dev-profile, childId=dev-child.
 */
import { createClient } from '@supabase/supabase-js';
import fs from 'node:fs';

const envFile = fs.readFileSync(new URL('../.env.local', import.meta.url), 'utf-8');
const env = Object.fromEntries(
  envFile
    .split('\n')
    .filter((l) => l && !l.trim().startsWith('#') && l.includes('='))
    .map((l) => {
      const i = l.indexOf('=');
      return [l.slice(0, i).trim(), l.slice(i + 1).trim().replace(/^['"]|['"]$/g, '')];
    }),
);

const url = env.SUPABASE_URL;
const key = env.SUPABASE_SERVICE_ROLE_KEY;
if (!url || !key) {
  console.error('Missing SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY in .env.local');
  process.exit(1);
}

const VALID_CHARS = 'ABCDEFGHJKMNPQRSTUVWXYZ23456789';
const inputCode = process.argv[2]?.toUpperCase() ?? 'DEVKID';
if (inputCode.length !== 6) {
  console.error(`Code must be exactly 6 characters. Got: ${inputCode}`);
  process.exit(1);
}
for (const c of inputCode) {
  if (!VALID_CHARS.includes(c)) {
    console.error(`Invalid char "${c}" in code. Use only: ${VALID_CHARS}`);
    process.exit(1);
  }
}

const supabase = createClient(url, key);
const expiresAt = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString();

const payload = {
  profile_id: 'dev-profile',
  module_slug: 'business-model-learning',
  data_key: `kid-code:${inputCode}`,
  data_value: {
    profileId: 'dev-profile',
    childId: 'dev-child',
    childContext: {
      childName: 'Tester',
      childAge: 9,
      interests: ['business', 'building'],
      personality: ['curious', 'kind'],
      ceoLevel: 0,
      ceoPoints: 0,
    },
    expiresAt,
  },
  updated_at: new Date().toISOString(),
};

const { error } = await supabase
  .from('module_data')
  .upsert(payload, { onConflict: 'profile_id,module_slug,data_key' });

if (error) {
  console.error('Failed to seed dev code:', error);
  process.exit(1);
}

console.log(`✅ Dev kid-code seeded: ${inputCode}`);
console.log(`   Valid until: ${expiresAt}`);
console.log(`   Maps to childName="Tester" age=9.`);
console.log(`   Use it at /auth or any lesson route.`);
