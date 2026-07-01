import { Trophy, Medal, Award, Brain, Palette, Globe, Flame, Music, Radio, Laugh, PartyPopper, Rocket, Gift, FileText, Info } from 'lucide-react';

export default function Prizes() {
  const entertainmentActivities = [
    {
      title: 'Meme War',
      caption: 'Gamer credits for templates',
      icon: <Laugh className="w-6 h-6 text-amber-500" />,
      url: 'meme_wars.jpg',
      alt: 'Students laughing in front of laptops'
    },
    {
      title: 'Leg Balloon',
      caption: 'Fun group coordination',
      icon: <PartyPopper className="w-6 h-6 text-violet-400" />,
      url: 'leg_balloon.jpg',
      alt: 'Vibrant celebratory party with balloons'
    },
    {
      title: 'Buzzer Rounds',
      caption: 'Lightning technical trivia',
      icon: <Radio className="w-6 h-6 text-orange-400" />,
      url: 'buzzer.jpg',
      alt: 'Exciting quiz and buzzer systems'
    },
    {
      title: 'DJ Night',
      caption: 'Unwind with ambient beats',
      icon: <Music className="w-6 h-6 text-violet-400" />,
      url: 'dj_night.jpg',
      alt: 'Vibrant DJ decks and strobe lighting'
    },
    {
      title: 'Camp Fire',
      caption: 'Under-the-stars bonding',
      icon: <Flame className="w-6 h-6 text-amber-500" />,
      url: 'camp_fire.jpg',
      alt: 'Warm wood bonfire burning at night'
    }
  ];

  return (
    <div className="content animate-fade-in max-w-7xl mx-auto px-4 sm:px-8 py-12 text-[var(--text-color)]">
      <section className="py-12">
        {/* Eyebrow */}
        <div className="flex items-center gap-2 text-[var(--accent-amber)] font-bold tracking-wider text-sm md:text-base uppercase mb-4">
          <Trophy className="w-5 h-5 text-[var(--accent-amber)]" />
          Awards & Prizes
        </div>
        
        {/* Section Heading */}
        <h2 className="font-mono text-4xl md:text-6xl font-black tracking-tight mb-6">
          Up to ₹5 Lakhs. Multiple winners.
        </h2>
        
        {/* Tagline */}
        <p className="text-lg md:text-xl text-[var(--text-muted)] max-w-2xl leading-relaxed mb-12">
          Every track has its own rich prize pool. Plus special category awards, student travel allowances, and internship allocations for high-performance projects.
        </p>

        {/* TOP PRIZES GRID */}
        <div className="grid md:grid-cols-3 gap-6 items-end mb-16">
          
          {/* RUNNER-UP */}
          <div className="bg-[var(--glass-bg)] border border-[var(--glass-border)] hover:border-[var(--accent-amber)]/30 rounded-2xl p-8 text-center transition-all duration-300 order-2 md:order-1 flex flex-col items-center shadow-md">
            <span className="text-xs font-mono tracking-widest text-[var(--text-muted)] uppercase block mb-3">Runner-up</span>
            <div className="p-4 rounded-full bg-slate-300/5 mb-4 border border-[var(--glass-border)]">
              <Medal className="w-12 h-12 text-slate-300 drop-shadow-[0_0_10px_rgba(203,213,225,0.2)]" />
            </div>
            <h3 className="text-xl font-bold mb-1">2nd Place</h3>
            <span className="text-sm text-[var(--text-muted)] block mb-4">Per Track Winner</span>
            <span className="font-mono text-2xl font-black bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
              Cash Prize
            </span>
          </div>

          {/* GRAND CHAMPION */}
          <div className="bg-[var(--accent-violet)]/[0.05] border border-[var(--accent-violet-light)]/30 hover:border-[var(--accent-violet-light)]/50 rounded-2xl p-10 text-center transition-all duration-300 md:scale-105 z-10 order-1 md:order-2 flex flex-col items-center shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 inset-x-0 bg-gradient-to-b from-[var(--accent-violet)]/10 to-transparent h-20 pointer-events-none" />
            <span className="inline-block px-4 py-1.5 bg-[var(--accent-violet)]/20 text-[var(--accent-violet-light)] text-xs font-black tracking-widest uppercase rounded-full border border-[var(--accent-violet-light)]/30 mb-4 shadow-sm animate-pulse">
              🏆 Grand Champion
            </span>
            <div className="p-5 rounded-full bg-[var(--accent-violet)]/10 mb-5 border border-[var(--accent-violet-light)]/25">
              <Trophy className="w-16 h-16 text-yellow-400 drop-shadow-[0_0_15px_rgba(250,204,21,0.4)]" />
            </div>
            <h3 className="text-2xl font-black mb-1">1st Place</h3>
            <span className="text-sm text-[var(--accent-violet-light)] block mb-5">Overall Best Project</span>
            <span className="font-mono text-3xl font-black bg-gradient-to-r from-orange-500 via-amber-400 to-violet-400 bg-clip-text text-transparent">
              Cash Prize
            </span>
          </div>

          {/* THIRD PLACE */}
          <div className="bg-[var(--glass-bg)] border border-[var(--glass-border)] hover:border-[var(--accent-amber)]/20 rounded-2xl p-8 text-center transition-all duration-300 order-3 flex flex-col items-center shadow-md">
            <span className="text-xs font-mono tracking-widest text-[var(--text-muted)] uppercase block mb-3">Third Place</span>
            <div className="p-4 rounded-full bg-amber-700/5 mb-4 border border-[var(--glass-border)]">
              <Award className="w-12 h-12 text-amber-600 drop-shadow-[0_0_10px_rgba(217,119,6,0.15)]" />
            </div>
            <h3 className="text-xl font-bold mb-1">3rd Place</h3>
            <span className="text-sm text-[var(--text-muted)] block mb-4">Per Track Winner</span>
            <span className="font-mono text-2xl font-black bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
              Cash Prize
            </span>
          </div>

        </div>

        {/* SPECIAL AWARDS BENTO GRID */}
        <div className="mb-16">
          <div className="flex items-center gap-2 text-[var(--accent-amber)] font-bold tracking-wider text-sm md:text-base uppercase mb-6">
            <span className="w-4 h-px bg-[var(--accent-amber)]" />
            Special Category Awards
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            
            {/* BEST STARTUP AWARD - Extended banner layout */}
            <div className="sm:col-span-2 relative overflow-hidden bg-gradient-to-br from-amber-500/10 to-orange-500/5 border-2 border-[var(--accent-amber)]/30 hover:border-[var(--accent-amber)]/50 rounded-2xl p-6 flex flex-col items-center justify-center text-center shadow-lg transition-all">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.06),transparent_70%)] pointer-events-none" />
              <Rocket className="w-12 h-12 text-amber-400 mb-3 drop-shadow-[0_0_10px_rgba(245,158,11,0.3)] animate-pulse" />
              <h4 className="font-mono text-lg font-black text-amber-400 tracking-wider mb-1">
                BEST STARTUP AWARD
              </h4>
              <p className="text-xs md:text-sm text-amber-200/70 font-semibold uppercase tracking-widest">
                Winner Trophy + Incubation Pitching Access
              </p>
            </div>

            {/* BEST USE OF AI/ML */}
            <div className="bg-[var(--glass-bg)] border border-[var(--glass-border)] hover:border-[var(--accent-violet-light)]/30 rounded-xl p-5 text-center transition-colors flex flex-col items-center justify-center shadow-sm">
              <Brain className="w-10 h-10 text-[var(--accent-violet-light)] mb-3 drop-shadow-[0_0_5px_rgba(167,139,250,0.2)]" />
              <h4 className="text-base font-bold mb-0.5">Best Use of AI/ML</h4>
              <span className="text-xs text-[var(--text-muted)] uppercase tracking-wider font-mono">Special Recognition</span>
            </div>

            {/* BEST UI/UX DESIGN */}
            <div className="bg-[var(--glass-bg)] border border-[var(--glass-border)] hover:border-pink-500/20 rounded-xl p-5 text-center transition-colors flex flex-col items-center justify-center shadow-sm">
              <Palette className="w-10 h-10 text-pink-400 mb-3 drop-shadow-[0_0_5px_rgba(244,114,182,0.2)]" />
              <h4 className="text-base font-bold mb-0.5">Best UI/UX Design</h4>
              <span className="text-xs text-[var(--text-muted)] uppercase tracking-wider font-mono">Creative Trophy</span>
            </div>

            {/* MOST SOCIALLY IMPACTFUL */}
            <div className="bg-[var(--glass-bg)] border border-[var(--glass-border)] hover:border-emerald-500/20 rounded-xl p-5 text-center transition-colors flex flex-col items-center justify-center shadow-sm">
              <Globe className="w-10 h-10 text-emerald-400 mb-3 drop-shadow-[0_0_5px_rgba(52,211,153,0.2)]" />
              <h4 className="text-base font-bold mb-0.5">Socially Impactful</h4>
              <span className="text-xs text-[var(--text-muted)] uppercase tracking-wider font-mono">Value Builder Cup</span>
            </div>

            {/* INTERNSHIP ALLOCATION */}
            <div className="bg-[var(--glass-bg)] border border-[var(--glass-border)] hover:border-[var(--accent-violet-light)]/30 rounded-xl p-5 text-center transition-colors flex flex-col items-center justify-center shadow-sm">
              <FileText className="w-10 h-10 text-[var(--accent-violet-light)] mb-3 drop-shadow-[0_0_5px_rgba(139,92,246,0.2)]" />
              <h4 className="text-base font-bold text-[var(--accent-violet-light)] mb-0.5">Internship Offers</h4>
              <span className="text-xs text-[var(--text-muted)] uppercase tracking-wider font-mono">Top 5 Projects Allocated</span>
            </div>

            {/* EXCITING SWAGS */}
            <div className="bg-[var(--glass-bg)] border border-[var(--glass-border)] hover:border-[var(--accent-orange)]/30 rounded-xl p-5 text-center transition-colors flex flex-col items-center justify-center sm:col-span-2 lg:col-span-2 shadow-sm">
              <Gift className="w-10 h-10 text-[var(--accent-orange)] mb-3 drop-shadow-[0_0_5px_rgba(251,146,60,0.2)]" />
              <h4 className="text-base font-bold text-[var(--accent-orange)] mb-0.5">Official T-Shirts & Goodies</h4>
              <span className="text-xs text-[var(--text-muted)] uppercase tracking-wider font-mono">All Registered Active Builders</span>
            </div>

          </div>
        </div>

        {/* ENTERTAINMENT STRIP - WITH REAL PHOTOGRAPHY AND ICON OVERLAYS */}
        <div className="mb-12">
          <div className="flex items-center gap-2 text-[var(--accent-amber)] font-bold tracking-wider text-sm md:text-base uppercase mb-4">
            <span className="w-4 h-px bg-[var(--accent-amber)]" />
            Socials & Entertainment
          </div>
          <h3 className="font-mono text-3xl font-bold tracking-tight mb-4">
            It's not just hacking. Let's unwind.
          </h3>
          <p className="text-base md:text-lg text-[var(--text-muted)] mb-8 max-w-2xl leading-relaxed font-light">
            Innogenesis features exciting networking and recreational hours, allowing teams to reset their cognitive cycles and build memories.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {entertainmentActivities.map((act, idx) => (
              <div 
                key={idx}
                className="group relative rounded-2xl overflow-hidden border border-[var(--glass-border)] bg-zinc-950 aspect-[4/5] shadow-lg shadow-black/30 hover:border-[var(--accent-orange)]/30 transition-all duration-300"
              >
                {/* Background image */}
                <img
                  src={act.url}
                  alt={act.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-60 group-hover:opacity-85"
                  referrerPolicy="no-referrer"
                />

                {/* Dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent opacity-90 group-hover:opacity-85 transition-opacity" />

                {/* Floating circular icon container on top-right */}
                <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/50 backdrop-blur-md border border-white/10 flex items-center justify-center z-10 transition-transform duration-300 group-hover:rotate-12">
                  {act.icon}
                </div>

                {/* Text overlays */}
                <div className="absolute bottom-0 left-0 right-0 p-5 z-10">
                  <span className="text-[10px] font-mono tracking-widest text-[var(--accent-amber)] font-bold uppercase block mb-1">
                    ACTIVITY 0{idx + 1}
                  </span>
                  <h4 className="text-lg font-bold text-white mb-1 group-hover:text-[var(--accent-orange)] transition-colors">
                    {act.title}
                  </h4>
                  <p className="text-xs text-white/60 leading-normal">
                    {act.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* PRIZE DISCLAIMER BOX */}
        <div className="flex items-start gap-4 p-6 rounded-xl bg-[var(--accent-amber)]/5 border border-[var(--accent-amber)]/10 shadow-md">
          <Info className="w-5 h-5 text-[var(--accent-amber)] flex-shrink-0 mt-0.5" />
          <div className="space-y-1">
            <h5 className="text-sm font-bold">About Prize Distribution Rules</h5>
            <p className="text-sm text-[var(--text-muted)] leading-relaxed font-light">
              Total cash prizes of up to ₹5,00,000 are allocated across overall category grand champions, track runners-up, best startup candidates, and special design accolades. All active teams will be allocated physical participation credentials and official completion certificates.
            </p>
          </div>
        </div>

      </section>
    </div>
  );
}
