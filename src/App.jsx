import React, { useState } from 'react';

// Components
import FloatingElements from './components/FloatingElements';
import HeartCursor from './components/HeartCursor';
import AudioPlayer from './components/AudioPlayer';
import StoryControls from './components/StoryControls';

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

const STORY_PAGES = [
  Home,
  OurStory,
  Memories,
  LoveLetter,
  Reasons,
  Journey,
  SpecialMoments,
  Countdown,
  FinalSurprise
];

export default function App() {
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => {
    if (currentStep < STORY_PAGES.length - 1) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const CurrentPage = STORY_PAGES[currentStep];

  return (
    <div className="relative h-screen w-screen overflow-hidden bg-softPink text-textDark selection:bg-rosePink/50 selection:text-primaryPink font-sans">
      {/* Ambient Canvas */}
      <FloatingElements />

      {/* Interactive Elements */}
      <HeartCursor />
      <AudioPlayer />
      
      {/* Story Navigation Controls */}
      <StoryControls 
        currentStep={currentStep} 
        totalSteps={STORY_PAGES.length} 
        onNext={nextStep} 
        onPrev={prevStep} 
      />

      {/* Main Slide Content */}
      <main className="z-10 w-full h-full relative">
        <div 
          key={currentStep} 
          className="absolute inset-0 w-full h-full animate-fade-in overflow-y-auto overflow-x-hidden"
        >
          <CurrentPage onNext={nextStep} />
        </div>
      </main>
    </div>
  );
}
