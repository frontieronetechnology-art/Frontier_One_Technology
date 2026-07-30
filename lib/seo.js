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
  address: { "@type": "PostalAddress", addressCountry: "US" },
  areaServed: "US",
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
  sameAs: [
    "https://www.linkedin.com/",
    "https://x.com/",
    "https://www.instagram.com/",
  ],
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

/** Service offering page. */
export const serviceSchema = (service) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name: service.title,
  description: service.short,
  serviceType: service.title,
  provider: { "@type": "Organization", name: ORG_NAME, url: SITE },
  areaServed: { "@type": "Country", name: "United States" },
  url: `${SITE}/services/${service.slug}/`,
});

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
    },
  ],
};
