import React, { useState, useEffect } from 'react';
import { Heart, ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';

export default function SpecialMoments() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const moments = [
    {
      title: "Our First Trip",
      subtitle: "Summer Escape",
      description: "Hearing the ocean waves crash on the sandy shore, feeling the warm summer breeze, and holding your hand as we walked into the waves. It was our first long journey together, and it made me realize how perfectly we travel as a team.",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800",
    },
    {
      title: "That Special Day",
      subtitle: "Happy Celebration",
      description: "A candle-lit table, beautiful romantic music playing quietly, and the perfect chocolate dessert we split. Seeing the golden candlelight flicker in your eyes was the absolute highlight of my entire year.",
      image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?q=80&w=800",
    },
    {
      title: "Festival Magic",
      subtitle: "Sparklers & Smiles",
      description: "Writing each other's names in the air with glowing sparklers, laughing under the fireworks, and sharing a warm hug as the night grew cold. You bring so much bright light and happiness into my life.",
      image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=800",
    },
    {
      title: "Our Little Things",
      subtitle: "Cozy Sundays",
      description: "Waking up late, brewing two hot cups of coffee, and reading together on the sofa under a single blanket. These simple, quiet, routine moments with you are my absolute favorite memories of all.",
      image: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?q=80&w=800",
    },
  ];

  // Autoplay functionality
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev === moments.length - 1 ? 0 : prev + 1));
    }, 4500);
    return () => clearInterval(interval);
  }, [isPlaying]);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? moments.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === moments.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative min-h-screen pt-24 pb-16 px-6 flex flex-col justify-center">
      <div className="max-w-5xl mx-auto w-full z-10">
        
        {/* Page Header */}
        <div className="text-center mb-10">
          <div>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-textDark font-bold mb-3">
              Special Moments
            </h2>
            <div className="w-24 h-1 bg-primaryPink/60 mx-auto rounded-full mb-4" />
            <p className="text-textDark/70 text-base">
              Some moments stay in our hearts forever.
            </p>
          </div>
        </div>

        {/* Carousel Slider */}
        <div className="relative w-full glass-card rounded-3xl overflow-hidden shadow-xl border border-rosePink/30">
          
          <div>
            <div
              key={activeIndex}
              className="grid grid-cols-1 md:grid-cols-2 min-h-[400px] items-center"
            >
              {/* Image Column */}
              <div className="relative h-64 md:h-full w-full overflow-hidden">
                <img
                  src={moments[activeIndex].image}
                  alt={moments[activeIndex].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black/60 via-black/20 to-transparent" />
                
                {/* Image Overlay badge */}
                <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6">
                  <span className="text-white text-xs font-bold uppercase tracking-widest bg-primaryPink/90 px-3 py-1.5 rounded-full shadow-md">
                    {moments[activeIndex].subtitle}
                  </span>
                </div>
              </div>

              {/* Text Content Column */}
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <Heart className="h-8 w-8 text-primaryPink fill-primaryPink/10 mb-4" />
                <h3 className="font-serif text-2xl md:text-3xl font-bold text-textDark mb-4">
                  {moments[activeIndex].title}
                </h3>
                <p className="text-textDark/80 text-sm md:text-base font-light leading-relaxed mb-6">
                  {moments[activeIndex].description}
                </p>
              </div>
            </div>
          </div>

          {/* Navigation Controls Overlay */}
          <div className="absolute right-6 bottom-6 flex items-center gap-3 z-20">
            {/* Play/Pause */}
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="p-2.5 rounded-full bg-white/70 hover:bg-white text-primaryPink shadow-sm hover:scale-105 active:scale-95 transition-all duration-300"
              aria-label={isPlaying ? "Pause autoplay" : "Play autoplay"}
            >
              {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
            </button>

            {/* Left */}
            <button
              onClick={handlePrev}
              className="p-2.5 rounded-full bg-white/70 hover:bg-white text-primaryPink shadow-sm hover:scale-105 active:scale-95 transition-all duration-300"
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>

            {/* Right */}
            <button
              onClick={handleNext}
              className="p-2.5 rounded-full bg-white/70 hover:bg-white text-primaryPink shadow-sm hover:scale-105 active:scale-95 transition-all duration-300"
              aria-label="Next slide"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Bullet Dot Indicators */}
        <div className="flex justify-center gap-2 mt-6">
          {moments.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                activeIndex === idx ? 'w-8 bg-primaryPink shadow-sm' : 'w-2.5 bg-rosePink/50 hover:bg-rosePink'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

      </div>
    </div>
  );
}
