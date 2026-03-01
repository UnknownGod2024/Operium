// components/ui/world-map.tsx
"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";
import DottedMap from "dotted-map";
import Image from "next/image";

type LatLng = {
  lat: number;
  lng: number;
  label?: string;
};

type DotPair = {
  start: LatLng;
  end: LatLng;
};

type WorldMapProps = {
  dots?: DotPair[];
  className?: string;
  lineColor?: string;
};

const MAP_W = 800;
const MAP_H = 400;

function projectPoint(lat: number, lng: number) {
  const x = (lng + 180) * (MAP_W / 360);
  const y = (90 - lat) * (MAP_H / 180);
  return { x, y };
}

function curvedPath(start: { x: number; y: number }, end: { x: number; y: number }) {
  const midX = (start.x + end.x) / 2;
  const midY = Math.min(start.y, end.y) - Math.max(36, Math.abs(start.x - end.x) * 0.12);
  return `M ${start.x} ${start.y} Q ${midX} ${midY} ${end.x} ${end.y}`;
}

export default function WorldMap({ dots = [], className = "", lineColor = "#60A5FA" }: WorldMapProps) {
  const dottedSvg = useMemo(() => {
    const map = new DottedMap({ height: 110, grid: "diagonal" });
    return map.getSVG({
      radius: 0.2,
      color: "#9FB4D640",
      shape: "circle",
      backgroundColor: "transparent",
    });
  }, []);

  const routes = useMemo(() => {
    return dots.map((dot, i) => {
      const start = projectPoint(dot.start.lat, dot.start.lng);
      const end = projectPoint(dot.end.lat, dot.end.lng);
      return {
        id: `route-${i}`,
        start,
        end,
        d: curvedPath(start, end),
        delay: i * 0.45,
      };
    });
  }, [dots]);

  return (
    <div className={`relative w-full aspect-[2/1] ${className}`}>
      <Image
        src={`data:image/svg+xml;utf8,${encodeURIComponent(dottedSvg)}`}
        className="h-full w-full select-none pointer-events-none [mask-image:linear-gradient(to_bottom,transparent,white_10%,white_90%,transparent)]"
        alt="dotted world map"
        draggable={false}
        fill
        unoptimized
      />

      <svg
        className="absolute inset-0 w-full h-full select-none pointer-events-none"
        preserveAspectRatio="xMidYMid slice"
        viewBox="0 0 1000 500"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g transform="scale(1.25)">
          <defs>
            <linearGradient id="wm-path-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="white" stopOpacity="0" />
              <stop offset="10%" stopColor={lineColor} stopOpacity="1" />
              <stop offset="90%" stopColor={lineColor} stopOpacity="1" />
              <stop offset="100%" stopColor="white" stopOpacity="0" />
            </linearGradient>
            <filter id="wm-line-glow" x="-60%" y="-60%" width="220%" height="220%">
              <feGaussianBlur stdDeviation="1.4" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {routes.map((route) => (
            <g key={route.id}>
              <motion.path
                d={route.d}
                fill="none"
                stroke="url(#wm-path-gradient)"
                strokeWidth="1.5"
                strokeLinecap="round"
                filter="url(#wm-line-glow)"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: [0, 1, 1], opacity: [0, 1, 0.75] }}
                transition={{
                  duration: 2.3,
                  ease: "easeOut",
                  delay: route.delay,
                  repeat: Infinity,
                  repeatDelay: 0.8,
                }}
              />

              <circle cx={route.start.x} cy={route.start.y} r="2" fill={lineColor} />
              <circle cx={route.end.x} cy={route.end.y} r="2" fill={lineColor} />

              <circle cx={route.start.x} cy={route.start.y} r="2" fill={lineColor} opacity="0.45">
                <animate attributeName="r" from="2" to="8" dur="1.6s" begin="0s" repeatCount="indefinite" />
                <animate attributeName="opacity" from="0.45" to="0" dur="1.6s" begin="0s" repeatCount="indefinite" />
              </circle>

              <circle cx={route.end.x} cy={route.end.y} r="2" fill={lineColor} opacity="0.45">
                <animate attributeName="r" from="2" to="8" dur="1.6s" begin="0.3s" repeatCount="indefinite" />
                <animate attributeName="opacity" from="0.45" to="0" dur="1.6s" begin="0.3s" repeatCount="indefinite" />
              </circle>
            </g>
          ))}
        </g>
      </svg>
    </div>
  );
}
