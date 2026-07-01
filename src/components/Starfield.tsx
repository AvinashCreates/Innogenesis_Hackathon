import { useEffect, useRef } from 'react';

export default function Starfield() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = window.innerWidth;
    let height = window.innerHeight;

    // Star data structure
    interface Star {
      x: number;
      y: number;
      cx: number;
      cy: number;
      size: number;
      twinkleSpeed: number;
      twinklePhase: number;
      depth: number;
      angle: number;
      radialRatio: number;
      driftAmp: number;
      driftSpeed: number;
      driftPhase: number;
    }

    const STAR_COUNT = 150;
    const stars: Star[] = [];
    const goldenAngle = Math.PI * (3 - Math.sqrt(5));

    const initStars = () => {
      stars.length = 0;
      for (let i = 0; i < STAR_COUNT; i++) {
        const rand = Math.random();
        const size = rand > 0.95 ? 2.5 : rand > 0.7 ? 1.5 : 0.8;
        const x = Math.random() * width;
        const y = Math.random() * height;
        const depth = 0.05 + Math.random() * 0.25;

        stars.push({
          x,
          y,
          cx: x,
          cy: y,
          size,
          twinkleSpeed: 0.01 + Math.random() * 0.03,
          twinklePhase: Math.random() * Math.PI * 2,
          depth,
          angle: i * goldenAngle,
          radialRatio: Math.sqrt((i + 1) / STAR_COUNT),
          driftAmp: 3 + Math.random() * 5,
          driftSpeed: 0.001 + Math.random() * 0.002,
          driftPhase: Math.random() * Math.PI * 2,
        });
      }
    };

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      initStars();
    };

    window.addEventListener('resize', resize);
    resize();

    let mouseX = width / 2;
    let mouseY = height / 2;
    let lastMoveTime = performance.now();

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      lastMoveTime = performance.now();
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    const MAX_CLUSTER_RADIUS = Math.min(width, height) * 0.22;
    const IDLE_RETURN_MS = 900;

    const animate = (timestamp: number) => {
      ctx.clearRect(0, 0, width, height);

      const timeSinceMove = Math.max(0, timestamp - lastMoveTime);
      const rawFactor = Math.max(0, 1 - timeSinceMove / IDLE_RETURN_MS);
      const pullFactor = rawFactor * rawFactor * (3 - 2 * rawFactor);
      const dynamicallyInflatedRadius =
        MAX_CLUSTER_RADIUS * (0.85 + 0.15 * Math.sin(timestamp * 0.0015));

      for (let i = 0; i < stars.length; i++) {
        const s = stars[i];

        const targetSpreadRadius =
          dynamicallyInflatedRadius * s.radialRatio * (0.5 + 0.5 * (1 - s.depth));
        const targetX = mouseX + Math.cos(s.angle) * targetSpreadRadius;
        const targetY = mouseY + Math.sin(s.angle) * targetSpreadRadius;

        let tx = s.cx;
        let ty = s.cy;

        if (pullFactor > 0.01) {
          const targetVectorX = s.cx * (1 - pullFactor) + targetX * pullFactor;
          const targetVectorY = s.cy * (1 - pullFactor) + targetY * pullFactor;

          const driftX =
            Math.sin(timestamp * s.driftSpeed + s.driftPhase) * s.driftAmp;
          const driftY =
            Math.cos(timestamp * s.driftSpeed + s.driftPhase) * s.driftAmp;

          const trackingSpeed = 0.08 + s.depth * 0.04;
          s.x += (targetVectorX + driftX - s.x) * trackingSpeed;
          s.y += (targetVectorY + driftY - s.y) * trackingSpeed;
        } else {
          const driftX =
            Math.sin(timestamp * (s.driftSpeed * 0.4) + s.driftPhase) * s.driftAmp;
          const driftY =
            Math.cos(timestamp * (s.driftSpeed * 0.4) + s.driftPhase) * s.driftAmp;

          s.x += (s.cx + driftX - s.x) * 0.05;
          s.y += (s.cy + driftY - s.y) * 0.05;
        }

        // Draw star with twinkling alpha
        const twinkleAlpha =
          0.3 + 0.7 * Math.sin(timestamp * s.twinkleSpeed + s.twinklePhase);
        ctx.fillStyle = `rgba(255, 255, 255, ${twinkleAlpha})`;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      id="starfield"
      className="fixed inset-0 w-full h-full pointer-events-none z-[-2]"
    />
  );
}
