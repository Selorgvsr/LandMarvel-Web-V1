import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Check,
  Building2,
  Home,
  TreePine,
  Sun,
  Cpu,
  Sparkles,
  Leaf,
  Droplets,
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
} from "lucide-react";
import { SiteFooter } from "@/components/landmarvel/SiteFooter";
import { SiteHeader } from "@/components/landmarvel/SiteHeader";

import hero from "@/assets/portfolio-hero.jpg";
import residential from "@/assets/portfolio-residential.jpg";
import plots from "@/assets/portfolio-plots.jpg";
import commercial from "@/assets/portfolio-commercial.jpg";
import interior from "@/assets/portfolio-interior.jpg";
import organic from "@/assets/portfolio-organic.jpg";
import threeD from "@/assets/portfolio-3d.jpg";
import solar from "@/assets/portfolio-solar.jpg";
import sustainability from "@/assets/portfolio-sustainability.jpg";
import innovation from "@/assets/portfolio-innovation.jpg";
import futureCta from "@/assets/portfolio-future-cta.jpg";
import residentialVideo from "@/assets/residential-video.mp4.asset.json";
import portfolio3dVideo from "@/assets/portfolio-3d-video.mp4.asset.json";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — Land Marvel | Future Living, Real Estate & Innovation Hub" },
      {
        name: "description",
        content:
          "From plotted developments and luxury residences to organic homes, 3D-printed construction and rooftop solar — explore Land Marvel's portfolio of sustainable, future-ready communities.",
      },
      { property: "og:title", content: "Land Marvel Portfolio — Building Tomorrow's Living Spaces Today" },
      {
        property: "og:description",
        content: "Premium real estate, sustainable development and future construction technologies.",
      },
      { property: "og:image", content: hero },
    ],
  }),
  component: PortfolioPage,
});

const NAVY = "#0A1D63";
const GREEN = "#68A42C";

function PortfolioPage() {
  return (
    <div className="min-h-screen bg-white text-foreground">
      <Header />
      <Hero />
      <SplitSection
        video={residentialVideo.url}
        imageLeft
        eyebrow="Residential Living"
        icon={<Home className="w-5 h-5" />}
        title="Modern Residential Living For Every Lifestyle"
        desc="Land Marvel develops thoughtfully planned residential communities designed around comfort, convenience, security, and long-term value. Every project combines modern architecture, premium amenities, and strategic locations to create exceptional living experiences."
        features={[
          "Premium Residential Communities",
          "Luxury Apartments",
          "Independent Villas",
          "Family-Friendly Environment",
          "Modern Lifestyle Amenities",
          "Excellent Connectivity",
          "Secure Communities",
          "Future Appreciation Potential",
        ]}
        cta="Explore Residential Project"
      />
      <SplitSection
        image={plots}
        alt="Plotted development aerial"
        imageLeft={false}
        bg="bg-[#F8FAFC]"
        eyebrow="Plotted Developments"
        icon={<MapPin className="w-5 h-5" />}
        title="Invest In Land. Build Your Future."
        desc="Land is one of the most reliable and appreciating assets for long-term wealth creation. Our plotted developments are strategically positioned in high-growth locations with strong infrastructure and future development potential. Whether for investment or future construction, our plots provide a secure foundation for growth and prosperity."
        features={[
          "DTCP / CMDA Approved Layouts",
          "Prime Growth Corridors",
          "Infrastructure Ready Plots",
          "Wide Internal Roads",
          "High Appreciation Potential",
          "Clear Legal Documentation",
          "Excellent Accessibility",
          "Future Development Opportunities",
        ]}
        cta="View Plot Project"
      />
      <SplitSection
        image={commercial}
        alt="Commercial spaces"
        imageLeft
        eyebrow="Commercial Spaces"
        icon={<Building2 className="w-5 h-5" />}
        title="Commercial Spaces Designed For Growth"
        desc="Land Marvel develops premium commercial environments that support business growth, visibility, and long-term investment returns. Located in strategic business corridors, our commercial developments create opportunities for entrepreneurs, investors, and enterprises."
        features={[
          "Premium Office Spaces",
          "Retail & Shopping Destinations",
          "Business Parks",
          "Commercial Investment Opportunities",
          "Prime Business Locations",
          "Future Growth Corridors",
          "Excellent Connectivity",
          "Strong Rental Potential",
        ]}
        cta="Explore Commercial Project"
      />
      <SplitSection
        image={interior}
        alt="Premium interiors"
        imageLeft
        bg="bg-[#F8FAFC]"
        eyebrow="Interior Solutions"
        icon={<Sparkles className="w-5 h-5" />}
        title="Premium Interior Design & Space Transformation"
        desc="Transform ordinary spaces into extraordinary living experiences. Our interior solutions combine functionality, innovation, luxury, and personalized design to create beautiful and comfortable environments."
        features={[
          "Luxury Residential Interiors",
          "Villa Interior Design",
          "Commercial Interiors",
          "Smart Home Integration",
          "Modular Solutions",
          "Turnkey Project Execution",
        ]}
        cta="View Interior Portfolio"
      />
      <SplitSection
        image={organic}
        alt="Organic homes"
        imageLeft={false}
        eyebrow="Organic Homes"
        icon={<Leaf className="w-5 h-5" />}
        title="Organic Homes For Healthy Living"
        desc="Experience a healthier lifestyle through homes designed in harmony with nature. Organic homes prioritize sustainability, natural ventilation, environmental responsibility, and wellness-focused living."
        features={[
          "Natural Building Materials",
          "Organic Landscaping",
          "Rainwater Harvesting",
          "Green Community Planning",
          "Energy Efficient Design",
          "Healthy Living Environment",
        ]}
        cta="Explore Organic Homes"
        accent="green"
      />
      <SplitSection
        video={portfolio3dVideo.url}
        imageLeft
        bg="bg-[#F8FAFC]"
        eyebrow="3D Printed Homes"
        icon={<Cpu className="w-5 h-5" />}
        title="Next-Generation 3D Printed Homes"
        desc="Discover the future of construction through innovative 3D printing technology. Faster development, reduced material waste, and sustainable building practices make 3D printed homes a revolutionary solution for modern housing."
        features={[
          "Rapid Construction Technology",
          "Sustainable Building Process",
          "Reduced Material Waste",
          "Innovative Architecture",
          "Smart Home Compatibility",
          "Cost-Efficient Development",
        ]}
        cta="Explore 3D Printed Homes"
      />
      <SplitSection
        image={solar}
        alt="Rooftop solar community"
        imageLeft={false}
        eyebrow="Rooftop Solar"
        icon={<Sun className="w-5 h-5" />}
        title="Rooftop Solar For Smart & Sustainable Living"
        desc="Transform your property into an energy-efficient asset with rooftop solar solutions. Reduce electricity costs, improve energy independence, and contribute to a cleaner future through renewable energy integration."
        features={[
          "Clean Renewable Energy",
          "Reduced Electricity Bills",
          "Energy Independence",
          "Sustainable Lifestyle",
          "Low Maintenance Systems",
          "Long-Term Savings",
        ]}
        cta="Explore Solar Solutions"
        accent="green"
      />
      <Sustainability />
      <SplitSection
        image={innovation}
        alt="Smart city innovation"
        imageLeft
        bg="bg-[#F8FAFC]"
        eyebrow="Research & Innovation"
        icon={<Cpu className="w-5 h-5" />}
        title="Innovation Driven Development"
        desc="Land Marvel continuously explores emerging technologies, sustainable construction methods, and smart infrastructure solutions to create future-ready communities."
        features={[
          "Smart Community Planning",
          "Future Construction Technologies",
          "Energy-Efficient Infrastructure",
          "AI & Automation Integration",
          "Sustainable Urban Design",
          "Modern Living Concepts",
        ]}
        cta="Learn More"
      />
      <FutureCta />
      <Footer />
    </div>
  );
}

function Header() {
  return <SiteHeader />;
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <img src={hero} alt="Land Marvel future living" width={1920} height={1080} className="absolute inset-0 w-full h-full object-cover" />
      <div
        className="absolute inset-0"
        style={{ background: `linear-gradient(120deg, ${NAVY}EE 0%, ${NAVY}AA 45%, transparent 100%)` }}
      />
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-28 md:py-40 lg:py-48 text-white">
        <span
          className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold tracking-[0.2em] uppercase backdrop-blur-md border border-white/30"
          style={{ background: "rgba(255,255,255,0.08)" }}
        >
          <span className="w-1.5 h-1.5 rounded-full" style={{ background: GREEN }} /> Land Marvel
        </span>
        <h1 className="mt-6 font-display text-4xl sm:text-5xl lg:text-[64px] leading-[1.05] font-bold max-w-3xl">
          Building Tomorrow's <span style={{ color: GREEN }}>Living Spaces</span> Today
        </h1>
        <p className="mt-6 text-lg lg:text-xl text-white/85 max-w-2xl leading-relaxed">
          From plotted developments and residential communities to sustainable homes, rooftop solar integration, and future-ready construction
          technologies, Land Marvel creates spaces that inspire better living and long-term value.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#portfolio"
            className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold text-white shadow-xl hover:translate-y-[-2px] transition"
            style={{ background: GREEN }}
          >
            Explore Our Portfolio <ArrowRight className="w-4 h-4" />
          </a>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold border-2 border-white/60 text-white hover:bg-white hover:text-[color:var(--navy-deep)] transition"
          >
            Talk To Expert
          </Link>
        </div>
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl">
          {[
            { k: "30+", v: "Years of Trust" },
            { k: "100+", v: "Premium Projects" },
            { k: "20K+", v: "Happy Families" },
            { k: "100%", v: "Sustainability Focus" },
          ].map((s) => (
            <div
              key={s.v}
              className="rounded-2xl border border-white/20 backdrop-blur-md px-5 py-4"
              style={{ background: "rgba(255,255,255,0.08)" }}
            >
              <div className="font-display text-2xl lg:text-3xl font-bold" style={{ color: GREEN }}>
                {s.k}
              </div>
              <div className="text-xs lg:text-sm text-white/80 mt-1">{s.v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

type SplitProps = {
  image?: string;
  video?: string;
  alt?: string;
  imageLeft: boolean;
  eyebrow: string;
  icon: React.ReactNode;
  title: string;
  desc: string;
  features: string[];
  cta: string;
  bg?: string;
  accent?: "navy" | "green";
};

function SplitSection({ image, video, alt, imageLeft, eyebrow, icon, title, desc, features, cta, bg = "bg-white", accent = "navy" }: SplitProps) {
  const btnColor = accent === "green" ? GREEN : NAVY;
  return (
    <section id="portfolio" className={`${bg} py-20 lg:py-28`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-center ${imageLeft ? "" : "lg:[&>*:first-child]:order-2"}`}>
          <div className="group relative">
            <div
              className="absolute -inset-4 rounded-[28px] opacity-0 group-hover:opacity-100 transition-opacity blur-2xl"
              style={{ background: `linear-gradient(135deg, ${btnColor}33, transparent)` }}
            />
            <div className="relative overflow-hidden rounded-[24px] shadow-[0_30px_60px_-25px_rgba(10,29,99,0.35)]">
              {video ? (
                <video
                  src={video}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-[420px] lg:h-[560px] object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
              ) : (
                <img
                  src={image}
                  alt={alt}
                  width={1280}
                  height={960}
                  loading="lazy"
                  className="w-full h-[420px] lg:h-[560px] object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
              )}
            </div>
          </div>
          <div>
            <div
              className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-bold tracking-[0.18em] uppercase"
              style={{ background: `${btnColor}14`, color: btnColor }}
            >
              {icon} {eyebrow}
            </div>
            <h2 className="mt-5 font-display text-4xl sm:text-5xl lg:text-[52px] leading-[1.08] font-bold" style={{ color: NAVY }}>
              {title}
            </h2>
            <p className="mt-6 text-lg lg:text-xl text-muted-foreground leading-relaxed whitespace-pre-line">{desc}</p>
            <ul className="mt-8 grid sm:grid-cols-2 gap-x-6 gap-y-3">
              {features.map((f) => (
                <li key={f} className="flex items-start gap-3 text-[15px] text-foreground/85">
                  <span
                    className="mt-0.5 grid place-items-center w-5 h-5 rounded-full text-white shrink-0"
                    style={{ background: GREEN }}
                  >
                    <Check className="w-3 h-3" strokeWidth={3} />
                  </span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <div className="mt-10">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold text-white shadow-lg hover:translate-y-[-2px] transition"
                style={{ background: btnColor }}
              >
                {cta} <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Sustainability() {
  const pillars = [
    { icon: <Leaf className="w-6 h-6" />, label: "Green Building Practices" },
    { icon: <Sun className="w-6 h-6" />, label: "Rooftop Solar Integration" },
    { icon: <Droplets className="w-6 h-6" />, label: "Water Conservation Systems" },
    { icon: <TreePine className="w-6 h-6" />, label: "Sustainable Community Planning" },
  ];
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <img src={sustainability} alt="Sustainable township" width={1920} height={900} loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0" style={{ background: `linear-gradient(180deg, ${NAVY}EE 0%, ${NAVY}CC 100%)` }} />
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-white text-center">
        <span
          className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-bold tracking-[0.2em] uppercase backdrop-blur-md border border-white/30"
          style={{ background: "rgba(255,255,255,0.08)" }}
        >
          <Leaf className="w-4 h-4" style={{ color: GREEN }} /> Sustainability
        </span>
        <h2 className="mt-5 font-display text-4xl sm:text-5xl lg:text-[56px] font-bold max-w-3xl mx-auto leading-tight">
          Building Sustainable Communities
        </h2>
        <p className="mt-6 text-lg lg:text-xl text-white/85 max-w-3xl mx-auto leading-relaxed">
          Sustainability is embedded into every stage of development. We create environmentally responsible projects that improve quality of life
          while protecting natural resources for future generations.
        </p>
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {pillars.map((p) => (
            <div
              key={p.label}
              className="rounded-2xl backdrop-blur-md border border-white/20 p-6 text-left hover:translate-y-[-4px] transition"
              style={{ background: "rgba(255,255,255,0.08)" }}
            >
              <div
                className="w-12 h-12 grid place-items-center rounded-xl text-white"
                style={{ background: GREEN }}
              >
                {p.icon}
              </div>
              <div className="mt-4 font-display text-lg font-semibold">{p.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FutureCta() {
  return (
    <section className="relative py-24 lg:py-36 overflow-hidden">
      <img src={futureCta} alt="Future of living" width={1920} height={900} loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
      <div
        className="absolute inset-0"
        style={{ background: `linear-gradient(120deg, ${NAVY}F2 0%, ${NAVY}AA 60%, transparent 100%)` }}
      />
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-white max-w-3xl">
        <span
          className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-bold tracking-[0.2em] uppercase"
          style={{ background: GREEN, color: "white" }}
        >
          Future Of Living
        </span>
        <h2 className="mt-5 font-display text-4xl sm:text-5xl lg:text-[60px] font-bold leading-[1.05]">
          Creating The Future Of Sustainable Living
        </h2>
        <p className="mt-6 text-lg lg:text-xl text-white/85 leading-relaxed">
          From premium real estate developments to innovative living solutions, Land Marvel is shaping communities that are smarter, greener, and
          designed for future generations.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold text-white shadow-xl hover:translate-y-[-2px] transition"
            style={{ background: GREEN }}
          >
            Schedule Consultation <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold border-2 border-white/60 hover:bg-white hover:text-[color:var(--navy-deep)] transition"
          >
            Explore Opportunities
          </Link>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return <SiteFooter />;
}
