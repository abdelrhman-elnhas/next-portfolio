"use client";

import { personalInfo } from "@/constants/data";

export default function StructuredData() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": personalInfo.name,
    "alternateName": ["عبدالرحمن النحاس", "Abdelrhamn Elnhas"],
    "url": "https://abdelrhman-elnhas.com/v2/",
    "jobTitle": personalInfo.title,
    "description": personalInfo.description,
    "image": "https://abdelrhman-elnhas.com/v2/images/asd.png",
    "sameAs": [
      personalInfo.socials.linkedin,
      personalInfo.socials.github,
      personalInfo.socials.twitter,
      personalInfo.socials.behance
    ],
    "knowsAbout": [
      "Frontend Engineering",
      "UI/UX Design",
      "React",
      "Next.js",
      "TypeScript",
      "Software Development"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
    />
  );
}
