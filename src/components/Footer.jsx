import React from 'react';
import { Instagram, Youtube, Mail, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative w-full border-t border-rosePink/20 glass py-10 mt-auto z-10">
      <div className="max-w-4xl mx-auto px-6 text-center flex flex-col items-center gap-6">
        {/* Heart beat */}
        <div className="relative">
          <Heart className="h-10 w-10 fill-primaryPink text-primaryPink animate-pulse" />
          <Heart className="h-10 w-10 fill-primaryPink/40 text-primaryPink/40 absolute inset-0 animate-ping" />
        </div>

        {/* Message */}
        <div className="flex flex-col gap-2">
          <p className="font-serif text-lg md:text-xl text-primaryPink italic font-medium">
            "Made with ❤️ for you, always and forever."
          </p>
          <p className="text-sm text-textDark/65">
            Every step we take is a new chapter in our beautiful love story.
          </p>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-5 mt-2">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white hover:bg-rosePink/10 text-primaryPink border border-rosePink/20 rounded-full hover:scale-110 active:scale-95 transition-all duration-300 shadow-sm"
            aria-label="Instagram"
          >
            <Instagram className="h-5 w-5" />
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white hover:bg-rosePink/10 text-primaryPink border border-rosePink/20 rounded-full hover:scale-110 active:scale-95 transition-all duration-300 shadow-sm"
            aria-label="YouTube"
          >
            <Youtube className="h-5 w-5" />
          </a>
          <a
            href="mailto:love@forever.com"
            className="p-3 bg-white hover:bg-rosePink/10 text-primaryPink border border-rosePink/20 rounded-full hover:scale-110 active:scale-95 transition-all duration-300 shadow-sm"
            aria-label="Email"
          >
            <Mail className="h-5 w-5" />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-xs text-textDark/50 mt-4">
          &copy; {new Date().getFullYear()} Our Forever. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
