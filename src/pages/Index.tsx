import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Work from "@/components/Work";
import About from "@/components/About";
import Process from "@/components/Process";
import Services from "@/components/Services";

import Experience from "@/components/Experience";
import Testimonials from "@/components/Testimonials";

import Contact from "@/components/Contact";

const Index = () => (
  <div className="min-h-screen">
    <Navbar />
    <Hero />
    <Skills />
    <Work />
    <About />
    <Process />
    <Services />
    <Experience />
    
    <Testimonials />
    
    <Contact />
  </div>
);

export default Index;
