// ─────────────────────────────────────────────────────────────────────────────
// Site Configuration — single source of truth for brand/contact/social data
// Client: replace placeholder values before launch
// ─────────────────────────────────────────────────────────────────────────────

export const SITE = {
  name: "The Man Wanders Globe",
  tagline: "Curated Journeys, Handled Entirely",
  description:
    "The Man Wanders Globe crafts bespoke domestic and international travel experiences — every stay, transfer, and moment curated so you can simply wander.",
  url: "https://www.themanwandersglobetours.com",
  logo: "/logo.webp",
  ogImage: "https://www.themanwandersglobetours.com/logo.webp",

  contact: {
    email: "hello@themanwandersglobetours.com",
    phone: "+91 98457 07423",
    phoneSecondary: "+91 90719 71123",
    whatsapp: "919845707423",
    address: "Near SBI Road, Chikkagollarahatti, Magadi Main Road, Bengaluru, Karnataka 562162, India",
    businessHours: "Mon–Sat, 10 AM – 7 PM IST",
  },

  social: {
    instagram: "https://www.instagram.com/theman_wandersglobetours/",
    facebook: "https://www.facebook.com/themanwandersglobe",
    youtube: "https://www.youtube.com/@themanwandersglobe",
    pinterest: "https://www.pinterest.com/themanwandersglobe",
    linkedin: "https://www.linkedin.com/company/themanwandersglobe",
  },

  company: {
    legalName: "Frontier Travel and Hospitality Solutions Private Limited",
    brandName: "TheMan WandersGlobe Tours",
    cin: "U63040MH2024PTC000000", // placeholder
    gstin: "27AAAAA0000A1Z5", // placeholder
    pan: "AAAAA0000A", // placeholder
    established: 2020,
  },

  /** Number of years in business for trust-strip counter */
  stats: {
    yearsInBusiness: 5,
    destinationsCount: 30,
    travellersServed: 5000,
    averageRating: 4.9,
  },

  /** Form endpoint — TODO: replace with real Web3Forms / Formspree access key */
  formEndpoint: "https://api.web3forms.com/submit",
  formAccessKey: "YOUR_ACCESS_KEY_HERE", // TODO: sign up at web3forms.com
} as const;

export type SocialKey = keyof typeof SITE.social;
