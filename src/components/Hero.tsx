import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import portraitImg from "@/assets/portrait.jpg";

const Hero = () => {
  return (
    <section className="min-h-[90vh] flex items-center relative overflow-hidden pt-28 md:pt-24">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/5 blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 rounded-full bg-accent/5 blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-10 md:gap-12 items-center relative z-10">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col gap-6"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 glass-card px-4 py-2 w-fit text-sm"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-glow-pulse" />
            <span className="text-muted-foreground">UX Manager & Product Designer</span>
          </motion.div>

          <h1 className="text-[2.75rem] sm:text-6xl md:text-7xl font-bold tracking-tight leading-[1.05] md:leading-none">
            Aakriti
            <br />
            <span className="text-muted-foreground/60">Thakur</span>
            <span className="inline-flex items-center ml-2 md:ml-3 align-middle gap-2 md:gap-3">
              <span className="text-3xl sm:text-4xl md:text-5xl wave-hand" role="img" aria-label="waving hand">👋</span>
              <a href="#about" aria-label="Go to More About Me section" className="inline-block">
                <ArrowUpRight className="inline-block w-7 h-7 md:w-10 md:h-10 text-muted-foreground/40 hover:text-foreground transition-colors cursor-pointer" />
              </a>
            </span>
          </h1>

          <p className="text-muted-foreground max-w-md leading-relaxed text-sm sm:text-base">
            Designing AI-powered products and data-driven experiences that turn complexity into clarity.
          </p>

          <div className="flex flex-wrap gap-3 sm:gap-4 mt-2">
            <a href="#work" className="border border-border rounded-full px-5 sm:px-6 py-3 text-foreground hover:bg-secondary/80 transition-all duration-300 text-sm font-medium">
              See All Projects
            </a>
            <a
              href="#contact"
              className="bg-foreground text-background rounded-full px-5 sm:px-6 py-3 hover:bg-foreground/90 transition-all duration-300 text-sm font-medium"
            >
              Contact Now
            </a>
          </div>
        </motion.div>

        {/* Right — portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex justify-center md:justify-end"
        >
          <div className="relative w-full max-w-sm md:w-80 lg:w-96 aspect-[3/4] rounded-2xl overflow-hidden border border-border/50 shadow-[var(--shadow-glow)]">
            <img
              src={portraitImg}
              alt="Aakriti Thakur"
              className="w-full h-full object-cover"
              width={640}
              height={800}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
