import React from 'react';
import { coupleData } from '../data/loveStory';
import heroPhoto from '../assets/hero.jpg';

export default function Hero() {
  return (
    <section 
      id="hero" 
      className="relative min-h-screen w-full flex flex-col justify-between pt-28 md:pt-36 pb-12 px-6 md:px-16 overflow-hidden bg-cream"
    >
      {/* Top Tagline */}
      <div className="max-w-7xl mx-auto w-full">
        <div className="animate-fade-up" style={{ animationDelay: '200ms' }}>
          <span className="section-label inline-block font-sans text-[11px] md:text-xs tracking-[0.3em] uppercase text-rose font-medium">
            {coupleData.heroSubtitle}
          </span>
        </div>
      </div>

      {/* Main Asymmetric Editorial Grid */}
      <div className="max-w-7xl mx-auto w-full my-auto py-8 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        {/* Left Column: Typography & Title */}
        <div className="lg:col-span-7 flex flex-col justify-center space-y-6 md:space-y-8 animate-fade-up" style={{ animationDelay: '400ms' }}>
          <h1 className="editorial-title text-5xl sm:text-6xl md:text-7xl xl:text-8xl text-textDark tracking-tight font-light leading-[1.08]">
            <span className="block">{coupleData.names.groom}</span>
            <span className="font-script text-4xl sm:text-5xl md:text-6xl text-rose font-normal my-1 block ml-2">
              &amp;
            </span>
            <span className="block">{coupleData.names.bride}</span>
          </h1>

          <div className="w-16 h-[1px] bg-rose/40 my-2" />

          <p className="font-sans text-sm md:text-base text-textLight font-light tracking-widest uppercase">
            {coupleData.dateFormatted}
          </p>

          <p className="font-serif italic text-lg md:text-xl text-textDark/70 max-w-md leading-relaxed font-light">
            “{coupleData.heroTagline}”
          </p>
        </div>

        {/* Right Column: Editorial Offset Photography */}
        <div className="lg:col-span-5 relative animate-fade-in" style={{ animationDelay: '700ms' }}>
          {/* Subtle Decorative Background Frame */}
          <div className="absolute -inset-3 md:-inset-4 bg-blush/25 -z-10 rounded-sm transform translate-x-2 translate-y-3" />
          
          <div className="relative overflow-hidden bg-creamDark shadow-[0_15px_35px_rgba(41,36,38,0.06)] border border-white/60 p-2 md:p-3">
            <img 
              src={heroPhoto} 
              alt={`${coupleData.names.combined} Hero`} 
              className="editorial-image w-full h-[460px] md:h-[540px] lg:h-[580px] object-cover"
              loading="eager"
            />
          </div>

          <div className="mt-3 flex justify-between items-center text-[10px] uppercase font-sans tracking-[0.25em] text-textLight">
            <span>ANNIVERSARY EDITION</span>
            <span>2026</span>
          </div>
        </div>
      </div>

      {/* Bottom Scroll Indicator */}
      <div className="max-w-7xl mx-auto w-full flex justify-between items-end pt-4 border-t border-rose/15 text-xs text-textLight font-sans tracking-widest">
        <span className="hidden sm:inline-block uppercase text-[10px]">
          CHAPTER ONE — BEGINNINGS
        </span>

        <a 
          href="#story" 
          className="inline-flex items-center gap-2 group text-[11px] tracking-[0.25em] text-textDark hover:text-rose transition-colors duration-300 py-1"
        >
          <span>EXPLORE OUR STORY</span>
          <span className="transform transition-transform duration-300 group-hover:translate-y-1">↓</span>
        </a>
      </div>
    </section>
  );
}
