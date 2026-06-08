import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  Menu, MapPin, ArrowRight, Phone, Mail, Calendar, Eye,
  Facebook, Instagram, Twitter, Linkedin, Building2, Ruler, Home,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import buyHero from "@/assets/buy-hero.jpg";
import buyCta from "@/assets/buy-cta.jpg";
import plot1 from "@/assets/plot-1.jpg";
import plot2 from "@/assets/plot-2.jpg";
import plot3 from "@/assets/plot-3.jpg";
import plot4 from "@/assets/plot-4.jpg";
import res1 from "@/assets/res-1.jpg";
import res2 from "@/assets/res-2.jpg";
import res3 from "@/assets/res-3.jpg";
import res4 from "@/assets/res-4.jpg";
import com1 from "@/assets/com-1.jpg";
import com2 from "@/assets/com-2.jpg";
import com3 from "@/assets/com-3.jpg";
import com4 from "@/assets/com-4.jpg";

export const Route = createFileRoute("/buy")({
  head: () => ({
    meta: [
      { title: "Buy Property in Chennai — Plots, Apartments & Commercial | Land Marvel" },
      { name: "description", content: "Browse premium plots, apartments, villas and commercial properties across Chennai. Book a site visit with Land Marvel today." },
      { property: "og:title", content: "Buy Property in Chennai | Land Marvel" },
      { property: "og:description", content: "Premium plots, residential homes and commercial spaces in Chennai's prime locations." },
      { property: "og:image", content: buyHero },
    ],
    links: [{ rel: "canonical", href: "/buy" }],
  }),
  component: BuyPage,
});

const navLinks = [
  { label: "Buy", to: "/buy" as const, hash: undefined as string | undefined },
  { label: "Sell", to: "/sell" as const, hash: undefined as string | undefined },
  { label: "Projects", to: "/" as const, hash: "projects" as string | undefined },
  { label: "Contact Us", to: "/" as const, hash: "contact" as string | undefined },
];

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 w-full bg-background/85 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex h-16 lg:h-20 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span className="grid place-items-center w-9 h-9 rounded-lg bg-[image:var(--gradient-primary)] text-primary-foreground font-bold">LM</span>
          <span className="font-display text-xl font-bold text-primary">Land Marvel</span>
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <Link key={l.label} to={l.to} hash={l.hash} className="text-sm font-medium text-foreground/80 hover:text-accent transition-colors" activeProps={{ className: "text-accent" }}>
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="hidden md:block">
          <Button asChild className="bg-[image:var(--gradient-primary)] hover:opacity-90 shadow-[var(--shadow-card)]">
            <Link to="/" hash="contact">Get in Touch</Link>
          </Button>
        </div>
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" aria-label="Open menu"><Menu /></Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-72">
            <div className="flex flex-col gap-6 mt-8">
              {navLinks.map((l) => (
                <Link key={l.label} to={l.to} hash={l.hash} onClick={() => setOpen(false)} className="text-lg font-medium text-foreground hover:text-accent">
                  {l.label}
                </Link>
              ))}
              <Button asChild className="bg-[image:var(--gradient-primary)]">
                <Link to="/" hash="contact" onClick={() => setOpen(false)}>Get in Touch</Link>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-2">
            <span className="grid place-items-center w-9 h-9 rounded-lg bg-[var(--gold)] text-primary font-bold">LM</span>
            <span className="font-display text-xl font-bold">Land Marvel</span>
          </div>
          <p className="mt-4 text-sm text-white/70 leading-relaxed">Premium real estate developer in Chennai. Building trust, creating communities — for over two decades.</p>
          <div className="mt-5 flex gap-3">
            {[Facebook, Instagram, Twitter, Linkedin].map((Icon, i) => (
              <a key={i} href="#" aria-label="Social" className="w-9 h-9 grid place-items-center rounded-full border border-white/20 hover:bg-[var(--gold)] hover:text-primary hover:border-[var(--gold)] transition-colors">
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-display text-lg font-semibold">Company</h4>
          <ul className="mt-4 space-y-2 text-sm text-white/70">
            {["About Us", "Portfolio", "Terms & Conditions", "Privacy & Policy"].map((l) => (
              <li key={l}><a href="#" className="hover:text-[var(--gold)] transition-colors">{l}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-display text-lg font-semibold">Explore</h4>
          <ul className="mt-4 space-y-2 text-sm text-white/70">
            <li><Link to="/buy" className="hover:text-[var(--gold)] transition-colors">Buy</Link></li>
            <li><Link to="/" hash="services" className="hover:text-[var(--gold)] transition-colors">Sell</Link></li>
            <li><Link to="/" hash="projects" className="hover:text-[var(--gold)] transition-colors">Projects</Link></li>
            <li><Link to="/" hash="contact" className="hover:text-[var(--gold)] transition-colors">Contact Us</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-display text-lg font-semibold">Get in Touch</h4>
          <ul className="mt-4 space-y-3 text-sm text-white/70">
            <li className="flex items-start gap-2"><MapPin className="w-4 h-4 mt-0.5 text-[var(--gold)]" /><span>Anna Nagar, Chennai, Tamil Nadu</span></li>
            <li className="flex items-center gap-2"><Phone className="w-4 h-4 text-[var(--gold)]" /><span>+91 00000 00000</span></li>
            <li className="flex items-center gap-2"><Mail className="w-4 h-4 text-[var(--gold)]" /><span>hello@landmarvel.com</span></li>
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

type Property = {
  badge: string;
  img: string;
  title: string;
  price: string;
  location: string;
  serving?: string;
  area: string;
  units: string;
  type: string;
};

function PropertyCard({ p }: { p: Property }) {
  return (
    <article className="group bg-card rounded-[20px] overflow-hidden shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-elegant)] hover:-translate-y-1 transition-all duration-300 border border-border flex flex-col">
      <div className="relative overflow-hidden">
        <img src={p.img} alt={p.title} width={1024} height={768} loading="lazy" className="w-full h-[280px] object-cover group-hover:scale-105 transition-transform duration-500" />
        <span className="absolute top-5 left-0 bg-[var(--gold)] text-primary text-xs font-semibold uppercase tracking-wide px-4 py-2 rounded-r-[20px] shadow-md">
          {p.badge}
        </span>
      </div>
      <div className="p-6 flex flex-col flex-1">
        <h3 className="font-display text-2xl lg:text-[28px] font-bold text-primary leading-tight">{p.title}</h3>
        <div className="mt-2 text-2xl font-bold text-[var(--gold)]">{p.price}</div>
        <div className="mt-3 flex items-center gap-1.5 text-sm text-muted-foreground">
          <MapPin className="w-4 h-4 text-accent" /> {p.location}
        </div>
        {p.serving && (
          <p className="mt-3 text-xs text-muted-foreground leading-relaxed">
            <span className="font-semibold text-foreground">Serving Areas:</span> {p.serving}
          </p>
        )}
        <div className="mt-5 grid grid-cols-3 gap-2 pt-4 border-t border-border text-center">
          <div>
            <Ruler className="w-4 h-4 mx-auto text-accent" />
            <div className="mt-1 text-xs text-muted-foreground">Area</div>
            <div className="text-sm font-semibold text-primary">{p.area}</div>
          </div>
          <div>
            <Building2 className="w-4 h-4 mx-auto text-accent" />
            <div className="mt-1 text-xs text-muted-foreground">Units</div>
            <div className="text-sm font-semibold text-primary">{p.units}</div>
          </div>
          <div>
            <Home className="w-4 h-4 mx-auto text-accent" />
            <div className="mt-1 text-xs text-muted-foreground">Type</div>
            <div className="text-sm font-semibold text-primary leading-tight">{p.type}</div>
          </div>
        </div>
        <div className="mt-6 grid grid-cols-2 gap-3">
          <Button className="bg-[image:var(--gradient-primary)] hover:opacity-90 h-12 rounded-xl text-sm">
            <Calendar className="w-4 h-4 mr-1.5" /> Book Visit
          </Button>
          <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground h-12 rounded-xl text-sm">
            <Eye className="w-4 h-4 mr-1.5" /> Details
          </Button>
        </div>
      </div>
    </article>
  );
}

const plots: Property[] = [
  { badge: "New Launch", img: plot1, title: "Land Marvel Green Valley", price: "₹25L – ₹75L", location: "OMR, Chennai", serving: "Sholinganallur, Navalur, Siruseri, Kelambakkam", area: "12 Acres", units: "240 Plots", type: "Residential Plots" },
  { badge: "Premium", img: plot2, title: "Land Marvel Garden City", price: "₹18L – ₹55L", location: "Tambaram, Chennai", serving: "Tambaram, Chromepet, Pallavaram", area: "8 Acres", units: "180 Plots", type: "Residential Plots" },
  { badge: "Limited Units", img: plot3, title: "Land Marvel Urban Greens", price: "₹30L – ₹80L", location: "Perungalathur", serving: "Perungalathur, Vandalur, Tambaram", area: "15 Acres", units: "300 Plots", type: "Residential Plots" },
  { badge: "Lake View", img: plot4, title: "Land Marvel Lake View Plots", price: "₹35L – ₹95L", location: "Maraimalai Nagar", serving: "Maraimalai Nagar, Singaperumal Koil", area: "10 Acres", units: "220 Plots", type: "Premium Plots" },
];

const residential: Property[] = [
  { badge: "Ready To Move", img: res1, title: "Land Marvel Heights", price: "₹65L – ₹1.5 Cr", location: "Velachery", area: "5 Acres", units: "350 Apts", type: "2, 3 & 4 BHK" },
  { badge: "Premium", img: res2, title: "Land Marvel Signature", price: "₹75L – ₹2 Cr", location: "Adyar", area: "4 Acres", units: "420 Units", type: "2, 3 & 4 BHK" },
  { badge: "New Launch", img: res3, title: "Land Marvel Elite", price: "₹90L – ₹2.5 Cr", location: "Anna Nagar", area: "6 Acres", units: "500 Units", type: "Luxury Apts" },
  { badge: "Limited Units", img: res4, title: "Land Marvel Sky Villas", price: "₹1.2 Cr – ₹3 Cr", location: "OMR", area: "8 Acres", units: "250 Villas", type: "Villa Community" },
];

const commercial: Property[] = [
  { badge: "Investment Hotspot", img: com1, title: "Land Marvel Business Park", price: "₹50L – ₹5 Cr", location: "Guindy", area: "7 Acres", units: "120 Units", type: "Office Spaces" },
  { badge: "Premium", img: com2, title: "Land Marvel Trade Centre", price: "₹60L – ₹4 Cr", location: "OMR", area: "5 Acres", units: "150 Units", type: "Retail + Office" },
  { badge: "New Launch", img: com3, title: "Land Marvel Corporate Hub", price: "₹70L – ₹6 Cr", location: "Porur", area: "6 Acres", units: "200 Units", type: "Business Suites" },
  { badge: "Limited Units", img: com4, title: "Land Marvel Commercial Square", price: "₹40L – ₹2 Cr", location: "Velachery", area: "3 Acres", units: "100 Units", type: "Retail Shops" },
];

function CategorySection({ id, eyebrow, title, items, alt = false }: { id: string; eyebrow: string; title: string; items: Property[]; alt?: boolean }) {
  return (
    <section id={id} className={`py-16 sm:py-20 ${alt ? "" : "bg-background"}`} style={alt ? { background: "var(--gradient-soft)" } : undefined}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          {eyebrow && <span className="text-2xl">{eyebrow}</span>}
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-primary">{title}</h2>
          <div className="hidden sm:block flex-1 h-px bg-border ml-4" />
        </div>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((p) => <PropertyCard key={p.title} p={p} />)}
        </div>
      </div>
    </section>
  );
}

function BuyPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden" style={{ background: "var(--gradient-soft)" }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-accent">Buy Property</span>
              <h1 className="mt-4 font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-primary leading-[1.05]">
                Find Your <span className="text-[var(--gold)]">Dream Property</span>
              </h1>
              <p className="mt-6 text-lg text-muted-foreground max-w-xl">
                Explore premium plots, residential apartments, villas, and commercial spaces in Chennai's most sought-after locations.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button asChild size="lg" className="bg-[image:var(--gradient-primary)] hover:opacity-90 h-13 px-7 rounded-xl shadow-[var(--shadow-elegant)]">
                  <a href="#plots">Browse Properties <ArrowRight className="ml-2 w-4 h-4" /></a>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground h-13 px-7 rounded-xl">
                  <Link to="/" hash="contact"><Calendar className="mr-2 w-4 h-4" />Book Site Visit</Link>
                </Button>
              </div>
              <div className="mt-10 grid grid-cols-3 gap-6 max-w-md">
                {[["20+", "Years"], ["150+", "Projects"], ["6+", "Locations"]].map(([n, l]) => (
                  <div key={l}>
                    <div className="font-display text-3xl font-bold text-primary">{n}</div>
                    <div className="text-xs text-muted-foreground uppercase tracking-wider">{l}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img src={buyHero} alt="Luxury residential community" width={1536} height={1024} className="rounded-3xl shadow-[var(--shadow-elegant)] w-full h-[420px] lg:h-[540px] object-cover" />
              <div className="absolute -bottom-6 -left-6 hidden sm:block bg-[image:var(--gradient-primary)] text-primary-foreground rounded-2xl px-6 py-5 shadow-[var(--shadow-elegant)]">
                <div className="font-display text-3xl font-bold">2000+</div>
                <div className="text-xs text-white/80 uppercase tracking-wider">Happy Families</div>
              </div>
            </div>
          </div>
        </section>

        {/* Ongoing Projects intro */}
        <section className="pt-16 sm:pt-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
            <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-accent">Ongoing Projects</span>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl font-bold text-primary">Our Ongoing Projects</h2>
            <p className="mt-4 text-base sm:text-lg text-muted-foreground">
              Discover carefully selected investment opportunities across plots, residential homes, and commercial developments.
            </p>
          </div>
        </section>

        <CategorySection id="plots" eyebrow="" title="Premium Plots" items={plots} />
        <CategorySection id="residential" eyebrow="🏢" title="Residential Projects" items={residential} alt />
        <CategorySection id="commercial" eyebrow="🏬" title="Commercial Projects" items={commercial} />

        {/* Final CTA */}
        <section className="relative overflow-hidden">
          <img src={buyCta} alt="Luxury aerial township" width={1920} height={900} loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-primary/85" />
          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center text-primary-foreground max-w-3xl">
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold">Can't Find The Right Property?</h2>
            <p className="mt-5 text-lg text-white/85">
              Our property advisors will help you find the perfect plot, apartment, villa, or commercial investment.
            </p>
            <div className="mt-10 flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg" className="bg-[var(--gold)] text-primary hover:bg-[var(--gold)]/90 h-13 px-7 rounded-xl">
                <a href="tel:+910000000000"><Phone className="mr-2 w-4 h-4" />Talk To Expert</a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/40 bg-white/10 text-white hover:bg-white/20 hover:text-white h-13 px-7 rounded-xl">
                <Link to="/" hash="contact"><Calendar className="mr-2 w-4 h-4" />Schedule Visit</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
