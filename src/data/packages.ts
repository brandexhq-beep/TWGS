// ─────────────────────────────────────────────────────────────────────────────
// Package Data — Asia & Europe Portfolios
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
  // ─── ASIA ──────────────────────────────────────────────────────────────────
  {
    id: "pkg-001",
    slug: "sri-lanka-5d4n",
    name: "Sri Lanka — Island Escape",
    tagline: "Experience the lush green hills, culture, and pristine beaches of Sri Lanka.",
    category: ["international", "asia", "family"],
    featured: true,
    heroImage: "https://images.openai.com/static-rsc-4/O6SZS67vi9k2MwUSrG-gh4d_n98zZRJ5O6xxkOdQxi-v_S-8b1qa7nynDQV5ztVfuzrZu7q-hJcYsWQqIDx91RCq6CAaHgyQ7w3zzT4fi2wnP-4OG2MTVUmAuiLzSS89EI7CRYnslB-9UeTXdxl5zHvbJn5loXMMCTSMIxTVDDb2hCRYB4QWNdeURcxINKh_?purpose=fullsize",
    galleryImages: [
      "https://images.openai.com/static-rsc-4/O6SZS67vi9k2MwUSrG-gh4d_n98zZRJ5O6xxkOdQxi-v_S-8b1qa7nynDQV5ztVfuzrZu7q-hJcYsWQqIDx91RCq6CAaHgyQ7w3zzT4fi2wnP-4OG2MTVUmAuiLzSS89EI7CRYnslB-9UeTXdxl5zHvbJn5loXMMCTSMIxTVDDb2hCRYB4QWNdeURcxINKh_?purpose=fullsize",
      "https://images.openai.com/static-rsc-4/ZJwxj0n_o_XuFRzPheTYC60Lz-0Mnq9wzq0AHOKYyIpmFjwn1PGW0H0rM0VBVD-32vonY46Uiy-WUpAMuTmc8cxpsXrCqBLtDrB0nbQ-iTZF1oPkYiMothUhoA77KAS9Rnbe6UYXM2gcOq7h8CRtXUy48wk0Ac8JDV2Pa2ap4t5oigZKOWOB6WKyt7K9NT_4?purpose=fullsize"
    ],
    destination: "Sri Lanka",
    country: "Sri Lanka",
    duration: { days: 5, nights: 4 },
    priceFrom: 24999,
    maxGroupSize: 10,
    highlights: ["Pinnawala Elephant Orphanage", "Temple of the Tooth", "Tea plantation", "Nine Arch Bridge", "Galle Fort"],
    includes: ["Accommodation", "Daily Breakfast", "Airport Transfers"],
    excludes: ["Flights", "Visas", "Personal Expenses"],
    seasons: ["All Year"],
    rating: 4.8,
    reviewCount: 124,
    itinerary: [
      { day: 1, title: "Airport → Kandy", description: "Airport pickup, Pinnawala Elephant Orphanage, Kandy sightseeing, and Temple of the Tooth.", highlights: ["Pinnawala Elephant Orphanage", "Temple of the Tooth"], meals: [], stay: "Kandy" },
      { day: 2, title: "Kandy → Nuwara Eliya → Ella", description: "Visit a tea plantation & factory, Nuwara Eliya sightseeing, and enjoy a scenic train journey toward Ella.", highlights: ["Tea plantation", "Scenic train journey"], meals: ["breakfast"], stay: "Ella" },
      { day: 3, title: "Ella", description: "Visit the famous Nine Arch Bridge, hike Little Adam's Peak, and see Ravana Falls.", highlights: ["Nine Arch Bridge", "Little Adam's Peak", "Ravana Falls"], meals: ["breakfast"], stay: "Ella" },
      { day: 4, title: "Ella → Galle → Colombo", description: "Drive to Galle, explore Galle Fort, visit the beach, and enjoy Colombo city sightseeing.", highlights: ["Galle Fort", "Colombo sightseeing"], meals: ["breakfast"], stay: "Colombo" },
      { day: 5, title: "Colombo → Airport", description: "Leisure/shopping depending on flight time, followed by an airport transfer.", highlights: ["Leisure shopping", "Airport transfer"], meals: ["breakfast"], stay: "N/A" }
    ]
  },
  {
    id: "pkg-002",
    slug: "thailand-bangkok-pattaya",
    name: "Thailand — Bangkok + Pattaya",
    tagline: "Vibrant city life meets stunning coral islands in this Thailand getaway.",
    category: ["international", "asia", "family"],
    featured: true,
    heroImage: "https://images.openai.com/static-rsc-4/qilHbiJjo7Yzdpz2nZyjkKlHuIgvFlMJvsL32PeOhlDZyqRyGWF7gvSY11Mk8RKx4DLsIrmHFHwGWtXSdWHk7-85l0oPwwwEtVBGKkg17EEJsfnHH0rchgZr6ZELgf-vJ4iC5O5a4iAsCH2__bJh9VXXo8BO6Z-RhzgPUJtu6xzKBUGhjI_pBZ-ciiWghL9d?purpose=fullsize",
    galleryImages: [
      "https://images.openai.com/static-rsc-4/qilHbiJjo7Yzdpz2nZyjkKlHuIgvFlMJvsL32PeOhlDZyqRyGWF7gvSY11Mk8RKx4DLsIrmHFHwGWtXSdWHk7-85l0oPwwwEtVBGKkg17EEJsfnHH0rchgZr6ZELgf-vJ4iC5O5a4iAsCH2__bJh9VXXo8BO6Z-RhzgPUJtu6xzKBUGhjI_pBZ-ciiWghL9d?purpose=fullsize"
    ],
    destination: "Bangkok & Pattaya",
    country: "Thailand",
    duration: { days: 5, nights: 4 },
    priceFrom: 29999,
    maxGroupSize: 15,
    highlights: ["Coral Island Tour", "Grand Palace Area", "Golden Buddha", "Shopping"],
    includes: ["Accommodation", "Daily Breakfast", "Airport Transfers"],
    excludes: ["Flights", "Visas", "Personal Expenses"],
    seasons: ["All Year"],
    rating: 4.7,
    reviewCount: 201,
    itinerary: [
      { day: 1, title: "Bangkok → Pattaya", description: "Airport pickup, transfer to Pattaya, hotel check-in, and evening at leisure.", highlights: ["Transfer to Pattaya"], meals: [], stay: "Pattaya" },
      { day: 2, title: "Coral Island", description: "Coral Island tour with beach activities. Return to Pattaya for an evening walk.", highlights: ["Coral Island tour"], meals: ["breakfast"], stay: "Pattaya" },
      { day: 3, title: "Pattaya → Bangkok", description: "Transfer to Bangkok, sightseeing around Wat Arun / Wat Pho area, and shopping.", highlights: ["Wat Arun", "Bangkok sightseeing"], meals: ["breakfast"], stay: "Bangkok" },
      { day: 4, title: "Bangkok", description: "Visit the Grand Palace area, Golden Buddha, and local markets/malls.", highlights: ["Grand Palace", "Golden Buddha"], meals: ["breakfast"], stay: "Bangkok" },
      { day: 5, title: "Bangkok → Airport", description: "Check-out and transfer to the airport.", highlights: ["Airport transfer"], meals: ["breakfast"], stay: "N/A" }
    ]
  },
  {
    id: "pkg-003",
    slug: "bali-5d4n",
    name: "Bali — Island of the Gods",
    tagline: "Volcanoes, rice terraces, and dramatic clifftop temples.",
    category: ["international", "asia", "honeymoon", "luxury"],
    featured: true,
    heroImage: "https://images.openai.com/static-rsc-4/7ETEW4_toFL1EZ9pz-7lUw0M8fFYV7EDtTbjLymXGMp1lh-l5LnkTDV9ZJtkrGCaQGex1SNJReZGO37ONXQOi21J8t22waVGHKJhPKLriUP-2eYiX_g-Xo1EzQuFbS8-uVhBIWNZJoN_0_WuRqkeMxvuLRP0rMUoBf5gcSNeymcH3DV8Vr5nuSqDeQwvPhc5?purpose=fullsize",
    galleryImages: [
      "https://images.openai.com/static-rsc-4/7ETEW4_toFL1EZ9pz-7lUw0M8fFYV7EDtTbjLymXGMp1lh-l5LnkTDV9ZJtkrGCaQGex1SNJReZGO37ONXQOi21J8t22waVGHKJhPKLriUP-2eYiX_g-Xo1EzQuFbS8-uVhBIWNZJoN_0_WuRqkeMxvuLRP0rMUoBf5gcSNeymcH3DV8Vr5nuSqDeQwvPhc5?purpose=fullsize"
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
      { day: 1, title: "Bali Arrival", description: "Airport pickup, hotel check-in, Kuta/Seminyak sightseeing, and beach sunset.", highlights: ["Beach sunset"], meals: [], stay: "Bali" },
      { day: 2, title: "Ubud + Kintamani", description: "Visit Tegenungan Waterfall, Tegalalang Rice Terrace, Kintamani volcano, and a coffee plantation.", highlights: ["Tegalalang Rice Terrace", "Kintamani"], meals: ["breakfast"], stay: "Bali" },
      { day: 3, title: "Nusa Penida", description: "Full-day Nusa Penida tour including Kelingking Beach, Broken Beach, and Crystal Bay.", highlights: ["Nusa Penida", "Kelingking Beach"], meals: ["breakfast"], stay: "Bali" },
      { day: 4, title: "Uluwatu", description: "Uluwatu Temple, Kecak Dance performance, and Jimbaran Beach dinner.", highlights: ["Uluwatu Temple", "Kecak Dance"], meals: ["breakfast"], stay: "Bali" },
      { day: 5, title: "Bali → Airport", description: "Check-out, shopping/leisure time, and airport transfer.", highlights: ["Airport transfer"], meals: ["breakfast"], stay: "N/A" }
    ]
  },

  // ─── EUROPE ────────────────────────────────────────────────────────────────
  {
    id: "pkg-004",
    slug: "iceland-wonderland",
    name: "Iceland — Northern Lights & Glaciers",
    tagline: "Chasing aurora borealis, waterfalls, black sand beaches, and geothermal lagoons.",
    category: ["international", "europe", "adventure", "luxury"],
    featured: true,
    heroImage: "https://images.unsplash.com/photo-1504893524553-b855bce32c67?w=1200&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1504893524553-b855bce32c67?w=1200&q=80",
      "https://images.unsplash.com/photo-1529963183134-61a90db47eaf?w=1200&q=80"
    ],
    destination: "Iceland",
    country: "Iceland",
    duration: { days: 6, nights: 5 },
    priceFrom: 249999,
    maxGroupSize: 10,
    highlights: ["Northern Lights Tour", "Golden Circle", "Jökulsárlón Glacier Lagoon", "Blue Lagoon Spa", "Reynisfjara Black Sand Beach"],
    includes: ["Accommodation", "Daily Breakfast", "Airport & Excursion Transfers", "Blue Lagoon Entrance"],
    excludes: ["International Flights", "Schengen Visa", "Personal Expenses"],
    seasons: ["Sep - Apr (Aurora Season)", "May - Aug (Midnight Sun)"],
    rating: 4.95,
    reviewCount: 88,
    itinerary: [
      { day: 1, title: "Arrival in Reykjavik", description: "Airport pickup, transfer to Reykjavik, hotel check-in, city walk seeing Hallgrímskirkja Church and Harpa Concert Hall.", highlights: ["Hallgrímskirkja", "Harpa Concert Hall"], meals: [], stay: "Reykjavik" },
      { day: 2, title: "The Golden Circle", description: "Explore Thingvellir National Park, Geysir geothermal area, Gullfoss Waterfall, and Kerid Crater. Evening Northern Lights hunt depending on weather.", highlights: ["Thingvellir", "Geysir", "Gullfoss Waterfall"], meals: ["breakfast"], stay: "Reykjavik" },
      { day: 3, title: "South Coast Waterfalls & Black Sand", description: "Visit Seljalandsfoss, Skógafoss, Reynisfjara Black Sand Beach, and the dramatic cliffs of Dyrhólaey.", highlights: ["Skógafoss", "Reynisfjara Beach"], meals: ["breakfast"], stay: "Vik / South Iceland" },
      { day: 4, title: "Glacier & Ice Lagoon", description: "Explore Skaftafell region, Diamond Beach, and the world-famous Jökulsárlón Glacier Lagoon.", highlights: ["Jökulsárlón Glacier Lagoon", "Diamond Beach"], meals: ["breakfast"], stay: "South Iceland" },
      { day: 5, title: "Blue Lagoon & Reykjavik", description: "Soak in the mineral-rich geothermal waters of the Blue Lagoon. Return to Reykjavik for shopping & dining.", highlights: ["Blue Lagoon Spa", "Shopping"], meals: ["breakfast"], stay: "Reykjavik" },
      { day: 6, title: "Departure", description: "Breakfast, check-out, and transfer to Keflavík Airport.", highlights: ["Airport Transfer"], meals: ["breakfast"], stay: "N/A" }
    ]
  },
  {
    id: "pkg-005",
    slug: "switzerland-alpine-dream",
    name: "Switzerland — Alpine Dream",
    tagline: "Panoramas of snow-capped peaks, alpine lakes, and world-famous mountain railways.",
    category: ["international", "europe", "luxury", "family", "honeymoon"],
    featured: false,
    heroImage: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?w=1200&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?w=1200&q=80"
    ],
    destination: "Lucerne, Interlaken & Zurich",
    country: "Switzerland",
    duration: { days: 6, nights: 5 },
    priceFrom: 189999,
    maxGroupSize: 12,
    highlights: ["Mount Titlis Cable Car", "Jungfraujoch Top of Europe", "Chapel Bridge Lucerne", "Lauterbrunnen Waterfalls"],
    includes: ["3-Star/4-Star Hotels", "Daily Breakfast", "Swiss Travel Pass Excursions"],
    excludes: ["International Flights", "Schengen Visa", "Personal Expenses"],
    seasons: ["All Year"],
    rating: 4.9,
    reviewCount: 164,
    itinerary: [
      { day: 1, title: "Zurich → Lucerne", description: "Airport pickup, transfer to Lucerne, stroll past Chapel Bridge, Lake Lucerne, and Old Town.", highlights: ["Chapel Bridge", "Lake Lucerne"], meals: [], stay: "Lucerne" },
      { day: 2, title: "Mount Titlis Excursion", description: "Ascend Mount Titlis on the rotating Rotair cable car, glacier cave, and snow activities.", highlights: ["Mount Titlis", "Rotair Cable Car"], meals: ["breakfast"], stay: "Lucerne" },
      { day: 3, title: "Lucerne → Interlaken", description: "Scenic train journey to Interlaken. Visit Lauterbrunnen valley of 72 waterfalls.", highlights: ["Lauterbrunnen Waterfalls", "Scenic Train"], meals: ["breakfast"], stay: "Interlaken" },
      { day: 4, title: "Jungfraujoch — Top of Europe", description: "Cogwheel train ride to Jungfraujoch Europe's highest railway station. Sphinx observatory & Ice Palace.", highlights: ["Jungfraujoch", "Ice Palace"], meals: ["breakfast"], stay: "Interlaken" },
      { day: 5, title: "Interlaken → Zurich", description: "Transfer to Zurich, city tour of Bahnhofstrasse, Lake Zurich, and luxury shopping.", highlights: ["Bahnhofstrasse", "Lake Zurich"], meals: ["breakfast"], stay: "Zurich" },
      { day: 6, title: "Zurich Departure", description: "Breakfast, check-out, and airport transfer.", highlights: ["Airport Transfer"], meals: ["breakfast"], stay: "N/A" }
    ]
  },
  {
    id: "pkg-006",
    slug: "italy-romance-history",
    name: "Italy — Renaissance & Romance",
    tagline: "Ancient Rome, Tuscan art, and gondola rides along Venetian canals.",
    category: ["international", "europe", "honeymoon"],
    featured: false,
    heroImage: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=1200&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=1200&q=80"
    ],
    destination: "Rome, Florence & Venice",
    country: "Italy",
    duration: { days: 6, nights: 5 },
    priceFrom: 159999,
    maxGroupSize: 15,
    highlights: ["Colosseum & Vatican City", "High-speed Frecciarossa Train", "Florence Duomo", "Venice Gondola Ride"],
    includes: ["Hotels with Breakfast", "High-Speed Train Tickets", "Venice Gondola Ride"],
    excludes: ["International Flights", "Schengen Visa", "City Tourist Taxes"],
    seasons: ["Apr - Oct"],
    rating: 4.85,
    reviewCount: 142,
    itinerary: [
      { day: 1, title: "Rome Arrival", description: "Airport pickup, hotel check-in, visit Trevi Fountain, Spanish Steps, and Piazza Navona.", highlights: ["Trevi Fountain", "Spanish Steps"], meals: [], stay: "Rome" },
      { day: 2, title: "Ancient Rome & Vatican", description: "Guided tour of the Colosseum, Roman Forum, Pantheon, and Vatican City St. Peter's Basilica.", highlights: ["Colosseum", "Vatican City"], meals: ["breakfast"], stay: "Rome" },
      { day: 3, title: "Rome → Florence", description: "High-speed train to Florence. Guided walk around Florence Duomo, Ponte Vecchio, and Uffizi area.", highlights: ["Florence Duomo", "Ponte Vecchio"], meals: ["breakfast"], stay: "Florence" },
      { day: 4, title: "Florence → Venice", description: "Train to Venice. St. Mark's Square, Rialto Bridge, and a romantic sunset gondola ride.", highlights: ["St. Mark's Square", "Venice Gondola Ride"], meals: ["breakfast"], stay: "Venice" },
      { day: 5, title: "Venice Islands & Leisure", description: "Optional excursion to Murano & Burano glass-making islands or leisure shopping.", highlights: ["Grand Canal", "Murano & Burano"], meals: ["breakfast"], stay: "Venice" },
      { day: 6, title: "Venice Departure", description: "Breakfast, check-out, and water taxi / transfer to airport.", highlights: ["Airport Transfer"], meals: ["breakfast"], stay: "N/A" }
    ]
  },
  {
    id: "pkg-007",
    slug: "france-paris-lights",
    name: "France — City of Lights & Versailles",
    tagline: "Iconic Eiffel Tower views, world-class art, and royal grandeur in Paris.",
    category: ["international", "europe", "family", "honeymoon"],
    featured: false,
    heroImage: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&q=80"
    ],
    destination: "Paris & Versailles",
    country: "France",
    duration: { days: 5, nights: 4 },
    priceFrom: 134999,
    maxGroupSize: 15,
    highlights: ["Eiffel Tower 2nd Tier", "Seine River Cruise", "Palace of Versailles", "Louvre Museum"],
    includes: ["Hotels with Breakfast", "Seine Cruise Tickets", "Versailles Entrance"],
    excludes: ["International Flights", "Schengen Visa", "Personal Expenses"],
    seasons: ["All Year"],
    rating: 4.8,
    reviewCount: 190,
    itinerary: [
      { day: 1, title: "Paris Arrival & Seine Cruise", description: "Airport pickup, hotel check-in, Champs-Élysées, Arc de Triomphe, Eiffel Tower photo stop, and evening Seine river cruise.", highlights: ["Eiffel Tower", "Seine Cruise"], meals: [], stay: "Paris" },
      { day: 2, title: "Paris Culture & Louvre", description: "Visit Louvre Museum, Notre-Dame area, Latin Quarter, and bohemian Montmartre Sacré-Cœur.", highlights: ["Louvre Museum", "Sacré-Cœur"], meals: ["breakfast"], stay: "Paris" },
      { day: 3, title: "Palace of Versailles", description: "Excursion to the magnificent Palace of Versailles and its manicured gardens. Evening shopping.", highlights: ["Palace of Versailles"], meals: ["breakfast"], stay: "Paris" },
      { day: 4, title: "Paris Experience & Shopping", description: "Shopping at Galeries Lafayette, free time, optional evening Moulin Rouge show.", highlights: ["Galeries Lafayette", "Free Time"], meals: ["breakfast"], stay: "Paris" },
      { day: 5, title: "Paris Departure", description: "Breakfast, check-out, and airport transfer.", highlights: ["Airport Transfer"], meals: ["breakfast"], stay: "N/A" }
    ]
  },
  {
    id: "pkg-008",
    slug: "italy-switzerland-combo",
    name: "Italy + Switzerland — Grand Duo",
    tagline: "Combine the romantic canals of Venice and Rome with the majestic Swiss Alps.",
    category: ["international", "europe", "luxury"],
    featured: false,
    heroImage: "https://images.unsplash.com/photo-1527631746610-bca00a040d60?w=1200&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1527631746610-bca00a040d60?w=1200&q=80"
    ],
    destination: "Rome, Venice, Lucerne & Zurich",
    country: "Italy & Switzerland",
    duration: { days: 7, nights: 6 },
    priceFrom: 209999,
    maxGroupSize: 12,
    highlights: ["Rome Colosseum", "Venice Gondola Ride", "Mount Titlis Cable Car", "Lake Lucerne"],
    includes: ["Hotels with Breakfast", "Cross-Border Train", "Excursions"],
    excludes: ["International Flights", "Schengen Visa"],
    seasons: ["May - Oct"],
    rating: 4.92,
    reviewCount: 110,
    itinerary: [
      { day: 1, title: "Rome Arrival", description: "Airport transfer, check-in, Trevi Fountain & Colosseum orientation.", highlights: ["Colosseum"], meals: [], stay: "Rome" },
      { day: 2, title: "Vatican & High Speed Train to Venice", description: "Vatican City tour, then high-speed train to Venice.", highlights: ["Vatican City", "High-Speed Train"], meals: ["breakfast"], stay: "Venice" },
      { day: 3, title: "Venice Canals", description: "Gondola ride across Grand Canal and St. Mark's Square exploration.", highlights: ["Venice Gondola"], meals: ["breakfast"], stay: "Venice" },
      { day: 4, title: "Venice → Scenic Swiss Alps (Lucerne)", description: "Cross-border train journey through the Alps to Lucerne, Switzerland.", highlights: ["Alpine Train Journey"], meals: ["breakfast"], stay: "Lucerne" },
      { day: 5, title: "Mount Titlis Alpine Adventure", description: "Cable car ascent to Mount Titlis for snow activities & glacier cave.", highlights: ["Mount Titlis"], meals: ["breakfast"], stay: "Lucerne" },
      { day: 6, title: "Lucerne → Zurich", description: "Transfer to Zurich, city tour and Lake Zurich evening cruise.", highlights: ["Lake Zurich"], meals: ["breakfast"], stay: "Zurich" },
      { day: 7, title: "Zurich Departure", description: "Breakfast, check-out, and transfer to Zurich Airport.", highlights: ["Airport Transfer"], meals: ["breakfast"], stay: "N/A" }
    ]
  },
  {
    id: "pkg-009",
    slug: "norway-fjords-lights",
    name: "Norway — Fjords & Northern Lights",
    tagline: "Dramatic Arctic fjords, snow adventures, and magical aurora borealis.",
    category: ["international", "europe", "adventure"],
    featured: false,
    heroImage: "https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?w=1200&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?w=1200&q=80"
    ],
    destination: "Oslo & Tromsø",
    country: "Norway",
    duration: { days: 6, nights: 5 },
    priceFrom: 229999,
    maxGroupSize: 10,
    highlights: ["Oslo Fjord Cruise", "Tromsø Arctic Wilderness", "Chasing Northern Lights", "Reindeer & Sami Experience"],
    includes: ["Accommodation", "Daily Breakfast", "Domestic Flight Oslo-Tromsø", "Aurora Safari"],
    excludes: ["International Flights", "Schengen Visa"],
    seasons: ["Oct - Mar (Northern Lights)"],
    rating: 4.91,
    reviewCount: 76,
    itinerary: [
      { day: 1, title: "Oslo Arrival", description: "Airport pickup, hotel check-in, Oslo city tour visiting Vigeland Park and Opera House.", highlights: ["Oslo Opera House"], meals: [], stay: "Oslo" },
      { day: 2, title: "Oslo → Tromsø (Gateway to the Arctic)", description: "Flight to Tromsø above the Arctic Circle. Evening orientation walk.", highlights: ["Tromsø Arctic Circle"], meals: ["breakfast"], stay: "Tromsø" },
      { day: 3, title: "Tromsø City & Cable Car", description: "Visit Arctic Cathedral, take Fjellheisen Cable Car for panoramic fjord views.", highlights: ["Fjellheisen Cable Car"], meals: ["breakfast"], stay: "Tromsø" },
      { day: 4, title: "Fjord Excursion & Wildlife", description: "Scenic cruise through Norway's snow-covered fjords.", highlights: ["Fjord Safari"], meals: ["breakfast"], stay: "Tromsø" },
      { day: 5, title: "Northern Lights Hunt", description: "Guided evening aurora hunt in the Arctic wilderness with hot drinks & campfire.", highlights: ["Northern Lights Safari"], meals: ["breakfast"], stay: "Tromsø" },
      { day: 6, title: "Departure", description: "Check-out and airport transfer.", highlights: ["Airport Transfer"], meals: ["breakfast"], stay: "N/A" }
    ]
  },
  // ─── AFRICA ────────────────────────────────────────────────────────────────
  {
    id: "pkg-010",
    slug: "south-africa-explorer",
    name: "South Africa Explorer",
    tagline: "Cape Town & Big Five Safari",
    category: ["international", "africa", "adventure"],
    featured: true,
    heroImage: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=1200&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=1200&q=80"
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
    id: "pkg-011",
    slug: "kenya-safari-escape",
    name: "Kenya Safari Escape",
    tagline: "Nairobi & Maasai Mara Wildlife Experience",
    category: ["international", "africa", "adventure"],
    featured: true,
    heroImage: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1200&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1200&q=80"
    ],
    destination: "Nairobi & Maasai Mara",
    country: "Kenya",
    duration: { days: 5, nights: 4 },
    priceFrom: 129999,
    maxGroupSize: 10,
    highlights: ["Nairobi City Tour", "Great Rift Valley", "Maasai Mara Big Five Safari", "Optional Maasai Village Visit"],
    includes: ["Accommodation", "Daily Breakfast", "Safari Game Drives", "Park Fees"],
    excludes: ["International Flights", "Visas", "Personal Expenses"],
    seasons: ["Jul - Oct (Migration)"],
    rating: 4.9,
    reviewCount: 120,
    itinerary: [
      { day: 1, title: "Arrive Nairobi", description: "Airport pickup, hotel check-in, Nairobi city tour, Giraffe Centre, Karen area.", highlights: ["Giraffe Centre"], meals: [], stay: "Nairobi" },
      { day: 2, title: "Nairobi → Maasai Mara", description: "Drive toward Maasai Mara, Great Rift Valley viewpoint, afternoon game drive.", highlights: ["Great Rift Valley", "Afternoon Game Drive"], meals: ["breakfast", "lunch", "dinner"], stay: "Maasai Mara" },
      { day: 3, title: "Full-Day Maasai Mara Safari", description: "Morning and afternoon game drives searching for lions, elephants, buffalos, and more.", highlights: ["Big Five Safari"], meals: ["breakfast", "lunch", "dinner"], stay: "Maasai Mara" },
      { day: 4, title: "Maasai Mara → Nairobi", description: "Early morning game drive, drive back to Nairobi, evening leisure/shopping.", highlights: ["Morning Safari", "Shopping"], meals: ["breakfast"], stay: "Nairobi" },
      { day: 5, title: "Nairobi → Airport", description: "Optional Nairobi sightseeing depending on flight time, airport transfer.", highlights: ["Airport Transfer"], meals: ["breakfast"], stay: "N/A" }
    ]
  },
  {
    id: "pkg-012",
    slug: "south-africa-premium-explorer",
    name: "South Africa Premium Explorer",
    tagline: "Johannesburg, Kruger National Park & Cape Town",
    category: ["international", "africa", "luxury", "adventure"],
    featured: false,
    heroImage: "https://images.unsplash.com/photo-1509773896068-7fd415d91e2e?w=1200&q=80&fm=webp",
    galleryImages: [
      "https://images.unsplash.com/photo-1509773896068-7fd415d91e2e?w=1200&q=80&fm=webp"
    ],
    destination: "Johannesburg, Kruger & Cape Town",
    country: "South Africa",
    duration: { days: 8, nights: 7 },
    priceFrom: 189999,
    maxGroupSize: 10,
    highlights: ["Soweto Township Tour", "Kruger National Park Big Five Safari", "Table Mountain", "Cape Peninsula"],
    includes: ["Accommodation", "Daily Breakfast", "Domestic Flights", "Kruger Game Drives", "Airport Transfers"],
    excludes: ["International Flights", "Visas", "Personal Expenses"],
    seasons: ["All Year"],
    rating: 4.85,
    reviewCount: 65,
    itinerary: [
      { day: 1, title: "Arrival in Johannesburg", description: "Private airport transfer, hotel check-in, evening at leisure.", highlights: ["Nelson Mandela Square"], meals: [], stay: "Johannesburg" },
      { day: 2, title: "Johannesburg City + Soweto", description: "Johannesburg city orientation, Soweto Township Tour, Vilakazi Street, Nelson Mandela House.", highlights: ["Soweto Tour", "Nelson Mandela House"], meals: ["breakfast"], stay: "Johannesburg" },
      { day: 3, title: "Johannesburg → Kruger National Park", description: "Flight to Skukuza/Kruger area, lodge check-in, afternoon game drive.", highlights: ["Afternoon Safari"], meals: ["breakfast", "lunch", "dinner"], stay: "Kruger Safari Lodge" },
      { day: 4, title: "Full-Day Kruger Safari", description: "Morning sunrise safari and afternoon sunset game drive searching for the Big Five.", highlights: ["Sunrise Safari", "Sunset Safari"], meals: ["breakfast", "lunch", "dinner"], stay: "Kruger Safari Lodge" },
      { day: 5, title: "Kruger → Cape Town", description: "Morning game drive, flight to Cape Town, evening at V&A Waterfront.", highlights: ["V&A Waterfront"], meals: ["breakfast"], stay: "Cape Town" },
      { day: 6, title: "Cape Town City + Table Mountain", description: "Cape Town City Tour, Table Mountain Cableway, Bo-Kaap, Greenmarket Square.", highlights: ["Table Mountain", "Bo-Kaap"], meals: ["breakfast"], stay: "Cape Town" },
      { day: 7, title: "Cape Peninsula Full-Day Tour", description: "Clifton, Camps Bay, Hout Bay, Cape of Good Hope, Boulders Beach Penguin Colony.", highlights: ["Cape Point", "Penguin Colony"], meals: ["breakfast"], stay: "Cape Town" },
      { day: 8, title: "Cape Town → Departure", description: "Free time, private airport transfer, departure from Cape Town.", highlights: ["Airport Transfer"], meals: ["breakfast"], stay: "N/A" }
    ]
  },
  // ─── MORE ASIA ─────────────────────────────────────────────────────────────
  {
    id: "pkg-013",
    slug: "vietnam-triple-experience",
    name: "Vietnam Triple Experience",
    tagline: "Hanoi, Da Nang & Phu Quoc",
    category: ["international", "asia", "family"],
    featured: false,
    heroImage: "https://images.unsplash.com/photo-1528127269322-539801943592?w=1200&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1528127269322-539801943592?w=1200&q=80"
    ],
    destination: "Hanoi, Da Nang & Phu Quoc",
    country: "Vietnam",
    duration: { days: 6, nights: 5 },
    priceFrom: 49999,
    maxGroupSize: 15,
    highlights: ["Hanoi Old Quarter", "Ninh Binh Trang An", "Golden Bridge Ba Na Hills", "Hoi An Ancient Town", "Phu Quoc Beaches"],
    includes: ["Accommodation", "Daily Breakfast", "Domestic Flights", "Tours & Transfers"],
    excludes: ["International Flights", "Visas", "Personal Expenses"],
    seasons: ["All Year"],
    rating: 4.7,
    reviewCount: 155,
    itinerary: [
      { day: 1, title: "Arrival Hanoi", description: "Airport pickup, Hoan Kiem Lake, Hanoi Old Quarter, Train Street.", highlights: ["Train Street", "Old Quarter"], meals: [], stay: "Hanoi" },
      { day: 2, title: "Hanoi + Ninh Binh", description: "Full-day Ninh Binh excursion, Trang An boat ride, Mua Cave viewpoint.", highlights: ["Trang An Boat Ride", "Mua Cave"], meals: ["breakfast"], stay: "Hanoi" },
      { day: 3, title: "Hanoi → Da Nang", description: "Flight to Da Nang, Marble Mountains, My Khe Beach, Dragon Bridge.", highlights: ["Marble Mountains", "Dragon Bridge"], meals: ["breakfast"], stay: "Da Nang" },
      { day: 4, title: "Ba Na Hills + Hoi An", description: "Ba Na Hills cable car, Golden Bridge, return via Hoi An Ancient Town lantern streets.", highlights: ["Golden Bridge", "Hoi An"], meals: ["breakfast"], stay: "Da Nang" },
      { day: 5, title: "Da Nang → Phu Quoc", description: "Flight to Phu Quoc, beach leisure, sunset, Night Market.", highlights: ["Phu Quoc Beaches", "Night Market"], meals: ["breakfast"], stay: "Phu Quoc" },
      { day: 6, title: "Phu Quoc → Departure", description: "Free time, optional beach activities, airport transfer.", highlights: ["Airport Transfer"], meals: ["breakfast"], stay: "N/A" }
    ]
  },
  {
    id: "pkg-014",
    slug: "laos-heritage",
    name: "Laos Heritage Escape",
    tagline: "Luang Prabang & Vientiane",
    category: ["international", "asia", "adventure"],
    featured: false,
    heroImage: "https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?w=1200&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?w=1200&q=80"
    ],
    destination: "Luang Prabang & Vientiane",
    country: "Laos",
    duration: { days: 6, nights: 5 },
    priceFrom: 49999,
    maxGroupSize: 12,
    highlights: ["Luang Prabang Old Town", "Kuang Si Waterfalls", "Mekong Riverside", "Pha That Luang"],
    includes: ["Accommodation", "Daily Breakfast", "High-speed Train", "Tours"],
    excludes: ["International Flights", "Visas", "Personal Expenses"],
    seasons: ["Oct - Apr"],
    rating: 4.8,
    reviewCount: 42,
    itinerary: [
      { day: 1, title: "Arrival Luang Prabang", description: "Airport pickup, Old Town, Mekong riverside, Night Market.", highlights: ["Night Market"], meals: [], stay: "Luang Prabang" },
      { day: 2, title: "Luang Prabang", description: "Royal Palace Museum, Wat Xieng Thong, Mount Phousi, Traditional handicraft market.", highlights: ["Wat Xieng Thong", "Mount Phousi"], meals: ["breakfast"], stay: "Luang Prabang" },
      { day: 3, title: "Kuang Si Waterfalls", description: "Kuang Si Waterfalls, Bear Rescue Centre, local village visit.", highlights: ["Kuang Si Waterfalls"], meals: ["breakfast"], stay: "Luang Prabang" },
      { day: 4, title: "Luang Prabang → Vientiane", description: "High-speed train to Vientiane, Patuxai Monument, Mekong Riverside.", highlights: ["High-speed train", "Patuxai Monument"], meals: ["breakfast"], stay: "Vientiane" },
      { day: 5, title: "Vientiane", description: "Pha That Luang, Wat Si Saket, Buddha Park, local market.", highlights: ["Buddha Park", "Pha That Luang"], meals: ["breakfast"], stay: "Vientiane" },
      { day: 6, title: "Departure", description: "Breakfast, airport transfer.", highlights: ["Airport Transfer"], meals: ["breakfast"], stay: "N/A" }
    ]
  },
  {
    id: "pkg-015",
    slug: "cambodia-heritage",
    name: "Cambodia Heritage Escape",
    tagline: "Angkor Wat, Floating Village & Phnom Penh",
    category: ["international", "asia", "adventure"],
    featured: false,
    heroImage: "https://images.unsplash.com/photo-1512805147242-c3e794fc2553?w=1200&q=80&fm=webp",
    galleryImages: [
      "https://images.unsplash.com/photo-1512805147242-c3e794fc2553?w=1200&q=80&fm=webp"
    ],
    destination: "Siem Reap & Phnom Penh",
    country: "Cambodia",
    duration: { days: 6, nights: 5 },
    priceFrom: 44999,
    maxGroupSize: 15,
    highlights: ["Sunrise at Angkor Wat", "Bayon Temple", "Tonlé Sap Lake", "Tuol Sleng Museum"],
    includes: ["Accommodation", "Daily Breakfast", "Domestic Transfer", "Temple Passes"],
    excludes: ["International Flights", "Visas", "Personal Expenses"],
    seasons: ["Oct - May"],
    rating: 4.85,
    reviewCount: 110,
    itinerary: [
      { day: 1, title: "Arrival Siem Reap", description: "Airport pickup, Old Market, Pub Street.", highlights: ["Pub Street"], meals: [], stay: "Siem Reap" },
      { day: 2, title: "Angkor Wat", description: "Sunrise at Angkor Wat, Angkor Thom, Bayon Temple, Ta Prohm.", highlights: ["Angkor Wat", "Ta Prohm"], meals: ["breakfast"], stay: "Siem Reap" },
      { day: 3, title: "Siem Reap", description: "Banteay Srei, Cambodian village experience, Tonlé Sap Lake, Floating village.", highlights: ["Tonlé Sap Lake", "Floating Village"], meals: ["breakfast"], stay: "Siem Reap" },
      { day: 4, title: "Siem Reap → Phnom Penh", description: "Transfer/flight to Phnom Penh, Royal Palace, Silver Pagoda, Riverside.", highlights: ["Royal Palace"], meals: ["breakfast"], stay: "Phnom Penh" },
      { day: 5, title: "Phnom Penh", description: "Tuol Sleng Genocide Museum, Central Market, Wat Phnom, Mekong sunset cruise.", highlights: ["Tuol Sleng Museum", "Mekong Cruise"], meals: ["breakfast"], stay: "Phnom Penh" },
      { day: 6, title: "Departure", description: "Airport transfer, departure.", highlights: ["Airport Transfer"], meals: ["breakfast"], stay: "N/A" }
    ]
  },
  {
    id: "pkg-016",
    slug: "philippines-manila-boracay",
    name: "Philippines — Manila & Boracay",
    tagline: "City heritage and pristine white sand beaches.",
    category: ["international", "asia", "family", "honeymoon"],
    featured: false,
    heroImage: "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?w=1200&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?w=1200&q=80"
    ],
    destination: "Manila & Boracay",
    country: "Philippines",
    duration: { days: 6, nights: 5 },
    priceFrom: 59999,
    maxGroupSize: 15,
    highlights: ["Intramuros Manila", "White Beach Boracay", "Island-hopping tour", "Water sports"],
    includes: ["Accommodation", "Daily Breakfast", "Domestic Flights", "Transfers"],
    excludes: ["International Flights", "Visas", "Personal Expenses"],
    seasons: ["Nov - May"],
    rating: 4.75,
    reviewCount: 88,
    itinerary: [
      { day: 1, title: "Manila Arrival", description: "Airport pickup, Manila city orientation, Intramuros, Manila Bay sunset.", highlights: ["Intramuros", "Manila Bay"], meals: [], stay: "Manila" },
      { day: 2, title: "Manila → Boracay", description: "Flight to Caticlan, transfer to Boracay, White Beach, sunset.", highlights: ["White Beach"], meals: ["breakfast"], stay: "Boracay" },
      { day: 3, title: "Boracay Island Hopping", description: "Island-hopping tour, Puka Beach, Snorkelling, Crystal Cove, Sunset experience.", highlights: ["Island Hopping", "Puka Beach"], meals: ["breakfast"], stay: "Boracay" },
      { day: 4, title: "Boracay Adventure", description: "Free beach time, optional parasailing, helmet diving, D'Mall shopping.", highlights: ["Water sports", "D'Mall"], meals: ["breakfast"], stay: "Boracay" },
      { day: 5, title: "Boracay → Manila", description: "Flight back to Manila, shopping at Mall of Asia, dinner.", highlights: ["Mall of Asia"], meals: ["breakfast"], stay: "Manila" },
      { day: 6, title: "Manila → Airport", description: "Check-out, airport transfer.", highlights: ["Airport Transfer"], meals: ["breakfast"], stay: "N/A" }
    ]
  },
  {
    id: "pkg-017",
    slug: "china-shanghai-beijing",
    name: "China — Shanghai + Beijing",
    tagline: "Shanghai, Beijing, Great Wall & Forbidden City",
    category: ["international", "asia", "china", "family"],
    featured: false,
    heroImage: "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=1200&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=1200&q=80"
    ],
    destination: "Shanghai & Beijing",
    country: "China",
    duration: { days: 6, nights: 5 },
    priceFrom: 69999,
    maxGroupSize: 15,
    highlights: ["The Bund", "High-speed train", "Mutianyu Great Wall", "Forbidden City"],
    includes: ["Accommodation", "Daily Breakfast", "High-speed Train", "Tours"],
    excludes: ["International Flights", "Visas", "Personal Expenses"],
    seasons: ["Apr - Oct"],
    rating: 4.8,
    reviewCount: 95,
    itinerary: [
      { day: 1, title: "Shanghai Arrival", description: "Airport pickup, The Bund, Nanjing Road, Huangpu River evening view.", highlights: ["The Bund"], meals: [], stay: "Shanghai" },
      { day: 2, title: "Shanghai", description: "Yu Garden, Old City, Shanghai Museum, French Concession.", highlights: ["Yu Garden", "French Concession"], meals: ["breakfast"], stay: "Shanghai" },
      { day: 3, title: "Shanghai → Beijing", description: "High-speed train to Beijing, Wangfujing Street, Tiananmen Square evening view.", highlights: ["High-speed train"], meals: ["breakfast"], stay: "Beijing" },
      { day: 4, title: "Great Wall", description: "Mutianyu Great Wall, Olympic Park photo stop.", highlights: ["Great Wall"], meals: ["breakfast"], stay: "Beijing" },
      { day: 5, title: "Beijing", description: "Forbidden City, Tiananmen Square, Temple of Heaven, Hutong experience.", highlights: ["Forbidden City", "Temple of Heaven"], meals: ["breakfast"], stay: "Beijing" },
      { day: 6, title: "Beijing → Airport", description: "Check-out, airport transfer.", highlights: ["Airport Transfer"], meals: ["breakfast"], stay: "N/A" }
    ]
  },
  {
    id: "pkg-018",
    slug: "south-korea-seoul",
    name: "South Korea — Seoul + Nami Island",
    tagline: "Seoul, Nami Island, K-Culture & Shopping",
    category: ["international", "asia", "south-korea", "family", "honeymoon"],
    featured: false,
    heroImage: "https://images.unsplash.com/photo-1538485399081-7191377e8241?w=1200&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1538485399081-7191377e8241?w=1200&q=80"
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
  },
  {
    id: "pkg-019",
    slug: "japan-tokyo-kyoto",
    name: "Japan — Tokyo + Mt. Fuji + Kyoto",
    tagline: "Tokyo, Mt. Fuji, Kyoto & Shinkansen",
    category: ["international", "asia", "japan", "luxury", "family"],
    featured: true,
    heroImage: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=1200&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=1200&q=80"
    ],
    destination: "Tokyo, Mt. Fuji & Kyoto",
    country: "Japan",
    duration: { days: 6, nights: 5 },
    priceFrom: 99999,
    maxGroupSize: 10,
    highlights: ["Shibuya Crossing", "Mt. Fuji", "Shinkansen Experience", "Fushimi Inari Shrine"],
    includes: ["Accommodation", "Daily Breakfast", "Shinkansen Ticket", "Tours"],
    excludes: ["International Flights", "Visas", "Personal Expenses"],
    seasons: ["Mar - May (Cherry Blossom)", "Sep - Nov (Autumn)"],
    rating: 4.95,
    reviewCount: 200,
    itinerary: [
      { day: 1, title: "Tokyo Arrival", description: "Airport pickup, Shibuya Crossing, Hachiko Statue, Shinjuku.", highlights: ["Shibuya Crossing"], meals: [], stay: "Tokyo" },
      { day: 2, title: "Tokyo City Tour", description: "Asakusa, Senso-ji Temple, Tokyo Skytree, Meiji Shrine, Harajuku, Ginza.", highlights: ["Senso-ji Temple", "Meiji Shrine"], meals: ["breakfast"], stay: "Tokyo" },
      { day: 3, title: "Mt. Fuji", description: "Mt. Fuji / Hakone excursion, Lake Kawaguchi, Oshino Hakkai.", highlights: ["Mt. Fuji"], meals: ["breakfast"], stay: "Tokyo" },
      { day: 4, title: "Tokyo → Kyoto", description: "Shinkansen experience to Kyoto, Fushimi Inari Shrine, Gion.", highlights: ["Shinkansen", "Fushimi Inari Shrine"], meals: ["breakfast"], stay: "Kyoto" },
      { day: 5, title: "Kyoto", description: "Kinkaku-ji, Arashiyama Bamboo Grove, Togetsukyo Bridge, Kiyomizu-dera.", highlights: ["Arashiyama Bamboo Grove", "Kinkaku-ji"], meals: ["breakfast"], stay: "Kyoto" },
      { day: 6, title: "Kyoto → Airport", description: "Transfer to Kansai/Osaka airport, departure.", highlights: ["Airport Transfer"], meals: ["breakfast"], stay: "N/A" }
    ]
  },
  {
    id: "pkg-020",
    slug: "hong-kong-macau",
    name: "Hong Kong + Macau",
    tagline: "City lights, Disneyland, Victoria Peak & Macau",
    category: ["international", "asia", "family"],
    featured: false,
    heroImage: "https://images.unsplash.com/photo-1507226983735-a838615193b0?w=1200&q=80&fm=webp",
    galleryImages: [
      "https://images.unsplash.com/photo-1507226983735-a838615193b0?w=1200&q=80&fm=webp"
    ],
    destination: "Hong Kong & Macau",
    country: "Hong Kong SAR & Macau SAR",
    duration: { days: 6, nights: 5 },
    priceFrom: 64999,
    maxGroupSize: 15,
    highlights: ["Victoria Peak", "Hong Kong Disneyland", "Ruins of St. Paul's", "Venetian Macau"],
    includes: ["Accommodation", "Daily Breakfast", "Ferry Tickets", "Tours"],
    excludes: ["International Flights", "Visas", "Personal Expenses"],
    seasons: ["Oct - Apr"],
    rating: 4.75,
    reviewCount: 85,
    itinerary: [
      { day: 1, title: "Hong Kong Arrival", description: "Airport pickup, Victoria Harbour, Tsim Sha Tsui, Symphony of Lights.", highlights: ["Symphony of Lights"], meals: [], stay: "Hong Kong" },
      { day: 2, title: "Hong Kong Island", description: "Victoria Peak, Peak Tram, Central, Avenue of Stars, Star Ferry, Temple Street Night Market.", highlights: ["Victoria Peak", "Peak Tram"], meals: ["breakfast"], stay: "Hong Kong" },
      { day: 3, title: "Disneyland / Ocean Park", description: "Full-day Hong Kong Disneyland or Ocean Park.", highlights: ["Hong Kong Disneyland"], meals: ["breakfast"], stay: "Hong Kong" },
      { day: 4, title: "Hong Kong → Macau", description: "Ferry/transfer to Macau, Ruins of St. Paul's, Senado Square, A-Ma Temple, Macau Tower.", highlights: ["Ruins of St. Paul's"], meals: ["breakfast"], stay: "Macau" },
      { day: 5, title: "Macau", description: "Venetian Macau, Parisian Macau, Cotai Strip, Casinos/entertainment area.", highlights: ["Venetian Macau", "Cotai Strip"], meals: ["breakfast"], stay: "Macau" },
      { day: 6, title: "Macau → Hong Kong Airport", description: "Transfer to Hong Kong International Airport, departure.", highlights: ["Airport Transfer"], meals: ["breakfast"], stay: "N/A" }
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
