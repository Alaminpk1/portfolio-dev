import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import JsonLd from "@/components/JsonLd";
import { site } from "@/data/portfolio";
import { Analytics } from '@vercel/analytics/next';
const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const { seo } = site;

export const metadata = {
  metadataBase: new URL(seo.siteUrl),
  title: {
    default: seo.title,
    template: `%s | ${site.fullName}`,
  },
  description: seo.description,
  keywords: seo.keywords,
  authors: [{ name: site.fullName, url: seo.siteUrl }],
  creator: site.fullName,
  openGraph: {
    type: "profile",
    locale: "en_US",
    url: seo.siteUrl,
    title: seo.title,
    description: seo.description,
    siteName: `${site.fullName} — Portfolio`,
    images: [
      {
        url: seo.ogImage,
        width: 828,
        height: 451,
        alt: seo.title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: seo.title,
    description: seo.description,
    images: [seo.ogImage],
    creator: seo.twitterHandle,
  },
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0f131a" },
    { media: "(prefers-color-scheme: light)", color: "#f7f7f3" },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{if(localStorage.getItem("${site.themeKey}")==="light")document.documentElement.classList.add("light")}catch(e){}})()`,
          }}
        />
      </head>
      <body>
        <JsonLd />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
