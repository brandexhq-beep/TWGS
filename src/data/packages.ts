// ─────────────────────────────────────────────────────────────────────────────
// Package Data — TheMan WandersGlobe Tours
// ─────────────────────────────────────────────────────────────────────────────

export type PackageCategory =
  | "international"
  | "asia"
  | "europe"
  | "africa"
  | "china"
  | "japan"
  | "south-korea"
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
  heroImage: string;
  galleryImages: string[];
  destination: string;
  country: string;
  duration: { days: number; nights: number };
  priceFrom: number;
  maxGroupSize: number;
  highlights: string[];
  itinerary: ItineraryDay[];
  includes: string[];
  excludes: string[];
  seasons: string[];
  rating: number;
  reviewCount: number;
}

export const PACKAGES: Package[] = [
  // ─── NEW ITINERARIES FROM USER ─────────────────────────────────────────────
  {
    id: "pkg-egypt-explorer",
    slug: "egypt-explorer",
    name: "Egypt Explorer",
    tagline: "Cairo • Aswan • Nile Cruise • Luxor",
    category: ["international", "africa", "luxury", "family"],
    featured: true,
    heroImage: "/images/egypt-hero.webp",
    galleryImages: [
      "/images/egypt-gallery-1.webp",
      "/images/egypt-gallery-2.webp"
    ],
    destination: "Cairo & Nile Cruise",
    country: "Egypt",
    duration: { days: 7, nights: 6 },
    priceFrom: 79999,
    maxGroupSize: 15,
    highlights: ["Great Pyramids of Giza", "Egyptian Museum", "Nile Cruise", "Valley of the Kings", "Karnak Temple"],
    includes: ["Accommodation", "Daily Breakfast", "Nile Cruise Meals", "Airport Transfers", "Domestic Flight"],
    excludes: ["International Flights", "Visas", "Personal Expenses"],
    seasons: ["All Year"],
    rating: 4.9,
    reviewCount: 145,
    itinerary: [
      { day: 1, title: "Arrival in Cairo", description: "Arrival at Cairo International Airport. Meet & greet, private airport transfer, and hotel check-in. Rest and enjoy an evening at leisure, with an optional Nile dinner cruise.", highlights: ["Arrival in Cairo"], meals: [], stay: "Cairo" },
      { day: 2, title: "Pyramids & Cairo", description: "After breakfast, marvel at the Great Pyramid of Giza, Pyramid of Khafre, Pyramid of Menkaure, and the Great Sphinx. Later, explore the Egyptian Museum and shop at Khan El Khalili Bazaar.", highlights: ["Great Pyramids", "Great Sphinx", "Egyptian Museum", "Khan El Khalili"], meals: ["breakfast"], stay: "Cairo" },
      { day: 3, title: "Cairo → Aswan", description: "Check-out and take a domestic flight to Aswan. Transfer to your Nile cruise, check-in, and have lunch. Visit Philae Temple and the Unfinished Obelisk, followed by a scenic Felucca ride around the Nile. Enjoy dinner on board.", highlights: ["Philae Temple", "Nile Cruise", "Felucca ride"], meals: ["breakfast", "lunch", "dinner"], stay: "Nile Cruise" },
      { day: 4, title: "Aswan → Kom Ombo → Edfu", description: "Breakfast on cruise while sailing toward Kom Ombo. Visit Kom Ombo Temple, then continue sailing and enjoying the magnificent Nile scenery. Dinner on board.", highlights: ["Kom Ombo Temple", "Nile Sailing"], meals: ["breakfast", "lunch", "dinner"], stay: "Nile Cruise" },
      { day: 5, title: "Edfu → Luxor", description: "Visit Edfu Temple in the morning. Continue sailing toward Luxor with lunch on board. In the evening, explore the majestic Luxor Temple.", highlights: ["Edfu Temple", "Luxor Temple"], meals: ["breakfast", "lunch", "dinner"], stay: "Nile Cruise" },
      { day: 6, title: "Luxor → Cairo", description: "Early breakfast before visiting the Valley of the Kings, Temple of Hatshepsut, Colossi of Memnon, and Karnak Temple. Transfer to Luxor airport for a flight back to Cairo. Evening leisure/shopping.", highlights: ["Valley of the Kings", "Karnak Temple"], meals: ["breakfast"], stay: "Cairo" },
      { day: 7, title: "Cairo → Departure", description: "Breakfast and check-out. Enjoy free time for optional shopping depending on your flight schedule before your airport transfer for departure.", highlights: ["Departure"], meals: ["breakfast"], stay: "N/A" }
    ]
  },
  {
    id: "pkg-srilanka",
    slug: "sri-lanka-5d4n",
    name: "Sri Lanka — Island Escape",
    tagline: "Experience the lush green hills, culture, and pristine beaches of Sri Lanka.",
    category: ["international", "asia", "family", "honeymoon"],
    featured: true,
    heroImage: "https://images.unsplash.com/photo-1586224388874-8848db2cc25c?w=1200&q=80&fm=webp",
    galleryImages: [
      "https://images.unsplash.com/photo-1544473244-f6895e69da8a?w=1200&q=80&fm=webp",
      "https://images.unsplash.com/photo-1536697246787-1f7ae568d89d?w=1200&q=80&fm=webp"
    ],
    destination: "Sri Lanka",
    country: "Sri Lanka",
    duration: { days: 5, nights: 4 },
    priceFrom: 24999,
    maxGroupSize: 15,
    highlights: ["Pinnawala Elephant Orphanage", "Temple of the Tooth", "Tea plantation", "Nine Arch Bridge", "Galle Fort"],
    includes: ["Accommodation", "Daily Breakfast", "Airport Transfers"],
    excludes: ["Flights", "Visas", "Personal Expenses"],
    seasons: ["All Year"],
    rating: 4.8,
    reviewCount: 124,
    itinerary: [
      { day: 1, title: "Airport → Kandy", description: "Receive a warm welcome at the airport and head to the Pinnawala Elephant Orphanage. Later, enjoy Kandy sightseeing including the sacred Temple of the Tooth before checking in for the night.", highlights: ["Pinnawala Elephant Orphanage", "Temple of the Tooth"], meals: [], stay: "Kandy" },
      { day: 2, title: "Kandy → Nuwara Eliya → Ella", description: "After breakfast, visit a lush tea plantation and factory. Explore Nuwara Eliya before embarking on a breathtakingly scenic train journey toward Ella.", highlights: ["Tea plantation", "Scenic train journey"], meals: ["breakfast"], stay: "Ella" },
      { day: 3, title: "Ella", description: "Start the day with breakfast and head to the famous Nine Arch Bridge. Hike Little Adam's Peak for panoramic views, visit Ravana Falls, and enjoy a leisurely evening.", highlights: ["Nine Arch Bridge", "Little Adam's Peak", "Ravana Falls"], meals: ["breakfast"], stay: "Ella" },
      { day: 4, title: "Ella → Galle → Colombo", description: "Drive to Galle to explore the historic Galle Fort and beautiful beaches. Later, proceed to Colombo for city sightseeing.", highlights: ["Galle Fort", "Colombo sightseeing"], meals: ["breakfast"], stay: "Colombo" },
      { day: 5, title: "Colombo → Airport", description: "Enjoy your final breakfast and some leisure/shopping time in Colombo depending on your flight schedule before your airport transfer.", highlights: ["Leisure shopping", "Airport transfer"], meals: ["breakfast"], stay: "N/A" }
    ]
  },
  {
    id: "pkg-thai-bkk-pat",
    slug: "thailand-bangkok-pattaya",
    name: "Thailand — Bangkok & Pattaya",
    tagline: "Vibrant city life meets stunning coral islands in this classic Thailand getaway.",
    category: ["international", "asia", "family", "luxury"],
    featured: true,
    heroImage: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=1200&q=80&fm=webp",
    galleryImages: [
      "https://images.unsplash.com/photo-1508009603885-247a53f4146f?w=1200&q=80&fm=webp"
    ],
    destination: "Bangkok & Pattaya",
    country: "Thailand",
    duration: { days: 5, nights: 4 },
    priceFrom: 29999,
    maxGroupSize: 15,
    highlights: ["Coral Island Tour", "Walking Street", "Grand Palace Area", "Golden Buddha", "Wat Arun"],
    includes: ["Accommodation", "Daily Breakfast", "Airport Transfers"],
    excludes: ["Flights", "Visas", "Personal Expenses"],
    seasons: ["All Year"],
    rating: 4.7,
    reviewCount: 201,
    itinerary: [
      { day: 1, title: "Bangkok → Pattaya", description: "Arrive in Bangkok and get transferred straight to the coastal paradise of Pattaya. Check in to your hotel and spend the evening at leisure.", highlights: ["Transfer to Pattaya"], meals: [], stay: "Pattaya" },
      { day: 2, title: "Coral Island", description: "After breakfast, embark on a vibrant Coral Island tour with thrilling beach activities. Return to Pattaya to explore the famous Walking Street.", highlights: ["Coral Island tour", "Walking Street"], meals: ["breakfast"], stay: "Pattaya" },
      { day: 3, title: "Pattaya → Bangkok", description: "Transfer to Bangkok and dive into city sightseeing around the magnificent Wat Arun / Wat Pho area. End the day with some shopping.", highlights: ["Wat Arun", "Bangkok sightseeing"], meals: ["breakfast"], stay: "Bangkok" },
      { day: 4, title: "Bangkok", description: "Visit the Grand Palace area and the majestic Golden Buddha. Spend the afternoon shopping at local markets and malls.", highlights: ["Grand Palace", "Golden Buddha"], meals: ["breakfast"], stay: "Bangkok" },
      { day: 5, title: "Bangkok → Airport", description: "Check-out after breakfast and transfer to the airport with incredible memories of Thailand.", highlights: ["Airport transfer"], meals: ["breakfast"], stay: "N/A" }
    ]
  },
  {
    id: "pkg-thai-phu-kra",
    slug: "thailand-phuket-krabi",
    name: "Thailand — Phuket & Krabi",
    tagline: "Turquoise waters, island hopping, and tropical paradise.",
    category: ["international", "asia", "honeymoon", "adventure"],
    featured: true,
    heroImage: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=1200&q=80&fm=webp",
    galleryImages: [
      "https://images.unsplash.com/photo-1512273222628-4daea6e55f4c?w=1200&q=80&fm=webp"
    ],
    destination: "Phuket & Krabi",
    country: "Thailand",
    duration: { days: 5, nights: 4 },
    priceFrom: 34999,
    maxGroupSize: 15,
    highlights: ["Big Buddha", "Phi Phi Island", "Maya Bay", "Krabi 4-Island Tour"],
    includes: ["Accommodation", "Daily Breakfast", "Airport Transfers"],
    excludes: ["Flights", "Visas", "Personal Expenses"],
    seasons: ["All Year"],
    rating: 4.9,
    reviewCount: 312,
    itinerary: [
      { day: 1, title: "Phuket Arrival", description: "Arrive in Phuket. Enjoy a city sightseeing tour featuring the iconic Big Buddha and panoramic viewpoints before an evening at leisure.", highlights: ["Big Buddha", "Phuket Sightseeing"], meals: [], stay: "Phuket" },
      { day: 2, title: "Phi Phi Island", description: "Set off on a full-day Phi Phi Island tour. Explore Maya Bay, Pileh Lagoon, and enjoy world-class snorkelling.", highlights: ["Maya Bay", "Pileh Lagoon"], meals: ["breakfast"], stay: "Phuket" },
      { day: 3, title: "Phuket → Krabi", description: "Transfer to Krabi after breakfast. Check into your hotel near Ao Nang Beach and relax by the sea.", highlights: ["Ao Nang Beach", "Transfer to Krabi"], meals: ["breakfast"], stay: "Krabi" },
      { day: 4, title: "Krabi 4-Island Tour", description: "Embark on the famous Krabi Four Islands tour visiting Chicken Island, Tup Island, Poda Island, and the beautiful Phra Nang Beach.", highlights: ["Krabi Four Islands", "Phra Nang Beach"], meals: ["breakfast"], stay: "Krabi" },
      { day: 5, title: "Krabi → Airport", description: "Enjoy your final morning before checking out and transferring to the airport.", highlights: ["Airport transfer"], meals: ["breakfast"], stay: "N/A" }
    ]
  },
  {
    id: "pkg-bali",
    slug: "bali-5d4n",
    name: "Bali — Island of the Gods",
    tagline: "Volcanoes, rice terraces, clifftop temples, and untouched beaches.",
    category: ["international", "asia", "honeymoon", "luxury"],
    featured: true,
    heroImage: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=1200&q=80&fm=webp",
    galleryImages: [
      "https://images.unsplash.com/photo-1558862107-d49ef2a04d72?w=1200&q=80&fm=webp"
    ],
    destination: "Bali",
    country: "Indonesia",
    duration: { days: 5, nights: 4 },
    priceFrom: 32999,
    maxGroupSize: 12,
    highlights: ["Tegalalang Rice Terrace", "Nusa Penida", "Uluwatu Temple", "Kecak Dance"],
    includes: ["Accommodation", "Daily Breakfast", "Airport Transfers", "Island Tours"],
    excludes: ["Flights", "Visas", "Personal Expenses"],
    seasons: ["All Year"],
    rating: 4.9,
    reviewCount: 450,
    itinerary: [
      { day: 1, title: "Bali Arrival", description: "Airport pickup, hotel check-in, Kuta/Seminyak sightseeing, and a relaxing beach sunset to begin your getaway.", highlights: ["Beach sunset"], meals: [], stay: "Bali" },
      { day: 2, title: "Ubud + Kintamani", description: "Visit Tegenungan Waterfall, Tegalalang Rice Terrace, the majestic Kintamani volcano viewpoint, and a local coffee plantation.", highlights: ["Tegalalang Rice Terrace", "Kintamani volcano"], meals: ["breakfast"], stay: "Bali" },
      { day: 3, title: "Nusa Penida", description: "Full-day Nusa Penida tour including Kelingking Beach, Broken Beach, Angel's Billabong, and Crystal Bay.", highlights: ["Nusa Penida", "Kelingking Beach"], meals: ["breakfast"], stay: "Bali" },
      { day: 4, title: "Uluwatu", description: "Enjoy water activities or leisure time in the morning. Later, visit Uluwatu Temple, watch the traditional Kecak Dance, and dine at Jimbaran Beach.", highlights: ["Uluwatu Temple", "Kecak Dance"], meals: ["breakfast"], stay: "Bali" },
      { day: 5, title: "Bali → Airport", description: "Check-out, enjoy some last-minute shopping, and transfer to the airport.", highlights: ["Airport transfer"], meals: ["breakfast"], stay: "N/A" }
    ]
  },
  {
    id: "pkg-malaysia",
    slug: "malaysia-kuala-lumpur",
    name: "Malaysia — Kuala Lumpur Explorer",
    tagline: "Experience the ultimate mix of heritage and modern city life.",
    category: ["international", "asia", "family", "corporate"],
    featured: true,
    heroImage: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=1200&q=80&fm=webp",
    galleryImages: [
      "https://images.unsplash.com/photo-1542104928-8bdf1b3562a1?w=1200&q=80&fm=webp"
    ],
    destination: "Kuala Lumpur",
    country: "Malaysia",
    duration: { days: 5, nights: 4 },
    priceFrom: 29999,
    maxGroupSize: 15,
    highlights: ["Petronas Twin Towers", "Batu Caves", "Genting Highlands", "Putrajaya"],
    includes: ["Accommodation", "Daily Breakfast", "Airport Transfers"],
    excludes: ["Flights", "Visas", "Personal Expenses"],
    seasons: ["All Year"],
    rating: 4.7,
    reviewCount: 180,
    itinerary: [
      { day: 1, title: "Kuala Lumpur Arrival", description: "Arrive in KL, check in to your hotel, and start with an orientation tour featuring a photo stop at the Petronas Twin Towers and exploring Bukit Bintang.", highlights: ["Petronas Twin Towers", "Bukit Bintang"], meals: [], stay: "Kuala Lumpur" },
      { day: 2, title: "Batu Caves + Genting Highlands", description: "Visit the iconic Batu Caves followed by a trip to the Genting Highlands including a scenic cable car ride.", highlights: ["Batu Caves", "Genting Highlands"], meals: ["breakfast"], stay: "Kuala Lumpur" },
      { day: 3, title: "Kuala Lumpur City Tour", description: "Explore Merdeka Square, King's Palace, National Monument, Petronas Twin Towers, and Chinatown, followed by shopping.", highlights: ["Merdeka Square", "Chinatown"], meals: ["breakfast"], stay: "Kuala Lumpur" },
      { day: 4, title: "Putrajaya + Shopping", description: "Discover the architectural wonders of Putrajaya and spend the afternoon shopping and enjoying a leisurely evening.", highlights: ["Putrajaya sightseeing", "Shopping"], meals: ["breakfast"], stay: "Kuala Lumpur" },
      { day: 5, title: "Kuala Lumpur → Airport", description: "Check out of your hotel and transfer to the airport.", highlights: ["Airport transfer"], meals: ["breakfast"], stay: "N/A" }
    ]
  },
  {
    id: "pkg-singapore",
    slug: "singapore-5d4n",
    name: "Singapore — The Lion City",
    tagline: "Futuristic gardens, thrilling theme parks, and unparalleled luxury.",
    category: ["international", "asia", "family", "luxury"],
    featured: true,
    heroImage: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=1200&q=80&fm=webp",
    galleryImages: [
      "https://images.unsplash.com/photo-1565809756187-57321557088b?w=1200&q=80&fm=webp"
    ],
    destination: "Singapore",
    country: "Singapore",
    duration: { days: 5, nights: 4 },
    priceFrom: 49999,
    maxGroupSize: 15,
    highlights: ["Marina Bay", "Gardens by the Bay", "Sentosa Island", "Universal Studios"],
    includes: ["Accommodation", "Daily Breakfast", "Airport Transfers"],
    excludes: ["Flights", "Visas", "Personal Expenses"],
    seasons: ["All Year"],
    rating: 4.9,
    reviewCount: 420,
    itinerary: [
      { day: 1, title: "Singapore Arrival", description: "Airport pickup and hotel check-in. Explore the Marina Bay area, Merlion Park, and Gardens by the Bay.", highlights: ["Marina Bay", "Merlion Park", "Gardens by the Bay"], meals: [], stay: "Singapore" },
      { day: 2, title: "Singapore City Tour + Sentosa", description: "Enjoy a city tour covering Chinatown and Little India. Later, head to Sentosa Island for a cable car ride and select attractions.", highlights: ["Chinatown", "Sentosa Island"], meals: ["breakfast"], stay: "Singapore" },
      { day: 3, title: "Universal Studios", description: "Experience a full day of thrills and entertainment at Universal Studios Singapore.", highlights: ["Universal Studios Singapore"], meals: ["breakfast"], stay: "Singapore" },
      { day: 4, title: "Singapore Shopping & Leisure", description: "Visit the spectacular Jewel Changi, shop along Orchard Road, and spend the evening at the Marina Bay Sands area.", highlights: ["Jewel Changi", "Orchard Road"], meals: ["breakfast"], stay: "Singapore" },
      { day: 5, title: "Singapore → Airport", description: "Check out of your hotel and transfer to the airport.", highlights: ["Airport transfer"], meals: ["breakfast"], stay: "N/A" }
    ]
  },
  {
    id: "pkg-dubai",
    slug: "dubai-5d4n",
    name: "Dubai — Oasis of Luxury",
    tagline: "Experience towering skylines, premium desert safaris, and Arabian hospitality.",
    category: ["international", "luxury", "family", "honeymoon"],
    featured: true,
    heroImage: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1200&q=80&fm=webp",
    galleryImages: [
      "https://images.unsplash.com/photo-1518684079-3c830dcef090?w=1200&q=80&fm=webp"
    ],
    destination: "Dubai",
    country: "United Arab Emirates",
    duration: { days: 5, nights: 4 },
    priceFrom: 44999,
    maxGroupSize: 15,
    highlights: ["Marina Dhow Cruise", "Burj Al Arab", "Desert Safari", "Abu Dhabi Grand Mosque"],
    includes: ["Accommodation", "Daily Breakfast", "Airport Transfers"],
    excludes: ["Flights", "Visas", "Personal Expenses"],
    seasons: ["All Year"],
    rating: 4.8,
    reviewCount: 380,
    itinerary: [
      { day: 1, title: "Dubai Arrival", description: "Airport pickup and hotel check-in. In the evening, enjoy a memorable Marina Dhow Cruise complete with a delicious dinner.", highlights: ["Marina Dhow Cruise"], meals: ["dinner"], stay: "Dubai" },
      { day: 2, title: "Dubai City Tour", description: "Discover Dubai with a city tour. Stop at Jumeirah Mosque, Burj Al Arab, Palm Jumeirah, and Atlantis. End the day watching the stunning Dubai Mall & Fountain Show.", highlights: ["Burj Al Arab", "Palm Jumeirah", "Fountain Show"], meals: ["breakfast"], stay: "Dubai" },
      { day: 3, title: "Desert Safari", description: "Spend your morning at leisure. In the afternoon, embark on a Premium Desert Safari featuring dune bashing, a camel ride, live entertainment, and a BBQ dinner under the stars.", highlights: ["Premium Desert Safari", "Dune bashing", "BBQ dinner"], meals: ["breakfast", "dinner"], stay: "Dubai" },
      { day: 4, title: "Abu Dhabi", description: "Take a full-day tour to Abu Dhabi. Visit the magnificent Sheikh Zayed Grand Mosque, Corniche, and take photo stops at Emirates Palace and Ferrari World.", highlights: ["Sheikh Zayed Grand Mosque", "Emirates Palace"], meals: ["breakfast"], stay: "Dubai" },
      { day: 5, title: "Dubai → Airport", description: "Enjoy your final morning shopping or relaxing before checking out and transferring to the airport.", highlights: ["Airport transfer"], meals: ["breakfast"], stay: "N/A" }
    ]
  },
  
  // ─── EXISTING ITINERARIES ────────────────────────────────────────────────
  {
    id: "pkg-010",
    slug: "south-africa-explorer",
    name: "South Africa Explorer",
    tagline: "Cape Town & Big Five Safari",
    category: ["international", "africa", "adventure"],
    featured: true,
    heroImage: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=1200&q=80&fm=webp",
    galleryImages: [
      "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1200&q=80&fm=webp"
    ],
    destination: "Cape Town & Safari",
    country: "South Africa",
    duration: { days: 6, nights: 5 },
    priceFrom: 139999,
    maxGroupSize: 12,
    highlights: ["Table Mountain", "Cape Peninsula", "Big Five Safari", "Boulders Beach Penguins"],
    includes: ["Accommodation", "Daily Breakfast", "Safari Game Drives", "Airport Transfers"],
    excludes: ["International Flights", "Visas", "Personal Expenses"],
    seasons: ["All Year"],
    rating: 4.8,
    reviewCount: 95,
    itinerary: [
      { day: 1, title: "Arrive Cape Town", description: "Airport pickup, hotel check-in, city orientation, V&A Waterfront.", highlights: ["V&A Waterfront"], meals: [], stay: "Cape Town" },
      { day: 2, title: "Table Mountain + City", description: "Table Mountain cable car (weather permitting), Company's Garden, Bo-Kaap, Greenmarket Square.", highlights: ["Table Mountain", "Bo-Kaap"], meals: ["breakfast"], stay: "Cape Town" },
      { day: 3, title: "Cape Peninsula", description: "Camps Bay, Hout Bay, Chapman’s Peak, Cape Point, and Boulders Beach penguin colony.", highlights: ["Cape Point", "Boulders Beach Penguins"], meals: ["breakfast"], stay: "Cape Town" },
      { day: 4, title: "Cape Town → Safari", description: "Transfer toward safari area, afternoon/evening game drive looking for the Big Five.", highlights: ["Big Five Safari"], meals: ["breakfast", "dinner"], stay: "Safari Lodge" },
      { day: 5, title: "Full-Day Safari", description: "Early morning game drive, afternoon game drive, and sunset safari.", highlights: ["Game Drives"], meals: ["breakfast", "lunch", "dinner"], stay: "Safari Lodge" },
      { day: 6, title: "Safari → Airport", description: "Morning game drive, check-out, transfer to airport.", highlights: ["Morning Safari"], meals: ["breakfast"], stay: "N/A" }
    ]
  },
  {
    id: "pkg-018",
    slug: "south-korea-seoul",
    name: "South Korea — Seoul + Nami Island",
    tagline: "Seoul, Nami Island, K-Culture & Shopping",
    category: ["international", "asia", "south-korea", "family", "honeymoon"],
    featured: true,
    heroImage: "https://images.unsplash.com/photo-1538485399081-7191377e8241?w=1200&q=80&fm=webp",
    galleryImages: [
      "https://images.unsplash.com/photo-1538485399081-7191377e8241?w=1200&q=80&fm=webp"
    ],
    destination: "Seoul & Nami Island",
    country: "South Korea",
    duration: { days: 6, nights: 5 },
    priceFrom: 69999,
    maxGroupSize: 12,
    highlights: ["Gyeongbokgung Palace", "Nami Island", "Myeongdong", "DMZ Tour"],
    includes: ["Accommodation", "Daily Breakfast", "Tours", "Transfers"],
    excludes: ["International Flights", "Visas", "Personal Expenses"],
    seasons: ["Mar - Nov"],
    rating: 4.85,
    reviewCount: 120,
    itinerary: [
      { day: 1, title: "Seoul Arrival", description: "Airport pickup, Myeongdong, N Seoul Tower area.", highlights: ["N Seoul Tower"], meals: [], stay: "Seoul" },
      { day: 2, title: "Seoul City", description: "Gyeongbokgung Palace, Bukchon Hanok Village, Insadong, Cheonggyecheon Stream.", highlights: ["Gyeongbokgung Palace", "Bukchon Hanok Village"], meals: ["breakfast"], stay: "Seoul" },
      { day: 3, title: "Nami Island + Gapyeong", description: "Nami Island, Garden of Morning Calm, Optional rail bike.", highlights: ["Nami Island", "Garden of Morning Calm"], meals: ["breakfast"], stay: "Seoul" },
      { day: 4, title: "Seoul Modern Experience", description: "Gangnam, COEX, Starfield Library, Han River, Hongdae.", highlights: ["Gangnam", "Starfield Library"], meals: ["breakfast"], stay: "Seoul" },
      { day: 5, title: "Seoul", description: "DMZ tour (subject to availability) or alternative Seoul experience, shopping.", highlights: ["DMZ Tour", "Shopping"], meals: ["breakfast"], stay: "Seoul" },
      { day: 6, title: "Seoul → Airport", description: "Check-out, airport transfer.", highlights: ["Airport Transfer"], meals: ["breakfast"], stay: "N/A" }
    ]
  }
];

export const PACKAGE_CATEGORIES = [
  { id: "all", label: "All Packages" },
  { id: "asia", label: "🌏 Asia" },
  { id: "europe", label: "🇪🇺 Europe" },
  { id: "africa", label: "🌍 Africa" },
  { id: "china", label: "🇨🇳 China" },
  { id: "japan", label: "🇯🇵 Japan" },
  { id: "south-korea", label: "🇰🇷 South Korea" },
  { id: "international", label: "International" },
  { id: "luxury", label: "Luxury" },
  { id: "family", label: "Family" },
  { id: "honeymoon", label: "Honeymoon" }
];

export function getFeaturedPackages() {
  return PACKAGES.filter((p) => p.featured);
}
