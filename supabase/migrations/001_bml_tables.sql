-- Session tokens for portal auth (service role access only)
CREATE TABLE IF NOT EXISTS bml_sessions (
  token UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  profile_id UUID NOT NULL,
  child_id UUID NOT NULL,
  child_context JSONB NOT NULL,
  expires_at TIMESTAMPTZ NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
CREATE INDEX IF NOT EXISTS idx_bml_sessions_expires ON bml_sessions(expires_at);
ALTER TABLE bml_sessions ENABLE ROW LEVEL SECURITY;

-- One-time auth codes from app launch
CREATE TABLE IF NOT EXISTS bml_auth_codes (
  code UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  profile_id UUID NOT NULL,
  child_id UUID NOT NULL,
  child_context JSONB NOT NULL,
  used BOOLEAN NOT NULL DEFAULT false,
  expires_at TIMESTAMPTZ NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
CREATE INDEX IF NOT EXISTS idx_bml_auth_codes_expires ON bml_auth_codes(expires_at);
ALTER TABLE bml_auth_codes ENABLE ROW LEVEL SECURITY;
