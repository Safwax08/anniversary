import React, { useEffect, useState } from 'react';

export default function HeartCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [trail, setTrail] = useState([]);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only activate on fine pointer devices (desktop / mouse)
    const hasMouse = window.matchMedia('(pointer: fine)').matches;
    if (!hasMouse) return;

    document.body.classList.add('custom-cursor-active');
    setIsVisible(true);

    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });

      // Spawn subtle trailing pink hearts matching Image 1
      if (Math.random() < 0.35) {
        const id = Math.random().toString(36).substring(2, 9);
        const newParticle = {
          id,
          x: e.clientX + (Math.random() * 16 - 8),
          y: e.clientY + (Math.random() * 16 - 8),
          size: Math.random() * 10 + 10,
          rotation: Math.random() * 40 - 20,
          isSparkle: Math.random() < 0.25,
        };
        setTrail((prev) => [...prev.slice(-14), newParticle]);
      }
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    const handleMouseOver = (e) => {
      const target = e.target;
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.getAttribute('role') === 'button' ||
        target.classList.contains('light-card') ||
        target.classList.contains('group')
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener('mousemove', updatePosition);
    window.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.body.classList.remove('custom-cursor-active');
      window.removeEventListener('mousemove', updatePosition);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  // Fade trail particles automatically
  useEffect(() => {
    if (!isVisible) return;
    const interval = setInterval(() => {
      setTrail((prev) => prev.slice(1));
    }, 100);
    return () => clearInterval(interval);
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden select-none">
      {/* Soft Pink Heart & Sparkle Particles (Image 1 style) */}
      {trail.map((p) => (
        <div
          key={p.id}
          className="absolute select-none pointer-events-none transition-all duration-700 ease-out"
          style={{
            left: p.x,
            top: p.y,
            transform: `translate(-50%, -50%) rotate(${p.rotation}deg)`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            animation: 'cursor-particle-float 0.8s ease-out forwards',
          }}
        >
          {p.isSparkle ? (
            <svg viewBox="0 0 24 24" fill="#FFB74D" className="w-full h-full drop-shadow-xs">
              <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" fill="rgba(244, 143, 177, 0.75)" className="w-full h-full filter drop-shadow-[0_2px_4px_rgba(244,143,177,0.4)]">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          )}
        </div>
      ))}

      {/* Main Light Red / Pink Rounded Arrow Cursor (Image 2 style) */}
      <div
        className="absolute select-none pointer-events-none transition-transform duration-75 ease-out"
        style={{
          left: position.x,
          top: position.y,
          transform: `translate(-2px, -2px) scale(${isClicking ? 0.85 : isHovered ? 1.2 : 1})`,
        }}
      >
        <svg 
          width="28" 
          height="28" 
          viewBox="0 0 32 32" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="filter drop-shadow-[0_4px_10px_rgba(201,135,145,0.45)]"
        >
          {/* Outer Rounded Light Red / Pink Arrow Path */}
          <path 
            d="M 4 3.5 C 3.2 2.8 2 3.4 2 4.5 L 2 24.5 C 2 25.7 3.4 26.3 4.3 25.4 L 9.8 19.9 L 14.8 28.5 C 15.3 29.4 16.5 29.7 17.4 29.2 L 20.2 27.6 C 21.1 27.1 21.4 25.9 20.9 25 L 15.9 16.4 L 22.8 16.4 C 23.9 16.4 24.5 15 23.7 14.1 Z" 
            fill="url(#lightRedGradient)" 
            stroke="#FFFFFF" 
            strokeWidth="2.4" 
            strokeLinejoin="round" 
            strokeLinecap="round"
          />
          <defs>
            <linearGradient id="lightRedGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F48FB1" />
              <stop offset="100%" stopColor="#E57373" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <style>{`
        @keyframes cursor-particle-float {
          0% {
            opacity: 0.85;
            transform: translate(-50%, -50%) scale(1) translateY(0);
          }
          100% {
            opacity: 0;
            transform: translate(-50%, -50%) scale(0.3) translateY(-18px);
          }
        }
      `}</style>
    </div>
  );
}


