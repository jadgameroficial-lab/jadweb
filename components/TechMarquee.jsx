const techs = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Supabase",
  "Vercel",
  "HTML",
  "CSS",
  "JavaScript",
  "Figma",
  "PHP",
  "Python",
];

export default function TechMarquee() {
  const list = [...techs, ...techs];
  return (
    <section style={{ paddingTop: 0, paddingBottom: 0 }}>
      <div className="tech-marquee">
        <div className="marquee-track">
          {list.map((t, i) => (
            <div className="tech-item" key={i}>
              {t}
              <span className="tech-dot" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
