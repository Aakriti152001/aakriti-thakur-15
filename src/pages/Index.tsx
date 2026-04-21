import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Work from "@/components/Work";
import About from "@/components/About";
import Tools from "@/components/Tools";
import Process from "@/components/Process";


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
    <Tools />
    <Process />
    
    <Experience />
    
    <Testimonials />
    
    <Contact />
  </div>
);

export default Index;
