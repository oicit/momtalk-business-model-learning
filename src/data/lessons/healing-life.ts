/**
 * Healing & Life — "The Business of Staying Healthy."
 *
 * An overview of the HEALTHCARE industry for kids: the doctors & hospitals
 * who treat us, the scientists who invent medicines (biotech/pharma), the
 * companies that build medical devices (x-ray machines, braces, hearing
 * aids), and health insurance — where everyone chips in a little so one
 * person's big medical bill is shared by the whole group (a callback to
 * the risk-pooling lesson).
 *
 * Beat order:
 *   intro → think-deeper (why does staying healthy take a whole industry?) →
 *   concept-cards (Doctors & Hospitals, Medicines, Medical Devices, Health
 *   Insurance) → quiz → connect (where healthcare shows up in real life) →
 *   outro → real-world-mission (notice a time someone helped you stay
 *   healthy, and who/what helped).
 */

import type { LessonDef } from './types';

const lesson: LessonDef = {
  id: 'healing-life',
  themeKey: 'industries',
  emoji: '💊',
  title: 'Healing & Life',
  subtitle: {
    easy: 'Doctors, medicines, machines, and a money jar that helps when you get sick!',
    medium:
      'Meet the healthcare industry: the people, medicines, devices, and insurance that keep everyone healthy.',
    hard:
      'How healthcare works as an industry — care, pharma/biotech, medical devices, and risk-pooled insurance — kid-sized.',
  },

  beats: [
    // ─── Intro ──────────────────────────────────────────────────────────
    {
      kind: 'intro',
      mood: 'happy',
      text: {
        easy:
          "When you scrape your knee, get a fever, or need a tooth fixed — a HUGE team of people helps you feel better! Doctors, nurses, medicine makers, and machine builders all work together. That whole team is called HEALTHCARE. 💊",
        medium:
          "Staying healthy isn't just one doctor — it's a giant team! Doctors and hospitals treat you, scientists invent medicines, builders make x-ray machines and braces, and insurance helps pay the big bills. Together that's the healthcare industry.",
        hard:
          "Healthcare is one of the biggest industries on Earth. It has four big parts that work together: care (doctors & hospitals), medicines (pharma & biotech), medical devices (machines & tools), and insurance (sharing big bills). Let's explore each one.",
      },
    },

    // ─── Think-deeper: why a whole industry to stay healthy? ────────────
    {
      kind: 'think-deeper',
      heading: '🤔 Why Does Staying Healthy Take a Whole Team?',
      intro: {
        easy: "Let's think about this together.",
        medium: "Let's reason through why healthcare is so big.",
        hard: 'First-principles look at why care, medicine, devices, and money all connect.',
      },
      layers: [
        {
          question: {
            easy: 'When you feel sick, can you always fix yourself?',
            medium: 'Can one person handle every health problem on their own?',
            hard: 'Why is specialized care needed instead of self-treatment?',
          },
          reveal: {
            easy:
              "Not always! Some boo-boos need a band-aid, but a broken arm needs a doctor, an x-ray machine, AND a special medicine. Different problems need different helpers.",
            medium:
              "Nope. A scraped knee is easy, but a broken bone needs a doctor to set it, a machine to see inside you, and medicine to stop the hurt. Big problems need trained people and special tools.",
            hard:
              "No. Health problems range from trivial to life-threatening. Serious ones require trained specialists, diagnostic devices, and tested medicines — which is exactly why so many different roles exist.",
          },
        },
        {
          question: {
            easy: 'Where do the medicines that make us better come from?',
            medium: 'How does a brand-new medicine get invented?',
            hard: 'Why does developing a new medicine take so long?',
          },
          reveal: {
            easy:
              "Scientists invent them! It takes them YEARS of careful work and testing to make sure a new medicine is safe before you can take it. 🔬",
            medium:
              "Scientists test new medicines for many years to be sure they're safe and they work. A single new medicine can take 10 years or more before a doctor can give it to you!",
            hard:
              "Inventing a medicine means discovering it, testing it on cells, then carefully on people in stages to prove it's safe and effective. This can take 10+ years and huge investment — which is why medicine is its own giant industry (pharma & biotech).",
          },
        },
        {
          question: {
            easy: 'What if a hospital visit costs a LOT of money?',
            medium: 'How can a family pay a giant hospital bill?',
            hard: 'How does the system protect families from catastrophic medical costs?',
          },
          reveal: {
            easy:
              "Then INSURANCE helps! Lots of people each pay a little bit into one big jar. When ONE person has a big bill, the jar helps pay for it. Sound familiar? It's pooling! 🫙",
            medium:
              "Health insurance shares the cost. Millions of people each pay a small amount, and that big pool helps whoever has a giant bill. It's the same risk-pooling trick you learned on Risk Pool Island!",
            hard:
              "Health insurance is risk pooling at huge scale: many people pay small premiums into one pool, and the pool covers the rare person with an enormous bill. Same mechanic as any insurance — just for your body.",
          },
        },
      ],
    },

    // ─── Concept cards: the four parts of healthcare ────────────────────
    {
      kind: 'concept-cards',
      heading: 'The 4 Parts of Healthcare',
      subheading: 'Care, medicines, machines, and a shared money jar — all working together.',
      cards: [
        {
          emoji: '🩺',
          title: 'Doctors & Hospitals',
          desc: {
            easy: 'Doctors, nurses, and dentists check you, fix you, and help you feel better. Hospitals are big buildings full of helpers and tools.',
            medium:
              'Doctors, nurses, and dentists give care. Hospitals and clinics are where they work — full of trained people and equipment to treat you.',
            hard:
              'Care delivery: doctors, nurses, dentists, and specialists working in hospitals and clinics. This is the front line where you actually get treated.',
          },
          color: '#FFE5EC',
        },
        {
          emoji: '💊',
          title: 'Medicines',
          desc: {
            easy: 'Scientists invent medicines that help you get better. It takes YEARS to make a new one safe!',
            medium:
              'Medicine companies (pharma & biotech) invent and make medicines. A new medicine can take 10+ years of testing before it reaches you.',
            hard:
              'Pharma & biotech firms research, test, and manufacture medicines. Long, costly development cycles (often 10+ years) are why this is a massive global industry.',
          },
          color: '#E8F4FD',
        },
        {
          emoji: '🦾',
          title: 'Medical Devices',
          desc: {
            easy: 'Special machines and tools help too — x-ray machines that see your bones, braces for your teeth, and hearing aids for your ears!',
            medium:
              'Companies build medical devices: x-ray and MRI machines, dental braces, hearing aids, and more. These tools help doctors see and fix problems.',
            hard:
              'Medical-device makers build diagnostic and treatment hardware — imaging machines, braces, hearing aids, pacemakers. A high-tech industry working alongside care and medicine.',
          },
          color: '#FFFDE8',
        },
        {
          emoji: '🫙',
          title: 'Health Insurance',
          desc: {
            easy: 'Everyone chips in a little to one big jar. When YOU get a big bill, the jar helps pay for it. Sharing makes it safe!',
            medium:
              'Health insurance pools small payments from many people so one person\'s big medical bill is shared. It\'s the risk-pooling trick — for your health.',
            hard:
              'Health insurance pools premiums from millions so rare, large medical costs are shared. Same risk-pooling architecture you learned on Risk Pool Island, applied to healthcare.',
          },
          color: '#F0E8FD',
        },
      ],
    },

    // ─── Quiz ────────────────────────────────────────────────────────────
    {
      kind: 'quiz',
      heading: '🎯 Healthcare Check',
      questions: [
        {
          q: 'Who treats you when you are sick or hurt?',
          options: [
            'Doctors, nurses, and dentists in hospitals and clinics',
            'Only your teacher at school',
            'Nobody — you must always fix yourself',
          ],
          correct: 0,
        },
        {
          q: 'How long can it take scientists to invent a brand-new medicine?',
          options: [
            'Many years — often 10 or more — to make sure it is safe',
            'About one hour',
            'Medicines are never tested before you take them',
          ],
          correct: 0,
        },
        {
          q: 'How does health insurance help with a big hospital bill?',
          options: [
            'Many people chip in a little, so one big bill is shared by everyone',
            'It makes the bill disappear by magic',
            'Only the sick person ever pays anything',
          ],
          correct: 0,
        },
      ],
      xpReward: 100,
      skillScores: { Foundations: 100 },
    },

    // ─── Connect: healthcare in real life ───────────────────────────────
    {
      kind: 'connect',
      heading: '🌍 Healthcare All Around You',
      concept: {
        easy: 'The healthcare team helps your whole family — every single day.',
        medium: 'Care, medicines, devices, and insurance show up in tons of everyday moments.',
        hard: 'The four parts of healthcare appear constantly in ordinary life — once you know to look.',
      },
      examples: [
        {
          emoji: '🦷',
          who: 'Your Dentist Visit',
          story: {
            easy: "When you sit in the dentist chair, that's CARE. The little x-ray of your teeth is a DEVICE. Braces are a device too!",
            medium:
              "A dentist checkup uses care (the dentist), a device (the x-ray and braces), and maybe insurance to help pay. Three parts in one visit!",
            hard:
              "A single dental visit combines care delivery, medical devices (imaging, orthodontics), and often insurance billing — a microcosm of the whole industry.",
          },
        },
        {
          emoji: '🔬',
          who: 'A Brand-New Medicine',
          story: {
            easy: "Some medicines that fight bad sicknesses took scientists more than 10 YEARS to invent. That's a LOT of patience!",
            medium:
              "Many medicines you've taken were invented by scientists over 10+ years of careful testing before any doctor could give them to a kid.",
            hard:
              "Vaccines and many drugs represent a decade-plus of biotech research and trials. The patience and cost of that pipeline is why pharma is such a large industry.",
          },
        },
        {
          emoji: '🦻',
          who: 'A Hearing Aid or Glasses',
          story: {
            easy: "If someone you know wears a hearing aid or glasses, that's a medical DEVICE helping their body work better!",
            medium:
              "Hearing aids, glasses, and braces are all medical devices — built by companies to help bodies see, hear, and heal better.",
            hard:
              "Hearing aids, corrective lenses, and orthodontics are everyday medical devices — proof the device industry isn't just hospital machines but daily-life tools.",
          },
        },
      ],
      kicker: {
        easy: 'Next time someone helps you feel better, see if you can spot which part of healthcare it is! 💙',
        medium: 'Care, medicine, device, or insurance — once you know the four parts, you\'ll see them everywhere.',
        hard: 'The four pillars interlock: care needs devices and medicines, and insurance pays for all of it.',
      },
    },

    // ─── Outro ────────────────────────────────────────────────────────────
    {
      kind: 'outro',
      mood: 'celebrating',
      text: {
        easy: "Now you know the team that keeps you healthy: doctors, medicines, machines, and a shared money jar. That's HEALTHCARE! 💊",
        medium:
          "You've met all four parts of healthcare — care, medicines, devices, and insurance — and how they work together to keep everyone well.",
        hard:
          "You now understand healthcare as an industry: care delivery, pharma/biotech, medical devices, and risk-pooled insurance, all interconnected.",
      },
      bonusTip: {
        easy: "Tip: insurance for your health uses the SAME jar trick as Risk Pool Island. 🫙",
        medium: "Pro tip: health insurance is just risk pooling — many small payments protect against one giant bill.",
        hard: "Connection: health insurance is risk pooling at scale. The mechanic you learned on Risk Pool Island powers the whole health-insurance industry.",
      },
    },

    // ─── Real-world mission: notice who helped you stay healthy ─────────
    {
      kind: 'real-world-mission',
      mission: {
        id: 'healing-life',
        emoji: '💙',
        title: {
          easy: 'Spot Your Healthcare Helpers',
          medium: 'Notice a time someone helped you stay healthy',
          hard: 'Observe healthcare in your own life',
        },
        pitch: {
          easy: "Think of a time you (or your family) got help staying healthy. Who helped? What helped? See if you can spot the four parts!",
          medium:
            "Remember a real time you or your family got healthy help. Figure out which of the four parts — care, medicine, device, or insurance — helped you.",
          hard:
            "Recall a real healthcare moment in your family and map it to the four parts of the industry: care, medicine, device, insurance.",
        },
        steps: [
          {
            emoji: '🧠',
            text: {
              easy: 'Think of a time you got hurt or sick — even a scraped knee or a cold!',
              medium: 'Recall a real time you or a family member needed help staying healthy.',
              hard: 'Pick a concrete healthcare event from your family\'s recent memory.',
            },
          },
          {
            emoji: '🩺',
            text: {
              easy: 'Who helped you? A doctor, nurse, dentist, or a grown-up at home?',
              medium: 'Identify WHO helped: a doctor, nurse, dentist, pharmacist, or family member.',
              hard: 'Name the care-givers involved and the role each played.',
            },
          },
          {
            emoji: '💊',
            text: {
              easy: 'What helped you? A medicine, a band-aid, an x-ray, glasses, or braces?',
              medium: 'Identify WHAT helped: a medicine, a device (x-ray, braces, glasses), or both.',
              hard: 'Identify the medicines and/or devices used during the event.',
            },
          },
          {
            emoji: '🫙',
            text: {
              easy: 'Ask a grown-up: did insurance help pay for any of it?',
              medium: 'Ask a grown-up whether insurance helped share the cost of the bill.',
              hard: 'With a grown-up, check whether insurance pooled and covered part of the cost.',
            },
          },
        ],
        reflection: [
          {
            key: 'who-helped',
            prompt: {
              easy: 'Who helped you stay healthy?',
              medium: 'Who gave you care during your healthcare moment?',
              hard: 'Which care-givers were involved?',
            },
            type: 'text',
            placeholder: 'A doctor, a nurse, my mom...',
          },
          {
            key: 'what-helped',
            prompt: {
              easy: 'What medicine or machine helped you?',
              medium: 'Which medicine or device helped you?',
              hard: 'What medicines and/or devices were used?',
            },
            type: 'text',
            placeholder: 'Medicine, a band-aid, an x-ray...',
          },
          {
            key: 'four-parts',
            prompt: {
              easy: 'How many of the four parts can you spot? (Care, medicine, device, insurance)',
              medium: 'Which of the four parts of healthcare showed up in your story?',
              hard: 'Map your event onto care, medicine, device, and insurance — which appeared?',
            },
            type: 'longtext',
          },
        ],
        parentNote: {
          easy: "This is just noticing — no real activity needed. Share a simple, age-appropriate story of a time the family got healthy help.",
          medium:
            "Observational only. Share an age-appropriate memory (a checkup, a cold, glasses, braces) and help the child spot which of the four parts were involved. Keep it light and reassuring.",
          hard:
            "Purely observational. Use a real, comforting family example to make the four-part framework concrete. If discussing a serious illness, keep it age-appropriate and emphasize that the whole healthcare team works together to help.",
        },
      },
    },
  ],
};

export default lesson;
