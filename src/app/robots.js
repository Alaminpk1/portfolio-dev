import { site } from "@/data/portfolio";

export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${site.seo.siteUrl}/sitemap.xml`,
  };
}
