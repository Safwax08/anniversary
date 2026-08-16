import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Gift, Sparkles } from 'lucide-react';

export default function Home() {
  const coupleImage = "https://images.unsplash.com/photo-1518199266791-5375a83190b7?q=80&w=600&auto=format&fit=crop";

  return (
    <div className="relative min-h-screen pt-24 pb-16 flex items-center justify-center overflow-hidden px-6">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10">
        
        {/* Left: Romantic Texts & CTAs */}
        <div className="flex flex-col gap-6 text-center lg:text-left items-center lg:items-start">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-rosePink/40 text-primaryPink text-sm font-semibold tracking-wide shadow-sm">
            <Heart className="h-4 w-4 fill-primaryPink text-primaryPink" />
            <span>Happy Anniversary</span>
            <Sparkles className="h-4 w-4 text-rosePink" />
          </div>

          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-textDark font-bold leading-tight">
            Every Love Story Is <br />
            <span className="bg-gradient-to-r from-primaryPink via-rosePink to-primaryPink bg-clip-text text-transparent">
              Beautiful
            </span>, <br />
            But Ours Is My Favorite.
          </h1>

          <p className="text-base md:text-lg text-textDark/75 max-w-md font-light leading-relaxed">
            Another year of laughter, growing together, and holding hands through it all. Here is to another chapter, and another thousand reasons to love you.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 justify-center lg:justify-start mt-4">
            <Link
              to="/our-story"
              className="bg-primaryPink hover:bg-primaryPink/90 text-white font-medium px-8 py-4 rounded-full shadow-lg hover:shadow-primaryPink/30 hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-2"
            >
              <span>Explore Our Story</span>
              <Heart className="h-4 w-4 fill-white text-white" />
            </Link>
            <Link
              to="/surprise"
              className="bg-white hover:bg-rosePink/10 text-primaryPink font-semibold px-8 py-4 rounded-full shadow-lg border border-primaryPink/35 hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-2"
            >
              <span>Open My Surprise</span>
              <Gift className="h-4 w-4 text-primaryPink" />
            </Link>
          </div>
        </div>

        {/* Right: Circular Couple Photo Frame with Rose Overlay */}
        <div className="relative flex justify-center items-center">
          {/* Main frame wrapper */}
          <div className="relative w-[320px] h-[320px] sm:w-[400px] sm:h-[400px] rounded-full p-4 glass-card shadow-2xl flex items-center justify-center border-4 border-white">
            
            {/* Heart shape border container */}
            <div className="w-full h-full rounded-full overflow-hidden relative group">
              <img
                src={coupleImage}
                alt="Us"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-primaryPink/10 group-hover:bg-transparent transition-all duration-500" />
            </div>

            {/* Glowing background halo */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primaryPink/30 via-rosePink/20 to-white/0 rounded-full blur-xl -z-10" />
          </div>

          {/* Decorative Floating Roses / Flowers */}
          <div className="absolute top-2 right-6 text-4xl select-none">
            🌹
          </div>
          <div className="absolute bottom-6 left-4 text-5xl select-none">
            🌸
          </div>
          <div className="absolute bottom-16 right-4 text-3xl select-none">
            💖
          </div>
          <div className="absolute top-1/3 -left-8 text-4xl select-none">
            🌹
          </div>
        </div>

      </div>
    </div>
  );
}
