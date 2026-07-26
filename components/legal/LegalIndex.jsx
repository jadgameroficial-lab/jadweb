"use client";

import { useEffect, useState } from "react";

export default function LegalIndex({ sections }) {
  const [active, setActive] = useState(sections?.[0]?.id ?? "");

  useEffect(() => {
    const headings = sections
      .map((s) => document.getElementById(s.id))
      .filter(Boolean);
    if (!headings.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-15% 0px -70% 0px", threshold: 0 }
    );
    headings.forEach((h) => observer.observe(h));
    return () => observer.disconnect();
  }, [sections]);

  return (
    <nav className="legal-index" aria-label="Índice do documento">
      <span className="legal-index-label">Neste documento</span>
      <ul>
        {sections.map((s) => (
          <li key={s.id}>
            <a href={`#${s.id}`} className={active === s.id ? "active" : ""}>
              {s.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
