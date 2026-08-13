// ─────────────────────────────────────────────────────────────────────────────
// Navigation Data
// ─────────────────────────────────────────────────────────────────────────────

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export const NAV_LINKS: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Packages",
    href: "/packages",
    children: [
      { label: "Domestic", href: "/packages?region=domestic" },
      { label: "International", href: "/packages?region=international" },
      { label: "Luxury", href: "/packages?style=luxury" },
      { label: "Adventure", href: "/packages?style=adventure" },
      { label: "Honeymoon", href: "/packages?style=honeymoon" },
      { label: "Family", href: "/packages?style=family" },
      { label: "Corporate", href: "/packages?style=corporate" },
      { label: "Solo", href: "/packages?style=solo" },
    ],
  },
  {
    label: "Destinations",
    href: "/destinations",
    children: [
      { label: "🇪🇬 Egypt", href: "/destinations/egypt" },
      { label: "🇿🇦 South Africa", href: "/destinations/south-africa" },
      { label: "🇰🇷 South Korea", href: "/destinations/south-korea" },
      { label: "🇱🇰 Sri Lanka", href: "/destinations/sri-lanka" },
      { label: "🇹🇭 Thailand", href: "/destinations/thailand" },
      { label: "🇲🇾 Malaysia", href: "/destinations/malaysia" },
      { label: "🇮🇩 Bali", href: "/destinations/bali" },
      { label: "🇸🇬 Singapore", href: "/destinations/singapore" },
      { label: "🇦🇪 Dubai", href: "/destinations/dubai" },
    ],
  },
  { label: "Gallery", href: "/gallery" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const LEGAL_LINKS = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms" },
  { label: "Cancellation Policy", href: "/cancellation-policy" },
  { label: "Refund Policy", href: "/refund-policy" },
  { label: "Cookie Preferences", href: "#cookie-preferences", id: "cookie-prefs-link" },
];

export const FOOTER_COLUMNS = [
  {
    title: "Quick Links",
    links: [
      { label: "Home", href: "/" },
      { label: "About Us", href: "/about" },
      { label: "Gallery", href: "/gallery" },
      { label: "Plan My Trip", href: "/#plan-my-trip" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Destinations",
    links: [
      { label: "Rajasthan", href: "/destinations#rajasthan" },
      { label: "Kerala", href: "/destinations#kerala" },
      { label: "Goa", href: "/destinations#goa" },
      { label: "Himachal Pradesh", href: "/destinations#himachal" },
      { label: "Bali", href: "/destinations#bali" },
      { label: "Maldives", href: "/destinations#maldives" },
      { label: "Europe", href: "/destinations#europe" },
      { label: "View All →", href: "/destinations" },
    ],
  },
  {
    title: "Packages",
    links: [
      { label: "Luxury Travel", href: "/packages?style=luxury" },
      { label: "Honeymoon", href: "/packages?style=honeymoon" },
      { label: "Adventure", href: "/packages?style=adventure" },
      { label: "Family Holidays", href: "/packages?style=family" },
      { label: "Corporate Travel", href: "/packages?style=corporate" },
      { label: "Solo Trips", href: "/packages?style=solo" },
    ],
  },
] as const;
