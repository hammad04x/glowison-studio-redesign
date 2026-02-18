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
  <section className="py-24 md:py-32 relative overflow-hidden">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left: content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-3">Why Glowison</p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-8 leading-tight">
            Why Choose <span className="text-gradient">Us?</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((h, i) => (
              <motion.div
                key={h.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-4 group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                  <h.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-foreground mb-1">{h.title}</h3>
                  <p className="text-muted-foreground text-sm">{h.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right: stats with bold design */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-dark-section rounded-3xl p-10 md:p-14 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-40 h-40 bg-primary/10 rounded-full blur-[80px]" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-secondary/10 rounded-full blur-[60px]" />
          
          <div className="relative z-10 space-y-10">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
              >
                <div className="font-heading text-5xl md:text-6xl font-bold text-gradient mb-1">
                  <Counter target={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-secondary-foreground/60 font-medium text-sm uppercase tracking-wider">{stat.label}</p>
                {i < stats.length - 1 && <div className="h-px bg-secondary-foreground/10 mt-8" />}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default WhyChooseUs;
