import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import { blogs } from "../data/blogs";

export default function Blog() {
  return (
    <>
      <SEO title="Gurgaon Real Estate Blog | Gratia Estates" description="Read Gurgaon real estate insights, buying guides and location-focused property articles from Gratia Estates." path="/blog" />
      <section className="bg-charcoal py-20 text-white"><div className="container-luxury"><div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[.2em] text-white/45"><Link to="/">Home</Link><span>/</span><span className="text-gold">Blog</span></div><h1 className="mt-6 font-display text-5xl sm:text-6xl">Gurgaon Property Insights</h1></div></section>
      <section className="py-20"><div className="container-luxury grid gap-7 md:grid-cols-2 lg:grid-cols-3">{blogs.map(post=><article key={post.slug} className="overflow-hidden rounded-2xl bg-white shadow-luxury ring-1 ring-black/5"><Link to={`/blog/${post.slug}`}><img src={post.image} alt={post.title} className="aspect-[16/10] w-full object-cover transition duration-500 hover:scale-[1.02]" loading="lazy"/></Link><div className="p-7"><p className="text-[10px] font-bold uppercase tracking-[.18em] text-gold">{post.category} · {post.date}</p><h2 className="mt-3 font-display text-2xl leading-tight">{post.title}</h2><p className="mt-4 text-sm leading-7 text-black/55">{post.excerpt}</p><Link to={`/blog/${post.slug}`} className="mt-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[.14em]">Read article <ArrowRight size={15}/></Link></div></article>)}</div></section>
    </>
  );
}
