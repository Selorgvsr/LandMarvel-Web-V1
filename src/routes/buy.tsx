import buyHeroVideoAsset from "@/assets/buy-hero-video.mp4.asset.json";
import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import {
  Menu, MapPin, Mail, Facebook, Instagram, Twitter, Linkedin, Building2, Ruler, Home,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { SiteFooter } from "@/components/landmarvel/SiteFooter";
import { SiteHeader } from "@/components/landmarvel/SiteHeader";
import { LandInvestmentSection, ResidentialLivingSection, CommercialSolutionsSection } from "@/components/landmarvel/BuySections";

import buyHero from "@/assets/buy-hero.jpg";
import buyCta from "@/assets/buy-cta.jpg";
import palace1 from "@/assets/palace-1.png.asset.json";
import palace2 from "@/assets/palace-2.png.asset.json";
import palace3 from "@/assets/palace-3.png.asset.json";
import palace4 from "@/assets/palace-4.png.asset.json";
import plot1 from "@/assets/plot-1.jpg";
import greenValleyAerial from "@/assets/green-valley-aerial.png.asset.json";
import plot2 from "@/assets/plot-2.jpg";
import plot3 from "@/assets/plot-3.jpg";
import plot4 from "@/assets/plot-4.jpg";
import res1 from "@/assets/land-marvel-heights-building.jpg.asset.json";
import res2 from "@/assets/res-2.jpg";
import res3 from "@/assets/res-3.jpg";
import res4 from "@/assets/res-4.jpg";
import businessParkBuilding from "@/assets/business-park-building.jpeg.asset.json";
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
  { label: "Project", to: "/projects" as const, hash: undefined as string | undefined },
  { label: "Contact Us", to: "/contact" as const, hash: undefined as string | undefined },
];

function Header() {
  return <SiteHeader />;
}

function Footer() {
  return <SiteFooter />;
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
  comingSoon?: boolean;
  detailsLink?: string;
};

function PropertyCard({ p }: { p: Property }) {
  const isComingSoon = p.comingSoon;
  return (
    <article className={`group bg-card rounded-[20px] overflow-hidden shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-elegant)] hover:-translate-y-1 transition-all duration-300 border border-border flex flex-col ${isComingSoon ? "opacity-95" : ""}`}>
      <div className="relative overflow-hidden">
        <img src={p.img} alt={p.title} width={1024} height={768} loading="lazy" className={`w-full h-[280px] object-cover group-hover:scale-105 transition-transform duration-500 ${isComingSoon ? "grayscale" : ""}`} />
        <span className={`absolute top-5 left-0 ${isComingSoon ? "bg-muted text-muted-foreground" : "bg-[var(--gold)] text-primary"} text-xs font-semibold uppercase tracking-wide px-4 py-2 rounded-r-[20px] shadow-md`}>
          {isComingSoon ? "Coming Soon" : p.badge}
        </span>
        {isComingSoon && (
          <div className="absolute inset-0 grid place-items-center bg-primary/55 backdrop-blur-[2px]">
            <div className="text-center px-6">
              <div className="inline-block px-5 py-2 rounded-full bg-[var(--gold)] text-primary text-xs font-bold uppercase tracking-[0.2em]">
                Coming Soon
              </div>
              <p className="mt-3 text-white font-display text-2xl font-bold drop-shadow">Launching Soon</p>
            </div>
          </div>
        )}
      </div>
      <div className="p-6 flex flex-col flex-1">
        <h3 className="font-display text-2xl lg:text-[28px] font-bold text-primary leading-tight">{p.title}</h3>
        <div className="mt-2 text-2xl font-bold text-[var(--gold)]">{p.price}</div>
        <div className="mt-3 flex items-center gap-1.5 text-sm text-muted-foreground">
          <MapPin className="w-4 h-4 text-accent" /> {p.location}
        </div>
        {p.serving && (
          <p className="mt-3 text-xs text-muted-foreground leading-relaxed">
            {p.serving.startsWith("Sale Starts") ? (
              <b className="text-foreground">{p.serving}</b>
            ) : (
              <>
                <span className="font-semibold text-foreground">Serving Areas:</span> {p.serving}
              </>
            )}
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
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
          {isComingSoon ? (
            <>
              <Button disabled className="bg-muted text-muted-foreground h-12 rounded-xl text-sm cursor-not-allowed">
                Book Visit
              </Button>
              <Button disabled variant="outline" className="h-12 rounded-xl text-sm cursor-not-allowed">
                Details
              </Button>
            </>
          ) : (
            <>
              <Button asChild className="bg-[image:var(--gradient-primary)] hover:opacity-90 h-12 rounded-xl text-sm">
                <Link to="/contact">Book Visit</Link>
              </Button>
              <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground h-12 rounded-xl text-sm">
                <Link to={(p.detailsLink ?? "/contact") as "/green-valley" | "/heights" | "/business-park" | "/contact"}>Details</Link>
              </Button>
            </>
          )}
        </div>
      </div>
    </article>
  );
}


const plots: Property[] = [
  { badge: "New Launch", img: greenValleyAerial.url, title: "Land Marvel Green Valley", price: "\n", location: "kilambakkam, Chennai", serving: "Sale Starts In September 2026", area: "12 Acres", units: "240 Plots", type: "Plotted Layouts", detailsLink: "/green-valley" },
  { badge: "Premium", img: plot2, title: "Land Marvel Garden City", price: "\n", location: "Tambaram, Chennai", serving: "Tambaram, Chromepet, Pallavaram", area: "8 Acres", units: "180 Plots", type: "Plotted Layouts", comingSoon: true },
  { badge: "Limited Units", img: plot3, title: "Land Marvel Urban Greens", price: "\n", location: "Perungalathur", serving: "Perungalathur, Vandalur, Tambaram", area: "15 Acres", units: "300 Plots", type: "Plotted Layouts", comingSoon: true },
  { badge: "Lake View", img: plot4, title: "Land Marvel Lake View Plots", price: "\n", location: "Maraimalai Nagar", serving: "Maraimalai Nagar, Singaperumal Koil", area: "10 Acres", units: "220 Plots", type: "Premium Plots", comingSoon: true },
];

const residential: Property[] = [
  { badge: "Ready To Move", img: res1.url, title: "Land Marvel Heights", price: "\n", location: "Thiruvanmiyur,LB Road", serving: "Sale Starts in October 2026", area: "5 Acres", units: "350 Apts", type: "1,2, 3 & 4 BHK", detailsLink: "/heights" },
  { badge: "Premium", img: res2, title: "Land Marvel Signature", price: "\n", location: "LB Road", area: "4 Acres", units: "420 Units", type: "1,2, 3 & 4 BHK", comingSoon: true },
  { badge: "New Launch", img: res3, title: "Land Marvel Elite", price: "\n", location: "Besant Nagar", area: "6 Acres", units: "500 Units", type: "Luxury Apts", comingSoon: true },
  { badge: "Limited Units", img: res4, title: "Land Marvel Sky Villas", price: "\n", location: "Besant Nagar", area: "8 Acres", units: "250 Villas", type: "Villa Community", comingSoon: true },
];

const commercial: Property[] = [
  { badge: "Investment Hotspot", img: businessParkBuilding.url, title: "Land Marvel Business Park", price: "\n", location: "Indira Nagar", serving: "Sale Starts in November 2026", area: "7 Acres", units: "120 Units", type: "Office Spaces", detailsLink: "/business-park" },
  { badge: "Premium", img: com2, title: "Land Marvel Business Centre", price: "\n", location: "Urapakkam", area: "5 Acres", units: "150 Units", type: "Retail + Office", comingSoon: true },
  { badge: "New Launch", img: com3, title: "Land Marvel Corporate Hub", price: "\n", location: "LB Road 2", area: "6 Acres", units: "200 Units", type: "Business Suites", comingSoon: true },
  { badge: "Limited Units", img: com4, title: "Land Marvel Commercial Square", price: "\n", location: "Thiruvanmiyur,LB Road", area: "3 Acres", units: "100 Units", type: "Retail Shops", comingSoon: true },
];

function CategorySection({ id, eyebrow, title, items, alt = false }: { id: string; eyebrow: string; title: string; items: Property[]; alt?: boolean }) {
  return (
    <section id={id} className={`py-16 sm:py-20 ${alt ? "" : "bg-background"}`} style={alt ? { background: "var(--gradient-soft)" } : undefined}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
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

function HeroSection() {
  return (
    <section className="relative min-h-[460px] h-[88svh] sm:min-h-[600px] sm:h-[92svh] lg:min-h-[640px] w-full overflow-hidden">
      <video src={buyHeroVideoAsset.url} autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover" style={{ filter: 'brightness(1.2) contrast(1.15) saturate(1.1)' }} />
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-black/10" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
      <div className="relative z-10 h-full container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center text-primary-foreground">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full bg-white/15 backdrop-blur border border-white/20 text-[10px] sm:text-xs font-medium tracking-wide sm:tracking-[0.2em] uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--gold)]" /> Buy Premium Property
          </span>
          <h1 className="mt-4 sm:mt-6 font-display text-2xl sm:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.15] sm:leading-[1.05] drop-shadow-[0_4px_24px_rgba(0,0,0,0.6)] animate-in fade-in slide-in-from-bottom-4 duration-700">
            Together, we create financial peace, complete transparency &amp; quality in{" "}
            <span className="text-[var(--gold)]">property investments.</span>
          </h1>
          <div className="mt-6 sm:mt-10 flex flex-wrap gap-3 sm:gap-4">
            <Button asChild size="lg" className="bg-[var(--gold)] text-primary hover:bg-[var(--gold)]/90 h-11 sm:h-13 px-5 sm:px-7 text-sm sm:text-base rounded-xl shadow-[var(--shadow-elegant)]">
              <a href="#plots">Browse Properties <ArrowRight className="ml-2 w-4 h-4" /></a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white/40 bg-white/10 text-white hover:bg-white/20 hover:text-white h-11 sm:h-13 px-5 sm:px-7 text-sm sm:text-base rounded-xl backdrop-blur">
              <Link to="/contact"><Calendar className="mr-2 w-4 h-4" />Book Site Visit</Link>
            </Button>
          </div>
          <div className="mt-8 sm:mt-12 grid grid-cols-3 gap-4 sm:gap-6 max-w-md">
            {[["30+", "Years"], ["200+", "Projects"], ["6+", "Locations"]].map(([n, l]) => (
              <div key={l} className="border-l-2 border-[var(--gold)] pl-3 sm:pl-4">
                <div className="font-display text-2xl sm:text-3xl font-bold">{n}</div>
                <div className="text-[10px] sm:text-xs text-white/85 uppercase tracking-wider">{l}</div>
              </div>
            ))}
          </div>
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
        {/* Hero — Full-screen auto-scrolling carousel */}
        <HeroSection />

        {/* Ongoing Projects intro */}
        <section className="pt-16 sm:pt-20 section-navy">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
            <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-accent">Ongoing Projects</span>
            <h2 className="mt-3 font-display text-3xl sm:text-3xl sm:text-4xl md:text-5xl font-bold text-primary">Our Ongoing Projects</h2>
            <p className="mt-4 text-base sm:text-lg text-muted-foreground">
              Discover carefully selected investment opportunities across plots, residential homes, and commercial developments.
            </p>
          </div>
        </section>

        <CategorySection id="plots" eyebrow="" title="Premium Plots" items={plots} />
        <LandInvestmentSection />
        <CategorySection id="residential" eyebrow="🏢" title="Residential Projects" items={residential} alt />
        <ResidentialLivingSection />
        <CategorySection id="commercial" eyebrow="🏬" title="Commercial Projects" items={commercial} />
        <CommercialSolutionsSection />

        {/* Final CTA */}
        <section className="relative overflow-hidden">
          <img src={buyCta} alt="Luxury aerial township" width={1920} height={900} loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-primary/85" />
          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center text-primary-foreground max-w-3xl">
            <h2 className="font-display text-3xl sm:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">Can't Find The Right Property?</h2>
            <p className="mt-5 text-lg text-white/85">
              Our property advisors will help you find the perfect plot, apartment, villa, or commercial investment.
            </p>
            <div className="mt-10 flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg" className="bg-[var(--gold)] text-primary hover:bg-[var(--gold)]/90 h-auto min-h-13 py-3 px-5 sm:px-7 rounded-xl whitespace-normal text-center w-full sm:w-auto">
                <a href="tel:+910000000000"><Phone className="mr-2 w-4 h-4" />Talk To Expert</a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/40 bg-white/10 text-white hover:bg-white/20 hover:text-white h-auto min-h-13 py-3 px-5 sm:px-7 rounded-xl whitespace-normal text-center w-full sm:w-auto">
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
