import { motion } from "framer-motion";

const services = [
  {
    title: "Website Design",
    desc: "Designing breathtaking, user-centric websites that boost engagement, conversions, and growth.",
    featured: true,
  },
  {
    title: "Product Design",
    desc: "Crafting intuitive product experiences that simplify complex workflows and delight users.",
    featured: false,
  },
  {
    title: "UX Strategy",
    desc: "Defining user experience strategy grounded in research, data, and business goals.",
    featured: false,
  },
  {
    title: "Design Systems",
    desc: "Building scalable, consistent design systems that accelerate team velocity.",
    featured: false,
  },
];

const moreServices = [
  "User Research", "Wireframing", "Prototyping", "Usability Testing",
  "User Research", "Wireframing", "Prototyping", "Usability Testing",
];

const moreServices2 = [
  "Data Visualization", "Interaction Design", "Branding", "Dashboard UX",
  "Data Visualization", "Interaction Design", "Branding", "Dashboard UX",
];

const Services = () => (
  <section id="services" className="py-16 px-4">
    <div className="container mx-auto max-w-6xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <p className="section-heading mb-3">Design services</p>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Design <span className="text-muted-foreground/50">Services</span>
          </h2>
          <a href="#contact" className="bg-foreground text-background rounded-full px-5 py-2.5 text-sm hover:bg-foreground/90 transition-all w-fit">
            Contact Now
          </a>
        </div>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-5 mb-8">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass-card-hover p-8 rounded-2xl"
          >
            <h3 className="text-lg font-bold mb-3">{s.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
          </motion.div>
        ))}
      </div>

    </div>
  </section>
);

export default Services;
