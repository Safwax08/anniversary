import React, { useMemo } from 'react';

export default function LightParticles() {
  // Generate random light particles (very sparse and soft)
  const particles = useMemo(() => {
    return Array.from({ length: 10 }).map((_, i) => ({
      id: i,
      left: `${(i * 23 + 11) % 95}%`,
      top: `${(i * 31 + 17) % 90}%`,
      size: (i % 2 === 0) ? '10px' : '5px',
      delay: `${(i * 1.2) % 10}s`,
      duration: `${9 + ((i * 2) % 8)}s`,
      opacity: 0.05 + ((i % 3) * 0.03), // Whisper soft opacity (0.05 - 0.11)
      color: 'rgba(232, 195, 199, 0.4)',
    }));
  }, []);

  // Generate a tiny number of floating hearts (very sparse, barely visible)
  const floatingHearts = useMemo(() => {
    return Array.from({ length: 5 }).map((_, i) => ({
      id: `heart-${i}`,
      left: `${(i * 22 + 12) % 88}%`,
      top: `${(i * 28 + 18) % 85}%`,
      size: 12 + (i * 4), // 12px to 28px
      delay: `${(i * 2.5) % 12}s`,
      duration: `${14 + (i * 3)}s`, // Very slow floating motion
      opacity: 0.04 + (i * 0.02), // Extremely light opacity (0.04 - 0.12)
    }));
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none">
      {/* Large Ambient Light Glowing Orbs in Background */}
      <div 
        className="absolute top-[-10%] left-[-5%] w-[45vw] h-[45vw] rounded-full bg-blush/10 blur-[140px] animate-light-pulse"
        style={{ animationDuration: '12s' }}
      />
      <div 
        className="absolute bottom-[-10%] right-[-5%] w-[50vw] h-[50vw] rounded-full bg-rose/8 blur-[160px] animate-light-pulse"
        style={{ animationDuration: '15s', animationDelay: '4s' }}
      />

      {/* Floating Extremely Light Background Hearts (Only 5 across screen) */}
      {floatingHearts.map((h) => (
        <div
          key={h.id}
          className="absolute pointer-events-none animate-float-particle"
          style={{
            left: h.left,
            top: h.top,
            width: `${h.size}px`,
            height: `${h.size}px`,
            animationDelay: h.delay,
            animationDuration: h.duration,
            opacity: h.opacity,
          }}
        >
          <svg 
            viewBox="0 0 24 24" 
            fill="rgba(201, 135, 145, 0.6)" 
            className="w-full h-full"
          >
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        </div>
      ))}

      {/* Sparse Bokeh Light Particles */}
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full pointer-events-none animate-float-particle"
          style={{
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
            backgroundColor: p.color,
            boxShadow: `0 0 8px ${p.color}`,
            animationDelay: p.delay,
            animationDuration: p.duration,
            opacity: p.opacity,
          }}
        />
      ))}
    </div>
  );
}


