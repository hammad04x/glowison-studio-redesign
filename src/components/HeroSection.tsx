import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import heroAbstract from "@/assets/hero-abstract.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroAbstract} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/40" />
      </div>

      {/* Large decorative text */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 select-none pointer-events-none hidden lg:block">
        <span className="text-[12rem] font-heading font-bold text-outline opacity-20 leading-none">
          G
        </span>
      </div>

      {/* Floating accent shapes */}
      <motion.div
        animate={{ y: [-20, 20, -20], rotate: [0, 5, 0] }}
        transition={{ repeat: Infinity, duration: 8 }}
        className="absolute top-32 right-1/4 w-24 h-24 rounded-2xl bg-primary/10 border border-primary/20 backdrop-blur-sm hidden md:block"
      />
      <motion.div
        animate={{ y: [15, -15, 15] }}
        transition={{ repeat: Infinity, duration: 6 }}
        className="absolute bottom-40 right-1/3 w-16 h-16 rounded-full bg-secondary/10 border border-secondary/20 backdrop-blur-sm hidden md:block"
      />

      <div className="relative z-10 container mx-auto px-4 pt-24">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 mb-6"
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-primary font-medium tracking-widest uppercase text-xs">Complete Design, Printing & Laser Solutions</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.95] mb-8"
          >
            <span className="text-foreground">Design.</span>{" "}
            <span className="text-gradient">Print.</span>
            <br />
            <span className="text-foreground">Cut.</span>{" "}
            <span className="text-gradient">Create.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-muted-foreground text-lg md:text-xl max-w-xl mb-10 leading-relaxed"
          >
            From visiting cards to acrylic name plates, banners to trophies — 
            we deliver premium quality with precision craftsmanship at Chhapi's finest studio.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link to="/pricing">
              <Button variant="hero" size="lg" className="text-base px-8 py-6 group">
                Get a Quote
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/services">
              <Button variant="hero-outline" size="lg" className="text-base px-8 py-6">
                Explore Services
              </Button>
            </Link>
          </motion.div>

          {/* Trust bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="mt-16 flex items-center gap-8 text-sm text-muted-foreground"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary" />
              <span>8+ Years Experience</span>
            </div>
            <div className="h-4 w-px bg-border" />
            <span>5000+ Projects</span>
            <div className="h-4 w-px bg-border hidden sm:block" />
            <span className="hidden sm:block">1200+ Clients</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
