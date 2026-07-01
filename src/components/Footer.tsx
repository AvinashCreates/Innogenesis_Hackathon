import { Instagram, Linkedin, MessageCircle, ShieldCheck } from 'lucide-react';
import { OFFICIAL_LINKS } from '../types';
import Logo from './Logo';

interface FooterProps {
  setActivePage: (page: string) => void;
}

export default function Footer({ setActivePage }: FooterProps) {
  const handleFooterNav = (page: string) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative z-20 bg-[var(--card-bg)] border-t border-[var(--glass-border)] py-12 px-4 sm:px-6 md:px-12 mt-16 font-sans text-[var(--text-color)] transition-colors duration-300">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10 xl:gap-12 mb-10">
        
        {/* BRAND COLUMN */}
        <div className="md:col-span-2 space-y-4">
          <div className="flex items-center gap-3">
            <Logo size="sm" className="w-6 h-6 sm:w-35 sm:h-35 text-[var(--text-color)] flex-shrink-0" />
          </div>
          <p className="text-base text-[var(--text-muted)] leading-relaxed font-light">
            The premier national level hackathon. A 24-hour non-stop arena of high-energy engineering, logic building, and prototyping — August 7–8, 2026, Agiripalli, Vijayawada, Andhra Pradesh.
          </p>

          {/* Academic validation mark */}
        </div>

        {/* NAVIGATION LINKS COLUMN */}
        <div>
          <h4 className="text-sm font-bold font-mono tracking-widest uppercase text-[var(--text-muted)] opacity-80 mb-4">Event Links</h4>
          <ul className="space-y-2.5 text-sm font-medium">
            <li>
              <button onClick={() => handleFooterNav('about')} className="text-base text-[var(--text-muted)] hover:text-[var(--accent-orange)] transition-colors cursor-pointer">
                About Committee
              </button>
            </li>
            <li>
              <button onClick={() => handleFooterNav('tracks')} className="text-[var(--text-muted)] hover:text-[var(--accent-orange)] transition-colors cursor-pointer">
                Combined Tracks
              </button>
            </li>
            <li>
              <button onClick={() => handleFooterNav('prizes')} className="text-[var(--text-muted)] hover:text-[var(--accent-orange)] transition-colors cursor-pointer">
                Awards & Prizes
              </button>
            </li>
            <li>
              <a href={OFFICIAL_LINKS.registrationForm} target="_blank" rel="noopener noreferrer" className="text-[var(--text-muted)] hover:text-[var(--accent-orange)] transition-colors">
                Register Form
              </a>
            </li>
          </ul>
        </div>

        {/* RESOURCE COLUMN */}
        <div>
          <h4 className="text-sm font-bold font-mono tracking-widest uppercase text-[var(--text-muted)] opacity-80 mb-4">Resources</h4>
          <ul className="space-y-2.5 text-sm font-medium">
            <li>
              <button onClick={() => handleFooterNav('faq')} className="text-[var(--text-muted)] hover:text-[var(--accent-orange)] transition-colors cursor-pointer">
                FAQ Panel
              </button>
            </li>
            <li>
              <button onClick={() => handleFooterNav('contact')} className="text-[var(--text-muted)] hover:text-[var(--accent-orange)] transition-colors cursor-pointer">
                Contact Coordinates
              </button>
            </li>
            <li>
              <a href={OFFICIAL_LINKS.brochure} target="_blank" rel="noopener noreferrer" className="text-[var(--text-muted)] hover:text-[var(--accent-orange)] transition-colors">
                Event Brochure (PDF)
              </a>
            </li>
          </ul>
        </div>

        {/* CONNECT COLUMN */}
        <div>
          <h4 className="text-sm font-bold font-mono tracking-widest uppercase text-[var(--text-muted)] opacity-80 mb-4">Connect Channel</h4>
          <ul className="space-y-2.5 text-sm font-medium">
            <li>
              <a href={OFFICIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="text-[var(--text-muted)] hover:text-[var(--accent-orange)] inline-flex items-center gap-1.5 transition-colors">
                <Instagram className="w-3.5 h-3.5 text-violet-400" />
                Instagram Update
              </a>
            </li>
            <li>
              <a href={OFFICIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="text-[var(--text-muted)] hover:text-[var(--accent-orange)] inline-flex items-center gap-1.5 transition-colors">
                <Linkedin className="w-3.5 h-3.5 text-blue-400" />
                LinkedIn Page
              </a>
            </li>
            <li>
              <a href={OFFICIAL_LINKS.whatsappGroup} target="_blank" rel="noopener noreferrer" className="text-[var(--text-muted)] hover:text-[var(--accent-orange)] inline-flex items-center gap-1.5 transition-colors">
                <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                WhatsApp Community
              </a>
            </li>
          </ul>
        </div>

      </div>

      {/* FOOTER BOTTOM CREDITS */}
      <div className="max-w-15xl mx-auto border-t border-[var(--glass-border)] pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="text-sm text-[var(--text-muted)] text-center sm:text-left font-light leading-relaxed">
          © 2026 INNOGENESIS · Dr. RVR NRI Institute of Technology, Agiripalli Campus. All rights reserved.
        </span>

        {/* SOCIAL VECTOR BUTTONS */}
        <div className="flex gap-2 select-none">
          <a
            href={OFFICIAL_LINKS.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 rounded-lg bg-[var(--glass-bg)] hover:bg-[var(--glass-border)] border border-[var(--glass-border)] flex items-center justify-center text-[var(--text-muted)] hover:text-violet-400 transition-colors"
            title="Instagram"
          >
            <Instagram className="w-4 h-4" />
          </a>
          <a
            href={OFFICIAL_LINKS.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 rounded-lg bg-[var(--glass-bg)] hover:bg-[var(--glass-border)] border border-[var(--glass-border)] flex items-center justify-center text-[var(--text-muted)] hover:text-blue-400 transition-colors"
            title="LinkedIn"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href={OFFICIAL_LINKS.whatsappGroup}
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 rounded-lg bg-[var(--glass-bg)] hover:bg-[var(--glass-border)] border border-[var(--glass-border)] flex items-center justify-center text-[var(--text-muted)] hover:text-emerald-400 transition-colors"
            title="WhatsApp Group"
          >
            <MessageCircle className="w-4 h-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
