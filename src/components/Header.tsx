import { useState, useEffect } from 'react';
import { Menu, X, FileText, ArrowRight, Sun, Moon } from 'lucide-react';
import { OFFICIAL_LINKS } from '../types';
import Logo from './Logo';

interface HeaderProps {
  activePage: string;
  setActivePage: (page: string) => void;
  theme: 'light' | 'dark';
  setTheme: (theme: 'light' | 'dark') => void;
}

export default function Header({ activePage, setActivePage, theme, setTheme }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Scroll handler for background opacity transition
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'tracks', label: 'Tracks' },
    { id: 'prizes', label: 'Prizes' },
    { id: 'faq', label: 'FAQ' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleNavClick = (id: string) => {
    setActivePage(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* HEADER BAR - Increased from h-20 (80px) to h-24 (96px) on desktop and h-20 (80px) on mobile for a larger, premium look */}
      <nav
        id="navbar"
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-center px-4 sm:px-6 md:px-10 lg:px-12 transition-all duration-300 ${
          scrolled || mobileMenuOpen
            ? 'h-30 sm:h-34 bg-[var(--card-bg)] backdrop-blur-md border-b border-[var(--card-border)] shadow-lg'
            : 'h-30 sm:h-34 bg-transparent border-b border-transparent'
        }`}
      >
        {/* LEFT LOGO ICON */}
        <button
          type="button"
          onClick={() => handleNavClick('home')}
          className="absolute left-4 top-1/2 flex h-80 w-auto -translate-y-1/2 items-center justify-center rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-amber)]"
        >
          <Logo size="sm" className="w-30 h-26 sm:w-34 sm:h-30 md:w-38 md:h-32 text-[var(--text-color)] transition-transform duration-300 hover:scale-105" />
        </button>

        {/* CENTERED NAV LINKS */}
        <div className="flex flex-wrap items-center justify-center gap-2 lg:gap-4 text-center">
          <div className="hidden lg:flex items-center gap-4 bg-white/5 border border-white/10 rounded-full p-2.5 backdrop-blur-sm">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-4 py-2 rounded-full text-sm md:text-base font-semibold tracking-wide transition-all duration-200 cursor-pointer ${
                  activePage === item.id
                    ? 'text-[var(--accent-amber)] bg-[var(--accent-amber)]/10'
                    : 'text-[var(--text-color)]/70 hover:text-[var(--accent-orange)] hover:bg-white/5'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <a
            href={OFFICIAL_LINKS.brochure}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm md:text-base font-bold text-[var(--text-color)] hover:text-[var(--accent-orange)] bg-[var(--glass-bg)] hover:bg-white/5 border border-[var(--glass-border)] hover:border-[var(--accent-orange)]/40 transition-all duration-200"
          >
            <FileText className="w-4 h-4 text-[var(--accent-amber)]" />
            Brochure
          </a>

          <a
            href={OFFICIAL_LINKS.registrationForm}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm md:text-base font-black bg-gradient-to-r from-orange-600 to-amber-500 hover:from-orange-500 hover:to-amber-400 text-white shadow-md shadow-orange-600/20 hover:scale-[1.02] active:scale-95 transition-all duration-200"
          >
            Register Now
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* RIGHT CONTROLS */}
        <div className="absolute right-4 top-1/2 flex items-center gap-3 -translate-y-1/2">
          <button
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            className="flex w-11 h-11 items-center justify-center rounded-full border border-[var(--glass-border)] bg-[var(--glass-bg)] text-[var(--text-color)] hover:text-[var(--accent-orange)] hover:border-[var(--accent-orange)]/40 transition-colors cursor-pointer"
            title={theme === 'light' ? 'Switch to Dark Theme' : 'Switch to Light Theme'}
          >
            {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
          </button>

          <button
            className="flex w-11 h-11 items-center justify-center rounded-xl border border-[var(--glass-border)] bg-[var(--glass-bg)] text-[var(--text-color)]/80 hover:text-[var(--accent-orange)] hover:border-[var(--accent-orange)]/30 transition-colors cursor-pointer lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* MOBILE NAV DRAWER - Adjusted top to 24 (96px) to fit the increased header size */}
      <div
        className={`fixed top-20 sm:top-24 left-0 right-0 z-40 lg:hidden bg-[var(--bg-color)] border-b border-[var(--glass-border)] flex flex-col gap-1.5 p-4 sm:p-6 transition-all duration-300 shadow-2xl overflow-hidden ${
          mobileMenuOpen
            ? 'translate-y-0 opacity-100 max-h-[calc(100vh-5rem)] sm:max-h-[calc(100vh-6rem)] overflow-y-auto'
            : '-translate-y-full opacity-0 pointer-events-none'
        }`}
      >
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => handleNavClick(item.id)}
            className={`w-full text-left px-5 py-4 rounded-xl text-lg font-bold transition-all duration-150 ${
              activePage === item.id
                ? 'text-[var(--accent-orange)] bg-[var(--accent-orange)]/5 border-l-2 border-[var(--accent-orange)]'
                : 'text-[var(--text-color)]/70 hover:text-[var(--accent-orange)] hover:bg-[var(--glass-bg)]'
            }`}
          >
            {item.label}
          </button>
        ))}

        {/* Brochure Download Mobile Link */}
        <a
          href={OFFICIAL_LINKS.brochure}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 px-5 py-4 rounded-xl text-lg font-bold text-[var(--text-color)]/70 hover:text-[var(--accent-orange)] hover:bg-[var(--glass-bg)] border-t border-[var(--glass-border)] mt-2"
        >
          <FileText className="w-5 h-5 text-[var(--accent-amber)]" />
          Download Brochure
        </a>

        {/* Register CTA Button Mobile */}
        <a
          href={OFFICIAL_LINKS.registrationForm}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 block w-full py-4.5 rounded-full text-center text-lg font-extrabold bg-gradient-to-r from-orange-600 to-amber-500 text-white shadow-lg active:scale-95 transition-transform"
        >
          Register Now — ₹500/person
        </a>
      </div>
    </>
  );
}
