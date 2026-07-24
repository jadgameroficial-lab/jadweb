import "./globals.css";

export const metadata = {
  title: "JAD Platform OS · O sistema operacional para o crescimento da sua empresa",
  description:
    "A JAD Platform OS estrutura, digitaliza, automatiza e escala empresas: sites, landing pages, sistemas SaaS, apps, IA, automação e gestão de tráfego, tudo integrado em um único ecossistema.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://api.fontshare.com/v2/css?f[]=clash-display@500,600,700&f[]=general-sans@400,500,600,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
