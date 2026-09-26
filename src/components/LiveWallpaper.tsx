import React, { useEffect, useRef } from 'react';

interface LiveWallpaperProps {
  darkMode: boolean;
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  baseAlpha: number;
  alpha: number;
  pulseSpeed: number;
  pulseAngle: number;
  colorType: 'crimson' | 'neutral' | 'accent';
}

interface NebulaOrb {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
}

export const LiveWallpaper: React.FC<LiveWallpaperProps> = ({ darkMode }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mouseRef = useRef<{ x: number; y: number; active: boolean }>({
    x: -1000,
    y: -1000,
    active: false,
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let animationFrameId: number;
    let width = 0;
    let height = 0;
    let isTabActive = true;

    // Handle high DPI scaling (capped at 2 for performance)
    const resizeCanvas = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas, { passive: true });

    // Determine particle count based on screen size (laptop vs mobile)
    const isMobile = window.innerWidth < 768;
    const particleCount = isMobile ? 18 : 34;

    // Initialize particles
    const particles: Particle[] = [];
    for (let i = 0; i < particleCount; i++) {
      const isCrimson = Math.random() < 0.4;
      const isAccent = !isCrimson && Math.random() < 0.3;
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        radius: Math.random() * 2 + (isMobile ? 1 : 1.5),
        baseAlpha: Math.random() * 0.4 + (darkMode ? 0.35 : 0.2),
        alpha: Math.random() * 0.4 + (darkMode ? 0.35 : 0.2),
        pulseSpeed: Math.random() * 0.03 + 0.015,
        pulseAngle: Math.random() * Math.PI * 2,
        colorType: isCrimson ? 'crimson' : isAccent ? 'accent' : 'neutral',
      });
    }

    // Initialize soft ambient nebula orbs
    const orbs: NebulaOrb[] = [
      {
        x: width * 0.2,
        y: height * 0.25,
        vx: 0.18,
        vy: 0.12,
        radius: isMobile ? 180 : 320,
        color: darkMode ? 'rgba(122, 0, 0, 0.14)' : 'rgba(225, 29, 72, 0.05)',
      },
      {
        x: width * 0.8,
        y: height * 0.7,
        vx: -0.15,
        vy: -0.1,
        radius: isMobile ? 200 : 360,
        color: darkMode ? 'rgba(79, 70, 229, 0.08)' : 'rgba(245, 158, 11, 0.04)',
      },
      {
        x: width * 0.5,
        y: height * 0.85,
        vx: 0.1,
        vy: -0.15,
        radius: isMobile ? 160 : 280,
        color: darkMode ? 'rgba(180, 20, 50, 0.1)' : 'rgba(148, 163, 184, 0.06)',
      },
    ];

    // Interaction listeners: mouse and touch
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
      mouseRef.current.active = true;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        mouseRef.current.x = e.touches[0].clientX;
        mouseRef.current.y = e.touches[0].clientY;
        mouseRef.current.active = true;
      }
    };

    const handleMouseLeave = () => {
      mouseRef.current.active = false;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('mouseleave', handleMouseLeave, { passive: true });

    // Handle tab visibility to save battery on laptop & phones
    const handleVisibilityChange = () => {
      isTabActive = !document.hidden;
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    // Main animation loop
    let lastTime = performance.now();

    const render = (time: number) => {
      if (!isTabActive) {
        animationFrameId = requestAnimationFrame(render);
        return;
      }

      // Delta time check
      const dt = Math.min((time - lastTime) / 16.67, 2);
      lastTime = time;

      ctx.clearRect(0, 0, width, height);

      // 1. Draw subtle ambient nebula glow orbs
      orbs.forEach((orb) => {
        orb.x += orb.vx * dt;
        orb.y += orb.vy * dt;

        if (orb.x < -orb.radius) orb.x = width + orb.radius;
        if (orb.x > width + orb.radius) orb.x = -orb.radius;
        if (orb.y < -orb.radius) orb.y = height + orb.radius;
        if (orb.y > height + orb.radius) orb.y = -orb.radius;

        const radial = ctx.createRadialGradient(orb.x, orb.y, 0, orb.x, orb.y, orb.radius);
        radial.addColorStop(0, orb.color);
        radial.addColorStop(1, 'rgba(0, 0, 0, 0)');

        ctx.fillStyle = radial;
        ctx.beginPath();
        ctx.arc(orb.x, orb.y, orb.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      // 2. Draw connections between nearby particles
      const maxDistance = isMobile ? 85 : 120;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDistance) {
            const lineAlpha = (1 - dist / maxDistance) * (darkMode ? 0.12 : 0.08);
            ctx.beginPath();
            ctx.strokeStyle = darkMode
              ? `rgba(255, 255, 255, ${lineAlpha})`
              : `rgba(122, 0, 0, ${lineAlpha * 0.9})`;
            ctx.lineWidth = 0.8;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // 3. Update & Draw Particles
      const mouse = mouseRef.current;
      particles.forEach((p) => {
        // Move particle
        p.x += p.vx * dt;
        p.y += p.vy * dt;

        // Wrap around screen edges smoothly
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        // Soft pulse
        p.pulseAngle += p.pulseSpeed * dt;
        p.alpha = p.baseAlpha + Math.sin(p.pulseAngle) * 0.15;

        // Interactive mouse / touch repulsion (gentle nudge)
        if (mouse.active) {
          const mdx = p.x - mouse.x;
          const mdy = p.y - mouse.y;
          const mDist = Math.sqrt(mdx * mdx + mdy * mdy);
          const influenceRadius = isMobile ? 90 : 130;

          if (mDist < influenceRadius && mDist > 0) {
            const force = (1 - mDist / influenceRadius) * 0.6;
            p.x += (mdx / mDist) * force * 3 * dt;
            p.y += (mdy / mDist) * force * 3 * dt;
          }
        }

        // Color styling
        let fillColor = '';
        if (darkMode) {
          if (p.colorType === 'crimson') {
            fillColor = `rgba(239, 68, 68, ${p.alpha})`;
          } else if (p.colorType === 'accent') {
            fillColor = `rgba(245, 158, 11, ${p.alpha})`;
          } else {
            fillColor = `rgba(248, 250, 252, ${p.alpha})`;
          }
        } else {
          if (p.colorType === 'crimson') {
            fillColor = `rgba(122, 0, 0, ${p.alpha * 0.85})`;
          } else if (p.colorType === 'accent') {
            fillColor = `rgba(217, 119, 6, ${p.alpha * 0.8})`;
          } else {
            fillColor = `rgba(71, 85, 105, ${p.alpha * 0.7})`;
          }
        }

        ctx.fillStyle = fillColor;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [darkMode]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none -z-10 w-full h-full"
      id="live-wallpaper-canvas"
    />
  );
};
