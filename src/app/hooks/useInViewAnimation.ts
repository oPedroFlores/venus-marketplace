'use client';
import { useEffect, useRef, useState } from 'react';

interface UseInViewAnimationProps {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
  delay?: number;
  animationName: string;
}

export const useInViewAnimation = ({
  threshold = 0.1,
  rootMargin = '0px',
  triggerOnce = true,
  delay = 0,
  animationName,
}: UseInViewAnimationProps) => {
  const ref = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce) {
            observer.unobserve(element);
          }
        } else {
          if (!triggerOnce) {
            setIsVisible(false);
          }
        }
      },
      {
        threshold,
        rootMargin,
      },
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [threshold, rootMargin, triggerOnce]);

  const style = {
    animationDelay: `${delay}s`,
  };

  // Generate the animation and initial hidden class names based on the animationName
  const animationClass = animationName;
  const initialClassName = `hidden${animationName
    .charAt(0)
    .toUpperCase()}${animationName.slice(1)}`;
  const animationClasses = `${isVisible ? animationClass : ''} ${
    !isVisible ? initialClassName : ''
  }`.trim();

  return { ref, style, animationClasses };
};
