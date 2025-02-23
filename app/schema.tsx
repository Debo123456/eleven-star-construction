"use client"
import Script from "next/script"

export default function Schema() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "ConstructionBusiness",
    "name": "Eleven Star Construction",
    "image": "https://www.example.com/logo.png",
    "@id": "https://www.elevenstarconstruction.com/",
    "url": "https://www.elevenstarconstruction.com/",
    "telephone": "+1-555-1234",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Construction Avenue",
      "addressLocality": "City",
      "addressRegion": "State",
      "postalCode": "12345",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 40.7128,
      "longitude": -74.0060
    },
    "description": "Eleven Star Construction delivers innovative engineering solutions for highways, bridges, tunnels, and critical infrastructure projects across America.",
    "openingHours": "Mo,Tu,We,Th,Fr 08:00-17:00",
    "sameAs": [
      "https://www.linkedin.com/company/eleven-star-construction",
      "https://www.facebook.com/elevenstarconst"
    ],
    "priceRange": "$$$",
    "areaServed": "United States",
    "serviceType": [
      "Infrastructure Construction",
      "Highway Construction",
      "Bridge Construction",
      "Commercial Construction",
      "Project Management"
    ]
  }

  return (
    <Script
      id="schema-json"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  )
} 