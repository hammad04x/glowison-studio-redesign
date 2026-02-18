import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const ContactSection = () => {
  const [focused, setFocused] = useState<string | null>(null);

  return (
    <section id="contact" className="py-24 md:py-32 bg-section-alt">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-3">Get In Touch</p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground">Contact Us</h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-card border border-border rounded-2xl p-8"
          >
            <h3 className="font-heading font-semibold text-xl text-foreground mb-6">Send us a message</h3>
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              {[
                { name: "name", label: "Full Name", type: "text" },
                { name: "email", label: "Email Address", type: "email" },
                { name: "phone", label: "Phone Number", type: "tel" },
              ].map((field) => (
                <div key={field.name} className="relative">
                  <input
                    type={field.type}
                    placeholder={field.label}
                    onFocus={() => setFocused(field.name)}
                    onBlur={() => setFocused(null)}
                    className={`w-full px-4 py-3 rounded-lg bg-muted border text-foreground placeholder:text-muted-foreground text-sm transition-all duration-300 outline-none ${
                      focused === field.name ? "border-primary glow-yellow-sm" : "border-border"
                    }`}
                  />
                </div>
              ))}
              <textarea
                placeholder="Tell us about your project..."
                rows={4}
                onFocus={() => setFocused("message")}
                onBlur={() => setFocused(null)}
                className={`w-full px-4 py-3 rounded-lg bg-muted border text-foreground placeholder:text-muted-foreground text-sm transition-all duration-300 outline-none resize-none ${
                  focused === "message" ? "border-primary glow-yellow-sm" : "border-border"
                }`}
              />
              <Button variant="hero" size="lg" className="w-full">
                Send Message
              </Button>
            </form>
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-between"
          >
            <div className="space-y-6 mb-8">
              <h3 className="font-heading font-semibold text-xl text-foreground">Business Details</h3>
              {[
                { icon: MapPin, text: "123 Creative Lane, Business District, City 400001" },
                { icon: Phone, text: "+91 98765 43210" },
                { icon: Mail, text: "hello@glowison.com" },
                { icon: Clock, text: "Mon–Sat: 10:00 AM – 8:00 PM" },
              ].map((item) => (
                <div key={item.text} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed pt-2">{item.text}</p>
                </div>
              ))}
            </div>

            {/* Map placeholder */}
            <div className="rounded-xl overflow-hidden border border-border aspect-video bg-muted flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-8 h-8 text-primary mx-auto mb-2" />
                <p className="text-muted-foreground text-sm">Map Location</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
