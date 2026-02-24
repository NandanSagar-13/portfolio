import { GraduationCap, Award, Trophy } from 'lucide-react';

export default function About({ data }) {
  return (
    <section id="about" style={{ padding: '80px 20px', background: 'var(--bg-secondary)' }}>
      <div className="section">
        <h2 className="section-title">About <span>Me</span></h2>
        <div className="underline" />

        <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: 40, marginBottom: 50, flexWrap: 'wrap' }}>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, maxWidth: 600 }}>{data.bio}</p>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, minWidth: 280 }}>
            {data.stats.map((s, i) => (
              <div key={i} className="card" style={{ textAlign: 'center', padding: '20px 16px' }}>
                <div style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--accent-cyan)' }}>{s.value}</div>
                <div style={{ color: 'var(--text-secondary)', fontSize: '0.82rem', marginTop: 4 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="card" style={{ marginBottom: 30, borderLeft: '3px solid var(--accent-cyan)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
            <GraduationCap size={20} color="var(--accent-cyan)" />
            <strong>{data.education.degree}</strong>
          </div>
          <p style={{ color: 'var(--text-secondary)' }}>{data.education.field}</p>
          <p style={{ color: 'var(--text-secondary)' }}>{data.education.college} • {data.education.location}</p>
          <p style={{ color: 'var(--accent-cyan)', marginTop: 4, fontSize: '0.9rem' }}>{data.education.graduation}</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
          {/* Certifications */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
              <Award size={18} color="var(--accent-cyan)" />
              <strong>Certifications</strong>
            </div>
            {data.certifications.map((c, i) => (
              <div key={i} style={{ display: 'flex', gap: 10, marginBottom: 10 }}>
                <span style={{ color: 'var(--accent-cyan)', marginTop: 4 }}>●</span>
                <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{c}</span>
              </div>
            ))}
          </div>

          {/* Achievements */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
              <Trophy size={18} color="var(--accent-amber)" />
              <strong>Achievements</strong>
            </div>
            {data.achievements.map((a, i) => (
              <div key={i} style={{ display: 'flex', gap: 10, marginBottom: 10 }}>
                <span style={{ color: 'var(--accent-amber)', marginTop: 4 }}>●</span>
                <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{a}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}