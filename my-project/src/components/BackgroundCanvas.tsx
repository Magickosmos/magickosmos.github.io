"use client";
import { useRef, useEffect } from "react";

interface Ripple {
  x: number;
  y: number;
  size: number;
  maxSize: number;
  growing: boolean;
  color: string;
}

export default function BackgroundCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const ripplesRef = useRef<Ripple[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Resize canvas to match CSS size
    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Add a ripple
    const addRipple = (x: number, y: number, color: string) => {
      ripplesRef.current.push({
        x,
        y,
        size: 0,
        maxSize: 1000,
        growing: true,
        color,
      });
    };

    // Animation loop
    const animate = () => {
      if (!ctx) return;

      // Clear background black
      ctx.fillStyle = "black";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw ripples
      ripplesRef.current.forEach((ripple) => {
        if (ripple.growing) {
          ripple.size += 100/(2*ripple.size + 100); 
          if (ripple.size >= ripple.maxSize) ripple.growing = false;
        }

        ctx.beginPath();
        ctx.arc(ripple.x, ripple.y, ripple.size, 0, Math.PI * 2);
        ctx.fillStyle = ripple.color;
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };
    animate();

    // Handle clicks
    const handleClick = (event: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width) * canvas.width;
      const y = ((event.clientY - rect.top) / rect.height) * canvas.height;

      // Get the color under the click
      const pixel = ctx.getImageData(x, y, 1, 1).data;
      const isWhite = pixel[0] > 200 && pixel[1] > 200 && pixel[2] > 200;
      const rippleColor = isWhite ? "black" : "white";

      addRipple(x, y, rippleColor);
    };

    canvas.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      canvas.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        width: "100%",
        height: "100%",
        display: "block",
      }}
    />
  );
}
