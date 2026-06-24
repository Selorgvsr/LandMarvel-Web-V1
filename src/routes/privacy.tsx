import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  User,
  CheckCircle,
  Users,
  Shield,
  CircleDot,
  Mail,
  Globe,
  Clock,
  Scale,
  AlertCircle,
  RefreshCw,
  FileText,
  ChevronRight,
} from "lucide-react";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Land Marvel" },
      {
        name: "description",
        content:
          "Read the Privacy Policy of Land Marvel to understand how we collect, use, store, and safeguard your personal information.",
      },
      { property: "og:title", content: "Privacy Policy — Land Marvel" },
      {
        property: "og:description",
        content:
          "Learn how Land Marvel protects your privacy and handles your personal data.",
      },
    ],
  }),
  component: PrivacyPage,
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
    id: "collect",
    icon: User,
    title: "1. Information We Collect",
    content:
      "When you interact with our website, we may collect the following types of information:",
    points: [
      "Full Name",
      "Email Address",
      "Phone Number",
      "Property Enquiry Details",
      "Project Preferences",
      "Property Sale Information",
      "Property Exchange Information",
      "Messages Submitted Through Forms",
      "IP Address",
      "Browser Type",
      "Device Information",
      "Website Usage Data",
      "Cookies and Analytics Information",
    ],
  },
  {
    id: "use",
    icon: CheckCircle,
    title: "2. How We Use Your Information",
    content: "The information collected may be used to:",
    points: [
      "Respond to enquiries and requests",
      "Provide project information",
      "Arrange site visits",
      "Process property sale or exchange requests",
      "Offer customer support",
      "Improve website functionality",
      "Send project updates and promotional communications",
      "Conduct internal business analysis",
    ],
  },
  {
    id: "sharing",
    icon: Users,
    title: "3. Information Sharing",
    content:
      "Land Marvel does not sell, rent, or trade personal information to third parties. Information may be shared only with:",
    points: [
      "Authorized employees",
      "Project consultants",
      "Legal advisors",
      "Financial institutions (where requested by customers)",
      "Government authorities when legally required",
    ],
  },
  {
    id: "security",
    icon: Shield,
    title: "4. Data Security",
    content:
      "We implement appropriate security measures to protect personal information against:",
    points: [
      "Unauthorized access",
      "Data loss",
      "Misuse",
      "Alteration",
      "Disclosure",
    ],
    footer:
      "While we strive to protect your information, no online system can guarantee absolute security.",
  },
  {
    id: "cookies",
    icon: CircleDot,
    title: "5. Cookies",
    content:
      "Our website may use cookies and similar technologies to:",
    points: [
      "Improve website performance",
      "Understand visitor behavior",
      "Enhance user experience",
      "Analyze website traffic",
    ],
    footer:
      "Users may choose to disable cookies through their browser settings.",
  },
  {
    id: "marketing",
    icon: Mail,
    title: "6. Marketing Communications",
    content:
      "By submitting your information through our website, you may receive:",
    points: [
      "Project Updates",
      "Promotional Offers",
      "Property Information",
      "Event Invitations",
      "Marketing Communications",
    ],
    footer: "You may opt out of these communications at any time.",
  },
  {
    id: "third-party",
    icon: Globe,
    title: "7. Third-Party Services",
    content:
      "Our website may contain links to third-party websites. Land Marvel is not responsible for the privacy practices or content of such external websites.",
  },
  {
    id: "retention",
    icon: Clock,
    title: "8. Data Retention",
    content: "We retain personal information only for as long as necessary to:",
    points: [
      "Provide requested services",
      "Comply with legal obligations",
      "Resolve disputes",
      "Maintain business records",
    ],
  },
  {
    id: "rights",
    icon: Scale,
    title: "9. Your Rights",
    content: "You may request to:",
    points: [
      "Access your personal information",
      "Update incorrect information",
      "Request deletion of personal data",
      "Withdraw consent for communications",
    ],
    footer: "Requests can be submitted through our contact channels.",
  },
  {
    id: "children",
    icon: AlertCircle,
    title: "10. Children's Privacy",
    content:
      "This website is intended for adults seeking real estate information and services. We do not knowingly collect personal information from individuals under 18 years of age.",
  },
  {
    id: "updates",
    icon: RefreshCw,
    title: "11. Policy Updates",
    content:
      "Land Marvel may update this Privacy Policy from time to time. Changes will be posted on this page along with the updated effective date.",
  },
  {
    id: "consent",
    icon: FileText,
    title: "12. Consent",
    content:
      "By accessing and using the Land Marvel website, you consent to the collection and use of information as described in this Privacy Policy.",
  },
];

function PrivacyPage() {
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
                Privacy Policy
              </h1>
              <p className="text-lg text-white/70 leading-relaxed">
                Land Marvel respects your privacy and is committed to protecting
                the personal information you share with us through our website.
                This Privacy Policy explains how we collect, use, store, and
                safeguard your information.
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
            <Link
              to="/"
              className="hover:text-foreground transition-colors"
            >
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-foreground font-medium">Privacy Policy</span>
          </nav>
        </div>
      </div>

      {/* Content */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-8">
            {sections.map((section, i) => (
              <FadeInSection key={section.id} delay={i * 60}>
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
                        <p className="text-muted-foreground leading-relaxed mb-3">
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
                      {section.footer && (
                        <p className="text-muted-foreground leading-relaxed mt-3">
                          {section.footer}
                        </p>
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
                If you have any questions about our Privacy Policy or how we
                handle your data, please feel free to reach out to our team.
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
