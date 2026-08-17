import React, { useState, useEffect } from 'react';
import { coupleData } from '../data/loveStory';

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
        // If the date is passed or today, show elapsed celebration or zeros
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
    <section id="countdown" className="py-24 md:py-36 px-6 md:px-16 bg-cream border-t border-rose/10">
      <div className="max-w-4xl mx-auto text-center space-y-12">
        {/* Header */}
        <div className="space-y-4">
          <span className="section-label inline-block">
            {countdown.label}
          </span>
          <h2 className="editorial-title text-3xl sm:text-4xl md:text-5xl text-textDark font-light">
            {countdown.headline}
          </h2>
          <p className="font-serif italic text-base sm:text-lg text-textLight font-light max-w-xl mx-auto">
            {countdown.subtitle}
          </p>
          <div className="w-12 h-[1px] bg-rose/40 mx-auto mt-6" />
        </div>

        {/* Minimalist Countdown Display */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 max-w-2xl mx-auto pt-6">
          {units.map((unit, index) => (
            <div key={unit.label} className="flex flex-col items-center p-4 border border-rose/15 bg-white/40">
              <span className="editorial-title text-4xl sm:text-5xl md:text-6xl text-textDark font-light">
                {unit.value}
              </span>
              <span className="font-sans text-[10px] tracking-[0.25em] text-rose uppercase mt-2 font-medium">
                {unit.label}
              </span>
            </div>
          ))}
        </div>

        <div className="text-xs font-sans tracking-widest text-textLight uppercase pt-4">
          AUGUST 17, 2026 · ANOTHER YEAR OF LOVE
        </div>
      </div>
    </section>
  );
}
