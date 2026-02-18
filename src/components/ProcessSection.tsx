import { motion } from "framer-motion";
import { MessageSquare, PenTool, Factory, Truck } from "lucide-react";

const steps = [
  { icon: MessageSquare, title: "Discuss", desc: "Share your vision and requirements with our team.", num: "01" },
  { icon: PenTool, title: "Design", desc: "We craft concepts and refine until perfect.", num: "02" },
  { icon: Factory, title: "Produce", desc: "High-precision manufacturing with quality checks.", num: "03" },
  { icon: Truck, title: "Deliver", desc: "On-time delivery with secure packaging.", num: "04" },
];

const ProcessSection = () => (
  <section className="relative py-32 md:py-40 bg-dark-section text-secondary-foreground overflow-hidden">
    {/* Diagonal clip */}
    <div className="absolute inset-0 diagonal-both" style={{ background: "linear-gradient(135deg, hsl(222 80% 16%) 0%, hsl(222 70% 10%) 100%)" }} />
    
    {/* Large decorative number */}
    <div className="absolute -right-20 top-1/2 -translate-y-1/2 font-heading text-[20rem] font-bold text-secondary-foreground/[0.02] leading-none select-none pointer-events-none hidden lg:block">
      04
    </div>

    <div className="container mx-auto px-4 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-20"
      >
        <p className="text-primary font-medium tracking-widest uppercase text-sm mb-3">How It Works</p>
        <h2 className="font-heading text-4xl md:text-6xl font-bold leading-tight">
          Our <span className="text-gradient">Process</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
        {/* Connecting line */}
        <div className="hidden md:block absolute top-12 left-[12%] right-[12%] h-px bg-secondary-foreground/10" />
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="hidden md:block absolute top-12 left-[12%] right-[12%] h-px bg-primary/40 origin-left"
        />

        {steps.map((step, i) => (
          <motion.div
            key={step.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className="flex flex-col items-center text-center group"
          >
            <div className="relative mb-6">
              <div className="w-24 h-24 rounded-2xl bg-secondary-foreground/5 border border-secondary-foreground/10 flex items-center justify-center group-hover:border-primary/40 group-hover:bg-primary/10 transition-all duration-500">
                <step.icon className="w-10 h-10 text-primary" />
              </div>
              <span className="absolute -top-3 -right-3 font-heading text-xs font-bold bg-primary text-primary-foreground w-8 h-8 rounded-lg flex items-center justify-center">
                {step.num}
              </span>
            </div>
            <h3 className="font-heading font-bold text-xl mb-2">{step.title}</h3>
            <p className="text-secondary-foreground/60 text-sm max-w-[200px]">{step.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProcessSection;
