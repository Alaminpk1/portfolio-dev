import { site } from "@/data/portfolio";

export default function sitemap() {
  return [
    {
      url: site.seo.siteUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
