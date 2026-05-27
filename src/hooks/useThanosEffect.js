import { useEffect, useRef, useCallback } from 'react';

/**
 * Thanos Dust Disintegration Effect
 * Creates a canvas-based particle disintegration effect on any element.
 * Particles scatter and fade like the Thanos snap from Avengers.
 */
export function useThanosEffect() {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);

  const disintegrate = useCallback((element, onComplete) => {
    if (!element) return;

    const rect = element.getBoundingClientRect();
    const canvas = document.createElement('canvas');
    canvas.width = rect.width * 2;
    canvas.height = rect.height * 2;
    canvas.style.cssText = `
      position: fixed;
      top: ${rect.top}px;
      left: ${rect.left}px;
      width: ${rect.width}px;
      height: ${rect.height}px;
      pointer-events: none;
      z-index: 9999;
    `;
    document.body.appendChild(canvas);
    canvasRef.current = canvas;

    const ctx = canvas.getContext('2d');
    ctx.scale(2, 2);

    // Capture element appearance
    const computedStyle = window.getComputedStyle(element);
    const bgColor = computedStyle.backgroundColor || 'rgba(26, 34, 53, 1)';
    const textColor = computedStyle.color || '#f1f5f9';

    // Generate particles from the element
    const particles = [];
    const particleCount = 120;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * rect.width,
        y: Math.random() * rect.height,
        size: Math.random() * 4 + 1,
        speedX: (Math.random() - 0.5) * 8 + 3,
        speedY: (Math.random() - 0.5) * 6 - 2,
        opacity: 1,
        decay: Math.random() * 0.015 + 0.008,
        rotation: Math.random() * 360,
        rotSpeed: (Math.random() - 0.5) * 10,
        color: Math.random() > 0.5
          ? `hsl(${250 + Math.random() * 30}, 70%, 65%)`
          : `hsl(${185 + Math.random() * 20}, 85%, 55%)`,
        delay: Math.random() * 30,
        started: false,
      });
    }

    // Fade the element
    element.style.transition = 'opacity 0.8s ease, filter 0.8s ease';
    element.style.opacity = '0';
    element.style.filter = 'blur(4px)';

    let frame = 0;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      let alive = false;
      frame++;

      particles.forEach((p) => {
        if (frame < p.delay) {
          alive = true;
          return;
        }
        if (!p.started) {
          p.started = true;
        }

        if (p.opacity <= 0) return;
        alive = true;

        p.x += p.speedX;
        p.y += p.speedY;
        p.speedY += 0.05; // gravity
        p.opacity -= p.decay;
        p.rotation += p.rotSpeed;

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rotation * Math.PI) / 180);
        ctx.globalAlpha = Math.max(0, p.opacity);
        ctx.fillStyle = p.color;
        ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
        ctx.restore();
      });

      if (alive) {
        animationRef.current = requestAnimationFrame(animate);
      } else {
        // Cleanup
        canvas.remove();
        if (onComplete) onComplete();
      }
    };

    animationRef.current = requestAnimationFrame(animate);
  }, []);

  const reintegrate = useCallback((element) => {
    if (!element) return;
    element.style.transition = 'opacity 0.6s ease, filter 0.6s ease, transform 0.6s ease';
    element.style.opacity = '1';
    element.style.filter = 'none';
    element.style.transform = 'none';
  }, []);

  useEffect(() => {
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      if (canvasRef.current) {
        canvasRef.current.remove();
      }
    };
  }, []);

  return { disintegrate, reintegrate };
}
