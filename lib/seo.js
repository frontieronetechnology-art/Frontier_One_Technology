/**
 * Structured-data helpers.
 *
 * One source of truth for organization identity so every JSON-LD block on the
 * site agrees with every other one — search engines treat conflicting
 * @id/name/url triples across a domain as a reason to trust none of them.
 */

export const SITE = "https://frontieronetechnology.com";
export const ORG_NAME = "Frontier One Technology";
export const ORG_ID = `${SITE}/#organization`;

export const organization = {
  "@type": "Organization",
  "@id": ORG_ID,
  name: ORG_NAME,
  url: SITE,
  logo: { "@type": "ImageObject", url: `${SITE}/logos/icon-512.png` },
  image: `${SITE}/og.webp`,
  description:
    "Enterprise technology consulting firm delivering cloud, cybersecurity, software engineering, data, AI, and DevOps solutions built for long-term business value.",
  email: "info@frontieronetechnology.com",
  slogan: "Engineering Smarter Solutions for Tomorrow",
  foundingDate: "2026",
  address: { "@type": "PostalAddress", addressCountry: "US" },
  areaServed: "US",
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "sales",
      email: "info@frontieronetechnology.com",
      areaServed: "US",
      availableLanguage: "English",
    },
    {
      "@type": "ContactPoint",
      contactType: "customer support",
      email: "info@frontieronetechnology.com",
      areaServed: "US",
      availableLanguage: "English",
    },
  ],
  knowsAbout: [
    "Cloud Consulting",
    "Cybersecurity",
    "Software Engineering",
    "DevOps Automation",
    "Data Analytics",
    "Artificial Intelligence",
    "Legacy Modernization",
    "Enterprise IT Support",
  ],
  sameAs: ["https://www.linkedin.com/", "https://www.instagram.com/"],
};

export const website = {
  "@type": "WebSite",
  "@id": `${SITE}/#website`,
  url: SITE,
  name: ORG_NAME,
  publisher: { "@id": ORG_ID },
  inLanguage: "en-US",
};

/** BreadcrumbList from [{ name, path }] — path is relative, "" for home. */
export const breadcrumbs = (trail) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: trail.map((t, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: t.name,
    item: `${SITE}${t.path}`,
  })),
});

/** FAQPage from [{ q, a }] — used on the home and service pages. */
export const faqPage = (items) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: items.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
});

/** Google JobPosting. Salary strings in data.js are ranges like "$85,000 – $120,000/year". */
export const jobPosting = (job) => {
  const nums = (job.salary.match(/[\d,]{4,}/g) || []).map((n) =>
    Number(n.replace(/,/g, ""))
  );
  const posted = "2026-07-01";

  return {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: job.title,
    description: job.summary,
    identifier: { "@type": "PropertyValue", name: ORG_NAME, value: job.slug },
    datePosted: posted,
    validThrough: "2027-06-30",
    employmentType:
      job.type.toUpperCase().replace(/[^A-Z]/g, "_").replace(/_+/g, "_") || "FULL_TIME",
    hiringOrganization: { "@type": "Organization", name: ORG_NAME, sameAs: SITE },
    jobLocationType: "TELECOMMUTE",
    applicantLocationRequirements: { "@type": "Country", name: "United States" },
    jobLocation: {
      "@type": "Place",
      address: { "@type": "PostalAddress", addressCountry: "US" },
    },
    ...(nums.length === 2 && {
      baseSalary: {
        "@type": "MonetaryAmount",
        currency: "USD",
        value: {
          "@type": "QuantitativeValue",
          minValue: nums[0],
          maxValue: nums[1],
          unitText: "YEAR",
        },
      },
    }),
    skills: job.skills?.join(", "),
    responsibilities: job.responsibilities?.join(" "),
    qualifications: job.requirements?.join(" "),
    experienceRequirements: job.experience,
    url: `${SITE}/careers/${job.slug}/`,
  };
};

/** Service offering page. `detail` (SERVICE_DETAIL entry) is optional and,
 *  when present, publishes the deliverables as an offer catalog — the part
 *  Google actually uses to understand what the page sells. */
export const serviceSchema = (service, detail) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name: service.title,
  description: service.short,
  serviceType: service.title,
  provider: { "@type": "Organization", "@id": ORG_ID, name: ORG_NAME, url: SITE },
  areaServed: { "@type": "Country", name: "United States" },
  audience: { "@type": "BusinessAudience", name: "Enterprise and growing businesses" },
  url: `${SITE}/services/${service.slug}/`,
  ...(service.delivers?.length && {
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `${service.title} — deliverables`,
      itemListElement: service.delivers.map((d) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: d },
      })),
    },
  }),
  ...(detail?.tech?.length && { serviceOutput: detail.tech.join(", ") }),
});

/** ItemList for an index page — [{ name, path, description }]. */
export const itemList = (items, name) => ({
  "@context": "https://schema.org",
  "@type": "ItemList",
  name,
  numberOfItems: items.length,
  itemListElement: items.map((it, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: it.name,
    description: it.description,
    url: `${SITE}${it.path}`,
  })),
});

/* The six disciplines, mirrored from lib/data.js. Kept as a literal here so
   the schema module stays free of content imports; the slugs are asserted
   against SERVICES by the sitemap, which reads the real list. */
const SERVICE_CATALOG = [
  ["Cloud Solutions", "cloud-solutions"],
  ["Software Engineering", "software-engineering"],
  ["Cybersecurity", "cybersecurity"],
  ["Data & Analytics", "data-analytics"],
  ["DevOps & Automation", "devops-automation"],
  ["Artificial Intelligence", "artificial-intelligence"],
];

/** Root graph — emitted once, in the layout. */
export const rootGraph = {
  "@context": "https://schema.org",
  "@graph": [
    organization,
    website,
    {
      "@type": "ProfessionalService",
      "@id": `${SITE}/#service`,
      name: ORG_NAME,
      url: SITE,
      parentOrganization: { "@id": ORG_ID },
      priceRange: "$$$",
      areaServed: { "@type": "Country", name: "United States" },
      /* The offer catalog is what lets a search engine answer "what does this
         company actually sell" without parsing the page copy. */
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Technology services",
        itemListElement: SERVICE_CATALOG.map(([name, slug]) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name,
            url: `${SITE}/services/${slug}/`,
            provider: { "@id": ORG_ID },
          },
        })),
      },
    },
  ],
};
