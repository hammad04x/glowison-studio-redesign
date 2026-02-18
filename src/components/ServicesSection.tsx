import { motion } from "framer-motion";
import { Paintbrush, Printer, Scissors, Layers, Sticker, PenTool, Shapes, Award, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  { icon: Paintbrush, title: "Graphic Design", desc: "Logo, visiting card, poster, banner & social media design.", color: "from-primary/20 to-primary/5" },
  { icon: Printer, title: "Printing Solutions", desc: "Visiting cards, digital printing, flex & banner printing.", color: "from-secondary/20 to-secondary/5" },
  { icon: Scissors, title: "Laser Cutting", desc: "Acrylic, MDF, wooden cutting & name plate laser work.", color: "from-primary/15 to-secondary/10" },
  { icon: Layers, title: "Acrylic & MDF Work", desc: "Custom signage, name plates, wall decor & decorative pieces.", color: "from-secondary/15 to-primary/10" },
  { icon: Sticker, title: "Vinyl & Stickers", desc: "Radium cutting, vinyl cutting & pasting, custom stickers.", color: "from-primary/20 to-primary/5" },
  { icon: PenTool, title: "Custom Engraving", desc: "Gift & trophy engraving with precision detailing.", color: "from-secondary/20 to-secondary/5" },
  { icon: Shapes, title: "Logo & Letter Cutting", desc: "3D letters, logo cutting for indoor & outdoor branding.", color: "from-primary/15 to-secondary/10" },
  { icon: Award, title: "Trophies & Awards", desc: "Premium custom trophies, shields & award fabrication.", color: "from-secondary/15 to-primary/10" },
];

const ServicesSection = () => (
  <section className="py-24 md:py-32 relative overflow-hidden">
    {/* Diagonal accent */}
    <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-muted to-transparent" />

    <div className="container mx-auto px-4 relative">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-3">What We Do</p>
          <h2 className="font-heading text-4xl md:text-6xl font-bold text-foreground leading-tight">
            Our <span className="text-gradient">Services</span>
          </h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <Link to="/services" className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all">
            View All Services <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.06 }}
            className="group relative bg-card border border-border rounded-2xl p-6 cursor-default overflow-hidden hover:-translate-y-2 transition-all duration-500 hover:shadow-xl hover:shadow-primary/5 hover:border-primary/30"
          >
            {/* Background gradient on hover */}
            <div className={`absolute inset-0 bg-gradient-to-br ${s.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`} />
            
            <div className="relative z-10">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                <s.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-heading font-bold text-lg text-foreground mb-2">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
