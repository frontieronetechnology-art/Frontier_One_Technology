import { SERVICES, JOBS } from "@/lib/data";
import { POSTS } from "@/lib/blog";

export const dynamic = "force-static";

const BASE = "https://frontieronetechnology.com";
const NOW = new Date().toISOString();

export default function sitemap() {
  const staticRoutes = [
    "",
    "/about",
    "/process",
    "/industries",
    "/blog",
    "/careers",
    "/contact",
    "/terms",
    "/privacy",
  ];

  return [
    ...staticRoutes.map((route) => ({
      url: `${BASE}${route}/`,
      lastModified: NOW,
      changeFrequency: route === "/blog" ? "weekly" : "monthly",
      priority: route === "" ? 1 : route === "/terms" || route === "/privacy" ? 0.3 : 0.8,
    })),
    ...SERVICES.map((s) => ({
      url: `${BASE}/services/${s.slug}/`,
      lastModified: NOW,
      changeFrequency: "monthly",
      priority: 0.9,
    })),
    ...POSTS.map((p) => ({
      url: `${BASE}/blog/${p.slug}/`,
      lastModified: new Date(p.date).toISOString(),
      changeFrequency: "yearly",
      priority: 0.7,
    })),
    ...JOBS.map((j) => ({
      url: `${BASE}/careers/${j.slug}/`,
      lastModified: NOW,
      changeFrequency: "weekly",
      priority: 0.7,
    })),
  ];
}
