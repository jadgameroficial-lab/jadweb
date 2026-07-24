const services = [
  {
    num: "01",
    title: "Sites institucionais",
    desc: "Presença profissional para gerar confiança.",
    icon: <path d="M4 6h16M4 12h16M4 18h10" />,
  },
  {
    num: "02",
    title: "Landing pages",
    desc: "Páginas focadas em conversão.",
    icon: <path d="M13 2 3 14h8l-1 8 10-12h-8z" />,
  },
  {
    num: "03",
    title: "Sistemas SaaS",
    desc: "Softwares sob medida para sua operação.",
    icon: (
      <>
        <rect x="3" y="4" width="18" height="14" rx="2" />
        <path d="M8 21h8M12 18v3" />
      </>
    ),
  },
  {
    num: "04",
    title: "Aplicativos",
    desc: "Android e iPhone.",
    icon: (
      <>
        <rect x="7" y="2" width="10" height="20" rx="2" />
        <path d="M11 18h2" />
      </>
    ),
  },
  {
    num: "05",
    title: "Inteligência Artificial",
    desc: "Assistentes inteligentes para atendimento e processos.",
    icon: (
      <>
        <rect x="4" y="7" width="16" height="12" rx="2" />
        <path d="M9 3v4M15 3v4M8 12h.01M16 12h.01M9 16h6" />
      </>
    ),
  },
  {
    num: "06",
    title: "Automações",
    desc: "WhatsApp, CRM, vendas e operação.",
    icon: (
      <>
        <path d="M12 2a10 10 0 1 0 10 10" />
        <path d="M12 8v4l3 2" />
      </>
    ),
  },
  {
    num: "07",
    title: "Gestão de Tráfego",
    desc: "Google Ads, Meta Ads e TikTok Ads.",
    icon: (
      <>
        <path d="M3 3v18h18" />
        <path d="M7 15l4-5 3 3 5-7" />
      </>
    ),
  },
  {
    num: "08",
    title: "Mentoria",
    desc: "Estratégia de crescimento digital.",
    icon: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="m9.5 9.5 2-4.5 2 4.5 4.5 2-4.5 2-2 4.5-2-4.5-4.5-2Z" />
      </>
    ),
  },
];

export default function Servicos() {
  return (
    <section id="servicos">
      <div className="container">
        <div className="section-head reveal">
          <div className="eyebrow">Nosso ecossistema</div>
          <h2>Tudo que sua empresa precisa.</h2>
          <p>
            Não vendemos apenas serviços isolados. Estruturamos, digitalizamos, automatizamos e escalamos o seu
            negócio dentro de um único sistema.
          </p>
        </div>
        <div className="services-grid reveal">
          {services.map((s) => (
            <div className="service-card" key={s.num}>
              <span className="service-num">{s.num}</span>
              <div className="service-icon">
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  {s.icon}
                </svg>
              </div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
