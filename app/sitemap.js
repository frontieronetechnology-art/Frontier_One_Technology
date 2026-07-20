import { SERVICES, JOBS } from "@/lib/data";

export const dynamic = "force-static";

const BASE = "https://frontieronetechnology.com";

export default function sitemap() {
  const staticRoutes = ["", "/about", "/process", "/industries", "/careers", "/contact", "/terms", "/privacy"];
  return [
    ...staticRoutes.map((route) => ({
      url: `${BASE}${route}/`,
      changeFrequency: "monthly",
      priority: route === "" ? 1 : 0.8,
    })),
    ...SERVICES.map((s) => ({
      url: `${BASE}/services/${s.slug}/`,
      changeFrequency: "monthly",
      priority: 0.9,
    })),
    ...JOBS.map((j) => ({
      url: `${BASE}/careers/${j.slug}/`,
      changeFrequency: "weekly",
      priority: 0.7,
    })),
  ];
}
