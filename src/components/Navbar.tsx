import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Home, MessageSquare, FileText, Mail } from "lucide-react";

const navItems = [
  { icon: Home, link: "#", label: "Home" },
  { icon: MessageSquare, link: "#work", label: "Work" },
  { icon: FileText, link: "#experience", label: "Experience" },
  { icon: Mail, link: "#contact", label: "Contact" },
];

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: 40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50"
    >
      <div className="glass-card px-4 py-3 flex items-center gap-2">
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.link}
            className="w-10 h-10 rounded-xl flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-secondary/80 transition-all duration-200"
            title={item.label}
          >
            <item.icon className="w-5 h-5" />
          </a>
        ))}
      </div>
    </motion.nav>
  );
};

export default Navbar;
