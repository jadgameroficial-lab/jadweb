export default function Projetos() {
  return (
    <section id="projetos">
      <div className="container">
        <div className="section-head reveal">
          <div className="eyebrow">Portfólio</div>
          <h2>Um retrato de como pensamos produto.</h2>
          <p>
            Estamos documentando os próximos cases em detalhe. Enquanto isso, fale com a gente para ver
            exemplos completos ao vivo.
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
              <h3>Case em produção</h3>
              <div className="p-foot">
                <span>Next.js · Tailwind</span>
                <span>2026</span>
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
              <span className="project-tag">Sistema interno</span>
              <h3>Case em produção</h3>
              <div className="p-foot">
                <span>Supabase · IA</span>
                <span>2026</span>
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
              <h3>Case em produção</h3>
              <div className="p-foot">
                <span>Framer Motion</span>
                <span>2026</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
