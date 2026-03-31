import { motion } from "framer-motion";

const testimonials = [
  {
    text: "Working with Aakriti has been a fantastic experience. She consistently delivered high-quality designs that aligned perfectly with our vision and brand. Her creativity, attention to detail, and reliability made them a valuable part of our projects. I highly recommend Aakriti to anyone looking for a skilled and dependable designer.",
    name: "Pratik Baid",
    company: "Hustle Creatives",
    initials: "PB",
  },
  {
    text: "I been working with Aakriti across multiple projects. She has been a great communicator and diligent worker. She would spend time and take the efforts to understand the requirement and iterate through designs until we were satisfied. I am happy to recommend her for UI/UX work.",
    name: "Ravi Baid",
    company: "Alliance Infotech",
    initials: "RB",
  },
  {
    text: "Collaborating with Aakriti was an excellent experience. Her professionalism and attention to clean, user-friendly design helped realise our app vision. The final result was modern, intuitive, and exactly what we needed. Highly recommended!",
    name: "Shivam Tiwari",
    company: "Cynayd Solutions",
    initials: "ST",
  },
  {
    text: "A very good UI/UX designer with a strong eye for detail and a user-centric approach. Her creativity and precision result in intuitive and visually appealing designs. I highly recommend her for anyone looking for top-notch UI/UX designs.",
    name: "Prishiv",
    company: "Freelance Web Developer",
    initials: "P",
  },
];

const Testimonials = () => (
  <section className="py-6 px-4">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="max-w-3xl mx-auto glass-card p-8 md:p-10"
    >
      <h2 className="section-heading mb-8">TESTIMONIALS</h2>

      <div className="grid md:grid-cols-2 gap-6">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="bg-secondary/50 rounded-xl p-6 flex flex-col gap-4"
          >
            <span className="text-3xl text-muted-foreground/30 font-serif leading-none">"</span>
            <p className="text-muted-foreground text-sm leading-relaxed line-clamp-4">
              {t.text}
            </p>
            <div className="flex items-center gap-3 mt-auto pt-2">
              <div className="w-9 h-9 rounded-full bg-muted flex items-center justify-center text-xs font-bold text-foreground">
                {t.initials}
              </div>
              <div>
                <p className="text-sm font-semibold">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.company}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  </section>
);

export default Testimonials;
