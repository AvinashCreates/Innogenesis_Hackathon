import { Calendar, MapPin, Users, Trophy, Award, Phone, ShieldCheck } from 'lucide-react';
import {
  CHIEF_PATRONS,
  PATRONS,
  CONVENERS,
  MEMBERS,
  FACULTY_COORDINATORS,
  STUDENT_COORDINATORS,
  OFFICIAL_LINKS
} from '../types';

interface AboutProps {
  setActivePage: (page: string) => void;
}

export default function About({ setActivePage }: AboutProps) {
  return (
    <div className="content animate-fade-in max-w-7xl mx-auto px-4 sm:px-8 py-12 text-[var(--text-color)]">
      
      {/* INTRO ABOUT SECTION */}
      <section className="py-12">
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-[var(--accent-amber)] font-semibold tracking-wider text-xs md:text-sm uppercase mb-4">
          <span className="w-5 h-px bg-[var(--accent-amber)]" />
          About the Event
        </div>
        <h2 className="font-mono text-3xl md:text-5xl font-bold tracking-tight mb-10">
          What is INNOGENESIS?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          <div className="space-y-6 text-base md:text-lg text-[var(--text-muted)] leading-relaxed font-light">
            <p>
              <strong className="text-[var(--text-color)] font-medium">INNOGENESIS 2026</strong> is NRI University's flagship national level hackathon — a 24-hour sprint of dynamic brainstorming, engineering creation, and final presentations. Held at the state-of-the-art campus of Dr. RVR NRI Institute of Technology in Agiripalli, A.P., the event invites the country's most passionate innovators under one roof.
            </p>
            <p>
              The moniker encapsulates our vision: <strong className="text-[var(--accent-amber)] font-medium">INNO</strong> (innovation) + <strong className="text-[var(--accent-violet-light)] font-medium">GENESIS</strong> (the origin, the beginning). This is where your boldest ideas take their very first breath, backed by seasoned industry mentors, collaborative sprint spaces, and massive prize pools of <strong className="text-[var(--text-color)] font-semibold">₹5 Lakhs</strong>.
            </p>
            <p>
              Whether you are a hardware enthusiast, a code builder, or a design architect — INNOGENESIS provides a high-voltage platform to showcase your craft.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href={OFFICIAL_LINKS.registrationForm}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-full text-sm font-bold bg-gradient-to-r from-orange-600 to-amber-500 text-white shadow-lg shadow-orange-600/10 hover:scale-[1.02] transition-transform cursor-pointer"
              >
                Register Now
              </a>
              <button
                onClick={() => setActivePage('tracks')}
                className="px-6 py-3.5 rounded-full text-sm font-bold border border-[var(--glass-border)] hover:border-[var(--accent-amber)] text-[var(--text-muted)] hover:text-[var(--accent-amber)] hover:bg-[var(--glass-bg)] transition-colors cursor-pointer"
              >
                Explore Tracks
              </button>
            </div>
          </div>

          {/* QUICK HIGHLIGHTS GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-[var(--glass-bg)] border border-[var(--glass-border)] rounded-2xl p-5 hover:border-[var(--accent-amber)]/20 transition-colors">
              <Calendar className="w-6 h-6 text-[var(--accent-amber)] mb-3" />
              <h4 className="text-sm font-bold mb-1">August 7–8, 2026</h4>
              <p className="text-xs text-[var(--text-muted)] opacity-80 leading-relaxed">24-hour non-stop in-person hacking sprint.</p>
            </div>

            <div className="bg-[var(--glass-bg)] border border-[var(--glass-border)] rounded-2xl p-5 hover:border-[var(--accent-violet)]/20 transition-colors">
              <MapPin className="w-6 h-6 text-[var(--accent-violet-light)] mb-3" />
              <h4 className="text-sm font-bold mb-1">Agiripalli Campus</h4>
              <p className="text-xs text-[var(--text-muted)] opacity-80 leading-relaxed">Dr. RVR NRI Institute, Vijayawada, A.P.</p>
            </div>

            <div className="bg-[var(--glass-bg)] border border-[var(--glass-border)] rounded-2xl p-5 hover:border-[var(--accent-orange)]/20 transition-colors">
              <Users className="w-6 h-6 text-[var(--accent-orange)] mb-3" />
              <h4 className="text-sm font-bold mb-1">Teams of 2–4</h4>
              <p className="text-xs text-[var(--text-muted)] opacity-80 leading-relaxed">Bring your squad or form one in pre-events.</p>
            </div>

            <div className="bg-[var(--glass-bg)] border border-[var(--glass-border)] rounded-2xl p-5 hover:border-[var(--accent-amber)]/20 transition-colors">
              <Trophy className="w-6 h-6 text-[var(--accent-amber)] mb-3" />
              <h4 className="text-sm font-bold mb-1">₹5 Lakhs Cash</h4>
              <p className="text-xs text-[var(--text-muted)] opacity-80 leading-relaxed">Along with executive mentorships.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ORGANIZING COMMITTEE SECTION */}
      <section className="py-12 border-t border-[var(--glass-border)]">
        <div className="flex items-center gap-2 text-[var(--accent-amber)] font-semibold tracking-wider text-xs md:text-sm uppercase mb-4">
          <ShieldCheck className="w-4 h-4 text-[var(--accent-amber)]" />
          Our Leaders
        </div>
        <h2 className="font-mono text-3xl md:text-5xl font-bold tracking-tight mb-6">
          Organizing Committee
        </h2>
        <p className="text-base md:text-lg text-[var(--text-muted)] max-w-2xl leading-relaxed mb-10">
          The esteemed educational leaders, administrators, and coordinators hosting INNOGENESIS 2026.
        </p>

        {/* CHIEF PATRONS & PATRONS */}
        <div className="mb-12">
          <h3 className="text-sm md:text-base font-mono font-bold uppercase tracking-widest text-[var(--text-muted)] opacity-60 mb-5 border-b border-[var(--glass-border)] pb-2">
            Chief Patrons & Patrons
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
            {CHIEF_PATRONS.concat(PATRONS).map((person, idx) => (
              <div
                key={idx}
                className="bg-[var(--glass-bg)] border border-[var(--glass-border)] hover:border-[var(--accent-amber)]/20 rounded-2xl p-5 text-center transition-colors flex flex-col items-center justify-center min-h-[180px]"
              >
                <div className={`w-14 h-14 rounded-full ${person.colorClass} text-white font-mono font-bold flex items-center justify-center text-base shadow-md mb-4`}>
                  {person.initials}
                </div>
                <h4 className="text-sm md:text-base font-bold leading-tight mb-2">{person.name}</h4>
                <p className="text-sm text-[var(--text-muted)] opacity-75 leading-relaxed">{person.role}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CONVENERS & MEMBERS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Conveners column */}
          <div>
            <h3 className="text-sm md:text-base font-mono font-bold uppercase tracking-widest text-[var(--text-muted)] opacity-60 mb-5 border-b border-[var(--glass-border)] pb-2">
              Conveners
            </h3>
            <div className="flex flex-col gap-4">
              {CONVENERS.map((person, idx) => (
                <div
                  key={idx}
                  className="bg-[var(--glass-bg)] border border-[var(--glass-border)] hover:border-[var(--accent-amber)]/20 rounded-2xl p-5 flex items-center gap-4 transition-colors"
                >
                  <div className={`w-14 h-14 rounded-full ${person.colorClass} text-white font-mono font-bold flex items-center justify-center text-base flex-shrink-0`}>
                    {person.initials}
                  </div>
                  <div>
                    <h4 className="text-base font-bold mb-1">{person.name}</h4>
                    <p className="text-sm text-[var(--text-muted)] opacity-85">{person.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Members column */}
          <div>
            <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-[var(--text-muted)] opacity-50 mb-5 border-b border-[var(--glass-border)] pb-2">
              Members
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {MEMBERS.map((person, idx) => (
                <div
                  key={idx}
                  className="bg-[var(--glass-bg)] border border-[var(--glass-border)] hover:border-[var(--accent-amber)]/20 rounded-2xl p-4 flex items-center gap-4 transition-colors min-h-[110px]"
                >
                  <div className="w-10 h-10 rounded-full bg-[var(--glass-bg)] text-[var(--text-muted)] font-mono font-semibold flex items-center justify-center text-sm flex-shrink-0 border border-[var(--glass-border)]">
                    {person.initials}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[var(--text-color)]/85 leading-snug mb-0.5">{person.name}</h4>
                    <p className="text-sm text-[var(--text-muted)] opacity-70">{person.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* COORDINATORS STRIP (FACULTY & STUDENT) */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Faculty coordinators list with telephone link */}
          <div>
            <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-[var(--text-muted)] opacity-50 mb-5 border-b border-[var(--glass-border)] pb-2">
              Faculty Co-ordinators
            </h3>
            <div className="flex flex-col gap-4">
              {FACULTY_COORDINATORS.map((coord, idx) => (
                <div
                  key={idx}
                  className="bg-[var(--glass-bg)] border border-[var(--glass-border)] hover:border-[var(--accent-amber)]/20 rounded-2xl p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[var(--accent-orange)]/10 border border-[var(--accent-orange)]/20 text-[var(--accent-orange)] flex items-center justify-center">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold mb-0.5">{coord.name}</h4>
                      <p className="text-[11px] text-[var(--text-muted)] opacity-70">{coord.role}</p>
                    </div>
                  </div>
                  <a
                    href={`tel:${coord.phone}`}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg bg-[var(--accent-amber)]/10 hover:bg-[var(--accent-amber)] text-[var(--accent-amber)] hover:text-white text-sm font-bold transition-all"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    {coord.phone}
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Student coordinators list with telephone link */}
          <div>
            <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-[var(--text-muted)] opacity-50 mb-5 border-b border-[var(--glass-border)] pb-2">
              Student Co-ordinators
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {STUDENT_COORDINATORS.map((coord, idx) => (
                <div
                  key={idx}
                  className="bg-[var(--glass-bg)] border border-[var(--glass-border)] hover:border-[var(--accent-violet)]/20 rounded-2xl p-5 flex flex-col justify-between transition-colors min-h-[120px]"
                >
                  <h4 className="text-sm font-bold mb-2">{coord.name}</h4>
                  <a
                    href={`tel:${coord.phone}`}
                    className="flex items-center gap-2 justify-center py-2 rounded-lg bg-[var(--accent-violet)]/10 hover:bg-[var(--accent-violet)] text-[var(--accent-violet-light)] hover:text-white text-sm font-bold transition-all border border-[var(--accent-violet)]/20"
                  >
                    <Phone className="w-3 h-3" />
                    {coord.phone}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
