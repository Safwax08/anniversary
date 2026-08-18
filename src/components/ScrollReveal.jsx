import React, { useEffect, useRef, useState } from 'react';

export default function ScrollReveal({
  children,
  animation = 'fade-up', // 'fade-up', 'fade-in', 'scale-in', 'slide-left', 'slide-right'
  delay = 0,
  duration = 1400,
  className = '',
}) {
  const ref = useRef(null);
  const [progress, setProgress] = useState(-1); // -1 (below) -> 0 (centered) -> +1 (above)
  const [hasEntered, setHasEntered] = useState(false);

  useEffect(() => {
    let animationFrameId;

    const updateProgress = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Center position of element relative to viewport center
      const elementCenter = rect.top + rect.height / 2;
      const viewportCenter = windowHeight / 2;

      // Normalized progress: -1 (below viewport), 0 (perfect center), +1 (above viewport)
      const rawProgress = (viewportCenter - elementCenter) / (windowHeight * 0.55);
      const clampedProgress = Math.max(-1.1, Math.min(1.1, rawProgress));

      // Check if element is close enough to viewport to render smoothly
      if (rect.top < windowHeight + 100 && rect.bottom > -100) {
        setHasEntered(true);
      }

      setProgress(clampedProgress);
    };

    const handleScroll = () => {
      animationFrameId = requestAnimationFrame(updateProgress);
    };

    updateProgress();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', updateProgress, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', updateProgress);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const getStyle = () => {
    const absProgress = Math.abs(progress);

    // Keep 100% opacity (1.0) throughout 80%+ of the viewport reading area
    // Only fade when element approaches extreme top or bottom screen edges (absProgress > 0.65)
    let opacity = 1;
    if (absProgress > 0.65) {
      opacity = Math.max(0, 1 - (absProgress - 0.65) * 3);
    }

    // Keep 0px pin-sharp blur throughout the reading area
    let blur = 0;
    if (absProgress > 0.82) {
      blur = Math.min(2, (absProgress - 0.82) * 8);
    }

    // Fluid continuous motion curve
    const transition = `transform 0.35s cubic-bezier(0.12, 0.9, 0.15, 1), opacity 0.35s ease-out, filter 0.35s ease-out`;

    if (animation === 'slide-left') {
      // Continuous slide: enters from Left (-48px) -> Center (0px) -> exits to Right (+48px)
      const translateX = progress * 48;
      const scale = 1 - Math.min(0.04, absProgress * 0.03);
      return {
        opacity,
        transform: `translateX(${translateX}px) scale(${scale})`,
        filter: blur > 0 ? `blur(${blur}px)` : 'none',
        transition,
        willChange: 'transform, opacity',
      };
    }

    if (animation === 'slide-right') {
      // Continuous slide: enters from Right (+48px) -> Center (0px) -> exits to Left (-48px)
      const translateX = -progress * 48;
      const scale = 1 - Math.min(0.04, absProgress * 0.03);
      return {
        opacity,
        transform: `translateX(${translateX}px) scale(${scale})`,
        filter: blur > 0 ? `blur(${blur}px)` : 'none',
        transition,
        willChange: 'transform, opacity',
      };
    }

    if (animation === 'scale-in') {
      const translateY = -progress * 24;
      const scale = 1 - Math.min(0.05, absProgress * 0.04);
      return {
        opacity,
        transform: `translateY(${translateY}px) scale(${scale})`,
        filter: blur > 0 ? `blur(${blur}px)` : 'none',
        transition,
        willChange: 'transform, opacity',
      };
    }

    // Default 'fade-up'
    const translateY = -progress * 32;
    return {
      opacity,
      transform: `translateY(${translateY}px)`,
      filter: blur > 0 ? `blur(${blur}px)` : 'none',
      transition,
      willChange: 'transform, opacity',
    };
  };


  return (
    <div ref={ref} style={getStyle()} className={className}>
      {children}
    </div>
  );
}



