import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Work from "@/components/Work";
import Testimonials from "@/components/Testimonials";
import Toolbox from "@/components/Toolbox";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";

const Index = () => (
  <div className="min-h-screen pb-8">
    <Navbar />
    <Hero />
    <Skills />
    <Work />
    <Testimonials />
    <Toolbox />
    <Experience />
    <Contact />
  </div>
);

export default Index;
