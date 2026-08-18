import React from 'react';
import { coupleData } from '../data/loveStory';
import ScrollReveal from './ScrollReveal';

export default function FinalMessage() {
  const { finalMessage } = coupleData;

  return (
    <section className="py-28 md:py-44 px-6 md:px-16 bg-blushLight/30 border-t border-rose/15 text-center relative overflow-hidden">
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-rose/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto space-y-10 relative z-10">
        <ScrollReveal animation="fade-up">
          <div className="space-y-3">
            <span className="section-label inline-block bg-rose/10 px-3 py-1 rounded-full border border-rose/20">
              {finalMessage.tagline}
            </span>
            <h2 className="editorial-title text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-textDark font-light leading-tight text-glow">
              {finalMessage.headline}
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal animation="fade-up" delay={200}>
          <div className="w-20 h-[1.5px] bg-gradient-to-r from-transparent via-rose to-transparent mx-auto" />
        </ScrollReveal>

        {/* Framed Couple Portrait */}
        <ScrollReveal animation="slide-right" delay={300}>
          <div className="max-w-md mx-auto relative group sheen-wrapper rounded-lg">

            <div className="p-3 bg-white border border-rose/25 shadow-[0_20px_50px_rgba(41,36,38,0.08)] rounded-lg light-card">
              <img 
                src={finalMessage.image} 
                alt="Final couple portrait" 
                className="editorial-image w-full h-[380px] sm:h-[450px] object-cover rounded-md transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
            </div>
            <div className="mt-4 font-serif italic text-lg text-textDark/80">
              {finalMessage.subtitle}
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal animation="fade-up" delay={450}>
          <div className="pt-8">
            <p className="font-serif italic text-xl sm:text-2xl md:text-3xl text-rose font-light text-glow">
              “To a lifetime of chapters yet to be written.”
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

