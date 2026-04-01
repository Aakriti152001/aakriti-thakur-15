import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const navItems = [
  { label: "Services", link: "#services" },
  { label: "Projects", link: "#work" },
  { label: "Testimonials", link: "#testimonials" },
  { label: "Contact", link: "#contact" },
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
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ${
        scrolled ? "top-2" : "top-4"
      }`}
    >
      <div className="glass-card px-6 py-3 flex items-center gap-8">
        <a href="#" className="text-foreground font-bold text-lg tracking-tight">
          Aakriti
        </a>

        <div className="hidden md:flex items-center gap-6">
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
          className="ml-2 text-sm px-4 py-2 rounded-full bg-secondary text-foreground hover:bg-secondary/80 transition-colors duration-200 flex items-center gap-2"
        >
          <span className="text-primary">✦</span>
          Get in Touch
        </a>
      </div>
    </motion.nav>
  );
};

export default Navbar;
