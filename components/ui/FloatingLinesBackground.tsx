"use client";

import FloatingLines from "@/components/ui/FloatingLines";

export default function FloatingLinesBackground() {
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden">
      {/* First instance - top section */}
      <div className="absolute inset-x-0 top-0 h-[600px]">
        <FloatingLines
          enabledWaves={["middle"]}
          lineCount={[8]}
          lineDistance={[6]}
          animationSpeed={0.6}
          bendStrength={-0.2}
          bendRadius={4}
          parallax={true}
          interactive={false}
          linesGradient={["#00E5FF", "#3B82F6", "#1D4ED8", "#0A0F1F"]}
          mixBlendMode="screen"
        />
      </div>
      
      {/* Second instance - middle section */}
      <div className="absolute inset-x-0 top-[500px] h-[600px]">
        <FloatingLines
          enabledWaves={["middle"]}
          lineCount={[8]}
          lineDistance={[6]}
          middleWavePosition={{ x: 7.0, y: 0.0, rotate: -0.15 }}
          animationSpeed={0.55}
          bendStrength={-0.25}
          bendRadius={4}
          parallax={true}
          interactive={false}
          linesGradient={["#00E5FF", "#3B82F6", "#1D4ED8", "#0A0F1F"]}
          mixBlendMode="screen"
        />
      </div>
      
      {/* Third instance - lower section */}
      <div className="absolute inset-x-0 top-[1000px] h-[600px]">
        <FloatingLines
          enabledWaves={["middle"]}
          lineCount={[8]}
          lineDistance={[6]}
          middleWavePosition={{ x: 4.0, y: 0.0, rotate: 0.2 }}
          animationSpeed={0.65}
          bendStrength={-0.2}
          bendRadius={4}
          parallax={true}
          interactive={false}
          linesGradient={["#00E5FF", "#3B82F6", "#1D4ED8", "#0A0F1F"]}
          mixBlendMode="screen"
        />
      </div>
      
      {/* Fourth instance - bottom section */}
      <div className="absolute inset-x-0 top-[1500px] h-[600px]">
        <FloatingLines
          enabledWaves={["middle"]}
          lineCount={[8]}
          lineDistance={[6]}
          middleWavePosition={{ x: 6.0, y: 0.0, rotate: -0.1 }}
          animationSpeed={0.58}
          bendStrength={-0.22}
          bendRadius={4}
          parallax={true}
          interactive={false}
          linesGradient={["#00E5FF", "#3B82F6", "#1D4ED8", "#0A0F1F"]}
          mixBlendMode="screen"
        />
      </div>
    </div>
  );
}
