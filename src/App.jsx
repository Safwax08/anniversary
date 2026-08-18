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

// Ambient & Animation Components
import LightParticles from './components/LightParticles';
import FloatingElements from './components/FloatingElements';
import HeartCursor from './components/HeartCursor';

export default function App() {
  return (
    <div className="min-h-screen w-full bg-cream text-textDark font-sans selection:bg-blush selection:text-textDark relative overflow-x-hidden">
      {/* Background Ambient Lighting & Floating Particles */}
      <LightParticles />
      <FloatingElements />

      {/* Custom Heart Cursor Effect */}
      <HeartCursor />

      {/* Sticky Minimalist Navigation */}
      <Navbar />

      {/* Ambient Music Player */}
      <AudioPlayer />

      {/* Main Single Scroll Story Experience */}
      <main className="w-full flex flex-col relative z-10">
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

