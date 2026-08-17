import React from 'react';
import { coupleData } from '../data/loveStory';

export default function FinalMessage() {
  const { finalMessage } = coupleData;

  return (
    <section className="py-28 md:py-44 px-6 md:px-16 bg-blushLight/30 border-t border-rose/15 text-center relative overflow-hidden">
      {/* Subtle Background Accent */}
      <div className="max-w-4xl mx-auto space-y-10">
        <div className="space-y-3">
          <span className="section-label inline-block">
            {finalMessage.tagline}
          </span>
          <h2 className="editorial-title text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-textDark font-light leading-tight">
            {finalMessage.headline}
          </h2>
        </div>

        <div className="w-16 h-[1px] bg-rose/40 mx-auto" />

        {/* Framed Couple Portrait */}
        <div className="max-w-md mx-auto relative group">
          <div className="p-3 bg-white border border-rose/20 shadow-[0_15px_40px_rgba(41,36,38,0.06)]">
            <img 
              src={finalMessage.image} 
              alt="Final couple portrait" 
              className="editorial-image w-full h-[380px] sm:h-[450px] object-cover"
              loading="lazy"
            />
          </div>
          <div className="mt-4 font-serif italic text-lg text-textDark/80">
            {finalMessage.subtitle}
          </div>
        </div>

        <div className="pt-8">
          <p className="font-serif italic text-xl sm:text-2xl text-rose font-light">
            “To a lifetime of chapters yet to be written.”
          </p>
        </div>
      </div>
    </section>
  );
}
