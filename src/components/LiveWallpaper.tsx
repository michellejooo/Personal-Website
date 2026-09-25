import React, { useEffect, useRef } from 'react';

interface LiveWallpaperProps {
  darkMode: boolean;
}

interface SparkleParticle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  baseRadius: number;
  radius: number;
  twinkleSpeed: number;
  twinklePhase: number;
  twinkleIntensity: number;
  colorType: 'ruby' | 'gold' | 'diamond' | 'crimson';
  hasSpikes: boolean;
  spikeLength: number;
  rotation: number;
  rotSpeed: number;
}

interface AuroraWave {
  amplitude: number;
  wavelength: number;
  speed: number;
  colorStart: string;
  colorEnd: string;
  yOffsetPercent: number;
  phase: number;
}

export const LiveWallpaper: React.FC<LiveWallpaperProps> = ({ darkMode }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mouseRef = useRef<{ x: number; y: number; targetX: number; targetY: number; active: boolean }>({
    x: -1000,
    y: -1000,
    targetX: -1000,
    targetY: -1000,
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
    let time = 0;

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

    const isMobile = window.innerWidth < 768;

    // 1. Aurora background ribbons (memberikan kedalaman warna lembut di bawah kilau)
    const getAuroraLayers = (dark: boolean): AuroraWave[] => {
      if (dark) {
        return [
          {
            amplitude: isMobile ? 36 : 64,
            wavelength: isMobile ? 0.0032 : 0.0018,
            speed: 0.008,
            colorStart: 'rgba(136, 19, 55, 0.32)',
            colorEnd: 'rgba(225, 29, 72, 0)',
            yOffsetPercent: 0.32,
            phase: 0,
          },
          {
            amplitude: isMobile ? 48 : 80,
            wavelength: isMobile ? 0.0028 : 0.0015,
            speed: 0.006,
            colorStart: 'rgba(122, 0, 0, 0.26)',
            colorEnd: 'rgba(180, 83, 9, 0)',
            yOffsetPercent: 0.52,
            phase: 2.2,
          },
          {
            amplitude: isMobile ? 32 : 58,
            wavelength: isMobile ? 0.0036 : 0.0022,
            speed: 0.009,
            colorStart: 'rgba(220, 38, 38, 0.22)',
            colorEnd: 'rgba(245, 158, 11, 0)',
            yOffsetPercent: 0.74,
            phase: 4.4,
          },
        ];
      } else {
        return [
          {
            amplitude: isMobile ? 28 : 50,
            wavelength: isMobile ? 0.0028 : 0.0016,
            speed: 0.007,
            colorStart: 'rgba(122, 0, 0, 0.16)',
            colorEnd: 'rgba(254, 205, 211, 0)',
            yOffsetPercent: 0.35,
            phase: 0,
          },
          {
            amplitude: isMobile ? 38 : 62,
            wavelength: isMobile ? 0.0024 : 0.0013,
            speed: 0.005,
            colorStart: 'rgba(225, 29, 72, 0.12)',
            colorEnd: 'rgba(254, 243, 199, 0)',
            yOffsetPercent: 0.56,
            phase: 2.4,
          },
          {
            amplitude: isMobile ? 26 : 46,
            wavelength: isMobile ? 0.0032 : 0.002,
            speed: 0.008,
            colorStart: 'rgba(217, 119, 6, 0.11)',
            colorEnd: 'rgba(241, 245, 249, 0)',
            yOffsetPercent: 0.75,
            phase: 4.8,
          },
        ];
      }
    };

    // 2. Partikel Berkilau (Sparkle Particles) - Dibuat JELAS Nampak & Menawan
    const particleCount = isMobile ? 48 : 96;
    const particles: SparkleParticle[] = [];

    for (let i = 0; i < particleCount; i++) {
      const typeRoll = Math.random();
      let colorType: 'ruby' | 'gold' | 'diamond' | 'crimson' = 'ruby';
      if (typeRoll < 0.35) colorType = 'ruby';
      else if (typeRoll < 0.65) colorType = 'gold';
      else if (typeRoll < 0.85) colorType = 'crimson';
      else colorType = 'diamond';

      const hasSpikes = Math.random() < 0.45; // 45% partikel memiliki kilauan bintang silang (4-point star sparkle)
      const baseRadius = Math.random() * 2.4 + 1.2;

      particles.push({
        x: Math.random() * (width || window.innerWidth),
        y: Math.random() * (height || window.innerHeight),
        vx: (Math.random() - 0.5) * 0.4,
        vy: -Math.random() * 0.45 - 0.15, // Melayang perlahan ke atas seperti debu bintang/kilau
        baseRadius,
        radius: baseRadius,
        twinkleSpeed: Math.random() * 0.05 + 0.02,
        twinklePhase: Math.random() * Math.PI * 2,
        twinkleIntensity: Math.random() * 0.4 + 0.6,
        colorType,
        hasSpikes,
        spikeLength: baseRadius * (Math.random() * 3.5 + 3.0),
        rotation: Math.random() * Math.PI,
        rotSpeed: (Math.random() - 0.5) * 0.02,
      });
    }

    // Interaktivitas: Mouse & Touch
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.targetX = e.clientX;
      mouseRef.current.targetY = e.clientY;
      mouseRef.current.active = true;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        mouseRef.current.targetX = e.touches[0].clientX;
        mouseRef.current.targetY = e.touches[0].clientY;
        mouseRef.current.active = true;
      }
    };

    const handleMouseLeave = () => {
      mouseRef.current.active = false;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('mouseleave', handleMouseLeave, { passive: true });

    const handleVisibilityChange = () => {
      isTabActive = !document.hidden;
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    // Animasi Canvas Loop
    const render = () => {
      if (!isTabActive) {
        animationFrameId = requestAnimationFrame(render);
        return;
      }

      time += 1;
      ctx.clearRect(0, 0, width, height);

      // Interpolasi kursor mouse/touch yang halus
      const mouse = mouseRef.current;
      if (mouse.active) {
        mouse.x += (mouse.targetX - mouse.x) * 0.1;
        mouse.y += (mouse.targetY - mouse.y) * 0.1;
      }

      // -------------------------------------------------------------
      // 1. Pita Aurora Mengalir Lembut di Latar
      // -------------------------------------------------------------
      const layers = getAuroraLayers(darkMode);
      layers.forEach((layer, idx) => {
        const baseY = height * layer.yOffsetPercent;
        ctx.beginPath();
        ctx.moveTo(0, height);

        for (let x = 0; x <= width; x += isMobile ? 8 : 4) {
          let waveY =
            Math.sin(x * layer.wavelength + time * layer.speed + layer.phase) * layer.amplitude +
            Math.cos(x * layer.wavelength * 0.55 - time * (layer.speed * 0.75) + layer.phase) *
              (layer.amplitude * 0.4);

          // Efek interaktif kursor terhadap pita
          if (mouse.active) {
            const dx = x - mouse.x;
            const dy = baseY - mouse.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < 200) {
              const influence = Math.cos((dist / 200) * (Math.PI / 2));
              waveY -= influence * (idx % 2 === 0 ? 25 : -20);
            }
          }

          ctx.lineTo(x, baseY + waveY);
        }

        ctx.lineTo(width, height);
        ctx.closePath();

        const grad = ctx.createLinearGradient(0, baseY - layer.amplitude, 0, height);
        grad.addColorStop(0, layer.colorStart);
        grad.addColorStop(0.75, layer.colorEnd);
        ctx.fillStyle = grad;
        ctx.fill();
      });

      // -------------------------------------------------------------
      // 2. Kilau Partikel & Bintang Berpendar (High-Visibility Sparkles)
      // -------------------------------------------------------------
      particles.forEach((p) => {
        // Gerakan melayang
        p.x += p.vx;
        p.y += p.vy;
        p.rotation += p.rotSpeed;

        // Loop kembali jika keluar dari layar
        if (p.y < -30) {
          p.y = height + 25;
          p.x = Math.random() * width;
        }
        if (p.x < -20) p.x = width + 20;
        if (p.x > width + 20) p.x = -20;

        // Efek kedip/kilau sinusoidal yang hidup
        p.twinklePhase += p.twinkleSpeed;
        const twinkleSin = Math.sin(p.twinklePhase);
        // Nilai kilau antara 0.3 sampai 1.0 (sangat cerah saat puncak)
        const shimmer = Math.max(0.2, (twinkleSin + 1) * 0.5);

        // Interaksi kursor lembut (partikel menghindar atau mendekat lembut)
        let renderX = p.x;
        let renderY = p.y;
        if (mouse.active) {
          const dx = renderX - mouse.x;
          const dy = renderY - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const influenceZone = isMobile ? 90 : 130;
          if (dist < influenceZone && dist > 0) {
            const push = (1 - dist / influenceZone) * 22;
            renderX += (dx / dist) * push;
            renderY += (dy / dist) * push;
          }
        }

        // Tentukan Palet Warna Kilau (High Contrast di Light Mode & Vivid Glow di Dark Mode)
        let coreColor = '';
        let haloColor = '';
        let spikeColor = '';

        if (darkMode) {
          // Mode Gelap: Pendaran Berkilau Neon Ruby, Amber Gold & Diamond White
          switch (p.colorType) {
            case 'ruby':
              coreColor = `rgba(255, 100, 130, ${0.85 * shimmer})`;
              haloColor = `rgba(225, 29, 72, ${0.45 * shimmer})`;
              spikeColor = `rgba(254, 205, 211, ${0.9 * shimmer})`;
              break;
            case 'gold':
              coreColor = `rgba(253, 230, 138, ${0.9 * shimmer})`;
              haloColor = `rgba(245, 158, 11, ${0.5 * shimmer})`;
              spikeColor = `rgba(254, 240, 138, ${0.95 * shimmer})`;
              break;
            case 'crimson':
              coreColor = `rgba(248, 113, 113, ${0.85 * shimmer})`;
              haloColor = `rgba(185, 28, 28, ${0.4 * shimmer})`;
              spikeColor = `rgba(252, 165, 165, ${0.85 * shimmer})`;
              break;
            case 'diamond':
            default:
              coreColor = `rgba(255, 255, 255, ${0.95 * shimmer})`;
              haloColor = `rgba(255, 220, 230, ${0.5 * shimmer})`;
              spikeColor = `rgba(255, 255, 255, ${shimmer})`;
              break;
          }
        } else {
          // Mode Terang: Kilau Berkontras Tinggi Ruby Merah Marun, Emas & Rose
          switch (p.colorType) {
            case 'ruby':
              coreColor = `rgba(122, 0, 0, ${0.85 * shimmer})`;
              haloColor = `rgba(190, 18, 60, ${0.35 * shimmer})`;
              spikeColor = `rgba(159, 18, 57, ${0.85 * shimmer})`;
              break;
            case 'gold':
              coreColor = `rgba(180, 83, 9, ${0.85 * shimmer})`;
              haloColor = `rgba(217, 119, 6, ${0.35 * shimmer})`;
              spikeColor = `rgba(202, 138, 4, ${0.9 * shimmer})`;
              break;
            case 'crimson':
              coreColor = `rgba(153, 27, 27, ${0.85 * shimmer})`;
              haloColor = `rgba(220, 38, 38, ${0.35 * shimmer})`;
              spikeColor = `rgba(185, 28, 28, ${0.85 * shimmer})`;
              break;
            case 'diamond':
            default:
              coreColor = `rgba(88, 28, 38, ${0.9 * shimmer})`;
              haloColor = `rgba(122, 0, 0, ${0.4 * shimmer})`;
              spikeColor = `rgba(100, 15, 25, ${0.9 * shimmer})`;
              break;
          }
        }

        // A. Gambar Pendaran Halo Cahaya Luar (Outer Glow Bloom)
        const haloRadius = p.baseRadius * (darkMode ? 4.5 : 3.8);
        const haloGrad = ctx.createRadialGradient(
          renderX,
          renderY,
          0,
          renderX,
          renderY,
          haloRadius
        );
        haloGrad.addColorStop(0, haloColor);
        haloGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');

        ctx.fillStyle = haloGrad;
        ctx.beginPath();
        ctx.arc(renderX, renderY, haloRadius, 0, Math.PI * 2);
        ctx.fill();

        // B. Gambar Bintang Silang Berkilau (4-Point Star Sparkle Spike)
        if (p.hasSpikes && shimmer > 0.4) {
          const sLen = p.spikeLength * shimmer;
          const sWidth = Math.max(0.6, p.baseRadius * 0.4);

          ctx.save();
          ctx.translate(renderX, renderY);
          ctx.rotate(p.rotation);

          ctx.strokeStyle = spikeColor;
          ctx.lineWidth = sWidth;
          ctx.beginPath();
          // Garis horizontal
          ctx.moveTo(-sLen, 0);
          ctx.lineTo(sLen, 0);
          // Garis vertikal
          ctx.moveTo(0, -sLen);
          ctx.lineTo(0, sLen);
          ctx.stroke();

          // Kilau silang diagonal sekunder yang lebih pendek
          const diagLen = sLen * 0.55;
          ctx.lineWidth = sWidth * 0.7;
          ctx.beginPath();
          ctx.moveTo(-diagLen, -diagLen);
          ctx.lineTo(diagLen, diagLen);
          ctx.moveTo(-diagLen, diagLen);
          ctx.lineTo(diagLen, -diagLen);
          ctx.stroke();

          ctx.restore();
        }

        // C. Gambar Inti Partikel (Center Core) yang Pekat & Berkilau
        const currentCoreRadius = p.baseRadius * (0.8 + shimmer * 0.45);
        ctx.fillStyle = coreColor;
        ctx.beginPath();
        ctx.arc(renderX, renderY, currentCoreRadius, 0, Math.PI * 2);
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
    /* Canvas Fullscreen Bersih Tanpa Tombol/Pill Apa Pun */
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none -z-10 w-full h-full"
      id="live-wallpaper-canvas"
    />
  );
};
