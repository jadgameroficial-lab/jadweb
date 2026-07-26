"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const WA_LINK =
  "https://wa.me/5547991100596?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20JAD%20Platform%20OS%20e%20gostaria%20de%20agendar%20um%20diagn%C3%B3stico%20estrat%C3%A9gico.";

export default function Footer() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const toSection = (hash) => (isHome ? hash : `/${hash}`);

  return (
    <footer>
      <div className="container">
        <div className="footer-top">
          <div>
            <Link href={isHome ? "#top" : "/"} className="logo">
              <span className="dot" />
              JAD Platform OS
            </Link>
            <p style={{ maxWidth: 280, marginTop: 18, fontSize: 14, color: "var(--ink-60)", lineHeight: 1.6 }}>
              O sistema operacional para o crescimento da sua empresa: sites, sistemas, IA, automação e tráfego,
              tudo integrado.
            </p>
          </div>
          <div className="footer-cols">
            <div className="footer-col">
              <h4>Navegação</h4>
              <Link href={toSection("#sobre")}>Sobre</Link>
              <Link href={toSection("#servicos")}>Serviços</Link>
              <Link href={toSection("#processo")}>Processo</Link>
              <Link href={toSection("#faq")}>FAQ</Link>
            </div>
            <div className="footer-col">
              <h4>Contato</h4>
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer">WhatsApp</a>
              <Link href={toSection("#contato")}>Agendar diagnóstico</Link>
            </div>
            <div className="footer-col">
              <h4>Legal</h4>
              <Link href="/privacidade">Política de Privacidade</Link>
              <Link href="/termos">Termos de Uso</Link>
              <Link href="/cookies">Política de Cookies</Link>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 JAD Platform OS. Todos os direitos reservados.</span>
          <span>Blumenau, SC</span>
        </div>
      </div>
    </footer>
  );
}
