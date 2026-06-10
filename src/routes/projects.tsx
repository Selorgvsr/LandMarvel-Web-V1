import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  Menu, MapPin, ArrowRight, Check, Calendar, Eye, Ruler, Home, Building2,
  Phone, Mail, Facebook, Instagram, Twitter, Linkedin, TrendingUp, Shield,
  Award, Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import heroImg from "@/assets/hero-skyline.jpg";
import aboutImg from "@/assets/about-building.jpg";
import ctaImg from "@/assets/buy-cta.jpg";
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

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Our Projects — Plots, Residential & Commercial | Land Marvel" },
      { name: "description", content: "Explore Land Marvel's ongoing developments: premium plots, residential communities and commercial spaces across Chennai's fastest-growing locations." },
      { property: "og:title", content: "Our Projects | Land Marvel" },
      { property: "og:description", content: "Ongoing plot, residential and commercial projects by Land Marvel in Chennai." },
      { property: "og:image", content: heroImg },
    ],
    links: [{ rel: "canonical", href: "/projects" }],
  }),
  component: ProjectsPage,
});

const navLinks = [
  { label: "Buy", to: "/buy" as const, hash: undefined as string | undefined },
  { label: "Sell", to: "/sell" as const, hash: undefined as string | undefined },
  { label: "Projects", to: "/projects" as const, hash: undefined as string | undefined },
  { label: "Contact Us", to: "/" as const, hash: "contact" as string | undefined },
];

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 w-full bg-background/85 backdrop-blur-md border-b border-border bg-blue-600">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex h-16 lg:h-20 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span className="grid place-items-center w-9 h-9 rounded-lg bg-[image:var(--gradient-primary)] text-primary-foreground font-bold">LM</span>
          <span className="font-display text-xl font-bold text-primary">Land Marvel</span>
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <Link key={l.label} to={l.to} hash={l.hash} className="text-foreground/80 hover:text-accent transition-colors font-bold text-2xl" activeProps={{ className: "text-accent" }}>
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
              <Button asChild className="bg-[image:var(--gradient-primary)] mt-4">
                <Link to="/" hash="contact" onClick={() => setOpen(false)}>Get in Touch</Link>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

const highlights = [
  "Prime Locations", "Premium Developments", "Verified Projects",
  "Modern Infrastructure", "High Investment Potential", "Trusted Developer",
];

type Project = {
  image: string;
  badge: string;
  name: string;
  price: string;
  location: string;
  area: string;
  units: string;
  possession: string;
  type: string;
};

const plotProjects: Project[] = [
  { image: plot1, badge: "New Launch", name: "Land Marvel Green Valley", price: "₹25L – ₹75L", location: "OMR, Chennai", area: "12 Acres", units: "240 Plots", possession: "Ready To Register", type: "Residential Plots" },
  { image: plot2, badge: "Hot Selling", name: "Land Marvel Garden City", price: "₹20L – ₹60L", location: "Tambaram", area: "8 Acres", units: "180 Plots", possession: "Ready To Register", type: "Residential Plots" },
  { image: plot3, badge: "Limited Units", name: "Land Marvel Urban Greens", price: "₹18L – ₹55L", location: "Perungalathur", area: "15 Acres", units: "300 Plots", possession: "Under Approval", type: "Residential Plots" },
  { image: plot4, badge: "Premium Plots", name: "Land Marvel Lake View", price: "₹30L – ₹85L", location: "Maraimalai Nagar", area: "10 Acres", units: "220 Plots", possession: "Ready To Register", type: "Lake-Front Plots" },
];

const residentialProjects: Project[] = [
  { image: res1, badge: "Ready To Move", name: "Land Marvel Heights", price: "₹65L – ₹1.5 Cr", location: "Velachery", area: "5 Acres", units: "350 Units", possession: "Ready To Move", type: "2, 3 & 4 BHK" },
  { image: res2, badge: "New Launch", name: "Land Marvel Signature", price: "₹75L – ₹2 Cr", location: "Adyar", area: "6 Acres", units: "420 Units", possession: "Dec 2026", type: "2 & 3 BHK" },
  { image: res3, badge: "Premium", name: "Land Marvel Elite", price: "₹90L – ₹2.5 Cr", location: "Anna Nagar", area: "7 Acres", units: "500 Units", possession: "Mar 2027", type: "Luxury Apartments" },
  { image: res4, badge: "Investment Hotspot", name: "Land Marvel Sky Villas", price: "₹1.2 Cr – ₹3 Cr", location: "OMR", area: "9 Acres", units: "250 Units", possession: "Jun 2027", type: "Villa Community" },
];

const commercialProjects: Project[] = [
  { image: com1, badge: "New Launch", name: "Land Marvel Business Park", price: "₹50L – ₹5 Cr", location: "Guindy", area: "7 Acres", units: "120 Units", possession: "Dec 2026", type: "Office Spaces" },
  { image: com2, badge: "Hot Selling", name: "Land Marvel Trade Centre", price: "₹60L – ₹4 Cr", location: "OMR", area: "8 Acres", units: "150 Units", possession: "Mar 2027", type: "Retail + Office" },
  { image: com3, badge: "Premium", name: "Land Marvel Corporate Hub", price: "₹80L – ₹6 Cr", location: "Porur", area: "10 Acres", units: "200 Units", possession: "Jun 2027", type: "Business Suites" },
  { image: com4, badge: "Limited Units", name: "Land Marvel Commercial Square", price: "₹40L – ₹3 Cr", location: "Velachery", area: "4 Acres", units: "100 Units", possession: "Sep 2026", type: "Retail Shops" },
];

function ProjectCard({ p }: { p: Project }) {
  return (
    <article className="group relative bg-card rounded-[20px] overflow-hidden shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-elegant)] transition-all duration-300 hover:-translate-y-2 border border-border">
      <div className="relative h-[280px] overflow-hidden">
        <img src={p.image} alt={p.name} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        <span className="absolute top-4 left-0 px-4 py-1.5 text-xs font-bold text-white bg-[var(--gold)] rounded-r-2xl shadow-md">
          {p.badge}
        </span>
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
      <div className="p-6 space-y-4">
        <div>
          <h3 className="font-display text-xl font-bold text-primary leading-tight">{p.name}</h3>
          <p className="text-accent font-semibold mt-1">{p.price}</p>
        </div>
        <div className="grid grid-cols-2 gap-3 text-sm text-muted-foreground">
          <div className="flex items-center gap-2"><MapPin className="w-4 h-4 text-accent shrink-0" /><span className="truncate">{p.location}</span></div>
          <div className="flex items-center gap-2"><Ruler className="w-4 h-4 text-accent shrink-0" /><span className="truncate">{p.area}</span></div>
          <div className="flex items-center gap-2"><Home className="w-4 h-4 text-accent shrink-0" /><span className="truncate">{p.units}</span></div>
          <div className="flex items-center gap-2"><Building2 className="w-4 h-4 text-accent shrink-0" /><span className="truncate">{p.type}</span></div>
          <div className="flex items-center gap-2 col-span-2"><Calendar className="w-4 h-4 text-accent shrink-0" /><span>{p.possession}</span></div>
        </div>
        <div className="flex gap-2 pt-2">
          <Button className="flex-1 h-[52px] rounded-xl bg-primary text-primary-foreground hover:bg-primary/90">
            <Calendar className="w-4 h-4" /> Book Visit
          </Button>
          <Button variant="outline" className="flex-1 h-[52px] rounded-xl border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            <Eye className="w-4 h-4" /> Details
          </Button>
        </div>
      </div>
    </article>
  );
}

function CategorySection({ icon, title, description, projects }: { icon: string; title: string; description: string; projects: Project[] }) {
  return (
    <div className="mb-20">
      <div className="mb-10 text-center">
        <h3 className="font-display text-3xl md:text-4xl font-bold text-primary">
          <span className="mr-2">{icon}</span>{title}
        </h3>
        <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">{description}</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {projects.map((p) => <ProjectCard key={p.name} p={p} />)}
      </div>
    </div>
  );
}

function ProjectsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* HERO */}
      <section className="relative overflow-hidden bg-[image:var(--gradient-soft)]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-semibold">Land Marvel Developments</span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight">Our Projects</h1>
              <p className="text-lg text-muted-foreground max-w-xl">
                Discover Land Marvel's ongoing developments across premium plots, residential communities, and commercial spaces in Chennai's fastest-growing locations.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {highlights.map((h) => (
                  <li key={h} className="flex items-center gap-2 text-foreground">
                    <span className="grid place-items-center w-6 h-6 rounded-full bg-accent/15 text-accent"><Check className="w-3.5 h-3.5" /></span>
                    <span className="font-medium">{h}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-3 pt-2">
                <Button size="lg" className="h-[52px] rounded-xl bg-[image:var(--gradient-primary)] hover:opacity-90 px-7">
                  Explore Projects <ArrowRight className="w-4 h-4" />
                </Button>
                <Button size="lg" variant="outline" className="h-[52px] rounded-xl border-primary text-primary hover:bg-primary hover:text-primary-foreground px-7">
                  Book Site Visit
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-[image:var(--gradient-primary)] opacity-20 blur-3xl rounded-[2rem]" />
              <img src={heroImg} alt="Land Marvel luxury township" className="relative rounded-[2rem] shadow-[var(--shadow-elegant)] w-full h-[420px] lg:h-[520px] object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* ONGOING PROJECTS */}
      <section className="py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-primary">Ongoing Projects</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our latest developments designed for living, investment, and business growth.
            </p>
          </div>

          <CategorySection icon="🏞" title="Plot Projects" description="Premium plotted developments in rapidly growing locations with excellent future appreciation potential." projects={plotProjects} />
          <CategorySection icon="🏢" title="Residential Projects" description="Premium apartments, gated communities, and luxury villas designed for modern families." projects={residentialProjects} />
          <CategorySection icon="🏬" title="Commercial Projects" description="Modern office spaces, retail developments, and commercial hubs in strategic business districts." projects={commercialProjects} />
        </div>
      </section>

      {/* WHY INVEST */}
      <section className="py-20 bg-[image:var(--gradient-soft)]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <img src={aboutImg} alt="Why invest with Land Marvel" className="rounded-[2rem] shadow-[var(--shadow-elegant)] w-full h-[480px] object-cover" />
            <div className="space-y-6">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-primary">Why Choose Our Projects</h2>
              <ul className="space-y-4">
                {[
                  "Prime Chennai Locations",
                  "Excellent Connectivity",
                  "Future Growth Potential",
                  "Premium Infrastructure",
                  "Clear Documentation",
                  "Trusted Development Experience",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="grid place-items-center w-7 h-7 rounded-full bg-accent text-accent-foreground shrink-0 mt-0.5"><Check className="w-4 h-4" /></span>
                    <span className="text-lg text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <Button size="lg" className="h-[52px] rounded-xl bg-[image:var(--gradient-primary)] hover:opacity-90 px-7 mt-4">
                Talk To Project Expert <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* STATISTICS */}
      <section className="py-20 bg-[image:var(--gradient-cta)] text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { icon: Award, value: "20+", label: "Years of Experience" },
              { icon: TrendingUp, value: "200+", label: "Completed Projects" },
              { icon: Building2, value: "30+", label: "Ongoing Projects" },
              { icon: Users, value: "5000+", label: "Happy Customers" },
            ].map((s) => (
              <div key={s.label} className="space-y-2">
                <s.icon className="w-8 h-8 mx-auto text-[var(--gold)]" />
                <div className="font-display text-4xl md:text-5xl font-bold">{s.value}</div>
                <div className="text-primary-foreground/85">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative py-24 overflow-hidden">
        <img src={ctaImg} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-[image:var(--gradient-hero)]" />
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center text-primary-foreground space-y-6">
          <h2 className="font-display text-4xl md:text-5xl font-bold">Looking For The Perfect Property?</h2>
          <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto">
            Our experts will help you choose the ideal plot, residential home, or commercial investment.
          </p>
          <div className="flex flex-wrap gap-3 justify-center pt-2">
            <Button size="lg" className="h-[52px] rounded-xl bg-[var(--gold)] text-primary hover:opacity-90 px-7 font-semibold">
              <Calendar className="w-4 h-4" /> Schedule Site Visit
            </Button>
            <Button size="lg" variant="outline" className="h-[52px] rounded-xl bg-transparent border-white text-white hover:bg-white hover:text-primary px-7">
              <Phone className="w-4 h-4" /> Contact Sales Team
            </Button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-14 grid md:grid-cols-4 gap-10">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="grid place-items-center w-9 h-9 rounded-lg bg-white/10 font-bold">LM</span>
              <span className="font-display text-xl font-bold">Land Marvel</span>
            </div>
            <p className="text-primary-foreground/80 text-sm">Building trust and creating communities across Chennai for 20+ years.</p>
            <div className="flex gap-3 pt-1">
              {[Facebook, Instagram, Twitter, Linkedin].map((I, i) => (
                <a key={i} href="#" aria-label="social" className="grid place-items-center w-9 h-9 rounded-full bg-white/10 hover:bg-[var(--gold)] hover:text-primary transition"><I className="w-4 h-4" /></a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Explore</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/85">
              <li><Link to="/buy" className="hover:text-[var(--gold)]">Buy</Link></li>
              <li><Link to="/sell" className="hover:text-[var(--gold)]">Sell</Link></li>
              <li><Link to="/projects" className="hover:text-[var(--gold)]">Projects</Link></li>
              <li><Link to="/" hash="contact" className="hover:text-[var(--gold)]">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Legal</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/85">
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
              <li>RERA Info</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Contact</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/85">
              <li className="flex items-center gap-2"><MapPin className="w-4 h-4" /> Chennai, Tamil Nadu</li>
              <li className="flex items-center gap-2"><Phone className="w-4 h-4" /> +91 98765 43210</li>
              <li className="flex items-center gap-2"><Mail className="w-4 h-4" /> hello@landmarvel.in</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 py-5 text-center text-sm text-primary-foreground/70">
          © {new Date().getFullYear()} Land Marvel. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
