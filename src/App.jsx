import React from 'react';

// Theme 4 Components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StoryIntro from './components/StoryIntro';
import Timeline from './components/Timeline';
import MemoryGallery from './components/MemoryGallery';
import FeaturedMemory from './components/FeaturedMemory';
import LoveLetter from './components/LoveLetter';
import Countdown from './components/Countdown';
import FinalMessage from './components/FinalMessage';
import Footer from './components/Footer';
import AudioPlayer from './components/AudioPlayer';

export default function App() {
  return (
    <div className="min-h-screen w-full bg-cream text-textDark font-sans selection:bg-blush selection:text-textDark relative">
      {/* Sticky Minimalist Navigation */}
      <Navbar />

      {/* Ambient Music Player */}
      <AudioPlayer />

      {/* Main Single Scroll Story Experience */}
      <main className="w-full flex flex-col">
        <Hero />
        <StoryIntro />
        <Timeline />
        <MemoryGallery />
        <FeaturedMemory />
        <LoveLetter />
        <Countdown />
        <FinalMessage />
      </main>

      {/* Minimal Footer */}
      <Footer />
    </div>
  );
}
