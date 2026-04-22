import { motion } from "framer-motion";
import { Star } from "lucide-react";

const stats = [
  { value: "20+", label: "Happy clients" },
  { value: "4+", label: "Years experience" },
  { value: "4.9", label: "Average Rating" },
];

const testimonials = [
  {
    text: "Working with Aakriti has been a fantastic experience. She consistently delivered high-quality designs that aligned perfectly with our vision and brand.",
    name: "Pratik Baid",
    company: "Hustle Creatives",
    rating: 5.0,
    initials: "PB",
  },
  {
    text: "I've been working with Aakriti across multiple projects. She has been a great communicator and diligent worker who takes efforts to understand requirements.",
    name: "Ravi Baid",
    company: "Alliance Infotech",
    rating: 4.8,
    initials: "RB",
  },
  {
    text: "Collaborating with Aakriti was an excellent experience. Her professionalism and attention to clean, user-friendly design helped realise our app vision.",
    name: "Shivam Tiwari",
    company: "Cynayd Solutions",
    rating: 5.0,
    initials: "ST",
  },
  {
    text: "A very good UI/UX designer with a strong eye for detail and a user-centric approach. Her creativity and precision result in intuitive designs.",
    name: "Prishiv",
    company: "Freelance Web Developer",
    rating: 5.0,
    initials: "P",
  },
];

const Testimonials = () => (
  <section id="testimonials" className="py-16 px-6">
    <div className="container mx-auto max-w-6xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <p className="section-heading mb-3">Happy Clients</p>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Clients <span className="text-muted-foreground/50">Love me</span>
          </h2>
          <div className="flex gap-3">
            <a href="#work" className="border border-border rounded-full px-5 py-2.5 text-sm text-foreground hover:bg-secondary/80 transition-all">
              See All Projects
            </a>
          </div>
        </div>
      </motion.div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-3 sm:gap-5 mb-10">
        {stats.map((s) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-4 sm:p-6 rounded-2xl text-center"
          >
            <p className="text-2xl sm:text-3xl md:text-4xl font-bold gradient-text">{s.value}</p>
            <p className="text-xs sm:text-sm text-muted-foreground mt-1">{s.label}</p>
          </motion.div>
        ))}
      </div>

      {/* Testimonial cards */}
      <div className="grid md:grid-cols-2 gap-5">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="glass-card-hover p-6 rounded-2xl flex flex-col gap-4"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-xs font-bold text-foreground">
                {t.initials}
              </div>
              <div className="flex-1">
                <p className="text-sm font-bold">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.company}</p>
              </div>
              <div className="flex items-center gap-1 text-primary">
                <Star className="w-3.5 h-3.5 fill-primary" />
                <span className="text-xs font-medium">{t.rating}</span>
              </div>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {t.text}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
