import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, Phone, MessageCircle, ChevronDown } from "lucide-react";

const nav = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Projects", to: "/projects" },
  { label: "Blog", to: "/blog" },
  { label: "Contact Us", to: "/contact" }
];

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-white/95 backdrop-blur-xl">
      <div className="container-luxury flex h-[76px] items-center justify-between">
        <Link to="/" className="flex items-center" aria-label="Gratia Estates home">
          <img src="/assets/logo-primary.png" alt="Gratia Estates premium real estate advisory logo" className="h-[58px] w-auto object-contain" />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary navigation">
          {nav.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `text-[12px] font-semibold uppercase tracking-[.18em] transition ${isActive ? "text-gold" : "text-charcoal hover:text-gold"}`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <a href="tel:+919109776155" className="flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[.14em] text-charcoal hover:text-gold">
            <Phone size={15} /> Call
          </a>
          <Link to="/contact" className="rounded-full bg-charcoal px-5 py-3 text-[11px] font-bold uppercase tracking-[.16em] text-white transition hover:bg-gold hover:text-charcoal">
            Enquire Now
          </Link>
        </nav>

        <button className="lg:hidden" onClick={() => setOpen(!open)} aria-label="Toggle navigation">
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="border-t border-black/10 bg-white px-5 pb-6 lg:hidden">
          <nav className="flex flex-col" aria-label="Mobile navigation">
            {nav.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="border-b border-black/5 py-4 text-sm font-semibold uppercase tracking-[.14em]"
              >
                {item.label}
              </NavLink>
            ))}
            <a href="tel:+919109776155" className="flex items-center gap-2 py-4 text-sm font-semibold"><Phone size={16}/> +91 9109776155</a>
          </nav>
        </div>
      )}
    </header>
  );
}
