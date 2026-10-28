import { ArrowRight, CheckCircle2, Compass, Eye, Target } from "lucide-react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";

export default function About() {
  return (
    <>
      <SEO title="About Gratia Estates | Gurgaon Real Estate Advisory" description="Learn about Gratia Estates, a Gurgaon-only real estate advisory focused on pre-launch, launched and ready-to-move residential projects." path="/about" />
      <PageHero title="About Gratia Estates" crumb="About Us" />
      <section className="py-24">
        <div className="container-luxury grid gap-14 lg:grid-cols-2">
          <div><div className="gold-line mb-5"/><p className="text-[11px] font-bold uppercase tracking-[.25em] text-black/45">Who we are</p><h1 className="mt-4 font-display text-4xl sm:text-5xl">A focused real estate advisory for Gurgaon.</h1></div>
          <div className="space-y-5 text-sm leading-8 text-black/60"><p>Gratia Estates is built around one clear idea: property decisions become better when buyers get focused information instead of endless inventory.</p><p>We work across Gurgaon and cover new residential opportunities including pre-launch, launched and ready-to-move projects. We do not operate in resale inventory or outside Gurgaon.</p><p>Our role is to simplify project discovery, comparison and the next steps so buyers can make decisions with confidence.</p></div>
        </div>
      </section>

      <section className="bg-charcoal py-24 text-white"><div className="container-luxury grid gap-6 md:grid-cols-2"><div className="rounded-3xl border border-white/10 bg-white/5 p-9"><Target className="mb-6 text-gold"/><h2 className="font-display text-3xl">Our Mission</h2><p className="mt-4 text-sm leading-7 text-white/60">To make Gurgaon property discovery more transparent, focused and buyer-friendly through curated project knowledge and responsive advisory.</p></div><div className="rounded-3xl border border-white/10 bg-white/5 p-9"><Eye className="mb-6 text-gold"/><h2 className="font-display text-3xl">Our Vision</h2><p className="mt-4 text-sm leading-7 text-white/60">To become a trusted Gurgaon real estate advisory known for premium project knowledge, professional service and long-term client relationships.</p></div></div></section>

      <section className="py-24"><div className="container-luxury"><div className="max-w-2xl"><div className="gold-line mb-5"/><p className="text-[11px] font-bold uppercase tracking-[.25em] text-black/45">How we work</p><h2 className="mt-4 font-display text-4xl sm:text-5xl">A simple, buyer-first process.</h2></div><div className="mt-12 grid gap-5 md:grid-cols-4">{[
        ["01","Discover","Understand your budget, location, timeline and preferences."],
        ["02","Curate","Shortlist Gurgaon projects that fit your actual requirement."],
        ["03","Compare","Discuss project stage, developer, specifications, connectivity and value."],
        ["04","Decide","Coordinate the next steps with clarity and without unnecessary noise."]
      ].map(([n,t,d])=><div key={n} className="rounded-2xl border border-black/10 bg-white p-7"><span className="font-display text-3xl text-gold">{n}</span><h3 className="mt-7 font-display text-2xl">{t}</h3><p className="mt-3 text-sm leading-6 text-black/55">{d}</p></div>)}</div></div></section>

      <section className="bg-ivory py-20"><div className="container-luxury flex flex-col gap-6 md:flex-row md:items-center md:justify-between"><div><h2 className="font-display text-4xl">Ready to explore Gurgaon?</h2><p className="mt-2 text-sm text-black/55">Tell us what you are looking for and we will help you shortlist.</p></div><Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-charcoal px-6 py-4 text-xs font-bold uppercase tracking-[.15em] text-white">Talk to us <ArrowRight size={16}/></Link></div></section>
    </>
  );
}

function PageHero({ title, crumb }) {
  return <section className="bg-charcoal py-20 text-white"><div className="container-luxury"><div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[.2em] text-white/45"><Link to="/">Home</Link><span>/</span><span className="text-gold">{crumb}</span></div><h1 className="mt-6 font-display text-5xl sm:text-6xl">{title}</h1></div></section>;
}
