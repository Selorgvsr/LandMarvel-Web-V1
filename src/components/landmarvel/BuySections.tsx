import { Link } from "@tanstack/react-router";
import {
  TrendingUp, MapPin, Building, ShieldCheck, Sprout, Gem,
  Home, Building2, Briefcase, Train, Star, ArrowRight, Calendar,
  Users, TreePine, Car, Lightbulb, Droplets, Map, Phone, CheckCircle2,
  Factory, ShoppingBag, Hotel, Award, Eye,
} from "lucide-react";
import { Button } from "@/components/ui/button";

import landAerial from "@/assets/buy-land-aerial.jpg";
import landSiteVisitAsset from "@/assets/land-site-visit.jpg.asset.json";
import resFamily from "@/assets/buy-res-family.jpg.asset.json";
import comHero from "@/assets/buy-com-hero.jpg.asset.json";
import comSuccess from "@/assets/buy-com-success.jpg";
import buyCta from "@/assets/buy-cta.jpg";

import plot2 from "@/assets/plot-2.jpg";
import res1 from "@/assets/res-1.jpg";
import res2 from "@/assets/res-2.jpg";
import res4 from "@/assets/res-4.jpg";
import com1 from "@/assets/com-1.jpg";
import com2 from "@/assets/com-2.jpg";
import com3 from "@/assets/com-3.jpg";
import com4 from "@/assets/com-4.jpg";

/* ------------------------------ Shared bits ------------------------------ */

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block text-xs font-semibold tracking-[0.25em] uppercase text-[var(--gold)]">
      {children}
    </span>
  );
}

function SectionHeading({ eyebrow, title, desc, center = false }: { eyebrow: string; title: React.ReactNode; desc?: string; center?: boolean }) {
  return (
    <div className={`max-w-3xl ${center ? "mx-auto text-center" : ""}`}>
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-primary leading-tight">{title}</h2>
      {desc && <p className="mt-5 text-base sm:text-lg text-muted-foreground leading-relaxed">{desc}</p>}
    </div>
  );
}

type Feature = { icon: React.ReactNode; title: string; desc: string };

function FeatureCard({ f }: { f: Feature }) {
  return (
    <div className="group bg-white/70 backdrop-blur border border-border rounded-[20px] p-6 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-elegant)] hover:-translate-y-1 transition-all duration-300">
      <div className="w-12 h-12 rounded-xl bg-[var(--gold)]/10 text-[var(--gold)] flex items-center justify-center group-hover:bg-[var(--gold)] group-hover:text-primary transition-colors">
        {f.icon}
      </div>
      <h3 className="mt-4 font-display text-lg font-bold text-primary">{f.title}</h3>
      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
    </div>
  );
}

/* =============================== LAND SECTION =============================== */

const landFeatures: Feature[] = [
  { icon: <TrendingUp className="w-6 h-6" />, title: "High Appreciation Potential", desc: "Land values typically increase as surrounding infrastructure and urban development expand." },
  { icon: <MapPin className="w-6 h-6" />, title: "Prime Growth Locations", desc: "Carefully selected locations near highways, business hubs, educational institutions, and upcoming developments." },
  { icon: <Building className="w-6 h-6" />, title: "Infrastructure Driven Value", desc: "Roads, metro connectivity, airports, and industrial corridors contribute to stronger long-term returns." },
  { icon: <ShieldCheck className="w-6 h-6" />, title: "Secure Asset Ownership", desc: "Land is a tangible asset that offers stability and long-term wealth preservation." },
  { icon: <Sprout className="w-6 h-6" />, title: "Future Development Opportunities", desc: "Ideal for residential projects, commercial developments, villas, and investment holdings." },
  { icon: <Gem className="w-6 h-6" />, title: "Limited Supply, Growing Demand", desc: "As urban areas expand, quality land becomes increasingly scarce and valuable." },
];

const locationPoints = [
  "Excellent Road Connectivity",
  "Near Business & IT Corridors",
  "Access to Schools & Hospitals",
  "Future Infrastructure Projects",
  "Growing Residential Demand",
  "Strong Investment Potential",
];

const amenities = [
  { icon: <Car className="w-5 h-5" />, label: "Wide Internal Roads" },
  { icon: <Lightbulb className="w-5 h-5" />, label: "Electricity Infrastructure" },
  { icon: <Droplets className="w-5 h-5" />, label: "Water Supply Systems" },
  { icon: <TreePine className="w-5 h-5" />, label: "Landscaped Open Spaces" },
  { icon: <ShieldCheck className="w-5 h-5" />, label: "Gated Community Security" },
  { icon: <Map className="w-5 h-5" />, label: "Clear Plot Demarcation" },
  { icon: <Sprout className="w-5 h-5" />, label: "Green Environment" },
  { icon: <Building2 className="w-5 h-5" />, label: "Planned Community Layout" },
];

export function LandInvestmentSection() {
  return (
    <section className="py-20 sm:py-24 section-navy">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Intro: image left, content right */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="relative group overflow-hidden rounded-[24px] shadow-[var(--shadow-elegant)]">
            <img src={landAerial} alt="Aerial view of plotted township" width={1024} height={1024} loading="lazy"
              className="w-full h-[480px] object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute bottom-5 left-5 bg-white/90 backdrop-blur rounded-2xl px-5 py-3 shadow-md">
              <div className="text-xs uppercase tracking-wider !text-blue-600">Land Marvel</div>
              <div className="font-display font-bold !text-blue-600">Strategic Land Investments</div>
            </div>
          </div>
          <div>
            <SectionHeading
              eyebrow="Smart Land Investments"
              title={<>Invest In Land. <span className="text-[var(--gold)]">Invest In The Future.</span></>}
              desc="Land remains one of the most secure and high-appreciating assets for long-term wealth creation. With urban expansion, infrastructure growth, and increasing demand for strategically located properties, investing in land offers unmatched potential for capital appreciation."
            />
            <div className="mt-6 p-6 bg-[var(--gold)]/5 border-l-4 border-[var(--gold)] rounded-r-xl">
              <h3 className="font-display text-lg font-bold text-primary">Why Land Is A Powerful Investment</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Unlike buildings, land does not depreciate over time. As cities expand and infrastructure develops,
                strategically located land continues to appreciate and generate long-term value.
              </p>
            </div>
          </div>
        </div>

        {/* Feature cards */}
        <div className="mt-16">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {landFeatures.map((f) => <FeatureCard key={f.title} f={f} />)}
          </div>
        </div>

        {/* Location matters: content left + image right */}
        <div className="mt-20 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div>
            <SectionHeading
              eyebrow="Location Matters"
              title={<>Buy Land Where <span className="text-[var(--gold)]">Growth Is Happening</span></>}
              desc="Successful land investment starts with location. Land Marvel focuses on emerging growth corridors, infrastructure-backed regions, and high-demand zones where future development is expected to drive appreciation."
            />
            <ul className="mt-6 grid sm:grid-cols-2 gap-3">
              {locationPoints.map((p) => (
                <li key={p} className="flex items-start gap-2 text-sm text-foreground">
                  <CheckCircle2 className="w-5 h-5 text-[var(--gold)] flex-shrink-0 mt-0.5" />
                  {p}
                </li>
              ))}
            </ul>
          </div>
          <div className="order-first lg:order-last relative overflow-hidden rounded-[24px] shadow-[var(--shadow-elegant)] group">
            <img src={plot2} alt="Growth corridor location" width={1024} height={768} loading="lazy"
              className="w-full h-[440px] object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
          </div>
        </div>

        {/* Plotted communities */}
        <div className="mt-20">
          <SectionHeading
            eyebrow="Well-Planned Plotted Communities"
            title={<>Designed For <span className="text-[var(--gold)]">Better Living & Better Returns</span></>}
            desc="Every plotted development is planned with modern infrastructure, organized layouts, and future-ready amenities to enhance both lifestyle and investment value."
            center
          />
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {amenities.map((a) => (
              <div key={a.label} className="bg-card border border-border rounded-2xl p-5 text-center hover:border-[var(--gold)] hover:-translate-y-1 transition-all">
                <div className="w-10 h-10 mx-auto rounded-lg bg-primary/5 text-primary flex items-center justify-center">{a.icon}</div>
                <div className="mt-3 text-sm font-semibold text-primary leading-snug">{a.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Site visit experience */}
        <div className="mt-20 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="relative overflow-hidden rounded-[24px] shadow-[var(--shadow-elegant)] group">
            <img src={landSiteVisitAsset.url} alt="Property consultant on site visit" width={1024} height={1024} loading="lazy"
              className="w-full h-[440px] object-cover group-hover:scale-105 transition-transform duration-700" />
          </div>
          <div>
            <SectionHeading
              eyebrow="Site Visit Experience"
              title={<>Experience The Location <span className="text-[var(--gold)]">Before You Invest</span></>}
              desc="We encourage investors to visit project locations and understand the surrounding infrastructure, future growth opportunities, and investment potential firsthand. Our experts provide complete guidance to help you make confident and informed decisions."
            />
            <div className="mt-7">
              <Button asChild size="lg" className="bg-[image:var(--gradient-primary)] hover:opacity-90 h-13 px-7 rounded-xl">
                <Link to="/contact"><Calendar className="mr-2 w-4 h-4" /> Book Site Visit</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Premium CTA */}
        <div className="mt-20 relative overflow-hidden rounded-[28px] shadow-[var(--shadow-elegant)]">
          <img src={buyCta} alt="Aerial sunset township" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/70" />
          <div className="relative px-6 sm:px-12 py-16 sm:py-20 text-primary-foreground">
            <div className="max-w-2xl">
              <Eyebrow>Land Investment</Eyebrow>
              <h3 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-bold">
                Secure Your Place In <span className="text-[var(--gold)]">Tomorrow's Growth Story</span>
              </h3>
              <p className="mt-4 text-white/85 text-lg">
                Explore premium plots in strategic locations and build long-term wealth through smart land investments with Land Marvel.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button asChild size="lg" className="bg-[var(--gold)] text-primary hover:bg-[var(--gold)]/90 h-13 px-7 rounded-xl">
                  <a href="#plots">Explore Plot Project <ArrowRight className="ml-2 w-4 h-4" /></a>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white/40 bg-white/10 text-white hover:bg-white/20 hover:text-white h-13 px-7 rounded-xl">
                  <Link to="/contact"><Phone className="mr-2 w-4 h-4" />Talk To Investment Expert</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ========================== RESIDENTIAL SECTION ========================== */

type LivingCard = {
  img: string;
  title: string;
  desc: string;
  highlights: string[];
  cta: string;
  link: string;
};

const livingCards: LivingCard[] = [
  {
    img: res1,
    title: "Residential Communities",
    desc: "Designed for comfortable family living, our residential communities provide a secure environment with open spaces, modern infrastructure, and easy access to schools, hospitals, shopping centers, and daily conveniences.",
    highlights: ["Secure Gated Communities", "Prime Locations", "Family-Friendly Environment", "Future Appreciation Potential"],
    cta: "Explore Residential Project",
    link: "#residential",
  },
  {
    img: res2,
    title: "Modern Apartments",
    desc: "Experience contemporary urban living with thoughtfully designed apartments that offer convenience, comfort, and community living. Ideal for professionals, families, and investors seeking quality homes in strategic locations.",
    highlights: ["1,2, 3 & 4 BHK Options", "Premium Amenities", "Smart Layouts", "Excellent Connectivity"],
    cta: "View Apartments",
    link: "#residential",
  },
  {
    img: res4,
    title: "Luxury Villas",
    desc: "Enjoy privacy, exclusivity, and spacious living with premium villas designed for modern lifestyles. Experience independent living combined with world-class amenities and a prestigious address.",
    highlights: ["Spacious Living Areas", "Private Outdoor Spaces", "Premium Community Facilities", "High Investment Value"],
    cta: "Explore Villas",
    link: "#residential",
  },
];

const homeFeatures: Feature[] = [
  { icon: <Home className="w-6 h-6" />, title: "Premium Construction Quality", desc: "Built to last with engineered materials and trusted construction standards." },
  { icon: <TreePine className="w-6 h-6" />, title: "Green Open Spaces", desc: "Landscaped parks, gardens, and walking trails for a healthier lifestyle." },
  { icon: <Car className="w-6 h-6" />, title: "Excellent Connectivity", desc: "Quick access to highways, metro, schools, hospitals, and workplaces." },
  { icon: <Building2 className="w-6 h-6" />, title: "Modern Amenities", desc: "Clubhouse, pool, gym, kids' play areas and family-focused facilities." },
  { icon: <ShieldCheck className="w-6 h-6" />, title: "Secure Communities", desc: "24×7 gated security with smart access and CCTV surveillance." },
  { icon: <TrendingUp className="w-6 h-6" />, title: "Strong Investment Potential", desc: "Locations chosen for sustained demand and long-term appreciation." },
];

export function ResidentialLivingSection() {
  return (
    <section className="py-20 sm:py-24 section-gold">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Premium Residential Living"
          title={<>Find The Perfect Home For Every Lifestyle</>}
          desc="Whether you're searching for a modern apartment, an independent villa, or a family-friendly residential community, Land Marvel offers thoughtfully designed living spaces that combine comfort, convenience, and long-term value."
          center
        />

        {/* 3 lifestyle cards */}
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {livingCards.map((c) => (
            <article key={c.title} className="group bg-white rounded-[24px] overflow-hidden shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-elegant)] hover:-translate-y-2 transition-all duration-500 border border-border flex flex-col">
              <div className="relative overflow-hidden h-[260px]">
                <img src={c.img} alt={c.title} width={1024} height={768} loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
              </div>
              <div className="p-7 flex flex-col flex-1">
                <h3 className="font-display text-2xl font-bold text-primary">{c.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
                <ul className="mt-5 space-y-2">
                  {c.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2 text-sm text-foreground">
                      <CheckCircle2 className="w-4 h-4 text-[var(--gold)] flex-shrink-0 mt-0.5" />
                      {h}
                    </li>
                  ))}
                </ul>
                <Button asChild className="mt-6 bg-[image:var(--gradient-primary)] hover:opacity-90 h-12 rounded-xl">
                  <a href={c.link}>{c.cta} <ArrowRight className="ml-2 w-4 h-4" /></a>
                </Button>
              </div>
            </article>
          ))}
        </div>

        {/* Why choose Land Marvel homes */}
        <div className="mt-20 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="relative overflow-hidden rounded-[24px] shadow-[var(--shadow-elegant)] group">
            <img src={resFamily.url} alt="Happy family in front of a modern home" width={1024} height={1024} loading="lazy"
              className="w-full h-[480px] object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute bottom-5 left-5 bg-white/90 backdrop-blur rounded-2xl px-5 py-3 shadow-md flex items-center gap-3">
              <Users className="w-5 h-5 text-[var(--gold)]" />
              <div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">Trusted by</div>
                <div className="font-display font-bold text-primary">20,000+ Happy Families</div>
              </div>
            </div>
          </div>
          <div>
            <SectionHeading
              eyebrow="Why Choose Land Marvel Homes"
              title={<>More Than A Home – A Better Way Of Living</>}
              desc="At Land Marvel, every residential development is built with a focus on quality, functionality, and long-term value. From premium apartments and independent villas to integrated residential communities, our projects are designed to enhance everyday living."
            />
            <div className="mt-7 grid sm:grid-cols-2 gap-4">
              {homeFeatures.map((f) => (
                <div key={f.title} className="flex items-start gap-3 p-4 bg-white border border-border rounded-2xl hover:shadow-md transition-shadow">
                  <div className="w-10 h-10 rounded-lg bg-[var(--gold)]/10 text-[var(--gold)] flex items-center justify-center flex-shrink-0">{f.icon}</div>
                  <div>
                    <div className="font-semibold text-primary text-sm">{f.title}</div>
                    <div className="text-xs text-muted-foreground mt-0.5 leading-relaxed">{f.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================== COMMERCIAL SECTION =========================== */

const comFeatures: Feature[] = [
  { icon: <TrendingUp className="w-6 h-6" />, title: "High Return Potential", desc: "Commercial assets often provide attractive rental income and long-term capital appreciation." },
  { icon: <MapPin className="w-6 h-6" />, title: "Prime Business Locations", desc: "Strategically located near highways, IT corridors, metro connectivity, and business hubs." },
  { icon: <Briefcase className="w-6 h-6" />, title: "Corporate Ready Infrastructure", desc: "Designed to support modern businesses with world-class facilities and operational convenience." },
  { icon: <Train className="w-6 h-6" />, title: "Excellent Connectivity", desc: "Easy access to airports, railway stations, major roads, and urban transportation networks." },
  { icon: <ShieldCheck className="w-6 h-6" />, title: "Secure Investments", desc: "Legally verified properties with transparent documentation and professional support." },
  { icon: <Star className="w-6 h-6" />, title: "Future Growth Corridors", desc: "Located in rapidly developing commercial and industrial zones with strong growth potential." },
];

const comTypes = [
  { icon: <Building2 className="w-5 h-5" />, img: com1, title: "Office Spaces", desc: "Modern office environments designed for startups, SMEs, and large enterprises seeking professional workspaces." },
  { icon: <ShoppingBag className="w-5 h-5" />, img: com2, title: "Retail & Shopping Spaces", desc: "Retail outlets, showrooms, and shopping destinations in high-footfall commercial zones." },
  { icon: <Factory className="w-5 h-5" />, img: com3, title: "Industrial & Warehousing", desc: "Industrial facilities and logistics spaces supporting manufacturing, storage, and distribution operations." },
  { icon: <Hotel className="w-5 h-5" />, img: com4, title: "Hospitality & Mixed-Use", desc: "Hotels, serviced apartments, and mixed-use commercial developments in strategic locations." },
];

const comStats = [
  { value: "200+", label: "Projects Delivered" },
  { value: "Prime", label: "Commercial Locations" },
  { value: "Trusted", label: "Development Partner" },
  { value: "Strong", label: "Investment Potential" },
];

export function CommercialSolutionsSection() {
  return (
    <section className="py-20 sm:py-24 section-navy">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Intro: image left, content right */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="relative overflow-hidden rounded-[24px] shadow-[var(--shadow-elegant)] group">
            <img src={comHero.url} alt="Modern commercial business district" width={1024} height={1024} loading="lazy"
              className="w-full h-[500px] object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute top-5 right-5 bg-[var(--gold)] text-primary px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wide shadow-md">
              Commercial Real Estate
            </div>
          </div>
          <div>
            <SectionHeading
              eyebrow="Commercial Real Estate Solutions"
              title={<>Build Your Business. <span className="text-[var(--gold)]">Expand Your Future.</span></>}
              desc="Strategic commercial spaces are the foundation of successful businesses and profitable investments. Land Marvel offers premium commercial properties designed to support growth, visibility, operational efficiency, and long-term returns."
            />
            <p className="mt-4 text-base text-muted-foreground leading-relaxed">
              Whether you are an entrepreneur, investor, retailer, corporate organization, or industrial operator, our commercial developments provide the right environment for business success.
            </p>
            <div className="mt-6 p-6 bg-primary/5 border-l-4 border-primary rounded-r-xl">
              <h3 className="font-display text-lg font-bold text-primary">Why Invest In Commercial Real Estate?</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Commercial properties offer stronger rental yields, long-term appreciation, and stable business demand compared to traditional investments.
                Land Marvel helps businesses and investors identify high-growth commercial opportunities in strategic locations with excellent connectivity.
              </p>
            </div>
          </div>
        </div>

        {/* Business advantages */}
        <div className="mt-16">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {comFeatures.map((f) => <FeatureCard key={f.title} f={f} />)}
          </div>
        </div>

        {/* Commercial property types */}
        <div className="mt-20">
          <SectionHeading
            eyebrow="Property Types"
            title={<>Explore <span className="text-[var(--gold)]">Commercial Opportunities</span></>}
            center
          />
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {comTypes.map((t) => (
              <article key={t.title} className="group bg-card rounded-[20px] overflow-hidden shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-elegant)] hover:-translate-y-1 transition-all duration-300 border border-border">
                <div className="relative h-[200px] overflow-hidden">
                  <img src={t.img} alt={t.title} width={1024} height={768} loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-primary/20 to-transparent" />
                  <div className="absolute top-4 left-4 w-10 h-10 rounded-xl bg-[var(--gold)] text-primary flex items-center justify-center shadow-md">
                    {t.icon}
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-display text-lg font-bold text-primary">{t.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{t.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      {/* Investment benefits — dark navy section */}
      <div className="mt-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="text-center max-w-3xl mx-auto">
            <Eyebrow>Investment Benefits</Eyebrow>
            <h3 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-bold whitespace-pre-line">
              Why Businesses Choose{"\u00a0"}<br />
              <span className="text-[var(--gold)]">Land Marvel</span>
            </h3>
            <p className="mt-5 text-white/80 text-lg">
              We combine location intelligence, market expertise, quality development, and customer-focused solutions to create commercial assets that generate value for businesses and investors alike.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-6">
            {comStats.map((s) => (
              <div key={s.label} className="text-center bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-7 hover:border-[var(--gold)]/50 hover:bg-white/10 transition-all">
                <div className="font-display text-4xl sm:text-5xl font-bold text-[var(--gold)]">{s.value}</div>
                <div className="mt-2 text-sm uppercase tracking-wider text-white/80">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Success story */}
        <div className="mt-20 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div>
            <SectionHeading
              eyebrow="Success Story"
              title={<>Creating Spaces Where <span className="text-[var(--gold)]">Businesses Thrive</span></>}
              desc="Our commercial developments are designed to support productivity, visibility, customer engagement, and sustainable growth. From premium office environments to thriving retail destinations, every project reflects our commitment to excellence and innovation."
            />
            <div className="mt-7 flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-[image:var(--gradient-primary)] hover:opacity-90 h-13 px-7 rounded-xl">
                <a href="#commercial"><Eye className="mr-2 w-4 h-4" />Explore Commercial Project</a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground h-13 px-7 rounded-xl">
                <Link to="/contact"><Calendar className="mr-2 w-4 h-4" />Schedule Business Consultation</Link>
              </Button>
            </div>
          </div>
          <div className="order-first lg:order-last relative overflow-hidden rounded-[24px] shadow-[var(--shadow-elegant)] group">
            <img src={comSuccess} alt="Commercial business district" width={1024} height={1024} loading="lazy"
              className="w-full h-[460px] object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute bottom-5 right-5 bg-white/90 backdrop-blur rounded-2xl px-5 py-3 shadow-md flex items-center gap-3">
              <Award className="w-5 h-5 text-[var(--gold)]" />
              <div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">Award Winning</div>
                <div className="font-display font-bold text-primary">Commercial Developer</div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA banner */}
        <div className="mt-20 relative overflow-hidden rounded-[28px] shadow-[var(--shadow-elegant)]">
          <img src={buyCta} alt="City skyline at sunset" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/60" />
          <div className="relative px-6 sm:px-12 py-16 sm:py-20 text-primary-foreground">
            <div className="max-w-2xl">
              <Eyebrow>Commercial Investment</Eyebrow>
              <h3 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-bold">
                Looking For The Right <span className="text-[var(--gold)]">Commercial Investment?</span>
              </h3>
              <p className="mt-4 text-white/85 text-lg">
                Discover office spaces, retail destinations, industrial facilities, and business opportunities designed to help your enterprise grow and succeed.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button asChild size="lg" className="bg-[var(--gold)] text-primary hover:bg-[var(--gold)]/90 h-13 px-7 rounded-xl">
                  <Link to="/contact"><Phone className="mr-2 w-4 h-4" />Talk To Commercial Expert</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white/40 bg-white/10 text-white hover:bg-white/20 hover:text-white h-13 px-7 rounded-xl">
                  <a href="#commercial">View Commercial Project <ArrowRight className="ml-2 w-4 h-4" /></a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
