import React from 'react';
import { useRive } from '@rive-app/react-canvas';

export default function FloatingElements() {
  const { RiveComponent } = useRive({
    src: "https://cdn.rive.app/animations/heart.riv",
    autoplay: true,
  });

  return (
    <div className="fixed inset-0 pointer-events-none z-0 w-full h-full overflow-hidden">
      <RiveComponent className="w-full h-full scale-105" />
    </div>
  );
}
