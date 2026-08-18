import React, { useState, useEffect } from 'react';
import { coupleData } from '../data/loveStory';
import ScrollReveal from './ScrollReveal';

export default function Countdown() {
  const { countdown } = coupleData;
  const targetDate = new Date(coupleData.anniversaryDate).getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTime = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTime();
    const timer = setInterval(calculateTime, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  const units = [
    { label: "DAYS", value: String(timeLeft.days).padStart(2, '0') },
    { label: "HOURS", value: String(timeLeft.hours).padStart(2, '0') },
    { label: "MINUTES", value: String(timeLeft.minutes).padStart(2, '0') },
    { label: "SECONDS", value: String(timeLeft.seconds).padStart(2, '0') },
  ];

  return (
    <section id="countdown" className="py-24 md:py-36 px-6 md:px-16 bg-cream border-t border-rose/10 relative overflow-hidden">
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blush/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center space-y-12 relative z-10">
        {/* Header */}
        <ScrollReveal animation="fade-up">
          <div className="space-y-4">
            <span className="section-label inline-block bg-rose/5 px-3 py-1 rounded-full border border-rose/15">
              {countdown.label}
            </span>
            <h2 className="editorial-title text-3xl sm:text-4xl md:text-5xl text-textDark font-light text-glow">
              {countdown.headline}
            </h2>
            <p className="font-serif italic text-base sm:text-lg text-textLight font-light max-w-xl mx-auto">
              {countdown.subtitle}
            </p>
            <div className="w-16 h-[1.5px] bg-gradient-to-r from-transparent via-rose to-transparent mx-auto mt-6" />
          </div>
        </ScrollReveal>

        {/* Minimalist Countdown Display */}
        <ScrollReveal animation="scale-in" delay={200}>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 max-w-2xl mx-auto pt-6">
            {units.map((unit) => (
              <div 
                key={unit.label} 
                className="flex flex-col items-center p-5 border border-rose/25 bg-white/70 backdrop-blur-xs rounded-xl shadow-[0_10px_30px_rgba(41,36,38,0.04)] light-card hover:border-rose transition-all duration-300"
              >
                <span className="editorial-title text-4xl sm:text-5xl md:text-6xl text-textDark font-light text-glow">
                  {unit.value}
                </span>
                <span className="font-sans text-[10px] tracking-[0.25em] text-rose uppercase mt-2 font-medium bg-rose/10 px-2 py-0.5 rounded border border-rose/20">
                  {unit.label}
                </span>
              </div>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal animation="fade-up" delay={400}>
          <div className="text-xs font-sans tracking-widest text-rose uppercase pt-4 font-medium flex items-center justify-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-rose animate-ping inline-block" />
            AUGUST 17, 2026 · ANOTHER YEAR OF LOVE
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

