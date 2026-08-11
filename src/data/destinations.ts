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
  packageCountry: string; // matches Package.country for auto-filtering packages
  region: "international";
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
    id: "dest-sa",
    slug: "south-africa",
    name: "South Africa",
    country: "South Africa",
    packageCountry: "South Africa",
    region: "international",
    tagline: "Cape Town, Kruger & Wildlife Safari",
    description:
      "Table Mountain panoramas, Cape Peninsula coastlines, world-class wineries, and thrilling Big Five game drives in Kruger National Park.",
    heroImage: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&q=80",
    travelTypes: ["adventure", "luxury", "family", "honeymoon"],
    seasons: ["year-round"],
    duration: { min: 6, max: 10 },
    budget: { from: 139999, to: 229999 },
    highlights: ["Table Mountain", "Kruger Safari", "Cape Peninsula", "V&A Waterfront"],
    featured: true,
  },
  {
    id: "dest-ke",
    slug: "kenya",
    name: "Kenya",
    country: "Kenya",
    packageCountry: "Kenya",
    region: "international",
    tagline: "The Ultimate Wildlife & Safari Experience",
    description:
      "The legendary Great Migration in Maasai Mara, colossal elephant herds against Mt. Kilimanjaro in Amboseli, and authentic safari camps.",
    heroImage: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=800&q=80",
    travelTypes: ["adventure", "luxury", "family"],
    seasons: ["summer", "winter", "autumn"],
    duration: { min: 5, max: 8 },
    budget: { from: 129999, to: 179999 },
    highlights: ["Maasai Mara Safari", "Amboseli Elephants", "Nairobi Giraffe Centre", "Rift Valley"],
    featured: true,
  },
  {
    id: "dest-cn",
    slug: "china",
    name: "China",
    country: "China",
    packageCountry: "China",
    region: "international",
    tagline: "Shanghai Modernity & Great Wall Wonders",
    description:
      "Contrast Shanghai's futuristic skyline and Bund views with Beijing's timeless Forbidden City, Tiananmen Square, and Mutianyu Great Wall.",
    heroImage: "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=800&q=80",
    travelTypes: ["family", "luxury", "solo"],
    seasons: ["spring", "autumn"],
    duration: { min: 6, max: 9 },
    budget: { from: 69999, to: 140000 },
    highlights: ["Mutianyu Great Wall", "Forbidden City", "The Bund Shanghai", "High-Speed Rail"],
    featured: true,
  },
  {
    id: "dest-kr",
    slug: "south-korea",
    name: "South Korea",
    country: "South Korea",
    packageCountry: "South Korea",
    region: "international",
    tagline: "Seoul Vibrancy & Nami Island Romance",
    description:
      "Immerse yourself in K-culture, ancient Gyeongbokgung palace traditions, Myeongdong street markets, and scenic Nami Island landscapes.",
    heroImage: "https://images.unsplash.com/photo-1538485399081-7191377e8241?w=800&q=80",
    travelTypes: ["honeymoon", "family", "solo"],
    seasons: ["spring", "autumn"],
    duration: { min: 6, max: 8 },
    budget: { from: 79999, to: 150000 },
    highlights: ["Seoul Tower", "Nami Island", "Gyeongbokgung Palace", "Myeongdong Shopping"],
    featured: true,
  },
  {
    id: "dest-jp",
    slug: "japan",
    name: "Japan",
    country: "Japan",
    packageCountry: "Japan",
    region: "international",
    tagline: "Tokyo Energy & Kyoto Zen",
    description:
      "Supercharged Tokyo neon, majestic Mt. Fuji views, bullet train speeds, and Kyoto's serene bamboo groves and golden shrines.",
    heroImage: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&q=80",
    travelTypes: ["luxury", "family", "honeymoon"],
    seasons: ["spring", "autumn", "winter"],
    duration: { min: 7, max: 12 },
    budget: { from: 149999, to: 280000 },
    highlights: ["Shinjuku & Shibuya", "Mt. Fuji Hakone", "Shinkansen Bullet Train", "Kyoto Arashiyama"],
    featured: true,
  },
  {
    id: "dest-003",
    slug: "maldives",
    name: "Maldives",
    country: "Maldives",
    packageCountry: "Maldives",
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
    packageCountry: "Indonesia",
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
    id: "dest-006",
    slug: "paris",
    name: "Paris",
    country: "France",
    packageCountry: "France",
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
    packageCountry: "Greece",
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
    id: "dest-010",
    slug: "dubai",
    name: "Dubai",
    country: "UAE",
    packageCountry: "UAE",
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
    id: "dest-013",
    slug: "singapore",
    name: "Singapore",
    country: "Singapore",
    packageCountry: "Singapore",
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
    packageCountry: "Thailand",
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
    packageCountry: "Sri Lanka",
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
