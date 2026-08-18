import React from 'react';
import { coupleData } from '../data/loveStory';
import heroPhoto from '../assets/hero.jpg';
import ScrollReveal from './ScrollReveal';

export default function Hero() {
  return (
    <section 
      id="hero" 
      className="relative min-h-screen w-full flex flex-col justify-between pt-28 md:pt-36 pb-12 px-6 md:px-16 overflow-hidden bg-cream/60"
    >
      {/* Soft Top Glow Light Orb */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-96 h-96 bg-blush/20 rounded-full blur-3xl pointer-events-none animate-light-pulse" />

      {/* Top Tagline */}
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <ScrollReveal animation="fade-up" delay={200}>
          <span className="section-label inline-block font-sans text-[11px] md:text-xs tracking-[0.3em] uppercase text-rose font-medium bg-rose/10 px-3 py-1 rounded-full border border-rose/20 shadow-sm animate-border-glow">
            ✨ {coupleData.heroSubtitle}
          </span>
        </ScrollReveal>
      </div>

      {/* Main Asymmetric Editorial Grid */}
      <div className="max-w-7xl mx-auto w-full my-auto py-8 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center relative z-10">
        {/* Left Column: Typography & Title */}
        <div className="lg:col-span-7 flex flex-col justify-center space-y-6 md:space-y-8">
          <ScrollReveal animation="fade-up" delay={400}>
            <h1 className="editorial-title text-5xl sm:text-6xl md:text-7xl xl:text-8xl text-textDark tracking-tight font-light leading-[1.08]">
              <span className="block text-glow hover:text-rose transition-colors duration-500">{coupleData.names.groom}</span>
              <span className="font-script text-5xl sm:text-6xl md:text-7xl text-rose font-normal my-2 block ml-4 drop-shadow-sm transform hover:scale-110 transition-transform duration-300 inline-block">
                &amp;
              </span>
              <span className="block text-glow hover:text-rose transition-colors duration-500">{coupleData.names.bride}</span>
            </h1>
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={600}>
            <div className="w-20 h-[1.5px] bg-gradient-to-r from-rose via-blush to-transparent my-2 animate-pulse" />
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={700}>
            <p className="font-sans text-sm md:text-base text-rose font-medium tracking-widest uppercase flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-rose animate-ping inline-block" />
              {coupleData.dateFormatted}
            </p>
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={800}>
            <p className="font-serif italic text-lg md:text-xl text-textDark/80 max-w-md leading-relaxed font-light backdrop-blur-xs p-2 rounded-lg">
              “{coupleData.heroTagline}”
            </p>
          </ScrollReveal>
        </div>

        {/* Right Column: Editorial Offset Photography */}
        <div className="lg:col-span-5 relative">
          <ScrollReveal animation="slide-right" delay={500}>
            <div className="relative group sheen-wrapper rounded-lg p-1">

              {/* Subtle Decorative Background Frame */}
              <div className="absolute -inset-3 md:-inset-4 bg-gradient-to-tr from-blush/40 to-rose/20 -z-10 rounded-xl transform translate-x-2 translate-y-3 transition-transform duration-500 group-hover:translate-x-3 group-hover:translate-y-4 group-hover:bg-blush/50" />
              
              <div className="relative overflow-hidden bg-creamDark shadow-[0_20px_45px_rgba(41,36,38,0.1)] border border-white/80 rounded-lg p-2 md:p-3 transition-all duration-500 group-hover:shadow-[0_25px_60px_rgba(201,135,145,0.25)]">
                <img 
                  src={heroPhoto} 
                  alt={`${coupleData.names.combined} Hero`} 
                  className="editorial-image w-full h-[460px] md:h-[540px] lg:h-[580px] object-cover rounded-md transition-transform duration-700 group-hover:scale-105"
                  loading="eager"
                />
              </div>

              <div className="mt-3 flex justify-between items-center text-[10px] uppercase font-sans tracking-[0.25em] text-textLight px-1">
                <span>ANNIVERSARY EDITION</span>
                <span>2026</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Bottom Scroll Indicator */}
      <div className="max-w-7xl mx-auto w-full flex justify-between items-end pt-4 border-t border-rose/20 text-xs text-textLight font-sans tracking-widest relative z-10">
        <span className="hidden sm:inline-block uppercase text-[10px] tracking-[0.3em]">
          CHAPTER ONE — BEGINNINGS
        </span>

        <a 
          href="#story" 
          className="inline-flex items-center gap-2 group text-[11px] tracking-[0.25em] text-textDark hover:text-rose transition-colors duration-300 py-1 font-medium"
        >
          <span>EXPLORE OUR STORY</span>
          <span className="transform transition-transform duration-300 group-hover:translate-y-1.5 text-rose">↓</span>
        </a>
      </div>
    </section>
  );
}

