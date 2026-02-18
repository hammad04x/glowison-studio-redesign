import { motion } from "framer-motion";
import { Paintbrush, Printer, Scissors, Layers, Sticker, PenTool, Shapes, Award } from "lucide-react";

const services = [
  { icon: Paintbrush, title: "Graphic Design", desc: "Logos, branding, marketing materials crafted with precision." },
  { icon: Printer, title: "Printing Solutions", desc: "High-quality offset & digital printing for every need." },
  { icon: Scissors, title: "Laser Cutting", desc: "Precision laser cutting for acrylic, wood, MDF & more." },
  { icon: Layers, title: "Acrylic & MDF Work", desc: "Custom acrylic signage, nameplates, and decorative pieces." },
  { icon: Sticker, title: "Vinyl & Stickers", desc: "Durable vinyl decals, wall graphics, and custom stickers." },
  { icon: PenTool, title: "Custom Engraving", desc: "Detailed laser engraving on trophies, plaques, and gifts." },
  { icon: Shapes, title: "Signage & Displays", desc: "Eye-catching indoor and outdoor signage solutions." },
  { icon: Award, title: "Trophies & Awards", desc: "Premium custom trophies, shields, and award fabrication." },
];

const ServicesSection = () => (
  <section id="services" className="py-24 md:py-32 bg-section-alt">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <p className="text-primary font-medium tracking-widest uppercase text-sm mb-3">What We Do</p>
        <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground">Our Services</h2>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="card-hover group bg-card border border-border rounded-xl p-6 cursor-default"
          >
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
              <s.icon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-heading font-semibold text-lg text-foreground mb-2">{s.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
