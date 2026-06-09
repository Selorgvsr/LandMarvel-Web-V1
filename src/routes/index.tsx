import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  Menu, X, Phone, Mail, MapPin, ArrowRight, Check, Shield, Building2,
  HardHat, Handshake, Home, Building, Trees, Briefcase, Quote, Award,
  Trophy, Star, Facebook, Instagram, Twitter, Linkedin, ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import heroImg from "@/assets/hero-skyline.jpg";
import heroVideo from "@/assets/hero-video.mp4.asset.json";
import aboutImg from "@/assets/about-building.jpg";
import catVilla from "@/assets/cat-villa.jpg";
import catApartment from "@/assets/cat-apartment.jpg";
import catPlot from "@/assets/cat-plot.jpg";
import catCommercial from "@/assets/cat-commercial.jpg";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import loanImg from "@/assets/home-loan.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Land Marvel — Premium Real Estate in Chennai" },
      { name: "description", content: "Find premium villas, apartments, plots and commercial spaces with Land Marvel. 20+ years of trust, 150+ completed projects across Chennai." },
      { property: "og:title", content: "Land Marvel — Premium Real Estate in Chennai" },
      { property: "og:description", content: "Find premium villas, apartments, plots and commercial spaces with Land Marvel." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "RealEstateAgent",
        name: "Land Marvel",
        areaServed: "Chennai",
        description: "Premium real estate developer in Chennai with 150+ completed projects.",
      }),
    }],
  }),
  component: Index,
});

type NavLink = { label: string; href?: string; to?: "/buy" | "/sell" };
const navLinks: NavLink[] = [
  { label: "Buy", to: "/buy" },
  { label: "Sell", to: "/sell" },
  { label: "Projects", href: "#projects" },
  { label: "Contact Us", href: "#contact" },
];

function NavItem({ link, className, onClick }: { link: NavLink; className?: string; onClick?: () => void }) {
  if (link.to) return <Link to={link.to} className={className} onClick={onClick}>{link.label}</Link>;
  return <a href={link.href} className={className} onClick={onClick}>{link.label}</a>;
}

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 w-full bg-background/85 backdrop-blur-md border-b border-border bg-blue-600">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex h-16 lg:h-20 items-center justify-between">
        <a href="#top" className="flex items-center gap-2">
          <span className="grid place-items-center w-9 h-9 rounded-lg bg-[image:var(--gradient-primary)] text-primary-foreground font-bold">LM</span>
          <span className="font-display text-xl font-bold text-primary">Land Marvel</span>
        </a>
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <NavItem key={l.label} link={l} className="text-foreground/80 hover:text-accent transition-colors font-bold text-2xl" />
          ))}
        </nav>
        <div className="hidden md:block">
          <Button asChild className="bg-[image:var(--gradient-primary)] hover:opacity-90 shadow-[var(--shadow-card)]">
            <a href="#contact">Get in Touch</a>
          </Button>
        </div>
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" aria-label="Open menu"><Menu /></Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-72">
            <div className="flex flex-col gap-6 mt-8">
              {navLinks.map((l) => (
                <NavItem key={l.label} link={l} onClick={() => setOpen(false)} className="text-lg font-medium text-foreground hover:text-accent" />
              ))}
              <Button asChild className="bg-[image:var(--gradient-primary)]">
                <a href="#contact" onClick={() => setOpen(false)}>Get in Touch</a>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative h-screen min-h-[640px] w-full flex items-center overflow-hidden">
      <video
        src={heroVideo.url}
        poster={heroImg}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/25 to-transparent" />
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20 text-primary-foreground">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 backdrop-blur border border-white/20 text-xs font-medium tracking-wide uppercase">
            <Star className="w-3.5 h-3.5 text-[var(--gold)]" /> Chennai's Trusted Developer
          </span>
          <h1 className="mt-6 font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] drop-shadow-[0_4px_20px_rgba(0,0,0,0.45)]">
            Find Your Dream Home with <span className="text-[var(--gold)]">Land Marvel</span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-white/90 max-w-2xl drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">
            Discover premium residential and commercial properties through our seamless buying, selling, and exchange services.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 shadow-[var(--shadow-elegant)] h-12 px-7">
              <a href="#projects">Explore Projects <ArrowRight className="ml-2 w-4 h-4" /></a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white/40 bg-white/10 text-white hover:bg-white/20 hover:text-white h-12 px-7">
              <a href="#contact">Contact Us</a>
            </Button>
          </div>
        </div>
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-3xl">
          {[
            ["20+", "Years"], ["150+", "Projects"], ["2000+", "Families"], ["6+", "Locations"],
          ].map(([n, l]) => (
            <div key={l} className="border-l-2 border-[var(--gold)] pl-4">
              <div className="font-display text-3xl font-bold">{n}</div>
              <div className="text-sm text-white/85">{l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SectionHeading({ eyebrow, title, desc, center = true }: { eyebrow: string; title: string; desc?: string; center?: boolean }) {
  return (
    <div className={`max-w-2xl ${center ? "mx-auto text-center" : ""}`}>
      <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-accent">{eyebrow}</span>
      <h2 className="mt-3 font-display text-4xl sm:text-5xl font-bold text-primary">{title}</h2>
      {desc && <p className="mt-4 text-base sm:text-lg text-muted-foreground">{desc}</p>}
    </div>
  );
}

function About() {
  const highlights = ["20+ Years of Excellence", "150+ Completed Projects", "2000+ Happy Families", "Prime Chennai Locations"];
  return (
    <section id="about" className="py-20 sm:py-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="relative">
          <img src={aboutImg} alt="Premium residential building" width={1200} height={900} loading="lazy" className="rounded-2xl shadow-[var(--shadow-elegant)] w-full h-auto" />
          <div className="absolute -bottom-6 -right-6 hidden sm:block bg-[image:var(--gradient-primary)] text-primary-foreground rounded-2xl p-6 shadow-[var(--shadow-elegant)]">
            <div className="font-display text-4xl font-bold">20+</div>
            <div className="text-sm text-white/80">Years of Trust</div>
          </div>
        </div>
        <div>
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-accent">About Land Marvel</span>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl font-bold text-primary leading-tight">
            Building Trust. <br/>Creating Communities.
          </h2>
          <p className="mt-5 text-muted-foreground text-lg leading-relaxed">
            For over 20 years, Land Marvel has delivered premium residential and commercial developments designed to enrich lives and create long-term value for families across Chennai.
          </p>
          <ul className="mt-8 grid sm:grid-cols-2 gap-4">
            {highlights.map((h) => (
              <li key={h} className="flex items-start gap-3">
                <span className="mt-0.5 grid place-items-center w-6 h-6 rounded-full bg-accent text-accent-foreground shrink-0"><Check className="w-3.5 h-3.5" /></span>
                <span className="font-medium text-foreground">{h}</span>
              </li>
            ))}
          </ul>
          <Button className="mt-8 bg-[image:var(--gradient-primary)] h-12 px-7">Learn More <ArrowRight className="ml-2 w-4 h-4" /></Button>
        </div>
      </div>
    </section>
  );
}

function Services() {
  const items = [
    { icon: Home, title: "Buy", desc: "Explore homes, apartments, plots, and office spaces with diverse investment opportunities in the property market." },
    { icon: Handshake, title: "Sell", desc: "Market your home as-is with our expert team handling listings, buyers, and paperwork end to end." },
    { icon: Building2, title: "Exchange", desc: "Trade up or downsize seamlessly with our property exchange program tailored to your needs." },
  ];
  return (
    <section id="services" className="py-20 sm:py-28" style={{ background: "var(--gradient-soft)" }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Our Services" title="Buy. Sell. Exchange." desc="A complete real-estate platform built around your goals." />
        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group bg-card rounded-2xl p-8 border border-border shadow-[var(--shadow-card)] hover:-translate-y-1 hover:shadow-[var(--shadow-elegant)] transition-all">
              <div className="w-14 h-14 grid place-items-center rounded-xl bg-[image:var(--gradient-primary)] text-primary-foreground group-hover:scale-110 transition-transform">
                <Icon className="w-7 h-7" />
              </div>
              <h3 className="mt-6 font-display text-2xl font-bold text-primary">{title}</h3>
              <p className="mt-3 text-muted-foreground">{desc}</p>
              <a href="#contact" className="mt-5 inline-flex items-center gap-1 text-accent font-medium text-sm hover:gap-2 transition-all">Learn more <ChevronRight className="w-4 h-4" /></a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyChoose() {
  const items = [
    { icon: MapPin, title: "Prime Locations", desc: "Properties located in rapidly growing areas." },
    { icon: Shield, title: "Verified Documentation", desc: "Clear legal verification and transparency." },
    { icon: HardHat, title: "Premium Construction", desc: "High-quality design and engineering standards." },
    { icon: Handshake, title: "End-to-End Support", desc: "Guidance from selection to registration." },
  ];
  return (
    <section className="py-20 sm:py-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Why Choose Us" title="Why Homebuyers Trust Us" />
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="text-center bg-card rounded-2xl p-7 border border-border hover:border-accent hover:shadow-[var(--shadow-card)] transition-all">
              <div className="mx-auto w-16 h-16 grid place-items-center rounded-full bg-secondary text-accent">
                <Icon className="w-7 h-7" />
              </div>
              <h3 className="mt-5 font-display text-xl font-bold text-primary">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Categories() {
  const items = [
    { img: catVilla, icon: Home, title: "Villas", desc: "Premium independent homes." },
    { img: catApartment, icon: Building, title: "Apartments", desc: "Modern urban living spaces." },
    { img: catPlot, icon: Trees, title: "Residential Plots", desc: "Secure land investments." },
    { img: catCommercial, icon: Briefcase, title: "Commercial Spaces", desc: "Business-ready properties." },
  ];
  return (
    <section className="py-20 sm:py-28" style={{ background: "var(--gradient-soft)" }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Categories" title="Explore Properties By Category" />
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map(({ img, icon: Icon, title, desc }) => (
            <div key={title} className="group relative rounded-2xl overflow-hidden shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-elegant)] transition-all">
              <img src={img} alt={title} width={1024} height={768} loading="lazy" className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/40 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 text-primary-foreground">
                <Icon className="w-7 h-7 text-[var(--gold)]" />
                <h3 className="mt-2 font-display text-2xl font-bold">{title}</h3>
                <p className="text-sm text-white/85">{desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button size="lg" className="bg-[image:var(--gradient-primary)] h-12 px-7">View All Properties <ArrowRight className="ml-2 w-4 h-4" /></Button>
        </div>
      </div>
    </section>
  );
}

function Projects() {
  const projects = [
    { img: project1, title: "Marvel Heights", location: "Anna Nagar", units: "120 Units" },
    { img: project2, title: "Coastal Residences", location: "OMR", units: "84 Units" },
    { img: project3, title: "Palm Grove Villas", location: "Velachery", units: "32 Villas" },
  ];
  return (
    <section id="projects" className="py-20 sm:py-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Portfolio" title="Completed Projects" desc="A glimpse of communities we've built across Chennai." />
        <div className="mt-14 grid md:grid-cols-3 gap-7">
          {projects.map((p) => (
            <article key={p.title} className="group bg-card rounded-2xl overflow-hidden border border-border shadow-[var(--shadow-card)] hover:-translate-y-1 hover:shadow-[var(--shadow-elegant)] transition-all">
              <div className="relative overflow-hidden">
                <img src={p.img} alt={p.title} width={1024} height={768} loading="lazy" className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500" />
                <span className="absolute top-4 left-4 bg-white/95 text-primary text-xs font-semibold px-3 py-1 rounded-full">{p.units}</span>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-1.5 text-accent text-sm"><MapPin className="w-4 h-4" />{p.location}</div>
                <h3 className="mt-2 font-display text-2xl font-bold text-primary">{p.title}</h3>
                <a href="#" className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-foreground hover:text-accent">View Project <ChevronRight className="w-4 h-4" /></a>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground h-12 px-7">View All Projects</Button>
        </div>
      </div>
    </section>
  );
}

function Timeline() {
  const steps = [
    { year: "2004", text: "Company Founded" },
    { year: "2010", text: "50 Projects Delivered" },
    { year: "2016", text: "Expansion Across Chennai" },
    { year: "2022", text: "150+ Projects Completed" },
    { year: "2026", text: "Continuing to Build Tomorrow" },
  ];
  return (
    <section className="py-20 sm:py-28" style={{ background: "var(--gradient-soft)" }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Our Journey" title="Our Journey of Excellence" />
        <div className="mt-16 relative">
          <div className="hidden md:block absolute top-8 left-0 right-0 h-0.5 bg-border" />
          <div className="grid md:grid-cols-5 gap-8">
            {steps.map((s, i) => (
              <div key={s.year} className="relative text-center">
                <div className="mx-auto relative z-10 w-16 h-16 grid place-items-center rounded-full bg-[image:var(--gradient-primary)] text-primary-foreground font-display text-lg font-bold shadow-[var(--shadow-card)]">
                  {i + 1}
                </div>
                <div className="mt-5 font-display text-2xl font-bold text-accent">{s.year}</div>
                <p className="mt-1 text-sm text-muted-foreground px-2">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Stats() {
  const stats = [["20+", "Years of Excellence"], ["150+", "Completed Projects"], ["2000+", "Happy Families"], ["6+", "Prime Locations"]];
  return (
    <section className="py-20 relative overflow-hidden" style={{ background: "var(--gradient-cta)" }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 lg:grid-cols-4 gap-10 text-primary-foreground text-center">
        {stats.map(([n, l]) => (
          <div key={l}>
            <div className="font-display text-5xl sm:text-6xl font-bold text-[var(--gold)]">{n}</div>
            <div className="mt-2 text-sm sm:text-base text-white/85 uppercase tracking-wider">{l}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Testimonials() {
  const items = [
    { name: "Priya Raghavan", loc: "Anna Nagar", text: "Land Marvel made buying our first home effortless. The team's transparency and support throughout was exceptional." },
    { name: "Karthik Suresh", loc: "OMR", text: "Outstanding construction quality and on-time delivery. Our apartment exceeded every expectation we had." },
    { name: "Anitha & Vijay", loc: "Velachery", text: "From site visit to registration, every step felt smooth and trustworthy. Highly recommend Land Marvel." },
  ];
  return (
    <section className="py-20 sm:py-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Testimonials" title="What Our Families Say" />
        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {items.map((t) => (
            <div key={t.name} className="bg-card rounded-2xl p-8 border border-border shadow-[var(--shadow-card)]">
              <Quote className="w-8 h-8 text-accent/30" />
              <p className="mt-4 text-foreground leading-relaxed">"{t.text}"</p>
              <div className="mt-6 flex items-center gap-3 pt-6 border-t border-border">
                <div className="w-11 h-11 grid place-items-center rounded-full bg-[image:var(--gradient-primary)] text-primary-foreground font-semibold">
                  {t.name.split(" ").map((p) => p[0]).join("").slice(0, 2)}
                </div>
                <div>
                  <div className="font-semibold text-primary">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.loc}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Locations() {
  const locs = ["Anna Nagar", "Adyar", "OMR", "Velachery", "Tambaram", "Porur"];
  return (
    <section className="py-20 sm:py-28" style={{ background: "var(--gradient-soft)" }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Locations" title="Prime Locations We Serve" />
        <div className="mt-14 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {locs.map((l) => (
            <div key={l} className="group bg-card rounded-xl p-5 border border-border text-center hover:border-accent hover:bg-[image:var(--gradient-primary)] hover:text-primary-foreground transition-all cursor-pointer">
              <MapPin className="mx-auto w-6 h-6 text-accent group-hover:text-[var(--gold)] transition-colors" />
              <div className="mt-2 font-semibold text-sm">{l}</div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button size="lg" className="bg-[image:var(--gradient-primary)] h-12 px-7">Explore Locations <ArrowRight className="ml-2 w-4 h-4" /></Button>
        </div>
      </div>
    </section>
  );
}

function Awards() {
  const items = [
    { icon: Trophy, label: "Trusted Developer" },
    { icon: Award, label: "Quality Construction Standards" },
    { icon: Star, label: "Customer Satisfaction Excellence" },
    { icon: Trophy, label: "Industry Recognition" },
  ];
  return (
    <section className="py-20 sm:py-24 relative overflow-hidden bg-primary text-primary-foreground">
      <div className="absolute inset-0 opacity-20" style={{ background: "radial-gradient(circle at 20% 20%, oklch(0.58 0.18 250 / 0.6), transparent 50%), radial-gradient(circle at 80% 80%, oklch(0.78 0.13 85 / 0.4), transparent 50%)" }} />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-2xl mx-auto text-center">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[var(--gold)]">Recognition</span>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl font-bold">Recognized For Excellence</h2>
        </div>
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map(({ icon: Icon, label }) => (
            <div key={label} className="text-center p-6 rounded-2xl border border-white/15 bg-white/5 backdrop-blur">
              <Icon className="mx-auto w-10 h-10 text-[var(--gold)]" />
              <div className="mt-4 font-medium">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HomeLoan() {
  return (
    <section className="py-20 sm:py-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-accent">Home Loan Assistance</span>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl font-bold text-primary leading-tight">Easy Financing,<br/>Your Keys Faster.</h2>
          <p className="mt-5 text-muted-foreground text-lg">We partner with India's leading banks to make your home loan process simple, fast, and transparent — from eligibility to disbursement.</p>
          <ul className="mt-6 space-y-3">
            {["Tie-ups with top banks & NBFCs", "Best-in-class interest rates", "Doorstep documentation support", "Quick eligibility check"].map((h) => (
              <li key={h} className="flex items-center gap-3"><Check className="w-5 h-5 text-accent" />{h}</li>
            ))}
          </ul>
          <Button className="mt-8 bg-[image:var(--gradient-primary)] h-12 px-7">Check Eligibility <ArrowRight className="ml-2 w-4 h-4" /></Button>
        </div>
        <img src={loanImg} alt="Family receiving keys to new home" width={1200} height={900} loading="lazy" className="rounded-2xl shadow-[var(--shadow-elegant)] w-full h-auto" />
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section id="contact" className="py-20 sm:py-24 text-primary-foreground" style={{ background: "var(--gradient-cta)" }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
        <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold">Your Dream Property Awaits</h2>
        <p className="mt-5 text-lg text-white/85">Explore premium apartments, villas, plots, and investment opportunities with Land Marvel.</p>
        <div className="mt-10 flex flex-wrap gap-4 justify-center">
          <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 h-12 px-7"><a href="#projects">Explore Projects</a></Button>
          <Button asChild size="lg" variant="outline" className="border-white/40 bg-transparent text-white hover:bg-white/10 hover:text-white h-12 px-7"><a href="tel:+910000000000">Contact Us</a></Button>
        </div>
      </div>
    </section>
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
            {["Buy", "Sell", "Projects", "Contact Us"].map((l) => (
              <li key={l}><a href="#" className="hover:text-[var(--gold)] transition-colors">{l}</a></li>
            ))}
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

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <WhyChoose />
        <Categories />
        <Projects />
        <Timeline />
        <Stats />
        <Testimonials />
        <Locations />
        <Awards />
        <HomeLoan />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
