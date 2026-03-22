"use client";

import { useEffect, useState, useRef } from "react";

export default function SplashScreen() {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setProgress((prev) => {
        const next = prev + Math.random() * 2.5;
        if (next >= 100) {
          clearInterval(intervalRef.current!);
          setTimeout(() => setFadeOut(true), 300);
          setTimeout(() => setVisible(false), 900);
          return 100;
        }
        return next;
      });
    }, 40);

    return () => clearInterval(intervalRef.current!);
  }, []);

  if (!visible) return null;

  const display = Math.floor(progress);

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center"
      style={{
        background: "#020617",
        transition: "opacity 0.6s ease",
        opacity: fadeOut ? 0 : 1,
        pointerEvents: fadeOut ? "none" : "all",
      }}
    >
      {/* SVG gradient defs */}
      <svg width={0} height={0} className="absolute overflow-hidden" aria-hidden="true">
        <defs>
          <linearGradient id="main" x1="0" y1="62" x2="0" y2="2">
            <stop offset="0%" stopColor="#0a0f1c" />
            <stop offset="100%" stopColor="#38bdf8" />
          </linearGradient>
          <linearGradient id="accent" x1="0" y1="64" x2="0" y2="0">
            <stop offset="0%" stopColor="#1e3a8a" />
            <stop offset="100%" stopColor="#60a5fa" />
          </linearGradient>
        </defs>
      </svg>

      {/* Subtle radial glow behind logo */}
      <div
        className="absolute"
        style={{
          width: "600px",
          height: "300px",
          background: "radial-gradient(ellipse at center, rgba(56,189,248,0.07) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      {/* OPERIUM letter animation */}
      <div className="flex items-center" style={{ gap: "14px" }}>
        {/* O */}
        <svg viewBox="0 0 100 100" style={{ width: 96, height: 96, display: "block" }}>
          <path
            d="M50,15 A35,35 0 1 1 49.9,15 Z"
            stroke="url(#accent)"
            strokeWidth={10}
            fill="none"
            className="splash-spin"
            pathLength={360}
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ filter: "drop-shadow(0 0 6px rgba(56,189,248,0.3))" }}
          />
        </svg>
        {/* P */}
        <svg viewBox="0 0 100 100" style={{ width: 96, height: 96, display: "block" }}>
          <path
            d="M30,80 L30,20 L60,20 Q75,20 75,40 Q75,60 60,60 L30,60"
            stroke="url(#main)"
            strokeWidth={10}
            fill="none"
            className="splash-dash"
            pathLength={360}
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ filter: "drop-shadow(0 0 6px rgba(56,189,248,0.2))" }}
          />
        </svg>
        {/* E */}
        <svg viewBox="0 0 100 100" style={{ width: 96, height: 96, display: "block" }}>
          <path
            d="M30,20 L75,20 M30,50 L65,50 M30,80 L75,80 M30,20 L30,80"
            stroke="url(#main)"
            strokeWidth={10}
            fill="none"
            className="splash-dash"
            pathLength={360}
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ filter: "drop-shadow(0 0 6px rgba(56,189,248,0.2))" }}
          />
        </svg>
        {/* R */}
        <svg viewBox="0 0 100 100" style={{ width: 96, height: 96, display: "block" }}>
          <path
            d="M30,80 L30,20 L60,20 Q75,20 75,40 Q75,60 60,60 L30,60 L75,80"
            stroke="url(#accent)"
            strokeWidth={10}
            fill="none"
            className="splash-dash"
            pathLength={360}
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ filter: "drop-shadow(0 0 6px rgba(56,189,248,0.2))" }}
          />
        </svg>
        {/* I */}
        <svg viewBox="0 0 100 100" style={{ width: 78, height: 96, display: "block" }}>
          <path
            d="M28,22 L72,22 M50,22 L50,78 M28,78 L72,78"
            stroke="url(#main)"
            strokeWidth={10}
            fill="none"
            className="splash-dash"
            pathLength={360}
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ filter: "drop-shadow(0 0 6px rgba(56,189,248,0.2))" }}
          />
        </svg>
        {/* U */}
        <svg viewBox="0 0 100 100" style={{ width: 96, height: 96, display: "block" }}>
          <path
            d="M30,20 L30,60 Q30,80 50,80 Q70,80 70,60 L70,20"
            stroke="url(#main)"
            strokeWidth={10}
            fill="none"
            className="splash-dash"
            pathLength={360}
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ filter: "drop-shadow(0 0 6px rgba(56,189,248,0.2))" }}
          />
        </svg>
        {/* M */}
        <svg viewBox="0 0 100 100" style={{ width: 96, height: 96, display: "block" }}>
          <path
            d="M25,80 L25,20 L50,60 L75,20 L75,80"
            stroke="url(#accent)"
            strokeWidth={10}
            fill="none"
            className="splash-dash"
            pathLength={360}
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ filter: "drop-shadow(0 0 6px rgba(56,189,248,0.2))" }}
          />
        </svg>
      </div>

      {/* Progress — bottom right */}
      <div
        className="fixed"
        style={{
          right: 32,
          bottom: 32,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
          gap: 10,
          fontFamily: "system-ui, -apple-system, sans-serif",
        }}
      >
        {/* Number */}
        <div
          style={{
            fontSize: 52,
            fontWeight: 600,
            letterSpacing: 2,
            display: "flex",
            alignItems: "flex-end",
            gap: 6,
            color: "#38bdf8",
            textShadow: "0 0 14px rgba(56,189,248,0.45)",
            animation: "splashGlowPulse 2.5s ease-in-out infinite",
          }}
        >
          <span>{display}</span>
          <span style={{ fontSize: 20, opacity: 0.6 }}>%</span>
        </div>

        {/* Bar */}
        <div
          style={{
            width: 180,
            height: 2,
            background: "rgba(56,189,248,0.12)",
            borderRadius: 2,
            overflow: "hidden",
          }}
        >
          <div
            style={{
              height: "100%",
              width: `${display}%`,
              background: "linear-gradient(90deg, #0a0f1c, #1e3a8a, #38bdf8)",
              boxShadow: "0 0 12px rgba(56,189,248,0.7)",
              transition: "width 0.2s linear",
            }}
          />
        </div>

        {/* Label */}
        <div
          style={{
            fontSize: 10,
            letterSpacing: 2,
            color: "rgba(147,197,253,0.75)",
          }}
        >
          INITIALIZING SYSTEM
        </div>
      </div>

      <style>{`
        .splash-dash {
          animation: splashDashArray 2s ease-in-out infinite,
                     splashDashOffset 2s linear infinite;
        }
        .splash-spin {
          animation: splashSpinDashArray 2s ease-in-out infinite,
                     splashSpin 8s ease-in-out infinite,
                     splashDashOffset 2s linear infinite;
          transform-origin: center;
        }
        @keyframes splashDashArray {
          0%   { stroke-dasharray: 0 1 359 0; }
          50%  { stroke-dasharray: 0 359 1 0; }
          100% { stroke-dasharray: 359 1 0 0; }
        }
        @keyframes splashSpinDashArray {
          0%   { stroke-dasharray: 270 90; }
          50%  { stroke-dasharray: 0 360; }
          100% { stroke-dasharray: 250 90; }
        }
        @keyframes splashDashOffset {
          0%   { stroke-dashoffset: 385; }
          100% { stroke-dashoffset: 5; }
        }
        @keyframes splashSpin {
          0%   { rotate: 0deg; }
          100% { rotate: 1080deg; }
        }
        @keyframes splashGlowPulse {
          0%   { opacity: 0.7; }
          50%  { opacity: 1; }
          100% { opacity: 0.7; }
        }
      `}</style>
    </div>
  );
}
