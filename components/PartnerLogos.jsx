const partners = [
  {
    name: "Google",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="8.5" />
        <path d="M12 12h6.2c.2 3.6-2.4 7-6.2 7-4 0-7-3.1-7-7s3-7 7-7c1.8 0 3.3.6 4.5 1.7" />
      </svg>
    ),
  },
  {
    name: "Meta",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M7 16c-2.2 0-3.5-2-3.5-4.5S4.8 7 7 7c1.8 0 2.9 1.4 5 5 2.1 3.6 3.2 5 5 5 2.2 0 3.5-2 3.5-4.5S18.8 7 17 7c-1.8 0-2.9 1.4-5 5" />
      </svg>
    ),
  },
  {
    name: "WhatsApp",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" stroke="none">
        <path d="M12 2.2a9.8 9.8 0 0 0-8.4 14.8L2.4 21.6l4.8-1.2A9.8 9.8 0 1 0 12 2.2Zm0 1.8a8 8 0 1 1 0 16 7.9 7.9 0 0 1-4-1.1l-.3-.2-2.8.7.7-2.7-.2-.3A8 8 0 0 1 12 4Z" />
      </svg>
    ),
  },
  {
    name: "OpenAI",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v20M2 12h20M5 5l14 14M19 5 5 19" />
      </svg>
    ),
  },
  {
    name: "Stripe",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="5" width="18" height="14" rx="3" />
        <path d="M3 10h18" />
      </svg>
    ),
  },
  {
    name: "Vercel",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" stroke="none">
        <path d="M12 3 22 20H2Z" />
      </svg>
    ),
  },
  {
    name: "Supabase",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" stroke="none">
        <path d="M13 2 3 14h8l-1 8 10-12h-8z" />
      </svg>
    ),
  },
  {
    name: "RD Station",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3.5 2" />
      </svg>
    ),
  },
];

export default function PartnerLogos() {
  return (
    <section className="partners-section">
      <div className="container">
        <div className="partners-label">Tecnologias e parceiros</div>
        <div className="partners-row reveal">
          {partners.map((p) => (
            <div className="partner-item" key={p.name}>
              <span className="partner-icon">{p.icon}</span>
              {p.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
