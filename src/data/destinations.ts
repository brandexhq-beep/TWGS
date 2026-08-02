// ─────────────────────────────────────────────────────────────────────────────
// Destination Data — 20 placeholder destinations
// ─────────────────────────────────────────────────────────────────────────────

export type TravelType = "adventure" | "luxury" | "family" | "honeymoon" | "solo" | "corporate";
export type Season = "summer" | "winter" | "monsoon" | "spring" | "autumn" | "year-round";

export interface Destination {
  id: string;
  slug: string;
  name: string;
  country: string;
  region: "domestic" | "international";
  tagline: string;
  description: string;
  heroImage: string;
  travelTypes: TravelType[];
  seasons: Season[];
  duration: { min: number; max: number }; // days
  budget: { from: number; to: number }; // INR per person
  highlights: string[];
  featured: boolean;
}

const IMG = (id: string, w = 800) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&q=80&auto=format`;

export const DESTINATIONS: Destination[] = [
  {
    id: "dest-001",
    slug: "rajasthan",
    name: "Rajasthan",
    country: "India",
    region: "domestic",
    tagline: "The Land of Kings",
    description:
      "Majestic forts, opulent palaces, camel safaris through the Thar Desert — Rajasthan is living history at its most theatrical.",
    heroImage: "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=800&q=80",
    travelTypes: ["luxury", "family", "honeymoon", "solo"],
    seasons: ["winter", "autumn", "spring"],
    duration: { min: 7, max: 14 },
    budget: { from: 40000, to: 200000 },
    highlights: ["Amber Fort", "Mehrangarh", "Lake Pichola", "Thar Desert Safari"],
    featured: true,
  },
  {
    id: "dest-002",
    slug: "kerala",
    name: "Kerala",
    country: "India",
    region: "domestic",
    tagline: "God's Own Country",
    description:
      "Backwater houseboats, lush tea estates, ancient Ayurveda and pristine beaches — Kerala is India's most serene escape.",
    heroImage: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800&q=80",
    travelTypes: ["family", "honeymoon", "luxury", "solo"],
    seasons: ["winter", "spring", "autumn"],
    duration: { min: 5, max: 10 },
    budget: { from: 25000, to: 120000 },
    highlights: ["Alleppey Backwaters", "Munnar Tea Gardens", "Kovalam Beach", "Elephant Sanctuaries"],
    featured: true,
  },
  {
    id: "dest-003",
    slug: "maldives",
    name: "Maldives",
    country: "Maldives",
    region: "international",
    tagline: "Paradise Perfected",
    description:
      "Crystal lagoons, overwater villas, and coral reefs teeming with life — the Maldives is the world's ultimate luxury escape.",
    heroImage: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=800&q=80",
    travelTypes: ["luxury", "honeymoon"],
    seasons: ["winter", "spring"],
    duration: { min: 5, max: 10 },
    budget: { from: 120000, to: 500000 },
    highlights: ["Overwater Villas", "Coral Reefs", "Dolphin Cruises", "Seaplane Transfers"],
    featured: true,
  },
  {
    id: "dest-004",
    slug: "bali",
    name: "Bali",
    country: "Indonesia",
    region: "international",
    tagline: "Island of the Gods",
    description:
      "Ancient temples, emerald rice terraces, surf breaks and spa rituals — Bali is spiritual, sensual and endlessly photogenic.",
    heroImage: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80",
    travelTypes: ["honeymoon", "luxury", "adventure", "solo"],
    seasons: ["spring", "summer", "autumn"],
    duration: { min: 6, max: 12 },
    budget: { from: 60000, to: 200000 },
    highlights: ["Ubud Rice Terraces", "Tanah Lot Temple", "Seminyak Beach", "Mount Batur Sunrise"],
    featured: true,
  },
  {
    id: "dest-005",
    slug: "leh-ladakh",
    name: "Leh & Ladakh",
    country: "India",
    region: "domestic",
    tagline: "Where Roads End",
    description:
      "High-altitude passes, azure lakes, ancient monasteries and a raw, untouched landscape that humbles every traveller.",
    heroImage: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
    travelTypes: ["adventure", "solo"],
    seasons: ["summer"],
    duration: { min: 7, max: 14 },
    budget: { from: 30000, to: 100000 },
    highlights: ["Pangong Lake", "Khardung La", "Hemis Monastery", "Nubra Valley"],
    featured: true,
  },
  {
    id: "dest-006",
    slug: "paris",
    name: "Paris",
    country: "France",
    region: "international",
    tagline: "La Ville-Lumière",
    description:
      "Croissants at dawn, Louvre at noon, Eiffel at sunset — Paris delivers romance, culture and gastronomy in unmatched abundance.",
    heroImage: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&q=80",
    travelTypes: ["honeymoon", "luxury", "solo"],
    seasons: ["spring", "autumn"],
    duration: { min: 5, max: 8 },
    budget: { from: 150000, to: 400000 },
    highlights: ["Eiffel Tower", "Louvre Museum", "Versailles", "Montmartre"],
    featured: false,
  },
  {
    id: "dest-007",
    slug: "santorini",
    name: "Santorini",
    country: "Greece",
    region: "international",
    tagline: "The Aegean Dream",
    description:
      "Whitewashed cliff-side villages, volcanic beaches, and some of the most celebrated sunsets on the planet.",
    heroImage: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800&q=80",
    travelTypes: ["honeymoon", "luxury", "solo"],
    seasons: ["spring", "summer", "autumn"],
    duration: { min: 5, max: 9 },
    budget: { from: 130000, to: 350000 },
    highlights: ["Oia Sunset", "Caldera Cruise", "Black Sand Beach", "Cave Suite Hotels"],
    featured: false,
  },
  {
    id: "dest-008",
    slug: "kashmir",
    name: "Kashmir",
    country: "India",
    region: "domestic",
    tagline: "Heaven on Earth",
    description:
      "Dal Lake houseboats, Mughal gardens, alpine meadows and the warmth of Kashmiri hospitality make this India's most breathtaking valley.",
    heroImage: "https://images.unsplash.com/photo-1506461883276-594a12b11cf3?w=800&q=80",
    travelTypes: ["honeymoon", "family", "luxury"],
    seasons: ["spring", "summer", "autumn"],
    duration: { min: 5, max: 10 },
    budget: { from: 25000, to: 90000 },
    highlights: ["Dal Lake Houseboat", "Gulmarg Gondola", "Pahalgam Valley", "Sonamarg Glacier"],
    featured: false,
  },
  {
    id: "dest-009",
    slug: "goa",
    name: "Goa",
    country: "India",
    region: "domestic",
    tagline: "Sun, Sea & Spirit",
    description:
      "Old Portuguese churches, golden beaches, legendary nightlife, Goan cuisine and a laid-back vibe that lingers long after you leave.",
    heroImage: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800&q=80",
    travelTypes: ["solo", "family", "adventure"],
    seasons: ["winter"],
    duration: { min: 3, max: 7 },
    budget: { from: 15000, to: 70000 },
    highlights: ["Baga Beach", "Old Goa Heritage", "Anjuna Night Market", "River Cruise"],
    featured: false,
  },
  {
    id: "dest-010",
    slug: "dubai",
    name: "Dubai",
    country: "UAE",
    region: "international",
    tagline: "Where Vision Becomes Reality",
    description:
      "Skyscraper skylines, world-record attractions, desert adventures and tax-free luxury shopping in a city that never stops building.",
    heroImage: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80",
    travelTypes: ["luxury", "corporate", "family"],
    seasons: ["winter", "spring"],
    duration: { min: 4, max: 7 },
    budget: { from: 60000, to: 250000 },
    highlights: ["Burj Khalifa", "Desert Safari", "Dubai Mall", "Palm Jumeirah"],
    featured: false,
  },
  {
    id: "dest-011",
    slug: "andaman",
    name: "Andaman Islands",
    country: "India",
    region: "domestic",
    tagline: "Where Turquoise Meets Emerald",
    description:
      "India's island paradise — Andaman offers pristine beaches, world-class diving, bio-luminescent bays and an unhurried island rhythm.",
    heroImage: "https://images.unsplash.com/photo-1583248369069-9d91f1640fe6?w=800&q=80",
    travelTypes: ["adventure", "honeymoon", "solo"],
    seasons: ["winter", "spring"],
    duration: { min: 5, max: 9 },
    budget: { from: 28000, to: 90000 },
    highlights: ["Radhanagar Beach", "Scuba Diving", "Bioluminescent Kayaking", "Cellular Jail"],
    featured: false,
  },
  {
    id: "dest-012",
    slug: "himachal-pradesh",
    name: "Himachal Pradesh",
    country: "India",
    region: "domestic",
    tagline: "The Mountain State",
    description:
      "Manali's snow-capped peaks, Spiti Valley's ancient monasteries, Dharamshala's Tibetan culture — Himachal is a mountain lover's paradise.",
    heroImage: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    travelTypes: ["adventure", "family", "solo"],
    seasons: ["summer", "spring"],
    duration: { min: 6, max: 12 },
    budget: { from: 20000, to: 80000 },
    highlights: ["Rohtang Pass", "Spiti Valley Monasteries", "Solang Valley", "Bir Billing Paragliding"],
    featured: false,
  },
  {
    id: "dest-013",
    slug: "singapore",
    name: "Singapore",
    country: "Singapore",
    region: "international",
    tagline: "The Lion City",
    description:
      "A stunning fusion of cultures — Gardens by the Bay, Sentosa's beaches, hawker centre feasts and one of the world's smoothest travel experiences.",
    heroImage: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=800&q=80",
    travelTypes: ["family", "luxury", "corporate"],
    seasons: ["year-round"],
    duration: { min: 4, max: 7 },
    budget: { from: 70000, to: 200000 },
    highlights: ["Gardens by the Bay", "Sentosa Island", "Marina Bay Sands", "Universal Studios"],
    featured: false,
  },
  {
    id: "dest-014",
    slug: "thailand",
    name: "Thailand",
    country: "Thailand",
    region: "international",
    tagline: "The Land of Smiles",
    description:
      "Golden temples, island-hopping adventures, street food that will ruin restaurants for you forever, and a warmth that is genuinely Thai.",
    heroImage: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=800&q=80",
    travelTypes: ["adventure", "solo", "honeymoon", "family"],
    seasons: ["winter", "spring"],
    duration: { min: 6, max: 12 },
    budget: { from: 40000, to: 150000 },
    highlights: ["Phi Phi Islands", "Chiang Mai Temples", "Bangkok Street Food", "Maya Bay"],
    featured: false,
  },
  {
    id: "dest-015",
    slug: "sri-lanka",
    name: "Sri Lanka",
    country: "Sri Lanka",
    region: "international",
    tagline: "The Pearl of the Indian Ocean",
    description:
      "Ancient ruins, wild leopards, misty tea country, whale watching and pristine beaches — Sri Lanka packs extraordinary variety into one small island.",
    heroImage: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=800&q=80",
    travelTypes: ["adventure", "family", "solo", "luxury"],
    seasons: ["winter", "spring"],
    duration: { min: 7, max: 12 },
    budget: { from: 50000, to: 160000 },
    highlights: ["Sigiriya Rock Fortress", "Yala National Park", "Galle Fort", "Tea Estates"],
    featured: false,
  },
];

export function getDestinationsByType(type: TravelType): Destination[] {
  return DESTINATIONS.filter((d) => d.travelTypes.includes(type));
}

export function getFeaturedDestinations(): Destination[] {
  return DESTINATIONS.filter((d) => d.featured);
}

export function getDestinationBySlug(slug: string): Destination | undefined {
  return DESTINATIONS.find((d) => d.slug === slug);
}
