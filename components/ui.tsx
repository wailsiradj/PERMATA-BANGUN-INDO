'use client';

import { motion, useInView, type Variants } from 'framer-motion';
import { useEffect, useRef, useState, type ReactNode } from 'react';

const EASE = [0.16, 1, 0.3, 1] as const;

export function Reveal({
  children,
  delay = 0,
  y = 30,
  className,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.85, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

const lineVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
};
const wordVariants: Variants = {
  hidden: { y: '110%' },
  show: { y: 0, transition: { duration: 0.9, ease: EASE } },
};

export function SplitHeading({
  lines,
  className,
  inView = false,
  as: Tag = 'h1',
  accentLastLine = false,
}: {
  lines: readonly string[];
  className?: string;
  inView?: boolean;
  as?: 'h1' | 'h2';
  accentLastLine?: boolean;
}) {
  return (
    <Tag className={className}>
      {lines.map((line, li) => (
        <motion.span
          key={line}
          className={`split-line${accentLastLine && li === lines.length - 1 ? ' accent' : ''}`}
          variants={lineVariants}
          initial="hidden"
          {...(inView ? { whileInView: 'show', viewport: { once: true, margin: '-60px' } } : { animate: 'show' })}
          style={{ display: 'block', overflow: 'hidden' }}
        >
          {line.split(' ').map((word, wi) => (
            <span key={`${word}-${wi}`} style={{ display: 'inline-block', overflow: 'hidden', verticalAlign: 'top' }}>
              <motion.span style={{ display: 'inline-block' }} variants={wordVariants}>
                {word}
                {wi < line.split(' ').length - 1 ? '\u00A0' : ''}
              </motion.span>
            </span>
          ))}
        </motion.span>
      ))}
    </Tag>
  );
}

export function Counter({ to, suffix = '', duration = 1600 }: { to: number; suffix?: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setValue(to);
      return;
    }
    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(Math.round(to * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to, duration]);

  return (
    <span ref={ref} className="stat-value">
      {value}
      {suffix && <span className="suffix">{suffix}</span>}
    </span>
  );
}

export function Marquee({ items }: { items: readonly string[] }) {
  const group = (
    <div className="marquee-group">
      {items.map((item) => (
        <span className="marquee-item" key={item}>
          {item}
        </span>
      ))}
    </div>
  );
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {group}
        {group}
      </div>
    </div>
  );
}
