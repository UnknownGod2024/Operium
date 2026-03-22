"use client";

import Orb from "@/components/Orb";

interface OrbBackgroundProps {
  size?: number; // Size in pixels
}

export default function OrbBackground({ size = 800 }: OrbBackgroundProps) {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
      <div 
        style={{ 
          width: `${size}px`, 
          height: `${size}px`,
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)'
        }}
      >
        <Orb
          hue={0}
          hoverIntensity={5}
          rotateOnHover={true}
          forceHoverState={false}
          backgroundColor="#060C18"
        />
      </div>
    </div>
  );
}
