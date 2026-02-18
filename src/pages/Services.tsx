import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Paintbrush, Printer, Scissors, Layers, Sticker, PenTool, Shapes, Award, Image, FileText, Smartphone, CreditCard, MonitorPlay, Ticket } from "lucide-react";

const categories = [
  {
    title: "Graphic Design",
    desc: "Professional design services for your brand identity and marketing materials.",
    color: "from-primary/20 to-primary/5",
    items: [
      { icon: Paintbrush, name: "Logo Design" },
      { icon: CreditCard, name: "Visiting Card Design" },
      { icon: Image, name: "Poster & Banner Design" },
      { icon: FileText, name: "Pamphlet / Flyer Design" },
      { icon: Smartphone, name: "Social Media Post Design" },
      { icon: Ticket, name: "Invitation Card Design" },
    ],
  },
  {
    title: "Printing Solutions",
    desc: "High-quality printing with digital and offset technology.",
    color: "from-secondary/20 to-secondary/5",
    items: [
      { icon: CreditCard, name: "Visiting Card Printing" },
      { icon: Printer, name: "Digital Printing" },
      { icon: MonitorPlay, name: "Flex & Banner Printing" },
      { icon: Sticker, name: "Sticker Printing" },
      { icon: Scissors, name: "Radium Cutting (Plotter)" },
      { icon: Layers, name: "Vinyl Cutting & Pasting" },
    ],
  },
  {
    title: "Laser Cutting & Engraving",
    desc: "Precision laser work for acrylic, MDF, wood and more.",
    color: "from-primary/15 to-secondary/10",
    items: [
      { icon: Scissors, name: "Acrylic Laser Cutting" },
      { icon: Layers, name: "MDF / Wooden Cutting" },
      { icon: Shapes, name: "Name Plate Laser Cutting" },
      { icon: PenTool, name: "Wall Decor Laser Work" },
      { icon: Shapes, name: "Logo & Letter Cutting" },
      { icon: Award, name: "Gift & Trophy Engraving" },
    ],
  },
];

const Services = () => (
  <div className="min-h-screen bg-background">
    <Navbar />

    {/* Hero */}
    <section className="pt-32 pb-20 bg-dark-section text-secondary-foreground relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-2xl">
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">Our Services</p>
          <h1 className="font-heading text-5xl md:text-7xl font-bold leading-[0.95] mb-6">
            Everything You <span className="text-gradient">Need</span>
          </h1>
          <p className="text-secondary-foreground/70 text-lg leading-relaxed">
            From creative design to precision manufacturing — we offer 18+ specialized services across three core categories.
          </p>
        </motion.div>
      </div>
    </section>

    {/* Categories */}
    {categories.map((cat, ci) => (
      <section key={cat.title} className={`py-20 md:py-28 ${ci % 2 === 1 ? "bg-section-alt" : ""}`}>
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <span className="font-heading text-8xl font-bold text-muted/50 select-none">0{ci + 1}</span>
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground -mt-6 relative z-10">{cat.title}</h2>
            <p className="text-muted-foreground text-lg mt-3 max-w-xl">{cat.desc}</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {cat.items.map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className={`group bg-card border border-border rounded-2xl p-6 hover:-translate-y-1 transition-all duration-400 hover:shadow-lg hover:border-primary/20 relative overflow-hidden`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${cat.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                <div className="relative z-10 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold text-foreground">{item.name}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    ))}

    <Footer />
  </div>
);

export default Services;
