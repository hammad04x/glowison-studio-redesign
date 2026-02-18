import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  { name: "Rajesh Patel", role: "Business Owner", text: "Glowison delivered exceptional quality visiting cards and name plates for our office. Highly professional service!", rating: 5 },
  { name: "Meena Shah", role: "Event Planner", text: "The banners and stickers they produced were top-notch. Quick turnaround and great attention to detail.", rating: 5 },
  { name: "Vikram Sharma", role: "Restaurant Owner", text: "Amazing acrylic signage for our restaurant. The laser cutting precision is unmatched in the area.", rating: 5 },
  { name: "Priya Desai", role: "School Principal", text: "We ordered trophies and certificates for our annual event. Quality was outstanding and delivery was on time.", rating: 5 },
];

const TestimonialsSection = () => (
  <section className="py-24 md:py-32 bg-section-alt">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="text-primary font-medium tracking-widest uppercase text-sm mb-3">Testimonials</p>
        <h2 className="font-heading text-4xl md:text-6xl font-bold text-foreground">
          What Clients <span className="text-gradient">Say</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-card border border-border rounded-2xl p-8 relative group hover:border-primary/20 transition-colors"
          >
            <Quote className="w-8 h-8 text-primary/20 absolute top-6 right-6" />
            <div className="flex gap-1 mb-4">
              {Array.from({ length: t.rating }).map((_, j) => (
                <Star key={j} className="w-4 h-4 text-primary fill-primary" />
              ))}
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">"{t.text}"</p>
            <div>
              <p className="font-heading font-bold text-foreground">{t.name}</p>
              <p className="text-xs text-muted-foreground">{t.role}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
