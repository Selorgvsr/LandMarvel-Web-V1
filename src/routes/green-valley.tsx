import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  MapPin, Building2, Train, TrainFront, Trophy, TreePine, Sun, Footprints,
  Baby, Route as RouteIcon, CheckCircle2, Clock, Plane, ArrowRight, Phone,
  Zap, Droplets, Waves, Construction, Map as MapIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteHeader } from "@/components/landmarvel/SiteHeader";
import { SiteFooter } from "@/components/landmarvel/SiteFooter";

import plot1 from "@/assets/plot-1.jpg";
import plot2 from "@/assets/plot-2.jpg";
import plot3 from "@/assets/plot-3.jpg";
import amMultiSports from "@/assets/amenities/multi-sports.jpg.asset.json";
import amCricket from "@/assets/amenities/cricket-nets.jpeg.asset.json";
import amGarden from "@/assets/amenities/landscaped-garden.jpg.asset.json";
import amKids from "@/assets/amenities/kids-play.jpg.asset.json";
import amSolar from "@/assets/amenities/solar-roads.jpeg.asset.json";
import amWalkways from "@/assets/amenities/walkways.jpg.asset.json";

import greenValleyLayoutAsset from "@/assets/green-valley-layout.png.asset.json";
import plotVideoOg from "@/assets/plot-video-og.mp4.asset.json";

const greenValleyLayout = greenValleyLayoutAsset.url;

export const Route = createFileRoute("/green-valley")({
  head: () => ({
    meta: [
      { title: "Green Valley Township — Premium Villa Plots at Kilambakkam | Land Marvel" },
      { name: "description", content: "Premium villa plots at Kilambakkam/Urapakkam (GST Road), Chennai — opposite Asia's largest bus terminus. Plot sizes 560 – 3602 sq.ft." },
      { property: "og:title", content: "Green Valley Township | Land Marvel" },
      { property: "og:description", content: "Premium villa plots opposite Kilambakkam Bus Terminus." },
      { property: "og:image", content: plot1 },
    ],
    links: [{ rel: "canonical", href: "/green-valley" }],
  }),
  component: GreenValleyPage,
});

const distances = [
  { id: "bus", label: "Walkable Distance from Kilambakkam Bus Terminus", img: plot1, badge: "Kilambakkam Bus Terminus" },
  { id: "rail", label: "Walkable Distance from Urapakkam Railway Station", img: plot2, badge: "Urapakkam Railway Station" },
  { id: "metro", label: "Walkable Distance from the Upcoming Metro Station", img: plot3, badge: "Upcoming Metro Station" },
];

const amenities = [
  { icon: Trophy, label: "Multi-Sports Play Area", img: amMultiSports.url },
  { icon: Building2, label: "Cricket Nets", img: amCricket.url },
  { icon: TreePine, label: "Landscaped Garden", img: amGarden.url },
  { icon: Baby, label: "Kids Play Area", img: amKids.url },
  { icon: Sun, label: "Concrete Roads with Solar Lights", img: amSolar.url },
  { icon: Footprints, label: "Paved Walkways & Jogging Track", img: amWalkways.url },
];

const kilamLocAdv = [
  "Centrally Located With Excellent Connectivity",
  "Gateway to Southern Districts",
  "Rapid Infrastructure Development",
  "Commercial, IT, and Industrial Growth",
  "Recreational Amenities",
  "Affordable Real Estate Price at Present",
  "Future Real Estate Growth and Investment Potential",
];

const projectLocAdv = [
  { icon: Train, label: "2 Minutes from Urapakkam Railway Station" },
  { icon: TrainFront, label: "3 Minutes from Kilambakkam Bus Terminus & Upcoming Metro Rail Station" },
  { icon: MapPin, label: "2 Minutes from GST Road" },
  { icon: Clock, label: "10 Minutes from Tambaram" },
  { icon: Plane, label: "15 Minutes from Airport" },
];

const specs = [
  { icon: RouteIcon, label: "High-Strength Concrete Roads" },
  { icon: Sun, label: "Solar-Powered Street Lights" },
  { icon: Footprints, label: "Paved Walkways" },
  { icon: Waves, label: "Underground Stormwater Drains" },
  { icon: Zap, label: "Underground Pipelines for Electric Cables" },
  { icon: Droplets, label: "Underground Pipelines for Water Supply" },
  { icon: Baby, label: "Kids Play Area" },
  { icon: Trophy, label: "Multi-Sport Play Area" },
  { icon: Building2, label: "Cricket Nets" },
  { icon: Construction, label: "Jogging Track" },
  { icon: TreePine, label: "Landscaped Garden" },
];

function GreenValleyPage() {
  const [active, setActive] = useState("bus");
  const activeItem = distances.find((d) => d.id === active) ?? distances[0];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      {/* HERO BAND */}
      <section className="bg-[image:var(--gradient-primary)] text-primary-foreground py-14 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-4xl sm:text-5xl font-bold">Project</h1>
          <p className="mt-3 text-[var(--gold)] text-base sm:text-lg">
            Highway Land = 25% Faster Gains than your Flat. Data Proven.
          </p>
        </div>
      </section>

      {/* Plot Video */}
      <section className="w-full bg-background">
        <video
          src={plotVideoOg.url}
          controls
          playsInline
          preload="metadata"
          className="w-full h-auto block"
        />
      </section>

      {/* CONTENT WRAPPER */}
      <section className="bg-[image:var(--gradient-soft)] py-10 sm:py-14">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl space-y-8">
          {/* Distance tabs */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {distances.map((d) => {
              const isActive = d.id === active;
              return (
                <button
                  key={d.id}
                  onClick={() => setActive(d.id)}
                  className={`flex items-center gap-3 px-5 py-4 rounded-full text-left text-xs sm:text-sm font-semibold transition-all border ${
                    isActive
                      ? "bg-[var(--gold)] text-primary border-[var(--gold)] shadow-[var(--shadow-elegant)]"
                      : "bg-primary text-primary-foreground border-primary hover:bg-primary/90"
                  }`}
                >
                  <span className={`w-8 h-8 rounded-full grid place-items-center shrink-0 ${isActive ? "bg-primary text-[var(--gold)]" : "bg-white/15 text-[var(--gold)]"}`}>
                    <MapPin className="w-4 h-4" />
                  </span>
                  <span className="leading-snug">{d.label}</span>
                </button>
              );
            })}
          </div>

          {/* Hero image card */}
          <div className="bg-card rounded-3xl overflow-hidden shadow-[var(--shadow-elegant)] border border-border">
            <div className="relative">
              <img src={greenValleyLayout} alt="Green Valley Township master layout plan" className="w-full h-[320px] sm:h-[460px] object-cover" />
              <div className="absolute top-5 left-5 px-4 py-2 rounded-lg bg-black/40 backdrop-blur text-[var(--gold)] font-bold text-lg sm:text-2xl drop-shadow">
                {activeItem.badge}
              </div>
              <div className="absolute top-5 right-5 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500 text-white text-xs font-semibold">
                <span className="w-2 h-2 rounded-full bg-white animate-pulse" /> Active
              </div>
              <div className="absolute bottom-5 left-5 w-10 h-10 rounded-md bg-white/85 grid place-items-center text-primary shadow">
                <Building2 className="w-5 h-5" />
              </div>
            </div>
            <div className="px-6 py-5 bg-[var(--gold)]/10">
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-primary">Green Valley Township</h2>
              <p className="mt-1 text-primary/80 font-semibold">Plots Area Ranging From 560 Sq. Ft To 3602 Sq. Ft</p>
            </div>
          </div>

          {/* Premium Villa Plots banner */}
          <div className="relative overflow-hidden rounded-3xl bg-[image:var(--gradient-primary)] text-primary-foreground p-8 sm:p-12 text-center">
            <div aria-hidden className="absolute top-0 left-10 w-40 h-40 rounded-full bg-[var(--gold)]/30 blur-3xl" />
            <div aria-hidden className="absolute bottom-0 right-10 w-40 h-40 rounded-full bg-[var(--gold)]/20 blur-3xl" />
            <h3 className="font-display text-2xl sm:text-4xl font-bold leading-tight">
              Premium Villa Plots at<br />
              <span className="text-[var(--gold)]">Kilambakkam / Urapakkam</span><br />
              (GST Road), Chennai
            </h3>
            <div className="mt-6 inline-block px-6 py-3 rounded-full bg-white/15 backdrop-blur border border-white/30 font-semibold">
              Opposite to Asia's Largest Bus Terminus
            </div>
          </div>

          {/* Amenities */}
          <div className="bg-card rounded-3xl shadow-[var(--shadow-card)] border border-border p-6 sm:p-10">
            <div className="text-center">
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-primary">Amenities</h3>
              <div className="mt-2 mx-auto w-14 h-0.5 bg-[var(--gold)]" />
            </div>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {amenities.map((a) => (
                <div key={a.label} className="relative h-44 rounded-2xl overflow-hidden group">
                  <img src={a.img} alt={a.label} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 flex items-center gap-2 text-white">
                    <a.icon className="w-4 h-4 text-[var(--gold)] shrink-0" />
                    <span className="font-semibold text-sm">{a.label}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Location advantages */}
          <div className="bg-card rounded-3xl shadow-[var(--shadow-card)] border border-border p-6 sm:p-10">
            <div className="grid lg:grid-cols-2 gap-6">
              <div className="bg-[image:var(--gradient-soft)] rounded-2xl p-6 border border-border">
                <h4 className="font-display text-lg font-bold text-primary">Kilambakkam Location Advantages</h4>
                <ul className="mt-4 space-y-2.5">
                  {kilamLocAdv.map((k) => (
                    <li key={k} className="flex items-start gap-2 text-sm text-foreground">
                      <CheckCircle2 className="w-4 h-4 text-[var(--gold)] mt-0.5 shrink-0" />
                      {k}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-[image:var(--gradient-soft)] rounded-2xl p-6 border border-border">
                <h4 className="font-display text-lg font-bold text-primary">Our Project Location Advantages</h4>
                <ul className="mt-4 space-y-3">
                  {projectLocAdv.map((p) => (
                    <li key={p.label} className="flex items-start gap-3 text-sm text-foreground">
                      <span className="w-8 h-8 rounded-md bg-primary/10 text-primary grid place-items-center shrink-0">
                        <p.icon className="w-4 h-4" />
                      </span>
                      <span className="pt-1">{p.label}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Specifications */}
            <div className="mt-8 rounded-2xl bg-[var(--gold)]/10 border border-[var(--gold)]/30 p-6 sm:p-8">
              <h4 className="text-center font-display text-xl font-bold text-primary">Specifications</h4>
              <div className="mt-2 mx-auto w-12 h-0.5 bg-[var(--gold)]" />
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {specs.map((s) => (
                  <div key={s.label} className="flex items-center gap-2.5 bg-card border border-border rounded-xl px-4 py-3 text-sm text-foreground">
                    <s.icon className="w-4 h-4 text-[var(--gold)] shrink-0" />
                    {s.label}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Location Map */}
          <div className="bg-card rounded-3xl shadow-[var(--shadow-card)] border border-border p-6 sm:p-10">
            <div className="text-center">
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-primary">Location Map</h3>
              <div className="mt-2 mx-auto w-14 h-0.5 bg-[var(--gold)]" />
            </div>
            <div className="mt-8 rounded-2xl overflow-hidden border border-border shadow-md">
              <iframe
                title="Green Valley Township location map"
                src="https://www.google.com/maps?q=Kilambakkam,+Chennai&output=embed"
                className="w-full h-[240px] sm:h-[340px] lg:h-[420px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="mt-5 flex flex-wrap justify-center gap-4 text-xs text-muted-foreground">
              <span className="inline-flex items-center gap-2"><span className="w-2.5 h-2.5 rounded-full bg-slate-600" /> GST Road</span>
              <span className="inline-flex items-center gap-2"><span className="w-2.5 h-2.5 rounded-full bg-blue-500" /> Urapakkam Railway Station</span>
              <span className="inline-flex items-center gap-2"><span className="w-2.5 h-2.5 rounded-full bg-emerald-500" /> Kilambakkam Bus Terminus</span>
              <span className="inline-flex items-center gap-2"><span className="w-2.5 h-2.5 rounded-full bg-[var(--gold)]" /> Our Project Site</span>
            </div>
            <div className="mt-7 text-center">
              <Button asChild size="lg" className="bg-[var(--gold)] text-primary hover:bg-[var(--gold)]/90 h-12 px-8 rounded-full font-semibold">
                <Link to="/contact"><Phone className="w-4 h-4 mr-2" />Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[image:var(--gradient-cta)] text-primary-foreground py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-2xl">
          <h3 className="font-display text-3xl sm:text-4xl font-bold">Book Your Site Visit Today</h3>
          <p className="mt-3 text-primary-foreground/85">
            Visit Green Valley Township and experience the location firsthand. Our team will guide you through every detail.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Button asChild size="lg" className="bg-[var(--gold)] text-primary hover:bg-[var(--gold)]/90 h-12 px-7 rounded-xl">
              <Link to="/contact">Book Site Visit <ArrowRight className="w-4 h-4 ml-2" /></Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white/40 bg-white/10 text-white hover:bg-white/20 hover:text-white h-12 px-7 rounded-xl">
              <Link to="/buy">Back to Properties</Link>
            </Button>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
