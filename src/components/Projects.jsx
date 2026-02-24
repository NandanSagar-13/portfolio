import { Github, ExternalLink } from 'lucide-react';

export default function Projects({ data }) {
  return (
    <section id="projects" style={{ padding: '80px 20px', background: 'var(--bg-secondary)' }}>
      <div className="section">
        <h2 className="section-title">Featured <span>Projects</span></h2>
        <p className="section-subtitle">Real-world solutions that bridge software and hardware</p>
        <div className="underline" />

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24 }}>
          {data.map(p => (
            <div key={p.id} className="card" style={{ position: 'relative' }}>
              {/* Date badge */}
              <span style={{
                position: 'absolute', top: 16, right: 16,
                background: 'var(--accent-cyan)', color: '#000',
                padding: '3px 10px', borderRadius: 20, fontSize: '0.75rem', fontWeight: 700,
              }}>{p.date}</span>

              {/* Number */}
              <div style={{ fontSize: '4rem', fontWeight: 900, color: 'rgba(0,212,255,0.15)', marginBottom: 8 }}>
                {p.number}
              </div>

              <h3 style={{ fontSize: '1.15rem', marginBottom: 4 }}>{p.title}</h3>
              <p style={{ color: 'var(--accent-cyan)', fontSize: '0.85rem', marginBottom: 16 }}>{p.subtitle}</p>

              {p.highlights.slice(0, 2).map((h, i) => (
                <div key={i} style={{ display: 'flex', gap: 8, marginBottom: 8 }}>
                  <span style={{ color: 'var(--accent-cyan)', fontSize: '0.6rem', marginTop: 6 }}>●</span>
                  <span style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>{h}</span>
                </div>
              ))}

              {/* Tech tags */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginTop: 16, marginBottom: 16 }}>
                {p.tech.map(t => (
                  <span key={t} style={{
                    background: 'rgba(0,212,255,0.1)', border: '1px solid rgba(0,212,255,0.3)',
                    color: 'var(--accent-cyan)', padding: '3px 10px', borderRadius: 20, fontSize: '0.78rem',
                  }}>{t}</span>
                ))}
              </div>

              <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
                {p.github && (
                  <a href={p.github} target="_blank" rel="noreferrer"
                    style={{ color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: 6, textDecoration: 'none', fontSize: '0.85rem' }}>
                    <Github size={16} /> Code
                  </a>
                )}
                {p.demo && (
                  <a href={p.demo} target="_blank" rel="noreferrer"
                    style={{ color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: 6, textDecoration: 'none', fontSize: '0.85rem' }}>
                    <ExternalLink size={16} /> Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}