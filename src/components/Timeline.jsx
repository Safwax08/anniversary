import React from 'react';
import { coupleData } from '../data/loveStory';
import ScrollReveal from './ScrollReveal';

export default function Timeline() {
  const { timeline } = coupleData;

  return (
    <section id="timeline" className="py-24 md:py-36 px-6 md:px-16 bg-creamDark/40 border-t border-rose/10 relative overflow-hidden">
      {/* Ambient background light circle */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-blush/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <ScrollReveal animation="fade-up">
          <div className="text-center max-w-2xl mx-auto mb-20 md:mb-28 space-y-4">
            <span className="section-label inline-block bg-rose/5 px-3 py-1 rounded-full border border-rose/15">
              OUR JOURNEY
            </span>
            <h2 className="editorial-title text-3xl sm:text-4xl md:text-5xl text-textDark font-light text-glow">
              Chapters Through Time
            </h2>
            <p className="font-serif italic text-base sm:text-lg text-textLight font-light">
              Every year marked another unforgettable milestone in our story.
            </p>
            <div className="w-16 h-[1.5px] bg-gradient-to-r from-transparent via-rose to-transparent mx-auto mt-6" />
          </div>
        </ScrollReveal>

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
                  <ScrollReveal animation={isEven ? 'slide-left' : 'slide-right'} delay={150}>
                    <div className="flex items-baseline gap-4">
                      <span className="font-serif text-4xl md:text-5xl text-rose font-light drop-shadow-xs">
                        {item.number}
                      </span>
                      <span className="font-sans text-xs tracking-[0.3em] text-rose uppercase font-medium bg-rose/10 px-2.5 py-0.5 rounded-md border border-rose/20">
                        YEAR {item.year}
                      </span>
                    </div>

                    <h3 className="editorial-title text-2xl sm:text-3xl md:text-4xl text-textDark font-normal mt-3 hover:text-rose transition-colors duration-300">
                      {item.title}
                    </h3>

                    <p className="font-serif italic text-base md:text-lg text-rose/90 font-light mt-2">
                      “{item.tagline}”
                    </p>

                    <div className="w-16 h-[1px] bg-gradient-to-r from-rose to-transparent my-4" />

                    <p className="font-sans text-sm md:text-base text-textLight font-light leading-relaxed">
                      {item.description}
                    </p>
                  </ScrollReveal>
                </div>

                {/* Photograph Column */}
                <div className={`lg:col-span-6 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                  <ScrollReveal animation={isEven ? 'slide-right' : 'slide-left'} delay={300}>
                    <div className="relative group sheen-wrapper rounded-lg">
                      <div className="relative overflow-hidden bg-white p-2 md:p-3 border border-rose/20 shadow-[0_15px_35px_rgba(41,36,38,0.06)] rounded-lg transition-all duration-500 group-hover:shadow-[0_22px_50px_rgba(201,135,145,0.22)] light-card">
                        <img 
                          src={item.image} 
                          alt={`${item.year} - ${item.title}`} 
                          className="editorial-image w-full h-[320px] sm:h-[400px] object-cover rounded-md transition-transform duration-700 group-hover:scale-105"
                          loading="lazy"
                        />
                        <div className="mt-2.5 flex justify-between items-center text-[10px] uppercase font-sans tracking-[0.2em] text-textLight px-1">
                          <span>MILESTONE {item.number}</span>
                          <span className="font-medium text-rose">{item.year}</span>
                        </div>
                      </div>
                    </div>
                  </ScrollReveal>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

