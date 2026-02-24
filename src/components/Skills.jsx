export default function Skills({ data }) {
  return (
    <section id="skills" style={{ padding: '80px 20px' }}>
      <div className="section">
        <h2 className="section-title">Technical <span>Skills</span></h2>
        <p className="section-subtitle">A hybrid skillset spanning mobile development, embedded systems, and AI</p>
        <div className="underline" />

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
          {Object.entries(data).map(([cat, skills]) => (
            <div key={cat} className="card">
              <h3 style={{ marginBottom: 20, borderLeft: '3px solid var(--accent-cyan)', paddingLeft: 12 }}>{cat}</h3>
              {skills.map((s) => (
                <div key={s.name} style={{ marginBottom: 16 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6, fontSize: '0.9rem' }}>
                    <span>{s.name}</span>
                    <span style={{ color: 'var(--accent-cyan)' }}>{s.level}%</span>
                  </div>
                  <div style={{ height: 6, background: 'var(--border)', borderRadius: 3 }}>
                    <div style={{ height: '100%', width: `${s.level}%`, background: 'linear-gradient(90deg, var(--accent-cyan), #00ff88)', borderRadius: 3, transition: 'width 1s ease' }} />
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}