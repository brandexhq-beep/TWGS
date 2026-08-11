// ─────────────────────────────────────────────────────────────────────────────
// Site Configuration — single source of truth for brand/contact/social data
// Client: replace placeholder values before launch
// ─────────────────────────────────────────────────────────────────────────────

export const SITE = {
  name: "The Man Wanders Globe",
  tagline: "Curated Journeys, Handled Entirely",
  description:
    "The Man Wanders Globe crafts bespoke domestic and international travel experiences — every stay, transfer, and moment curated so you can simply wander.",
  url: "https://themanwandersglobe.com", // TODO: update with actual domain
  logo: "/logo.webp",
  ogImage: "/logo.webp", // Logo for URL preview

  contact: {
    email: "hello@themanwandersglobe.com", // TODO: update
    phone: "+91 90719 71123",
    whatsapp: "919071971123",
    address: "123 Travel Lane, Mumbai, Maharashtra 400001, India", // TODO: update
    businessHours: "Mon–Sat, 10 AM – 7 PM IST",
  },

  social: {
    instagram: "https://instagram.com/themanwandersglobe", // TODO: update
    facebook: "https://facebook.com/themanwandersglobe", // TODO: update
    youtube: "https://youtube.com/@themanwandersglobe", // TODO: update
    pinterest: "https://pinterest.com/themanwandersglobe", // TODO: update
    linkedin: "https://linkedin.com/company/themanwandersglobe", // TODO: update
  },

  company: {
    // TODO: confirm registered entity details before launch
    legalName: "The Man Wanders Globe Tours & Travels",
    cin: "U63040MH2024PTC000000", // placeholder
    gstin: "27AAAAA0000A1Z5", // placeholder
    pan: "AAAAA0000A", // placeholder
    established: 2020,
  },

  /** Number of years in business for trust-strip counter */
  stats: {
    yearsInBusiness: 5,
    destinationsCount: 120,
    travellersServed: 5000,
    averageRating: 4.9,
  },

  /** Form endpoint — TODO: replace with real Web3Forms / Formspree access key */
  formEndpoint: "https://api.web3forms.com/submit",
  formAccessKey: "YOUR_ACCESS_KEY_HERE", // TODO: sign up at web3forms.com
} as const;

export type SocialKey = keyof typeof SITE.social;
