export const contact = {
  email: "admin@tenanglife.com",
  phoneDisplay: "+62 818 0808 8884",
  whatsapp: "6281808088884",
  location: "Ubud, Bali, Indonesia",
};

export const links = {
  whatsapp: `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(
    "Hi TenangLife, I'd like to book a sound healing session.",
  )}`,
  retreatDeck: "https://canva.link/soundsanctuarybali",
  bahasa: "https://www.tenanglife.com/sound-healing-therapy-bahasa",
  home: "https://www.tenanglife.com",
};

export const mailto = (subject: string) =>
  `mailto:${contact.email}?subject=${encodeURIComponent(subject)}`;

export const nav = [
  { id: "therapies", label: "Therapies" },
  { id: "workshop", label: "Workshop" },
  { id: "events", label: "Events" },
  { id: "stories", label: "Stories" },
  { id: "contact", label: "Contact" },
] as const;

export const instruments = [
  "Himalayan bowls",
  "Crystal bowls",
  "Gongs",
  "Drums",
  "Flutes",
  "Chimes",
  "Tuning forks",
];

export type Tier = {
  price: string;
  label: string;
  meta: string;
  href: string;
};

export type Therapy = {
  id: string;
  name: string;
  tagline: string;
  body: string;
  points: string[];
  image: { name: string; alt: string; position?: string };
  tiers: Tier[];
};

export const therapies: Therapy[] = [
  {
    id: "sounditation",
    name: "Sounditation",
    tagline: "A sound meditation journey",
    body: "Meditation meets the resonance of Himalayan and crystal bowls, gongs, drums, flutes and chimes. Perfect for first-timers, couples and friends.",
    points: [
      "Restore balance and inner harmony",
      "Release anxiety, gently",
      "In person, live online or on video",
    ],
    image: {
      name: "sounditation",
      alt: "Hand playing Tibetan tingsha chimes in front of a gong",
    },
    tiers: [
      {
        price: "IDR 1.400.000",
        label: "For 2 in Ubud",
        // Same link as the live tenanglife.com page, although its slug says "1-1-online".
        // Confirm with the owner which calendar "for 2 in Ubud" should open.
        meta: "75 min",
        href: "https://www.tenanglife.com/booking-calendar/sounditation-1-1-online",
      },
      {
        price: "Home service",
        label: "Retreats & events",
        meta: "75 min",
        href: "https://canva.link/soundsanctuarybali",
      },
      {
        price: "IDR 185.000",
        label: "Video Recording",
        meta: "2 videos",
        href: "https://www.tenanglife.com/challenge-page/d89712d1-99f0-42af-bb88-a269d26cd372",
      },
    ],
  },
  {
    id: "soundchronized",
    name: "Soundchronized Therapy",
    tagline: "Sync body, emotion and energy",
    body: "Himalayan bowls rest on your energy centres, sending vibration through the body to clear blockages and open you to deep, lasting calm.",
    points: [
      "7 chakra points realigned",
      "5 elements in balance",
      "Feminine & masculine energies harmonised",
    ],
    image: {
      name: "soundchronized",
      alt: "Guest resting with an eye mask beside a Himalayan singing bowl",
      position: "object-[16%_50%]",
    },
    tiers: [
      {
        price: "IDR 1.200.000",
        label: "1:1 in Ubud",
        meta: "75 min",
        href: "https://www.tenanglife.com/booking-calendar/soundchronized-1-1-offline-di-ubud",
      },
      {
        price: "IDR 2.300.000",
        label: "For 2 in Ubud",
        meta: "75 min",
        href: "https://www.tenanglife.com/booking-calendar/soundchronized-for-2-offline-di-ubud",
      },
    ],
  },
  {
    id: "soundpuncture",
    name: "Soundpuncture",
    tagline: "Needle-less acupuncture with tuning forks",
    body: "Precise tuning-fork frequencies on meridian points calm the nervous system and free the flow of Qi, supporting the body's natural healing.",
    points: [
      "Less stress, deeper sleep",
      "Natural pain relief",
      "Better circulation & immunity",
      "Deep tissue recovery",
    ],
    image: {
      name: "soundpuncture",
      alt: "Therapist applying a tuning fork to a meridian point on the foot",
    },
    tiers: [
      {
        price: "IDR 1.200.000",
        label: "1:1 in Ubud",
        meta: "75 min",
        href: "https://www.tenanglife.com/booking-calendar/soundpuncture",
      },
    ],
  },
];

export const workshop = {
  title: "Healing Bowls for",
  titleEnd: "Self-Therapy",
  body: "An in-depth, hands-on workshop in Ubud. Learn to choose, play and heal with singing bowls on your own.",
  lead: "Led by Dian Sonnerstedt, certified sound healing therapist",
  modules: [
    { title: "History", text: "Origins of the singing bowl and how it has been used." },
    { title: "Choosing bowls", text: "Types of bowls and what suits your needs." },
    { title: "Techniques", text: "Play the bowls and shape different healing sounds." },
    { title: "Self-therapy", text: "Guided practice with feedback from your teacher." },
  ],
  tier: { price: "IDR 3.500.000", label: "1:1 in Ubud", meta: "4 hrs · groups on request" },
};

export const events = {
  body: "Sound healing in the comfort of your home, or as part of your event or retreat. Not just music, but a journey back to yourself.",
  benefits: [
    { key: "stress", title: "Calm", text: "Reduces stress and anxiety" },
    { key: "sleep", title: "Sleep", text: "Deeper, more restful nights" },
    { key: "pain", title: "Relief", text: "Endorphins ease pain naturally" },
    { key: "flow", title: "Flow", text: "Better blood and lymph flow" },
    { key: "immunity", title: "Immunity", text: "Supports natural defences" },
  ],
};

export const testimonials = [
  {
    quote:
      "This was truly an out-of-body experience. We booked a private session with Dian in her cozy meditation treehouse overlooking the rice paddies, and the atmosphere was absolutely magical. I felt deeply relaxed, and more importantly, I felt myself healing.",
    name: "Vaness",
    place: "Canada",
  },
  {
    quote:
      "I was seriously impressed with my experience of sound healing with Dian, sense of deep healing as the sound vibrations open, clear & balance my chakras & release the stuck energy.",
    name: "@by.arya",
    place: "Bali",
  },
  {
    quote:
      "It was my first sound healing experience and it was amazing. Before the session I had a lot of tension in my lower back and pain in my injured ankle. The tension was gone by the end, even the pain in my ankle reduced a bit.",
    name: "Daria",
    place: "Norway",
  },
  {
    quote:
      "Dian's presence was very calming even before the session started. I was skeptical at first. It turned out to be a wholesome experience, and the sound tapped on my unconscious mind and reminded me what I need to work on.",
    name: "Petra",
    place: "Jakarta",
  },
  {
    quote:
      "Honestly, it was amazing. The sounds and vibrations touched something in me I had never experienced before. It felt like my whole body was resonating, and I left with a deep sense of peace.",
    name: "Kalter",
    place: "Australia",
  },
  {
    quote:
      "Learning how to play with singing bowls from Dian and concluding that I need the sound bowl that generates F tone to shatter the blocks in my heart chakra.",
    name: "Lia Sadia",
    place: "Bali",
  },
];
