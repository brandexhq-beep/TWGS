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
  | "solo"
  | "domestic"
  | "india"
  | "nepal"
  | "bhutan"
  | "pilgrimage";

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
    heroImage: "/images/srilanka-hero.webp",
    galleryImages: [
      "/images/srilanka-gallery-1.webp",
      "/images/srilanka-gallery-2.webp"
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
  
  // ─── EUROPEAN ITINERARIES ────────────────────────────────────────────────
  {
    id: "pkg-iceland",
    slug: "iceland-6d5n",
    name: "Iceland — Fire & Ice",
    tagline: "Northern Lights, Glaciers & The Blue Lagoon",
    category: ["international", "europe", "adventure", "luxury"],
    featured: true,
    heroImage: "/images/iceland-fire-ice.webp",
    galleryImages: [],
    destination: "Iceland",
    country: "Iceland",
    duration: { days: 6, nights: 5 },
    priceFrom: 149999,
    maxGroupSize: 12,
    highlights: ["Northern Lights", "Golden Circle", "Black Sand Beach", "Blue Lagoon"],
    includes: ["Accommodation", "Breakfast", "Northern Lights Tour", "Airport Transfers"],
    excludes: ["International Flights", "Visas"],
    seasons: ["Winter", "Autumn", "Spring"],
    rating: 4.9,
    reviewCount: 110,
    itinerary: [
      { day: 1, title: "Arrival in Reykjavik", description: "Airport pickup, transfer to Reykjavik, and hotel check-in. Explore Hallgrímskirkja Church and Harpa Concert Hall on a city walk.", highlights: ["Reykjavik city walk"], meals: [], stay: "Reykjavik" },
      { day: 2, title: "Golden Circle", description: "Visit Thingvellir National Park, Geysir geothermal area, Gullfoss Waterfall, and Kerid Crater. Evening Northern Lights tour depending on season/weather.", highlights: ["Golden Circle", "Northern Lights"], meals: ["breakfast"], stay: "Reykjavik" },
      { day: 3, title: "South Coast", description: "Marvel at Seljalandsfoss and Skógafoss waterfalls. Walk on Reynisfjara Black Sand Beach and see Dyrhólaey.", highlights: ["Black Sand Beach", "Skógafoss"], meals: ["breakfast"], stay: "South Iceland / Vik" },
      { day: 4, title: "Glacier & Lagoon", description: "Explore the Skaftafell area, Diamond Beach, and Jökulsárlón Glacier Lagoon with stunning glacier views.", highlights: ["Jökulsárlón Glacier Lagoon", "Diamond Beach"], meals: ["breakfast"], stay: "South Iceland" },
      { day: 5, title: "Blue Lagoon + Reykjavik", description: "Relax at the famous Blue Lagoon, then return to Reykjavik for shopping and a leisure evening.", highlights: ["Blue Lagoon"], meals: ["breakfast"], stay: "Reykjavik" },
      { day: 6, title: "Departure", description: "Check-out from hotel and take your airport transfer for departure.", highlights: ["Departure"], meals: ["breakfast"], stay: "N/A" }
    ]
  },
  {
    id: "pkg-switzerland",
    slug: "switzerland-6d5n",
    name: "Switzerland — Alpine Wonders",
    tagline: "Lucerne, Interlaken & Jungfraujoch",
    category: ["international", "europe", "honeymoon", "family", "luxury"],
    featured: true,
    heroImage: "/images/switzerland-alpine.webp",
    galleryImages: [],
    destination: "Lucerne & Interlaken",
    country: "Switzerland",
    duration: { days: 6, nights: 5 },
    priceFrom: 129999,
    maxGroupSize: 15,
    highlights: ["Jungfraujoch", "Mt. Titlis", "Lucerne Chapel Bridge", "Lake Brienz"],
    includes: ["Accommodation", "Breakfast", "Swiss Travel Pass", "Mountain Excursions"],
    excludes: ["International Flights", "Visas"],
    seasons: ["All Year"],
    rating: 4.9,
    reviewCount: 220,
    itinerary: [
      { day: 1, title: "Arrival in Zurich → Lucerne", description: "Arrive in Zurich and take a scenic train to Lucerne. Enjoy a walking tour of the Chapel Bridge and Lion Monument.", highlights: ["Chapel Bridge"], meals: [], stay: "Lucerne" },
      { day: 2, title: "Mount Titlis Excursion", description: "Full-day excursion to Mount Titlis via Engelberg. Experience the Rotair revolving cable car and the Cliff Walk.", highlights: ["Mt. Titlis"], meals: ["breakfast"], stay: "Lucerne" },
      { day: 3, title: "Lucerne → Interlaken", description: "Travel by train to Interlaken. Spend the afternoon taking a boat cruise on Lake Thun or Lake Brienz.", highlights: ["Lake Cruise"], meals: ["breakfast"], stay: "Interlaken" },
      { day: 4, title: "Jungfraujoch - Top of Europe", description: "A breathtaking train journey to Jungfraujoch, the highest railway station in Europe. Marvel at the Aletsch Glacier and Ice Palace.", highlights: ["Jungfraujoch"], meals: ["breakfast"], stay: "Interlaken" },
      { day: 5, title: "Grindelwald & Leisure", description: "Visit the picturesque village of Grindelwald. Optional adventure activities or simply enjoy the Alpine views and shopping.", highlights: ["Grindelwald"], meals: ["breakfast"], stay: "Interlaken" },
      { day: 6, title: "Departure", description: "Check-out and transfer to Zurich Airport for your departure flight.", highlights: ["Departure"], meals: ["breakfast"], stay: "N/A" }
    ]
  },
  {
    id: "pkg-italy",
    slug: "italy-6d5n",
    name: "Italy — Roman Holiday",
    tagline: "Rome, Florence & Venice",
    category: ["international", "europe", "honeymoon", "family"],
    featured: true,
    heroImage: "https://images.unsplash.com/photo-1520175480921-4edfa2983e0f?w=1200&q=80&fm=webp",
    galleryImages: [],
    destination: "Rome, Florence & Venice",
    country: "Italy",
    duration: { days: 6, nights: 5 },
    priceFrom: 119999,
    maxGroupSize: 15,
    highlights: ["Colosseum", "Vatican City", "Leaning Tower of Pisa", "Gondola Ride"],
    includes: ["Accommodation", "Breakfast", "High-speed Trains", "City Tours"],
    excludes: ["International Flights", "Visas"],
    seasons: ["Spring", "Autumn", "Summer"],
    rating: 4.8,
    reviewCount: 185,
    itinerary: [
      { day: 1, title: "Rome Arrival", description: "Arrival in Rome. Transfer to your hotel. Evening walk to the Trevi Fountain and Spanish Steps.", highlights: ["Trevi Fountain"], meals: [], stay: "Rome" },
      { day: 2, title: "Ancient Rome & Vatican", description: "Skip-the-line tour of the Colosseum and Roman Forum. Afternoon visit to the Vatican Museums and Sistine Chapel.", highlights: ["Colosseum", "Vatican"], meals: ["breakfast"], stay: "Rome" },
      { day: 3, title: "Rome → Florence", description: "Take the high-speed train to Florence. Visit the Duomo, Piazza della Signoria, and Ponte Vecchio.", highlights: ["Florence Duomo"], meals: ["breakfast"], stay: "Florence" },
      { day: 4, title: "Pisa Excursion", description: "Half-day trip to Pisa to see the iconic Leaning Tower and the Square of Miracles. Return to Florence.", highlights: ["Leaning Tower of Pisa"], meals: ["breakfast"], stay: "Florence" },
      { day: 5, title: "Florence → Venice", description: "Train to Venice. Experience the magical canals with a classic Gondola ride. Visit St. Mark's Square.", highlights: ["Gondola Ride"], meals: ["breakfast"], stay: "Venice" },
      { day: 6, title: "Departure", description: "Transfer to Venice Marco Polo Airport via water taxi for your departure.", highlights: ["Departure"], meals: ["breakfast"], stay: "N/A" }
    ]
  },
  {
    id: "pkg-france",
    slug: "france-5d4n",
    name: "France — Paris & Romance",
    tagline: "Eiffel Tower, Louvre & Seine Cruise",
    category: ["international", "europe", "honeymoon", "luxury"],
    featured: true,
    heroImage: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&q=80&fm=webp",
    galleryImages: [],
    destination: "Paris",
    country: "France",
    duration: { days: 5, nights: 4 },
    priceFrom: 99999,
    maxGroupSize: 15,
    highlights: ["Eiffel Tower", "Louvre Museum", "Seine River Cruise", "Palace of Versailles"],
    includes: ["Accommodation", "Breakfast", "Sightseeing", "Transfers"],
    excludes: ["International Flights", "Visas"],
    seasons: ["All Year"],
    rating: 4.8,
    reviewCount: 150,
    itinerary: [
      { day: 1, title: "Paris Arrival", description: "Welcome to Paris! Private transfer to your hotel. Relax and enjoy an evening Seine River Cruise.", highlights: ["Seine River Cruise"], meals: [], stay: "Paris" },
      { day: 2, title: "Eiffel Tower & City Tour", description: "City tour including Champs-Élysées, Arc de Triomphe, and priority access to the Eiffel Tower.", highlights: ["Eiffel Tower"], meals: ["breakfast"], stay: "Paris" },
      { day: 3, title: "Louvre & Montmartre", description: "Morning visit to the Louvre Museum to see the Mona Lisa. Afternoon walking tour of the artistic Montmartre and Sacré-Cœur.", highlights: ["Louvre Museum", "Montmartre"], meals: ["breakfast"], stay: "Paris" },
      { day: 4, title: "Palace of Versailles", description: "Half-day excursion to the opulent Palace of Versailles and its magnificent gardens. Evening at leisure for shopping.", highlights: ["Palace of Versailles"], meals: ["breakfast"], stay: "Paris" },
      { day: 5, title: "Departure", description: "Enjoy a final French breakfast before transferring to the airport for your flight home.", highlights: ["Departure"], meals: ["breakfast"], stay: "N/A" }
    ]
  },
  {
    id: "pkg-greece",
    slug: "greece-6d5n",
    name: "Greece — Aegean Dream",
    tagline: "Athens & Santorini",
    category: ["international", "europe", "honeymoon", "luxury"],
    featured: true,
    heroImage: "https://images.unsplash.com/photo-1533105079780-92b9be482077?w=1200&q=80&fm=webp",
    galleryImages: [],
    destination: "Athens & Santorini",
    country: "Greece",
    duration: { days: 6, nights: 5 },
    priceFrom: 139999,
    maxGroupSize: 12,
    highlights: ["Acropolis", "Santorini Caldera", "Oia Sunset", "Volcano Boat Tour"],
    includes: ["Accommodation", "Breakfast", "Ferry Tickets", "Transfers"],
    excludes: ["International Flights", "Visas"],
    seasons: ["Spring", "Summer", "Autumn"],
    rating: 4.9,
    reviewCount: 95,
    itinerary: [
      { day: 1, title: "Athens Arrival", description: "Arrival in Athens. Transfer to hotel. Evening at leisure in the historic Plaka neighborhood.", highlights: ["Plaka"], meals: [], stay: "Athens" },
      { day: 2, title: "Athens City & Acropolis", description: "Guided tour of Athens, including the magnificent Acropolis, Parthenon, and the Acropolis Museum.", highlights: ["Acropolis"], meals: ["breakfast"], stay: "Athens" },
      { day: 3, title: "Athens → Santorini", description: "Take a fast ferry to the romantic island of Santorini. Transfer to your hotel and enjoy breathtaking caldera views.", highlights: ["Santorini Caldera"], meals: ["breakfast"], stay: "Santorini" },
      { day: 4, title: "Santorini Volcano & Hot Springs", description: "Boat tour to the volcanic islands, swim in the hot springs, and watch the world-famous sunset in Oia.", highlights: ["Oia Sunset"], meals: ["breakfast"], stay: "Santorini" },
      { day: 5, title: "Santorini Leisure", description: "Free day to explore the black sand beaches, visit local wineries, or simply relax by the Aegean Sea.", highlights: ["Leisure"], meals: ["breakfast"], stay: "Santorini" },
      { day: 6, title: "Departure", description: "Transfer to Santorini airport for your flight back home via Athens.", highlights: ["Departure"], meals: ["breakfast"], stay: "N/A" }
    ]
  },
  {
    id: "pkg-norway",
    slug: "norway-6d5n",
    name: "Norway — Fjords & Lights",
    tagline: "Oslo, Bergen & The Fjords",
    category: ["international", "europe", "adventure", "luxury"],
    featured: true,
    heroImage: "/images/norway-fjords.webp",
    galleryImages: [],
    destination: "Oslo & Bergen",
    country: "Norway",
    duration: { days: 6, nights: 5 },
    priceFrom: 159999,
    maxGroupSize: 12,
    highlights: ["Oslo City Tour", "Flåm Railway", "Nærøyfjord Cruise", "Bergen Bryggen"],
    includes: ["Accommodation", "Breakfast", "Norway in a Nutshell", "Transfers"],
    excludes: ["International Flights", "Visas"],
    seasons: ["Spring", "Summer", "Autumn"],
    rating: 4.8,
    reviewCount: 80,
    itinerary: [
      { day: 1, title: "Oslo Arrival", description: "Arrive in Oslo. Transfer to your hotel and explore the vibrant Aker Brygge area.", highlights: ["Aker Brygge"], meals: [], stay: "Oslo" },
      { day: 2, title: "Oslo Sightseeing", description: "Visit the Viking Ship Museum, Vigeland Sculpture Park, and the Royal Palace.", highlights: ["Vigeland Sculpture Park"], meals: ["breakfast"], stay: "Oslo" },
      { day: 3, title: "Oslo → Flåm", description: "Take the scenic train to Myrdal, then board the famous Flåm Railway down to the fjord village of Flåm.", highlights: ["Flåm Railway"], meals: ["breakfast"], stay: "Flåm" },
      { day: 4, title: "Fjord Cruise → Bergen", description: "Cruise the spectacular Nærøyfjord (UNESCO World Heritage). Continue by bus and train to Bergen.", highlights: ["Nærøyfjord Cruise"], meals: ["breakfast"], stay: "Bergen" },
      { day: 5, title: "Bergen City", description: "Explore the historic Bryggen wharf, the Fish Market, and take the funicular up Mt. Fløyen for panoramic views.", highlights: ["Bryggen"], meals: ["breakfast"], stay: "Bergen" },
      { day: 6, title: "Departure", description: "Transfer to Bergen Airport for your onward journey.", highlights: ["Departure"], meals: ["breakfast"], stay: "N/A" }
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
    id: "pkg-nepal",
    slug: "nepal-kathmandu-pokhara",
    name: "Nepal — Kathmandu & Pokhara",
    tagline: "Spiritual Temples & Himalayan Views",
    category: ["international", "nepal", "asia", "family", "adventure"],
    featured: true,
    heroImage: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=1200&q=80&fm=webp",
    galleryImages: ["https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=1200&q=80&fm=webp"],
    destination: "Kathmandu & Pokhara",
    country: "Nepal",
    duration: { days: 6, nights: 5 },
    priceFrom: 34999,
    maxGroupSize: 15,
    highlights: ["Pashupatinath Temple", "Swayambhunath Temple", "Phewa Lake", "Sarangkot Sunrise", "Kathmandu Durbar Square"],
    includes: ["Accommodation", "Daily Breakfast", "Sightseeing Tours", "Transfers"],
    excludes: ["Flights", "Visas", "Personal Expenses"],
    seasons: ["All Year"],
    rating: 4.8,
    reviewCount: 78,
    itinerary: [
      { day: 1, title: "Kathmandu Arrival", description: "Airport pickup, hotel check-in, visit Pashupatinath Temple and Boudhanath Stupa.", highlights: ["Pashupatinath Temple"], meals: [], stay: "Kathmandu" },
      { day: 2, title: "Kathmandu Heritage", description: "Swayambhunath Temple, Kathmandu Durbar Square, Patan Durbar Square, and local market exploration.", highlights: ["Swayambhunath", "Durbar Square"], meals: ["breakfast"], stay: "Kathmandu" },
      { day: 3, title: "Kathmandu → Pokhara", description: "Scenic drive to Pokhara. Check-in, followed by Phewa Lake boating and exploring Lakeside market.", highlights: ["Phewa Lake"], meals: ["breakfast"], stay: "Pokhara" },
      { day: 4, title: "Pokhara Wonders", description: "Early morning Sarangkot sunrise view. Visit Davis Falls, Gupteshwor Cave, and the International Mountain Museum.", highlights: ["Sarangkot Sunrise", "Davis Falls"], meals: ["breakfast"], stay: "Pokhara" },
      { day: 5, title: "Pokhara → Kathmandu", description: "Return drive to Kathmandu. Leisure and shopping at Thamel Market.", highlights: ["Thamel Market"], meals: ["breakfast"], stay: "Kathmandu" },
      { day: 6, title: "Departure", description: "Breakfast, followed by airport transfer.", highlights: ["Departure"], meals: ["breakfast"], stay: "N/A" }
    ]
  },
  {
    id: "pkg-kashmir",
    slug: "kashmir-paradise",
    name: "Jammu & Kashmir — Paradise on Earth",
    tagline: "Srinagar • Gulmarg • Pahalgam",
    category: ["domestic", "india", "honeymoon", "family", "luxury"],
    featured: true,
    heroImage: "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?w=1200&q=80&fm=webp",
    galleryImages: ["https://images.unsplash.com/photo-1595815771614-ade9d652a65d?w=1200&q=80&fm=webp"],
    destination: "Srinagar, Gulmarg & Pahalgam",
    country: "India",
    duration: { days: 6, nights: 5 },
    priceFrom: 29999,
    maxGroupSize: 15,
    highlights: ["Dal Lake Shikara Ride", "Gulmarg Gondola", "Mughal Gardens", "Betaab Valley"],
    includes: ["Accommodation", "Daily Breakfast", "Shikara Ride", "Transfers"],
    excludes: ["Flights", "Gondola Tickets", "Personal Expenses"],
    seasons: ["All Year"],
    rating: 4.9,
    reviewCount: 204,
    itinerary: [
      { day: 1, title: "Srinagar Arrival", description: "Airport pickup, houseboat or hotel check-in. Enjoy a Shikara ride on Dal Lake and visit Mughal Gardens.", highlights: ["Dal Lake", "Shikara ride"], meals: [], stay: "Srinagar" },
      { day: 2, title: "Gulmarg Day Trip", description: "Full-day trip to Gulmarg. Experience the Gondola ride (subject to operation) and snow activities.", highlights: ["Gulmarg Gondola"], meals: ["breakfast"], stay: "Srinagar" },
      { day: 3, title: "Srinagar → Pahalgam", description: "Drive to Pahalgam. En-route view apple orchards. Visit Betaab Valley and Aru Valley.", highlights: ["Betaab Valley"], meals: ["breakfast"], stay: "Pahalgam" },
      { day: 4, title: "Pahalgam Valley", description: "Leisure in the valley. Local sightseeing, optional horse riding or nature walks.", highlights: ["Pahalgam"], meals: ["breakfast"], stay: "Pahalgam" },
      { day: 5, title: "Pahalgam → Srinagar", description: "Return to Srinagar. Shopping and leisure by Dal Lake.", highlights: ["Shopping"], meals: ["breakfast"], stay: "Srinagar" },
      { day: 6, title: "Departure", description: "Breakfast and airport transfer.", highlights: ["Departure"], meals: ["breakfast"], stay: "N/A" }
    ]
  },
  {
    id: "pkg-manali",
    slug: "manali-kullu-escape",
    name: "Manali + Kullu Escape",
    tagline: "Snowy Peaks, Alpine Valleys & Solang Adventure",
    category: ["domestic", "india", "adventure", "family", "honeymoon"],
    featured: true,
    heroImage: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=1200&q=80&fm=webp",
    galleryImages: ["https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=1200&q=80&fm=webp"],
    destination: "Manali & Kullu",
    country: "India",
    duration: { days: 6, nights: 5 },
    priceFrom: 24999,
    maxGroupSize: 15,
    highlights: ["Solang Valley", "Hadimba Temple", "Kasol", "Manikaran Hot Springs"],
    includes: ["Accommodation", "Daily Breakfast", "Sightseeing Tours", "Transfers"],
    excludes: ["Flights", "Adventure Activities", "Personal Expenses"],
    seasons: ["All Year"],
    rating: 4.7,
    reviewCount: 130,
    itinerary: [
      { day: 1, title: "Arrival in Manali", description: "Pickup and hotel check-in. Visit Mall Road, Tibetan Monastery, and Hadimba Temple.", highlights: ["Hadimba Temple", "Mall Road"], meals: [], stay: "Manali" },
      { day: 2, title: "Solang Valley", description: "Full-day excursion to Solang Valley for snow activities. Optional visit to Atal Tunnel and Sissu (subject to conditions).", highlights: ["Solang Valley", "Atal Tunnel"], meals: ["breakfast"], stay: "Manali" },
      { day: 3, title: "Manali Local", description: "Explore Old Manali, Manu Temple, Vashisht Hot Springs, and enjoy river-side café experiences.", highlights: ["Old Manali", "Vashisht Hot Springs"], meals: ["breakfast"], stay: "Manali" },
      { day: 4, title: "Kullu + Manikaran", description: "Drive through Kullu Valley. Visit a shawl factory, the village of Kasol, and Manikaran Sahib hot springs.", highlights: ["Kullu Valley", "Manikaran Sahib"], meals: ["breakfast"], stay: "Manali" },
      { day: 5, title: "Manali Leisure", description: "Free day for shopping, café hopping, or optional adventure activities.", highlights: ["Leisure"], meals: ["breakfast"], stay: "Manali" },
      { day: 6, title: "Departure", description: "Check-out and transfer to airport or railway station.", highlights: ["Departure"], meals: ["breakfast"], stay: "N/A" }
    ]
  },
  {
    id: "pkg-rajasthan",
    slug: "royal-rajasthan",
    name: "Royal Rajasthan",
    tagline: "Jaipur • Jodhpur • Jaisalmer",
    category: ["domestic", "india", "luxury", "family", "corporate"],
    featured: true,
    heroImage: "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=1200&q=80&fm=webp",
    galleryImages: ["https://images.unsplash.com/photo-1477587458883-47145ed94245?w=1200&q=80&fm=webp"],
    destination: "Jaipur, Jodhpur & Jaisalmer",
    country: "India",
    duration: { days: 6, nights: 5 },
    priceFrom: 27999,
    maxGroupSize: 15,
    highlights: ["Amber Fort", "Mehrangarh Fort", "Jaisalmer Desert Camp", "Camel Safari"],
    includes: ["Accommodation", "Daily Breakfast", "Desert Camp Dinner", "Transfers"],
    excludes: ["Flights", "Monument Fees", "Personal Expenses"],
    seasons: ["Oct - Mar"],
    rating: 4.85,
    reviewCount: 165,
    itinerary: [
      { day: 1, title: "Jaipur Arrival", description: "Hotel check-in. Visit City Palace, Jantar Mantar, Hawa Mahal, and explore the local market.", highlights: ["Hawa Mahal", "City Palace"], meals: [], stay: "Jaipur" },
      { day: 2, title: "Jaipur Sightseeing", description: "Explore the majestic Amber Fort, take a Jal Mahal photo stop, visit Albert Hall Museum, and enjoy sunset at Nahargarh.", highlights: ["Amber Fort", "Nahargarh"], meals: ["breakfast"], stay: "Jaipur" },
      { day: 3, title: "Jaipur → Jodhpur", description: "Transfer to Jodhpur. Hotel check-in. Enjoy a heritage walk in the Blue City and visit Clock Tower Market.", highlights: ["Blue City walk"], meals: ["breakfast"], stay: "Jodhpur" },
      { day: 4, title: "Jodhpur → Jaisalmer", description: "Visit Mehrangarh Fort and Jaswant Thada. Drive to Jaisalmer and check into your hotel.", highlights: ["Mehrangarh Fort"], meals: ["breakfast"], stay: "Jaisalmer" },
      { day: 5, title: "Jaisalmer Desert", description: "Visit Jaisalmer Fort, Patwon Ki Haveli, and Gadisar Lake. Transfer to Sam Sand Dunes for a camel safari, sunset view, and a cultural evening with dinner.", highlights: ["Desert Camp", "Camel Safari"], meals: ["breakfast", "dinner"], stay: "Desert Camp" },
      { day: 6, title: "Departure", description: "Watch the desert sunrise, enjoy breakfast, check-out, and transfer to the airport or railway station.", highlights: ["Departure"], meals: ["breakfast"], stay: "N/A" }
    ]
  },
  {
    id: "pkg-bhutan",
    slug: "bhutan-himalayan-kingdom",
    name: "Bhutan — The Himalayan Kingdom",
    tagline: "Thimphu • Punakha • Paro",
    category: ["international", "bhutan", "asia", "luxury", "honeymoon"],
    featured: true,
    heroImage: "/images/bhutan-himalayan.webp",
    galleryImages: ["https://images.unsplash.com/photo-1582650507313-b545934c1143?w=1200&q=80&fm=webp"],
    destination: "Thimphu, Punakha & Paro",
    country: "Bhutan",
    duration: { days: 6, nights: 5 },
    priceFrom: 44999,
    maxGroupSize: 12,
    highlights: ["Tiger's Nest Monastery", "Punakha Dzong", "Buddha Dordenma", "Dochula Pass"],
    includes: ["Accommodation", "Daily Breakfast", "Bhutan SDF/Permits", "Transfers"],
    excludes: ["Flights", "Personal Expenses"],
    seasons: ["Spring", "Autumn"],
    rating: 4.95,
    reviewCount: 92,
    itinerary: [
      { day: 1, title: "Paro → Thimphu", description: "Airport pickup in Paro, transfer to Thimphu. Visit Buddha Dordenma, Memorial Chorten, and the exterior of Tashichho Dzong.", highlights: ["Buddha Dordenma"], meals: [], stay: "Thimphu" },
      { day: 2, title: "Thimphu", description: "Visit Motithang Takin Preserve, National Folk Heritage Museum, local markets, and a handicraft centre.", highlights: ["Takin Preserve"], meals: ["breakfast"], stay: "Thimphu" },
      { day: 3, title: "Thimphu → Punakha", description: "Drive via scenic Dochula Pass to view the 108 Druk Wangyal Chortens. Visit the stunning Punakha Dzong and the Suspension Bridge.", highlights: ["Dochula Pass", "Punakha Dzong"], meals: ["breakfast"], stay: "Punakha" },
      { day: 4, title: "Punakha → Paro", description: "Transfer to Paro. Visit Kyichu Lhakhang, explore Paro town, and enjoy local shopping.", highlights: ["Kyichu Lhakhang"], meals: ["breakfast"], stay: "Paro" },
      { day: 5, title: "Tiger's Nest", description: "Early breakfast followed by a hike to the iconic Tiger's Nest Monastery. Enjoy a traditional Bhutanese experience and explore Paro market.", highlights: ["Tiger's Nest Hike"], meals: ["breakfast", "lunch"], stay: "Paro" },
      { day: 6, title: "Departure", description: "Breakfast and airport transfer for your onward journey.", highlights: ["Departure"], meals: ["breakfast"], stay: "N/A" }
    ]
  },
  {
    id: "pkg-china",
    slug: "china-6d5n",
    name: "China Highlights",
    tagline: "Shanghai + Beijing",
    category: ["international", "asia", "china", "family", "luxury"],
    featured: true,
    heroImage: "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=1200&q=80&fm=webp",
    galleryImages: [],
    destination: "Shanghai & Beijing",
    country: "China",
    duration: { days: 6, nights: 5 },
    priceFrom: 69999,
    maxGroupSize: 15,
    highlights: ["The Bund", "Great Wall", "Forbidden City", "Temple of Heaven"],
    includes: ["Accommodation", "Breakfast", "High-speed train", "Airport Transfers"],
    excludes: ["International Flights", "Visas"],
    seasons: ["All Year"],
    rating: 4.8,
    reviewCount: 45,
    itinerary: [
      { day: 1, title: "Shanghai Arrival", description: "Airport pickup, hotel check-in. The Bund, Nanjing Road, Huangpu River evening view.", highlights: ["The Bund"], meals: [], stay: "Shanghai" },
      { day: 2, title: "Shanghai", description: "Yu Garden, Old City, Shanghai Museum / selected attraction, French Concession. Shanghai Tower optional.", highlights: ["Yu Garden"], meals: ["breakfast"], stay: "Shanghai" },
      { day: 3, title: "Shanghai → Beijing", description: "High-speed train to Beijing. Wangfujing Street, Tiananmen Square evening view.", highlights: ["High-speed train"], meals: ["breakfast"], stay: "Beijing" },
      { day: 4, title: "Great Wall", description: "Mutianyu Great Wall, Olympic Park photo stop.", highlights: ["Great Wall"], meals: ["breakfast"], stay: "Beijing" },
      { day: 5, title: "Beijing", description: "Forbidden City, Tiananmen Square, Temple of Heaven, Hutong experience.", highlights: ["Forbidden City"], meals: ["breakfast"], stay: "Beijing" },
      { day: 6, title: "Beijing → Airport", description: "Check-out, airport transfer.", highlights: ["Departure"], meals: ["breakfast"], stay: "N/A" }
    ]
  },
  {
    id: "pkg-south-korea",
    slug: "seoul-6d5n",
    name: "South Korea Discovery",
    tagline: "Seoul + Nami Island",
    category: ["international", "asia", "south-korea", "family"],
    featured: true,
    heroImage: "https://images.unsplash.com/photo-1538485399081-7191377e8241?w=1200&q=80&fm=webp",
    galleryImages: [],
    destination: "Seoul",
    country: "South Korea",
    duration: { days: 6, nights: 5 },
    priceFrom: 69999,
    maxGroupSize: 15,
    highlights: ["Gyeongbokgung Palace", "Nami Island", "Myeongdong", "N Seoul Tower"],
    includes: ["Accommodation", "Breakfast", "Airport Transfers", "Sightseeing"],
    excludes: ["International Flights", "Visas"],
    seasons: ["All Year"],
    rating: 4.8,
    reviewCount: 30,
    itinerary: [
      { day: 1, title: "Seoul Arrival", description: "Airport pickup, hotel check-in. Myeongdong, N Seoul Tower area.", highlights: ["Myeongdong"], meals: [], stay: "Seoul" },
      { day: 2, title: "Seoul City", description: "Gyeongbokgung Palace, Bukchon Hanok Village, Insadong, Cheonggyecheon Stream, Myeongdong street food.", highlights: ["Gyeongbokgung Palace"], meals: ["breakfast"], stay: "Seoul" },
      { day: 3, title: "Nami Island + Gapyeong", description: "Nami Island, Garden of Morning Calm, Optional rail bike.", highlights: ["Nami Island"], meals: ["breakfast"], stay: "Seoul" },
      { day: 4, title: "Seoul Modern Experience", description: "Gangnam, COEX, Starfield Library, Han River, Hongdae.", highlights: ["Gangnam"], meals: ["breakfast"], stay: "Seoul" },
      { day: 5, title: "Seoul", description: "DMZ tour* / alternative Seoul experience, Shopping, Korean beauty & fashion experience.", highlights: ["DMZ/Shopping"], meals: ["breakfast"], stay: "Seoul" },
      { day: 6, title: "Seoul → Airport", description: "Check-out, airport transfer.", highlights: ["Departure"], meals: ["breakfast"], stay: "N/A" }
    ]
  },
  {
    id: "pkg-japan",
    slug: "japan-6d5n",
    name: "Classic Japan",
    tagline: "Tokyo + Mt. Fuji + Kyoto",
    category: ["international", "asia", "japan", "family", "luxury"],
    featured: true,
    heroImage: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=1200&q=80&fm=webp",
    galleryImages: [],
    destination: "Tokyo & Kyoto",
    country: "Japan",
    duration: { days: 6, nights: 5 },
    priceFrom: 99999,
    maxGroupSize: 15,
    highlights: ["Shibuya Crossing", "Mt. Fuji", "Shinkansen", "Kinkaku-ji"],
    includes: ["Accommodation", "Breakfast", "Shinkansen experience", "Airport Transfers"],
    excludes: ["International Flights", "Visas"],
    seasons: ["All Year"],
    rating: 4.9,
    reviewCount: 55,
    itinerary: [
      { day: 1, title: "Tokyo Arrival", description: "Airport pickup, hotel check-in. Shibuya Crossing, Hachiko Statue, Shinjuku.", highlights: ["Shibuya Crossing"], meals: [], stay: "Tokyo" },
      { day: 2, title: "Tokyo City Tour", description: "Asakusa, Senso-ji Temple, Tokyo Skytree photo stop, Meiji Shrine, Harajuku, Ginza.", highlights: ["Senso-ji Temple"], meals: ["breakfast"], stay: "Tokyo" },
      { day: 3, title: "Mt. Fuji", description: "Mt. Fuji / Hakone excursion, Lake Kawaguchi, 5th Station (subject to conditions), Oshino Hakkai.", highlights: ["Mt. Fuji"], meals: ["breakfast"], stay: "Tokyo" },
      { day: 4, title: "Tokyo → Kyoto", description: "Shinkansen experience to Kyoto. Fushimi Inari Shrine, Gion.", highlights: ["Shinkansen", "Fushimi Inari"], meals: ["breakfast"], stay: "Kyoto" },
      { day: 5, title: "Kyoto", description: "Kinkaku-ji, Arashiyama Bamboo Grove, Togetsukyo Bridge, Kiyomizu-dera, Traditional streets.", highlights: ["Kinkaku-ji"], meals: ["breakfast"], stay: "Kyoto" },
      { day: 6, title: "Kyoto → Airport", description: "Transfer to Kansai/Osaka airport. Departure.", highlights: ["Departure"], meals: ["breakfast"], stay: "N/A" }
    ]
  },
  {
    id: "pkg-hk-mo",
    slug: "hk-macau-6d5n",
    name: "Hong Kong + Macau",
    tagline: "City Lights & Entertainment",
    category: ["international", "asia", "family", "luxury"],
    featured: true,
    heroImage: "/images/hk-macau.webp",
    galleryImages: [],
    destination: "Hong Kong & Macau",
    country: "Hong Kong",
    duration: { days: 6, nights: 5 },
    priceFrom: 64999,
    maxGroupSize: 15,
    highlights: ["Victoria Peak", "Disneyland", "Ruins of St. Paul's", "Venetian Macau"],
    includes: ["Accommodation", "Breakfast", "Ferry to Macau", "Airport Transfers"],
    excludes: ["International Flights", "Visas"],
    seasons: ["All Year"],
    rating: 4.7,
    reviewCount: 40,
    itinerary: [
      { day: 1, title: "Hong Kong Arrival", description: "Airport pickup, hotel check-in. Victoria Harbour, Tsim Sha Tsui, Symphony of Lights.", highlights: ["Victoria Harbour"], meals: [], stay: "Hong Kong" },
      { day: 2, title: "Hong Kong Island", description: "Victoria Peak, Peak Tram, Central, Avenue of Stars, Star Ferry, Temple Street Night Market.", highlights: ["Victoria Peak"], meals: ["breakfast"], stay: "Hong Kong" },
      { day: 3, title: "Disneyland / Ocean Park", description: "Full-day Hong Kong Disneyland or Ocean Park.", highlights: ["Disneyland"], meals: ["breakfast"], stay: "Hong Kong" },
      { day: 4, title: "Hong Kong → Macau", description: "Ferry/transfer to Macau. Hotel check-in. Ruins of St. Paul's, Senado Square, A-Ma Temple, Macau Tower photo stop.", highlights: ["Ruins of St. Paul's"], meals: ["breakfast"], stay: "Macau" },
      { day: 5, title: "Macau", description: "Venetian Macau, Parisian Macau, Cotai Strip, Casinos/entertainment area, Evening leisure.", highlights: ["Venetian Macau"], meals: ["breakfast"], stay: "Macau" },
      { day: 6, title: "Macau → Hong Kong Airport", description: "Check-out, Transfer to Hong Kong International Airport. Departure.", highlights: ["Departure"], meals: ["breakfast"], stay: "N/A" }
    ]
  },
  {
    id: "pkg-ayodhya-kashi",
    slug: "ayodhya-kashi-spiritual-yatra",
    name: "Ayodhya – Kashi Spiritual Yatra",
    tagline: "Ayodhya & Varanasi (Kashi)",
    category: ["domestic", "india", "pilgrimage", "family"],
    featured: true,
    heroImage: "/images/ayodhya-kashi.webp",
    galleryImages: [],
    destination: "Ayodhya & Kashi",
    country: "India",
    duration: { days: 5, nights: 4 },
    priceFrom: 15999,
    maxGroupSize: 20,
    highlights: ["Shri Ram Janmabhoomi Mandir", "Saryu River Aarti", "Kashi Vishwanath Temple", "Ganga Aarti at Dashashwamedh Ghat", "Ganga boat ride"],
    includes: ["Private transfers", "Comfortable hotel accommodation", "Breakfast", "Ayodhya & Kashi temple visits", "Ganga boat ride", "Ganga Aarti experience", "Tour coordination & assistance"],
    excludes: ["Flight/Train Tickets", "Personal Expenses"],
    seasons: ["All Year"],
    rating: 4.9,
    reviewCount: 150,
    itinerary: [
      { day: 1, title: "Arrival in Ayodhya", description: "Arrival at Ayodhya, Hotel check-in, Visit Shri Ram Janmabhoomi Mandir, Hanuman Garhi, Kanak Bhawan, Evening Saryu River Aarti.", highlights: ["Ram Mandir", "Saryu Aarti"], meals: [], stay: "Ayodhya" },
      { day: 2, title: "Ayodhya Darshan", description: "Breakfast, Ram Mandir Darshan, Visit Nageshwar Nath Temple, Dasharath Bhawan, Sita Ki Rasoi, Local Ayodhya sightseeing, Evening at leisure.", highlights: ["Ayodhya sightseeing"], meals: ["breakfast"], stay: "Ayodhya" },
      { day: 3, title: "Ayodhya → Varanasi (Kashi)", description: "Breakfast and check-out, Transfer to Varanasi, Hotel check-in, Visit Kashi Vishwanath Temple, Explore the old lanes of Kashi, Evening Ganga Aarti at Dashashwamedh Ghat.", highlights: ["Kashi Vishwanath", "Ganga Aarti"], meals: ["breakfast"], stay: "Varanasi" },
      { day: 4, title: "Kashi Darshan", description: "Early morning Ganga boat ride, Kashi Vishwanath Darshan, Annapurna Temple, Kal Bhairav Temple, Sankat Mochan Hanuman Temple, BHU / New Vishwanath Temple, Evening free for shopping and exploring Kashi.", highlights: ["Ganga boat ride", "Kashi Darshan"], meals: ["breakfast"], stay: "Varanasi" },
      { day: 5, title: "Varanasi Departure", description: "Breakfast, Final darshan / local visit depending on departure time, Transfer to Varanasi Airport/Railway Station.", highlights: ["Departure"], meals: ["breakfast"], stay: "N/A" }
    ]
  },
  {
    id: "pkg-chardham-heli",
    slug: "char-dham-yatra-helicopter",
    name: "Char Dham Yatra by Helicopter",
    tagline: "Yamunotri • Gangotri • Kedarnath • Badrinath",
    category: ["domestic", "india", "pilgrimage", "luxury"],
    featured: true,
    heroImage: "/images/chardham-heli.webp",
    galleryImages: [],
    destination: "Uttarakhand Himalayas",
    country: "India",
    duration: { days: 6, nights: 5 },
    priceFrom: 225000,
    maxGroupSize: 6,
    highlights: ["Helicopter transfers", "Yamunotri Darshan", "Gangotri Darshan", "Kedarnath Darshan", "Badrinath Darshan"],
    includes: ["Helicopter transfers", "Accommodation", "Meals", "Dham Darshan assistance", "Local transfers wherever required", "Tour coordination", "Dedicated assistance throughout the journey", "Weather and operational support"],
    excludes: ["Personal Expenses"],
    seasons: ["May", "June", "September", "October"],
    rating: 4.95,
    reviewCount: 85,
    itinerary: [
      { day: 1, title: "Dehradun Arrival", description: "Arrive at Dehradun. Transfer to hotel. Briefing regarding the helicopter journey and next day's schedule. Evening at leisure.", highlights: ["Briefing"], meals: [], stay: "Dehradun" },
      { day: 2, title: "Dehradun → Yamunotri → Kharsali", description: "Morning helicopter departure from Dehradun. Arrive at Kharsali Helipad. Transfer towards Yamunotri Temple. Yamunotri Dham Darshan. Return to Kharsali.", highlights: ["Yamunotri Darshan"], meals: ["breakfast", "dinner"], stay: "Kharsali" },
      { day: 3, title: "Kharsali → Harsil/Gangotri", description: "Morning helicopter transfer to Harsil. Proceed for Gangotri Dham Darshan. Visit Gangotri Temple and surrounding sacred sites. Return to Harsil.", highlights: ["Gangotri Darshan"], meals: ["breakfast", "dinner"], stay: "Harsil" },
      { day: 4, title: "Harsil → Kedarnath", description: "Morning helicopter departure for Kedarnath. Arrive at Kedarnath Helipad. Kedarnath Temple Darshan. Time for prayers and spiritual experience.", highlights: ["Kedarnath Darshan"], meals: ["breakfast", "dinner"], stay: "Kedarnath" },
      { day: 5, title: "Kedarnath → Badrinath", description: "Morning helicopter transfer towards Badrinath. Check-in at hotel. Badrinath Temple Darshan. Visit Mana Village / nearby attractions, subject to time and weather.", highlights: ["Badrinath Darshan"], meals: ["breakfast", "dinner"], stay: "Badrinath" },
      { day: 6, title: "Badrinath → Dehradun", description: "Morning breakfast. Final darshan / local visit if time permits. Helicopter transfer to Dehradun. Tour concludes.", highlights: ["Departure"], meals: ["breakfast"], stay: "N/A" }
    ]
  },
  {
    id: "pkg-dodham-heli",
    slug: "do-dham-yatra-helicopter",
    name: "Do Dham Yatra by Helicopter",
    tagline: "Kedarnath • Badrinath",
    category: ["domestic", "india", "pilgrimage", "luxury"],
    featured: true,
    heroImage: "/images/dodham-heli.webp",
    galleryImages: [],
    destination: "Uttarakhand Himalayas",
    country: "India",
    duration: { days: 4, nights: 3 },
    priceFrom: 150000,
    maxGroupSize: 6,
    highlights: ["Helicopter transfers", "Kedarnath Darshan", "Badrinath Darshan"],
    includes: ["Helicopter transfers", "Accommodation", "Meals", "Dham Darshan assistance", "Local transfers wherever required", "Tour coordination", "Dedicated assistance throughout the journey", "Weather and operational support"],
    excludes: ["Personal Expenses"],
    seasons: ["May", "June", "September", "October"],
    rating: 4.9,
    reviewCount: 65,
    itinerary: [
      { day: 1, title: "Dehradun Arrival", description: "Arrive at Dehradun. Hotel check-in. Helicopter journey briefing. Evening at leisure.", highlights: ["Briefing"], meals: [], stay: "Dehradun" },
      { day: 2, title: "Dehradun → Kedarnath", description: "Morning helicopter departure from Dehradun. Arrival at Kedarnath Helipad. Kedarnath Temple Darshan. Time for prayers and spiritual experience.", highlights: ["Kedarnath Darshan"], meals: ["breakfast", "dinner"], stay: "Kedarnath" },
      { day: 3, title: "Kedarnath → Badrinath", description: "Morning helicopter transfer to Badrinath. Hotel check-in. Badrinath Dham Darshan. Visit Mana Village / nearby attractions, subject to time.", highlights: ["Badrinath Darshan"], meals: ["breakfast", "dinner"], stay: "Badrinath" },
      { day: 4, title: "Badrinath → Dehradun", description: "Breakfast at hotel. Final darshan, subject to schedule. Helicopter transfer to Dehradun. Tour concludes.", highlights: ["Departure"], meals: ["breakfast"], stay: "N/A" }
    ]
  },
  {
    id: "pkg-vietnam-7d6n",
    slug: "vietnam-7d6n-explorer",
    name: "Vietnam Explorer — Hanoi, Halong Bay & Da Nang",
    tagline: "Overnight luxury Halong Bay cruise, Ba Na Hills Golden Bridge, and Hoi An lantern-lit ancient streets.",
    heroImage: "/images/blog/vietnam-travel-guide.webp",
    galleryImages: [
      "/images/blog/vietnam-travel-guide.webp",
      "https://images.unsplash.com/photo-1528127269322-539801943592?w=800&q=80&fm=webp",
      "https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?w=800&q=80&fm=webp"
    ],
    featured: true,
    category: ["asia", "international", "honeymoon", "family", "vietnam"],
    destination: "Hanoi, Halong Bay & Da Nang",
    country: "Vietnam",
    duration: { days: 7, nights: 6 },
    priceFrom: 39999,
    maxGroupSize: 12,
    highlights: [
      "Halong Bay 5-star Overnight Cruise with Kayaking",
      "Ba Na Hills Cable Car & Iconic Golden Hand Bridge",
      "Hoi An Ancient Lantern Town & Coconut Forest Basket Boat",
      "Hanoi French Quarter, Train Street & Water Puppet Show",
      "Dedicated Indian food dining options & e-Visa concierge"
    ],
    includes: [
      "6 nights boutique 4-star accommodation (including 1 night on 5★ Halong Bay Cruise)",
      "Daily international breakfast + 1 onboard cruise lunch and dinner",
      "All airport and sightseeing transfers in private air-conditioned vehicle",
      "Ba Na Hills roundtrip cable car & entrance tickets",
      "Halong Bay entrance fees and kayaking activities",
      "Hoi An Cam Thanh basket boat experience",
      "Full Vietnam e-Visa guidance & documentation review",
      "24/7 dedicated WhatsApp on-tour concierge"
    ],
    excludes: [
      "International flights (custom quotes available with BLR/BOM/DEL direct connections)",
      "Vietnam visa government stamping fee ($25 e-Visa)",
      "Personal expenses, optional water sports, and tips"
    ],
    seasons: ["November", "December", "January", "February", "March", "April"],
    rating: 4.9,
    reviewCount: 94,
    itinerary: [
      {
        day: 1,
        title: "Arrive in Hanoi — The Heart of Vietnam",
        description: "Arrival at Noi Bai International Airport (HAN). Private transfer to your hotel in central Hanoi. In the afternoon, explore the bustling 36 Guilds of the Old Quarter, stroll around peaceful Hoan Kiem Lake, and enjoy famous Vietnamese egg coffee or an evening water puppet performance.",
        highlights: ["Airport VIP Greeting", "Hanoi Old Quarter Walk", "Hoan Kiem Lake"],
        meals: ["dinner"],
        stay: "Hanoi (4-Star Central Hotel)"
      },
      {
        day: 2,
        title: "Hanoi → Halong Bay Luxury Overnight Cruise",
        description: "Scenic morning highway drive to Tuan Chau Harbor. Board your 5-star luxury junk cruise. Marvel at thousands of towering limestone karsts emerging from emerald waters. Enjoy a fresh multi-course lunch onboard. Kayak through Luon Cave, hike Ti Top Island for 360° bay views, and stargaze on the sundeck.",
        highlights: ["Halong Bay UNESCO Wonder", "Ti Top Island Sunset", "Kayaking", "Luxury Cruise Dinner"],
        meals: ["breakfast", "lunch", "dinner"],
        stay: "Luxury Halong Bay Cruise (Balcony Cabin)"
      },
      {
        day: 3,
        title: "Halong Bay Sunrise → Hanoi → Flight to Da Nang",
        description: "Begin with sunrise Tai Chi on the sundeck and explore Sung Sot (Surprise) Cave. Savor brunch as the vessel navigates back to port. Private transfer to Hanoi Airport for your 1-hour domestic flight to Da Nang. Check into your seaside Da Nang resort and relax on My Khe Beach.",
        highlights: ["Surprise Cave Exploration", "Scenic Cruise Brunch", "Flight to Da Nang", "My Khe Beach Sunset"],
        meals: ["breakfast"],
        stay: "Da Nang Beachside Resort"
      },
      {
        day: 4,
        title: "Ba Na Hills & The Iconic Golden Bridge",
        description: "Take the world's longest single-cable car ride ascending the mist-shrouded peaks of Ba Na Hills. Walk across the world-famous Golden Bridge held aloft by colossal weathered stone hands. Explore the French Village, Linh Ung Pagoda, and Fantasy Park attractions before heading down.",
        highlights: ["Ba Na Hills Cable Car", "Golden Hand Bridge", "French Alpine Village", "Linh Ung Pagoda"],
        meals: ["breakfast"],
        stay: "Da Nang Beachside Resort"
      },
      {
        day: 5,
        title: "Cam Thanh Coconut Forest Basket Boat → Hoi An Lantern Town",
        description: "Experience the spinning circular bamboo basket boats through the lush water coconut waterways of Cam Thanh. Continue to UNESCO World Heritage Hoi An Ancient Town. Marvel at centuries-old merchant shophouses, Japanese Covered Bridge, and take a magical sunset lantern boat ride on the Thu Bon River.",
        highlights: ["Bamboo Basket Boat Spin", "Hoi An Ancient Town Walk", "Japanese Covered Bridge", "Floating Lantern Experience"],
        meals: ["breakfast", "dinner"],
        stay: "Da Nang / Hoi An Boutique Resort"
      },
      {
        day: 6,
        title: "Marble Mountains & Da Nang Dragon Bridge",
        description: "Visit the sacred Marble Mountains (Ngu Hanh Son) featuring ancient Buddhist sanctuaries inside limestone caves. In the evening, witness the famous Dragon Bridge breathe fire and water (weekend spectacle) along the Han River with dinner at an authentic Indian or Vietnamese restaurant.",
        highlights: ["Marble Mountains Caves", "Dragon Bridge Light Show", "Han River Promenade"],
        meals: ["breakfast"],
        stay: "Da Nang Beachside Resort"
      },
      {
        day: 7,
        title: "Da Nang → Departure Flight to India",
        description: "Enjoy breakfast overlooking the South China Sea. Leisurely shopping for Vietnamese drip coffee filters, dried fruits, and handicrafts at Han Market. Private airport transfer to Da Nang International Airport (DAD) for your return flight to India.",
        highlights: ["Han Market Souvenirs", "Airport Drop-off"],
        meals: ["breakfast"],
        stay: "N/A (Departure)"
      }
    ]
  },
  {
    id: "pkg-europe-15d",
    slug: "europe-15-days-grand-tour",
    name: "Grand Europe Tour — 15 Days & 5 Countries with Indian Meals & Eurail",
    tagline: "Paris, Swiss Alps, Venice gondolas, Florence, Rome & Innsbruck with curated Indian dinners, Eurail scenic pass, and Schengen visa assistance.",
    heroImage: "/images/blog/europe-tour-packages.webp",
    galleryImages: [
      "/images/blog/europe-tour-packages.webp",
      "/images/switzerland-alpine.webp",
      "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=800&q=80&fm=webp"
    ],
    featured: true,
    category: ["europe", "international", "family", "luxury"],
    destination: "France, Switzerland, Italy, Austria & Vatican",
    country: "Europe",
    duration: { days: 15, nights: 14 },
    priceFrom: 229999,
    maxGroupSize: 18,
    highlights: [
      "Eiffel Tower 2nd Level & Seine River Romantic Cruise (Paris)",
      "Mount Titlis Rotair revolving cable car, Ice Cliff & Glacier Cave (Swiss Alps)",
      "Lucerne Lake scenic boat ride & Lion Monument",
      "Venice private water taxi & traditional Venetian Gondola ride",
      "Florence Piazzale Michelangelo & Leaning Tower of Pisa",
      "Rome Colosseum, Trevi Fountain & Vatican City St. Peter's Basilica",
      "Swarovski Crystal Worlds & Innsbruck Golden Roof (Austria)",
      "Daily Indian dinners (hot vegetarian, Jain & non-veg options throughout)",
      "Full Schengen visa appointment scheduling and document auditing"
    ],
    includes: [
      "14 nights accommodation in handpicked 4-star hotels across Paris, Engelberg/Lucerne, Innsbruck, Venice, Florence & Rome",
      "Daily continental buffet breakfast at hotels",
      "14 curated hot Indian dinners at verified Indian restaurants",
      "High-speed TGV train tickets (Paris to Basel/Zurich)",
      "All coach transfers across Switzerland, Austria, and Italy in luxury air-conditioned coaches",
      "Mt. Titlis cable car tickets + Ice Flyer admission",
      "Seine River Paris cruise & Eiffel Tower Level 2 guaranteed time slots",
      "Venice private boat transfers & gondola ride",
      "Local licensed English-speaking guides in Paris, Florence, Rome, and the Vatican",
      "Dedicated multi-lingual Tour Manager from India throughout the journey",
      "Comprehensive travel medical insurance ($100,000 coverage)"
    ],
    excludes: [
      "International flights (custom roundtrip flight quotes provided from BLR, BOM, DEL, MAA)",
      "Schengen visa embassy application fees and VFS center charges",
      "City tourist taxes (payable directly at hotel check-out, ~€2–€6 per person/night)",
      "Personal porterage, room service, and personal expenses"
    ],
    seasons: ["April", "May", "June", "July", "August", "September", "October", "November", "December"],
    rating: 4.95,
    reviewCount: 142,
    itinerary: [
      {
        day: 1,
        title: "Arrive in Paris, France — City of Light",
        description: "Arrive at Paris Charles de Gaulle Airport (CDG). Private transfer to your hotel. Meet your dedicated tour manager. In the evening, enjoy a warm welcome Indian dinner followed by an enchanting illuminations drive across Champs-Élysées and Place de la Concorde.",
        highlights: ["Paris Welcome", "Illuminations Drive", "Indian Welcome Dinner"],
        meals: ["dinner"],
        stay: "Paris (4-Star Hotel)"
      },
      {
        day: 2,
        title: "Eiffel Tower 2nd Level, City Tour & Seine River Cruise",
        description: "Morning guided tour of Paris covering Arc de Triomphe, Louvre exterior, Opera Garnier, and Notre-Dame. Ascend to the 2nd level of the iconic Eiffel Tower for panoramic city vistas. Later, embark on a scenic Seine River cruise gliding under historic stone bridges.",
        highlights: ["Eiffel Tower Level 2", "Seine River Cruise", "Arc de Triomphe", "Louvre Photo Stop"],
        meals: ["breakfast", "dinner"],
        stay: "Paris (4-Star Hotel)"
      },
      {
        day: 3,
        title: "Paris at Leisure / Optional Disneyland Day",
        description: "Enjoy a leisurely day exploring the artistic quarters of Montmartre and Sacré-Cœur, world-class shopping at Galeries Lafayette, or an optional thrilling day excursion to Disneyland Paris. Relish an authentic Indian dinner in the evening.",
        highlights: ["Montmartre Artists Quarter", "Galeries Lafayette Shopping", "Optional Disneyland Paris"],
        meals: ["breakfast", "dinner"],
        stay: "Paris (4-Star Hotel)"
      },
      {
        day: 4,
        title: "High-Speed TGV Train → Switzerland (Lucerne & Engelberg)",
        description: "Board the world-famous French TGV high-speed train speeding across the picturesque countryside toward Switzerland. Arrive in Lucerne, check into your alpine valley hotel, and enjoy the pristine fresh air surrounded by snow-capped peaks.",
        highlights: ["TGV High-Speed Rail Experience", "Scenic Swiss Countryside", "Lucerne Arrival"],
        meals: ["breakfast", "dinner"],
        stay: "Engelberg / Lucerne Valley (4-Star Alpine Hotel)"
      },
      {
        day: 5,
        title: "Mount Titlis Glacier Paradise & Lucerne City Tour",
        description: "Ascend 10,000 feet aboard the world's first revolving cable car, Titlis Rotair. Experience the breathtaking Cliff Walk suspension bridge, walk through the blue Glacier Cave, and ride the Ice Flyer chairlift over glacial crevices. In the afternoon, visit Lucerne's historic Chapel Bridge and Lion Monument.",
        highlights: ["Titlis Rotair Cable Car", "Glacier Cave & Cliff Walk", "Chapel Bridge", "Lion Monument"],
        meals: ["breakfast", "dinner"],
        stay: "Engelberg / Lucerne Valley (4-Star Alpine Hotel)"
      },
      {
        day: 6,
        title: "Interlaken Valley, Jungfrau Region & Lake Brienz Cruise",
        description: "Drive through the emerald valleys between Lake Thun and Lake Brienz. Stroll through the picturesque resort town of Interlaken with majestic views of the Jungfrau trio (Eiger, Mönch, Jungfrau). Enjoy a relaxing lake boat cruise and visit Swiss watch ateliers.",
        highlights: ["Interlaken Promenade", "Lake Brienz Scenic Views", "Swiss Chocolate & Watch Shopping"],
        meals: ["breakfast", "dinner"],
        stay: "Engelberg / Lucerne Valley (4-Star Alpine Hotel)"
      },
      {
        day: 7,
        title: "Switzerland → Liechtenstein → Innsbruck, Austria",
        description: "Scenic coach journey passing the tiny Alpine principality of Liechtenstein with a photo stop in capital Vaduz. Continue into the Austrian Tyrol region to Innsbruck. Visit the glittering Swarovski Crystal Worlds in Wattens and explore Innsbruck's Old Town featuring the famous Golden Roof.",
        highlights: ["Liechtenstein Photo Stop", "Swarovski Crystal Worlds", "Golden Roof Innsbruck", "Tyrol Alpine Scenery"],
        meals: ["breakfast", "dinner"],
        stay: "Innsbruck (4-Star Tyrolean Hotel)"
      },
      {
        day: 8,
        title: "Innsbruck → Venice, Italy — The Floating City",
        description: "Descend through the magnificent Brenner Pass crossing the Austrian-Italian Alps into the Veneto plains. Arrive at the Venetian lagoon. Board a private motor launch water taxi gliding past palazzos along the Giudecca Canal into the heart of historic Venice.",
        highlights: ["Brenner Pass Alpine Drive", "Private Venice Water Taxi", "First Views of Venice Lagoon"],
        meals: ["breakfast", "dinner"],
        stay: "Venice Mestre / Lagoon (4-Star Hotel)"
      },
      {
        day: 9,
        title: "St. Mark's Square, Gondola Ride & Murano Glass Demonstration",
        description: "Walking tour of Venice including St. Mark's Basilica, Doge's Palace exterior, and Bridge of Sighs. Witness master artisans shape molten glass at a traditional Murano glass factory. Board a classic black Venetian Gondola for an unforgettable glide through serene side canals.",
        highlights: ["St. Mark's Square", "Bridge of Sighs", "Gondola Ride", "Murano Glass Workshop"],
        meals: ["breakfast", "dinner"],
        stay: "Venice Mestre / Lagoon (4-Star Hotel)"
      },
      {
        day: 10,
        title: "Venice → Leaning Tower of Pisa → Florence, Tuscany",
        description: "Drive south through the fertile plains of Emilia-Romagna toward Tuscany. Stop at the Field of Miracles in Pisa to admire and photograph the world-famous Leaning Tower of Pisa and Pisa Cathedral. Continue into Renaissance capital Florence for a Tuscan sunset.",
        highlights: ["Leaning Tower of Pisa", "Pisa Baptistery", "Tuscan Countryside Drive"],
        meals: ["breakfast", "dinner"],
        stay: "Florence / Tuscany (4-Star Hotel)"
      },
      {
        day: 11,
        title: "Florence Renaissance Walking Tour → Drive to Rome",
        description: "Guided walking tour through Florence: Santa Maria del Fiore Duomo, Giotto's Bell Tower, Piazza della Signoria, and Ponte Vecchio bridge over the Arno. Drive up to Piazzale Michelangelo for an iconic panorama of Florence. In the afternoon, coach drive to the Eternal City of Rome.",
        highlights: ["Florence Duomo", "Ponte Vecchio", "Piazzale Michelangelo View", "Arrival in Rome"],
        meals: ["breakfast", "dinner"],
        stay: "Rome (4-Star Central Hotel)"
      },
      {
        day: 12,
        title: "Vatican City — St. Peter's Basilica & Rome Wonders",
        description: "Enter Vatican City, the world's smallest sovereign state. Marvel at the sheer grandeur of St. Peter's Basilica and Michelangelo's Pieta. In Rome, toss a coin into the majestic Trevi Fountain to guarantee your return, admire the Pantheon, and stroll through Piazza Navona.",
        highlights: ["Vatican City State", "St. Peter's Basilica", "Trevi Fountain Coin Toss", "Pantheon"],
        meals: ["breakfast", "dinner"],
        stay: "Rome (4-Star Central Hotel)"
      },
      {
        day: 13,
        title: "Ancient Rome — Colosseum & Roman Forum",
        description: "Step back into the Roman Empire. Photo tour of the monumental Colosseum, Circus Maximus, Arch of Constantine, and Roman Forum where gladiators and emperors walked. Enjoy the afternoon shopping for Italian leather goods on Via del Corso.",
        highlights: ["Colosseum Photo Stop", "Roman Forum & Imperial Palaces", "Via del Corso Shopping"],
        meals: ["breakfast", "dinner"],
        stay: "Rome (4-Star Central Hotel)"
      },
      {
        day: 14,
        title: "Rome at Leisure & Grand Farewell Indian Banquet",
        description: "A free day to savor gelato near Spanish Steps, explore the Villa Borghese gardens, or take an optional excursion to Pompeii. In the evening, gather with fellow travellers for a celebratory farewell Indian banquet with dessert.",
        highlights: ["Spanish Steps", "Gelato Tasting", "Grand Farewell Banquet"],
        meals: ["breakfast", "dinner"],
        stay: "Rome (4-Star Central Hotel)"
      },
      {
        day: 15,
        title: "Rome Departure → Return Flight to India",
        description: "Enjoy breakfast at your hotel. Private transfer to Rome Fiumicino Airport (FCO) for your scheduled flight back home to India, filled with memories of 5 European countries, alpine snow, and historic capitals.",
        highlights: ["Airport Transfer", "Homeward Flight"],
        meals: ["breakfast"],
        stay: "N/A (Departure)"
      }
    ]
  }
];

export const PACKAGE_CATEGORIES = [
  { id: "all", label: "All Packages" },
  { id: "domestic", label: "🇮🇳 Domestic (India)" },
  { id: "asia", label: "🌏 Asia" },
  { id: "vietnam", label: "🇻🇳 Vietnam" },
  { id: "europe", label: "🇪🇺 Europe" },
  { id: "all", label: "All Packages" },
  { id: "domestic", label: "🇮🇳 Domestic (India)" },
  { id: "asia", label: "🌏 Asia" },
  { id: "europe", label: "🇪🇺 Europe" },
  { id: "africa", label: "🌍 Africa" },
  { id: "china", label: "🇨🇳 China" },
  { id: "japan", label: "🇯🇵 Japan" },
  { id: "south-korea", label: "🇰🇷 South Korea" },
  { id: "nepal", label: "🇳🇵 Nepal" },
  { id: "bhutan", label: "🇧🇹 Bhutan" },
  { id: "pilgrimage", label: "🙏 Pilgrimage" },
  { id: "international", label: "International" },
  { id: "luxury", label: "Luxury" },
  { id: "family", label: "Family" },
  { id: "honeymoon", label: "Honeymoon" }
];

export function getFeaturedPackages() {
  return PACKAGES.filter((p) => p.featured);
}
