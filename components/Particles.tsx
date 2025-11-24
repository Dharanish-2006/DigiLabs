"use client";

import { useEffect, useRef } from "react";

export default function Particles() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    function resize() {
      const canvasEl = canvasRef.current; // <-- CHECK AGAIN inside function
      if (!canvasEl) return;

      canvasEl.width = window.innerWidth;
      canvasEl.height = window.innerHeight;
    }

    resize();
    window.addEventListener("resize", resize);

    const particles: { x: number; y: number; size: number }[] = [];

    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 0.5,
      });
    }

    function drawParticles() {
      const canvasEl = canvasRef.current; // <-- CHECK AGAIN
      if (!canvasEl || !ctx) return;

      ctx.clearRect(0, 0, canvasEl.width, canvasEl.height);
      ctx.fillStyle = "#155dfc";

      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();

        p.y += 0.15;
        if (p.y > canvasEl.height) {
          p.y = -10;
          p.x = Math.random() * canvasEl.width;
        }
      });

      requestAnimationFrame(drawParticles);
    }

    drawParticles();

    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full"
      style={{ display: "block" }}
    />
  );
}
