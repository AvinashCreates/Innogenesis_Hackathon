import { useState, useEffect } from 'react';
import Starfield from './components/Starfield';
import Cursor from './components/Cursor';
import IntroOverlay from './components/IntroOverlay';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Tracks from './components/Tracks';
import Prizes from './components/Prizes';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import WhatsAppButton from './components/WhatsAppButton';

export default function App() {
  const [activePage, setActivePage] = useState<string>('home');
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');

  // Synchronize theme with HTML document root for seamless CSS variables integration
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'light') {
      root.classList.add('light-theme');
      root.classList.remove('dark-theme');
    } else {
      root.classList.add('dark-theme');
      root.classList.remove('light-theme');
    }
  }, [theme]);

  // Page dispatcher
  const renderActivePage = () => {
    switch (activePage) {
      case 'home':
        return <Home setActivePage={setActivePage} />;
      case 'about':
        return <About setActivePage={setActivePage} />;
      case 'tracks':
        return <Tracks />;
      case 'prizes':
        return <Prizes />;
      case 'faq':
        return <FAQ />;
      case 'contact':
        return <Contact theme={theme} />;
      default:
        return <Home setActivePage={setActivePage} />;
    }
  };

  return (
    <div className={`relative min-h-screen bg-[var(--bg-color)] text-[var(--text-color)] font-space selection:bg-amber-500/30 selection:text-amber-200 antialiased overflow-x-hidden transition-colors duration-300`}>
      {/* Cinematic Intro Overlay Video (plays once per browser session) */}
      <IntroOverlay />

      {/* GPU Accelerated Cosmic Starfield Animation */}
      <Starfield />

      {/* Interactive Custom Cursor Trails */}
      <Cursor theme={theme} />

      {/* AMBIENT BACKGROUNDS & GRID PATTERNS - exactly matching index.html */}
      <div className="ambient" aria-hidden="true">
        <div className="orb orb1"></div>
        <div className="orb orb2"></div>
        <div className="orb orb3"></div>
      </div>
      <div className="grid-bg" aria-hidden="true"></div>

      {/* Global Navigation Header (Increased height and enlarged typography) */}
      <Header
        activePage={activePage}
        setActivePage={setActivePage}
        theme={theme}
        setTheme={setTheme}
      />

      {/* Main Container - Increased padding top to pt-24 (96px) to match the larger header */}
      <main className="relative z-10 pt-20 sm:pt-24">
        {renderActivePage()}
      </main>

      {/* Floating Sticky WhatsApp Community Invite Button */}
      <WhatsAppButton />

      {/* Footer component */}
      <Footer setActivePage={setActivePage} />
    </div>
  );
}
