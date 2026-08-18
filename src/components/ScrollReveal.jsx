import React, { useEffect, useRef, useState } from 'react';

export default function ScrollReveal({
  children,
  animation = 'fade-up', // 'fade-up', 'fade-in', 'scale-in', 'slide-left', 'slide-right'
  delay = 0,
  duration = 1400, // Luxurious slow 1.4s animation
  className = '',
}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  const getAnimationStyles = () => {
    const baseTransition = `opacity ${duration}ms cubic-bezier(0.16, 1, 0.3, 1), transform ${duration}ms cubic-bezier(0.16, 1, 0.3, 1), filter ${duration}ms cubic-bezier(0.16, 1, 0.3, 1)`;
    const delayStyle = `${delay}ms`;

    if (animation === 'fade-up') {
      return {
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(42px)',
        filter: isVisible ? 'blur(0px)' : 'blur(5px)',
        transition: baseTransition,
        transitionDelay: delayStyle,
        willChange: 'transform, opacity, filter',
      };
    }

    if (animation === 'scale-in') {
      return {
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'scale(1)' : 'scale(0.94)',
        filter: isVisible ? 'blur(0px)' : 'blur(6px)',
        transition: baseTransition,
        transitionDelay: delayStyle,
        willChange: 'transform, opacity, filter',
      };
    }

    if (animation === 'slide-left') {
      // Slow cinematic slide from LEFT with soft blur dissolve
      return {
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateX(0) scale(1)' : 'translateX(-60px) scale(0.97)',
        filter: isVisible ? 'blur(0px)' : 'blur(6px)',
        transition: baseTransition,
        transitionDelay: delayStyle,
        willChange: 'transform, opacity, filter',
      };
    }

    if (animation === 'slide-right') {
      // Slow cinematic slide from RIGHT with soft blur dissolve
      return {
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateX(0) scale(1)' : 'translateX(60px) scale(0.97)',
        filter: isVisible ? 'blur(0px)' : 'blur(6px)',
        transition: baseTransition,
        transitionDelay: delayStyle,
        willChange: 'transform, opacity, filter',
      };
    }

    // Default 'fade-in' with blur dissolve
    return {
      opacity: isVisible ? 1 : 0,
      filter: isVisible ? 'blur(0px)' : 'blur(6px)',
      transition: `opacity ${duration}ms cubic-bezier(0.16, 1, 0.3, 1), filter ${duration}ms cubic-bezier(0.16, 1, 0.3, 1)`,
      transitionDelay: delayStyle,
      willChange: 'opacity, filter',
    };
  };

  return (
    <div ref={ref} style={getAnimationStyles()} className={className}>
      {children}
    </div>
  );
}

