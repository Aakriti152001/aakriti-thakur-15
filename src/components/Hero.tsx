import { motion } from "framer-motion";
import portraitImg from "@/assets/portrait.jpg";

const Hero = () => {
  return (
    <section className="min-h-[90vh] flex items-center relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/5 blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 rounded-full bg-accent/5 blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
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
            <span className="text-muted-foreground">Open to opportunities</span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-none">
            AAKRITI
            <br />
            <span className="gradient-text">THAKUR</span>
          </h1>

          <p className="text-xl text-muted-foreground">
            UX Manager | Product Designer
          </p>

          <p className="text-muted-foreground max-w-md leading-relaxed">
            Designing scalable, user-centered products and leading UX strategy
            across AI platforms.
          </p>

          <div className="flex gap-4 mt-2">
            <a href="#work" className="gradient-btn">
              View Work
            </a>
            <a
              href="#contact"
              className="border border-border rounded-full px-6 py-3 text-muted-foreground hover:text-foreground hover:border-primary/40 transition-all duration-300"
            >
              Download Resume
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
          <div className="relative w-72 md:w-80 lg:w-96 aspect-[3/4] rounded-2xl overflow-hidden border border-border/50 shadow-[var(--shadow-glow)]">
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
