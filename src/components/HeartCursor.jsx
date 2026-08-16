import React, { useEffect, useState } from 'react';

export default function HeartCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [trail, setTrail] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    // Check if device supports hover/coarse pointer (exclude touch-only devices)
    const hasMouse = window.matchMedia('(pointer: fine)').matches;
    if (!hasMouse) return;

    document.body.classList.add('custom-cursor-active');
    setIsVisible(true);

    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });

      // Randomly spawn trail particles to keep it sparse and beautiful
      if (Math.random() < 0.45) {
        const id = Math.random().toString(36).substring(2, 9);
        const newParticle = {
          id,
          x: e.clientX + (Math.random() * 12 - 6),
          y: e.clientY + (Math.random() * 12 - 6),
          size: Math.random() * 6 + 6,
          rotation: Math.random() * 360,
        };
        setTrail((prev) => [...prev.slice(-12), newParticle]);
      }
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    window.addEventListener('mousemove', updatePosition);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.body.classList.remove('custom-cursor-active');
      window.removeEventListener('mousemove', updatePosition);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    const interval = setInterval(() => {
      setTrail((prev) => prev.slice(1));
    }, 120);
    return () => clearInterval(interval);
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden">
      {/* Trail particles */}
      {trail.map((p) => (
        <div
          key={p.id}
          className="absolute select-none pointer-events-none text-rosePink/80 transition-all duration-700 ease-out"
          style={{
            left: p.x,
            top: p.y,
            transform: `translate(-50%, -50%) rotate(${p.rotation}deg) scale(0.6)`,
            fontSize: `${p.size}px`,
            opacity: 0,
            animation: 'cursor-particle-fade 0.7s forwards'
          }}
        >
          ❤️
        </div>
      ))}

      {/* Core Pointer */}
      <div
        className="absolute select-none pointer-events-none transition-transform duration-75 ease-out text-xl"
        style={{
          left: position.x,
          top: position.y,
          transform: `translate(-15%, -15%) scale(${isClicking ? 0.8 : 1})`,
        }}
      >
        💖
      </div>

      <style>{`
        @keyframes cursor-particle-fade {
          0% {
            opacity: 0.8;
            transform: translate(-50%, -50%) scale(1) translateY(0);
          }
          100% {
            opacity: 0;
            transform: translate(-50%, -50%) scale(0.2) translateY(-10px);
          }
        }
      `}</style>
    </div>
  );
}
