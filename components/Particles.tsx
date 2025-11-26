"use client";

import { useEffect, useRef } from "react";

export default function Particles() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);

    // ---- FIX: PASS CTX TO THE CLASS ----
    class Particle {
      x: number;
      y: number;
      speedX: number;
      speedY: number;
      size: number;
      ctx: CanvasRenderingContext2D;

      constructor(ctx: CanvasRenderingContext2D) {
        this.ctx = ctx;
        this.x = Math.random() * w;
        this.y = Math.random() * h;
        this.speedX = (Math.random() - 0.5) * 0.3;
        this.speedY = (Math.random() - 0.5) * 0.3;
        this.size = Math.random() + 0.5;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x < 0) this.x = w;
        if (this.x > w) this.x = 0;
        if (this.y < 0) this.y = h;
        if (this.y > h) this.y = 0;
      }

      draw() {
        this.ctx.fillStyle = "rgba(0, 122, 255, 0.65)";
        this.ctx.fillRect(this.x, this.y, this.size, this.size);
      }
    }

    const particles: Particle[] = [];
    for (let i = 0; i < 800; i++) particles.push(new Particle(ctx));

    const animate = () => {
      ctx.clearRect(0, 0, w, h);
      particles.forEach((p) => {
        p.update();
        p.draw();
      });

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="
        fixed inset-0
        w-full h-full
        pointer-events-none
        -z-50 
        opacity-100
      "
    />
  );
}
