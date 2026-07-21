const services = [
  {
    num: "01",
    title: "Landing pages de alta conversão",
    desc: "Páginas construídas para vender, com copy direta, hierarquia clara e velocidade acima da média do mercado.",
    icon: <path d="M13 2 3 14h8l-1 8 10-12h-8z" />,
  },
  {
    num: "02",
    title: "Sites institucionais",
    desc: "Presença digital com identidade própria, otimizada para SEO e pronta para escalar junto com a empresa.",
    icon: <path d="M4 6h16M4 12h16M4 18h10" />,
  },
  {
    num: "03",
    title: "Sistemas web e SaaS",
    desc: "Produtos completos, com autenticação, planos e painéis pensados para o uso real do seu cliente.",
    icon: (
      <>
        <rect x="3" y="4" width="18" height="14" rx="2" />
        <path d="M8 21h8M12 18v3" />
      </>
    ),
  },
  {
    num: "04",
    title: "E-commerce completo",
    desc: "Loja virtual rápida, com checkout otimizado e integração de pagamento pronta para vender no dia um.",
    icon: (
      <>
        <circle cx="9" cy="21" r="1" />
        <circle cx="18" cy="21" r="1" />
        <path d="M2 3h2l2.6 12.6a2 2 0 0 0 2 1.6h8.8a2 2 0 0 0 2-1.6L21 7H6" />
      </>
    ),
  },
  {
    num: "05",
    title: "CRM, ERP e dashboards",
    desc: "Ferramentas de gestão sob medida para o seu processo, com relatórios e indicadores em tempo real.",
    icon: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 8v4l3 2" />
      </>
    ),
  },
  {
    num: "06",
    title: "Integrações com IA e automação",
    desc: "Assistentes, automações de processos e integrações de API que economizam horas reais da sua equipe.",
    icon: (
      <>
        <path d="M12 2a10 10 0 1 0 10 10" />
        <path d="M12 8v4l3 2" />
      </>
    ),
  },
];

export default function Servicos() {
  return (
    <section id="servicos">
      <div className="container">
        <div className="section-head reveal">
          <div className="eyebrow">O que desenvolvemos</div>
          <h2>De uma landing page a um sistema completo.</h2>
          <p>
            Não importa o tamanho do desafio. Temos o time e o processo para transformar qualquer operação em
            um produto digital sólido.
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
