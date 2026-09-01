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
          Alamin Pramanik is a frontend developer specializing in React,
          Next.js, TypeScript, and design systems. He owns the frontend of
          RepairCMS, a multi-tenant SaaS platform serving 1,100+ repair and
          service businesses.
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
