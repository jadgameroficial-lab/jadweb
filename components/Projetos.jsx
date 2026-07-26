const projects = [
  {
    title: "Site Institucional",
    desc: "Sites institucionais modernos para empresas que desejam fortalecer sua presença digital.",
    img: "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1200&auto=format&fit=crop",
    alt: "Site institucional moderno aberto em um computador",
  },
  {
    title: "Landing Page",
    desc: "Landing pages desenvolvidas para aumentar conversões e gerar novos clientes.",
    img: "https://images.unsplash.com/photo-1639170952854-16636715af61?q=80&w=1200&auto=format&fit=crop",
    alt: "Landing page moderna com visual premium em um notebook",
  },
  {
    title: "Sistema Web",
    desc: "Sistemas personalizados para automatizar processos e aumentar a produtividade.",
    img: "https://images.unsplash.com/photo-1686061593213-98dad7c599b9?q=80&w=1200&auto=format&fit=crop",
    alt: "Dashboard administrativo moderno com gráficos e indicadores",
  },
];

export default function Projetos() {
  return (
    <section id="projetos">
      <div className="container">
        <div className="section-head reveal">
          <div className="eyebrow">Portfólio</div>
          <h2>Criamos soluções para diferentes necessidades digitais.</h2>
          <p>
            Cada projeto é desenvolvido sob medida para o objetivo de cada empresa. Estas são as principais
            soluções que entregamos para nossos clientes.
          </p>
        </div>
        <div className="projects-grid reveal">
          {projects.map((p) => (
            <div className="project-card" key={p.title}>
              <div className="project-image">
                <img src={p.img} alt={p.alt} loading="lazy" />
              </div>
              <div className="project-info">
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
