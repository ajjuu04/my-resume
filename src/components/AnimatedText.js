import { useRef, useCallback, useEffect } from 'react';

/**
 * FloatingText Component
 * Creates a cinematic floating text effect where text characters
 * animate in individually with staggered delays, float gently,
 * and optionally vanish with a dust effect.
 */
export function FloatingText({ text, className = '', style = {}, vanish = false, delay = 0 }) {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const chars = containerRef.current.querySelectorAll('.float-char');
    chars.forEach((char, i) => {
      const totalDelay = delay + i * 60;
      char.style.animationDelay = `${totalDelay}ms`;

      if (vanish) {
        // Set vanish animation after the float-in
        const vanishDelay = totalDelay + 3000 + (chars.length - i) * 40;
        setTimeout(() => {
          char.classList.add('vanishing');
        }, vanishDelay);
      }
    });
  }, [text, vanish, delay]);

  const chars = text.split('');

  return (
    <span ref={containerRef} className={`floating-text-container ${className}`} style={style}>
      {chars.map((char, i) => (
        <span key={i} className="float-char">
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </span>
  );
}

/**
 * TypewriterText Component
 * Types out text character by character with a blinking cursor
 */
export function TypewriterText({ text, speed = 50, className = '', delay = 0 }) {
  const containerRef = useRef(null);
  const timeoutRefs = useRef([]);

  useEffect(() => {
    if (!containerRef.current) return;
    const el = containerRef.current;
    el.textContent = '';
    el.classList.add('typewriter-active');

    const startTimeout = setTimeout(() => {
      let i = 0;
      const type = () => {
        if (i < text.length) {
          el.textContent += text[i];
          i++;
          const tid = setTimeout(type, speed);
          timeoutRefs.current.push(tid);
        } else {
          el.classList.remove('typewriter-active');
          el.classList.add('typewriter-done');
        }
      };
      type();
    }, delay);
    timeoutRefs.current.push(startTimeout);

    return () => {
      timeoutRefs.current.forEach(clearTimeout);
      timeoutRefs.current = [];
    };
  }, [text, speed, delay]);

  return <span ref={containerRef} className={`typewriter-text ${className}`}></span>;
}

/**
 * GlitchText Component
 * Applies a glitch/scramble effect on hover
 */
export function GlitchText({ text, className = '', tag: Tag = 'span' }) {
  const elRef = useRef(null);
  const intervalRef = useRef(null);

  const scramble = useCallback(() => {
    if (!elRef.current) return;
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*';
    let iteration = 0;

    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      elRef.current.textContent = text
        .split('')
        .map((char, index) => {
          if (index < iteration) return text[index];
          return chars[Math.floor(Math.random() * chars.length)];
        })
        .join('');

      if (iteration >= text.length) {
        clearInterval(intervalRef.current);
      }
      iteration += 1 / 3;
    }, 30);
  }, [text]);

  useEffect(() => {
    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <Tag
      ref={elRef}
      className={`glitch-text ${className}`}
      onMouseEnter={scramble}
      data-text={text}
    >
      {text}
    </Tag>
  );
}
