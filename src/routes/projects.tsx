import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  Menu, MapPin, ArrowRight, Check, Calendar, Eye, Ruler, Home, Building2,
  Phone, Mail, Facebook, Instagram, Twitter, Linkedin, TrendingUp, Shield,
  Award, Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { SiteFooter } from "@/components/landmarvel/SiteFooter";
import { SiteHeader } from "@/components/landmarvel/SiteHeader";

import aboutImg from "@/assets/about-building.jpg";
import projectHeroVideo from "@/assets/project-hero-video.mp4.asset.json";
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
      { property: "og:image", content: aboutImg },
    ],
    links: [{ rel: "canonical", href: "/projects" }],
  }),
  component: ProjectsPage,
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
  { image: plot1, badge: "New Launch", name: "Land Marvel Green Valley", price: "\n", location: "kilambakkam, Chennai", area: "12 Acres", units: "240 Plots", possession: "Ready To Register", type: "Plotted Layouts" },
  { image: plot2, badge: "Hot Selling", name: "Land Marvel Garden City", price: "₹20L – ₹60L", location: "Tambaram", area: "8 Acres", units: "180 Plots", possession: "Ready To Register", type: "Plotted Layouts" },
  { image: plot3, badge: "Limited Units", name: "Land Marvel Urban Greens", price: "\n", location: "Perungalathur", area: "15 Acres", units: "300 Plots", possession: "Under Approval", type: "Plotted Layouts" },
  { image: plot4, badge: "Premium Plots", name: "Land Marvel Lake View", price: "₹30L – ₹85L", location: "Maraimalai Nagar", area: "10 Acres", units: "220 Plots", possession: "Ready To Register", type: "Lake-Front Plots" },
];

const residentialProjects: Project[] = [
  { image: res1, badge: "Ready To Move", name: "Land Marvel Heights", price: "\n", location: "Saidapet", area: "5 Acres", units: "350 Units", possession: "Ready To Move", type: "2, 3 & 4 BHK" },
  { image: res2, badge: "New Launch", name: "Land Marvel Signature", price: "\n", location: "LB Road", area: "6 Acres", units: "420 Units", possession: "Dec 2026", type: "2 & 3 BHK" },
  { image: res3, badge: "Premium", name: "Land Marvel Elite", price: "\n", location: "Perumbakkam", area: "7 Acres", units: "500 Units", possession: "Mar 2027", type: "Luxury Apartments" },
  { image: res4, badge: "Investment Hotspot", name: "Land Marvel Sky Villas", price: "\n", location: "LB Road 1", area: "9 Acres", units: "250 Units", possession: "Jun 2027", type: "Villa Community" },
];

const commercialProjects: Project[] = [
  { image: com1, badge: "New Launch", name: "Land Marvel Business Park", price: "\n", location: "Indira Nagar", area: "7 Acres", units: "120 Units", possession: "Dec 2026", type: "Office Spaces" },
  { image: com2, badge: "Hot Selling", name: "Land Marvel Trade Centre", price: "\n", location: "LB Road 1", area: "8 Acres", units: "150 Units", possession: "Mar 2027", type: "Retail + Office" },
  { image: com3, badge: "Premium", name: "Land Marvel Corporate Hub", price: "\n", location: "LB Road 2", area: "10 Acres", units: "200 Units", possession: "Jun 2027", type: "Business Suites" },
  { image: com4, badge: "Limited Units", name: "Land Marvel Commercial Square", price: "\n", location: "Saidapet", area: "4 Acres", units: "100 Units", possession: "Sep 2026", type: "Retail Shops" },
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
          {title}
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
      <section className="relative h-screen min-h-[640px] w-full overflow-hidden">
        <video src={projectHeroVideo.url} autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover scale-105" style={{ filter: 'brightness(1.2) contrast(1.15) saturate(1.1)' }} />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
        <div className="relative z-10 h-full container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center text-primary-foreground">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 backdrop-blur border border-white/20 text-xs font-medium tracking-[0.2em] uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--gold)]" /> Land Marvel Developments
            </span>
            <h1 className="mt-6 font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] drop-shadow-[0_4px_24px_rgba(0,0,0,0.6)]">
              Our <span className="text-[var(--gold)]">Projects</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-white/90 max-w-2xl drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">
              Discover Land Marvel's ongoing developments across premium plots, residential communities, and commercial spaces in Chennai's fastest-growing locations.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button size="lg" className="bg-[var(--gold)] text-primary hover:bg-[var(--gold)]/90 h-13 px-7 rounded-xl shadow-[var(--shadow-elegant)]">
                Explore Projects <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-white/40 bg-white/10 text-white hover:bg-white/20 hover:text-white h-13 px-7 rounded-xl backdrop-blur">
                Book Site Visit
              </Button>
            </div>
            <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-3xl">
              {[
                ["30+", "Years"], ["200+", "Projects"], ["30+", "Ongoing"], ["2000+", "Happy Customers"],
              ].map(([n, l]) => (
                <div key={l} className="border-l-2 border-[var(--gold)] pl-4">
                  <div className="font-display text-3xl font-bold">{n}</div>
                  <div className="text-xs text-white/85 uppercase tracking-wider">{l}</div>
                </div>
              ))}
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
              { icon: Award, value: "30+", label: "Years of Experience" },
              { icon: TrendingUp, value: "200+", label: "Completed Projects" },
              { icon: Building2, value: "30+", label: "Ongoing Projects" },
              { icon: Users, value: "2000+", label: "Happy Customers" },
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
      <SiteFooter />
    </div>
  );
}
