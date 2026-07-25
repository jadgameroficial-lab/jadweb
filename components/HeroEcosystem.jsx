"use client";

/**
 * HeroEcosystem
 * Pure HTML/SVG/CSS "hub" diagram representing the JAD Platform OS core
 * connected to input and output modules. No raster images, no heavy libs —
 * animation is done with CSS keyframes + SVG stroke-dash flow.
 */

const ICONS = {
  users: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="9" cy="8" r="3.2" />
      <path d="M3.5 20c.7-3.4 3-5.2 5.5-5.2s4.8 1.8 5.5 5.2" />
      <path d="M16 8.5a3 3 0 1 1 3.6 2.94" />
      <path d="M15.5 14.6c2.2.4 3.9 2 4.5 5" />
    </svg>
  ),
  instagram: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  ),
  google: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 12h6.2c.2 3.6-2.4 7-6.2 7-4 0-7-3.1-7-7s3-7 7-7c1.8 0 3.3.6 4.5 1.7" />
    </svg>
  ),
  whatsapp: (
    <svg viewBox="0 0 24 24" fill="currentColor" stroke="none">
      <path d="M12 2.2a9.8 9.8 0 0 0-8.4 14.8L2.4 21.6l4.8-1.2A9.8 9.8 0 1 0 12 2.2Zm0 1.8a8 8 0 1 1 0 16 7.9 7.9 0 0 1-4-1.1l-.3-.2-2.8.7.7-2.7-.2-.3A8 8 0 0 1 12 4Zm-3.1 3.9c-.2 0-.5 0-.7.3-.2.3-.9.9-.9 2.1s.9 2.4 1 2.6c.1.2 1.8 2.8 4.4 3.8 2.2.9 2.6.7 3.1.6.5 0 1.6-.6 1.8-1.3.2-.6.2-1.2.2-1.3-.1-.1-.3-.2-.6-.4l-1.8-.9c-.2-.1-.4-.2-.6.1l-.8 1c-.1.2-.3.2-.5.1-.3-.1-1.1-.4-2.1-1.3-.8-.7-1.3-1.5-1.5-1.8-.1-.3 0-.4.1-.5l.4-.5c.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5l-.8-1.9c-.2-.5-.4-.4-.6-.4Z" />
    </svg>
  ),
  cart: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="9" cy="21" r="1" />
      <circle cx="18" cy="21" r="1" />
      <path d="M2 3h2l2.6 12.6a2 2 0 0 0 2 1.6h8.8a2 2 0 0 0 2-1.6L21 7H6" />
    </svg>
  ),
  bolt: (
    <svg viewBox="0 0 24 24" fill="currentColor" stroke="none">
      <path d="M13 2 3 14h8l-1 8 10-12h-8z" />
    </svg>
  ),
  chart: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 20V10M12 20V4M20 20v-7" />
    </svg>
  ),
  dollar: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 6.5v11M15 9.2c0-1.5-1.4-2.2-3-2.2-1.8 0-3 .9-3 2.3 0 3.2 6.2 1.5 6.2 4.7 0 1.5-1.4 2.5-3.2 2.5-1.7 0-3.1-.8-3.2-2.3" />
    </svg>
  ),
};

const inputs = [
  { label: "Clientes", icon: ICONS.users },
  { label: "Instagram", icon: ICONS.instagram },
  { label: "Google", icon: ICONS.google },
  { label: "WhatsApp", icon: ICONS.whatsapp },
];

const outputs = [
  { label: "Leads", icon: ICONS.users },
  { label: "Vendas", icon: ICONS.cart },
  { label: "Automações", icon: ICONS.bolt },
  { label: "Relatórios", icon: ICONS.chart },
  { label: "Lucro", icon: ICONS.dollar },
];

// Layout in a 300x300 coordinate space (kept in sync with the CSS % positions below)
const BOX = 300;
const CORE = { x: 150, y: 150, r: 50 };

function yFor(count, i, padTop, padBottom) {
  if (count === 1) return BOX / 2;
  const usable = BOX - padTop - padBottom;
  return padTop + (usable / (count - 1)) * i;
}

function curve(x1, y1, x2, y2) {
  const dx = (x2 - x1) * 0.55;
  return `M${x1},${y1} C${x1 + dx},${y1} ${x2 - dx},${y2} ${x2},${y2}`;
}

export default function HeroEcosystem() {
  const inX = 62;
  const outX = 238;

  const inputPaths = inputs.map((_, i) => {
    const y = yFor(inputs.length, i, 40, 40);
    return curve(inX + 20, y, CORE.x - CORE.r + 4, CORE.y);
  });
  const outputPaths = outputs.map((_, i) => {
    const y = yFor(outputs.length, i, 22, 22);
    return curve(CORE.x + CORE.r - 4, CORE.y, outX - 20, y);
  });

  return (
    <div className="hub" aria-hidden="true">
      <div className="hub-ambient">
        {Array.from({ length: 10 }).map((_, i) => (
          <span key={i} className={`hub-particle p${i}`} />
        ))}
      </div>

      <svg className="hub-lines" viewBox={`0 0 ${BOX} ${BOX}`} preserveAspectRatio="none">
        {inputPaths.map((d, i) => (
          <path key={`in-${i}`} d={d} className="hub-line" style={{ animationDelay: `${i * 0.35}s` }} />
        ))}
        {outputPaths.map((d, i) => (
          <path key={`out-${i}`} d={d} className="hub-line" style={{ animationDelay: `${0.2 + i * 0.3}s` }} />
        ))}
      </svg>

      <span className="hub-label hub-label-in">Entrada</span>
      <span className="hub-label hub-label-out">Saída</span>

      {inputs.map((it, i) => (
        <div
          className="hub-node hub-node-in"
          key={it.label}
          style={{ top: `${(yFor(inputs.length, i, 40, 40) / BOX) * 100}%`, animationDelay: `${i * 0.5}s` }}
        >
          <span className="hub-node-icon">{it.icon}</span>
          {it.label}
        </div>
      ))}

      {outputs.map((it, i) => (
        <div
          className="hub-node hub-node-out"
          key={it.label}
          style={{ top: `${(yFor(outputs.length, i, 22, 22) / BOX) * 100}%`, animationDelay: `${0.3 + i * 0.4}s` }}
        >
          <span className="hub-node-icon">{it.icon}</span>
          {it.label}
        </div>
      ))}

      <div className="hub-core">
        <div className="hub-core-glow" />
        <div className="hub-core-ring r1" />
        <div className="hub-core-ring r2" />
        <div className="hub-core-body">
          <span className="hub-core-title">JAD</span>
          <span className="hub-core-sub">Platform OS</span>
        </div>
      </div>
    </div>
  );
}
