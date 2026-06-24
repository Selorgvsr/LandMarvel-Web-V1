import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  Trophy,
  Building2,
  Star,
  Sparkles,
  ArrowRight,
  HardHat,
  Scale,
  Handshake,
  MapPin,
  Leaf,
  Rocket,
  Check,
  Home,
  Users,
  TrendingUp,
  Eye,
  Target,
} from "lucide-react";
import aboutHero from "@/assets/about-hero.jpg";
import aboutWhoWeAre from "@/assets/about-who-we-are.jpg";
import aboutQuality from "@/assets/about-quality.jpg";
import aboutCustomer from "@/assets/about-customer.jpg";
import aboutSkyline from "@/assets/about-skyline.jpg";
import { SiteHeader } from "@/components/landmarvel/SiteHeader";
import { SiteFooter } from "@/components/landmarvel/SiteFooter";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Land Marvel Group" },
      {
        name: "description",
        content:
          "Discover Land Marvel Group — one of South India's leading real estate developers. Building landmarks, creating communities, delivering trust since 2000.",
      },
      { property: "og:title", content: "About Us — Land Marvel Group" },
      {
        property: "og:description",
        content:
          "Discover Land Marvel Group — one of South India's leading real estate developers. Building landmarks, creating communities, delivering trust since 2000.",
      },
    ],
  }),
  component: AboutPage,
});

function useCountUp(end: number, duration = 2000, startOnView = true) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    if (!startOnView) {
      started.current = true;
      const startTime = Date.now();
      const animate = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        setCount(Math.floor(progress * end));
        if (progress < 1) requestAnimationFrame(animate);
      };
      requestAnimationFrame(animate);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !started.current) {
          started.current = true;
          const startTime = Date.now();
          const animate = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            setCount(Math.floor(progress * end));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, duration, startOnView]);

  return { count, ref };
}

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

function AboutPage() {
  return (
    <div className="min-h-[100dvh]">
      <SiteHeader />
      <HeroSection />
      <WhoWeAreSection />
      <OurStorySection />
      <DifferenceSection />
      <QualitySection />
      <CustomerSection />
      <StrengthSection />
      <VisionMissionSection />
      <FinalStatementSection />
      <SiteFooter />
    </div>
  );
}

/* ─── SECTION 1: HERO ─── */
function HeroSection() {
  return (
    <section className="relative min-h-[100dvh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={aboutHero}
          alt="Premium Land Marvel township aerial view"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/75 to-primary/50" />
      </div>
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-3xl">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[var(--gold)]/15 text-[var(--gold)] text-xs font-semibold tracking-widest uppercase mb-6">
            Since Trust Began
          </span>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Building Landmarks.
            <br />
            Creating Communities.
            <br />
            Delivering Trust.
          </h1>
          <p className="text-lg text-white/80 leading-relaxed mb-8 max-w-2xl">
            Land Marvel Group is one of South India's leading real estate
            developers with a strong legacy of delivering premium residential and
            commercial developments built on trust, quality, and innovation.
          </p>
          <div className="flex flex-wrap gap-4 mb-10">
            {[
              { icon: Trophy, label: "100+", desc: "Projects Delivered" },
              { icon: Building2, label: "2.5M+", desc: "Sq. Ft Developed" },
              { icon: Star, label: "Trusted", desc: "Developer" },
              {
                icon: Sparkles,
                label: "Customer-Centric",
                desc: "Approach",
              },
            ].map(({ icon: Icon, label, desc }) => (
              <div
                key={label}
                className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl px-5 py-3 border border-white/10"
              >
                <Icon className="w-5 h-5 text-[var(--gold)]" />
                <div>
                  <div className="text-white font-bold text-sm">{label}</div>
                  <div className="text-white/60 text-xs">{desc}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-[var(--gold)] text-primary font-semibold hover:bg-[var(--gold)]/90 transition-colors"
            >
              Explore Projects <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl border-2 border-white/30 text-white font-semibold hover:bg-white/10 transition-colors"
            >
              Our Journey
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── SECTION 2: WHO WE ARE ─── */
function WhoWeAreSection() {
  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <FadeInSection>
            <div className="relative rounded-3xl overflow-hidden shadow-[var(--shadow-elegant)]">
              <img
                src={aboutWhoWeAre}
                alt="Land Marvel corporate headquarters"
                className="w-full h-[500px] lg:h-[600px] object-cover hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
            </div>
          </FadeInSection>
          <FadeInSection delay={200}>
            <div>
              <span className="text-[var(--gold)] text-sm font-semibold tracking-widest uppercase">
              </span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-6">
                Who We Are
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Land Marvel Group is one of South India's respected business
                  conglomerates with interests spanning Real Estate, Plotted
                  Layout, Commercial Space, Interior, 3D Printing Home, Organic
                  Home, Roof Top Solar.
                </p>
                <p>
                  Built upon trust, sincerity, and excellence, Land Marvel has
                  established a reputation for creating exceptional developments
                  that enhance lifestyles and deliver long-term value.
                </p>
                <p>
                  Every project reflects our commitment to quality, innovation,
                  and customer satisfaction.
                </p>
              </div>
            </div>
          </FadeInSection>
        </div>
      </div>
    </section>
  );
}

/* ─── SECTION 3: OUR STORY ─── */
function OurStorySection() {
  const timeline = [
    { year: "2000+", title: "Foundation Built on Trust", desc: "Land Marvel Group was established with a vision to transform real estate development in South India." },
    { year: "2005", title: "Expansion into Real Estate", desc: "Launched our first premium residential projects, setting new benchmarks in quality and design." },
    { year: "2010", title: "50+ Landmark Projects", desc: "Achieved the milestone of 50 successfully delivered developments across Chennai and beyond." },
    { year: "2015", title: "100+ Successful Developments", desc: "Crossed 100 completed projects, earning the trust of thousands of families." },
    { year: "2020", title: "2.5 Million+ Sq. Ft", desc: "Expanded our footprint with over 2.5 million square feet of developed premium spaces." },
    { year: "Today", title: "Building the Future", desc: "Pioneering sustainable and innovative real estate solutions for the next generation." },
  ];

  return (
    <section className="py-24 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInSection className="text-center mb-16">
          <span className="text-[var(--gold)] text-sm font-semibold tracking-widest uppercase">
            Our Legacy
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-3">
            Our Journey of Growth
          </h2>
        </FadeInSection>
        <div className="max-w-4xl mx-auto relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />
          {timeline.map((item, i) => (
            <FadeInSection key={item.year} delay={i * 100}>
              <div className={`relative flex items-start gap-6 md:gap-0 mb-12 last:mb-0 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                <div className={`hidden md:block w-1/2 ${i % 2 === 0 ? "pr-12 text-right" : "pl-12 text-left"}`}>
                  <h3 className="font-display text-xl font-bold text-foreground">
                    {item.year}
                  </h3>
                  <h4 className="font-semibold text-primary mt-1">
                    {item.title}
                  </h4>
                  <p className="text-muted-foreground text-sm mt-2 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-[var(--gold)] border-4 border-background md:-translate-x-1.5 mt-1.5" />
                <div className="pl-12 md:pl-0 md:w-1/2 md:hidden">
                  <h3 className="font-display text-xl font-bold text-foreground">
                    {item.year}
                  </h3>
                  <h4 className="font-semibold text-primary mt-1">
                    {item.title}
                  </h4>
                  <p className="text-muted-foreground text-sm mt-2 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── SECTION 4: THE LAND MARVEL DIFFERENCE ─── */
function DifferenceSection() {
  const features = [
    {
      icon: HardHat,
      title: "Superior Construction Standards",
      desc: "Every project is built using premium materials and strict quality controls.",
    },
    {
      icon: Scale,
      title: "Transparent Processes",
      desc: "Clear documentation and complete legal compliance.",
    },
    {
      icon: Handshake,
      title: "Customer-First Philosophy",
      desc: "Supporting customers through every stage of ownership.",
    },
    {
      icon: MapPin,
      title: "Strategic Locations",
      desc: "Projects located in rapidly developing growth corridors.",
    },
    {
      icon: Leaf,
      title: "Sustainable Development",
      desc: "Focused on creating communities for future generations.",
    },
    {
      icon: Rocket,
      title: "Innovation Driven",
      desc: "Combining modern technology with smart planning.",
    },
  ];

  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInSection className="text-center mb-16">
          <span className="text-[var(--gold)] text-sm font-semibold tracking-widest uppercase">
            What Sets Us Apart
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-3">
            Why Land Marvel Stands Apart
          </h2>
        </FadeInSection>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((f, i) => (
            <FadeInSection key={f.title} delay={i * 100}>
              <div className="group relative p-8 rounded-3xl bg-card border border-border hover:shadow-[var(--shadow-card)] hover:border-[var(--gold)]/30 transition-all duration-500">
                <div className="w-14 h-14 rounded-2xl bg-primary/5 flex items-center justify-center mb-5 group-hover:bg-[var(--gold)]/10 transition-colors">
                  <f.icon className="w-7 h-7 text-primary group-hover:text-[var(--gold)] transition-colors" />
                </div>
                <h3 className="font-display text-lg font-bold text-foreground mb-2">
                  {f.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {f.desc}
                </p>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── SECTION 5: QUALITY WITHOUT COMPROMISE ─── */
function QualitySection() {
  const checks = [
    "Soil & Site Evaluation",
    "Planning & Design Excellence",
    "Premium Construction Materials",
    "Rigorous Quality Control",
    "Timely Project Delivery",
    "Customer Customization Support",
  ];

  return (
    <section className="py-24 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <FadeInSection>
            <div className="relative rounded-3xl overflow-hidden shadow-[var(--shadow-elegant)] order-2 lg:order-1">
              <img
                src={aboutQuality}
                alt="Premium interior showcasing quality construction"
                className="w-full h-[500px] lg:h-[600px] object-cover hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
            </div>
          </FadeInSection>
          <FadeInSection delay={200}>
            <div className="order-1 lg:order-2">
              <span className="text-[var(--gold)] text-sm font-semibold tracking-widest uppercase">
                Our Commitment
              </span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-6">
                Committed To Excellence At Every Step
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Quality is at the heart of every Land Marvel development. From
                land selection and soil testing to architectural planning,
                construction, finishing, and handover, every stage follows strict
                quality standards.
              </p>
              <div className="space-y-3">
                {checks.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 p-3 rounded-xl bg-card border border-border"
                  >
                    <div className="w-6 h-6 rounded-full bg-[var(--sustainable-green)]/10 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3.5 h-3.5 text-[var(--sustainable-green)]" />
                    </div>
                    <span className="text-foreground text-sm font-medium">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </FadeInSection>
        </div>
      </div>
    </section>
  );
}

/* ─── SECTION 6: CUSTOMER EXPERIENCE ─── */
function CustomerSection() {
  const highlights = [
    "Property Selection Assistance",
    "Investment Consultation",
    "Legal Documentation Support",
    "Housing Finance Guidance",
    "Personalised Customer Service",
  ];

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={aboutCustomer}
          alt="Happy family with their new home"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-primary/85" />
      </div>
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <FadeInSection>
            <span className="text-[var(--gold)] text-sm font-semibold tracking-widest uppercase">
              Our Promise
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-3 mb-6">
              A Customer Journey Built On Trust
            </h2>
            <p className="text-white/80 leading-relaxed mb-10">
              Our relationship with customers extends beyond property ownership.
              We provide complete assistance from project selection and
              investment evaluation to documentation, financing support,
              customization, and handover.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {highlights.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20"
                >
                  <Check className="w-4 h-4 text-[var(--gold)]" />
                  <span className="text-white text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>
          </FadeInSection>
        </div>
      </div>
    </section>
  );
}

/* ─── SECTION 7: OUR STRENGTH ─── */
function StrengthSection() {
  const stats = [
    { icon: Home, value: 100, suffix: "+", label: "Projects Delivered" },
    { icon: Building2, value: 2500000, suffix: "+", label: "Sq. Ft Developed", display: "2.5M+" },
    { icon: Users, value: 1000, suffix: "+", label: "Happy Families" },
    { icon: TrendingUp, value: 20, suffix: "+", label: "Years of Excellence" },
  ];

  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInSection className="text-center mb-16">
          <span className="text-[var(--gold)] text-sm font-semibold tracking-widest uppercase">
            By The Numbers
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-3">
            Our Strength
          </h2>
        </FadeInSection>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} delay={i * 100} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StatCard({
  stat,
  delay,
}: {
  stat: {
    icon: React.ComponentType<{ className?: string }>;
    value: number;
    suffix: string;
    label: string;
    display?: string;
  };
  delay: number;
}) {
  const { count, ref } = useCountUp(stat.value, 2000);
  const displayValue = stat.display
    ? stat.display
    : count >= 1000000
    ? `${(count / 1000000).toFixed(1)}M`
    : count >= 1000
    ? `${Math.floor(count / 1000)}K`
    : `${count}${stat.suffix}`;

  return (
    <FadeInSection delay={delay}>
      <div
        ref={ref}
        className="text-center p-8 rounded-3xl bg-card border border-border hover:shadow-[var(--shadow-card)] transition-shadow"
      >
        <div className="w-14 h-14 rounded-2xl bg-primary/5 flex items-center justify-center mx-auto mb-5">
          <stat.icon className="w-7 h-7 text-primary" />
        </div>
        <div className="font-display text-4xl font-bold text-foreground mb-2">
          {displayValue}
        </div>
        <div className="text-muted-foreground text-sm">{stat.label}</div>
      </div>
    </FadeInSection>
  );
}

/* ─── SECTION 8: VISION & MISSION ─── */
function VisionMissionSection() {
  return (
    <section className="py-24 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          <FadeInSection>
            <div className="p-10 lg:p-12 rounded-3xl bg-card border border-border hover:shadow-[var(--shadow-card)] transition-shadow h-full">
              <div className="w-14 h-14 rounded-2xl bg-primary/5 flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-2xl font-bold text-foreground mb-4">
                Our Vision
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                To create world-class communities and investment destinations
                that inspire better living and sustainable growth.
              </p>
            </div>
          </FadeInSection>
          <FadeInSection delay={150}>
            <div className="p-10 lg:p-12 rounded-3xl bg-card border border-border hover:shadow-[var(--shadow-card)] transition-shadow h-full">
              <div className="w-14 h-14 rounded-2xl bg-primary/5 flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-2xl font-bold text-foreground mb-4">
                Our Mission
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                To deliver exceptional real estate developments through quality,
                transparency, innovation, and customer-focused service.
              </p>
            </div>
          </FadeInSection>
        </div>
      </div>
    </section>
  );
}

/* ─── SECTION 9: FINAL BRAND STATEMENT ─── */
function FinalStatementSection() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={aboutSkyline}
          alt="Premium city skyline at sunset"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-primary/80" />
      </div>
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <FadeInSection>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            More Than Buildings.
            <br />
            We Create Lasting Value.
          </h2>
          <p className="text-white/80 leading-relaxed max-w-2xl mx-auto mb-10">
            At Land Marvel, every project is a reflection of our values, our
            expertise, and our promise to deliver spaces that enrich lives and
            build stronger communities.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-[var(--gold)] text-primary font-semibold hover:bg-[var(--gold)]/90 transition-colors"
            >
              View Projects <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl border-2 border-white/30 text-white font-semibold hover:bg-white/10 transition-colors"
            >
              Get In Touch
            </Link>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}
