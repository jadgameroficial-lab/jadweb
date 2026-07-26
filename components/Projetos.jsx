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
          <div className="project-card">
            <div className="mockup-frame">
              <div className="mockup-bar">
                <i />
                <i />
                <i />
                <span className="mockup-url">institucional.com.br</span>
              </div>
              <div className="mockup-body">
                <div className="mockup-nav">
                  <div className="mockup-logo" />
                  <div className="mockup-links">
                    <span />
                    <span />
                    <span />
                  </div>
                </div>
                <div className="mockup-hero">
                  <div className="mh-title" />
                  <div className="mh-title2" />
                  <div className="mh-sub" />
                  <div className="mh-sub" style={{ width: "30%" }} />
                  <div className="mockup-cta" />
                </div>
                <div className="mockup-cards">
                  <div />
                  <div />
                  <div />
                </div>
              </div>
            </div>
            <div className="project-info">
              <span className="project-tag">Site institucional</span>
              <h3>Site Institucional</h3>
              <p className="project-desc">
                Presença digital profissional para empresas que desejam transmitir credibilidade, autoridade e
                gerar novos negócios.
              </p>
              <div className="p-foot">
                <span>Next.js • React • SEO</span>
              </div>
            </div>
          </div>

          <div className="project-card">
            <div className="mockup-frame">
              <div className="mockup-bar">
                <i />
                <i />
                <i />
                <span className="mockup-url">promo.landing.co</span>
              </div>
              <div className="mockup-body">
                <div className="mockup-lp">
                  <div className="mh-title" style={{ margin: "20px auto 12px" }} />
                  <div className="mh-title2" style={{ margin: "0 auto 20px" }} />
                  <div className="mockup-cta" />
                  <div className="mockup-cards" style={{ marginTop: 24 }}>
                    <div />
                    <div />
                    <div />
                  </div>
                </div>
              </div>
            </div>
            <div className="project-info">
              <span className="project-tag">Landing page</span>
              <h3>Landing Page</h3>
              <p className="project-desc">
                Páginas de alta conversão desenvolvidas para campanhas de tráfego pago, lançamentos e captação
                de leads.
              </p>
              <div className="p-foot">
                <span>Performance • Conversão • Marketing</span>
              </div>
            </div>
          </div>

          <div className="project-card">
            <div className="mockup-frame">
              <div className="mockup-bar">
                <i />
                <i />
                <i />
                <span className="mockup-url">app.sistema.io</span>
              </div>
              <div className="mockup-body">
                <div className="mockup-sidebar">
                  <div className="mockup-sb">
                    <span className="active" />
                    <span />
                    <span />
                    <span />
                    <span />
                  </div>
                  <div className="mockup-main">
                    <div className="mockup-kpis">
                      <div />
                      <div />
                      <div />
                    </div>
                    <div className="mockup-chart" />
                  </div>
                </div>
              </div>
            </div>
            <div className="project-info">
              <span className="project-tag">Sistema web</span>
              <h3>Sistema Web</h3>
              <p className="project-desc">
                Sistemas personalizados para automatizar processos, organizar informações e aumentar a
                produtividade da empresa.
              </p>
              <div className="p-foot">
                <span>Dashboard • IA • Automação</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
