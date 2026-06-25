import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Twitter, Linkedin, MapPin, Phone, Mail } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-2">
            <span className="grid place-items-center w-9 h-9 rounded-lg bg-[var(--gold)] text-primary font-bold">LM</span>
            <span className="font-display text-xl font-bold">Land Marvel</span>
          </div>
          <p className="mt-4 text-sm text-white/70 leading-relaxed">
            Premium real estate developer in Chennai. Building trust, creating communities — for over two decades.
          </p>
          <div className="mt-5 flex gap-3">
            {[Facebook, Instagram, Twitter, Linkedin].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="Social"
                className="w-9 h-9 grid place-items-center rounded-full border border-white/20 hover:bg-[var(--gold)] hover:text-primary hover:border-[var(--gold)] transition-colors"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-display text-lg font-semibold">Company</h4>
          <ul className="mt-4 space-y-2 text-sm text-white/70">
            <li><Link to="/portfolio" className="hover:text-[var(--gold)] transition-colors">Portfolio</Link></li>
            <li><Link to="/about" className="hover:text-[var(--gold)] transition-colors">About Us</Link></li>
            <li><Link to="/terms" className="hover:text-[var(--gold)] transition-colors">Terms & Conditions</Link></li>
            <li><Link to="/privacy" className="hover:text-[var(--gold)] transition-colors">Privacy & Policy</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-display text-lg font-semibold">Explore</h4>
          <ul className="mt-4 space-y-2 text-sm text-white/70">
            <li><Link to="/buy" className="hover:text-[var(--gold)] transition-colors">Buy</Link></li>
            <li><Link to="/sell" className="hover:text-[var(--gold)] transition-colors">Sell</Link></li>
            <li><Link to="/projects" className="hover:text-[var(--gold)] transition-colors">Project</Link></li>
            <li><Link to="/contact" className="hover:text-[var(--gold)] transition-colors">Contact Us</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-display text-lg font-semibold">Get in Touch</h4>
          <ul className="mt-4 space-y-3 text-sm text-white/70">
            <li className="flex items-start gap-2"><MapPin className="w-4 h-4 mt-0.5 text-[var(--gold)]" /><span>{"\n"}</span></li>
            <li className="flex items-center gap-2"><Phone className="w-4 h-4 text-[var(--gold)]" /><span>+91 86677 69670</span></li>
            <li className="flex items-center gap-2"><Mail className="w-4 h-4 text-[var(--gold)]" /><span>sup@landmarvel.com</span></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row justify-between gap-3 text-xs text-white/60">
          <span>© {new Date().getFullYear()} Land Marvel. All rights reserved.</span>
          <span>Crafted with care in Chennai.</span>
        </div>
      </div>
    </footer>
  );
}
