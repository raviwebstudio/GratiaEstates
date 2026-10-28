import { ArrowLeft, Check, MapPin, MessageCircle } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import SEO from "../components/SEO";
import { projects } from "../data/projects";

export default function ProjectDetails() {
  const { slug } = useParams();
  const project = projects.find(p => p.slug === slug);
  if (!project) return <div className="container-luxury py-32"><h1 className="font-display text-4xl">Project not found</h1><Link to="/projects" className="mt-6 inline-block text-gold">Back to projects</Link></div>;

  const whatsapp = `https://wa.me/919109776155?text=${encodeURIComponent(`Hello Gratia Estates, I want details about ${project.name} in ${project.location}.`)}`;
  return (
    <>
      <SEO title={`${project.name} | ${project.location} | Gratia Estates`} description={`${project.name} by ${project.developer}, ${project.location}. Explore project status, highlights and enquire with Gratia Estates.`} path={`/projects/${project.slug}`} image={project.image} />
      <section className="bg-charcoal py-10 text-white"><div className="container-luxury"><Link to="/projects" className="inline-flex items-center gap-2 text-xs uppercase tracking-[.15em] text-white/60 hover:text-gold"><ArrowLeft size={15}/> All Projects</Link></div></section>
      <section className="pb-24"><div className="container-luxury grid gap-10 pt-10 lg:grid-cols-[1.25fr_.75fr]">
        <div><img src={project.image} alt={`${project.name} luxury residential project in ${project.location}`} className="aspect-[16/10] w-full rounded-3xl object-cover"/><div className="mt-10"><p className="text-[11px] font-bold uppercase tracking-[.2em] text-gold">{project.status}</p><h1 className="mt-3 font-display text-5xl">{project.name}</h1><p className="mt-3 flex items-center gap-2 text-sm text-black/55"><MapPin size={16}/> {project.location}</p><p className="mt-7 max-w-3xl text-sm leading-8 text-black/60">{project.description}</p></div></div>
        <aside className="h-fit rounded-3xl bg-charcoal p-8 text-white lg:sticky lg:top-28"><p className="text-[10px] font-bold uppercase tracking-[.2em] text-white/40">Starting price</p><p className="mt-2 font-display text-3xl">{project.price}</p><div className="my-7 border-t border-white/10"/><p className="text-sm text-white/60">Developer</p><p className="mt-1 font-semibold">{project.developer}</p><a href={whatsapp} target="_blank" rel="noreferrer" className="mt-8 flex items-center justify-center gap-2 rounded-full bg-gold px-5 py-4 text-xs font-bold uppercase tracking-[.15em] text-charcoal"><MessageCircle size={17}/> Enquire on WhatsApp</a><Link to="/contact" className="mt-3 block rounded-full border border-white/20 px-5 py-4 text-center text-xs font-bold uppercase tracking-[.15em] hover:bg-white hover:text-charcoal">Request a Callback</Link></aside>
      </div></section>
      <section className="bg-ivory py-20"><div className="container-luxury"><h2 className="font-display text-4xl">Project Highlights</h2><div className="mt-8 grid gap-4 md:grid-cols-3">{project.highlights.map(h=><div key={h} className="flex gap-3 rounded-2xl bg-white p-6"><Check className="text-gold" size={19}/><span className="text-sm">{h}</span></div>)}</div></div></section>
    </>
  );
}
