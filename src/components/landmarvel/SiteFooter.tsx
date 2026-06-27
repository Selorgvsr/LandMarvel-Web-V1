import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Twitter, Linkedin, Phone, Mail } from "lucide-react";
import logoAsset from "@/assets/land-marvel-logo.png.asset.json";

export function SiteFooter() {
  return (
    <footer className="bg-white text-foreground border-t border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <Link to="/" className="inline-block">
            <img
              src={logoAsset.url}
              alt="Land Marvel"
              className="h-16 w-auto object-contain"
            />
          </Link>
          <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
            Premium real estate developer in Chennai. Building trust, creating communities — for over two decades.
          </p>
          <div className="mt-5 flex gap-3">
            {[Facebook, Instagram, Twitter, Linkedin].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="Social"
                className="w-9 h-9 grid place-items-center rounded-full border border-gray-300 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-display text-lg font-semibold">Company</h4>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li><Link to="/portfolio" className="hover:text-primary transition-colors">Portfolio</Link></li>
            <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
            <li><Link to="/terms" className="hover:text-primary transition-colors">Terms & Conditions</Link></li>
            <li><Link to="/privacy" className="hover:text-primary transition-colors">Privacy & Policy</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-display text-lg font-semibold">Explore</h4>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li><Link to="/buy" className="hover:text-primary transition-colors">Buy</Link></li>
            <li><Link to="/sell" className="hover:text-primary transition-colors">Sell</Link></li>
            <li><Link to="/projects" className="hover:text-primary transition-colors">Project</Link></li>
            <li><Link to="/contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-display text-lg font-semibold">Get in Touch</h4>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li className="flex items-center gap-2"><Phone className="w-4 h-4 text-primary" /><span>+91 86677 69670</span></li>
            <li className="flex items-center gap-2"><Mail className="w-4 h-4 text-primary" /><span>support@landmarvel.com</span></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row justify-between gap-3 text-xs text-muted-foreground">
          <span>© {new Date().getFullYear()} Land Marvel. All rights reserved.</span>
          <span>Crafted with care in Chennai.</span>
        </div>
      </div>
    </footer>
  );
}
