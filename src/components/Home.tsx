import { useEffect, useState } from 'react';
import { Calendar, Award, Gift, ArrowRight, Sparkles, FileText } from 'lucide-react';
import { OFFICIAL_LINKS } from '../types';

interface HomeProps {
  setActivePage: (page: string) => void;
}

export default function Home({ setActivePage }: HomeProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00'
  });

  useEffect(() => {
    const target = new Date('2026-08-07T09:00:00+05:30');

    const updateTimer = () => {
      const now = new Date();
      const diff = target.getTime() - now.getTime();

      if (diff <= 0) {
        setTimeLeft({ days: '00', hours: '00', minutes: '00', seconds: '00' });
        return;
      }

      const d = Math.floor(diff / 86400000);
      const h = Math.floor((diff % 86400000) / 3600000);
      const m = Math.floor((diff % 3600000) / 60000);
      const s = Math.floor((diff % 60000) / 1000);

      setTimeLeft({
        days: String(d).padStart(2, '0'),
        hours: String(h).padStart(2, '0'),
        minutes: String(m).padStart(2, '0'),
        seconds: String(s).padStart(2, '0')
      });
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="content animate-fade-in text-[var(--text-color)]">
      {/* HERO SECTION */}
      <div className="min-height-hero flex flex-col items-center justify-center text-center px-4 sm:px-6 py-16 sm:py-20 relative z-10 max-w-full mx-auto">
        
        {/* EYEBROW */}
        <div className="inline-flex items-center gap-2.5 bg-[var(--accent-violet)]/10 border border-[var(--accent-violet)]/30 rounded-full px-5 py-2 text-xs md:text-sm font-bold text-[var(--accent-violet-light)] tracking-wider uppercase mb-8">
          <span className="w-2 h-2 rounded-full bg-[var(--accent-violet-light)] animate-pulse" />
          Registrations are Live · Season 2026
        </div>

        {/* MAIN HERO TITLE - Enlarged font sizes */}
        <h1 className="font-mono text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black leading-tight tracking-tight mb-2 select-none">
          <span className="bg-gradient-to-r from-orange-500 via-amber-500 to-violet-400 bg-clip-text text-transparent block break-words">
            INNOGENESIS
          </span>
          <span className="text-[var(--text-color)] opacity-10 block tracking-widest text-3xl sm:text-4xl md:text-6xl lg:text-7xl mt-1">
            2026
          </span>
        </h1>

        {/* HERO TAGLINE - Removed "24 hours , 500 builders" & Increased font sizes */}
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-[var(--text-muted)] max-w-full sm:max-w-3xl leading-relaxed mt-6 mb-10 font-light">
          Where <strong className="text-[var(--text-color)] font-medium">innovation ignites.</strong> Cash prizes worth <strong className="text-[var(--accent-amber)] font-medium">₹5 Lakhs</strong>. One unforgettable event.
        </p>

        {/* DYNAMIC DATE BANNER - Beautiful high-contrast pill format */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 bg-[var(--glass-bg)] border border-[var(--glass-border)] rounded-2xl px-4 sm:px-6 py-4 mb-10 w-full">
          <div className="flex flex-col items-center justify-center text-center gap-1">
            <span className="font-mono text-lg sm:text-xl md:text-2xl font-bold bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent block">
              AUG 7
            </span>
            <span className="text-[10px] uppercase tracking-wider text-[var(--text-muted)] opacity-60 block mt-1">
              Opens
            </span>
          </div>
          <div className="flex flex-col items-center justify-center text-center gap-1">
            <span className="font-mono text-lg sm:text-xl md:text-2xl font-bold text-[var(--text-color)] block">
              24H
            </span>
            <span className="text-[10px] uppercase tracking-wider text-[var(--text-muted)] opacity-60 block mt-1">
              Sprint
            </span>
          </div>
          <div className="flex flex-col items-center justify-center text-center gap-1">
            <span className="font-mono text-lg sm:text-xl md:text-2xl font-bold bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent block">
              AUG 8
            </span>
            <span className="text-[10px] uppercase tracking-wider text-[var(--text-muted)] opacity-60 block mt-1">
              Closes
            </span>
          </div>
        </div>

        {/* LIVE COUNTDOWN STRIP */}
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center mb-10 select-none bg-[var(--glass-bg)] border border-[var(--glass-border)] rounded-2xl p-5 w-full max-w-full sm:max-w-xl">
          <div className="text-center">
            <span className="font-mono text-3xl md:text-5xl font-black bg-gradient-to-r from-orange-500 to-amber-400 bg-clip-text text-transparent block">
              {timeLeft.days}
            </span>
            <span className="text-[10px] uppercase tracking-widest text-[var(--text-muted)] opacity-50 font-semibold block mt-1">Days</span>
          </div>
          <span className="font-mono text-2xl text-[var(--text-muted)] opacity-20 select-none pb-4">:</span>
          <div className="text-center">
            <span className="font-mono text-3xl md:text-5xl font-black bg-gradient-to-r from-orange-500 to-amber-400 bg-clip-text text-transparent block">
              {timeLeft.hours}
            </span>
            <span className="text-[10px] uppercase tracking-widest text-[var(--text-muted)] opacity-50 font-semibold block mt-1">Hours</span>
          </div>
          <span className="font-mono text-2xl text-[var(--text-muted)] opacity-20 select-none pb-4">:</span>
          <div className="text-center">
            <span className="font-mono text-3xl md:text-5xl font-black bg-gradient-to-r from-orange-500 to-amber-400 bg-clip-text text-transparent block">
              {timeLeft.minutes}
            </span>
            <span className="text-[10px] uppercase tracking-widest text-[var(--text-muted)] opacity-50 font-semibold block mt-1">Mins</span>
          </div>
          <span className="font-mono text-2xl text-[var(--text-muted)] opacity-20 select-none pb-4">:</span>
          <div className="text-center">
            <span className="font-mono text-3xl md:text-5xl font-black bg-gradient-to-r from-orange-500 to-amber-400 bg-clip-text text-transparent block">
              {timeLeft.seconds}
            </span>
            <span className="text-[10px] uppercase tracking-widest text-[var(--text-muted)] opacity-50 font-semibold block mt-1">Secs</span>
          </div>
        </div>

        {/* ACTION CTAS - Added Brochure download and Register, increased sizing */}
        <div className="flex flex-col sm:flex-row gap-4 w-full max-w-[min(100%,55rem)] justify-center mb-12">
          <a
            href={OFFICIAL_LINKS.registrationForm}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 sm:px-10 py-4 sm:py-5 rounded-full text-base font-bold bg-gradient-to-r from-orange-600 via-orange-500 to-amber-500 hover:from-orange-500 hover:via-amber-500 hover:to-amber-400 text-white shadow-xl shadow-orange-600/25 hover:scale-[1.03] active:scale-95 transition-all cursor-pointer"
          >
            Register Now — ₹500/person
            <ArrowRight className="w-5 h-5" />
          </a>

          {/* Brochure direct CTA - fulfill "add brochure" */}
          <a
            href={OFFICIAL_LINKS.brochure}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 sm:px-10 py-4 sm:py-5 rounded-full text-base font-bold border-2 border-[var(--glass-border)] text-[var(--text-color)]/80 hover:text-[var(--accent-amber)] hover:border-[var(--accent-amber)] bg-transparent hover:bg-[var(--glass-bg)] hover:scale-[1.03] active:scale-95 transition-all cursor-pointer"
          >
            <FileText className="w-5 h-5 text-[var(--accent-amber)]" />
            Download Brochure
          </a>

          <button
            onClick={() => setActivePage('about')}
            className="flex items-center justify-center gap-1.5 px-8 py-5 rounded-full text-base font-bold text-[var(--text-muted)] hover:text-[var(--text-color)] bg-transparent transition-colors cursor-pointer"
          >
            Learn More
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* PERKS ROW - Styled as high-quality colored tags */}
        <div className="flex flex-wrap gap-3.5 justify-center mt-4">
          <span className="inline-flex items-center gap-2 bg-[var(--accent-amber)]/10 border border-[var(--accent-amber)]/20 text-[var(--accent-amber)] rounded-full px-5 py-2.5 text-sm md:text-base font-bold shadow-sm">
            <Sparkles className="w-4 h-4" /> Free Food
          </span>
          <span className="inline-flex items-center gap-2 bg-[var(--accent-violet)]/10 border border-[var(--accent-violet)]/20 text-[var(--accent-violet-light)] rounded-full px-5 py-2.5 text-sm md:text-base font-bold shadow-sm">
            <Sparkles className="w-4 h-4" /> Free Accommodation
          </span>
          <span className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 text-[var(--accent-orange)] rounded-full px-5 py-2.5 text-sm md:text-base font-bold shadow-sm">
            <Sparkles className="w-4 h-4" /> Swag & Goodies
          </span>
        </div>
      </div>

      {/* STATS STRIP SECTION */}
      <section className="py-12 px-6 border-y border-[var(--glass-border)] bg-[var(--glass-bg)]/30">
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-0 border border-[var(--glass-border)] bg-[var(--glass-bg)] rounded-2xl overflow-hidden shadow-2xl">
          <div className="text-center py-6 md:py-8 border-r border-[var(--glass-border)] hover:bg-[var(--glass-bg)]/50 transition-colors">
            <span className="font-mono text-3xl md:text-5xl font-extrabold bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent block">
              ₹5L
            </span>
            <span className="text-xs md:text-sm uppercase tracking-widest text-[var(--text-muted)] opacity-70 block mt-2 font-medium">
              Prize Pool
            </span>
          </div>
          <div className="text-center py-6 md:py-8 border-r border-[var(--glass-border)] hover:bg-[var(--glass-bg)]/50 transition-colors">
            <span className="font-mono text-3xl md:text-5xl font-extrabold bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent block">
              24H
            </span>
            <span className="text-xs md:text-sm uppercase tracking-widest text-[var(--text-muted)] opacity-70 block mt-2 font-medium">
              Hackathon
            </span>
          </div>
          <div className="text-center py-6 md:py-8 hover:bg-[var(--glass-bg)]/50 transition-colors">
            <span className="font-mono text-3xl md:text-5xl font-extrabold bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent block">
              2
            </span>
            <span className="text-xs md:text-sm uppercase tracking-widest text-[var(--text-muted)] opacity-70 block mt-2 font-medium">
              Tracks
            </span>
          </div>
        </div>
      </section>

      {/* TRACKS PREVIEW CALLOUT */}
      <section className="py-20 px-4 sm:px-6 max-w-5xl mx-auto overflow-hidden">
        <div className="flex items-center gap-2 text-[var(--accent-amber)] font-semibold tracking-wider text-xs md:text-sm uppercase mb-4">
          <span className="w-5 h-px bg-[var(--accent-amber)]" />
          Tracks Preview
        </div>
        <h2 className="font-mono text-3xl md:text-5xl font-bold tracking-tight mb-6">
          Two tracks. Endless possibilities.
        </h2>
        <p className="text-base md:text-lg text-[var(--text-muted)] max-w-2xl leading-relaxed mb-10">
          Choose your battleground — structured problem statements from selected domains, or frame your own innovative solution with complete creative freedom.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <div className="bg-[var(--glass-bg)] border border-[var(--glass-border)] rounded-2xl p-6 hover:border-[var(--accent-amber)]/30 transition-all group">
            <span className="text-xs font-mono tracking-widest text-[var(--text-muted)] opacity-60 block mb-4 uppercase">Track 01</span>
            <h3 className="text-xl font-bold mb-2 group-hover:text-[var(--accent-amber)] transition-colors">Structured Track</h3>
            <p className="text-base text-[var(--text-muted)] leading-relaxed mb-4">
              Detailed problem statements covering 9 distinct disciplines will be revealed on-site. Formulate smart answers using AI, Embedded IoT, Energy grids, and Civil Engg.
            </p>
            <span className="inline-block px-3.5 py-1.5 bg-[var(--accent-amber)]/10 text-[var(--accent-amber)] text-sm font-semibold rounded-full border border-[var(--accent-amber)]/20">
              ₹5 Lakhs Pool
            </span>
          </div>

          <div className="bg-[var(--glass-bg)] border border-[var(--glass-border)] rounded-2xl p-6 hover:border-[var(--accent-violet)]/30 transition-all group">
            <span className="text-xs font-mono tracking-widest text-[var(--text-muted)] opacity-60 block mb-4 uppercase">Track 02</span>
            <h3 className="text-xl font-bold mb-2 group-hover:text-[var(--accent-violet-light)] transition-colors">Open Track</h3>
            <p className="text-base text-[var(--text-muted)] leading-relaxed mb-4">
              Bring your own challenge and manifest a complete digital or mechanical product in hardware development, general AI applications, and healthcare delivery.
            </p>
            <span className="inline-block px-3.5 py-1.5 bg-[var(--accent-violet)]/10 text-[var(--accent-violet-light)] text-sm font-semibold rounded-full border border-[var(--accent-violet)]/20">
              ₹5 Lakhs Pool
            </span>
          </div>
        </div>

        <div className="text-center">
          <button
            onClick={() => setActivePage('tracks')}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full border-2 border-[var(--glass-border)] text-sm font-bold text-[var(--text-color)]/80 hover:text-[var(--accent-amber)] hover:border-[var(--accent-amber)] hover:bg-[var(--glass-bg)] transition-all cursor-pointer"
          >
            Explore Combined Tracks Details
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
}
