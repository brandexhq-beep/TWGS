// ─────────────────────────────────────────────────────────────────────────────
// Testimonials Data — placeholder content, client to replace with real reviews
// ─────────────────────────────────────────────────────────────────────────────

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  tripTaken: string;
  rating: number;
  review: string;
  avatar: string;
  date: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t-001",
    name: "Priya & Rahul Sharma",
    location: "Mumbai, India",
    tripTaken: "Maldives Honeymoon",
    rating: 5,
    review:
      "We couldn't have asked for a more perfect honeymoon. Every single detail — the seaplane greeting, the overwater villa with glass floor panels, the private sunset dinner — was curated with such care. The Man Wanders Globe didn't just book us a trip, they crafted a memory we'll keep for life.",
    avatar: "https://images.unsplash.com/photo-1545912452-8aea7e25a3d3?w=100&q=80",
    date: "December 2024",
  },
  {
    id: "t-002",
    name: "Arjun Mehta",
    location: "Bangalore, India",
    tripTaken: "Leh–Ladakh Expedition",
    rating: 5,
    review:
      "The Leh trip was absolutely incredible. The logistics of a high-altitude expedition are no joke, and TMWG handled every permit, every meal, every breakdown with calm professionalism. The Pangong Lake sunrise camp alone was worth the entire journey. Already planning Spiti next year with them.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
    date: "August 2024",
  },
  {
    id: "t-003",
    name: "The Kapoor Family",
    location: "Delhi, India",
    tripTaken: "Kerala Family Backwaters",
    rating: 5,
    review:
      "Travelling with kids can be stressful, but The Man Wanders Globe made Kerala effortless. Our children still talk about the houseboat nights and the elephant sanctuary. Every hotel had kid-friendly amenities pre-arranged. This company genuinely cares about your experience.",
    avatar: "https://images.unsplash.com/photo-1511895426328-dc8714191011?w=100&q=80",
    date: "March 2025",
  },
  {
    id: "t-004",
    name: "Kavya Reddy",
    location: "Hyderabad, India",
    tripTaken: "Bali Solo Retreat",
    rating: 5,
    review:
      "Solo travel can feel overwhelming, but having TMWG handle everything meant I could just be present. The Ubud retreat they planned had the perfect mix of guided experiences and free time. The private pool villa they selected was beyond my expectations at that price point.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80",
    date: "June 2024",
  },
  {
    id: "t-005",
    name: "Vikram & Sneha Iyer",
    location: "Chennai, India",
    tripTaken: "Rajasthan Royal Circuit",
    rating: 5,
    review:
      "Rajasthan was on our bucket list for years. The heritage hotels TMWG chose were exquisite — we genuinely felt like royalty. The guides were exceptional, bringing forts and history to life. The camel safari sunset was cinematic. Perfect execution from start to finish.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80",
    date: "November 2024",
  },
  {
    id: "t-006",
    name: "Neha Gupta",
    location: "Pune, India",
    tripTaken: "Paris & Santorini Honeymoon",
    rating: 5,
    review:
      "Our Paris–Santorini trip was a dream we thought we couldn't afford. TMWG found us a cave suite with caldera views that made us feel like we were living in a painting. The Eiffel Tower dinner reservation was the most romantic evening of our lives. Worth every rupee.",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&q=80",
    date: "May 2024",
  },
  {
    id: "t-007",
    name: "Rohan Joshi",
    location: "Ahmedabad, India",
    tripTaken: "Dubai Corporate Retreat",
    rating: 5,
    review:
      "We had 35 team members on this retreat and expected the usual chaos of group travel. Instead, TMWG delivered precision — every transfer on time, the desert safari dinner exceeded expectations, and the conference facilities were exactly right. Our team still talks about it six months later.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80",
    date: "January 2025",
  },
  {
    id: "t-008",
    name: "Ananya Krishnamurthy",
    location: "Kochi, India",
    tripTaken: "Andaman Island Hopping",
    rating: 5,
    review:
      "The Andaman trip was magical. The bioluminescent kayaking at night was something I had never even heard of before — TMWG included it as a surprise activity and it was the highlight of my year. Radhanagar Beach at dawn with no other tourists? Priceless. Book them. Immediately.",
    avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&q=80",
    date: "February 2025",
  },
];
