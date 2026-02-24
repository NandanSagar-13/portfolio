import { Building, MapPin, Calendar } from 'lucide-react';

export default function Experience({ data }) {
  return (
    <section id="experience" style={{ padding: '80px 20px' }}>
      <div className="section">
        <h2 className="section-title">Work <span>Experience</span></h2>
        <div className="underline" />

        <div style={{ position: 'relative' }}>
          {/* Timeline line */}
          <div style={{ position: 'absolute', left: '50%', top: 0, bottom: 0, width: 2, background: 'var(--border)', transform: 'translateX(-50%)' }} />

          {data.map((exp, i) => (
            <div key={exp.id} style={{
              display: 'flex', justifyContent: i % 2 === 0 ? 'flex-start' : 'flex-end',
              marginBottom: 40, position: 'relative',
            }}>
              {/* Dot */}
              <div style={{
                position: 'absolute', left: '50%', top: 24, width: 14, height: 14,
                borderRadius: '50%', background: 'var(--accent-cyan)',
                transform: 'translateX(-50%)', zIndex: 1,
              }} />

              <div className="card" style={{ width: '45%', minWidth: 280 }}>
                <h3 style={{ fontSize: '1.1rem', marginBottom: 8 }}>{exp.role}</h3>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, color: 'var(--accent-cyan)', marginBottom: 4, fontSize: '0.9rem' }}>
                  <Building size={14} /> {exp.company}
                </div>
                <div style={{ display: 'flex', gap: 16, color: 'var(--text-secondary)', fontSize: '0.82rem', marginBottom: 16 }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}><MapPin size={12} />{exp.location}</span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}><Calendar size={12} />{exp.period}</span>
                </div>
                {exp.highlights.map((h, j) => (
                  <div key={j} style={{ display: 'flex', gap: 10, marginBottom: 8 }}>
                    <span style={{ color: 'var(--accent-cyan)', fontSize: '0.6rem', marginTop: 6 }}>●</span>
                    <span style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', lineHeight: 1.6 }}>{h}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}