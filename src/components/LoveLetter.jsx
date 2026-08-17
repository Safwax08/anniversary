import React from 'react';
import { coupleData } from '../data/loveStory';

export default function LoveLetter() {
  const { loveLetter } = coupleData;

  return (
    <section id="letter" className="py-28 md:py-40 px-6 md:px-16 bg-creamDark border-t border-rose/15">
      <div className="max-w-2xl mx-auto">
        {/* Letter Label & Header */}
        <div className="text-center mb-12 md:mb-16 space-y-4">
          <span className="section-label inline-block">
            {loveLetter.label}
          </span>
          <div className="w-12 h-[1px] bg-rose/40 mx-auto" />
        </div>

        {/* Physical Paper Styled Container */}
        <div className="bg-cream p-8 sm:p-12 md:p-16 border border-rose/20 shadow-[0_12px_40px_rgba(41,36,38,0.04)] relative">
          {/* Subtle Vintage Corner Stamp / Accent */}
          <div className="absolute top-6 right-6 text-rose/40 text-xs font-serif italic hidden sm:block">
            ✦ S + H
          </div>

          {/* Letter Greeting */}
          <div className="mb-8">
            <h3 className="font-serif italic text-2xl sm:text-3xl text-textDark font-normal">
              {loveLetter.greeting}
            </h3>
          </div>

          {/* Letter Body Paragraphs */}
          <div className="space-y-6 text-textDark/85 font-serif text-lg sm:text-xl font-light leading-relaxed">
            {loveLetter.paragraphs.map((paragraph, idx) => (
              <p key={idx} className="indent-6 sm:indent-8">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Signoff */}
          <div className="mt-12 pt-8 border-t border-rose/20 text-right space-y-2">
            <p className="font-serif italic text-base sm:text-lg text-textLight">
              {loveLetter.signoff}
            </p>
            <p className="font-script text-3xl sm:text-4xl text-rose font-normal">
              {loveLetter.author}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
