import React from 'react';
import { coupleData } from '../data/loveStory';

export default function StoryIntro() {
  const { storyIntro } = coupleData;

  return (
    <section id="story" className="py-24 md:py-36 px-6 md:px-16 bg-cream border-t border-rose/10">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-24 space-y-4">
          <span className="section-label inline-block">
            {storyIntro.label}
          </span>
          <h2 className="editorial-title text-3xl sm:text-4xl md:text-5xl text-textDark font-light">
            {storyIntro.headline}
          </h2>
          <div className="w-12 h-[1px] bg-rose/40 mx-auto mt-6" />
        </div>

        {/* Editorial Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Photograph */}
          <div className="lg:col-span-6 relative">
            <div className="relative overflow-hidden bg-creamDark p-2 border border-rose/10 shadow-[0_12px_30px_rgba(41,36,38,0.04)]">
              <img 
                src={storyIntro.image} 
                alt="Our Story Hands" 
                className="editorial-image w-full h-[380px] sm:h-[460px] object-cover"
                loading="lazy"
              />
            </div>
            
            {/* Small Botanical / Accent Badge */}
            <div className="absolute -bottom-5 -right-4 bg-creamDark border border-rose/20 py-2 px-5 hidden sm:block shadow-sm">
              <span className="font-serif italic text-xs text-textDark/80">Est. 2021 · Forever</span>
            </div>
          </div>

          {/* Right Column: Editorial Narrative */}
          <div className="lg:col-span-6 space-y-6 md:space-y-8">
            <blockquote className="font-serif text-xl sm:text-2xl md:text-3xl text-textDark font-normal leading-relaxed italic border-l-2 border-rose/30 pl-5 sm:pl-6">
              “{storyIntro.quote}”
            </blockquote>

            <p className="font-sans text-sm md:text-base text-textLight font-light leading-relaxed">
              {storyIntro.description}
            </p>

            <p className="font-sans text-sm md:text-base text-textLight font-light leading-relaxed">
              {storyIntro.subtext}
            </p>

            <div className="pt-4 flex items-center gap-4 text-xs font-sans tracking-widest text-rose uppercase">
              <span>✦</span>
              <div className="h-[1px] w-24 bg-rose/30" />
              <span>THE ADVENTURE OF US</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
