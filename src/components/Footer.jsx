import { Link } from "react-router-dom";
import { Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white">
      <div className="container-luxury grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <img src="/assets/logo-dark.png" alt="Gratia Estates logo" className="mb-6 h-16 w-auto object-contain" />
          <p className="max-w-sm text-sm leading-7 text-white/60">
            Premium real estate advisory focused exclusively on Gurgaon — from pre-launch opportunities to ready-to-move residences.
          </p>
        </div>
        <div>
          <h3 className="mb-5 font-display text-xl">Explore</h3>
          <div className="flex flex-col gap-3 text-sm text-white/60">
            <Link to="/about" className="hover:text-gold">About Us</Link>
            <Link to="/projects" className="hover:text-gold">Projects</Link>
            <Link to="/blog" className="hover:text-gold">Blog</Link>
            <Link to="/contact" className="hover:text-gold">Contact Us</Link>
          </div>
        </div>
        <div>
          <h3 className="mb-5 font-display text-xl">Legal</h3>
          <div className="flex flex-col gap-3 text-sm text-white/60">
            <Link to="/privacy-policy" className="hover:text-gold">Privacy Policy</Link>
            <Link to="/terms-conditions" className="hover:text-gold">Terms & Conditions</Link>
          </div>
        </div>
        <div>
          <h3 className="mb-5 font-display text-xl">Contact</h3>
          <div className="space-y-4 text-sm text-white/60">
            <a href="tel:+919109776155" className="flex gap-3 hover:text-gold"><Phone size={17} /> +91 9109776155</a>
            <a href="mailto:purwarmanish@gmail.com" className="flex gap-3 hover:text-gold"><Mail size={17} /> purwarmanish@gmail.com</a>
            <div className="flex gap-3"><MapPin size={17} className="shrink-0" /> Iworkk Coworking Office Space, 90 IDC, Gurgaon</div>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-luxury flex flex-col gap-3 py-5 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} Gratia Estates. All rights reserved.</span>
          <div className="flex gap-4">
            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram size={16}/></a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={16}/></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
