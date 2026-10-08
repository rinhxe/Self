import { PropsWithChildren, useEffect, useRef, useState } from 'react';

interface ScrollRevealProps {
  transitionDuration?: number;
}

export default function ScrollReveal({
  children,
  transitionDuration = 700,
}: PropsWithChildren<ScrollRevealProps>) {
  const elementRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('down');

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setIsVisible(true);
      return;
    }

    if (!('IntersectionObserver' in window)) {
      setIsVisible(true);
      return;
    }

    let previousScrollY = window.scrollY;
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY !== previousScrollY) {
        const direction = currentScrollY < previousScrollY ? 'up' : 'down';
        setScrollDirection((current) => current === direction ? current : direction);
        previousScrollY = currentScrollY;
      }
    };

    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting);
    });

    observer.observe(element);
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const offset = scrollDirection === 'down' ? 24 : -24;

  return (
    <div
      ref={elementRef}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : `translateY(${offset}px)`,
        transition: `opacity ${transitionDuration}ms ease, transform ${transitionDuration}ms ease`,
      }}
    >
      {children}
    </div>
  );
}
