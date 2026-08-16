import React from 'react';
import Rive from '@rive-app/react-canvas';

export default function FloatingElements() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 w-full h-full overflow-hidden">
      <Rive
        src="https://cdn.rive.app/animations/heart.riv"
        autoplay={true}
        className="w-full h-full scale-105"
      />
    </div>
  );
}
