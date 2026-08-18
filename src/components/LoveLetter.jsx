import React from 'react';
import { coupleData } from '../data/loveStory';
import ScrollReveal from './ScrollReveal';

export default function LoveLetter() {
  const { loveLetter } = coupleData;

  return (
    <section id="letter" className="py-28 md:py-40 px-6 md:px-16 bg-creamDark/60 border-t border-rose/15 relative overflow-hidden">
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blush/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-2xl mx-auto relative z-10">
        {/* Letter Label & Header */}
        <ScrollReveal animation="fade-up">
          <div className="text-center mb-12 md:mb-16 space-y-4">
            <span className="section-label inline-block bg-rose/5 px-3 py-1 rounded-full border border-rose/15">
              {loveLetter.label}
            </span>
            <div className="w-16 h-[1.5px] bg-gradient-to-r from-transparent via-rose to-transparent mx-auto" />
          </div>
        </ScrollReveal>

        {/* Physical Paper Styled Container */}
        <ScrollReveal animation="scale-in" delay={200}>
          <div className="bg-cream p-8 sm:p-12 md:p-16 border border-rose/25 shadow-[0_20px_50px_rgba(41,36,38,0.07)] rounded-xl relative transition-all duration-500 hover:shadow-[0_25px_60px_rgba(201,135,145,0.2)]">
            {/* Subtle Vintage Corner Stamp / Accent */}
            <div className="absolute top-6 right-6 text-rose/60 text-xs font-serif italic hidden sm:block bg-blush/10 px-2.5 py-1 rounded border border-rose/20 animate-pulse">
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
              <p className="font-script text-3xl sm:text-4xl text-rose font-normal text-glow">
                {loveLetter.author}
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

