
import React from 'react';

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "OWL International",
  "legalName": "OWL International SAS",
  "url": "https://internationalowl.com",
  "logo": "https://internationalowl.com/lovable-uploads/4d7f9a85-a58b-4911-9097-b446f027e04a.png",
  "foundingDate": "2024",
  "description": "OWL International bridges continents through strategic investments, cutting-edge technology, and transformative industrial solutions that create lasting prosperity for communities worldwide.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "47 Boulevard de Courcelles",
    "addressLocality": "Paris",
    "postalCode": "75008",
    "addressCountry": "FR"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+33744988789",
    "contactType": "customer service",
    "email": "contact@internationalowl.com"
  },
  "sameAs": [
    "https://linkedin.com/company/owl-international",
    "https://twitter.com/owlinternational"
  ],
  "industry": "Investment Management",
  "keywords": "African industrial solutions, AI investment platform, AKOULA industrial intelligence, African agro-industry technology, talent discovery Africa"
};

export const investmentFirmSchema = {
  "@context": "https://schema.org",
  "@type": "FinancialService",
  "name": "OWL International Investment Services",
  "description": "Strategic investment firm specializing in African industrial solutions, AI-powered platforms, and transformative technology ventures.",
  "provider": {
    "@type": "Organization",
    "name": "OWL International"
  },
  "areaServed": ["Africa", "Europe"],
  "serviceType": "Investment Management",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Investment Portfolio",
    "itemListElement": [
      {
        "@type": "Offer",
        "name": "AKOULA Industrial Intelligence Platform",
        "description": "AI-powered industrial intelligence platform transforming agro-industry across Africa"
      },
      {
        "@type": "Offer", 
        "name": "KIDZ LAB Talent Discovery Platform",
        "description": "Revolutionary talent discovery and development platform connecting African talent globally"
      }
    ]
  }
};

export const breadcrumbSchema = (items: Array<{name: string, url: string}>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": `https://internationalowl.com${item.url}`
  }))
});

export const faqSchema = (faqs: Array<{question: string, answer: string}>) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
});
