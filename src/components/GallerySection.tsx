import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const galleryItems = [
  { title: "Visiting Cards", category: "Print", span: "md:col-span-2 md:row-span-2", gradient: "from-primary/30 via-primary/10 to-secondary/20" },
  { title: "Acrylic Name Plates", category: "Laser Cut", span: "md:col-span-1 md:row-span-1", gradient: "from-secondary/30 to-primary/10" },
  { title: "Banners & Signage", category: "Print", span: "md:col-span-1 md:row-span-1", gradient: "from-primary/20 to-secondary/15" },
  { title: "Trophy Engraving", category: "Engrave", span: "md:col-span-1 md:row-span-2", gradient: "from-secondary/25 to-primary/15" },
  { title: "Vinyl Stickers", category: "Vinyl", span: "md:col-span-1 md:row-span-1", gradient: "from-primary/15 to-secondary/20" },
  { title: "Wall Decor", category: "Laser Cut", span: "md:col-span-1 md:row-span-1", gradient: "from-secondary/20 to-primary/10" },
];

const GallerySection = () => (
  <section className="py-24 md:py-32">
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-3">Our Work</p>
          <h2 className="font-heading text-4xl md:text-6xl font-bold text-foreground leading-tight">
            Featured <span className="text-gradient">Projects</span>
          </h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <Link to="/portfolio" className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all">
            View Full Portfolio <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[200px]">
        {galleryItems.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className={`${item.span} group relative overflow-hidden rounded-2xl bg-gradient-to-br ${item.gradient} cursor-pointer`}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center transform group-hover:scale-105 transition-transform duration-500">
                <div className="w-20 h-20 rounded-2xl bg-card/80 backdrop-blur-sm flex items-center justify-center mx-auto mb-4 border border-border/50 group-hover:border-primary/30 transition-colors">
                  <span className="font-heading font-bold text-foreground text-2xl">{item.title.charAt(0)}</span>
                </div>
                <h3 className="font-heading font-bold text-foreground text-xl mb-1">{item.title}</h3>
                <span className="text-xs text-muted-foreground font-medium uppercase tracking-wider">{item.category}</span>
              </div>
            </div>
            <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/5 transition-colors duration-300" />
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default GallerySection;
