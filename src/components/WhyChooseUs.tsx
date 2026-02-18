import { motion, useInView } from "framer-motion";
import { Zap, Target, Palette, BadgeDollarSign } from "lucide-react";
import { useRef, useEffect, useState } from "react";

const highlights = [
  { icon: Zap, title: "Fast Delivery", desc: "Quick turnaround without compromising quality." },
  { icon: Target, title: "High Precision", desc: "State-of-the-art laser and print machines." },
  { icon: Palette, title: "Custom Designs", desc: "Tailored solutions for your unique needs." },
  { icon: BadgeDollarSign, title: "Affordable Pricing", desc: "Competitive rates for premium quality." },
];

const stats = [
  { value: 8, suffix: "+", label: "Years Experience" },
  { value: 5000, suffix: "+", label: "Projects Done" },
  { value: 1200, suffix: "+", label: "Happy Clients" },
];

const Counter = ({ target, suffix }: { target: number; suffix: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [isInView, target]);

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
};

const WhyChooseUs = () => (
  <section id="why-us" className="py-24 md:py-32">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="text-primary font-medium tracking-widest uppercase text-sm mb-3">Why Glowison</p>
        <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground">Why Choose Us</h2>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
        {highlights.map((h, i) => (
          <motion.div
            key={h.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="text-center p-6"
          >
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <h.icon className="w-7 h-7 text-primary" />
            </div>
            <h3 className="font-heading font-semibold text-lg text-foreground mb-2">{h.title}</h3>
            <p className="text-muted-foreground text-sm">{h.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Counters */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-12 md:gap-20">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <div className="font-heading text-5xl md:text-6xl font-bold text-gradient mb-2">
              <Counter target={stat.value} suffix={stat.suffix} />
            </div>
            <p className="text-muted-foreground font-medium text-sm uppercase tracking-wider">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseUs;
