import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Heart, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Track scrolling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Our Story', path: '/our-story' },
    { name: 'Memories', path: '/memories' },
    { name: 'Love Letter', path: '/love-letter' },
    { name: 'Reasons', path: '/reasons' },
    { name: 'Journey', path: '/journey' },
    { name: 'Special Moments', path: '/special-moments' },
    { name: 'Countdown', path: '/countdown' },
    { name: 'Surprise', path: '/surprise' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass py-3 shadow-md border-b border-rosePink/20'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 text-xl font-semibold font-serif text-primaryPink group"
        >
          <Heart className="h-6 w-6 fill-primaryPink text-primaryPink animate-pulse-slow group-hover:scale-110 transition-transform duration-300" />
          <span className="tracking-wide bg-gradient-to-r from-primaryPink to-rosePink bg-clip-text text-transparent">
            Our Forever
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `px-3 py-1.5 rounded-full text-sm font-medium tracking-wide transition-all duration-300 ${
                  isActive
                    ? 'bg-primaryPink text-white shadow-sm'
                    : 'text-textDark/85 hover:text-primaryPink hover:bg-rosePink/10'
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>

        {/* Hamburger Trigger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-primaryPink hover:bg-rosePink/10 p-2 rounded-full transition-colors duration-300"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="lg:hidden fixed top-[60px] left-0 right-0 bottom-0 z-40 bg-white/95 backdrop-blur-md animate-fade-in p-6 overflow-y-auto flex flex-col justify-start">
          <div className="flex flex-col gap-3">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `px-6 py-4 rounded-2xl text-lg font-medium transition-all duration-300 flex items-center justify-between ${
                    isActive
                      ? 'bg-primaryPink text-white shadow-md'
                      : 'bg-rosePink/5 text-textDark/85 hover:bg-rosePink/15 hover:text-primaryPink'
                  }`
                }
              >
                <span>{item.name}</span>
                <Heart className="h-4 w-4 opacity-50" />
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
