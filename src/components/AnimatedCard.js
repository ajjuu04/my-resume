import { useRef, useState } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { useThanosEffect } from '../hooks/useThanosEffect';

/**
 * AnimatedCard Component
 * Card that animates in on scroll and supports Thanos disintegration on double-click
 */
export function AnimatedCard({ children, className = '', delay = 0, style = {} }) {
  const [observerRef, isVisible] = useIntersectionObserver();
  const cardRef = useRef(null);
  const [isDisintegrated, setIsDisintegrated] = useState(false);
  const { disintegrate, reintegrate } = useThanosEffect();

  const handleDoubleClick = () => {
    if (isDisintegrated) {
      reintegrate(cardRef.current);
      setIsDisintegrated(false);
    } else {
      disintegrate(cardRef.current, () => {
        // After disintegration, keep the element hidden
      });
      setIsDisintegrated(true);

      // Auto-reintegrate after 2 seconds
      setTimeout(() => {
        if (cardRef.current) {
          reintegrate(cardRef.current);
          setIsDisintegrated(false);
        }
      }, 2000);
    }
  };

  return (
    <div ref={observerRef}>
      <div
        ref={cardRef}
        className={`${className} scroll-reveal ${isVisible ? 'revealed' : ''}`}
        style={{
          ...style,
          transitionDelay: `${delay}ms`,
        }}
        onDoubleClick={handleDoubleClick}
        title="Double-click for Thanos effect ✨"
      >
        {children}
      </div>
    </div>
  );
}

/**
 * ScrollReveal wrapper for any element
 */
export function ScrollReveal({ children, className = '', delay = 0, direction = 'up' }) {
  const [ref, isVisible] = useIntersectionObserver();

  const dirClass = {
    up: 'reveal-up',
    down: 'reveal-down',
    left: 'reveal-left',
    right: 'reveal-right',
    scale: 'reveal-scale',
  }[direction] || 'reveal-up';

  return (
    <div
      ref={ref}
      className={`scroll-reveal ${dirClass} ${isVisible ? 'revealed' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
