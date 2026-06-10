import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  Menu, MapPin, ArrowRight, Phone, Mail, Upload, Facebook, Instagram,
  Twitter, Linkedin, ShieldCheck, Users, TrendingUp, Handshake, FileText,
  Home, Building, Trees, Briefcase, Quote, Star, ClipboardList, Search,
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

import sellHero from "@/assets/sell-hero.jpg";
import sellCta from "@/assets/sell-cta.jpg";
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
  { label: "Projects", to: "/projects" as const, hash: undefined },
  { label: "Contact Us", to: "/" as const, hash: "contact" },
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
            <li><Link to="/sell" className="hover:text-[var(--gold)] transition-colors">Sell</Link></li>
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

function SectionHeading({ eyebrow, title, desc }: { eyebrow: string; title: string; desc?: string }) {
  return (
    <div className="max-w-2xl mx-auto text-center">
      <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-accent">{eyebrow}</span>
      <h2 className="mt-3 font-display text-4xl sm:text-5xl font-bold text-primary">{title}</h2>
      {desc && <p className="mt-4 text-base sm:text-lg text-muted-foreground">{desc}</p>}
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
    <section id="form" className="py-16 sm:py-24" style={{ background: "var(--gradient-soft)" }}>
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
                  <SelectItem value="plot">Plot</SelectItem>
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
    { icon: Users, title: "Buyer Matching", desc: "We connect your listing with our network of genuine, verified buyers." },
    { icon: IndianRupee, title: "Close The Deal", desc: "Smooth documentation, registration and payment — handled end-to-end." },
  ];
  return (
    <section className="py-20 sm:py-24" style={{ background: "var(--gradient-soft)" }}>
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
    { img: catPlot, icon: Trees, title: "Residential Plots", desc: "DTCP, RERA-approved and gated community plots across Chennai." },
    { img: catApartment, icon: Building, title: "Apartments & Flats", desc: "2, 3 & 4 BHK apartments in prime residential locations." },
    { img: catVilla, icon: Home, title: "Villas & Independent Houses", desc: "Premium villas, row houses and independent homes." },
    { img: catCommercial, icon: Briefcase, title: "Commercial Properties", desc: "Offices, retail spaces and commercial buildings." },
  ];
  return (
    <section className="py-20 sm:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Categories" title="Property Types We Accept" desc="We help you sell every type of property — residential, commercial, plots and more." />
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map(({ img, icon: Icon, title, desc }) => (
            <div key={title} className="group relative rounded-2xl overflow-hidden shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-elegant)] transition-all">
              <img src={img} alt={title} width={1024} height={768} loading="lazy" className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/45 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 text-primary-foreground">
                <Icon className="w-7 h-7 text-[var(--gold)]" />
                <h3 className="mt-2 font-display text-xl lg:text-2xl font-bold leading-tight">{title}</h3>
                <p className="mt-1 text-sm text-white/85">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const items = [
    { name: "Ramesh Kumar", role: "Sold a 2BHK in Velachery", quote: "Land Marvel sold my apartment in under 6 weeks at a price 8% above my expectation. Truly professional team." },
    { name: "Priya Sundaram", role: "Sold a plot in OMR", quote: "From valuation to registration, every step was handled with utmost transparency. Highly recommended." },
    { name: "Arun Mehta", role: "Sold a commercial unit", quote: "The buyer network they have is incredible. Got 3 serious offers within 10 days of listing." },
  ];
  return (
    <section className="py-20 sm:py-24" style={{ background: "var(--gradient-soft)" }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Testimonials" title="What Our Sellers Say" />
        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {items.map((t) => (
            <div key={t.name} className="bg-card rounded-2xl p-7 border border-border shadow-[var(--shadow-card)] flex flex-col">
              <Quote className="w-8 h-8 text-[var(--gold)]" />
              <p className="mt-4 text-foreground/85 leading-relaxed">"{t.quote}"</p>
              <div className="mt-6 flex items-center gap-1 text-[var(--gold)]">
                {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
              <div className="mt-4 pt-4 border-t border-border">
                <div className="font-display font-bold text-primary">{t.name}</div>
                <div className="text-xs text-muted-foreground">{t.role}</div>
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
        {/* Hero */}
        <section className="relative overflow-hidden" style={{ background: "var(--gradient-soft)" }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-accent">Sell Property</span>
              <h1 className="mt-4 font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-primary leading-[1.05]">
                Sell Your Property With <span className="text-[var(--gold)]">Confidence</span>
              </h1>
              <p className="mt-6 text-lg text-muted-foreground max-w-xl">
                Connect with genuine buyers, receive expert property guidance, and maximize your property's value through Land Marvel's trusted real-estate network.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button asChild size="lg" className="bg-[image:var(--gradient-primary)] hover:opacity-90 h-13 px-7 rounded-xl shadow-[var(--shadow-elegant)]">
                  <a href="#form">Sell Property Now <ArrowRight className="ml-2 w-4 h-4" /></a>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground h-13 px-7 rounded-xl">
                  <a href="tel:+910000000000"><Phone className="mr-2 w-4 h-4" />Talk To Expert</a>
                </Button>
              </div>
              <div className="mt-10 grid grid-cols-3 gap-6 max-w-md">
                {[["5000+", "Listings"], ["2000+", "Sold"], ["20+", "Years"]].map(([n, l]) => (
                  <div key={l}>
                    <div className="font-display text-3xl font-bold text-primary">{n}</div>
                    <div className="text-xs text-muted-foreground uppercase tracking-wider">{l}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img src={sellHero} alt="Premium luxury villa" width={1536} height={1024} className="rounded-3xl shadow-[var(--shadow-elegant)] w-full h-[420px] lg:h-[540px] object-cover" />
              <div className="absolute -bottom-6 -left-6 hidden sm:block bg-[image:var(--gradient-primary)] text-primary-foreground rounded-2xl px-6 py-5 shadow-[var(--shadow-elegant)]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[var(--gold)]" />
                  <div className="font-display text-xl font-bold">Verified Buyers</div>
                </div>
                <div className="text-xs text-white/80 uppercase tracking-wider mt-1">Faster, secure closures</div>
              </div>
            </div>
          </div>
        </section>

        <SellForm />
        <Process />
        <PropertyTypes />
        <Testimonials />

        {/* Final CTA */}
        <section className="relative overflow-hidden">
          <img src={sellCta} alt="Luxury aerial township at sunset" width={1920} height={900} loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-primary/85" />
          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center text-primary-foreground max-w-3xl">
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold">Ready To Sell Your Property?</h2>
            <p className="mt-5 text-lg text-white/85">
              Submit your property details today and connect with serious buyers through Land Marvel.
            </p>
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
