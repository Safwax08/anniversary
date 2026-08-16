import React, { useState, useEffect } from 'react';
import { Heart, Hourglass } from 'lucide-react';

export default function Countdown() {
  const getNextAnniversary = () => {
    const now = new Date();
    const currentYear = now.getFullYear();
    // Celebrate Anniversary on May 12
    let target = new Date(`May 12, ${currentYear} 00:00:00`);
    if (now > target) {
      target = new Date(`May 12, ${currentYear + 1} 00:00:00`);
    }
    return target;
  };

  const calculateTimeLeft = () => {
    const difference = +getNextAnniversary() - +new Date();
    let timeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeBlocks = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds },
  ];

  return (
    <div className="relative min-h-screen pt-24 pb-16 flex flex-col items-center justify-center px-6">
      
      {/* Background Decor */}
      <div className="absolute top-1/4 left-1/4 h-64 w-64 rounded-full bg-primaryPink/5 blur-3xl -z-10" />
      <div className="absolute bottom-1/4 right-1/4 h-64 w-64 rounded-full bg-rosePink/10 blur-3xl -z-10 animate-pulse-slow" />

      <div className="max-w-2xl w-full text-center z-10">
        
        {/* Page Header */}
        <div className="mb-12">
          <div className="flex flex-col items-center">
            <div className="h-14 w-14 rounded-full bg-rosePink/15 text-primaryPink flex items-center justify-center border border-rosePink/30 mb-4">
              <Hourglass className="h-6 w-6" />
            </div>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-textDark font-bold mb-3">
              Countdown to Our Next Anniversary
            </h2>
            <div className="w-24 h-1 bg-primaryPink/60 mx-auto rounded-full mb-4" />
            <p className="text-textDark/70 text-base italic">
              "Every second with you is precious, and every moment is a treasure."
            </p>
          </div>
        </div>

        {/* Counter Plates Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12">
          {timeBlocks.map((block, index) => (
            <div
              key={block.label}
              className="glass-card rounded-3xl p-6 flex flex-col items-center justify-center shadow-lg hover:shadow-xl hover:border-primaryPink/40 transition-all duration-300 relative group overflow-hidden border border-rosePink/20"
            >
              {/* Subtle top indicator bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-primaryPink opacity-70 group-hover:h-1.5 transition-all duration-300" />
              
              {/* Digit Box */}
              <span className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-primaryPink drop-shadow-sm select-none">
                {String(block.value).padStart(2, '0')}
              </span>
              
              {/* Label */}
              <span className="text-xs md:text-sm text-textDark/65 font-medium uppercase tracking-widest mt-2">
                {block.label}
              </span>
            </div>
          ))}
        </div>

        {/* Floating Heart Graphic */}
        <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass border border-rosePink/40 text-primaryPink text-sm font-semibold tracking-wide shadow-sm">
          <Heart className="h-4 w-4 fill-primaryPink text-primaryPink" />
          <span>Counting down to May 12th</span>
        </div>

      </div>
    </div>
  );
}
