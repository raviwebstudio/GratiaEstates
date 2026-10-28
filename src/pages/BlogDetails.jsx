import { ArrowLeft } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import SEO from "../components/SEO";
import { blogs } from "../data/blogs";

export default function BlogDetails() {
  const { slug } = useParams();
  const post = blogs.find(p => p.slug === slug);
  if (!post) return <div className="container-luxury py-32"><h1 className="font-display text-4xl">Article not found</h1><Link to="/blog" className="mt-6 inline-block text-gold">Back to blog</Link></div>;
  return (
    <>
      <SEO title={`${post.title} | Gratia Estates`} description={post.excerpt} path={`/blog/${post.slug}`} image={post.image}/>
      <section className="bg-charcoal py-10 text-white"><div className="container-luxury"><Link to="/blog" className="inline-flex items-center gap-2 text-xs uppercase tracking-[.15em] text-white/60 hover:text-gold"><ArrowLeft size={15}/> Back to Blog</Link></div></section>
      <article className="py-16"><div className="container-luxury max-w-4xl"><p className="text-[10px] font-bold uppercase tracking-[.2em] text-gold">{post.category} · {post.date}</p><h1 className="mt-4 font-display text-4xl leading-tight sm:text-6xl">{post.title}</h1><img src={post.image} alt={post.title} className="mt-10 aspect-[16/8] w-full rounded-3xl object-cover"/><div className="prose prose-neutral mt-10 max-w-none"><p>{post.excerpt}</p><h2>Start with the location</h2><p>In Gurgaon, the right micro-market can be as important as the project itself. Consider commute patterns, infrastructure, nearby social infrastructure and the long-term development story before narrowing your shortlist.</p><h2>Compare the project, not just the brochure</h2><p>Look beyond launch pricing. Compare the developer, product mix, construction stage, specifications, amenities, maintenance expectations and the practical fit for your family or investment objective.</p><h2>Do your due diligence</h2><p>Before committing, review official project documentation, approvals, payment plans and the exact terms applicable to your unit. A professional advisory conversation can help you identify the questions you should ask.</p></div></div></article>
    </>
  );
}
