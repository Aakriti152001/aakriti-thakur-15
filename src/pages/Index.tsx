import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Work from "@/components/Work";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Leadership from "@/components/Leadership";
import Contact from "@/components/Contact";

const Index = () => (
  <div className="min-h-screen">
    <Navbar />
    <Hero />
    <Work />
    <About />
    <Experience />
    <Skills />
    <Leadership />
    <Contact />
    <footer className="py-8 text-center text-sm text-muted-foreground border-t border-border/50">
      © 2026 Aakriti Thakur. All rights reserved.
    </footer>
  </div>
);

export default Index;
