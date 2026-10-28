import { ArrowRight, Check, ChevronRight, Quote, ShieldCheck, Sparkles, TrendingUp, Users } from "lucide-react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";

export default function Home() {
  const featured = projects.slice(0, 8);
  return (
    <>
      <SEO
        title="Gratia Estates | Premium Real Estate Advisory in Gurgaon"
        description="Discover premium residential projects in Gurgaon with Gratia Estates. Explore pre-launch, launched and ready-to-move properties with trusted local advisory."
      />

      <section className="relative min-h-[690px] overflow-hidden bg-charcoal">
        <img src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=2200&q=90" alt="Luxury residential architecture in Gurgaon" className="absolute inset-0 h-full w-full object-cover" />
        <div className="hero-overlay absolute inset-0" />
        <div className="container-luxury relative flex min-h-[690px] items-center py-20">
          <div className="max-w-3xl text-white">
            <p className="mb-6 text-[11px] font-bold uppercase tracking-[.34em] text-gold">Gurgaon · Premium Real Estate Advisory</p>
            <h1 className="font-display text-5xl leading-[1.05] sm:text-6xl lg:text-7xl">Find the right address for your next chapter.</h1>
            <p className="mt-7 max-w-2xl text-base leading-8 text-white/75 sm:text-lg">
              Curated residential opportunities across Gurgaon — from pre-launch and new launches to premium ready-to-move homes.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link to="/projects" className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-4 text-xs font-bold uppercase tracking-[.15em] text-charcoal transition hover:bg-white">
                Explore Projects <ArrowRight size={16}/>
              </Link>
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-4 text-xs font-bold uppercase tracking-[.15em] text-white hover:bg-white hover:text-charcoal">
                Talk to an Advisor
              </Link>
            </div>
            <div className="mt-12 grid max-w-xl grid-cols-3 gap-5 border-t border-white/20 pt-7">
              <div><strong className="font-display text-3xl">8+</strong><span className="mt-1 block text-[10px] uppercase tracking-[.15em] text-white/55">Featured Projects</span></div>
              <div><strong className="font-display text-3xl">100%</strong><span className="mt-1 block text-[10px] uppercase tracking-[.15em] text-white/55">Gurgaon Focus</span></div>
              <div><strong className="font-display text-3xl">1:1</strong><span className="mt-1 block text-[10px] uppercase tracking-[.15em] text-white/55">Advisory</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-black/10 bg-white">
        <div className="container-luxury grid gap-8 py-10 md:grid-cols-3">
          {[
            [ShieldCheck, "Trust", "Built on integrity and transparent communication."],
            [Sparkles, "Premium", "Curated properties aligned to your goals."],
            [TrendingUp, "Local Expertise", "Gurgaon-only market knowledge and project insight."]
          ].map(([Icon, title, text]) => (
            <div key={title} className="flex gap-4"><Icon className="text-gold" size={27}/><div><h2 className="font-display text-xl">{title}</h2><p className="mt-1 text-sm leading-6 text-black/55">{text}</p></div></div>
          ))}
        </div>
      </section>

      <section className="py-24">
        <div className="container-luxury">
          <div className="mb-12 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div><div className="gold-line mb-5"/><p className="text-[11px] font-bold uppercase tracking-[.25em] text-black/45">Curated opportunities</p><h2 className="mt-3 font-display text-4xl sm:text-5xl">Featured Gurgaon Projects</h2></div>
            <Link to="/projects" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[.15em] text-charcoal hover:text-gold">View all projects <ChevronRight size={16}/></Link>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {featured.map((project) => <ProjectCard key={project.slug} project={project} />)}
          </div>
        </div>
      </section>

      <section className="bg-charcoal py-24 text-white">
        <div className="container-luxury grid items-center gap-14 lg:grid-cols-[.9fr_1.1fr]">
          <div>
            <div className="gold-line mb-5"/>
            <p className="text-[11px] font-bold uppercase tracking-[.25em] text-white/50">About Gratia Estates</p>
            <h2 className="mt-4 font-display text-4xl leading-tight sm:text-5xl">One city. Deep expertise. Better decisions.</h2>
            <p className="mt-6 text-sm leading-8 text-white/65">
              Gratia Estates is a Gurgaon-focused real estate advisory. We help buyers navigate new launches, pre-launch opportunities, launched developments and ready-to-move residences — with practical project comparisons and a clear buying journey.
            </p>
            <Link to="/about" className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-xs font-bold uppercase tracking-[.15em] hover:bg-white hover:text-charcoal">Know more <ArrowRight size={15}/></Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {["Gurgaon-only focus", "Project-level comparison", "Buyer-first guidance", "No resale inventory"].map((item) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-white/5 p-6"><Check className="mb-5 text-gold" size={22}/><h3 className="font-display text-2xl">{item}</h3><p className="mt-2 text-sm leading-6 text-white/55">A focused approach designed around clarity, fit and long-term value.</p></div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container-luxury grid gap-14 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="gold-line mb-5"/><p className="text-[11px] font-bold uppercase tracking-[.25em] text-black/45">Our approach</p>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl">Your property. Our expertise.</h2>
            <div className="mt-8 space-y-6">
              {[
                ["01", "Understand", "We learn your budget, preferred location, lifestyle needs and timeline."],
                ["02", "Shortlist", "We compare suitable Gurgaon projects on location, developer, product and value."],
                ["03", "Guide", "We help you move from enquiry to site visit and informed decision-making."]
              ].map(([n,t,d]) => <div className="flex gap-5" key={n}><span className="font-display text-2xl text-gold">{n}</span><div><h3 className="font-semibold">{t}</h3><p className="mt-1 text-sm leading-6 text-black/55">{d}</p></div></div>)}
            </div>
          </div>
          <div className="overflow-hidden rounded-3xl"><img src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1400&q=85" alt="Modern premium apartment interior" className="h-[480px] w-full object-cover" loading="lazy"/></div>
        </div>
      </section>

      <section className="bg-ivory py-24">
        <div className="container-luxury">
          <div className="mx-auto max-w-2xl text-center"><Quote className="mx-auto mb-5 text-gold" size={32}/><h2 className="font-display text-4xl">What our clients value</h2><p className="mt-4 text-sm leading-7 text-black/55">Clear conversations, curated options and a local perspective that keeps the buying journey focused.</p></div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              ["“Professional from the first call.”", "The team understood what we wanted and only showed relevant Gurgaon projects.", "Home Buyer"],
              ["“No pressure, just clarity.”", "We appreciated the project comparison and straightforward guidance before our site visit.", "Property Investor"],
              ["“Strong local knowledge.”", "Their Gurgaon-only focus made it much easier to narrow down our options.", "Residential Buyer"]
            ].map(([quote,name,role]) => <div key={name} className="rounded-2xl bg-white p-7 shadow-luxury"><p className="font-display text-xl leading-8">{quote}</p><div className="mt-8 border-t border-black/10 pt-5"><strong className="block text-sm">{name}</strong><span className="text-xs text-black/45">{role}</span></div></div>)}
          </div>
        </div>
      </section>

      <section className="bg-gold py-20">
        <div className="container-luxury flex flex-col items-start justify-between gap-7 md:flex-row md:items-center">
          <div><p className="text-[11px] font-bold uppercase tracking-[.25em] text-charcoal/55">Start your search</p><h2 className="mt-2 font-display text-4xl text-charcoal">Looking for a property in Gurgaon?</h2></div>
          <Link to="/contact" className="rounded-full bg-charcoal px-7 py-4 text-xs font-bold uppercase tracking-[.15em] text-white hover:bg-white hover:text-charcoal">Speak with an advisor</Link>
        </div>
      </section>
    </>
  );
}
