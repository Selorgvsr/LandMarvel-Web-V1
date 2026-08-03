import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  MapPin, Building2, Car, Shield, Camera, TreePine,
  ArrowUp, Wifi, UtensilsCrossed, ShoppingBag, Accessibility, Droplets,
  Flame, Package, Train, Plane, Briefcase, Hotel, Heart, GraduationCap,
  ShoppingCart, CheckCircle2, ArrowRight, Phone, Calendar,
  ChevronDown, Dumbbell, Activity, Baby, Trophy,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteHeader } from "@/components/landmarvel/SiteHeader";
import { SiteFooter } from "@/components/landmarvel/SiteFooter";
import bp1 from "@/assets/business-park/bp-1.jpeg.asset.json";
import bp2 from "@/assets/business-park/bp-2.jpeg.asset.json";
import bp3 from "@/assets/business-park/bp-3.jpeg.asset.json";
import bp4 from "@/assets/business-park/bp-4.jpeg.asset.json";
import com2 from "@/assets/com-2.jpg";
import buyCta from "@/assets/buy-cta.jpg";

export const Route = createFileRoute("/business-park")({
  head: () => ({
    meta: [
      { title: "Land Marvel Business Park — Premium Commercial Development | Land Marvel" },
      { name: "description", content: "Premium commercial project at Indira Nagar — office spaces, retail and business suites with world-class infrastructure." },
      { property: "og:title", content: "Land Marvel Business Park | Land Marvel" },
      { property: "og:description", content: "Premium commercial spaces at Indira Nagar, Chennai." },
      { property: "og:image", content: bp1.url },
    ],
    links: [{ rel: "canonical", href: "/business-park" }],
  }),
  component: BusinessParkPage,
});

const gallery = [bp1.url, bp2.url, bp3.url, bp4.url];

const highlights = [
  "Prime Commercial Location",
  "Contemporary Architecture",
  "Premium Office Spaces",
  "Retail & Showroom Opportunities",
  "High Visibility Road Frontage",
  "Excellent Accessibility",
  "Modern Infrastructure",
  "Future Appreciation Potential",
  "Investor Friendly Development",
];

const amenities = [
  { icon: Activity, label: "Jogging & Walking Track" },
  { icon: Car, label: "Multi-Level Parking" },
  { icon: Shield, label: "24×7 Security" },
  { icon: Camera, label: "CCTV Surveillance" },
  { icon: TreePine, label: "Landscaped Open Spaces" },
  { icon: TreePine, label: "Landscaped Gardens" },
  { icon: Dumbbell, label: "Fully Equipped Gym" },
  { icon: ArrowUp, label: "High-Speed Elevators" },
  { icon: Wifi, label: "High-Speed Internet Ready" },
  { icon: UtensilsCrossed, label: "Food Court & Cafeteria" },
  { icon: Baby, label: "Children's Play Area" },
  { icon: Accessibility, label: "Universal Accessibility" },
  { icon: Droplets, label: "Rainwater Harvesting" },
  { icon: Flame, label: "Fire Safety Systems" },
  { icon: Trophy, label: "Outdoor Sports Court" },
];

const specsLeft = [
  { title: "Structure", body: "High-quality RCC framed structure designed for durability and safety." },
  { title: "Flooring", body: "Premium vitrified flooring for office spaces and common areas." },
  { title: "Wall Finish", body: "Premium interior emulsion paint with weather-resistant exterior finishes." },
  { title: "Doors & Windows", body: "High-quality aluminum glazing and engineered doors." },
  { title: "Ceiling", body: "Modern false ceiling with energy-efficient lighting." },
  { title: "Washrooms", body: "Premium sanitary fittings and designer fixtures." },
];
const specsRight = [
  { title: "Electrical", body: "Concealed premium wiring with sufficient power points." },
  { title: "HVAC", body: "Provision for centralized air conditioning." },
  { title: "Safety", body: "Fire alarm systems, emergency exits, smoke detectors, and sprinklers." },
  { title: "Common Features", body: "Modern lift systems, visitor management, access control, building management system." },
  { title: "Sustainability", body: "Energy-efficient lighting, rainwater harvesting, water recycling, green building concepts." },
];

const connectivity = [
  { icon: Car, label: "Major Highway", time: "5 Minutes" },
  { icon: Briefcase, label: "IT Parks", time: "10 Minutes" },
  { icon: Train, label: "Metro Station", time: "8 Minutes" },
  { icon: Plane, label: "Airport", time: "25 Minutes" },
  { icon: Building2, label: "Business District", time: "10 Minutes" },
  { icon: Hotel, label: "Hotels", time: "Nearby" },
  { icon: Heart, label: "Hospitals", time: "Nearby" },
  { icon: GraduationCap, label: "Educational Institutions", time: "Nearby" },
  { icon: ShoppingCart, label: "Shopping Centers", time: "Nearby" },
  { icon: UtensilsCrossed, label: "Restaurants", time: "Nearby" },
];

const tabs = [
  { id: "highlights", label: "Project Highlights" },
  { id: "amenities", label: "Amenities" },
  { id: "specifications", label: "Specifications" },
  { id: "location", label: "Location Advantages" },
] as const;

type TabId = typeof tabs[number]["id"];

function BusinessParkPage() {
  const [tab, setTab] = useState<TabId>("highlights");
  const [activeImg, setActiveImg] = useState(0);
  const [openSpec, setOpenSpec] = useState<string | null>("Structure");

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main>
        {/* Hero */}
        <section className="relative pt-16 pb-12 bg-[image:var(--gradient-primary)] text-primary-foreground overflow-hidden">
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 20% 20%, white 1px, transparent 1px), radial-gradient(circle at 80% 60%, white 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 backdrop-blur border border-white/20 text-xs font-semibold tracking-[0.2em] uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--gold)]" /> Premium Commercial Development
            </span>
            <h1 className="mt-5 font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Land Marvel <span className="text-[var(--gold)]">Business Park</span>
            </h1>
            <p className="mt-3 text-lg text-white/85 flex items-center justify-center gap-2">
              <MapPin className="w-5 h-5 text-[var(--gold)]" /> Indira Nagar, Chennai
            </p>
          </div>
        </section>

        {/* Sticky tab nav */}
        <div className="sticky top-[88px] lg:top-[104px] z-30 bg-background/95 backdrop-blur border-b border-border shadow-sm">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex overflow-x-auto gap-2 py-3 no-scrollbar">
              {tabs.map((t) => (
                <button
                  key={t.id}
                  onClick={() => setTab(t.id)}
                  className={`whitespace-nowrap px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${
                    tab === t.id
                      ? "bg-primary text-primary-foreground shadow-[var(--shadow-elegant)]"
                      : "bg-muted text-primary hover:bg-primary/10"
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* TAB 1: Highlights */}
        {tab === "highlights" && (
          <section className="py-16 sm:py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center mb-12">
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-accent">Project Overview</span>
              <h2 className="mt-2 font-display text-3xl sm:text-4xl font-bold text-primary">Land Marvel Commercial Project Overview</h2>
            </div>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-start">
              <div>
                <div className="relative rounded-3xl overflow-hidden shadow-[var(--shadow-elegant)] group">
                  <img src={gallery[activeImg]} alt="Land Marvel Business Park" className="w-full h-[460px] object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="mt-4 grid grid-cols-4 gap-2">
                  {gallery.map((g, i) => (
                    <button key={i} onClick={() => setActiveImg(i)} className={`rounded-xl overflow-hidden border-2 transition-all ${activeImg === i ? "border-[var(--gold)]" : "border-transparent opacity-70 hover:opacity-100"}`}>
                      <img src={g} alt="" className="w-full h-16 object-cover" />
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <span className="text-xs font-semibold tracking-[0.2em] uppercase text-accent">Premium Commercial Development</span>
                <h3 className="mt-2 font-display text-3xl sm:text-4xl font-bold text-primary">Designed For Business Success</h3>
                <p className="mt-5 text-base text-muted-foreground leading-relaxed">
                  At Land Marvel develop premium commercial spaces that combine modern architecture, strategic locations, and future-ready infrastructure to create productive business environments.
                </p>
                <p className="mt-3 text-base text-muted-foreground leading-relaxed">
                  Every commercial development is thoughtfully planned to support offices, retail spaces, showrooms, and mixed-use business destinations while delivering excellent investment potential and long-term value.
                </p>
                <div className="mt-7 grid sm:grid-cols-2 gap-3">
                  {highlights.map((h) => (
                    <div key={h} className="flex items-start gap-2.5 p-3 rounded-xl bg-muted/40 border border-border">
                      <CheckCircle2 className="w-5 h-5 text-[var(--gold)] flex-shrink-0 mt-0.5" />
                      <span className="text-sm font-medium text-primary">{h}</span>
                    </div>
                  ))}
                </div>
                <Button asChild className="mt-8 bg-[image:var(--gradient-primary)] h-12 px-7 rounded-xl">
                  <Link to="/contact">View Project Gallery <ArrowRight className="ml-2 w-4 h-4" /></Link>
                </Button>
              </div>
            </div>
          </section>
        )}

        {/* TAB 2: Amenities */}
        {tab === "amenities" && (
          <section className="py-16 sm:py-20" style={{ background: "var(--gradient-soft)" }}>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-start">
              <div className="relative rounded-3xl overflow-hidden shadow-[var(--shadow-elegant)] lg:sticky lg:top-44">
                <img src={com2} alt="Business amenities" className="w-full h-[520px] object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-primary-foreground">
                  <div className="text-xs font-semibold tracking-[0.2em] uppercase text-[var(--gold)]">World-Class Facilities</div>
                  <div className="mt-1 font-display text-2xl font-bold">Built for Productivity</div>
                </div>
              </div>
              <div>
                <h2 className="font-display text-3xl sm:text-4xl font-bold text-primary">Business Amenities & Modern Facilities</h2>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Every Land Marvel commercial project is equipped with thoughtfully planned amenities that enhance convenience, productivity, safety, and customer experience.
                </p>
                <div className="mt-7 grid sm:grid-cols-2 gap-3">
                  {amenities.map(({ icon: Icon, label }) => (
                    <div key={label} className="flex items-center gap-3 p-3.5 rounded-xl bg-card border border-border hover:shadow-[var(--shadow-card)] hover:-translate-y-0.5 transition-all">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 grid place-items-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <span className="text-sm font-medium text-primary">{label}</span>
                    </div>
                  ))}
                </div>
                <Button asChild className="mt-8 bg-[image:var(--gradient-primary)] h-12 px-7 rounded-xl">
                  <Link to="/contact">Explore All Amenities <ArrowRight className="ml-2 w-4 h-4" /></Link>
                </Button>
              </div>
            </div>
          </section>
        )}

        {/* TAB 3: Specifications */}
        {tab === "specifications" && (
          <section className="py-16 sm:py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-2xl mx-auto text-center mb-12">
                <h2 className="font-display text-3xl sm:text-4xl font-bold text-primary">Premium Specifications</h2>
                <p className="mt-3 text-muted-foreground">Built with the finest materials and engineered for lasting quality.</p>
              </div>
              <div className="grid lg:grid-cols-2 gap-6">
                {[specsLeft, specsRight].map((col, i) => (
                  <div key={i} className="space-y-3">
                    {col.map((s) => {
                      const open = openSpec === s.title;
                      return (
                        <button
                          key={s.title}
                          onClick={() => setOpenSpec(open ? null : s.title)}
                          className="w-full text-left p-5 rounded-2xl bg-card border border-border hover:border-primary/40 shadow-[var(--shadow-card)] transition-all"
                        >
                          <div className="flex items-center justify-between gap-4">
                            <div className="flex items-center gap-3">
                              <div className="w-9 h-9 rounded-lg bg-[var(--gold)]/15 grid place-items-center">
                                <CheckCircle2 className="w-5 h-5 text-[var(--gold)]" />
                              </div>
                              <span className="font-display text-lg font-bold text-primary">{s.title}</span>
                            </div>
                            <ChevronDown className={`w-5 h-5 text-primary transition-transform ${open ? "rotate-180" : ""}`} />
                          </div>
                          {open && <p className="mt-3 text-sm text-muted-foreground leading-relaxed pl-12">{s.body}</p>}
                        </button>
                      );
                    })}
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* TAB 4: Location */}
        {tab === "location" && (
          <section className="py-16 sm:py-20" style={{ background: "var(--gradient-soft)" }}>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-start">
              <div className="rounded-3xl overflow-hidden shadow-[var(--shadow-elegant)] border border-border bg-card lg:sticky lg:top-44">
                <iframe
                  title="Land Marvel Business Park — Location"
                  src="https://www.google.com/maps?q=Indira+Nagar+Chennai&output=embed"
                  className="w-full h-[520px] border-0"
                  loading="lazy"
                />
              </div>
              <div>
                <h2 className="font-display text-3xl sm:text-4xl font-bold text-primary">Strategically Connected Business Destination</h2>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Land Marvel commercial developments are strategically located near major transportation corridors, business districts, and essential urban infrastructure — ensuring excellent connectivity and long-term investment value.
                </p>
                <div className="mt-7 grid sm:grid-cols-2 gap-3">
                  {connectivity.map(({ icon: Icon, label, time }) => (
                    <div key={label} className="flex items-center justify-between gap-3 p-4 rounded-xl bg-card border border-border">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 grid place-items-center">
                          <Icon className="w-5 h-5 text-primary" />
                        </div>
                        <span className="text-sm font-semibold text-primary">{label}</span>
                      </div>
                      <span className="text-xs font-bold text-[var(--gold)] uppercase tracking-wider">{time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* About the project */}
        <section className="py-16 sm:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-accent">About This Project</span>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl font-bold text-primary">Building Spaces That Drive Business Growth</h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              Land Marvel creates commercial environments that combine innovative design, quality construction, and strategic planning to support business success and long-term investment growth.
            </p>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              Every project reflects our commitment to superior craftsmanship, sustainable development, and customer-focused solutions.
            </p>
            <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6">
              {[["30+", "Years of Excellence"], ["200+", "Completed Project"], ["30+", "Ongoing Developments"], ["100%", "Quality Commitment"]].map(([n, l]) => (
                <div key={l} className="p-6 rounded-2xl bg-card border border-border shadow-[var(--shadow-card)]">
                  <div className="font-display text-3xl sm:text-4xl font-bold text-[var(--gold)]">{n}</div>
                  <div className="mt-1 text-xs sm:text-sm text-primary font-semibold uppercase tracking-wider">{l}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative overflow-hidden">
          <img src={buyCta} alt="" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-primary/85" />
          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center text-primary-foreground max-w-3xl">
            <h2 className="font-display text-3xl sm:text-5xl font-bold">Start Your Commercial Investment Journey</h2>
            <p className="mt-4 text-lg text-white/85">
              Explore premium commercial opportunities designed for business success, sustainable growth, and long-term value with Land Marvel.
            </p>
            <div className="mt-8 flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg" className="bg-[var(--gold)] text-primary hover:bg-[var(--gold)]/90 h-13 px-7 rounded-xl">
                <Link to="/contact"><Calendar className="mr-2 w-4 h-4" /> Schedule a Site Visit</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/40 bg-white/10 text-white hover:bg-white/20 hover:text-white h-13 px-7 rounded-xl">
                <a href="tel:+918667769670"><Phone className="mr-2 w-4 h-4" /> Talk To Expert</a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
