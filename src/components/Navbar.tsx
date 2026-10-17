import { useState, useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
import headerPortrait from "@/assets/header-portrait.png.asset.json";

const navItems = [
  { label: "Designs", link: "#work" },
  { label: "About Me", link: "#about" },
  { label: "Experience", link: "#experience" },
  { label: "Stories", link: "#testimonials" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed left-0 right-0 z-50 flex justify-center px-4 transition-all duration-300 ${
        scrolled ? "top-2" : "top-4"
      }`}
    >
      <div className="glass-card px-3 sm:px-6 py-2 sm:py-2.5 flex items-center gap-3 sm:gap-6 rounded-full max-w-full">
        <a href="#" aria-label="Aakriti Thakur — Home" className="shrink-0">
          <img src={headerPortrait.url} alt="Aakriti Thakur" width={44} height={44} className="h-10 w-10 sm:h-11 sm:w-11 object-contain" />
        </a>

        <div className="hidden md:flex items-center gap-5">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.link}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              {item.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="text-xs sm:text-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-secondary text-foreground hover:bg-secondary/80 transition-colors duration-200 flex items-center gap-1.5 sm:gap-2 shrink-0"
        >
          <span className="text-primary">✦</span>
          <span className="whitespace-nowrap">Get in Touch</span>
        </a>
      </div>
    </motion.nav>
  );
};

export default Navbar;
