import React from 'react';
import { coupleData } from '../data/loveStory';

export default function MemoryGallery() {
  const { gallery } = coupleData;

  return (
    <section id="memories" className="py-24 md:py-36 px-6 md:px-16 bg-cream border-t border-rose/10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-24 space-y-4">
          <span className="section-label inline-block">
            MOMENTS &amp; MEMORIES
          </span>
          <h2 className="editorial-title text-3xl sm:text-4xl md:text-5xl text-textDark font-light">
            Captured In Silence
          </h2>
          <p className="font-serif italic text-base sm:text-lg text-textLight font-light">
            Fragments of love, laughter, and timeless glances.
          </p>
          <div className="w-12 h-[1px] bg-rose/40 mx-auto mt-6" />
        </div>

        {/* Editorial Collage Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 items-start">
          {/* Item 1: Tall / Portrait Left */}
          <div className="md:col-span-5 relative group">
            <div className="relative overflow-hidden bg-white p-2.5 border border-rose/15 shadow-[0_12px_32px_rgba(41,36,38,0.04)]">
              <img 
                src={gallery[0]?.image} 
                alt={gallery[0]?.title} 
                className="editorial-image w-full h-[460px] md:h-[540px] object-cover"
                loading="lazy"
              />
            </div>
            <div className="mt-4 space-y-1">
              <span className="font-sans text-[10px] tracking-[0.25em] text-rose uppercase">01 / ARCHIVE</span>
              <h4 className="editorial-title text-xl text-textDark">{gallery[0]?.title}</h4>
              <p className="font-serif italic text-sm text-textLight">{gallery[0]?.subtitle}</p>
            </div>
          </div>

          {/* Right Column: Two stacked items */}
          <div className="md:col-span-7 space-y-12">
            {/* Item 2: Wide Landscape */}
            <div className="relative group">
              <div className="relative overflow-hidden bg-white p-2.5 border border-rose/15 shadow-[0_12px_32px_rgba(41,36,38,0.04)]">
                <img 
                  src={gallery[1]?.image} 
                  alt={gallery[1]?.title} 
                  className="editorial-image w-full h-[280px] sm:h-[340px] object-cover"
                  loading="lazy"
                />
              </div>
              <div className="mt-4 flex justify-between items-start">
                <div className="space-y-1">
                  <span className="font-sans text-[10px] tracking-[0.25em] text-rose uppercase">02 / ARCHIVE</span>
                  <h4 className="editorial-title text-xl text-textDark">{gallery[1]?.title}</h4>
                  <p className="font-serif italic text-sm text-textLight">{gallery[1]?.subtitle}</p>
                </div>
                <span className="font-serif italic text-xs text-textLight pt-1">SUMMER DAYS</span>
              </div>
            </div>

            {/* Nested Split Row: Item 3 & 4 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-4">
              <div className="group">
                <div className="overflow-hidden bg-white p-2 border border-rose/15 shadow-[0_8px_24px_rgba(41,36,38,0.04)]">
                  <img 
                    src={gallery[2]?.image} 
                    alt={gallery[2]?.title} 
                    className="editorial-image w-full h-[240px] object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="mt-3 space-y-1">
                  <span className="font-sans text-[10px] tracking-[0.25em] text-rose uppercase">03 / ARCHIVE</span>
                  <h4 className="editorial-title text-lg text-textDark">{gallery[2]?.title}</h4>
                </div>
              </div>

              <div className="group sm:translate-y-6">
                <div className="overflow-hidden bg-white p-2 border border-rose/15 shadow-[0_8px_24px_rgba(41,36,38,0.04)]">
                  <img 
                    src={gallery[3]?.image} 
                    alt={gallery[3]?.title} 
                    className="editorial-image w-full h-[240px] object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="mt-3 space-y-1">
                  <span className="font-sans text-[10px] tracking-[0.25em] text-rose uppercase">04 / ARCHIVE</span>
                  <h4 className="editorial-title text-lg text-textDark">{gallery[3]?.title}</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
