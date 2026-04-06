'use client';

import { useState, useEffect, useRef, RefObject } from 'react';

export function useInView<T extends Element = Element>(
  threshold = 0.1
): { ref: RefObject<T | null>; inView: boolean } {
  const [inView, setInView] = useState(false);
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);

  return { ref, inView };
}
