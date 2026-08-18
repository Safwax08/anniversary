import React from 'react';
import { coupleData } from '../data/loveStory';
import ScrollReveal from './ScrollReveal';

export default function StoryIntro() {
  const { storyIntro } = coupleData;

  return (
    <section id="story" className="py-24 md:py-36 px-6 md:px-16 bg-cream/80 border-t border-rose/10 relative overflow-hidden">
      {/* Background Soft Light Accent */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-blush/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <ScrollReveal animation="fade-up">
          <div className="text-center max-w-2xl mx-auto mb-16 md:mb-24 space-y-4">
            <span className="section-label inline-block bg-rose/5 px-3 py-1 rounded-full border border-rose/15">
              {storyIntro.label}
            </span>
            <h2 className="editorial-title text-3xl sm:text-4xl md:text-5xl text-textDark font-light text-glow">
              {storyIntro.headline}
            </h2>
            <div className="w-16 h-[1.5px] bg-gradient-to-r from-transparent via-rose to-transparent mx-auto mt-6" />
          </div>
        </ScrollReveal>

        {/* Editorial Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Photograph */}
          <div className="lg:col-span-6 relative">
            <ScrollReveal animation="slide-left" delay={200}>
              <div className="relative group sheen-wrapper rounded-lg">
                <div className="relative overflow-hidden bg-creamDark p-2 md:p-3 border border-rose/20 shadow-[0_15px_35px_rgba(41,36,38,0.06)] rounded-lg transition-all duration-500 group-hover:shadow-[0_20px_45px_rgba(201,135,145,0.2)]">
                  <img 
                    src={storyIntro.image} 
                    alt="Our Story Hands" 
                    className="editorial-image w-full h-[380px] sm:h-[460px] object-cover rounded-md transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                
                {/* Small Botanical / Accent Badge */}
                <div className="absolute -bottom-5 -right-4 bg-creamDark border border-rose/30 py-2.5 px-6 hidden sm:block shadow-md rounded-md backdrop-blur-xs animate-border-glow">
                  <span className="font-serif italic text-xs text-rose font-medium">Est. 2021 · Forever</span>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Editorial Narrative */}
          <div className="lg:col-span-6 space-y-6 md:space-y-8">
            <ScrollReveal animation="slide-right" delay={300}>
              <blockquote className="font-serif text-xl sm:text-2xl md:text-3xl text-textDark font-normal leading-relaxed italic border-l-2 border-rose pl-5 sm:pl-6 bg-blush/10 py-3 rounded-r-lg">
                “{storyIntro.quote}”
              </blockquote>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={450}>
              <p className="font-sans text-sm md:text-base text-textLight font-light leading-relaxed">
                {storyIntro.description}
              </p>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={550}>
              <p className="font-sans text-sm md:text-base text-textLight font-light leading-relaxed">
                {storyIntro.subtext}
              </p>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={650}>
              <div className="pt-4 flex items-center gap-4 text-xs font-sans tracking-widest text-rose uppercase font-medium">
                <span className="animate-spin" style={{ animationDuration: '8s' }}>✦</span>
                <div className="h-[1px] w-24 bg-gradient-to-r from-rose to-transparent" />
                <span>THE ADVENTURE OF US</span>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}

