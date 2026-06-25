import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import {
  Menu, X, Phone, Mail, MapPin, ArrowRight, Check, Shield, Building2,
  HardHat, Handshake, Home, Building, Trees, Briefcase, Award,
  Trophy, Star, Facebook, Instagram, Twitter, Linkedin, ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { SiteFooter } from "@/components/landmarvel/SiteFooter";
import { SiteHeader } from "@/components/landmarvel/SiteHeader";

import heroImg from "@/assets/hero-skyline.jpg";
import aboutImg from "@/assets/about-building.jpg";
import catVilla from "@/assets/cat-villa.jpg";
import catApartment from "@/assets/cat-apartment.jpg";
import catPlot from "@/assets/cat-plot.jpg";
import catCommercial from "@/assets/cat-commercial.jpg";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

import home1 from "@/assets/home-1.jpeg.asset.json";
import home2 from "@/assets/home-2.jpeg.asset.json";
import home3 from "@/assets/home-3.jpeg.asset.json";
import home4 from "@/assets/home-4.jpeg.asset.json";
import buySectionImg from "@/assets/buy-section.jpg";
import sellSectionImg from "@/assets/sell-section.jpg";
import exchangeSectionImg from "@/assets/exchange-section.jpg";

const heroSlides = [home1.url, home2.url, home3.url, home4.url];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Land Marvel — Premium Real Estate in Chennai" },
      { name: "description", content: "Find premium villas, apartments, plots and commercial spaces with Land Marvel. 30+ years of trust, 200+ completed projects across Chennai." },
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
        description: "Premium real estate developer in Chennai with 200+ completed projects.",
      }),
    }],
  }),
  component: Index,
});

type NavLink = { label: string; href?: string; to?: "/buy" | "/sell" | "/projects" | "/contact" };
const navLinks: NavLink[] = [
  { label: "Buy", to: "/buy" },
  { label: "Sell", to: "/sell" },
  { label: "Project", to: "/projects" },
  { label: "Contact Us", to: "/contact" },
];

function NavItem({ link, className, onClick }: { link: NavLink; className?: string; onClick?: () => void }) {
  const base = "text-white/80 hover:text-[var(--gold)] transition-colors font-bold text-2xl";
  if (link.to) return <Link to={link.to} className={className ?? base} onClick={onClick}>{link.label}</Link>;
  return <a href={link.href} className={className ?? base} onClick={onClick}>{link.label}</a>;
}

function Header() {
  return <SiteHeader />;
}

function Hero() {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setIdx((i) => (i + 1) % heroSlides.length), 5000);
    return () => clearInterval(id);
  }, []);
  return (
    <section id="top" className="relative h-screen min-h-[640px] w-full flex items-center overflow-hidden">
      {heroSlides.map((src, i) => (
        <img
          key={src}
          src={src}
          alt=""
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${i === idx ? "opacity-100" : "opacity-0"}`}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-black/15 to-transparent" />
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20 text-primary-foreground">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 backdrop-blur border border-white/20 text-xs font-medium tracking-wide uppercase">
            <Star className="w-3.5 h-3.5 text-[var(--gold)]" /> We together make financial peace in property investment
          </span>
          <h1 className="mt-6 font-display text-[1.5rem] sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.05] break-words drop-shadow-[0_4px_20px_rgba(0,0,0,0.45)]">
            FIND YOUR DREAM HOME- APARTMENT- VILLA-<br />
            PLOTTED LAYOUT-<br />
            COMMERCIAL SPACE -<br />
            With&nbsp;<span className="text-[var(--gold)]">Land Marvel</span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-white/90 max-w-2xl drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">
            Finding the right property shouldn't feel like a gamble. Premium locations. Verified projects. Zero confusion — we've helped 20,000+ families invest with confidence.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 shadow-[var(--shadow-elegant)] h-12 px-7">
              <a href="#projects">Explore Project <ArrowRight className="ml-2 w-4 h-4" /></a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white/40 bg-white/10 text-white hover:bg-white/20 hover:text-white h-12 px-7">
              <a href="#contact">Contact Us</a>
            </Button>
          </div>
        </div>
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-3xl">
          {[
            ["30+", "Years"], ["200+", "Projects"], ["20K+", "Families"], ["6+", "Locations"],
          ].map(([n, l]) => (
            <div key={l} className="border-l-2 border-[var(--gold)] pl-4">
              <div className="font-display text-3xl font-bold">{n}</div>
              <div className="text-sm text-white/85">{l}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {heroSlides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIdx(i)}
            aria-label={`Slide ${i + 1}`}
            className={`h-2 rounded-full transition-all ${i === idx ? "w-8 bg-[var(--gold)]" : "w-2 bg-white/50"}`}
          />
        ))}
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
  const highlights = ["30+ Years of Excellence", "200+ Completed Projects", "20K+ Happy Families", "Prime Chennai Locations"];
  return (
    <section id="about" className="py-20 sm:py-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="relative">
          <img src={aboutImg} alt="Premium residential building" width={1200} height={900} loading="lazy" className="rounded-2xl shadow-[var(--shadow-elegant)] w-full h-auto" />
          <div className="absolute -bottom-6 -right-6 hidden sm:block bg-[image:var(--gradient-primary)] text-primary-foreground rounded-2xl p-6 shadow-[var(--shadow-elegant)]">
            <div className="font-display text-4xl font-bold">30+</div>
            <div className="text-sm text-white/80">Years of Trust</div>
          </div>
        </div>
        <div>
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-accent"></span>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl font-bold text-primary leading-tight">
            Your Trusted Guide.<br/>Building Financial Peace.
          </h2>
          <p className="mt-5 text-muted-foreground text-lg leading-relaxed">
            Land Marvel is your trusted partner — 30+ years, 200+ projects, 20,000+ happy families. We've walked this path with thousands of buyers across Chennai, and we'll walk it with you too. No confusion. No risk. Just clear answers and a property you'll be proud of.
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

function BuySection() {
  return (
    <section id="services" className="py-20 sm:py-28 bg-background overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative group">
            <img
              src={buySectionImg}
              alt="Luxury villa community and premium apartment towers"
              width={1200}
              height={800}
              loading="lazy"
              className="w-full h-[500px] lg:h-[600px] object-cover rounded-3xl shadow-[var(--shadow-elegant)] group-hover:scale-[1.02] transition-transform duration-700"
            />
          </div>
          <div>
            <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-accent">Find Your Perfect Property</span>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl lg:text-[56px] font-bold text-primary leading-tight">Buy Your Dream Property With Confidence</h2>
            <p className="mt-6 text-muted-foreground text-lg lg:text-xl leading-relaxed">
              Discover premium plots, residential apartments, villas, and commercial spaces in Chennai's most sought-after locations. Every property is carefully selected to offer excellent value, clear ownership, and long-term investment potential.
            </p>
            <p className="mt-4 text-muted-foreground text-lg lg:text-xl leading-relaxed">
              Whether you are purchasing your first home, upgrading your lifestyle, or investing for the future, Land Marvel helps you find the right property with complete transparency and professional guidance.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-[image:var(--gradient-primary)] text-primary-foreground h-12 px-8 rounded-xl">
                <Link to="/buy">Browse Properties</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-2 border-[var(--gold)] text-[var(--gold)] hover:bg-[var(--gold)] hover:text-primary h-12 px-8 rounded-xl">
                <Link to="/contact">Schedule Site Visit</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SellSection() {
  return (
    <section className="py-20 sm:py-28 bg-muted overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="order-2 lg:order-1">
            <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-accent">Direct Property Buyers</span>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl lg:text-[56px] font-bold text-primary leading-tight">Sell Your Property Directly to Land Marvel</h2>
            <p className="mt-6 text-muted-foreground text-lg lg:text-xl leading-relaxed">
              Own a land, building, apartment, villa, or commercial property? Land Marvel offers a simple and transparent way to sell your property directly to us.
            </p>
            <p className="mt-4 text-muted-foreground text-lg lg:text-xl leading-relaxed">
              Avoid lengthy negotiations, multiple brokers, and uncertain buyers. We provide fair market pricing, direct transactions, and a hassle-free selling experience designed to help you close deals quickly and confidently.
            </p>
            <p className="mt-4 text-muted-foreground text-lg lg:text-xl leading-relaxed">
              Whether it's a residential, commercial, or investment property, our team ensures a smooth evaluation and fast decision-making process.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-[image:var(--gradient-primary)] text-primary-foreground h-12 px-8 rounded-xl">
                <Link to="/sell">Sell Your Property</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-2 border-[var(--gold)] text-[var(--gold)] hover:bg-[var(--gold)] hover:text-primary h-12 px-8 rounded-xl">
                <Link to="/contact">Get Property Evaluation</Link>
              </Button>
            </div>
          </div>
          <div className="relative group order-1 lg:order-2">
            <img
              src={sellSectionImg}
              alt="Premium property ready for direct sale"
              width={1200}
              height={800}
              loading="lazy"
              className="w-full h-[500px] lg:h-[600px] object-cover rounded-3xl shadow-[var(--shadow-elegant)] group-hover:scale-[1.02] transition-transform duration-700"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function ExchangeSection() {
  return (
    <section className="py-20 sm:py-28 bg-background overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative group">
            <img
              src={exchangeSectionImg}
              alt="Property exchange program"
              width={1200}
              height={800}
              loading="lazy"
              className="w-full h-[500px] lg:h-[600px] object-cover rounded-3xl shadow-[var(--shadow-elegant)] group-hover:scale-[1.02] transition-transform duration-700"
            />
          </div>
          <div>
            <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-accent">Smart Property Exchange</span>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl lg:text-[56px] font-bold text-primary leading-tight">Upgrade Your Property Through Direct Exchange</h2>
            <p className="mt-6 text-muted-foreground text-lg lg:text-xl leading-relaxed">
              Looking to move from your existing property into a better location, larger space, or a new investment opportunity? Land Marvel's Property Exchange Program makes it easier than ever.
            </p>
            <p className="mt-4 text-muted-foreground text-lg lg:text-xl leading-relaxed">
              Exchange your land, apartment, villa, or commercial property directly with us and explore suitable alternatives within our portfolio. Benefit from transparent valuations, direct transactions, and a streamlined process without the complexity of managing separate buying and selling deals.
            </p>
            <p className="mt-4 text-muted-foreground text-lg lg:text-xl leading-relaxed">
              Enjoy better value, faster decisions, and greater flexibility while upgrading your property investment.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-[image:var(--gradient-primary)] text-primary-foreground h-12 px-8 rounded-xl">
                <Link to="/contact">Explore Exchange Options</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-2 border-[var(--gold)] text-[var(--gold)] hover:bg-[var(--gold)] hover:text-primary h-12 px-8 rounded-xl">
                <Link to="/contact">Talk To Expert</Link>
              </Button>
            </div>
          </div>
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
    { img: catPlot, icon: Trees, title: "Plotted Layouts", desc: "Secure land investments." },
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
        <SectionHeading eyebrow="" title="Completed Projects" desc="A glimpse of communities we've built across Chennai." />
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
    { year: "2022", text: "200+ Projects Completed" },
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
  const stats = [["30+", "Years of Excellence"], ["200+", "Completed Projects"], ["20K+", "Happy Families"], ["6+", "Prime Locations"]];
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


function ThreeStepPlan() {
  const steps = [
    { n: "01", title: "Book a Site Visit", desc: "Tell us what you're looking for. We'll schedule a free, no-obligation visit to properties that fit." },
    { n: "02", title: "Get Matched to the Right Property", desc: "Our advisors guide you to the right plot, apartment, or commercial space — matched in under 48 hours." },
    { n: "03", title: "Move In or Earn Returns", desc: "We handle documentation, registration, and end-to-end support so you invest with complete confidence." },
  ];
  return (
    <section className="py-20 sm:py-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Your Journey With Us" title="A Simple 3-Step Plan" desc="Property investment shouldn't feel overwhelming. Here's how Land Marvel makes it clear." />
        <div className="mt-14 grid md:grid-cols-3 gap-7">
          {steps.map((s) => (
            <div key={s.n} className="relative bg-card rounded-2xl p-8 border border-border hover:border-accent hover:shadow-[var(--shadow-elegant)] transition-all">
              <div className="font-display text-5xl font-bold text-[var(--gold)]/30">{s.n}</div>
              <h3 className="mt-3 font-display text-2xl font-bold text-primary">{s.title}</h3>
              <p className="mt-3 text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button asChild size="lg" className="bg-[image:var(--gradient-primary)] h-12 px-8">
            <Link to="/contact">Book a Free Site Visit <ArrowRight className="ml-2 w-4 h-4" /></Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

function SuccessVision() {
  return (
    <section className="py-20 sm:py-28" style={{ background: "var(--gradient-soft)" }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="What's at Stake" title="Two Futures. One Decision." />
        <div className="mt-14 grid md:grid-cols-2 gap-7 max-w-5xl mx-auto">
          <div className="rounded-2xl p-8 border-2 border-accent bg-card shadow-[var(--shadow-card)]">
            <div className="text-xs font-semibold tracking-[0.2em] uppercase text-accent">With Land Marvel</div>
            <h3 className="mt-3 font-display text-2xl font-bold text-primary">Owning Premium Property. Sleeping Peacefully.</h3>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Imagine owning a premium property in a prime location — no stress, clear title, growing value — and finally feeling financially secure about your biggest investment.
            </p>
            <ul className="mt-5 space-y-2 text-sm">
              {["Prime locations with rising value", "Verified, dispute-free titles", "End-to-end documentation handled"].map((t) => (
                <li key={t} className="flex items-start gap-2"><Check className="w-4 h-4 mt-0.5 text-accent shrink-0" /><span>{t}</span></li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl p-8 border border-border bg-muted">
            <div className="text-xs font-semibold tracking-[0.2em] uppercase text-muted-foreground">Without a Trusted Guide</div>
            <h3 className="mt-3 font-display text-2xl font-bold text-primary">Every Month You Wait, Prices Rise.</h3>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Without the right guide, you risk a wrong location, a disputed title, or missing the project that could have changed your family's future. Prices go up. Availability goes down.
            </p>
            <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
              {["Wrong location, slow appreciation", "Unverified builders & unclear pricing", "No single partner end-to-end"].map((t) => (
                <li key={t} className="flex items-start gap-2"><X className="w-4 h-4 mt-0.5 shrink-0" /><span>{t}</span></li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function ResultsQuote() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
        <Star className="mx-auto w-8 h-8 text-[var(--gold)]" />
        <p className="mt-5 font-display text-2xl sm:text-3xl text-primary leading-snug">
          "Land Marvel sold my apartment in 6 weeks at a price 8% above expectation."
        </p>
        <p className="mt-4 text-sm uppercase tracking-[0.2em] text-muted-foreground">Real buyers. Real results.</p>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section id="contact" className="py-20 sm:py-24 text-primary-foreground" style={{ background: "var(--gradient-cta)" }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
        <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-[var(--gold)]">Stop Guessing. Start Owning.</span>
        <h2 className="mt-4 font-display text-4xl sm:text-5xl lg:text-6xl font-bold">Your Dream Property Awaits</h2>
        <p className="mt-5 text-lg text-white/85">
          If property investment stress keeps you up at night, partnering with Land Marvel is the decision that changes that. Book a free site visit — no obligation, just clarity on your best property option.
        </p>
        <div className="mt-10 flex flex-wrap gap-4 justify-center">
          <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 h-12 px-7"><Link to="/contact">Book a Free Site Visit</Link></Button>
          <Button asChild size="lg" variant="outline" className="border-white/40 bg-transparent text-white hover:bg-white/10 hover:text-white h-12 px-7"><a href="tel:+910000000000">Talk To An Advisor</a></Button>
        </div>
      </div>
    </section>
  );
}

function PortfolioShowcase() {
  const cards = [
    {
      emoji: "🏡",
      title: "Residential Living",
      desc: "Premium apartments, villas, and gated communities designed for modern families and long-term value.",
      gradient: "from-[#1e3a8a] via-[#1e40af] to-[#0a1d63]",
      glow: "rgba(59,130,246,0.45)",
      img: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1200&q=80",
      hash: "residential",
    },
    {
      emoji: "📍",
      title: "Plotted Developments",
      desc: "Strategically located plots in high-growth corridors with strong appreciation potential.",
      gradient: "from-[#059669] via-[#047857] to-[#064e3b]",
      glow: "rgba(16,185,129,0.45)",
      img: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80",
      hash: "plots",
    },
    {
      emoji: "🏢",
      title: "Commercial Spaces",
      desc: "Premium office spaces, retail destinations, and investment-focused commercial developments.",
      gradient: "from-[#f59e0b] via-[#ea8a0c] to-[#b45309]",
      glow: "rgba(245,158,11,0.45)",
      img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
      hash: "commercial",
    },
    {
      emoji: "✨",
      title: "Interior Solutions",
      desc: "Luxury interior transformations, smart home designs, and turnkey execution services.",
      gradient: "from-[#7c3aed] via-[#6d28d9] to-[#4338ca]",
      glow: "rgba(139,92,246,0.45)",
      img: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80",
      hash: "interior",
    },
    {
      emoji: "🌿",
      title: "Organic Homes",
      desc: "Healthy, sustainable homes designed around nature, wellness, and environmental responsibility.",
      gradient: "from-[#10b981] via-[#0d9488] to-[#0f766e]",
      glow: "rgba(20,184,166,0.45)",
      img: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=1200&q=80",
      hash: "organic",
    },
    {
      emoji: "🚀",
      title: "Future Living Solutions",
      desc: "3D printed homes, rooftop solar systems, sustainable communities, and future-ready innovations.",
      gradient: "from-[#06b6d4] via-[#0891b2] to-[#0c2340]",
      glow: "rgba(6,182,212,0.45)",
      img: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=1200&q=80",
      hash: "future",
    },
  ];

  return (
    <section className="relative py-20 sm:py-28 bg-[#F8FAFC] overflow-hidden">
      {/* decorative floating shapes */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-[image:var(--gradient-primary)] opacity-10 blur-3xl" />
        <div className="absolute top-1/3 -right-20 w-80 h-80 rounded-full bg-[var(--gold)]/15 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 w-72 h-72 rounded-full bg-emerald-400/10 blur-3xl" />
        <svg className="absolute inset-x-0 bottom-0 w-full opacity-[0.06]" viewBox="0 0 1440 200" fill="none">
          <path d="M0 180 L80 120 L160 150 L240 90 L320 130 L420 70 L520 110 L620 60 L720 100 L820 50 L920 90 L1040 40 L1160 80 L1280 30 L1440 80 L1440 200 L0 200 Z" fill="currentColor" />
        </svg>
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block text-xs font-semibold tracking-[0.25em] uppercase text-accent">Our Expertise</span>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl font-bold text-primary">
            Explore Innovation, Design & Future Living
          </h2>
          <p className="mt-5 text-base sm:text-lg text-muted-foreground">
            Discover Land Marvel's innovative solutions that combine real estate excellence, sustainable development, advanced technologies, and future-ready living concepts. Click any category to explore our complete portfolio.
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {cards.map((c) => (
            <Link
              key={c.title}
              to="/portfolio"
              hash={c.hash}
              className="group relative block rounded-[30px] overflow-hidden min-h-[440px] shadow-[0_20px_50px_-20px_rgba(10,29,99,0.35)] hover:-translate-y-2 transition-all duration-500"
              style={{ ["--glow" as any]: c.glow }}
            >
              {/* gradient background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${c.gradient}`} />
              {/* image header */}
              <div className="relative h-[220px] overflow-hidden rounded-b-[24px]">
                <img
                  src={c.img}
                  alt={c.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>

              {/* glow ring on hover */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 rounded-[30px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ boxShadow: `0 0 0 1px rgba(255,255,255,0.15), 0 30px 80px -20px var(--glow)` }}
              />

              {/* content */}
              <div className="relative p-7 text-white">
                <h3 className="font-display text-2xl font-bold leading-tight">{c.title}</h3>
                <p className="mt-3 text-sm text-white/85 leading-relaxed">{c.desc}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white">
                  <span className="px-4 py-2 rounded-full bg-white/15 backdrop-blur-md border border-white/30 group-hover:bg-white group-hover:text-primary transition-colors">
                    Explore <ArrowRight className="inline w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </span>
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom CTA banner */}
        <div className="mt-20 relative overflow-hidden rounded-[32px] shadow-[0_40px_80px_-30px_rgba(10,29,99,0.5)]">
          <img
            src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?auto=format&fit=crop&w=1920&q=80"
            alt="Premium futuristic city with sustainable architecture"
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a1d63]/95 via-[#0a1d63]/85 to-[#0a1d63]/60" />
          <div className="relative px-6 sm:px-12 py-16 sm:py-20 text-primary-foreground max-w-3xl">
            <span className="inline-block text-xs font-semibold tracking-[0.25em] uppercase text-[var(--gold)]">Land Marvel Portfolio</span>
            <h3 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
              Discover The Complete Land Marvel Portfolio
            </h3>
            <p className="mt-5 text-white/85 text-base sm:text-lg leading-relaxed">
              Explore our residential developments, plotted communities, commercial spaces, interiors, sustainable homes, and future living innovations.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-[var(--gold)] text-primary hover:bg-[var(--gold)]/90 h-12 px-7 rounded-xl">
                <Link to="/portfolio">View Full Portfolio <ArrowRight className="ml-2 w-4 h-4" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/40 bg-white/10 text-white hover:bg-white/20 hover:text-white h-12 px-7 rounded-xl">
                <Link to="/contact">Talk To Expert</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return <SiteFooter />;
}

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <About />
        <BuySection />
        <SellSection />
        <ExchangeSection />
        <ThreeStepPlan />
        <WhyChoose />
        <Categories />
        <Projects />
        <PortfolioShowcase />
        <ResultsQuote />
        <Timeline />
        <Stats />

        <Locations />
        <Awards />
        <SuccessVision />
        <FinalCTA />
        
      </main>
      <Footer />
    </div>
  );
}
