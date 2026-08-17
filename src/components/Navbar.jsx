import React, { useState, useEffect } from 'react';
import { coupleData } from '../data/loveStory';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: "OUR STORY", href: "#story" },
    { name: "TIMELINE", href: "#timeline" },
    { name: "MEMORIES", href: "#memories" },
    { name: "LETTER", href: "#letter" },
    { name: "COUNTDOWN", href: "#countdown" },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ${
        scrolled 
          ? 'bg-cream/90 backdrop-blur-md py-4 border-b border-rose/10 shadow-[0_2px_15px_rgba(41,36,38,0.03)]' 
          : 'bg-transparent py-7'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Monogram Brand */}
        <a 
          href="#hero" 
          className="font-serif text-xl md:text-2xl tracking-widest text-textDark hover:text-rose transition-colors duration-300 flex items-center gap-2"
        >
          <span className="font-serif italic font-light">{coupleData.names.monogram}</span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-9">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[11px] font-sans font-medium tracking-[0.22em] text-textDark/80 hover:text-rose transition-colors duration-300 relative py-1 group"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-rose transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Mobile Hamburger Toggle */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-textDark focus:outline-none"
          aria-label="Toggle Navigation Menu"
        >
          <div className="w-5 h-4 flex flex-col justify-between">
            <span className={`h-[1.5px] w-full bg-textDark transition-transform duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
            <span className={`h-[1.5px] w-full bg-textDark transition-opacity duration-300 ${mobileMenuOpen ? 'opacity-0' : 'opacity-100'}`} />
            <span className={`h-[1.5px] w-full bg-textDark transition-transform duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
          </div>
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-cream border-b border-rose/15 px-6 py-6 transition-all duration-300">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-xs font-sans font-medium tracking-[0.2em] text-textDark/80 hover:text-rose py-2"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
