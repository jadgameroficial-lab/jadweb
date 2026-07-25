"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  {
    value: 320,
    suffix: "+",
    label: "Sites entregues",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" />
      </svg>
    ),
  },
  {
    value: 1850,
    suffix: "+",
    label: "Processos automatizados",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" stroke="none">
        <path d="M13 2 3 14h8l-1 8 10-12h-8z" />
      </svg>
    ),
  },
  {
    value: 2750000,
    suffix: "+",
    label: "Leads gerados",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="9" cy="8" r="3.2" />
        <path d="M3.5 20c.7-3.4 3-5.2 5.5-5.2s4.8 1.8 5.5 5.2" />
        <path d="M16 8.5a3 3 0 1 1 3.6 2.94" />
        <path d="M15.5 14.6c2.2.4 3.9 2 4.5 5" />
      </svg>
    ),
  },
  {
    value: 150,
    suffix: "+",
    label: "Projetos concluídos",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2c2.2 2 3.6 4.8 3.6 8 0 2.4-.8 4.4-1.9 6.1L12 22l-1.7-5.9C9.2 14.4 8.4 12.4 8.4 10c0-3.2 1.4-6 3.6-8Z" />
        <circle cx="12" cy="9.5" r="1.8" />
      </svg>
    ),
  },
];

function formatNumber(n) {
  return n.toLocaleString("pt-BR");
}

function Counter({ value, suffix }) {
  const [display, setDisplay] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started.current) {
            started.current = true;
            const duration = 1600;
            const start = performance.now();
            const tick = (now) => {
              const progress = Math.min((now - start) / duration, 1);
              const eased = 1 - Math.pow(1 - progress, 3);
              setDisplay(Math.round(value * eased));
              if (progress < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
          }
        });
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [value]);

  return (
    <span className="stat-num" ref={ref}>
      {formatNumber(display)}
      {suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="stats-section">
      <div className="container">
        <div className="stats-strip reveal">
          {stats.map((s) => (
            <div className="stat-card" key={s.label}>
              <span className="stat-icon">{s.icon}</span>
              <div>
                <Counter value={s.value} suffix={s.suffix} />
                <span className="stat-label">{s.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
