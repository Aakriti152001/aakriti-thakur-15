import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const navItems = [
  { label: "Projects", link: "#work" },
  { label: "About Me", link: "#about" },
  { label: "Experience", link: "#experience" },
  { label: "Testimonials", link: "#testimonials" },
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
      className={`fixed left-0 right-0 z-50 flex justify-center transition-all duration-300 ${
        scrolled ? "top-2" : "top-4"
      }`}
    >
      <div className="glass-card px-6 py-2.5 flex items-center gap-6 rounded-full">
        <a href="#" className="text-foreground font-bold text-lg tracking-tight">
          Aakriti
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
          className="text-sm px-4 py-2 rounded-full bg-secondary text-foreground hover:bg-secondary/80 transition-colors duration-200 flex items-center gap-2"
        >
          <span className="text-primary">✦</span>
          Get in Touch
        </a>
      </div>
    </motion.nav>
  );
};

export default Navbar;
