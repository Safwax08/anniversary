import React from 'react';
import { coupleData } from '../data/loveStory';

export default function Timeline() {
  const { timeline } = coupleData;

  return (
    <section id="timeline" className="py-24 md:py-36 px-6 md:px-16 bg-creamDark/40 border-t border-rose/10">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20 md:mb-28 space-y-4">
          <span className="section-label inline-block">
            OUR JOURNEY
          </span>
          <h2 className="editorial-title text-3xl sm:text-4xl md:text-5xl text-textDark font-light">
            Chapters Through Time
          </h2>
          <p className="font-serif italic text-base sm:text-lg text-textLight font-light">
            Every year marked another unforgettable milestone in our story.
          </p>
          <div className="w-12 h-[1px] bg-rose/40 mx-auto mt-6" />
        </div>

        {/* Alternating Magazine Layout */}
        <div className="space-y-24 md:space-y-36">
          {timeline.map((item, index) => {
            const isEven = index % 2 === 0;

            return (
              <div 
                key={item.year} 
                className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center ${
                  isEven ? '' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Content Column */}
                <div className={`lg:col-span-6 space-y-6 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="flex items-baseline gap-4">
                    <span className="font-serif text-3xl md:text-4xl text-rose font-light">
                      {item.number}
                    </span>
                    <span className="font-sans text-xs tracking-[0.3em] text-textLight uppercase font-medium">
                      YEAR {item.year}
                    </span>
                  </div>

                  <h3 className="editorial-title text-2xl sm:text-3xl md:text-4xl text-textDark font-normal">
                    {item.title}
                  </h3>

                  <p className="font-serif italic text-base md:text-lg text-rose/90 font-light">
                    “{item.tagline}”
                  </p>

                  <div className="w-12 h-[1px] bg-rose/30" />

                  <p className="font-sans text-sm md:text-base text-textLight font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Photograph Column */}
                <div className={`lg:col-span-6 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div className="relative overflow-hidden bg-white p-2 border border-rose/15 shadow-[0_10px_30px_rgba(41,36,38,0.05)] group">
                    <img 
                      src={item.image} 
                      alt={`${item.year} - ${item.title}`} 
                      className="editorial-image w-full h-[320px] sm:h-[400px] object-cover"
                      loading="lazy"
                    />
                    <div className="mt-2.5 flex justify-between items-center text-[10px] uppercase font-sans tracking-[0.2em] text-textLight px-1">
                      <span>MILESTONE {item.number}</span>
                      <span>{item.year}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
