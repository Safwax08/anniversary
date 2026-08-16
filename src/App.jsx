import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingElements from './components/FloatingElements';
import HeartCursor from './components/HeartCursor';
import AudioPlayer from './components/AudioPlayer';

// Pages
import Home from './pages/Home';
import OurStory from './pages/OurStory';
import Memories from './pages/Memories';
import LoveLetter from './pages/LoveLetter';
import Reasons from './pages/Reasons';
import Journey from './pages/Journey';
import SpecialMoments from './pages/SpecialMoments';
import Countdown from './pages/Countdown';
import FinalSurprise from './pages/FinalSurprise';

function AnimatedRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/our-story" element={<OurStory />} />
      <Route path="/memories" element={<Memories />} />
      <Route path="/love-letter" element={<LoveLetter />} />
      <Route path="/reasons" element={<Reasons />} />
      <Route path="/journey" element={<Journey />} />
      <Route path="/special-moments" element={<SpecialMoments />} />
      <Route path="/countdown" element={<Countdown />} />
      <Route path="/surprise" element={<FinalSurprise />} />
    </Routes>
  );
}

export default function App() {
  return (
    <Router>
      <div className="relative min-h-screen flex flex-col bg-softPink text-textDark selection:bg-rosePink/50 selection:text-primaryPink font-sans overflow-x-hidden">
        {/* Ambient floating hearts & rose petals canvas */}
        <FloatingElements />

        {/* Custom heart cursor effect for desktop */}
        <HeartCursor />

        {/* Audio Player controller */}
        <AudioPlayer />

        {/* Global sticky Navbar */}
        <Navbar />

        {/* Main page content wrapper */}
        <main className="flex-grow z-10 w-full">
          <AnimatedRoutes />
        </main>

        {/* Global Footer */}
        <Footer />
      </div>
    </Router>
  );
}
