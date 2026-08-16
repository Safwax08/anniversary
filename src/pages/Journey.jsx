import React from 'react';
import { Heart, Compass, TrendingUp, Camera, MapPin, Sparkles } from 'lucide-react';

export default function Journey() {
  const steps = [
    {
      year: "2019",
      title: "The Beginning",
      description: "Where it all started. Our paths crossed, sparks flew, and a beautiful connection was born.",
      image: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?q=80&w=400",
      icon: Heart,
    },
    {
      year: "2020",
      title: "First Adventure",
      description: "Making memories together. Embracing road trips, new places, and learning each other's quirks.",
      image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?q=80&w=400",
      icon: Compass,
    },
    {
      year: "2021",
      title: "Growing Together",
      description: "Stronger with every single moment. Overcoming obstacles and reinforcing our trust.",
      image: "https://images.unsplash.com/photo-1464746133101-a2c3f88e0dd9?q=80&w=400",
      icon: TrendingUp,
    },
    {
      year: "2022",
      title: "Beautiful Memories",
      description: "A year full of love, laughter, shared celebrations, and building our cozy routines.",
      image: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=400",
      icon: Camera,
    },
    {
      year: "2023",
      title: "More Adventures",
      description: "Exploring new horizons, travelling far, and sharing a million smiles in many places.",
      image: "https://images.unsplash.com/photo-1494774157365-9e04c6722e47?q=80&w=400",
      icon: MapPin,
    },
    {
      year: "2024",
      title: "And Beyond...",
      description: "Our story never ends. Looking forward to an infinity of years and memories with you.",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=400",
      icon: Sparkles,
    },
  ];

  return (
    <div className="relative min-h-screen pt-24 pb-16 px-6 overflow-x-hidden">
      
      {/* Page Header */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <div>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-textDark font-bold mb-3 flex items-center justify-center gap-2">
            Our Journey Together
          </h2>
          <div className="w-24 h-1 bg-primaryPink/60 mx-auto rounded-full mb-4" />
          <p className="text-textDark/70 text-base">
            Tracing our footprints through the years.
          </p>
        </div>
      </div>

      {/* Horizontal roadmap container */}
      <div className="max-w-7xl mx-auto relative px-4">
        
        {/* Horizontal connect line on desktop */}
        <div className="absolute top-[135px] left-8 right-8 h-1 bg-gradient-to-r from-primaryPink/25 via-rosePink to-primaryPink/25 rounded-full hidden lg:block" />

        {/* Journey Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 relative z-10">
          {steps.map((step, index) => {
            const IconComponent = step.icon;

            return (
              <div
                key={index}
                className="flex flex-col items-center text-center group"
              >
                {/* Year Bubble */}
                <div className="bg-primaryPink text-white font-serif font-bold text-lg px-4 py-1.5 rounded-full shadow-md z-10 transition-transform duration-300 group-hover:scale-110 mb-4">
                  {step.year}
                </div>

                {/* Road Line Node / Icon */}
                <div className="h-16 w-16 rounded-full bg-white border-2 border-primaryPink/60 flex items-center justify-center shadow-lg z-10 mb-6 group-hover:border-primaryPink group-hover:scale-110 transition-all duration-300">
                  <IconComponent className="h-7 w-7 text-primaryPink" />
                </div>

                {/* Info Card */}
                <div className="glass-card rounded-2xl p-4 w-full flex flex-col items-center flex-grow hover:shadow-xl hover:border-primaryPink/40 transition-all duration-300">
                  {/* Aspect ratio picture */}
                  <div className="relative aspect-video w-full rounded-xl overflow-hidden mb-3.5 shadow-sm">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  
                  <h3 className="font-serif text-lg font-bold text-textDark mb-1">
                    {step.title}
                  </h3>
                  <p className="text-xs text-textDark/75 font-light leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      
    </div>
  );
}
