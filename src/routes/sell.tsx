import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  Menu, MapPin, ArrowRight, Phone, Mail, Upload, Facebook, Instagram,
  Twitter, Linkedin, ShieldCheck, Users, TrendingUp, Handshake, FileText,
  Home, Building, Trees, Briefcase, ClipboardList, Search,
  IndianRupee, CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "@/components/ui/select";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { toast } from "sonner";
import { SiteFooter } from "@/components/landmarvel/SiteFooter";
import { SiteHeader } from "@/components/landmarvel/SiteHeader";
import { LogoText } from "@/components/landmarvel/LogoText";

import sellHero from "@/assets/sell-hero.jpg";
import sellCta from "@/assets/sell-cta.jpg";
import sellHeroVideo from "@/assets/sell-hero-video.mp4.asset.json";
import catVilla from "@/assets/cat-villa.jpg";
import catApartment from "@/assets/cat-apartment.jpg";
import catPlot from "@/assets/cat-plot.jpg";
import catCommercial from "@/assets/cat-commercial.jpg";


export const Route = createFileRoute("/sell")({
  head: () => ({
    meta: [
      { title: "Sell Your Property in Chennai | Land Marvel" },
      { name: "description", content: "List your plot, apartment, villa or commercial property with Land Marvel. Connect with genuine buyers and maximize your property's value." },
      { property: "og:title", content: "Sell Your Property | Land Marvel" },
      { property: "og:description", content: "Submit your property details and our team will help you sell faster, at the best price." },
      { property: "og:image", content: sellHero },
    ],
    links: [{ rel: "canonical", href: "/sell" }],
  }),
  component: SellPage,
});

const navLinks = [
  { label: "Buy", to: "/buy" as const },
  { label: "Sell", to: "/sell" as const },
  { label: "Project", to: "/projects" as const, hash: undefined },
  { label: "Contact Us", to: "/contact" as const, hash: undefined },
];

function Header() {
  return <SiteHeader />;
}

function Footer() {
  return <SiteFooter />;
}

function SectionHeading({ eyebrow, title, desc }: { eyebrow: string; title: string; desc?: string }) {
  return (
    <div className="max-w-2xl mx-auto text-center">
      <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-accent"><LogoText height={0.85}>{eyebrow}</LogoText></span>
      <h2 className="mt-3 font-display text-4xl sm:text-5xl font-bold text-primary"><LogoText height={1.2}>{title}</LogoText></h2>
      {desc && <p className="mt-4 text-base sm:text-lg text-muted-foreground"><LogoText height={1}>{desc}</LogoText></p>}
    </div>
  );
}

function SellForm() {
  const [fileName, setFileName] = useState<string>("");

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.success("Property submitted!", {
      description: "Our team will reach out to you within 24 hours.",
    });
    (e.currentTarget as HTMLFormElement).reset();
    setFileName("");
  };

  return (
    <section id="form" className="py-16 sm:py-24 section-navy">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Sell With Us"
          title="Submit Your Property Details"
          desc="Fill out the form below and our team will contact you to assist with selling your property."
        />
        <form
          onSubmit={onSubmit}
          className="mt-12 max-w-[1100px] mx-auto bg-card rounded-[20px] shadow-[var(--shadow-elegant)] border border-border p-6 sm:p-10 lg:p-12"
        >
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-primary font-semibold">Full Name</Label>
              <Input id="name" required placeholder="Enter Your Full Name" className="h-12 rounded-xl" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="type" className="text-primary font-semibold">Property Type</Label>
              <Select required>
                <SelectTrigger id="type" className="h-12 rounded-xl">
                  <SelectValue placeholder="Select Property Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="land">Land</SelectItem>
                  <SelectItem value="residential">Residential</SelectItem>
                  <SelectItem value="commercial">Commercial</SelectItem>
                  <SelectItem value="others">Others</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-primary font-semibold">Email Address</Label>
              <Input id="email" type="email" required placeholder="Enter Your Email Address" className="h-12 rounded-xl" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone" className="text-primary font-semibold">Phone Number</Label>
              <Input id="phone" type="tel" required placeholder="Enter Your Phone Number" className="h-12 rounded-xl" />
            </div>
            <div className="space-y-2 sm:col-span-2">
              <Label htmlFor="files" className="text-primary font-semibold">Upload Property Images / Documents</Label>
              <label
                htmlFor="files"
                className="flex flex-col items-center justify-center gap-2 cursor-pointer rounded-xl border-2 border-dashed border-border bg-secondary/40 hover:border-accent hover:bg-secondary/70 transition-colors px-6 py-8 text-center"
              >
                <div className="w-12 h-12 grid place-items-center rounded-full bg-[image:var(--gradient-primary)] text-primary-foreground">
                  <Upload className="w-5 h-5" />
                </div>
                <div className="font-medium text-foreground">
                  {fileName || "Click to upload or drag & drop"}
                </div>
                <div className="text-xs text-muted-foreground">JPG, PNG, PDF, DOC, DOCX — up to 10MB each</div>
                <input
                  id="files"
                  name="files"
                  type="file"
                  multiple
                  accept=".jpg,.jpeg,.png,.pdf,.doc,.docx"
                  className="hidden"
                  onChange={(e) => {
                    const files = e.target.files;
                    if (files && files.length) {
                      setFileName(files.length === 1 ? files[0].name : `${files.length} files selected`);
                    }
                  }}
                />
              </label>
              <p className="text-xs text-muted-foreground">Upload photos, layouts, approvals, or supporting property documents.</p>
            </div>
            <div className="space-y-2 sm:col-span-2">
              <Label htmlFor="desc" className="text-primary font-semibold">Property Description</Label>
              <Textarea
                id="desc"
                required
                placeholder="Describe your property including location, area, amenities, expected price, and any additional information."
                className="rounded-xl resize-none"
                style={{ height: 180 }}
              />
            </div>
          </div>
          <div className="mt-10 flex justify-center">
            <Button
              type="submit"
              className="bg-[image:var(--gradient-primary)] hover:opacity-90 text-primary-foreground h-14 px-10 rounded-xl text-base font-semibold shadow-[var(--shadow-elegant)]"
            >
              Submit Property Details <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}


function Process() {
  const steps = [
    { icon: ClipboardList, title: "Submit Details", desc: "Share your property information through our simple online form." },
    { icon: Search, title: "Property Evaluation", desc: "Our experts visit and evaluate your property for accurate pricing." },
    { icon: Users, title: "Direct Property Purchase", desc: "We review your property, finalize a fair offer, and purchase it directly from you—without involving third-party buyers." },
    { icon: IndianRupee, title: "Close The Deal", desc: "Smooth documentation, registration and payment — handled end-to-end." },
  ];
  return (
    <section className="py-20 sm:py-24 section-gold">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Our Process" title="Our Simple Selling Process" desc="From submission to sale — a transparent, hassle-free four-step journey." />
        <div className="mt-16 relative">
          <div className="hidden lg:block absolute top-10 left-[12%] right-[12%] h-0.5 bg-border" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((s, i) => (
              <div key={s.title} className="relative bg-card rounded-2xl p-7 border border-border text-center shadow-[var(--shadow-card)]">
                <div className="mx-auto relative z-10 w-20 h-20 grid place-items-center rounded-full bg-[image:var(--gradient-primary)] text-primary-foreground shadow-[var(--shadow-elegant)]">
                  <s.icon className="w-8 h-8" />
                </div>
                <div className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider uppercase text-accent">
                  Step {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="mt-2 font-display text-xl font-bold text-primary">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function PropertyTypes() {
  const items = [
    { img: catPlot, icon: Trees, title: "Lands", desc: "We buy land ranging from one ground to several acres." },
    { img: catApartment, icon: Building, title: "Apartments\u00a0", desc: "We buy new and resale\n1, 2, 3, and 4 BHK apartments." },
    { img: catVilla, icon: Home, title: "Villas & Independent Houses", desc: "We buy old and new villas, row houses, and independent homes." },
    { img: catCommercial, icon: Briefcase, title: "Commercial Properties", desc: "Old & New Offices, Retail Spaces & Commercial Buildings" },
  ];
  return (
    <section className="py-20 sm:py-24 section-navy">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Categories" title="Property Types We Accept" desc="We help you sell every type of property — Residential- Commercial-            Plots & more." />
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map(({ img, icon: Icon, title, desc }) => (
            <div key={title} className="group relative rounded-2xl overflow-hidden shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-elegant)] transition-all">
              <img src={img} alt={title} width={1024} height={768} loading="lazy" className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/45 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 text-primary-foreground">
                <Icon className="w-7 h-7 text-[var(--gold)]" />
                <h3 className="mt-2 font-display text-xl lg:text-2xl font-bold leading-tight">{title}</h3>
                <p className="mt-1 text-sm text-white/85 whitespace-pre-line">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


function SellPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        {/* Hero — Full-screen video */}
        <section className="relative min-h-[560px] h-[100svh] sm:min-h-[640px] w-full overflow-hidden">
          <video src={sellHeroVideo.url} autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover scale-105" style={{ filter: 'brightness(1.2) contrast(1.15) saturate(1.1)' }} />
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-black/10" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
          <div className="relative z-10 h-full container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center text-primary-foreground">
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-2 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full bg-white/15 backdrop-blur border border-white/20 text-[10px] sm:text-xs font-medium tracking-wide sm:tracking-[0.2em] uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--gold)]" /> Sell Property
              </span>
              <h1 className="mt-4 sm:mt-6 font-display text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.15] sm:leading-[1.05] drop-shadow-[0_4px_24px_rgba(0,0,0,0.6)] animate-in fade-in slide-in-from-bottom-4 duration-700">
                Sell Your Property With <span className="text-[var(--gold)]">Confidence</span>
              </h1>
              <p className="mt-4 sm:mt-6 text-sm sm:text-lg md:text-xl text-white/90 max-w-2xl leading-relaxed drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]"><LogoText height=1.0>
                Own a land, building, apartment, villa, or commercial property? Land Marvel offers a simple and transparent way to sell your property directly to us.
              </LogoText></p>
              <div className="mt-6 sm:mt-10 flex flex-wrap gap-3 sm:gap-4">
                <Button asChild size="lg" className="bg-[var(--gold)] text-primary hover:bg-[var(--gold)]/90 h-11 sm:h-13 px-5 sm:px-7 text-sm sm:text-base rounded-xl shadow-[var(--shadow-elegant)]">
                  <a href="#form">Sell Property Now <ArrowRight className="ml-2 w-4 h-4" /></a>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white/40 bg-white/10 text-white hover:bg-white/20 hover:text-white h-11 sm:h-13 px-5 sm:px-7 text-sm sm:text-base rounded-xl backdrop-blur">
                  <a href="tel:+918667769670"><Phone className="mr-2 w-4 h-4" />Talk To Expert</a>
                </Button>
              </div>
              <div className="mt-8 sm:mt-12 grid grid-cols-3 gap-4 sm:gap-6 max-w-md">
                {[["100+", "Listings"], ["200+", "Sold"], ["30+", "Years"]].map(([n, l]) => (
                  <div key={l} className="border-l-2 border-[var(--gold)] pl-3 sm:pl-4">
                    <div className="font-display text-2xl sm:text-3xl font-bold">{n}</div>
                    <div className="text-[10px] sm:text-xs text-white/85 uppercase tracking-wider">{l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>


        <SellForm />
        <Process />
        <PropertyTypes />
        

        {/* Final CTA */}
        <section className="relative overflow-hidden">
          <img src={sellCta} alt="Luxury aerial township at sunset" width={1920} height={900} loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-primary/85" />
          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center text-primary-foreground max-w-3xl">
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold">Ready To Sell Your Property?</h2>
            <p className="mt-5 text-lg text-white/85 whitespace-pre-line">
              Submit your property details today and connect with serious buyers through{"\u00a0"}<br /><LogoText height=1.0>
              Land Marvel.
            </LogoText></p>
            <div className="mt-10 flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg" className="bg-[var(--gold)] text-primary hover:bg-[var(--gold)]/90 h-13 px-7 rounded-xl">
                <a href="#form"><FileText className="mr-2 w-4 h-4" />Submit Property</a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/40 bg-white/10 text-white hover:bg-white/20 hover:text-white h-13 px-7 rounded-xl">
                <Link to="/" hash="contact"><Phone className="mr-2 w-4 h-4" />Contact Our Team</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
