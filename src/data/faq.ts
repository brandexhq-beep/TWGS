// ─────────────────────────────────────────────────────────────────────────────
// FAQ Data — used in FAQSection component + FAQPage JSON-LD schema
// ─────────────────────────────────────────────────────────────────────────────

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: "faq-001",
    question: "How does The Man Wanders Globe plan my trip?",
    answer:
      "Once you submit your travel details via our Plan My Trip form or call us, our travel specialists design a custom itinerary within 24 hours. We handle everything — flights, stays, transfers, experiences and dining recommendations — so you just show up and enjoy. You review and approve the plan before any payment is made.",
    category: "planning",
  },
  {
    id: "faq-002",
    question: "Are your package prices inclusive of flights?",
    answer:
      "Our package prices are generally land-only (hotels, transfers, activities, meals as specified) unless explicitly stated as 'air-inclusive'. We provide competitive airfare quotes separately so you have full visibility on both costs. Many clients prefer to use their own miles or flight preferences — we're completely flexible.",
    category: "pricing",
  },
  {
    id: "faq-003",
    question: "How far in advance should I book?",
    answer:
      "For peak-season travel (December–January, school holidays, long weekends), we recommend booking 60–90 days in advance to secure the best hotels and pricing. For shoulder or off-peak travel, 30 days is usually sufficient. Last-minute enquiries are welcome — we'll always tell you honestly what's possible.",
    category: "planning",
  },
  {
    id: "faq-004",
    question: "What is your cancellation policy?",
    answer:
      "Cancellation terms vary by package type and travel dates. As a general guide: cancellations 30+ days before departure receive a full refund minus processing fees; 15–30 days, 50% refund; under 15 days, cancellation charges apply. Full details are on our Cancellation Policy page, and your package confirmation will include the specific terms for your booking.",
    category: "cancellation",
  },
  {
    id: "faq-005",
    question: "Do you arrange travel insurance?",
    answer:
      "We strongly recommend comprehensive travel insurance for all trips. While we don't sell insurance directly, we work with reputable insurance providers and can guide you to the right policy for your destination, duration and coverage needs. For international travel especially, medical evacuation cover is non-negotiable.",
    category: "planning",
  },
  {
    id: "faq-006",
    question: "Can you customise a package for a special occasion (honeymoon, anniversary, birthday)?",
    answer:
      "Absolutely — personalisation is our speciality. Tell us the occasion, your preferences and your budget, and we'll design an experience around it: surprise decorations, private dinners, couple spa rituals, personalised welcome notes, photography sessions — whatever makes the moment unforgettable.",
    category: "planning",
  },
  {
    id: "faq-007",
    question: "Do you handle visa requirements?",
    answer:
      "We provide complete visa guidance for all international packages — required documents, processing timelines, official links, and consulate appointment help. For select destinations we partner with visa facilitation services. Actual visa approval is at the sole discretion of the respective embassy; we're not a visa agency.",
    category: "international",
  },
  {
    id: "faq-008",
    question: "What payment methods do you accept?",
    answer:
      "We accept bank transfers (NEFT/RTGS/IMPS), UPI, and major credit/debit cards. A booking deposit (typically 25–30% of the package cost) secures your reservation, with the balance due 15–30 days before departure depending on the package. Full payment terms are specified in your booking confirmation.",
    category: "pricing",
  },
  {
    id: "faq-009",
    question: "How is the Man Wanders Globe different from an online booking portal?",
    answer:
      "Portals give you options; we give you a curated plan. Every trip is designed by a human specialist who knows the destinations personally — not an algorithm. We handle the logistics end-to-end, including the unexpected. If your flight is delayed, your driver is waiting. If the hotel has an issue, we have an alternative. That's the difference between booking and being taken care of.",
    category: "general",
  },
  {
    id: "faq-010",
    question: "Do you offer group or corporate travel packages?",
    answer:
      "Yes — group travel (from family reunions to destination weddings) and corporate travel (MICE — Meetings, Incentives, Conferences, Events) are specialities. We have dedicated group coordinators, negotiated group rates with hotel chains, and experience managing 5 to 200+ travellers. Contact us for a custom group proposal.",
    category: "general",
  },
];
