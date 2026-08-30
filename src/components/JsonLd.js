import { site } from "@/data/portfolio";

export default function JsonLd() {
  const { seo } = site;
  const personId = `${seo.siteUrl}/#person`;

  const graph = [
    {
      "@context": "https://schema.org",
      "@type": "Person",
      "@id": personId,
      name: site.fullName,
      alternateName: ["Alamin", "Md Alamin Pramanik"],
      jobTitle: seo.jobTitle,
      url: seo.siteUrl,
      email: `mailto:${site.email}`,
      sameAs: [site.github, site.linkedin, site.twitter],
      knowsAbout: seo.knowsAbout,
      worksFor: {
        "@type": "Organization",
        name: "Candy Melon Software GmbH",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: `${site.fullName} — Portfolio`,
      url: seo.siteUrl,
      description: seo.description,
      author: { "@id": personId },
    },
    {
      "@context": "https://schema.org",
      "@type": "ProfilePage",
      url: seo.siteUrl,
      name: seo.title,
      description: seo.description,
      mainEntity: { "@id": personId },
    },
  ];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
