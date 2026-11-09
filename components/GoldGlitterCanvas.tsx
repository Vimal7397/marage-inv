"use client";

import React, { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  size: number;
  speedY: number;
  speedX: number;
  opacity: number;
  fadeSpeed: number;
  twinkleSpeed: number;
  phase: number;
  color: string;
}

export default function GoldGlitterCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    // Warm Indian wedding palette: pure gold, champagne gold, amber, warm light
    const goldColors = [
      "rgba(242, 192, 110,",
      "rgba(255, 223, 175,",
      "rgba(255, 215, 0,",
      "rgba(244, 208, 63,",
      "rgba(255, 239, 213,",
    ];

    // Determine particle count based on screen width for optimal 60fps performance
    const count = width < 768 ? 38 : 70;
    const particles: Particle[] = [];

    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 2.5 + 0.8,
        speedY: -(Math.random() * 0.45 + 0.15), // gently rises like warm golden sparks
        speedX: (Math.random() - 0.5) * 0.35,
        opacity: Math.random() * 0.7 + 0.2,
        fadeSpeed: Math.random() * 0.008 + 0.003,
        twinkleSpeed: Math.random() * 0.04 + 0.02,
        phase: Math.random() * Math.PI * 2,
        color: goldColors[Math.floor(Math.random() * goldColors.length)],
      });
    }

    // Optional gentle cursor interaction
    let mouseX = -1000;
    let mouseY = -1000;
    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };
    window.addEventListener("mousemove", handleMouseMove);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Move particle
        p.y += p.speedY;
        p.x += p.speedX;
        p.phase += p.twinkleSpeed;

        // Subtle interactive mouse repulsion
        const dx = p.x - mouseX;
        const dy = p.y - mouseY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 100) {
          const force = (100 - dist) / 100;
          p.x += (dx / dist) * force * 1.5;
          p.y += (dy / dist) * force * 1.5;
        }

        // Wrap around borders
        if (p.y < -10) {
          p.y = height + 10;
          p.x = Math.random() * width;
        }
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;

        // Shimmering alpha calculation
        const currentAlpha = Math.max(
          0.1,
          Math.min(0.95, p.opacity + Math.sin(p.phase) * 0.35)
        );

        // Draw soft glow around particle
        const glowRadius = p.size * 2.5;
        const gradient = ctx.createRadialGradient(
          p.x,
          p.y,
          0,
          p.x,
          p.y,
          glowRadius
        );
        gradient.addColorStop(0, `${p.color}${currentAlpha})`);
        gradient.addColorStop(0.4, `${p.color}${currentAlpha * 0.4})`);
        gradient.addColorStop(1, `${p.color}0)`);

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(p.x, p.y, glowRadius, 0, Math.PI * 2);
        ctx.fill();

        // Draw particle sharp core
        ctx.fillStyle = `#ffffff`;
        ctx.globalAlpha = currentAlpha * 0.7;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * 0.45, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = 1.0;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-30 h-full w-full"
      style={{ opacity: 0.85 }}
    />
  );
}

