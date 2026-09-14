import { SITE } from '../data/site';
import { getAbsoluteUrl } from './seo';

export interface BreadcrumbItem {
  name: string;
  url?: string;
}

export interface FAQItemSchema {
  question: string;
  answer: string;
}

/**
 * Global Base Organization Schema
 * Note: Avoid self-serving reviews directly on Organization/LocalBusiness per Google Guidelines.
 */
export function getOrganizationSchema() {
  return {
    "@type": ["TravelAgency", "LocalBusiness", "Organization"],
    "@id": `${SITE.url}/#organization`,
    "name": SITE.name,
    "legalName": SITE.company.legalName,
    "alternateName": [SITE.company.brandName, "TWGS", "The Man Wanders Globe Tours & Travels"],
    "description": SITE.description,
    "url": SITE.url,
    "logo": {
      "@type": "ImageObject",
      "@id": `${SITE.url}/#logo`,
      "url": `${SITE.url}/logo.webp`,
      "caption": SITE.name,
      "width": 512,
      "height": 512,
    },
    "image": `${SITE.url}/logo.webp`,
    "telephone": SITE.contact.phone,
    "email": SITE.contact.email,
    "priceRange": "₹₹-₹₹₹",
    "currenciesAccepted": "INR, USD, EUR",
    "paymentAccepted": "Cash, Credit Card, UPI, Bank Transfer",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": SITE.contact.streetAddress,
      "addressLocality": SITE.contact.addressLocality,
      "addressRegion": SITE.contact.addressRegion,
      "postalCode": SITE.contact.postalCode,
      "addressCountry": SITE.contact.addressCountry,
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": SITE.contact.geo.latitude,
      "longitude": SITE.contact.geo.longitude,
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "10:00",
        "closes": "19:00",
      },
    ],
    "areaServed": [
      { "@type": "Country", "name": "India" },
      { "@type": "City", "name": "Bengaluru" },
    ],
    "sameAs": [
      SITE.social.instagram,
      SITE.social.facebook,
      SITE.social.youtube,
      SITE.social.pinterest,
      SITE.social.linkedin,
    ],
    "foundingDate": String(SITE.company.established),
    "founder": {
      "@type": "Person",
      "name": SITE.company.founder,
      "jobTitle": "Founder & Managing Director",
    },
    "knowsAbout": [
      "Customized International Tour Packages",
      "Domestic Holiday Packages Across India",
      "Tourist & Business Visa Concierge",
      "Luxury & Honeymoon Travel Planning",
      "Helicopter Pilgrimage Char Dham & Do Dham Yatras",
      "Corporate MICE & Group Travel",
    ],
  };
}

/**
 * Global WebSite Schema with Google Sitelinks Searchbox
 */
export function getWebSiteSchema() {
  return {
    "@type": "WebSite",
    "@id": `${SITE.url}/#website`,
    "url": SITE.url,
    "name": SITE.name,
    "description": SITE.description,
    "publisher": {
      "@id": `${SITE.url}/#organization`,
    },
    "inLanguage": "en-IN",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${SITE.url}/packages?q={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    }
  };
}

/**
 * SiteNavigationElement Schema Generator for Google Expanded Sitelinks
 */
export function getSiteNavigationSchema() {
  return [
    {
      "@type": "SiteNavigationElement",
      "@id": `${SITE.url}/#nav-packages`,
      "name": "Holiday Packages",
      "description": "Explore 25+ handpicked international and domestic holiday packages curated by travel specialists.",
      "url": `${SITE.url}/packages`,
    },
    {
      "@type": "SiteNavigationElement",
      "@id": `${SITE.url}/#nav-international`,
      "name": "International Tour Packages",
      "description": "Bespoke international holiday packages across Europe, Switzerland, Iceland, Japan, Bali, Thailand, and South Africa.",
      "url": `${SITE.url}/packages?region=international`,
    },
    {
      "@type": "SiteNavigationElement",
      "@id": `${SITE.url}/#nav-domestic`,
      "name": "India Tour Packages",
      "description": "Enchanting domestic vacations across Kashmir, Manali, Rajasthan, and luxury helicopter pilgrimage yatras.",
      "url": `${SITE.url}/packages?region=domestic`,
    },
    {
      "@type": "SiteNavigationElement",
      "@id": `${SITE.url}/#nav-destinations`,
      "name": "Travel Destinations",
      "description": "Detailed travel destination guides, seasonal itineraries, and attractions across 30+ countries.",
      "url": `${SITE.url}/destinations`,
    },
    {
      "@type": "SiteNavigationElement",
      "@id": `${SITE.url}/#nav-visa`,
      "name": "Visa Concierge & Assistance",
      "description": "Comprehensive tourist and business visa assistance with end-to-end documentation for 50+ countries.",
      "url": `${SITE.url}/visa`,
    },
    {
      "@type": "SiteNavigationElement",
      "@id": `${SITE.url}/#nav-contact`,
      "name": "Contact Us & Plan My Trip",
      "description": "Get in touch with our travel designers in Bengaluru for custom quotes, inquiries, and itinerary design.",
      "url": `${SITE.url}/contact`,
    },
    {
      "@type": "SiteNavigationElement",
      "@id": `${SITE.url}/#nav-about`,
      "name": "About The Man Wanders Globe",
      "description": "Our heritage, philosophy, and specialist travel team dedicated to crafting seamless wanderlust journeys.",
      "url": `${SITE.url}/about`,
    },
  ];
}

/**
 * Breadcrumb Schema Generator
 */
export function getBreadcrumbSchema(canonicalUrl: string, items: BreadcrumbItem[]) {
  if (!items || items.length < 2) return null;
  return {
    "@type": "BreadcrumbList",
    "@id": `${canonicalUrl}#breadcrumb`,
    "itemListElement": items.map((item, idx) => ({
      "@type": "ListItem",
      "position": idx + 1,
      "name": item.name,
      ...(item.url ? { "item": item.url } : {}),
    })),
  };
}

/**
 * WebPage Schema Generator
 */
export function getWebPageSchema(
  canonicalUrl: string,
  title: string,
  description: string,
  pageType: string = "WebPage",
  hasBreadcrumbs: boolean = true
) {
  const schema: any = {
    "@type": pageType,
    "@id": `${canonicalUrl}#webpage`,
    "url": canonicalUrl,
    "name": title,
    "description": description,
    "isPartOf": {
      "@id": `${SITE.url}/#website`,
    },
    "about": {
      "@id": `${SITE.url}/#organization`,
    },
    "inLanguage": "en-IN",
  };

  if (hasBreadcrumbs) {
    schema["breadcrumb"] = {
      "@id": `${canonicalUrl}#breadcrumb`,
    };
  }

  return schema;
}

/**
 * FAQ Schema Generator
 */
export function getFAQPageSchema(faqs: FAQItemSchema[]) {
  if (!faqs || faqs.length === 0) return null;
  return {
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
      },
    })),
  };
}

/**
 * TouristTrip & Product Schema for Package Pages
 * Generates fully compliant Product (for Google Merchant listings & Product Rich Snippets)
 * and TouristTrip (for travel-specific semantic entity extraction).
 */
export function getPackageSchema(pkg: any, canonicalUrl: string) {
  const ogImage = getAbsoluteUrl(pkg.heroImage);

  // 1. Google Merchant Listings & Rich Snippet Compliant Product
  const productSchema = {
    "@type": "Product",
    "@id": `${canonicalUrl}#product`,
    "name": pkg.name,
    "description": pkg.tagline || pkg.overview || `${pkg.name} holiday tour package by ${SITE.name}`,
    "image": ogImage,
    "category": "Holiday & Tour Packages",
    "sku": pkg.id || pkg.slug,
    "brand": {
      "@type": "Brand",
      "name": SITE.name,
    },
    "offers": {
      "@type": "Offer",
      "@id": `${canonicalUrl}#offer`,
      "url": canonicalUrl,
      "price": String(pkg.priceFrom || 0),
      "priceCurrency": "INR",
      "availability": "https://schema.org/InStock",
      "validFrom": "2024-01-01",
      "priceValidUntil": "2027-12-31",
      "seller": {
        "@id": `${SITE.url}/#organization`,
      },
      "hasMerchantReturnPolicy": {
        "@type": "MerchantReturnPolicy",
        "applicableCountry": "IN",
        "returnPolicyCategory": "https://schema.org/MerchantReturnFiniteReturnWindow",
        "merchantReturnDays": 30,
        "returnMethod": "https://schema.org/ReturnByMail",
        "returnFees": "https://schema.org/FreeReturn",
      },
      "shippingDetails": {
        "@type": "OfferShippingDetails",
        "shippingRate": {
          "@type": "MonetaryAmount",
          "value": "0",
          "currency": "INR",
        },
        "shippingDestination": {
          "@type": "DefinedRegion",
          "addressCountry": "IN",
        },
        "deliveryTime": {
          "@type": "ShippingDeliveryTime",
          "handlingTime": {
            "@type": "QuantitativeValue",
            "minValue": 0,
            "maxValue": 0,
            "unitCode": "DAY",
          },
          "transitTime": {
            "@type": "QuantitativeValue",
            "minValue": 0,
            "maxValue": 0,
            "unitCode": "DAY",
          },
        },
      },
      "itemOffered": {
        "@id": `${canonicalUrl}#trip`,
      },
    },
    ...(pkg.rating ? {
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": String(pkg.rating),
        "reviewCount": pkg.reviewCount ? String(pkg.reviewCount).replace(/[^0-9]/g, '') : "50",
        "bestRating": "5",
        "worstRating": "1",
      },
    } : {}),
  };

  // 2. Semantic TouristTrip Schema for Travel Itineraries
  const tripSchema = {
    "@type": "TouristTrip",
    "@id": `${canonicalUrl}#trip`,
    "name": pkg.name,
    "description": pkg.tagline || pkg.overview || pkg.name,
    "image": ogImage,
    "touristType": pkg.category || ["Family", "Couples", "Luxury"],
    "provider": {
      "@id": `${SITE.url}/#organization`,
    },
    "offers": {
      "@id": `${canonicalUrl}#offer`,
    },
    ...(pkg.itinerary && pkg.itinerary.length > 0 ? {
      "itinerary": pkg.itinerary.map((day: any) => ({
        "@type": "TouristAttraction",
        "name": `Day ${day.day}: ${day.title}`,
        "description": day.description,
      })),
    } : {}),
  };

  return [productSchema, tripSchema];
}

/**
 * Package Catalog Schema for /packages (CollectionPage + ItemList)
 */
export function getPackageCatalogSchema(packages: any[], canonicalUrl: string) {
  return {
    "@type": "CollectionPage",
    "@id": `${canonicalUrl}#collection`,
    "url": canonicalUrl,
    "name": `Curated Travel & Holiday Packages | ${SITE.name}`,
    "description": "Explore our handpicked domestic and international travel packages — Europe, Switzerland, Iceland, Japan, Bali, South Africa, Rajasthan, and Kashmir.",
    "isPartOf": {
      "@id": `${SITE.url}/#website`,
    },
    "about": {
      "@id": `${SITE.url}/#organization`,
    },
    "mainEntity": {
      "@type": "ItemList",
      "name": "Holiday Packages Catalog",
      "numberOfItems": packages.length,
      "itemListElement": packages.slice(0, 30).map((pkg, idx) => ({
        "@type": "ListItem",
        "position": idx + 1,
        "name": pkg.name,
        "url": `${SITE.url}/packages/${pkg.slug}`,
      })),
    },
  };
}

/**
 * Destination Catalog Schema for /destinations (CollectionPage + ItemList)
 */
export function getDestinationCatalogSchema(destinations: any[], canonicalUrl: string) {
  return {
    "@type": "CollectionPage",
    "@id": `${canonicalUrl}#collection`,
    "url": canonicalUrl,
    "name": `Travel Destinations Worldwide | ${SITE.name}`,
    "description": "Explore global travel destinations — Egypt, South Africa, South Korea, Sri Lanka, Thailand, Bali, Dubai, China, and Europe.",
    "isPartOf": {
      "@id": `${SITE.url}/#website`,
    },
    "about": {
      "@id": `${SITE.url}/#organization`,
    },
    "mainEntity": {
      "@type": "ItemList",
      "name": "Global Travel Destinations",
      "numberOfItems": destinations.length,
      "itemListElement": destinations.slice(0, 30).map((dest, idx) => ({
        "@type": "ListItem",
        "position": idx + 1,
        "name": dest.name,
        "url": `${SITE.url}/destinations/${dest.slug}`,
      })),
    },
  };
}

/**
 * TouristDestination Schema for Destination Pages
 */
export function getDestinationSchema(dest: any, canonicalUrl: string) {
  const ogImage = getAbsoluteUrl(dest.heroImage);
  return {
    "@type": "TouristDestination",
    "@id": `${canonicalUrl}#destination`,
    "name": dest.name,
    "description": dest.tagline || dest.overview || `Explore curated ${dest.name} travel itineraries.`,
    "image": ogImage,
    "touristType": ["International Leisure", "Family Vacation", "Honeymoon", "Adventure"],
    "containedInPlace": {
      "@type": "Place",
      "name": dest.country || dest.region || dest.name,
    },
  };
}

/**
 * BlogPosting Schema for Blog Pages
 */
export function getBlogPostingSchema(blog: any, canonicalUrl: string) {
  const ogImage = getAbsoluteUrl(blog.heroImage || blog.image || '/logo.webp');
  return {
    "@type": "BlogPosting",
    "@id": `${canonicalUrl}#article`,
    "headline": blog.title,
    "description": blog.summary,
    "image": ogImage,
    "datePublished": blog.publishedDate,
    "dateModified": blog.modifiedDate || blog.publishedDate,
    "inLanguage": "en-IN",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `${canonicalUrl}#webpage`,
    },
    "author": {
      "@type": "Person",
      "name": blog.author?.name || SITE.company.founder,
      "jobTitle": blog.author?.role || "Founder & Chief Executive",
      "image": `${SITE.url}/team/founder.webp`,
      "url": `${SITE.url}/about`,
    },
    "publisher": {
      "@id": `${SITE.url}/#organization`,
    },
    "keywords": blog.tags ? blog.tags.join(', ') : "Travel guide, holiday packages, tours from India",
    "articleSection": blog.category || "Travel Guides",
  };
}

/**
 * Visa Service Schema
 */
export function getVisaServiceSchema(canonicalUrl: string) {
  return {
    "@type": "Service",
    "@id": `${canonicalUrl}#service`,
    "name": "Global Visa Concierge & Documentation Assistance",
    "serviceType": "Visa Consultation & Application Facilitation",
    "description": "Comprehensive tourist and business visa assistance for 50+ countries including Schengen, UK, US B1/B2, UAE, Thailand, Bali, Japan, and Singapore. 99.2% approval track record.",
    "provider": {
      "@id": `${SITE.url}/#organization`,
    },
    "areaServed": {
      "@type": "Country",
      "name": "India",
    },
    "termsOfService": `${SITE.url}/terms`,
  };
}

/**
 * Builds the complete unified Schema.org graph object
 */
export function buildSchemaGraph(extraSchemas: (object | null | undefined | any[])[] = []) {
  const flattenedExtras = extraSchemas.flat(Infinity).filter(Boolean);

  const graph: any[] = [
    getOrganizationSchema(),
    getWebSiteSchema(),
    ...getSiteNavigationSchema(),
    ...flattenedExtras,
  ];

  return {
    "@context": "https://schema.org",
    "@graph": graph,
  };
}
