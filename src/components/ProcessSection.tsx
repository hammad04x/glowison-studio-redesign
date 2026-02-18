import { motion } from "framer-motion";
import { MessageSquare, PenTool, Factory, Truck } from "lucide-react";

const steps = [
  { icon: MessageSquare, title: "Discuss", desc: "Share your vision and requirements with our team." },
  { icon: PenTool, title: "Design", desc: "We craft concepts and refine until perfect." },
  { icon: Factory, title: "Produce", desc: "High-precision manufacturing with quality checks." },
  { icon: Truck, title: "Deliver", desc: "On-time delivery with secure packaging." },
];

const ProcessSection = () => (
  <section id="process" className="py-24 md:py-32">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="text-primary font-medium tracking-widest uppercase text-sm mb-3">How It Works</p>
        <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground">Our Process</h2>
      </motion.div>

      <div className="relative">
        {/* Connecting line */}
        <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-border -translate-y-1/2" />
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-primary/40 -translate-y-1/2 origin-left"
        />

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4 relative">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="flex flex-col items-center text-center"
            >
              <div className="relative z-10 w-16 h-16 rounded-full bg-card border-2 border-primary flex items-center justify-center mb-4 glow-yellow-sm">
                <step.icon className="w-7 h-7 text-primary" />
              </div>
              <span className="text-xs font-medium text-primary mb-1">Step {i + 1}</span>
              <h3 className="font-heading font-bold text-xl text-foreground mb-2">{step.title}</h3>
              <p className="text-muted-foreground text-sm max-w-[200px]">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default ProcessSection;
