import { motion } from "framer-motion";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const categories = ["All", "Print", "Laser Cut", "Vinyl", "Design", "Engrave"];

const projects = [
  { title: "Premium Visiting Cards", category: "Print", gradient: "from-primary/30 to-secondary/10", size: "md:col-span-2 md:row-span-2" },
  { title: "Acrylic Name Plates", category: "Laser Cut", gradient: "from-secondary/30 to-primary/10", size: "" },
  { title: "Logo Design", category: "Design", gradient: "from-primary/20 to-secondary/15", size: "" },
  { title: "Flex Banners", category: "Print", gradient: "from-secondary/25 to-primary/10", size: "md:col-span-2" },
  { title: "MDF Wall Art", category: "Laser Cut", gradient: "from-primary/25 to-secondary/15", size: "" },
  { title: "Custom Stickers", category: "Vinyl", gradient: "from-secondary/20 to-primary/15", size: "" },
  { title: "Trophy Engraving", category: "Engrave", gradient: "from-primary/20 to-secondary/20", size: "" },
  { title: "Social Media Posts", category: "Design", gradient: "from-secondary/15 to-primary/20", size: "" },
  { title: "Acrylic Letters", category: "Laser Cut", gradient: "from-primary/15 to-secondary/25", size: "md:col-span-2" },
  { title: "Wedding Invitations", category: "Print", gradient: "from-secondary/20 to-primary/10", size: "" },
  { title: "Radium Cutting", category: "Vinyl", gradient: "from-primary/20 to-secondary/10", size: "" },
  { title: "Pamphlet Design", category: "Design", gradient: "from-secondary/15 to-primary/15", size: "" },
];

const Portfolio = () => {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">Portfolio</p>
            <h1 className="font-heading text-5xl md:text-7xl font-bold text-foreground leading-[0.95] mb-8">
              Our <span className="text-gradient">Work</span>
            </h1>
          </motion.div>

          {/* Filter */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="flex flex-wrap gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  active === cat
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[220px]">
            {filtered.map((p, i) => (
              <motion.div
                key={p.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                className={`${p.size} group relative overflow-hidden rounded-2xl bg-gradient-to-br ${p.gradient} cursor-pointer`}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center transform group-hover:scale-110 transition-transform duration-500">
                    <div className="w-16 h-16 rounded-2xl bg-card/80 backdrop-blur-sm flex items-center justify-center mx-auto mb-3 border border-border/50">
                      <span className="font-heading font-bold text-foreground text-xl">{p.title.charAt(0)}</span>
                    </div>
                    <h3 className="font-heading font-bold text-foreground text-lg">{p.title}</h3>
                    <span className="text-xs text-muted-foreground font-medium uppercase tracking-wider">{p.category}</span>
                  </div>
                </div>
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/5 transition-colors" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Portfolio;
