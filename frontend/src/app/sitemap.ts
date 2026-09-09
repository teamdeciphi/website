import { MetadataRoute } from "next";
import { getBlogPosts } from "@/data/loaders";
import { hardcodedBlogPosts } from "@/data/hardcoded";

const BASE_URL = "https://deciphi.com";
const locales = ["en", "ar"];

const services = [
  { slug: "consulting", updatedAt: "2024-06-01" },
  { slug: "assessment", updatedAt: "2024-06-01" },
  { slug: "training", updatedAt: "2024-06-01" },
  { slug: "managed-security", updatedAt: "2024-06-01" },
  { slug: "ot-security", updatedAt: "2024-06-01" },
  { slug: "cloud-security", updatedAt: "2024-06-01" },
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const res = await getBlogPosts({ page: 1, queryString: "", category: "", slug: "", locale: "en" });
  const posts = (res as { data: typeof hardcodedBlogPosts }).data;

  const blogEntries = posts.flatMap((post) =>
    locales.map((locale) => ({
      url: `${BASE_URL}/${locale}/blog/${post.slug}`,
      lastModified: new Date(post.updatedAt),
      changeFrequency: "weekly" as const,
      priority: 0.7,
    })),
  );

  const serviceEntries = services.flatMap((service) =>
    locales.map((locale) => ({
      url: `${BASE_URL}/${locale}/${service.slug}`,
      lastModified: new Date(service.updatedAt),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  );

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    ...locales.map((locale) => ({
      url: `${BASE_URL}/${locale}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),
    ...locales.map((locale) => ({
      url: `${BASE_URL}/${locale}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...locales.map((locale) => ({
      url: `${BASE_URL}/${locale}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
    ...blogEntries,
    ...serviceEntries,
  ];
}
