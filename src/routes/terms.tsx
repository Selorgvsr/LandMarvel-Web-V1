import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { Scale, FileText, Shield, AlertCircle, ChevronRight } from "lucide-react";
import { SiteHeader } from "@/components/landmarvel/SiteHeader";
import { SiteFooter } from "@/components/landmarvel/SiteFooter";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions — Land Marvel" },
      {
        name: "description",
        content:
          "Read the Terms & Conditions for using the Land Marvel website and services. Legal policies governing property information, enquiries, and intellectual property.",
      },
      { property: "og:title", content: "Terms & Conditions — Land Marvel" },
      {
        property: "og:description",
        content:
          "Read the Terms & Conditions for using the Land Marvel website and services.",
      },
    ],
  }),
  component: TermsPage,
});

function useFadeInOnScroll() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return { ref, visible };
}

function FadeInSection({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const { ref, visible } = useFadeInOnScroll();
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${className}`}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(30px)",
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

const sections = [
  {
    id: "about",
    icon: BuildingIcon,
    title: "1. About Land Marvel",
    content:
      "Land Marvel is a real estate development company engaged in residential, commercial, plotted developments, property sales, property exchanges, and related real estate services.",
  },
  {
    id: "usage",
    icon: FileText,
    title: "2. Website Usage",
    points: [
      "Use the website only for lawful purposes.",
      "Provide accurate information when submitting enquiries or forms.",
      "Not engage in activities that may damage, disrupt, or interfere with the website.",
      "Not attempt unauthorized access to any part of the website or its systems.",
    ],
  },
  {
    id: "property",
    icon: BuildingIcon,
    title: "3. Property Information",
    content:
      "All project details, images, layouts, specifications, pricing, amenities, and availability displayed on this website are for general informational purposes only. Land Marvel reserves the right to modify, update, change, or withdraw any project information without prior notice.",
  },
  {
    id: "illustrations",
    icon: AlertCircle,
    title: "4. Project Illustrations",
    content:
      "Images, renders, floor plans, and visual representations displayed on the website may be artistic impressions and are intended for illustrative purposes only. Actual construction, specifications, and features may vary.",
  },
  {
    id: "enquiries",
    icon: FileText,
    title: "5. Enquiries & Form Submissions",
    content:
      "By submitting any enquiry form, contact form, project enquiry, property sale, or property exchange request, you consent to being contacted by Land Marvel through Phone Calls, SMS, WhatsApp, and Email Communications for project updates, property information, and customer support.",
  },
  {
    id: "intellectual",
    icon: Shield,
    title: "6. Intellectual Property",
    content:
      "All content on this website including Logos, Branding, Text, Images, Graphics, Layouts, Designs, and Videos are the property of Land Marvel unless otherwise stated and may not be copied, reproduced, or distributed without prior written permission.",
  },
  {
    id: "third-party",
    icon: AlertCircle,
    title: "7. Third-Party Links",
    content:
      "This website may contain links to third-party websites for customer convenience. Land Marvel is not responsible for the content, security, privacy practices, or accuracy of information available on external websites.",
  },
  {
    id: "liability",
    icon: Scale,
    title: "8. Limitation of Liability",
    content:
      "Land Marvel shall not be liable for any direct, indirect, incidental, or consequential damages arising from website usage, website interruptions, errors in information, technical failures, or third-party actions. Users access the website at their own risk.",
  },
  {
    id: "changes",
    icon: FileText,
    title: "9. Changes to Terms",
    content:
      "Land Marvel reserves the right to revise these Terms & Conditions at any time without prior notice. Continued use of the website constitutes acceptance of the updated terms.",
  },
  {
    id: "governing",
    icon: Scale,
    title: "10. Governing Law",
    content:
      "These Terms & Conditions shall be governed by and interpreted in accordance with the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts of Chennai, Tamil Nadu.",
  },
];

function BuildingIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M12 10h.01" />
      <path d="M12 14h.01" />
      <path d="M12 6h.01" />
      <path d="M16 10h.01" />
      <path d="M16 14h.01" />
      <path d="M16 6h.01" />
      <path d="M8 10h.01" />
      <path d="M8 14h.01" />
      <path d="M8 6h.01" />
      <path d="M9 22v-2.87a.5.5 0 0 1 .24-.43l4.9-2.93a.5.5 0 0 0-.24-.87H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v11.56a.5.5 0 0 0-.24.43V22" />
    </svg>
  );
}

function TermsPage() {
  return (
    <div className="min-h-[100dvh]">
      {/* Hero */}
      <section className="relative bg-primary overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,oklch(0.78_0.13_85)_0%,transparent_50%)]" />
        </div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <FadeInSection>
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block px-4 py-1.5 rounded-full bg-[var(--gold)]/15 text-[var(--gold)] text-xs font-semibold tracking-widest uppercase mb-6">
                Legal
              </span>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                Terms & Conditions
              </h1>
              <p className="text-lg text-white/70 leading-relaxed">
                Welcome to Land Marvel. By accessing and using this website, you agree to comply with and be bound by the following Terms & Conditions. If you do not agree with any part of these terms, please do not use this website.
              </p>
              <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 text-white/60 text-sm">
                <FileText className="w-4 h-4" />
                Last Updated: 24.06.2026
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="bg-muted/30 border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-foreground font-medium">Terms & Conditions</span>
          </nav>
        </div>
      </div>

      {/* Content */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-8">
            {sections.map((section, i) => (
              <FadeInSection key={section.id} delay={i * 80}>
                <div
                  id={section.id}
                  className="group relative p-8 rounded-3xl bg-card border border-border hover:shadow-[var(--shadow-card)] transition-all duration-500"
                >
                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 rounded-2xl bg-primary/5 flex items-center justify-center flex-shrink-0 group-hover:bg-[var(--gold)]/10 transition-colors">
                      <section.icon className="w-6 h-6 text-primary group-hover:text-[var(--gold)] transition-colors" />
                    </div>
                    <div className="flex-1">
                      <h2 className="font-display text-xl font-bold text-foreground mb-3">
                        {section.title}
                      </h2>
                      {section.content && (
                        <p className="text-muted-foreground leading-relaxed">
                          {section.content}
                        </p>
                      )}
                      {section.points && (
                        <ul className="space-y-2.5">
                          {section.points.map((point, pi) => (
                            <li
                              key={pi}
                              className="flex items-start gap-3 text-muted-foreground"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-[var(--gold)] mt-2 flex-shrink-0" />
                              <span className="leading-relaxed">{point}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>

          {/* Contact CTA */}
          <FadeInSection delay={200}>
            <div className="max-w-4xl mx-auto mt-16 p-8 rounded-3xl bg-primary text-primary-foreground text-center">
              <h3 className="font-display text-2xl font-bold mb-3">
                Have Questions?
              </h3>
              <p className="text-white/80 mb-6 max-w-xl mx-auto">
                If you have any questions about our Terms & Conditions, please feel free to reach out to our team.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-[var(--gold)] text-primary font-semibold hover:bg-[var(--gold)]/90 transition-colors"
              >
                Contact Us <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </FadeInSection>
        </div>
      </section>
    </div>
  );
}
