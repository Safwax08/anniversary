import React from 'react';
import { coupleData } from '../data/loveStory';

export default function Footer() {
  return (
    <footer className="py-14 px-6 md:px-16 bg-cream border-t border-rose/15 text-center">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Monogram */}
        <div className="font-serif italic text-2xl tracking-widest text-textDark">
          {coupleData.names.monogram}
        </div>

        <div className="w-8 h-[1px] bg-rose/30 mx-auto" />

        {/* Footer Details */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-xs font-sans tracking-[0.2em] text-textLight uppercase">
          <span>Made with love ♡</span>
          <span className="hidden sm:inline text-rose/50">•</span>
          <span>Anniversary 2026</span>
          <span className="hidden sm:inline text-rose/50">•</span>
          <span>{coupleData.names.combined}</span>
        </div>
      </div>
    </footer>
  );
}
