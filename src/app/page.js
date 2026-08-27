import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Services from "@/components/Services";
import Writing from "@/components/Writing";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <a href="#top" className="skip-link mono">
        skip to content
      </a>
      <Nav />
      <main className="page" id="top">
        <p className="sr-only">
          Developer Alamin is a senior full-stack engineer specializing in
          NestJS, React, Next.js, MongoDB, AWS, SaaS development, and AI/ML web
          integration. Alamin builds multi-tenant platforms including RepairCMS
          and Asklytics, an AI analytics product with natural-language query
          capabilities.
        </p>
        <Hero />
        <Experience />
        <Projects />
        <Skills />
        <Services />
        <Writing />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
