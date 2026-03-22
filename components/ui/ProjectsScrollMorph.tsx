"use client";

import React, { useState, useEffect, useMemo, useRef } from "react";
import { motion, useTransform, useSpring, useMotionValue } from "framer-motion";

export type AnimationPhase = "scatter" | "line" | "circle" | "bottom-strip";

interface FlipCardProps {
    src: string;
    title: string;
    category: string;
    index: number;
    total: number;
    phase: AnimationPhase;
    target: { x: number; y: number; rotation: number; scale: number; opacity: number };
}

const IMG_WIDTH = 70;
const IMG_HEIGHT = 95;

function FlipCard({ src, title, category, index, total, phase, target }: FlipCardProps) {
    return (
        <motion.div
            animate={{
                x: target.x,
                y: target.y,
                rotate: target.rotation,
                scale: target.scale,
                opacity: target.opacity,
            }}
            transition={{
                type: "spring",
                stiffness: 40,
                damping: 15,
            }}
            style={{
                position: "absolute",
                width: IMG_WIDTH,
                height: IMG_HEIGHT,
                transformStyle: "preserve-3d",
                perspective: "1000px",
            }}
            className="cursor-pointer group"
        >
            <motion.div
                className="relative h-full w-full"
                style={{ transformStyle: "preserve-3d" }}
                transition={{ duration: 0.6, type: "spring", stiffness: 260, damping: 20 }}
                whileHover={{ rotateY: 180 }}
            >
                {/* Front Face */}
                <div
                    className="absolute inset-0 h-full w-full overflow-hidden rounded-xl shadow-lg bg-gradient-to-br from-cyan-500/20 to-blue-600/20 border border-cyan-400/30"
                    style={{ backfaceVisibility: "hidden" }}
                >
                    <img
                        src={src}
                        alt={title}
                        className="h-full w-full object-cover opacity-80"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#060C18]/90 via-[#060C18]/40 to-transparent" />
                </div>

                {/* Back Face */}
                <div
                    className="absolute inset-0 h-full w-full overflow-hidden rounded-xl shadow-lg bg-[#060C18] border border-cyan-400/40 flex flex-col items-center justify-center p-3"
                    style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
                >
                    <div className="text-center">
                        <p className="text-[8px] font-bold text-cyan-400 uppercase tracking-widest mb-1">{category}</p>
                        <p className="text-xs font-semibold text-white leading-tight">{title}</p>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
}

const TOTAL_IMAGES = 16;
const MAX_SCROLL = 3000;

const PROJECT_DATA = [
    { src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=300&q=80", title: "Analytics Platform", category: "Dashboard" },
    { src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=300&q=80", title: "Revenue Engine", category: "Automation" },
    { src: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=300&q=80", title: "Pipeline OS", category: "CRM" },
    { src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=300&q=80", title: "Team Hub", category: "Collaboration" },
    { src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=300&q=80", title: "Code Deploy", category: "DevOps" },
    { src: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=300&q=80", title: "AI Assistant", category: "ML/AI" },
    { src: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=300&q=80", title: "Data Sync", category: "Integration" },
    { src: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=300&q=80", title: "Growth Stack", category: "Marketing" },
    { src: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=300&q=80", title: "Task Manager", category: "Productivity" },
    { src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=300&q=80", title: "Client Portal", category: "Platform" },
    { src: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=300&q=80", title: "API Gateway", category: "Backend" },
    { src: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=300&q=80", title: "User Insights", category: "Analytics" },
    { src: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=300&q=80", title: "Workflow Engine", category: "Automation" },
    { src: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=300&q=80", title: "Sales CRM", category: "Revenue" },
    { src: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=300&q=80", title: "Support Desk", category: "Service" },
    { src: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=300&q=80", title: "Mobile App", category: "Mobile" },
];

const lerp = (start: number, end: number, t: number) => start * (1 - t) + end * t;

export default function ProjectsScrollMorph() {
    const [introPhase, setIntroPhase] = useState<AnimationPhase>("scatter");
    const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!containerRef.current) return;

        const handleResize = (entries: ResizeObserverEntry[]) => {
            for (const entry of entries) {
                setContainerSize({
                    width: entry.contentRect.width,
                    height: entry.contentRect.height,
                });
            }
        };

        const observer = new ResizeObserver(handleResize);
        observer.observe(containerRef.current);

        setContainerSize({
            width: containerRef.current.offsetWidth,
            height: containerRef.current.offsetHeight,
        });

        return () => observer.disconnect();
    }, []);

    const virtualScroll = useMotionValue(0);
    const scrollRef = useRef(0);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const handleWheel = (e: WheelEvent) => {
            // Only prevent default if we're not at the end of the animation
            if (scrollRef.current < MAX_SCROLL) {
                e.preventDefault();
                const newScroll = Math.min(Math.max(scrollRef.current + e.deltaY, 0), MAX_SCROLL);
                scrollRef.current = newScroll;
                virtualScroll.set(newScroll);
            }
            // If at max scroll and scrolling down, allow normal page scroll
            else if (e.deltaY > 0) {
                // Don't prevent default - allow page to scroll
                return;
            }
            // If at max scroll and scrolling up, handle within component
            else {
                e.preventDefault();
                const newScroll = Math.min(Math.max(scrollRef.current + e.deltaY, 0), MAX_SCROLL);
                scrollRef.current = newScroll;
                virtualScroll.set(newScroll);
            }
        };

        let touchStartY = 0;
        const handleTouchStart = (e: TouchEvent) => {
            touchStartY = e.touches[0].clientY;
        };
        const handleTouchMove = (e: TouchEvent) => {
            const touchY = e.touches[0].clientY;
            const deltaY = touchStartY - touchY;
            touchStartY = touchY;

            // Only prevent default if we're not at the end
            if (scrollRef.current < MAX_SCROLL || deltaY < 0) {
                e.preventDefault();
                const newScroll = Math.min(Math.max(scrollRef.current + deltaY, 0), MAX_SCROLL);
                scrollRef.current = newScroll;
                virtualScroll.set(newScroll);
            }
        };

        container.addEventListener("wheel", handleWheel, { passive: false });
        container.addEventListener("touchstart", handleTouchStart, { passive: false });
        container.addEventListener("touchmove", handleTouchMove, { passive: false });

        return () => {
            container.removeEventListener("wheel", handleWheel);
            container.removeEventListener("touchstart", handleTouchStart);
            container.removeEventListener("touchmove", handleTouchMove);
        };
    }, [virtualScroll]);

    // Handle scrolling back into hero from page content
    useEffect(() => {
        const handlePageScroll = () => {
            const heroSection = containerRef.current?.closest('section');
            if (!heroSection) return;

            const rect = heroSection.getBoundingClientRect();
            // If hero section is in view and user is at the top of the page
            if (rect.top >= 0 && window.scrollY === 0 && scrollRef.current === MAX_SCROLL) {
                // Reset scroll to allow re-entering the animation
                scrollRef.current = MAX_SCROLL - 1;
                virtualScroll.set(MAX_SCROLL - 1);
            }
        };

        window.addEventListener('scroll', handlePageScroll);
        return () => window.removeEventListener('scroll', handlePageScroll);
    }, [virtualScroll]);

    const morphProgress = useTransform(virtualScroll, [0, 600], [0, 1]);
    const smoothMorph = useSpring(morphProgress, { stiffness: 40, damping: 20 });

    const scrollRotate = useTransform(virtualScroll, [600, 3000], [0, 360]);
    const smoothScrollRotate = useSpring(scrollRotate, { stiffness: 40, damping: 20 });

    const mouseX = useMotionValue(0);
    const smoothMouseX = useSpring(mouseX, { stiffness: 30, damping: 20 });

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const handleMouseMove = (e: MouseEvent) => {
            const rect = container.getBoundingClientRect();
            const relativeX = e.clientX - rect.left;
            const normalizedX = (relativeX / rect.width) * 2 - 1;
            mouseX.set(normalizedX * 100);
        };
        container.addEventListener("mousemove", handleMouseMove);
        return () => container.removeEventListener("mousemove", handleMouseMove);
    }, [mouseX]);

    useEffect(() => {
        const timer1 = setTimeout(() => setIntroPhase("line"), 500);
        const timer2 = setTimeout(() => setIntroPhase("circle"), 2500);
        return () => { clearTimeout(timer1); clearTimeout(timer2); };
    }, []);

    const scatterPositions = useMemo(() => {
        return PROJECT_DATA.map(() => ({
            x: (Math.random() - 0.5) * 1500,
            y: (Math.random() - 0.5) * 1000,
            rotation: (Math.random() - 0.5) * 180,
            scale: 0.6,
            opacity: 0,
        }));
    }, []);

    const [morphValue, setMorphValue] = useState(0);
    const [rotateValue, setRotateValue] = useState(0);
    const [parallaxValue, setParallaxValue] = useState(0);

    useEffect(() => {
        const unsubscribeMorph = smoothMorph.on("change", setMorphValue);
        const unsubscribeRotate = smoothScrollRotate.on("change", setRotateValue);
        const unsubscribeParallax = smoothMouseX.on("change", setParallaxValue);
        return () => {
            unsubscribeMorph();
            unsubscribeRotate();
            unsubscribeParallax();
        };
    }, [smoothMorph, smoothScrollRotate, smoothMouseX]);

    const contentOpacity = useTransform(smoothMorph, [0.8, 1], [0, 1]);
    const contentY = useTransform(smoothMorph, [0.8, 1], [20, 0]);

    return (
        <div ref={containerRef} className="relative w-full h-full bg-transparent overflow-hidden">
            <div className="flex h-full w-full flex-col items-center justify-center perspective-1000">
                {/* Intro Text */}
                <div className="absolute z-0 flex flex-col items-center justify-center text-center pointer-events-none top-1/2 -translate-y-1/2">
                    <motion.h2
                        initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                        animate={introPhase === "circle" && morphValue < 0.5 ? { opacity: 1 - morphValue * 2, y: 0, filter: "blur(0px)" } : { opacity: 0, filter: "blur(10px)" }}
                        transition={{ duration: 1 }}
                        className="text-5xl font-bold tracking-tight text-white md:text-7xl lg:text-8xl"
                    >
                        Operium
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={introPhase === "circle" && morphValue < 0.5 ? { opacity: 0.5 - morphValue } : { opacity: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="mt-6 text-sm font-bold tracking-[0.2em] text-cyan-400/80 uppercase"
                    >
                        Scroll to Explore
                    </motion.p>
                </div>

                {/* Arc Active Content */}
                <motion.div
                    style={{ opacity: contentOpacity, y: contentY }}
                    className="absolute top-[15%] z-10 flex flex-col items-center justify-center text-center pointer-events-none px-4"
                >
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-sm tracking-[0.3em] text-cyan-400 uppercase font-bold mb-6"
                    >
                        Portfolio
                    </motion.p>
                    
                    <motion.h3 
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight mb-6 leading-tight text-white"
                    >
                        Systems that scale businesses
                    </motion.h3>
                    
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="text-base md:text-lg max-w-2xl leading-relaxed text-neutral-400"
                    >
                        From automation to full platforms, we engineer solutions that eliminate manual work and create operational leverage.
                    </motion.p>
                </motion.div>

                {/* Main Container */}
                <div className="relative flex items-center justify-center w-full h-full">
                    {PROJECT_DATA.slice(0, TOTAL_IMAGES).map((project, i) => {
                        let target = { x: 0, y: 0, rotation: 0, scale: 1, opacity: 1 };

                        if (introPhase === "scatter") {
                            target = scatterPositions[i];
                        } else if (introPhase === "line") {
                            const lineSpacing = 80;
                            const lineTotalWidth = TOTAL_IMAGES * lineSpacing;
                            const lineX = i * lineSpacing - lineTotalWidth / 2;
                            target = { x: lineX, y: 0, rotation: 0, scale: 1, opacity: 1 };
                        } else {
                            const isMobile = containerSize.width < 768;
                            const minDimension = Math.min(containerSize.width, containerSize.height);

                            const circleRadius = Math.min(minDimension * 0.35, 350);
                            const circleAngle = (i / TOTAL_IMAGES) * 360;
                            const circleRad = (circleAngle * Math.PI) / 180;
                            const circlePos = {
                                x: Math.cos(circleRad) * circleRadius,
                                y: Math.sin(circleRad) * circleRadius,
                                rotation: circleAngle + 90,
                            };

                            const baseRadius = Math.min(containerSize.width, containerSize.height * 1.5);
                            const arcRadius = baseRadius * (isMobile ? 1.4 : 1.1);
                            const arcApexY = containerSize.height * (isMobile ? 0.35 : 0.25);
                            const arcCenterY = arcApexY + arcRadius;

                            const spreadAngle = isMobile ? 100 : 130;
                            const startAngle = -90 - (spreadAngle / 2);
                            const step = spreadAngle / (TOTAL_IMAGES - 1);

                            const scrollProgress = Math.min(Math.max(rotateValue / 360, 0), 1);
                            const maxRotation = spreadAngle * 0.8;
                            const boundedRotation = -scrollProgress * maxRotation;

                            const currentArcAngle = startAngle + (i * step) + boundedRotation;
                            const arcRad = (currentArcAngle * Math.PI) / 180;

                            const arcPos = {
                                x: Math.cos(arcRad) * arcRadius + parallaxValue,
                                y: Math.sin(arcRad) * arcRadius + arcCenterY,
                                rotation: currentArcAngle + 90,
                                scale: isMobile ? 1.4 : 1.8,
                            };

                            target = {
                                x: lerp(circlePos.x, arcPos.x, morphValue),
                                y: lerp(circlePos.y, arcPos.y, morphValue),
                                rotation: lerp(circlePos.rotation, arcPos.rotation, morphValue),
                                scale: lerp(1, arcPos.scale, morphValue),
                                opacity: 1,
                            };
                        }

                        return (
                            <FlipCard
                                key={i}
                                src={project.src}
                                title={project.title}
                                category={project.category}
                                index={i}
                                total={TOTAL_IMAGES}
                                phase={introPhase}
                                target={target}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
