import React from 'react';
import { coupleData } from '../data/loveStory';
import ScrollReveal from './ScrollReveal';

export default function MemoryGallery() {
  const { gallery } = coupleData;

  return (
    <section id="memories" className="py-24 md:py-36 px-6 md:px-16 bg-cream border-t border-rose/10 relative overflow-hidden">
      {/* Soft Ambient Light Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blush/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <ScrollReveal animation="fade-up">
          <div className="text-center max-w-2xl mx-auto mb-16 md:mb-24 space-y-4">
            <span className="section-label inline-block bg-rose/5 px-3 py-1 rounded-full border border-rose/15">
              MOMENTS &amp; MEMORIES
            </span>
            <h2 className="editorial-title text-3xl sm:text-4xl md:text-5xl text-textDark font-light text-glow">
              Captured In Silence
            </h2>
            <p className="font-serif italic text-base sm:text-lg text-textLight font-light">
              Fragments of love, laughter, and timeless glances.
            </p>
            <div className="w-16 h-[1.5px] bg-gradient-to-r from-transparent via-rose to-transparent mx-auto mt-6" />
          </div>
        </ScrollReveal>

        {/* Editorial Collage Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 items-start">
          {/* Item 1: Tall / Portrait Left */}
          <div className="md:col-span-5 relative group">
            <ScrollReveal animation="slide-left" delay={200}>
              <div className="sheen-wrapper rounded-lg">
                <div className="relative overflow-hidden bg-white p-2.5 md:p-3 border border-rose/20 shadow-[0_15px_35px_rgba(41,36,38,0.06)] rounded-lg light-card">
                  <img 
                    src={gallery[0]?.image} 
                    alt={gallery[0]?.title} 
                    className="editorial-image w-full h-[460px] md:h-[540px] object-cover rounded-md transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="mt-4 space-y-1 px-1">
                <span className="font-sans text-[10px] tracking-[0.25em] text-rose uppercase font-medium">01 / ARCHIVE</span>
                <h4 className="editorial-title text-xl md:text-2xl text-textDark group-hover:text-rose transition-colors duration-300">{gallery[0]?.title}</h4>
                <p className="font-serif italic text-sm text-textLight">{gallery[0]?.subtitle}</p>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Two stacked items */}
          <div className="md:col-span-7 space-y-12">
            {/* Item 2: Wide Landscape */}
            <div className="relative group">
              <ScrollReveal animation="slide-right" delay={300}>
                <div className="sheen-wrapper rounded-lg">
                  <div className="relative overflow-hidden bg-white p-2.5 md:p-3 border border-rose/20 shadow-[0_15px_35px_rgba(41,36,38,0.06)] rounded-lg light-card">
                    <img 
                      src={gallery[1]?.image} 
                      alt={gallery[1]?.title} 
                      className="editorial-image w-full h-[280px] sm:h-[340px] object-cover rounded-md transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                </div>
                <div className="mt-4 flex justify-between items-start px-1">
                  <div className="space-y-1">
                    <span className="font-sans text-[10px] tracking-[0.25em] text-rose uppercase font-medium">02 / ARCHIVE</span>
                    <h4 className="editorial-title text-xl md:text-2xl text-textDark group-hover:text-rose transition-colors duration-300">{gallery[1]?.title}</h4>
                    <p className="font-serif italic text-sm text-textLight">{gallery[1]?.subtitle}</p>
                  </div>
                  <span className="font-serif italic text-xs text-rose bg-blush/20 px-2.5 py-1 rounded-md">SUMMER DAYS</span>
                </div>
              </ScrollReveal>
            </div>

            {/* Nested Split Row: Item 3 & 4 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-4">
              <div className="group">
                <ScrollReveal animation="slide-left" delay={350}>
                  <div className="sheen-wrapper rounded-lg">
                    <div className="overflow-hidden bg-white p-2 md:p-2.5 border border-rose/20 shadow-[0_10px_28px_rgba(41,36,38,0.05)] rounded-lg light-card">
                      <img 
                        src={gallery[2]?.image} 
                        alt={gallery[2]?.title} 
                        className="editorial-image w-full h-[240px] object-cover rounded-md transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div className="mt-3 space-y-1 px-1">
                    <span className="font-sans text-[10px] tracking-[0.25em] text-rose uppercase font-medium">03 / ARCHIVE</span>
                    <h4 className="editorial-title text-lg md:text-xl text-textDark group-hover:text-rose transition-colors duration-300">{gallery[2]?.title}</h4>
                  </div>
                </ScrollReveal>
              </div>

              <div className="group sm:translate-y-6">
                <ScrollReveal animation="slide-right" delay={450}>
                  <div className="sheen-wrapper rounded-lg">
                    <div className="overflow-hidden bg-white p-2 md:p-2.5 border border-rose/20 shadow-[0_10px_28px_rgba(41,36,38,0.05)] rounded-lg light-card">
                      <img 
                        src={gallery[3]?.image} 
                        alt={gallery[3]?.title} 
                        className="editorial-image w-full h-[240px] object-cover rounded-md transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div className="mt-3 space-y-1 px-1">
                    <span className="font-sans text-[10px] tracking-[0.25em] text-rose uppercase font-medium">04 / ARCHIVE</span>
                    <h4 className="editorial-title text-lg md:text-xl text-textDark group-hover:text-rose transition-colors duration-300">{gallery[3]?.title}</h4>
                  </div>
                </ScrollReveal>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

