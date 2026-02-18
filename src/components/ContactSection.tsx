import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const ContactSection = () => {
  const [focused, setFocused] = useState<string | null>(null);

  return (
    <section id="contact" className="py-24 md:py-32 relative">
      {/* Diagonal background */}
      <div className="absolute inset-0 bg-section-alt" />

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-3">Get In Touch</p>
          <h2 className="font-heading text-4xl md:text-6xl font-bold text-foreground">
            Contact <span className="text-gradient">Us</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
          {/* Form - spans 3 cols */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3 bg-card border border-border rounded-3xl p-8 md:p-10"
          >
            <h3 className="font-heading font-bold text-xl text-foreground mb-6">Send us a message</h3>
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {[
                  { name: "name", label: "Full Name", type: "text" },
                  { name: "phone", label: "Phone Number", type: "tel" },
                ].map((field) => (
                  <div key={field.name}>
                    <input
                      type={field.type}
                      placeholder={field.label}
                      onFocus={() => setFocused(field.name)}
                      onBlur={() => setFocused(null)}
                      className={`w-full px-4 py-3.5 rounded-xl bg-muted border text-foreground placeholder:text-muted-foreground text-sm transition-all duration-300 outline-none ${
                        focused === field.name ? "border-primary glow-yellow-sm" : "border-border"
                      }`}
                    />
                  </div>
                ))}
              </div>
              <input
                type="email"
                placeholder="Email Address"
                onFocus={() => setFocused("email")}
                onBlur={() => setFocused(null)}
                className={`w-full px-4 py-3.5 rounded-xl bg-muted border text-foreground placeholder:text-muted-foreground text-sm transition-all duration-300 outline-none ${
                  focused === "email" ? "border-primary glow-yellow-sm" : "border-border"
                }`}
              />
              <select
                onFocus={() => setFocused("service")}
                onBlur={() => setFocused(null)}
                className={`w-full px-4 py-3.5 rounded-xl bg-muted border text-foreground text-sm transition-all duration-300 outline-none ${
                  focused === "service" ? "border-primary glow-yellow-sm" : "border-border"
                }`}
              >
                <option value="">Select Service</option>
                <option value="design">Graphic Design</option>
                <option value="printing">Printing Solutions</option>
                <option value="laser">Laser Cutting</option>
                <option value="vinyl">Vinyl & Stickers</option>
                <option value="engraving">Engraving & Trophies</option>
                <option value="other">Other</option>
              </select>
              <textarea
                placeholder="Tell us about your project..."
                rows={4}
                onFocus={() => setFocused("message")}
                onBlur={() => setFocused(null)}
                className={`w-full px-4 py-3.5 rounded-xl bg-muted border text-foreground placeholder:text-muted-foreground text-sm transition-all duration-300 outline-none resize-none ${
                  focused === "message" ? "border-primary glow-yellow-sm" : "border-border"
                }`}
              />
              <Button variant="hero" size="lg" className="w-full text-base">
                Send Message
              </Button>
            </form>
          </motion.div>

          {/* Info - spans 2 cols */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 flex flex-col gap-6"
          >
            <div className="bg-card border border-border rounded-3xl p-8 space-y-5">
              <h3 className="font-heading font-bold text-lg text-foreground">Business Details</h3>
              {[
                { icon: MapPin, text: "Galaxy Complex, Opp Hotel Ekta, Palanpur-Ahmedabad Highway, Chhapi" },
                { icon: Phone, text: "96247 21516 / 96198 64670" },
                { icon: Mail, text: "connect.glowisonchhapi@gmail.com" },
                { icon: Globe, text: "glowisongraphics.com" },
                { icon: Clock, text: "Mon–Sat: 10:00 AM – 8:00 PM" },
              ].map((item) => (
                <div key={item.text} className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <item.icon className="w-4 h-4 text-primary" />
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed pt-1.5">{item.text}</p>
                </div>
              ))}
            </div>

            {/* Map placeholder */}
            <div className="flex-1 min-h-[200px] rounded-3xl overflow-hidden border border-border bg-muted flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-8 h-8 text-primary mx-auto mb-2" />
                <p className="text-muted-foreground text-sm font-medium">Chhapi, Gujarat</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
