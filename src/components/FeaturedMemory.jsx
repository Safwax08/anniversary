import React from 'react';
import { coupleData } from '../data/loveStory';
import ScrollReveal from './ScrollReveal';

export default function FeaturedMemory() {
  const { featuredMoment } = coupleData;

  return (
    <section className="py-20 md:py-32 px-4 sm:px-8 md:px-12 bg-cream border-t border-rose/10 relative overflow-hidden">
      <div className="max-w-[94vw] xl:max-w-7xl mx-auto">
        <ScrollReveal animation="slide-left" delay={200}>
          {/* Full-width Container */}

          <div className="relative rounded-lg overflow-hidden bg-creamDark shadow-[0_25px_60px_rgba(41,36,38,0.12)] border border-rose/20 group">
            {/* Main Large Photograph */}
            <div className="relative h-[65vh] sm:h-[75vh] md:h-[82vh] w-full overflow-hidden">
              <img 
                src={featuredMoment.image} 
                alt="Featured Memory" 
                className="w-full h-full object-cover object-center transition-transform duration-1000 group-hover:scale-105"
                loading="lazy"
              />

              {/* Dynamic Gradient Vignette with Light Pulse */}
              <div className="absolute inset-0 bg-gradient-to-t from-textDark/90 via-textDark/35 to-transparent transition-opacity duration-500 group-hover:opacity-95" />

              {/* Overlaid Editorial Content */}
              <div className="absolute bottom-0 left-0 w-full p-6 sm:p-10 md:p-16 text-white flex flex-col justify-end z-10">
                <ScrollReveal animation="fade-up" delay={200}>
                  <div className="max-w-3xl space-y-4">
                    <span className="font-sans text-[11px] sm:text-xs tracking-[0.3em] uppercase text-blush font-medium inline-block bg-white/10 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
                      ✨ {featuredMoment.label}
                    </span>

                    <h3 className="editorial-title text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light leading-snug text-glow">
                      {featuredMoment.quote}
                    </h3>

                    <p className="font-sans text-xs sm:text-sm text-white/90 font-light leading-relaxed max-w-2xl pt-1">
                      {featuredMoment.description}
                    </p>

                    <div className="pt-3 flex items-center gap-3 text-[10px] sm:text-xs font-sans tracking-widest text-blush uppercase">
                      <span className="animate-ping">✦</span>
                      <span>{featuredMoment.caption}</span>
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

