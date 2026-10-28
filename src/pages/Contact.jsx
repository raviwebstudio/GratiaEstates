import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";

export default function Contact() {
  const [form, setForm] = useState({name:"", phone:"", email:"", requirement:""});
  const submit = (e) => {
    e.preventDefault();
    const text = `Hello Gratia Estates,%0A%0AName: ${form.name}%0APhone: ${form.phone}%0AEmail: ${form.email}%0ARequirement: ${form.requirement}`;
    window.open(`https://wa.me/919109776155?text=${text}`, "_blank", "noopener,noreferrer");
  };
  return (
    <>
      <SEO title="Contact Gratia Estates | Gurgaon Property Advisory" description="Contact Gratia Estates for Gurgaon residential property enquiries, project shortlisting, site visits and buyer guidance." path="/contact" />
      <section className="bg-charcoal py-20 text-white"><div className="container-luxury"><div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[.2em] text-white/45"><Link to="/">Home</Link><span>/</span><span className="text-gold">Contact Us</span></div><h1 className="mt-6 font-display text-5xl sm:text-6xl">Let’s find your Gurgaon address.</h1></div></section>
      <section className="py-20"><div className="container-luxury grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
        <div><div className="gold-line mb-5"/><p className="text-[11px] font-bold uppercase tracking-[.25em] text-black/45">Get in touch</p><h2 className="mt-4 font-display text-4xl">Tell us what you are looking for.</h2><p className="mt-5 text-sm leading-7 text-black/55">Share your requirement and our team will connect with you about suitable Gurgaon projects.</p><div className="mt-9 space-y-5 text-sm"><a href="tel:+919109776155" className="flex items-center gap-4 hover:text-gold"><Phone className="text-gold"/> +91 9109776155</a><a href="mailto:purwarmanish@gmail.com" className="flex items-center gap-4 hover:text-gold"><Mail className="text-gold"/> purwarmanish@gmail.com</a><div className="flex items-start gap-4"><MapPin className="mt-1 text-gold"/> Iworkk Coworking Office Space, 90 IDC, Gurgaon</div></div></div>
        <form onSubmit={submit} className="rounded-3xl bg-white p-7 shadow-luxury ring-1 ring-black/5 sm:p-10"><div className="grid gap-5 sm:grid-cols-2"><Field label="Full Name" value={form.name} onChange={v=>setForm({...form,name:v})} required/><Field label="Phone Number" value={form.phone} onChange={v=>setForm({...form,phone:v})} required/><Field label="Email Address" value={form.email} onChange={v=>setForm({...form,email:v})} type="email"/><Field label="Budget / Preferred Location" value={form.requirement} onChange={v=>setForm({...form,requirement:v})} /></div><button className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-charcoal px-6 py-4 text-xs font-bold uppercase tracking-[.15em] text-white hover:bg-gold hover:text-charcoal"><Send size={16}/> Send Enquiry on WhatsApp</button><p className="mt-4 text-center text-[11px] text-black/40">By submitting, you agree to be contacted regarding your property enquiry.</p></form>
      </div></section>
    </>
  );
}

function Field({label,value,onChange,type="text",required=false}) {
  return <label className="block"><span className="mb-2 block text-[10px] font-bold uppercase tracking-[.16em] text-black/50">{label}</span><input required={required} type={type} value={value} onChange={e=>onChange(e.target.value)} className="w-full rounded-xl border border-black/10 bg-ivory px-4 py-3 text-sm outline-none focus:border-gold focus:ring-2 focus:ring-gold/20"/></label>
}
