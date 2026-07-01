import { useState } from 'react';
import * as Icons from 'lucide-react';
import { TRACKS_DATA, OFFICIAL_LINKS } from '../types';

export default function Tracks() {
  // State to track expanded status for each card. Both can be open simultaneously!
  const [expanded, setExpanded] = useState<{ [key: string]: boolean }>({
    structured: true, // Default to open for quick accessibility
    open: true        // Default to open as well, fulfilling "multiple tracks openings"
  });

  const toggleTrack = (id: string) => {
    setExpanded((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  // Helper component to resolve Lucide Icon by name string
  const renderIcon = (iconName: string, colorClass: string) => {
    const IconComponent = (Icons as any)[iconName];
    if (IconComponent) {
      return <IconComponent className={`w-8 h-8 ${colorClass}`} />;
    }
    return <Icons.HelpCircle className={`w-8 h-8 ${colorClass}`} />;
  };

  return (
    <div className="content animate-fade-in max-w-7xl mx-auto px-4 sm:px-8 py-12 text-[var(--text-color)]">
      <section className="py-12">
        <div className="flex items-center gap-2 text-[var(--accent-amber)] font-semibold tracking-wider text-xs md:text-sm uppercase mb-4">
          <span className="w-5 h-px bg-[var(--accent-amber)]" />
          Event Tracks
        </div>
        <h2 className="font-mono text-3xl md:text-5xl font-bold tracking-tight mb-6">
          Two tracks. Your battleground.
        </h2>
        <p className="text-base md:text-lg text-[var(--text-muted)] max-w-2xl leading-relaxed mb-10">
          We have configured two distinct hackathon formats. Both tracks are fully accessible and open below. Click any track to collapse or expand its respective domains.
        </p>

        {/* CONTROLS TO TOGGLE BOTH SIMULTANEOUSLY */}
        <div className="flex flex-col sm:flex-row justify-end sm:justify-between gap-3 mb-8">
          <button
            onClick={() => setExpanded({ structured: true, open: true })}
            className="text-xs font-bold font-sans px-4 py-2 rounded-lg bg-[var(--glass-bg)] border border-[var(--glass-border)] hover:border-[var(--accent-amber)]/30 text-[var(--text-muted)] hover:text-[var(--accent-amber)] hover:bg-[var(--glass-bg)] transition-all cursor-pointer"
          >
            Expand Both Tracks
          </button>
          <button
            onClick={() => setExpanded({ structured: false, open: false })}
            className="text-xs font-bold font-sans px-4 py-2 rounded-lg bg-[var(--glass-bg)] border border-[var(--glass-border)] hover:border-[var(--accent-amber)]/30 text-[var(--text-muted)] hover:text-[var(--accent-amber)] hover:bg-[var(--glass-bg)] transition-all cursor-pointer"
          >
            Collapse Both
          </button>
        </div>

        {/* SIDE-BY-SIDE RESPONSIVE TRACKS VIEW */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* TRACK 1: STRUCTURED (Amber/Orange accent) */}
          <div className="lg:col-span-7 space-y-6">
            <div
              onClick={() => toggleTrack('structured')}
              className={`border rounded-2xl p-4 sm:p-6 md:p-8 cursor-pointer select-none transition-all duration-300 ${
                expanded.structured
                  ? 'bg-[var(--accent-amber)]/[0.03] border-[var(--accent-amber)]/30 shadow-lg shadow-amber-500/5'
                  : 'bg-[var(--glass-bg)] border border-[var(--glass-border)] hover:border-[var(--accent-amber)]/30'
              }`}
            >
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-[10px] font-mono tracking-widest text-[var(--text-muted)] opacity-60 block uppercase mb-2">Track 01</span>
                  <h3 className="text-xl md:text-2xl font-bold mb-2">Given Problem Statement</h3>
                  <p className="text-sm text-[var(--text-muted)] leading-relaxed font-light mb-4">
                    Structured challenges prepared by domain experts. These problem statements will be revealed on the morning of the hackathon on August 7.
                  </p>
                </div>
                <div className="p-3.5 rounded-xl bg-[var(--accent-amber)]/10 flex-shrink-0 sm:ml-4 border border-[var(--accent-amber)]/20">
                  <Icons.ListTodo className="w-6 h-6 text-[var(--accent-amber)]" />
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4 border-t border-[var(--glass-border)] pt-4 mt-4">
                <span className="px-3.5 py-1.5 rounded-full border border-[var(--accent-amber)]/20 text-[var(--accent-amber)] text-xs font-bold bg-[var(--accent-amber)]/5">
                  Prize pool: ₹5 Lakhs
                </span>
                <span className="text-xs text-[var(--accent-amber)] font-semibold group-hover:underline">
                  {expanded.structured ? 'Collapse Domains ↑' : 'Expand Domains (9) ↓'}
                </span>
              </div>
            </div>

            {/* DOMAINS FOR TRACK 1 */}
            {expanded.structured && (
              <div className="grid sm:grid-cols-2 gap-4 animate-slide-down">
                {TRACKS_DATA[0].domains.map((domain, idx) => (
                  <div
                    key={idx}
                    className="bg-[var(--glass-bg)] border border-[var(--glass-border)] hover:border-[var(--accent-amber)]/20 rounded-xl p-5 hover:bg-[var(--glass-bg)]/80 transition-all"
                  >
                    <div className="p-2 w-fit rounded-lg bg-[var(--accent-amber)]/10 border border-[var(--accent-amber)]/20 mb-3">
                      {renderIcon(domain.iconName, 'text-[var(--accent-amber)]')}
                    </div>
                    <h4 className="text-sm font-bold mb-1.5">{domain.name}</h4>
                    <p className="text-xs text-[var(--text-muted)] opacity-80 leading-relaxed font-light">{domain.desc}</p>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* TRACK 2: OPEN INNOVATION (Violet/Purple accent) */}
          <div className="lg:col-span-5 space-y-6">
            <div
              onClick={() => toggleTrack('open')}
              className={`border rounded-2xl p-4 sm:p-6 md:p-8 cursor-pointer select-none transition-all duration-300 ${
                expanded.open
                  ? 'bg-[var(--accent-violet)]/[0.03] border-[var(--accent-violet)]/30 shadow-lg shadow-violet-500/5'
                  : 'bg-[var(--glass-bg)] border border-[var(--glass-border)] hover:border-[var(--accent-violet)]/30'
              }`}
            >
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-[10px] font-mono tracking-widest text-[var(--text-muted)] opacity-60 block uppercase mb-2">Track 02</span>
                  <h3 className="text-xl md:text-2xl font-bold mb-2">Open Innovation</h3>
                  <p className="text-sm text-[var(--text-muted)] leading-relaxed font-light mb-4">
                    Formulate your own problem statement and manifest a fully functional digital, hardware, or biological solution.
                  </p>
                </div>
                <div className="p-3.5 rounded-xl bg-[var(--accent-violet)]/10 flex-shrink-0 sm:ml-4 border border-[var(--accent-violet)]/20">
                  <Icons.Lightbulb className="w-6 h-6 text-[var(--accent-violet-light)]" />
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4 border-t border-[var(--glass-border)] pt-4 mt-4">
                <span className="px-3.5 py-1.5 rounded-full border border-[var(--accent-violet)]/20 text-[var(--accent-violet-light)] text-xs font-bold bg-[var(--accent-violet)]/5">
                  Prize pool: ₹5 Lakhs
                </span>
                <span className="text-xs text-[var(--accent-violet-light)] font-semibold">
                  {expanded.open ? 'Collapse Domains ↑' : 'Expand Domains (3) ↓'}
                </span>
              </div>
            </div>

            {/* DOMAINS FOR TRACK 2 */}
            {expanded.open && (
              <div className="flex flex-col gap-4 animate-slide-down">
                {TRACKS_DATA[1].domains.map((domain, idx) => (
                  <div
                    key={idx}
                    className="bg-[var(--glass-bg)] border border-[var(--glass-border)] hover:border-[var(--accent-violet)]/20 rounded-xl p-5 hover:bg-[var(--glass-bg)]/80 transition-all"
                  >
                    <div className="p-2 w-fit rounded-lg bg-[var(--accent-violet)]/10 border border-[var(--accent-violet)]/20 mb-3">
                      {renderIcon(domain.iconName, 'text-[var(--accent-violet-light)]')}
                    </div>
                    <h4 className="text-sm font-bold mb-1.5">{domain.name}</h4>
                    <p className="text-xs text-[var(--text-muted)] opacity-80 leading-relaxed font-light">{domain.desc}</p>
                  </div>
                ))}
              </div>
            )}
          </div>

        </div>

        {/* REGISTRATION CALLOUT */}
        <div className="mt-16 text-center">
          <a
            href={OFFICIAL_LINKS.registrationForm}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-10 py-5 rounded-full text-base font-bold bg-gradient-to-r from-orange-600 via-orange-500 to-amber-500 text-white shadow-xl shadow-orange-600/20 hover:scale-[1.02] transition-transform cursor-pointer"
          >
            Register for Innogenesis 2026
            <Icons.ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>
    </div>
  );
}
