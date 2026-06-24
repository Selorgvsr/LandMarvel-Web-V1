import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import {
  Menu, MapPin, Phone, Mail, Clock, Check, Facebook, Instagram, Twitter, Linkedin, Send,
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

import heroImg from "@/assets/about-building.jpg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — Land Marvel | Premium Real Estate Chennai" },
      { name: "description", content: "Get in touch with Land Marvel for buying, selling, exchanging properties, or to learn more about our projects in Chennai." },
      { property: "og:title", content: "Contact Land Marvel" },
      { property: "og:description", content: "Talk to our property advisors about plots, residential and commercial real estate in Chennai." },
      { property: "og:image", content: heroImg },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

const navLinks = [
  { label: "Buy", to: "/buy" as const },
  { label: "Sell", to: "/sell" as const },
  { label: "Project", to: "/projects" as const },
  { label: "Contact Us", to: "/contact" as const },
];

function Header() {
  return <SiteHeader />;
}

const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100),
  email: z.string().trim().email("Please enter a valid email").max(255),
  phone: z.string().trim().min(7, "Please enter a valid phone number").max(20),
  subject: z.string().min(1, "Please select a subject"),
  message: z.string().trim().min(5, "Please enter a message").max(1000),
});

function ContactForm() {
  const [submitting, setSubmitting] = useState(false);
  const [subject, setSubject] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      subject,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };
    const result = contactSchema.safeParse(data);
    if (!result.success) {
      toast.error(result.error.issues[0]?.message ?? "Please check the form");
      return;
    }
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      toast.success("Thanks! We'll get back to you shortly.");
      form.reset();
      setSubject("");
    }, 600);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-card rounded-2xl shadow-[var(--shadow-elegant)] p-6 md:p-8 space-y-5 border border-border">
      <div className="grid sm:grid-cols-2 gap-5">
        <div className="space-y-2">
          <Label htmlFor="name">Full Name</Label>
          <Input id="name" name="name" placeholder="Enter Your Full Name" maxLength={100} required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email Address</Label>
          <Input id="email" name="email" type="email" placeholder="Enter Your Email Address" maxLength={255} required />
        </div>
      </div>
      <div className="grid sm:grid-cols-2 gap-5">
        <div className="space-y-2">
          <Label htmlFor="phone">Phone Number</Label>
          <Input id="phone" name="phone" type="tel" placeholder="Enter Your Phone Number" maxLength={20} required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="subject">Subject</Label>
          <Select value={subject} onValueChange={setSubject}>
            <SelectTrigger id="subject"><SelectValue placeholder="Select a subject" /></SelectTrigger>
            <SelectContent>
              <SelectItem value="general">General Enquiry</SelectItem>
              <SelectItem value="buy">Buy Property</SelectItem>
              <SelectItem value="sell">Sell Property</SelectItem>
              <SelectItem value="visit">Site Visit</SelectItem>
              <SelectItem value="project">Project Information</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="message">Message</Label>
        <Textarea id="message" name="message" placeholder="Tell us how we can help you." rows={5} maxLength={1000} required />
      </div>
      <Button type="submit" disabled={submitting} className="w-full h-12 rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 text-base font-semibold shadow-[var(--shadow-card)]">
        <Send className="w-4 h-4" /> {submitting ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
}

function ContactPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      {/* HERO */}
      <section className="relative bg-gradient-to-b from-primary/5 to-background py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-[var(--gold)]/15 text-[var(--gold)] uppercase tracking-wider">Contact Us</span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight">
              Get In Touch With Land Marvel
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl">
              Whether you're looking to buy, sell, exchange properties, or learn more about our ongoing projects, our team is here to assist you every step of the way.
            </p>
            <ul className="grid sm:grid-cols-2 gap-3 pt-2">
              {["Expert Property Advisors", "30+ Years of Trust", "Premium Locations", "End-to-End Support"].map((h) => (
                <li key={h} className="flex items-center gap-2 text-sm text-foreground/85">
                  <span className="grid place-items-center w-6 h-6 rounded-full bg-primary/10 text-primary"><Check className="w-3.5 h-3.5" /></span>
                  {h}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-3 pt-2">
              <Button asChild size="lg" className="h-12 rounded-xl bg-primary hover:bg-primary/90">
                <a href="tel:+919444126240"><Phone className="w-4 h-4" /> Call Now</a>
              </Button>
              <Button asChild size="lg" variant="outline" className="h-12 rounded-xl border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                <a href="mailto:vsr@landmarvel.com"><Mail className="w-4 h-4" /> Email Us</a>
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-3 rounded-3xl bg-[image:var(--gradient-primary)] opacity-20 blur-2xl" />
            <img src={heroImg} alt="Land Marvel office and property advisors" className="relative w-full h-[420px] lg:h-[520px] object-cover rounded-3xl shadow-[var(--shadow-elegant)]" />
          </div>
        </div>
      </section>

      {/* CONTACT INFO + FORM */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary">Let's Start a Conversation</h2>
            <p className="text-muted-foreground">We're here to answer your questions and help you find the right property solution.</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-10">
            {/* Left: Info */}
            <div className="space-y-6">
              {[
                { icon: MapPin, title: "Visit Our Office", lines: ["Land Marvel Group", "Chennai, Tamil Nadu"] },
                { icon: Phone, title: "Call Us", lines: ["+91 94441 26240"] },
                { icon: Mail, title: "Email Us", lines: ["vsr@landmarvel.com"] },
                { icon: Clock, title: "Business Hours", lines: ["Monday – Saturday", "9:00 AM – 6:00 PM"] },
              ].map((c) => (
                <div key={c.title} className="flex gap-4 p-5 rounded-2xl bg-card border border-border hover:shadow-[var(--shadow-card)] transition-shadow">
                  <span className="grid place-items-center w-12 h-12 rounded-xl bg-[image:var(--gradient-primary)] text-primary-foreground shrink-0">
                    <c.icon className="w-5 h-5" />
                  </span>
                  <div>
                    <h3 className="font-semibold text-primary">{c.title}</h3>
                    {c.lines.map((l) => <p key={l} className="text-sm text-muted-foreground">{l}</p>)}
                  </div>
                </div>
              ))}

              <div className="p-6 rounded-2xl bg-primary text-primary-foreground">
                <h3 className="font-display text-xl font-bold mb-4">Why Contact Us?</h3>
                <ul className="grid sm:grid-cols-2 gap-2 text-sm">
                  {["Buy Properties", "Sell Properties", "Property Exchange", "Site Visit Booking", "Investment Consultation", "Project Information"].map((i) => (
                    <li key={i} className="flex items-center gap-2"><Check className="w-4 h-4 text-[var(--gold)]" /> {i}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right: Form */}
            <ContactForm />
          </div>

          {/* Mini CTA */}
          <div className="mt-16 rounded-2xl bg-[image:var(--gradient-primary)] text-primary-foreground p-8 md:p-10 text-center space-y-4 shadow-[var(--shadow-elegant)]">
            <h3 className="font-display text-2xl md:text-3xl font-bold">Need Immediate Assistance?</h3>
            <p className="text-primary-foreground/85 max-w-2xl mx-auto">Our property advisors are available to guide you through buying, selling, exchanging, and investing in premium real estate.</p>
            <div className="flex flex-wrap gap-3 justify-center pt-2">
              <Button asChild size="lg" className="h-12 rounded-xl bg-[var(--gold)] text-primary hover:opacity-90 font-semibold">
                <a href="tel:+919444126240"><Phone className="w-4 h-4" /> Call Now</a>
              </Button>
              <Button asChild size="lg" variant="outline" className="h-12 rounded-xl bg-transparent border-white text-white hover:bg-white hover:text-primary">
                <a href="mailto:vsr@landmarvel.com"><Mail className="w-4 h-4" /> Email Us</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <SiteFooter />
    </div>
  );
}
