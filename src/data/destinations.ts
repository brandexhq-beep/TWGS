// ─────────────────────────────────────────────────────────────────────────────
// Destination Data — TheMan WandersGlobe Tours
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
    heroImage: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1200&q=80&fm=webp",
    travelTypes: ["adventure", "luxury", "family", "honeymoon"],
    seasons: ["year-round"],
    duration: { min: 6, max: 10 },
    budget: { from: 139999, to: 229999 },
    highlights: ["Table Mountain", "Kruger Safari", "Cape Peninsula", "V&A Waterfront"],
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
    heroImage: "https://images.unsplash.com/photo-1538485399081-7191377e8241?w=1200&q=80&fm=webp",
    travelTypes: ["honeymoon", "family", "solo"],
    seasons: ["spring", "autumn"],
    duration: { min: 6, max: 8 },
    budget: { from: 79999, to: 150000 },
    highlights: ["Seoul Tower", "Nami Island", "Gyeongbokgung Palace", "Myeongdong Shopping"],
    featured: true,
  },
  {
    id: "dest-lk",
    slug: "sri-lanka",
    name: "Sri Lanka",
    country: "Sri Lanka",
    packageCountry: "Sri Lanka",
    region: "international",
    tagline: "Lush Hills, Temples & Pristine Coastlines",
    description:
      "Discover the emerald tea plantations of Nuwara Eliya, the historical grandeur of Kandy's temples, and the serene coastal charm of Galle in this island paradise.",
    heroImage: "https://images.unsplash.com/photo-1536697246787-1f7ae568d89d?w=1200&q=80&fm=webp",
    travelTypes: ["family", "honeymoon", "adventure"],
    seasons: ["year-round"],
    duration: { min: 4, max: 8 },
    budget: { from: 24999, to: 65000 },
    highlights: ["Temple of the Tooth", "Tea Plantations", "Nine Arch Bridge", "Galle Fort"],
    featured: true,
  },
  {
    id: "dest-th",
    slug: "thailand",
    name: "Thailand",
    country: "Thailand",
    packageCountry: "Thailand",
    region: "international",
    tagline: "Vibrant Cities, Golden Temples & Turquoise Seas",
    description:
      "Experience the electric energy of Bangkok's street markets, the golden spires of the Grand Palace, and the idyllic, sun-drenched beaches of Phuket, Krabi, and Pattaya.",
    heroImage: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=1200&q=80&fm=webp",
    travelTypes: ["luxury", "family", "honeymoon", "solo"],
    seasons: ["year-round"],
    duration: { min: 4, max: 10 },
    budget: { from: 29999, to: 85000 },
    highlights: ["Grand Palace", "Phi Phi Islands", "Coral Island", "Wat Arun"],
    featured: true,
  },
  {
    id: "dest-my",
    slug: "malaysia",
    name: "Malaysia",
    country: "Malaysia",
    packageCountry: "Malaysia",
    region: "international",
    tagline: "A Tapestry of Culture, Heritage & Modern Marvels",
    description:
      "From the towering Petronas Twin Towers in Kuala Lumpur to the misty heights of Genting Highlands and the spiritual awe of Batu Caves, Malaysia is truly Asia.",
    heroImage: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=1200&q=80&fm=webp",
    travelTypes: ["family", "corporate", "adventure"],
    seasons: ["year-round"],
    duration: { min: 4, max: 7 },
    budget: { from: 29999, to: 70000 },
    highlights: ["Petronas Twin Towers", "Batu Caves", "Genting Highlands", "Putrajaya"],
    featured: true,
  },
  {
    id: "dest-bali",
    slug: "bali",
    name: "Bali",
    country: "Indonesia",
    packageCountry: "Indonesia",
    region: "international",
    tagline: "The Island of the Gods",
    description:
      "Awaken your soul in Bali with its dramatic clifftop temples, cascading rice terraces in Ubud, vibrant beach clubs, and the untouched beauty of Nusa Penida.",
    heroImage: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=1200&q=80&fm=webp",
    travelTypes: ["honeymoon", "luxury", "adventure"],
    seasons: ["year-round"],
    duration: { min: 4, max: 8 },
    budget: { from: 32999, to: 95000 },
    highlights: ["Ubud Rice Terraces", "Uluwatu Temple", "Nusa Penida", "Kintamani Volcano"],
    featured: true,
  },
  {
    id: "dest-sg",
    slug: "singapore",
    name: "Singapore",
    country: "Singapore",
    packageCountry: "Singapore",
    region: "international",
    tagline: "Futuristic Marvels & Immersive Entertainment",
    description:
      "Step into the future where nature meets technology at Gardens by the Bay, thrill yourself at Universal Studios, and experience world-class luxury at Marina Bay Sands.",
    heroImage: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=1200&q=80&fm=webp",
    travelTypes: ["family", "luxury", "corporate"],
    seasons: ["year-round"],
    duration: { min: 4, max: 6 },
    budget: { from: 49999, to: 120000 },
    highlights: ["Gardens by the Bay", "Marina Bay Sands", "Universal Studios", "Sentosa Island"],
    featured: true,
  },
  {
    id: "dest-ae",
    slug: "dubai",
    name: "Dubai",
    country: "United Arab Emirates",
    packageCountry: "United Arab Emirates",
    region: "international",
    tagline: "Oasis of Luxury, Deserts & Architectural Wonders",
    description:
      "Experience the pinnacle of luxury, towering skyscrapers like the Burj Khalifa, exhilarating desert safaris, and a unique blend of traditional Arabian culture and modern extravagance.",
    heroImage: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1200&q=80&fm=webp",
    travelTypes: ["luxury", "family", "honeymoon"],
    seasons: ["winter", "spring", "autumn"],
    duration: { min: 4, max: 7 },
    budget: { from: 44999, to: 150000 },
    highlights: ["Desert Safari", "Burj Al Arab", "Dhow Cruise", "Abu Dhabi Grand Mosque"],
    featured: true,
  }
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
