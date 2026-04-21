import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Work from "@/components/Work";
import About from "@/components/About";



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
    
    <Experience />
    
    <Testimonials />
    
    <Contact />
  </div>
);

export default Index;
