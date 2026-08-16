import re

with open('src/data/packages.ts', 'r', encoding='utf-8') as f:
    content = f.read()

# The package list ends with \n];\n\nexport const PACKAGE_CATEGORIES
# Let's find the index of pkg-chardham
start_idx = content.find('  {\n    id: "pkg-chardham",')
if start_idx == -1:
    start_idx = content.find('  {\r\n    id: "pkg-chardham",')

if start_idx != -1:
    end_idx = content.find('];\n\nexport const PACKAGE_CATEGORIES')
    if end_idx == -1:
        end_idx = content.find('];\r\n\r\nexport const PACKAGE_CATEGORIES')
    
    if end_idx != -1:
        new_packages = '''  {
    id: "pkg-ayodhya-kashi",
    slug: "ayodhya-kashi-spiritual-yatra",
    name: "Ayodhya – Kashi Spiritual Yatra",
    tagline: "Ayodhya & Varanasi (Kashi)",
    category: ["domestic", "india", "pilgrimage", "family"],
    featured: true,
    heroImage: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=1200&q=80&fm=webp",
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
    heroImage: "https://images.unsplash.com/photo-1626714485844-88f5b822bb2b?w=1200&q=80&fm=webp",
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
    heroImage: "https://images.unsplash.com/photo-1626714485844-88f5b822bb2b?w=1200&q=80&fm=webp",
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
  }
'''

        new_content = content[:start_idx] + new_packages + '\n' + content[end_idx:]
        
        with open('src/data/packages.ts', 'w', encoding='utf-8') as f:
            f.write(new_content)
        print("Success")
    else:
        print("Could not find end index")
else:
    print("Could not find start index")
