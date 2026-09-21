import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Work from "@/components/Work";
import MicroAnimations from "@/components/MicroAnimations";
import About from "@/components/About";
import Tools from "@/components/Tools";

import Experience from "@/components/Experience";
import Testimonials from "@/components/Testimonials";

import Contact from "@/components/Contact";

const Index = () => (
  <div className="min-h-screen">
    <Navbar />
    <Hero />
    <Skills />
    <Work />
    <MicroAnimations />
    <About />
    <Tools />
    <Experience />
    
    <Testimonials />
    
    <Contact />
  </div>
);

export default Index;
