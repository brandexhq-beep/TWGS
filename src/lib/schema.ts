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
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": String(SITE.stats.averageRating),
      "reviewCount": String(SITE.stats.travellersServed),
      "bestRating": "5",
      "worstRating": "1",
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
 * Global WebSite Schema
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
  };
}

/**
 * Breadcrumb Schema Generator
 */
export function getBreadcrumbSchema(canonicalUrl: string, items: BreadcrumbItem[]) {
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
export function getWebPageSchema(canonicalUrl: string, title: string, description: string, pageType: string = "WebPage") {
  return {
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
    "breadcrumb": {
      "@id": `${canonicalUrl}#breadcrumb`,
    },
  };
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
 */
export function getPackageSchema(pkg: any, canonicalUrl: string) {
  const ogImage = getAbsoluteUrl(pkg.heroImage);
  return {
    "@type": ["TouristTrip", "Product"],
    "@id": `${canonicalUrl}#trip`,
    "name": pkg.name,
    "description": pkg.tagline || pkg.overview || pkg.name,
    "image": ogImage,
    "category": "Travel Packages",
    "sku": pkg.id || pkg.slug,
    "touristType": pkg.category || ["Family", "Couples", "Luxury"],
    "provider": {
      "@id": `${SITE.url}/#organization`,
    },
    "offers": {
      "@type": "Offer",
      "url": canonicalUrl,
      "price": String(pkg.priceFrom || 0),
      "priceCurrency": "INR",
      "availability": "https://schema.org/InStock",
      "priceValidUntil": "2027-12-31",
      "seller": {
        "@id": `${SITE.url}/#organization`,
      },
    },
    ...(pkg.rating ? {
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": String(pkg.rating),
        "reviewCount": pkg.reviewCount ? String(pkg.reviewCount).replace(/[^0-9]/g, '') : "50",
        "bestRating": "5",
        "worstRating": "1",
      }
    } : {}),
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
export function buildSchemaGraph(extraSchemas: (object | null | undefined)[] = []) {
  const graph: any[] = [
    getOrganizationSchema(),
    getWebSiteSchema(),
    ...extraSchemas.filter(Boolean),
  ];

  return {
    "@context": "https://schema.org",
    "@graph": graph,
  };
}
