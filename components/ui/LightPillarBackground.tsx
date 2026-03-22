"use client";

import LightPillar from "@/components/LightPillar";

export default function LightPillarBackground() {
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
      <LightPillar
        topColor="#039fe2"
        bottomColor="#039fe2"
        intensity={1}
        rotationSpeed={0.3}
        interactive={false}
        glowAmount={0.002}
        pillarWidth={3}
        pillarHeight={0.4}
        noiseIntensity={0.5}
        pillarRotation={61}
        quality="medium"
      />
    </div>
  );
}
