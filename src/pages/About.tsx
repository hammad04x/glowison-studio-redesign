import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import aboutHero from "@/assets/about-hero.jpg";
import { Target, Eye, Heart, Users } from "lucide-react";

const values = [
  { icon: Target, title: "Precision", desc: "Every cut, every print — engineered to perfection with state-of-the-art machinery." },
  { icon: Eye, title: "Innovation", desc: "We constantly upgrade our tools and techniques to stay ahead of the curve." },
  { icon: Heart, title: "Passion", desc: "Every project is treated with the same dedication, whether big or small." },
  { icon: Users, title: "Trust", desc: "1200+ clients trust us for their design, printing, and laser cutting needs." },
];

const About = () => (
  <div className="min-h-screen bg-background">
    <Navbar />

    {/* Hero */}
    <section className="relative pt-24 pb-32 overflow-hidden">
      <div className="absolute inset-0">
        <img src={aboutHero} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/60" />
      </div>
      <div className="relative z-10 container mx-auto px-4 pt-20">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-2xl">
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">About Us</p>
          <h1 className="font-heading text-5xl md:text-7xl font-bold text-foreground leading-[0.95] mb-6">
            Chhapi's <span className="text-gradient">Premium</span> Studio
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Glowison is a complete design, printing & laser cutting studio based in Chhapi, Gujarat.
            With 8+ years of experience, we've served 5000+ projects for businesses, events, and individuals.
          </p>
        </motion.div>
      </div>
    </section>

    {/* Story */}
    <section className="py-24 md:py-32">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">Our Story</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                What started as a small graphic design studio has grown into one of the most trusted names in
                printing and laser cutting in the Banaskantha region. Our journey began with a simple goal:
                to provide high-quality, affordable design and production services.
              </p>
              <p>
                Today, we offer a comprehensive range of services — from logo design and visiting card printing to
                acrylic laser cutting, vinyl work, and trophy engraving. Our state-of-the-art equipment and
                skilled team ensure every project meets the highest standards.
              </p>
              <p>
                Located at Galaxy Complex on the Palanpur-Ahmedabad Highway, we serve clients from Chhapi and
                surrounding areas with fast turnaround and personalized attention.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            {[
              { num: "8+", label: "Years" },
              { num: "5K+", label: "Projects" },
              { num: "1.2K+", label: "Clients" },
              { num: "3", label: "Categories" },
            ].map((s, i) => (
              <div key={s.label} className={`rounded-2xl p-8 text-center ${i % 2 === 0 ? "bg-primary/10" : "bg-secondary/10"}`}>
                <div className="font-heading text-4xl font-bold text-gradient mb-1">{s.num}</div>
                <p className="text-muted-foreground text-sm font-medium">{s.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>

    {/* Values */}
    <section className="py-24 md:py-32 bg-dark-section text-secondary-foreground diagonal-both">
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold">
            Our <span className="text-gradient">Values</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5">
                <v.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-heading font-bold text-xl mb-2">{v.title}</h3>
              <p className="text-secondary-foreground/60 text-sm">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <Footer />
  </div>
);

export default About;
