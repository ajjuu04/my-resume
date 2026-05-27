import { useRef, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * PageTransition Component
 * Wraps page content with smooth enter/exit animations
 * Uses a combination of scale, opacity, and blur for a cinematic feel
 */
export default function PageTransition({ children }) {
  const location = useLocation();
  const [displayChildren, setDisplayChildren] = useState(children);
  const [transitionStage, setTransitionStage] = useState('enter');
  const containerRef = useRef(null);

  useEffect(() => {
    if (children !== displayChildren) {
      setTransitionStage('exit');
    }
  }, [children, displayChildren]);

  useEffect(() => {
    if (transitionStage === 'exit') {
      const timer = setTimeout(() => {
        setDisplayChildren(children);
        setTransitionStage('enter');
        // Scroll to top on page change
        window.scrollTo({ top: 0, behavior: 'instant' });
      }, 400);
      return () => clearTimeout(timer);
    }
  }, [transitionStage, children]);

  return (
    <div
      ref={containerRef}
      className={`page-transition page-transition-${transitionStage}`}
    >
      {displayChildren}
    </div>
  );
}
