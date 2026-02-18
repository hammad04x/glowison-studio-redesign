import { motion } from "framer-motion";
import { Check, ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";

const packages = [
  {
    name: "Starter",
    desc: "Perfect for small businesses just getting started.",
    highlight: false,
    features: [
      "Logo Design (2 concepts)",
      "500 Visiting Cards",
      "1 Social Media Post Design",
      "Basic Pamphlet Design",
    ],
  },
  {
    name: "Professional",
    desc: "Most popular choice for growing businesses.",
    highlight: true,
    features: [
      "Everything in Starter",
      "Complete Brand Identity",
      "1000 Visiting Cards (Premium)",
      "5 Social Media Post Designs",
      "Flex Banner Design + Print",
      "Acrylic Name Plate (1 unit)",
    ],
  },
  {
    name: "Enterprise",
    desc: "Full-service package for established businesses.",
    highlight: false,
    features: [
      "Everything in Professional",
      "Unlimited Design Revisions",
      "Outdoor Signage (up to 4x8 ft)",
      "3D Letter Cutting",
      "Trophy & Award Fabrication",
      "Dedicated Account Manager",
      "Priority Turnaround",
    ],
  },
];

const Pricing = () => (
  <div className="min-h-screen bg-background">
    <Navbar />

    <section className="pt-32 pb-20 bg-dark-section text-secondary-foreground relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-2xl">
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">Pricing</p>
          <h1 className="font-heading text-5xl md:text-7xl font-bold leading-[0.95] mb-6">
            Transparent <span className="text-gradient">Pricing</span>
          </h1>
          <p className="text-secondary-foreground/70 text-lg leading-relaxed">
            Every project is custom. These packages are starting points — contact us for a precise quote.
          </p>
        </motion.div>
      </div>
    </section>

    <section className="py-24 md:py-32">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {packages.map((pkg, i) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative rounded-3xl p-8 border transition-all duration-300 hover:-translate-y-2 ${
                pkg.highlight
                  ? "bg-dark-section text-secondary-foreground border-primary/40 shadow-2xl shadow-primary/10"
                  : "bg-card text-foreground border-border hover:border-primary/20"
              }`}
            >
              {pkg.highlight && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-bold px-4 py-1 rounded-full">
                  Most Popular
                </span>
              )}
              <h3 className="font-heading text-2xl font-bold mb-2">{pkg.name}</h3>
              <p className={`text-sm mb-8 ${pkg.highlight ? "text-secondary-foreground/60" : "text-muted-foreground"}`}>{pkg.desc}</p>

              <div className="font-heading text-3xl font-bold mb-1">
                <span className="text-gradient">Custom Quote</span>
              </div>
              <p className={`text-xs mb-8 ${pkg.highlight ? "text-secondary-foreground/40" : "text-muted-foreground"}`}>Based on requirements</p>

              <ul className="space-y-3 mb-8">
                {pkg.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm">
                    <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span className={pkg.highlight ? "text-secondary-foreground/80" : ""}>{f}</span>
                  </li>
                ))}
              </ul>

              <a href="tel:9624721516">
                <Button
                  variant={pkg.highlight ? "hero" : "hero-outline"}
                  className="w-full group"
                >
                  <Phone className="w-4 h-4" />
                  Get Quote
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <ContactSection />
    <Footer />
  </div>
);

export default Pricing;
