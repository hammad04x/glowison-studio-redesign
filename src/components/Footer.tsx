import { Mail, Phone, MapPin, Globe } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-footer text-secondary-foreground">
    <div className="h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />

    <div className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="md:col-span-1">
          <h3 className="font-heading text-2xl font-bold mb-4">
            <span className="text-primary">Glow</span>ison
          </h3>
          <p className="text-secondary-foreground/60 text-sm leading-relaxed mb-4">
            Complete Design, Printing & Laser Solutions. Premium quality at Chhapi's finest studio.
          </p>
        </div>

        <div>
          <h4 className="font-heading font-semibold text-lg mb-4">Pages</h4>
          <div className="space-y-2">
            {[
              { label: "Home", to: "/" },
              { label: "About Us", to: "/about" },
              { label: "Services", to: "/services" },
              { label: "Portfolio", to: "/portfolio" },
              { label: "Pricing", to: "/pricing" },
            ].map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className="block text-sm text-secondary-foreground/60 hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-heading font-semibold text-lg mb-4">Services</h4>
          <div className="space-y-2">
            {["Graphic Design", "Printing", "Laser Cutting", "Vinyl & Stickers", "Engraving", "Trophies"].map((s) => (
              <Link key={s} to="/services" className="block text-sm text-secondary-foreground/60 hover:text-primary transition-colors">{s}</Link>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-heading font-semibold text-lg mb-4">Reach Us</h4>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-sm text-secondary-foreground/60">
              <Phone className="w-4 h-4 text-primary shrink-0" />
              96247 21516
            </div>
            <div className="flex items-center gap-3 text-sm text-secondary-foreground/60">
              <Mail className="w-4 h-4 text-primary shrink-0" />
              connect.glowisonchhapi@gmail.com
            </div>
            <div className="flex items-start gap-3 text-sm text-secondary-foreground/60">
              <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
              Galaxy Complex, Opp Hotel Ekta, Chhapi
            </div>
            <div className="flex items-center gap-3 text-sm text-secondary-foreground/60">
              <Globe className="w-4 h-4 text-primary shrink-0" />
              glowisongraphics.com
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
