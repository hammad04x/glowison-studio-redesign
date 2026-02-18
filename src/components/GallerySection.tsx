import { motion } from "framer-motion";

const galleryItems = [
  { title: "Visiting Cards", category: "Print", span: "col-span-1 row-span-1", color: "from-primary/20 to-secondary/20" },
  { title: "Acrylic Name Plates", category: "Laser Cut", span: "col-span-1 md:col-span-2 row-span-1", color: "from-secondary/30 to-primary/10" },
  { title: "Banners & Signage", category: "Print", span: "col-span-1 md:col-span-2 row-span-1", color: "from-primary/15 to-brand-blue-light" },
  { title: "Trophy Engraving", category: "Engrave", span: "col-span-1 row-span-1", color: "from-secondary/20 to-primary/20" },
  { title: "Vinyl Stickers", category: "Vinyl", span: "col-span-1 row-span-1", color: "from-primary/10 to-secondary/15" },
  { title: "Custom MDF Designs", category: "Laser Cut", span: "col-span-1 row-span-1", color: "from-secondary/25 to-primary/15" },
];

const GallerySection = () => (
  <section id="gallery" className="py-24 md:py-32 bg-section-alt">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="text-primary font-medium tracking-widest uppercase text-sm mb-3">Our Work</p>
        <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground">Gallery</h2>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {galleryItems.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className={`${item.span} group relative overflow-hidden rounded-xl bg-gradient-to-br ${item.color} aspect-[4/3] cursor-pointer`}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-card/80 backdrop-blur-sm flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                  <span className="font-heading font-bold text-foreground text-lg">{item.title.charAt(0)}</span>
                </div>
                <h3 className="font-heading font-semibold text-foreground text-lg">{item.title}</h3>
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
