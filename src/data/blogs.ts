// ─────────────────────────────────────────────────────────────────────────────
// Blog & Editorial Content Data — SEO & AEO Optimized
// Author: Chandan .S (Founder & Chief Executive, The Man Wanders Globe)
// ─────────────────────────────────────────────────────────────────────────────

export interface BlogPost {
  slug: string;
  title: string;
  subtitle: string;
  summary: string;
  heroImage: string;
  publishedDate: string; // ISO format
  modifiedDate: string;  // ISO format
  readingTime: string;
  category: string;
  tags: string[];
  author: {
    name: string;
    role: string;
    bio: string;
    image?: string;
  };
  keyTakeaways: string[];
  content: {
    heading: string;
    bodyHtml: string;
    subsections?: {
      title: string;
      contentHtml: string;
    }[];
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
  relatedPackagesSlugs: string[];
  relatedDestinationsSlugs: string[];
}

const CHANDAN_AUTHOR = {
  name: "Chandan .S",
  role: "Founder & Chief Executive",
  bio: "Passionate globetrotter, industry visioner, and founder of The Man Wanders Globe Tours. Chandan has curated bespoke travel experiences for over 5,000 Indian travellers across 30+ countries.",
  image: "/team/founder.webp",
};

export const BLOGS: BlogPost[] = [
  {
    slug: "international-travel-guide-from-india",
    title: "The Ultimate International Travel Guide from India (2026/2027): Visas, Currency & Best Destinations",
    subtitle: "Everything Indian travellers need to plan a seamless, stress-free overseas holiday.",
    summary: "Planning your first or next international vacation from India? From passport validity rules and Forex card selection to visa-free countries and booking timelines, here is your definitive master guide.",
    heroImage: "/images/blog/international-travel-guide.webp",
    publishedDate: "2026-03-01T10:00:00+05:30",
    modifiedDate: "2026-09-01T14:30:00+05:30",
    readingTime: "8 min read",
    category: "Travel Guides",
    tags: ["International Travel", "Travel Tips", "Forex Card", "Visa on Arrival", "First Time Abroad"],
    author: CHANDAN_AUTHOR,
    keyTakeaways: [
      "Ensure your Indian passport has at least 6 months validity from departure date and at least 3 blank pages.",
      "Zero-forex markup debit/credit cards save 3.5% to 5% over traditional currency exchange counters at airports.",
      "Thailand, Malaysia, Sri Lanka, and Bali offer either visa-free entry or instant e-Visa facilities for Indian passport holders.",
      "Always book international flights and accommodation 60 to 90 days in advance to capture optimal rates.",
      "Comprehensive travel insurance covering minimum $100,000 emergency medical care is indispensable."
    ],
    content: [
      {
        heading: "1. Passport Validity & Essential Document Readiness",
        bodyHtml: `<p>Before looking at flights or hotel listings, verify your passport. Over 60% of last-minute travel cancellations occur due to passport oversights. Most immigration checkpoints worldwide require that your passport is valid for at least <strong>6 months beyond your scheduled date of return</strong>.</p>
        <p>Additionally, make sure you have at least 3 to 4 completely blank visa pages. Keep digital backups of your passport, flight tickets, confirmed hotel vouchers, and insurance saved in encrypted cloud storage and locally on your phone.</p>`
      },
      {
        heading: "2. Easiest International Destinations for Indian Passports",
        bodyHtml: `<p>If you prefer minimal paperwork and fast approvals, Southeast Asia and island nations provide the smoothest gateways:</p>
        <ul>
          <li><strong>Thailand:</strong> Visa exemption schemes and rapid online e-Visas make Bangkok, Phuket, and Krabi seamless 4-hour flight destinations from major Indian metros.</li>
          <li><strong>Bali (Indonesia):</strong> 30-day electronic Visa on Arrival (e-VOA) available online within 10 minutes.</li>
          <li><strong>Malaysia:</strong> Visa-free entry initiatives for Indian tourists with a simple Malaysia Digital Arrival Card (MDAC) pre-registration.</li>
          <li><strong>Dubai & UAE:</strong> 30-day or 60-day tourist e-Visas processed within 24 to 48 hours using just a passport copy and photograph.</li>
          <li><strong>Maldives:</strong> Free 30-day tourist visa granted on arrival with valid return tickets and hotel confirmation.</li>
        </ul>`
      },
      {
        heading: "3. Smart Money Management: Cash vs Forex Cards",
        bodyHtml: `<p>Never exchange currency at international departure airports, where margins can exceed 7% to 10%. Instead, utilize modern zero-markup multi-currency Forex debit cards or credit cards.</p>
        <p>A sensible breakdown for Indian international travellers is <strong>80% digital card spend and 20% local currency cash</strong> for street food, public transport, and tips.</p>`
      },
      {
        heading: "4. The Advantage of Curated Itineraries over DIY Portals",
        bodyHtml: `<p>While online aggregator portals display endless choices, they leave you entirely on your own when a connection is missed, a flight is cancelled, or a remote hotel fails to honor a reservation. At <strong>The Man Wanders Globe</strong>, our travel specialists personally vet every stay and driver, providing 24/7 dedicated WhatsApp concierge support throughout your trip.</p>`
      }
    ],
    faqs: [
      {
        question: "How much bank balance is required for an international trip from India?",
        answer: "For Southeast Asian destinations like Thailand and Bali, maintaining ₹50,000 to ₹1,00,000 per person is sufficient. For Schengen Europe, the UK, or Japan, embassies generally look for a steady closing balance of ₹2,50,000 to ₹4,00,000 per person along with 6 months of active bank statements."
      },
      {
        question: "Is travel insurance mandatory for Indian citizens travelling abroad?",
        answer: "Travel insurance is strictly mandatory for the Schengen Area (minimum €30,000 medical coverage), the USA, and several other countries. Even where not legally required, emergency medical expenses abroad can easily exceed ₹10–20 lakhs, making insurance indispensable."
      },
      {
        question: "How early should I book an international holiday package?",
        answer: "For Southeast Asia and Dubai, 30 to 45 days in advance is sufficient. For Europe, Japan, the UK, and USA, we recommend beginning 60 to 90 days before travel to secure visa appointment slots and favorable flight fares."
      }
    ],
    relatedPackagesSlugs: ["thailand-phuket-krabi", "bali-5d4n", "dubai-5d4n"],
    relatedDestinationsSlugs: ["thailand", "bali", "dubai"]
  },
  {
    slug: "best-international-holiday-packages-from-bengaluru",
    title: "10 Best International Holiday Packages from Bengaluru: Flights, Costs & Itineraries",
    subtitle: "Direct flight connections, budget estimates, and top overseas getaways departing from Kempegowda International Airport (BLR).",
    summary: "Bengaluru travellers enjoy unmatched non-stop global connectivity from Terminal 2 (BLR). Here are the 10 best international holiday packages from Bengaluru, complete with flight times, pricing, and ideal durations.",
    heroImage: "/images/blog/best-international-packages-bengaluru.webp",
    publishedDate: "2026-03-10T11:00:00+05:30",
    modifiedDate: "2026-09-02T16:00:00+05:30",
    readingTime: "7 min read",
    category: "Bengaluru Travel",
    tags: ["Bengaluru Travel Agency", "BLR Airport", "International Packages", "Family Vacations", "Honeymoon from Bangalore"],
    author: CHANDAN_AUTHOR,
    keyTakeaways: [
      "Bengaluru Airport (BLR) offers direct non-stop flights to Singapore, Dubai, Bangkok, Phuket, Kuala Lumpur, Malé, Doha, and London.",
      "Southeast Asia destinations like Thailand and Bali provide the highest luxury-to-cost ratio for 5-to-7 day getaways.",
      "European summer trips (Switzerland, Paris, Italy) are ideally booked by February/March for travel between May and September.",
      "The Man Wanders Globe offers localized itinerary curation, door-step visa document verification, and personalized airport assistance."
    ],
    content: [
      {
        heading: "Why Bengaluru Travellers Have a Major Advantage",
        bodyHtml: `<p>With the award-winning Kempegowda International Airport Terminal 2 expanding its international flight corridors, Bengalureans can reach pristine tropical beaches or futuristic skylines in under 4 to 5 hours without painful domestic layovers.</p>`
      },
      {
        heading: "Top International Packages from Bengaluru",
        bodyHtml: `<p>Here are the most popular curated departures tailored for Bangalore travellers:</p>
        <ol>
          <li><strong>Bali Private Pool Villa Escape (5N/6D):</strong> Direct or 1-stop via KL/Singapore. Ideal for honeymooners and families exploring Ubud and Seminyak.</li>
          <li><strong>Thailand Island Hopping (Phuket & Krabi):</strong> Direct 3.5-hour flights. Speeds you to Phang Nga Bay and Phi Phi islands.</li>
          <li><strong>Dubai & Abu Dhabi Luxury Explorer (5N/6D):</strong> 4-hour direct flights on Emirates/IndiGo. Features desert glamping, Burj Khalifa, and Ferrari World.</li>
          <li><strong>Singapore & Sentosa Family Adventure (5N/6D):</strong> Universal Studios, Night Safari, and Gardens by the Bay.</li>
          <li><strong>Swiss Alps & Paris Dreams (9N/10D):</strong> Scenic rail passes through Interlaken, Lucerne, and the Eiffel Tower.</li>
          <li><strong>Sri Lanka Ramayana & Coastal Trail (5N/6D):</strong> Short 1.5-hour flight from BLR to Colombo.</li>
        </ol>`
      },
      {
        heading: "Bengaluru's Trusted Local Concierge",
        bodyHtml: `<p>Unlike remote call-centre portals, <strong>The Man Wanders Globe Tours</strong> operates directly in Bengaluru (Magadi Main Road / Chikkagollarahatti). We provide personalized travel consultations, physical document reviews for complex visas, and transparent itemized invoices.</p>`
      }
    ],
    faqs: [
      {
        question: "Which international destinations have direct flights from Bengaluru?",
        answer: "BLR Airport has direct non-stop flights to Dubai, Abu Dhabi, Doha, Singapore, Bangkok, Phuket, Kuala Lumpur, Malé (Maldives), London Heathrow, Paris, Frankfurt, and Colombo."
      },
      {
        question: "What is the average cost of an international trip from Bengaluru for a couple?",
        answer: "A 5-day package to Bali, Thailand, or Sri Lanka typically ranges from ₹70,000 to ₹1,40,000 for a couple (excluding airfare). Luxury European packages range from ₹3,50,000 to ₹6,00,000 depending on season and hotel category."
      }
    ],
    relatedPackagesSlugs: ["bali-5d4n", "thailand-phuket-krabi", "dubai-5d4n", "singapore-5d4n"],
    relatedDestinationsSlugs: ["bali", "thailand", "dubai", "singapore"]
  },
  {
    slug: "schengen-visa-guide-for-indians",
    title: "Schengen Visa from India 2026: Requirements, VFS Appointment Hacks & Checklist",
    subtitle: "A step-by-step master guide to securing a European tourist visa with high approval probability.",
    summary: "Navigating VFS slots and embassy requirements can feel daunting. Here is our expert guide on Schengen visa rules, cover letter drafting, financial documentation, and common pitfalls to avoid.",
    heroImage: "/images/blog/schengen-visa-guide.webp",
    publishedDate: "2026-03-15T09:00:00+05:30",
    modifiedDate: "2026-09-03T11:00:00+05:30",
    readingTime: "9 min read",
    category: "Visa Concierge",
    tags: ["Schengen Visa", "Europe Visa", "VFS Global", "Visa Guide", "Travel Documentation"],
    author: CHANDAN_AUTHOR,
    keyTakeaways: [
      "Always apply at the consulate of the country where you will spend the maximum number of nights.",
      "A tailored, professional cover letter linking your itinerary with ties to India is the single most crucial document.",
      "Embassies require verified flight reservations and hotel bookings — non-refundable flight purchases are not necessary upfront.",
      "VFS appointment slots open in rolling batches; monitoring cancellations can advance your submission date by weeks."
    ],
    content: [
      {
        heading: "The Rule of Main Destination vs First Entry",
        bodyHtml: `<p>Under Article 5 of the Schengen Visa Code, you must apply to the embassy or consulate of the country that represents the <strong>main purpose or longest stay</strong> of your journey. Only if your stays across multiple countries are of equal duration do you apply to the country of first entry.</p>
        <p>Applying to the wrong country purely because appointment slots are open is the leading reason for immediate visa rejection or airport boarding denial.</p>`
      },
      {
        heading: "Essential Document Checklist for Indian Applicants",
        bodyHtml: `<ul>
          <li><strong>Completed & Signed Schengen Application Form:</strong> Filled without discrepancies against your passport.</li>
          <li><strong>Original Passport:</strong> Valid for 3+ months beyond exit date with 2 blank pages.</li>
          <li><strong>Cover Letter:</strong> Detailing day-by-day itinerary, purpose of visit, funding sources, and strong ties to India (employment, business, property).</li>
          <li><strong>Proof of Financial Solvency:</strong> 6 months original bank statements stamped by the bank, 3 years ITR acknowledgement, and recent salary slips.</li>
          <li><strong>Travel Health Insurance:</strong> Minimum €30,000 coverage including emergency medical evacuation and repatriation valid across all 29 Schengen states.</li>
          <li><strong>Verifiable Flight Itinerary & Hotel Vouchers:</strong> Fully matching the dates stated in your cover letter.</li>
        </ul>`
      },
      {
        heading: "How The Man Wanders Globe Visa Concierge Helps",
        bodyHtml: `<p>Our dedicated visa division performs a rigorous 3-tier document audit, drafts consular-grade cover letters, tracks early VFS slots across Indian centres, and coordinates verified dummy itineraries that satisfy embassy regulations without risking your funds.</p>`
      }
    ],
    faqs: [
      {
        question: "How long does a Schengen visa take to process from India?",
        answer: "Official processing time is typically 15 calendar days from the appointment date. During peak summer seasons (April to July), it can take 20 to 30 working days. We recommend applying 45 to 60 days in advance."
      },
      {
        question: "Can I apply for a Schengen visa if I had a previous rejection?",
        answer: "Yes. An earlier rejection does not bar you from applying. We analyze the refusal refusal clause (typically Clause 10 or 13), rectify the missing documentation or financial justification, and reapply with a comprehensive explanatory cover letter."
      }
    ],
    relatedPackagesSlugs: ["switzerland-6d5n", "france-5d4n", "italy-6d5n"],
    relatedDestinationsSlugs: ["europe"]
  },
  {
    slug: "bali-vs-thailand-holiday-comparison",
    title: "Bali vs Thailand for Indian Travellers: Costs, Itineraries & Which is Better",
    subtitle: "Direct head-to-head comparison of food, beaches, nightlife, culture, and travel budget.",
    summary: "Stuck between Bali and Thailand for your next holiday? We break down flight costs from India, hotel luxury value, vegetarian dining ease, nightlife, and sightseeing to help you decide.",
    heroImage: "/images/blog/bali-vs-thailand-comparison.webp",
    publishedDate: "2026-03-20T12:00:00+05:30",
    modifiedDate: "2026-09-04T10:00:00+05:30",
    readingTime: "6 min read",
    category: "Destination Comparison",
    tags: ["Bali vs Thailand", "Southeast Asia", "Beach Vacations", "Honeymoon Destinations", "Budget Holidays"],
    author: CHANDAN_AUTHOR,
    keyTakeaways: [
      "Thailand is faster and cheaper to reach with multiple non-stop 3.5-hour flights from Indian metros.",
      "Bali offers superior private pool villa luxury at remarkably affordable price points.",
      "Thailand wins for vibrant nightlife, shopping, and street food diversity.",
      "Bali offers a richer spiritual atmosphere, Hindu temple heritage, lush rice terraces, and romantic couples' escapes."
    ],
    content: [
      {
        heading: "1. Flight Connectivity & Visa Simplicity",
        bodyHtml: `<p><strong>Thailand:</strong> Non-stop flights from Delhi, Mumbai, Bengaluru, Chennai, and Kolkata to Bangkok or Phuket take between 3.5 and 4 hours. With visa waivers or instant e-visas, you can decide to travel on Wednesday and be on the beach by Friday.</p>
        <p><strong>Bali:</strong> Flights typically take 7 to 9 hours with a short layover in Kuala Lumpur, Singapore, or Bangkok. e-VOA is issued online within minutes.</p>`
      },
      {
        heading: "2. The Vibe: Couples Romance vs Vibrant Energy",
        bodyHtml: `<p>If you crave private pool villas in Ubud surrounded by lush jungle ravines, sunset beach clubs in Canggu, and sacred cliffside temples like Uluwatu, <strong>Bali is unmatched</strong>.</p>
        <p>If you want island hopping on speedboats, bustling night markets, floating markets, high-octane water sports, and world-class street shopping, <strong>Thailand takes the crown</strong>.</p>`
      },
      {
        heading: "3. Budget Comparison for 5 Nights / 6 Days",
        bodyHtml: `<p>A couple can enjoy a luxurious 4-star experience in Thailand (Phuket & Krabi) for approximately ₹75,000 to ₹1,10,000 (land package). In Bali, a boutique villa experience with private pool in Ubud and Seminyak typically runs ₹85,000 to ₹1,35,000.</p>`
      }
    ],
    faqs: [
      {
        question: "Is Indian vegetarian food easily available in Bali and Thailand?",
        answer: "Yes. Bali has an abundance of pure vegetarian, vegan, and Indian restaurants in Ubud, Seminyak, and Kuta. Thailand similarly features Indian restaurants across all tourist zones in Bangkok, Phuket, and Pattaya."
      },
      {
        question: "Which destination is better for a family with young children?",
        answer: "Thailand is marginally more convenient for families with toddlers due to shorter flight durations, world-class themed attractions (Safari World, Aquaverse), and easy transport."
      }
    ],
    relatedPackagesSlugs: ["bali-5d4n", "thailand-phuket-krabi", "thailand-bangkok-pattaya"],
    relatedDestinationsSlugs: ["bali", "thailand"]
  },
  {
    slug: "char-dham-yatra-helicopter-guide",
    title: "Char Dham Yatra by Helicopter: Route, Booking Window & VIP Darshan Guide",
    subtitle: "Complete blueprint for visiting Yamunotri, Gangotri, Kedarnath, and Badrinath with maximum comfort.",
    summary: "Avoid grueling mountain treks and week-long road journeys. Here is our complete guide to Char Dham Yatra by helicopter departing from Dehradun, including baggage limits, medical advice, and booking timelines.",
    heroImage: "/images/blog/char-dham-helicopter-guide.webp",
    publishedDate: "2026-03-25T10:00:00+05:30",
    modifiedDate: "2026-09-05T09:30:00+05:30",
    readingTime: "8 min read",
    category: "Spiritual Journeys",
    tags: ["Char Dham Helicopter", "Kedarnath Yatra", "Do Dham", "Spiritual Pilgrimage", "Luxury Yatra"],
    author: CHANDAN_AUTHOR,
    keyTakeaways: [
      "Helicopter Char Dham yatras compress a 12-day grueling road trip into a comfortable 5-to-6 day spiritual journey.",
      "Strict luggage restrictions of 5 kg per passenger in duffel bags apply due to aviation weight-and-balance regulations.",
      "VIP priority darshan passes are arranged at all four shrines, avoiding 6-to-10 hour queue times.",
      "Advance booking of 3 to 6 months is strongly recommended as aviation slots are strictly capped by UCADA."
    ],
    content: [
      {
        heading: "The Sacred Helicopter Circuit from Dehradun",
        bodyHtml: `<p>The journey begins from Sahastradhara Helipad in Dehradun:</p>
        <ul>
          <li><strong>Day 1:</strong> Dehradun to Kharsali (Yamunotri) — Palki/pony transfers to temple and hot spring darshan.</li>
          <li><strong>Day 2:</strong> Kharsali to Harsil (Gangotri) — Scenic valley drive to the Bhagirathi river shrine.</li>
          <li><strong>Day 3:</strong> Harsil to Sersi/Phata to Kedarnath — Shuttle helicopter straight to the high-altitude Jyotirlinga.</li>
          <li><strong>Day 4:</strong> Sersi to Badrinath — VIP darshan at the sacred seat of Lord Vishnu.</li>
          <li><strong>Day 5:</strong> Badrinath to Dehradun — Return flight and onward journey.</li>
        </ul>`
      },
      {
        heading: "Medical Considerations & High Altitude Acclimatization",
        bodyHtml: `<p>Kedarnath sits at 11,755 feet. While helicopters eliminate strenuous physical exertion, senior citizens should carry portable oxygen canisters, warm thermal layers, and prescribed cardiac medications. Our packages include on-ground medical assistance and oxygen support at helipads.</p>`
      }
    ],
    faqs: [
      {
        question: "What is the best month for Char Dham by helicopter?",
        answer: "May to June (pre-monsoon) and September to October (post-monsoon) provide the clearest skies and most stable flying conditions. July and August are usually avoided due to heavy monsoon rains."
      },
      {
        question: "What is the baggage limit for Char Dham helicopter tours?",
        answer: "Due to strict aircraft weight regulations at high altitudes, passengers are permitted only 5 kg of luggage in soft duffle bags. Suitcases and hard trolley bags are not accepted on the aircraft."
      }
    ],
    relatedPackagesSlugs: ["char-dham-yatra-helicopter", "do-dham-yatra-helicopter", "ayodhya-kashi-spiritual-yatra"],
    relatedDestinationsSlugs: ["himachal-pradesh", "rajasthan"]
  },
  {
    slug: "europe-tour-packages-from-india-cost-itinerary",
    title: "Europe Tour Packages from India: Best 10-to-15 Day Itineraries & Budget Guide",
    subtitle: "How to plan a grand European holiday covering Switzerland, Paris, and Italy without overspending.",
    summary: "Dreaming of the Swiss Alps, Venetian canals, and the Eiffel Tower? Here is our comprehensive guide to curated Europe tours from India, detailing realistic costs, Eurail train passes, and hotel standards.",
    heroImage: "/images/blog/europe-tour-packages.webp",
    publishedDate: "2026-03-28T14:00:00+05:30",
    modifiedDate: "2026-09-06T15:00:00+05:30",
    readingTime: "10 min read",
    category: "Europe Travel",
    tags: ["Europe Tour Packages", "Switzerland Packages", "Paris Itinerary", "Italy Tours", "Luxury Travel"],
    author: CHANDAN_AUTHOR,
    keyTakeaways: [
      "The classic 'Golden Triangle of Europe' (Paris, Switzerland, Rome/Venice) is ideal for 10 to 14 days.",
      "Swiss Travel Pass offers unlimited train, boat, and bus travel plus free entry to 500+ museums.",
      "Budget approximately ₹2.5 to ₹4 lakhs per person including flights, 4-star hotels, transfers, and sightseeing.",
      "Travel between May and June or September and October for pleasant weather and manageable crowds."
    ],
    content: [
      {
        heading: "The Classic Europe Itinerary for First-Timers",
        bodyHtml: `<p>For Indian families and honeymooners exploring Europe for the first time, a thoughtfully paced 11-day itinerary provides the best balance:</p>
        <ul>
          <li><strong>Days 1–3: Paris, France</strong> — Seine river cruise, Eiffel Tower Summit, Louvre Museum, and Montmartre.</li>
          <li><strong>Days 4–7: Central Switzerland (Interlaken & Lucerne)</strong> — High-speed TGV Lyria train into Switzerland. Excursions to Jungfraujoch (Top of Europe) and Mount Titlis revolving cable car.</li>
          <li><strong>Days 8–11: Italy (Venice, Florence & Rome)</strong> — Gondola ride in Venice, Renaissance wonders in Florence, and Colosseum with Vatican City in Rome.</li>
        </ul>`
      },
      {
        heading: "Realistic Cost Breakdown for Indian Travellers",
        bodyHtml: `<p>A transparent breakdown helps you budget accurately:</p>
        <ul>
          <li><strong>Return International Airfare:</strong> ₹55,000 – ₹85,000 per person.</li>
          <li><strong>Schengen Visa & Insurance:</strong> ₹9,000 – ₹12,000 per person.</li>
          <li><strong>Curated Land Package (4-Star Hotels, Breakfast, Rail & Transfers):</strong> ₹1,80,000 – ₹2,60,000 per person.</li>
          <li><strong>Lunches, Dinners & Shopping:</strong> ₹3,000 – ₹5,000 per person per day.</li>
        </ul>`
      },
      {
        heading: "Why Book with The Man Wanders Globe",
        bodyHtml: `<p>We don't cram 50 people into a hurried tour bus with rigid 6:00 AM wake-up calls. We craft independent and small-group journeys with handpicked central hotels, pre-reserved mountain passes, and flexible schedules.</p>`
      }
    ],
    faqs: [
      {
        question: "Is Indian food available in Switzerland, Paris, and Italy?",
        answer: "Yes, authentic Indian restaurants (both North and South Indian vegetarian/Jain) are widely available in Paris, Interlaken, Lucerne, Zurich, Rome, Florence, and Venice."
      },
      {
        question: "Do children get discounts on Swiss trains?",
        answer: "Yes. With the Swiss Family Card (complimentary when parents hold a Swiss Travel Pass), children under 16 years of age travel completely free throughout Switzerland."
      }
    ],
    relatedPackagesSlugs: ["switzerland-6d5n", "france-5d4n", "italy-6d5n", "greece-6d5n"],
    relatedDestinationsSlugs: ["europe"]
  }
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return BLOGS.find((b) => b.slug === slug);
}
