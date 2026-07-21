# JAD WEB

Site institucional em Next.js 14 (App Router), com a Hero em uma cena 3D real
feita com React Three Fiber + drei + postprocessing, GSAP para as animações
de entrada e scroll.

## Rodar localmente

```bash
npm install
npm run dev
```

Abra http://localhost:3000

## Build de produção

```bash
npm run build
npm start
```

## Deploy na Vercel

1. Suba este projeto para um repositório no GitHub.
2. Em vercel.com, clique em "Add New Project" e importe o repositório.
3. A Vercel detecta Next.js automaticamente. Não é necessário configurar nada
   além disso (o comando de build já é `next build`).
4. Clique em Deploy.

## Estrutura

- `app/` — layout, página principal e estilos globais.
- `components/Hero.jsx` e `components/HeroScene.jsx` — Hero e a cena 3D
  (esfera com distorção orgânica, três anéis orbitais com partículas viajando
  neles, três camadas de Sparkles, luz principal/secundária/de recorte, bloom
  e vinheta via postprocessing, parallax de câmera pelo mouse e entrada
  cinematográfica via GSAP).
- Demais componentes em `components/` — uma seção por arquivo (Sobre,
  Serviços, Diferenciais, Processo, Tecnologias, Projetos, Depoimentos, FAQ,
  Contato, Footer).

## WhatsApp

Todos os CTAs e o botão flutuante apontam para:
`https://wa.me/5547991100596` com a mensagem automática já preenchida.
