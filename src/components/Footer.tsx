import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="bg-footer text-secondary-foreground">
    {/* Yellow accent line */}
    <div className="h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />

    <div className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <h3 className="font-heading text-2xl font-bold mb-4">
            <span className="text-primary">Glow</span>ison
          </h3>
          <p className="text-secondary-foreground/60 text-sm leading-relaxed max-w-xs">
            Premium printing & laser cutting studio delivering high-quality solutions for businesses and creatives.
          </p>
        </div>

        <div>
          <h4 className="font-heading font-semibold text-lg mb-4">Quick Links</h4>
          <div className="space-y-2">
            {["Services", "Process", "Gallery", "Contact"].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="block text-sm text-secondary-foreground/60 hover:text-primary transition-colors"
              >
                {link}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-heading font-semibold text-lg mb-4">Reach Us</h4>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-sm text-secondary-foreground/60">
              <Phone className="w-4 h-4 text-primary" />
              +91 98765 43210
            </div>
            <div className="flex items-center gap-3 text-sm text-secondary-foreground/60">
              <Mail className="w-4 h-4 text-primary" />
              hello@glowison.com
            </div>
            <div className="flex items-center gap-3 text-sm text-secondary-foreground/60">
              <MapPin className="w-4 h-4 text-primary" />
              City 400001
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-secondary-foreground/10 mt-12 pt-8 text-center">
        <p className="text-xs text-secondary-foreground/40">
          © {new Date().getFullYear()} Glowison. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
