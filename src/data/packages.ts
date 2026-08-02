// ─────────────────────────────────────────────────────────────────────────────
// Package Data — placeholder content, client to replace before launch
// ─────────────────────────────────────────────────────────────────────────────

export type PackageCategory =
  | "domestic"
  | "international"
  | "luxury"
  | "adventure"
  | "honeymoon"
  | "family"
  | "corporate"
  | "solo";

export interface ItineraryDay {
  day: number;
  title: string;
  description: string;
  highlights: string[];
  meals: ("breakfast" | "lunch" | "dinner")[];
  stay: string;
  images?: string[];
}

export interface Package {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  category: PackageCategory[];
  featured: boolean;
  heroImage: string; // Unsplash URL — client to replace with real photography
  galleryImages: string[];
  destination: string;
  country: string;
  duration: { days: number; nights: number };
  priceFrom: number; // INR per person
  maxGroupSize: number;
  highlights: string[];
  itinerary: ItineraryDay[];
  includes: string[];
  excludes: string[];
  seasons: string[];
  rating: number;
  reviewCount: number;
}

// ─────────────────────────────────────────────────────────────────────────────
// Placeholder photography from Unsplash (royalty-free, swap with real photos)
// ─────────────────────────────────────────────────────────────────────────────

const UNSPLASH = {
  rajasthan: "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=1200&q=80",
  kerala: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=1200&q=80",
  goa: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=1200&q=80",
  himachal: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80",
  maldives: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=1200&q=80",
  bali: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=1200&q=80",
  paris: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&q=80",
  santorini: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=1200&q=80",
  dubai: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1200&q=80",
  leh: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80",
  kashmir: "https://images.unsplash.com/photo-1506461883276-594a12b11cf3?w=1200&q=80",
  andaman: "https://images.unsplash.com/photo-1583248369069-9d91f1640fe6?w=1200&q=80",
};

export const PACKAGES: Package[] = [
  // ─── LUXURY ────────────────────────────────────────────────────────────────
  {
    id: "pkg-001",
    slug: "maldives-overwater-luxury",
    name: "Maldives — Overwater Luxury",
    tagline: "Where the ocean is your floor and the sky your ceiling.",
    category: ["luxury", "honeymoon", "international"],
    featured: true,
    heroImage: UNSPLASH.maldives,
    galleryImages: [UNSPLASH.maldives, UNSPLASH.bali, UNSPLASH.santorini],
    destination: "Maldives",
    country: "Maldives",
    duration: { days: 7, nights: 6 },
    priceFrom: 175000,
    maxGroupSize: 2,
    highlights: [
      "Overwater villa with glass-floor panels",
      "Private sunset dolphin cruise",
      "Couples' spa with ocean views",
      "Snorkelling & scuba in UNESCO biosphere",
      "All-inclusive gourmet dining",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Paradise",
        description:
          "Seaplane transfer from Malé to your private island resort. Check into your overwater villa, where turquoise lagoon water stretches beneath your feet.",
        highlights: ["Seaplane transfer", "Welcome cocktails", "Sunset villa tour"],
        meals: ["dinner"],
        stay: "Overwater Water Villa, Conrad Maldives",
        images: [UNSPLASH.maldives],
      },
      {
        day: 2,
        title: "Reef, Rays & Romance",
        description:
          "Morning snorkelling on the house reef, followed by a couples' rejuvenation treatment at the overwater spa. Sunset champagne on your deck.",
        highlights: ["House reef snorkelling", "Couples spa (90 min)", "Sunset champagne"],
        meals: ["breakfast", "dinner"],
        stay: "Conrad Maldives",
        images: [UNSPLASH.maldives],
      },
      {
        day: 3,
        title: "Dolphin Cruise & Dive",
        description:
          "Full-day scuba diving on the outer reef (PADI-certified instructor) + evening dolphin-watching cruise with a private chef's platter.",
        highlights: ["2 x scuba dives", "Dolphin sunset cruise", "Private platter"],
        meals: ["breakfast", "lunch"],
        stay: "Conrad Maldives",
      },
      {
        day: 4,
        title: "Day at Sea",
        description:
          "Private catamaran charter — sail to a deserted sandbank for a champagne picnic lunch. Afternoon kayaking and paddleboarding at leisure.",
        highlights: ["Catamaran charter", "Sandbank picnic", "Paddleboarding"],
        meals: ["breakfast", "lunch"],
        stay: "Conrad Maldives",
      },
      {
        day: 5,
        title: "Culture & Cuisine",
        description:
          "Morning visit to a local island fishermen's village; afternoon gourmet cooking class with the resort chef using locally-caught seafood.",
        highlights: ["Local island excursion", "Cooking class", "Chef's table dinner"],
        meals: ["breakfast", "dinner"],
        stay: "Conrad Maldives",
      },
      {
        day: 6,
        title: "Leisure & Farewell",
        description:
          "Unplanned day — pool, spa, or simply float in your villa's private pool. Farewell dinner under the stars on a floating pontoon.",
        highlights: ["Spa at leisure", "Private pool villa", "Floating pontoon dinner"],
        meals: ["breakfast", "dinner"],
        stay: "Conrad Maldives",
      },
      {
        day: 7,
        title: "Departure",
        description:
          "Late checkout, seaplane back to Malé international airport. Depart with memories that last a lifetime.",
        highlights: ["Late checkout", "Seaplane transfer"],
        meals: ["breakfast"],
        stay: "Departure",
      },
    ],
    includes: [
      "Return seaplane transfers (Malé–resort–Malé)",
      "6 nights overwater villa (all-inclusive)",
      "Couples' spa session (90 min)",
      "Sunset dolphin cruise",
      "Snorkelling equipment",
      "Dedicated butler service",
    ],
    excludes: [
      "International airfare to/from Malé",
      "Scuba diving (extra charge)",
      "Catamaran charter (add-on)",
      "Personal expenses & alcohol beyond package",
    ],
    seasons: ["Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr"],
    rating: 4.9,
    reviewCount: 143,
  },

  // ─── HONEYMOON ─────────────────────────────────────────────────────────────
  {
    id: "pkg-002",
    slug: "bali-honeymoon-bliss",
    name: "Bali — Honeymoon in the Gods' Island",
    tagline: "Rice terraces, temples, and utter togetherness.",
    category: ["honeymoon", "international", "luxury"],
    featured: true,
    heroImage: UNSPLASH.bali,
    galleryImages: [UNSPLASH.bali, UNSPLASH.maldives, UNSPLASH.santorini],
    destination: "Bali",
    country: "Indonesia",
    duration: { days: 8, nights: 7 },
    priceFrom: 95000,
    maxGroupSize: 2,
    highlights: [
      "Private infinity pool villa in Ubud",
      "Sunrise Batur volcano trek",
      "Couples' Balinese spa rituals",
      "Temple & rice terrace sunset tour",
      "Romantic beach dinner in Seminyak",
    ],
    itinerary: [
      {
        day: 1,
        title: "Welcome to Bali",
        description: "Airport pickup, lei welcome, and transfer to Ubud. Check-in to private pool villa nestled in rice fields.",
        highlights: ["Airport welcome", "Villa check-in", "Evening rice field walk"],
        meals: ["dinner"],
        stay: "Private Pool Villa, Ubud",
      },
    ],
    includes: ["7 nights private pool villa", "Daily breakfast", "Airport transfers", "Spa session", "Volcano trek with guide"],
    excludes: ["International flights", "Personal expenses", "Optional activities"],
    seasons: ["Apr", "May", "Jun", "Jul", "Aug", "Sep"],
    rating: 4.8,
    reviewCount: 98,
  },

  // ─── DOMESTIC ──────────────────────────────────────────────────────────────
  {
    id: "pkg-003",
    slug: "rajasthan-royal-circuit",
    name: "Rajasthan — The Royal Circuit",
    tagline: "Palaces, forts, and a land that dreams in saffron.",
    category: ["domestic", "luxury"],
    featured: true,
    heroImage: UNSPLASH.rajasthan,
    galleryImages: [UNSPLASH.rajasthan, UNSPLASH.leh, UNSPLASH.kashmir],
    destination: "Jaipur · Jodhpur · Udaipur",
    country: "India",
    duration: { days: 10, nights: 9 },
    priceFrom: 65000,
    maxGroupSize: 10,
    highlights: [
      "Amber Fort jeep ride at dawn",
      "Sunset at Mehrangarh in the Blue City",
      "Boat dinner on Lake Pichola",
      "Camel safari in the Thar Desert",
      "Heritage palace hotel stays",
    ],
    itinerary: [],
    includes: ["9 nights heritage hotels", "Daily breakfast & dinner", "AC vehicle throughout", "Expert local guides", "Camel safari"],
    excludes: ["Airfare", "Entrance fees", "Personal expenses"],
    seasons: ["Oct", "Nov", "Dec", "Jan", "Feb", "Mar"],
    rating: 4.9,
    reviewCount: 217,
  },

  // ─── ADVENTURE ─────────────────────────────────────────────────────────────
  {
    id: "pkg-004",
    slug: "leh-ladakh-expedition",
    name: "Leh–Ladakh — High Altitude Expedition",
    tagline: "Where roads end and the adventure truly begins.",
    category: ["adventure", "domestic", "solo"],
    featured: true,
    heroImage: UNSPLASH.leh,
    galleryImages: [UNSPLASH.leh, UNSPLASH.himachal, UNSPLASH.kashmir],
    destination: "Leh, Ladakh",
    country: "India",
    duration: { days: 9, nights: 8 },
    priceFrom: 45000,
    maxGroupSize: 12,
    highlights: [
      "Pangong Lake sunrise camp",
      "Khardung La pass (world's highest motorable road)",
      "Monastery circuit: Hemis, Thikse, Diskit",
      "Indus & Zanskar river rafting",
      "Camping under Milky Way",
    ],
    itinerary: [],
    includes: ["8 nights camp/guesthouse", "All meals", "Royal Enfield rental or 4WD", "Permits", "Guide & support"],
    excludes: ["Airfare to Leh", "Personal gear", "Travel insurance"],
    seasons: ["Jun", "Jul", "Aug", "Sep"],
    rating: 4.8,
    reviewCount: 134,
  },

  // ─── FAMILY ────────────────────────────────────────────────────────────────
  {
    id: "pkg-005",
    slug: "kerala-family-backwaters",
    name: "Kerala — Backwaters & Beyond",
    tagline: "God's Own Country. Your family's fondest memory.",
    category: ["family", "domestic"],
    featured: false,
    heroImage: UNSPLASH.kerala,
    galleryImages: [UNSPLASH.kerala, UNSPLASH.goa, UNSPLASH.andaman],
    destination: "Kochi · Munnar · Alleppey · Kovalam",
    country: "India",
    duration: { days: 8, nights: 7 },
    priceFrom: 42000,
    maxGroupSize: 6,
    highlights: [
      "Houseboat overnight on Vembanad Lake",
      "Tea estate walk in Munnar",
      "Kathakali cultural performance",
      "Elephant interaction (ethical sanctuary)",
      "Varkala cliff-side beach day",
    ],
    itinerary: [],
    includes: ["7 nights hotels + 1 houseboat", "Daily breakfast", "All transfers", "Kathakali show tickets", "Elephant visit"],
    excludes: ["Flights", "Lunches & dinners (except houseboat)", "Personal expenses"],
    seasons: ["Oct", "Nov", "Dec", "Jan", "Feb", "Mar"],
    rating: 4.7,
    reviewCount: 189,
  },

  // ─── INTERNATIONAL / EUROPE ────────────────────────────────────────────────
  {
    id: "pkg-006",
    slug: "paris-santorini-honeymoon",
    name: "Paris & Santorini — European Romance",
    tagline: "The City of Light meets the Aegean dream.",
    category: ["honeymoon", "international", "luxury"],
    featured: false,
    heroImage: UNSPLASH.paris,
    galleryImages: [UNSPLASH.paris, UNSPLASH.santorini, UNSPLASH.bali],
    destination: "Paris · Santorini",
    country: "France / Greece",
    duration: { days: 12, nights: 11 },
    priceFrom: 220000,
    maxGroupSize: 2,
    highlights: [
      "Eiffel Tower private dinner reservation",
      "Cave suite with caldera views in Oia",
      "Sunset catamaran in the Aegean",
      "Louvre priority-access guided tour",
      "Champagne tasting in Reims",
    ],
    itinerary: [],
    includes: ["11 nights 5-star hotels", "Daily breakfast", "Paris–Santorini flight", "All transfers", "Selected tours"],
    excludes: ["International flights to Paris from India", "Personal shopping", "Lunches & dinners"],
    seasons: ["Apr", "May", "Jun", "Sep", "Oct"],
    rating: 4.9,
    reviewCount: 76,
  },

  // ─── GOA ───────────────────────────────────────────────────────────────────
  {
    id: "pkg-007",
    slug: "goa-weekend-escape",
    name: "Goa — Weekend Escape",
    tagline: "Sun, sea, and stories worth telling.",
    category: ["domestic", "solo", "family"],
    featured: false,
    heroImage: UNSPLASH.goa,
    galleryImages: [UNSPLASH.goa, UNSPLASH.andaman, UNSPLASH.kerala],
    destination: "Goa",
    country: "India",
    duration: { days: 4, nights: 3 },
    priceFrom: 18000,
    maxGroupSize: 8,
    highlights: [
      "North Goa beach-hopping",
      "Old Goa heritage churches walk",
      "Sunset cruise on Mandovi River",
      "Spice plantation tour with Goan lunch",
      "Night market at Anjuna",
    ],
    itinerary: [],
    includes: ["3 nights boutique resort", "Daily breakfast", "Airport transfers", "River cruise", "Spice plantation"],
    excludes: ["Flights", "Lunch & dinner", "Personal expenses"],
    seasons: ["Oct", "Nov", "Dec", "Jan", "Feb", "Mar"],
    rating: 4.6,
    reviewCount: 312,
  },

  // ─── CORPORATE ─────────────────────────────────────────────────────────────
  {
    id: "pkg-008",
    slug: "dubai-corporate-retreat",
    name: "Dubai — Corporate Excellence Retreat",
    tagline: "Reward your team where ambition meets skyline.",
    category: ["corporate", "international", "luxury"],
    featured: false,
    heroImage: UNSPLASH.dubai,
    galleryImages: [UNSPLASH.dubai, UNSPLASH.paris, UNSPLASH.santorini],
    destination: "Dubai",
    country: "UAE",
    duration: { days: 5, nights: 4 },
    priceFrom: 85000,
    maxGroupSize: 50,
    highlights: [
      "Burj Al Arab welcome reception",
      "Desert safari team-building dinner",
      "Conference facility at luxury hotel",
      "Dubai Marina yacht evening",
      "Customised team activities",
    ],
    itinerary: [],
    includes: ["4 nights 5-star hotel", "All conference facilities", "Desert safari", "Transfers", "MICE-dedicated coordinator"],
    excludes: ["International flights", "Visa fees", "Personal expenses", "Optional excursions"],
    seasons: ["Oct", "Nov", "Dec", "Jan", "Feb", "Mar"],
    rating: 4.8,
    reviewCount: 45,
  },

  // ─── ANDAMAN ───────────────────────────────────────────────────────────────
  {
    id: "pkg-009",
    slug: "andaman-island-hopping",
    name: "Andaman — Island Hopping Adventure",
    tagline: "Emerald waters. Untouched shores. Zero signal. Total freedom.",
    category: ["adventure", "domestic", "solo", "honeymoon"],
    featured: false,
    heroImage: UNSPLASH.andaman,
    galleryImages: [UNSPLASH.andaman, UNSPLASH.goa, UNSPLASH.kerala],
    destination: "Port Blair · Havelock · Neil Island",
    country: "India",
    duration: { days: 7, nights: 6 },
    priceFrom: 38000,
    maxGroupSize: 8,
    highlights: [
      "Radhanagar Beach (Asia's best beach)",
      "Scuba diving at Elephant Beach",
      "Night kayaking through bio-luminescent waters",
      "Cellular Jail light & sound show",
      "Snorkelling at Neil Island coral reefs",
    ],
    itinerary: [],
    includes: ["6 nights beach resorts", "Daily breakfast", "All inter-island ferries", "Scuba session", "Kayaking"],
    excludes: ["Flights to Port Blair", "Lunch & dinner", "Permit fees"],
    seasons: ["Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr"],
    rating: 4.8,
    reviewCount: 156,
  },

  // ─── KASHMIR ───────────────────────────────────────────────────────────────
  {
    id: "pkg-010",
    slug: "kashmir-paradise-valley",
    name: "Kashmir — Valley of Paradise",
    tagline: "Heaven is a place on earth. It's called Kashmir.",
    category: ["domestic", "honeymoon", "luxury"],
    featured: false,
    heroImage: UNSPLASH.kashmir,
    galleryImages: [UNSPLASH.kashmir, UNSPLASH.himachal, UNSPLASH.leh],
    destination: "Srinagar · Gulmarg · Pahalgam · Sonamarg",
    country: "India",
    duration: { days: 7, nights: 6 },
    priceFrom: 35000,
    maxGroupSize: 8,
    highlights: [
      "Dal Lake houseboat stay",
      "Gondola ride at Gulmarg (Asia's highest)",
      "Betaab Valley & Aru Valley picnic",
      "Mughal Gardens: Shalimar & Nishat Bagh",
      "Sonamarg glacier excursion",
    ],
    itinerary: [],
    includes: ["6 nights houseboat + hotels", "Daily breakfast & dinner", "All transfers", "Gondola tickets", "Local sightseeing"],
    excludes: ["Flights to Srinagar", "Lunch", "Pony rides & optional excursions"],
    seasons: ["Apr", "May", "Jun", "Sep", "Oct"],
    rating: 4.7,
    reviewCount: 201,
  },
];

export const PACKAGE_CATEGORIES = [
  { id: "all", label: "All Packages" },
  { id: "domestic", label: "Domestic" },
  { id: "international", label: "International" },
  { id: "luxury", label: "Luxury" },
  { id: "adventure", label: "Adventure" },
  { id: "honeymoon", label: "Honeymoon" },
  { id: "family", label: "Family" },
  { id: "corporate", label: "Corporate" },
  { id: "solo", label: "Solo" },
] as const;

export function getFeaturedPackages(): Package[] {
  return PACKAGES.filter((p) => p.featured);
}

export function getPackagesByCategory(category: PackageCategory | "all"): Package[] {
  if (category === "all") return PACKAGES;
  return PACKAGES.filter((p) => p.category.includes(category));
}

export function getPackageBySlug(slug: string): Package | undefined {
  return PACKAGES.find((p) => p.slug === slug);
}
