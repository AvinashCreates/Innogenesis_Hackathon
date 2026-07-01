declare module 'react';
import { useEffect, useRef, useState } from 'react';
import Logo from './Logo';

export default function IntroOverlay() {
  const [visible, setVisible] = useState(false);
  const [showSkip, setShowSkip] = useState(false);
  const [videoEnded, setVideoEnded] = useState(false);
  const [progressWidth, setProgressWidth] = useState(0);
  const [videoError, setVideoError] = useState(false);
  const [useFallback, setUseFallback] = useState(false);

  const overlayRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const SESSION_KEY = 'nri_intro_seen_2026';

  useEffect(() => {
    // Check if the user has already seen the intro during this browser session
    const seen = sessionStorage.getItem(SESSION_KEY);
    if (seen === '1') {
      setVisible(false);
      document.body.style.overflow = '';
      return;
    }

    // Otherwise, show the intro overlay and freeze scrolling
    setVisible(true);
    document.body.style.overflow = 'hidden';

    // Show the "Skip intro" button after 2 seconds
    const timer = setTimeout(() => {
      setShowSkip(true);
    }, 2000);

    // If the video hasn't loaded or played within 1.5 seconds, activate the beautiful fallback
    const fallbackTimer = setTimeout(() => {
      const video = videoRef.current;
      if (!video || video.paused || video.currentTime === 0) {
        setUseFallback(true);
      }
    }, 1500);

    return () => {
      clearTimeout(timer);
      clearTimeout(fallbackTimer);
    };
  }, []);

  const handleEnterSite = () => {
    sessionStorage.setItem(SESSION_KEY, '1');
    document.body.style.overflow = '';

    const video = videoRef.current;
    if (video) {
      video.pause();
    }

    const overlay = overlayRef.current;
    if (overlay) {
      overlay.classList.add('opacity-0', 'pointer-events-none');
      setTimeout(() => {
        setVisible(false);
      }, 900); // matches transition speed
    } else {
      setVisible(false);
    }
  };

  // Standard Video playing logic
  useEffect(() => {
    if (!visible || useFallback || videoError) return;

    const video = videoRef.current;
    if (!video) return;

    // Play video. Handle autoplay blocker gracefully
    video.muted = false;
    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        // Autoplay blocked: mute video and retry
        video.muted = true;
        video.play().catch(() => {});
      });
    }

    const handleTimeUpdate = () => {
      if (video.duration) {
        setProgressWidth((video.currentTime / video.duration) * 100);
      }
    };

    const handleEnded = () => {
      video.pause();
      setProgressWidth(100);
      setVideoEnded(true);
    };

    video.addEventListener('timeupdate', handleTimeUpdate);
    video.addEventListener('ended', handleEnded);

    // Global click/key listeners to enter after video ends
    const handleGlobalTrigger = () => {
      if (videoEnded) {
        handleEnterSite();
      }
    };

    window.addEventListener('keydown', handleGlobalTrigger);
    window.addEventListener('click', handleGlobalTrigger);

    return () => {
      video.removeEventListener('timeupdate', handleTimeUpdate);
      video.removeEventListener('ended', handleEnded);
      window.removeEventListener('keydown', handleGlobalTrigger);
      window.removeEventListener('click', handleGlobalTrigger);
    };
  }, [visible, videoEnded, useFallback, videoError]);

  // Fallback timer when video is not playing/available
  useEffect(() => {
    if (!visible || (!useFallback && !videoError)) return;

    // Simulate the video progress over 7.5 seconds
    const duration = 7500; 
    const intervalTime = 50;
    const steps = duration / intervalTime;
    let currentStep = 0;

    const progressInterval = setInterval(() => {
      currentStep++;
      const percent = (currentStep / steps) * 100;
      if (percent >= 100) {
        setProgressWidth(100);
        setVideoEnded(true);
        clearInterval(progressInterval);
      } else {
        setProgressWidth(percent);
      }
    }, intervalTime);

    // Set up global click/key listeners to enter after fallback completes
    const handleGlobalTrigger = () => {
      if (videoEnded) {
        handleEnterSite();
      }
    };

    window.addEventListener('keydown', handleGlobalTrigger);
    window.addEventListener('click', handleGlobalTrigger);

    return () => {
      clearInterval(progressInterval);
      window.removeEventListener('keydown', handleGlobalTrigger);
      window.removeEventListener('click', handleGlobalTrigger);
    };
  }, [visible, useFallback, videoError, videoEnded]);

  if (!visible) return null;

  return (
    <div
      ref={overlayRef}
      id="intro-overlay"
      className="fixed inset-0 z-[99999] bg-[#0c0601] flex items-center justify-center transition-all duration-700 ease-out"
    >
      {/* BACKGROUND VIDEO or CINEMATIC FALLBACK */}
      <div className="absolute inset-0 w-full h-full overflow-hidden flex items-center justify-center bg-black/95 p-4">
        {/* Blurry ambient backdrop effect */}
        <div className="absolute inset-0 bg-cover bg-center filter blur-3xl opacity-20 pointer-events-none scale-105" />
        
        <div className="absolute inset-0 w-full h-full flex items-center justify-center relative">
          {(useFallback || videoError) ? (
            <div className="flex flex-col items-center justify-center text-center w-full h-full p-6 select-none relative z-10">
              <style>{`
                @keyframes floatWave {
                  0%, 100% { transform: translateY(0px) skewY(0deg); }
                  50% { transform: translateY(-10px) skewY(1deg); }
                }
                @keyframes shimmer {
                  0% { opacity: 0.3; filter: drop-shadow(0 0 5px rgba(249, 115, 22, 0.4)); }
                  50% { opacity: 0.9; filter: drop-shadow(0 0 25px rgba(249, 115, 22, 0.8)); }
                  100% { opacity: 0.3; filter: drop-shadow(0 0 5px rgba(249, 115, 22, 0.4)); }
                }
                @keyframes scaleIn {
                  0% { transform: scale(0.9); opacity: 0; }
                  100% { transform: scale(1); opacity: 1; }
                }
                .animate-float-wave {
                  animation: floatWave 4s ease-in-out infinite;
                }
                .animate-shimmer-glow {
                  animation: shimmer 3s ease-in-out infinite;
                }
                .animate-scale-in {
                  animation: scaleIn 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
                }
              `}</style>

              {/* Glowing ambient background circle inside the video box */}
              <div className="absolute w-[280px] h-[280px] md:w-[450px] md:h-[450px] rounded-full bg-gradient-to-tr from-orange-600/20 to-amber-500/10 blur-[80px] md:blur-[120px] pointer-events-none -translate-y-6 animate-pulse" style={{ animationDuration: '6s' }} />

              {/* Phase 1: Wavy ribbons animation (0s - 2.5s) */}
              {progressWidth < 35 && (
                <div className="flex flex-col items-center justify-center animate-scale-in">
                  <svg className="w-48 h-32 md:w-64 md:h-44 text-orange-500 animate-float-wave animate-shimmer-glow" viewBox="0 0 300 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 70 C 80 30, 120 110, 180 70 C 240 30, 260 70, 280 60" stroke="url(#orange-grad)" strokeWidth="18" strokeLinecap="round" />
                    <path d="M20 105 C 80 65, 120 145, 180 105 C 240 65, 260 105, 280 95" stroke="url(#orange-grad-2)" strokeWidth="18" strokeLinecap="round" />
                    <path d="M20 140 C 80 100, 120 180, 180 140 C 240 100, 260 140, 280 130" stroke="url(#orange-grad-3)" strokeWidth="18" strokeLinecap="round" />
                    <defs>
                      <linearGradient id="orange-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#ea580c" />
                        <stop offset="50%" stopColor="#f97316" />
                        <stop offset="100%" stopColor="#f59e0b" />
                      </linearGradient>
                      <linearGradient id="orange-grad-2" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#d97706" />
                        <stop offset="50%" stopColor="#f97316" />
                        <stop offset="100%" stopColor="#f59e0b" />
                      </linearGradient>
                      <linearGradient id="orange-grad-3" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#c2410c" />
                        <stop offset="50%" stopColor="#ea580c" />
                        <stop offset="100%" stopColor="#f59e0b" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <span className="text-xs font-mono tracking-[0.3em] uppercase text-amber-500/80 animate-pulse mt-4">NRI Brand Identity Loading</span>
                </div>
              )}

              {/* Phase 2: Dr. RVR NRI University Official Logo scales up and resolves (35% - 65%) */}
              {progressWidth >= 35 && progressWidth < 65 && (
                <div className="flex flex-col items-center justify-center animate-scale-in">
                  <div className="relative group">
                    <div className="absolute inset-0 bg-orange-500/20 rounded-full filter blur-xl scale-95 group-hover:scale-105 transition-transform" />
                    <Logo 
                      size="lg" 
                      className="relative z-10 filter drop-shadow-[0_0_15px_rgba(234,88,12,0.4)]"
                    />
                  </div>
                  <span className="text-xs font-mono tracking-[0.4em] uppercase text-orange-500 font-bold mt-6">DR. RVR NRI UNIVERSITY</span>
                </div>
              )}

              {/* Phase 3: INNOGENESIS Brand and Subtitle resolved (65%+) */}
              {progressWidth >= 65 && (
                <div className="flex flex-col items-center justify-center animate-scale-in">
                  <div className="flex items-center gap-4 mb-4">
                    <Logo 
                      size="sm" 
                      className="filter drop-shadow-[0_0_10px_rgba(234,88,12,0.3)]"
                    />
                    <div className="h-10 w-[1px] bg-white/20" />
                    <span className="font-mono text-3xl md:text-5xl font-black tracking-[0.2em] bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-400 bg-clip-text text-transparent filter drop-shadow-[0_2px_10px_rgba(234,88,12,0.2)]">
                      INNOGENESIS
                    </span>
                  </div>
                  <p className="text-xs md:text-sm font-bold tracking-[0.3em] text-white/90 uppercase max-w-xl leading-relaxed">
                    National Level Hackathon 2026
                  </p>
                  <p className="text-[10px] md:text-xs font-mono tracking-[0.15em] text-amber-500/70 uppercase mt-2">
                    August 7–8, 2026 · 24-Hour Non-stop Engineering Arena
                  </p>
                </div>
              )}
            </div>
          ) : (
            <video
              ref={videoRef}
              id="intro-video"
              autoPlay
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover min-w-full min-h-full rounded-none border-0 shadow-none select-none pointer-events-none"
              src="/final.mp4"
              onError={() => setVideoError(true)}
            />
          )}
        </div>
      </div>

      {/* GRADIENT ON COVER FOR HIGHER LEGIBILITY */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 pointer-events-none" />

      {/* SKIP BUTTON - Visible after 2 seconds */}
      {showSkip && (
        <button
          onClick={(e) => {
            e.stopPropagation(); // Prevents triggers
            handleEnterSite();
          }}
          className="absolute top-6 right-6 z-10 px-5 py-2.5 rounded-full bg-black/40 hover:bg-black/70 hover:text-amber-500 hover:border-amber-500/50 border border-white/10 text-white/70 text-xs font-semibold tracking-wider uppercase transition-all cursor-pointer backdrop-blur-md"
        >
          Skip intro ›
        </button>
      )}

      {/* DYNAMIC PROGRESS BAR AT BOTTOM */}
      <div className="absolute bottom-0 left-0 h-[3px] bg-gradient-to-r from-orange-600 via-amber-500 to-amber-300 transition-all duration-100 ease-linear" style={{ width: `${progressWidth}%` }} />

      {/* CLICK / TOUCH PROMPT WHEN VIDEO ENDS */}
      {videoEnded && (
        <div className="absolute bottom-16 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center">
          <button
            onClick={handleEnterSite}
            className="flex items-center gap-3.5 px-7 py-3.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20 hover:border-amber-500/40 cursor-pointer shadow-lg active:scale-95 transition-all group animate-bounce"
          >
            <div className="w-2.5 h-2.5 rounded-full bg-orange-500 shadow-lg shadow-orange-500/60 animate-ping" />
            <span className="font-sans text-xs md:text-sm font-bold tracking-widest text-white/95 uppercase">
              Press any key or click to enter
            </span>
          </button>
        </div>
      )}
    </div>
  );
}
