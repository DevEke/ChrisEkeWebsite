"use client";

import React from "react";

type TiltProps = {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  maxTilt?: number
  perspective?: number;
  scale?: number;
  transitionMs?: number;
  respectReducedMotion?: boolean;
};

export function Tilt({
  children,
  className,
  style,
  maxTilt = 3,
  perspective = 900,
  scale = 1,
  transitionMs = 120,
  respectReducedMotion = true,
}: TiltProps) {
  const ref = React.useRef<HTMLDivElement | null>(null);
  const rafRef = React.useRef<number | null>(null);

  const [reducedMotion, setReducedMotion] = React.useState(false);

  React.useEffect(() => {
    if (!respectReducedMotion) return;

    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(mq.matches);

    update();

    if ("addEventListener" in mq) {
      mq.addEventListener("change", update);
      return () => mq.removeEventListener("change", update);
    } else {
      const legacyMq = mq as MediaQueryList & {
        addListener: (cb: (e: MediaQueryListEvent) => void) => void;
        removeListener: (cb: (e: MediaQueryListEvent) => void) => void;
      };

      legacyMq.addListener(update);
      return () => legacyMq.removeListener(update);
    }
  }, [respectReducedMotion]);


  const setTransform = React.useCallback(
    (rotateX: number, rotateY: number, s: number) => {
      const el = ref.current;
      if (!el) return;
      el.style.transform = `perspective(${perspective}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${s})`;
    },
    [perspective]
  );

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (reducedMotion) return;

    const el = ref.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    const dx = px - 0.5;
    const dy = py - 0.5;
    const rotateY = dx * (maxTilt * 2);
    const rotateX = -dy * (maxTilt * 2);

    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => {
      setTransform(rotateX, rotateY, scale);
    });
  };

  const handlePointerLeave = () => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    setTransform(0, 0, 1);
  };

  const handlePointerEnter = () => {
    if (reducedMotion) return;
    const el = ref.current;
    if (!el) return;
  };

  return (
    <div
      ref={ref}
      className={className}
      style={{
        transformStyle: "preserve-3d",
        willChange: "transform",
        transition: `transform ${transitionMs}ms cubic-bezier(0.22, 1, 0.36, 1)`,
        ...style,
      }}
      onPointerEnter={handlePointerEnter}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
    >
      {children}
    </div>
  );
}
