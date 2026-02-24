import { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Download, Eye } from 'lucide-react';

const titles = [
  "Embedded~IoT~Android~GenAI - A Hybrid Engineer",
  "Android Developer | Kotlin & Jetpack Compose",
  "IoT Engineer | ESP32 & LoRa Systems",
  "Gen AI Integrator | Salesforce & Vertex AI",
];

export default function Hero({ data }) {
  const [titleIdx, setTitleIdx] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [charIdx, setCharIdx] = useState(0);

  useEffect(() => {
    const full = titles[titleIdx];
    if (charIdx < full.length) {
      const t = setTimeout(() => {
        setDisplayed(full.slice(0, charIdx + 1));
        setCharIdx(c => c + 1);
      }, 40);
      return () => clearTimeout(t);
    } else {
      const t = setTimeout(() => {
        setCharIdx(0);
        setDisplayed('');
        setTitleIdx(i => (i + 1) % titles.length);
      }, 2500);
      return () => clearTimeout(t);
    }
  }, [charIdx, titleIdx]);

  return (
    <section id="home" style={{
      minHeight: '100vh',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      textAlign: 'center', padding: '0 20px',
      background: 'radial-gradient(ellipse at 20% 50%, rgba(0,212,255,0.05) 0%, transparent 50%), radial-gradient(ellipse at 80% 50%, rgba(255,149,0,0.05) 0%, transparent 50%)',
    }}>
      <div>
        <p style={{ color: 'var(--text-secondary)', marginBottom: 12, fontSize: '1rem' }}>Hello, I'm</p>
        <h1 style={{ fontSize: 'clamp(2.2rem, 6vw, 4rem)', fontWeight: 900, letterSpacing: 2, marginBottom: 20 }}>
          {data.name}
        </h1>
        <p style={{ color: 'var(--accent-cyan)', fontFamily: 'monospace', fontSize: 'clamp(0.9rem, 2.5vw, 1.2rem)', minHeight: 30, marginBottom: 16 }}>
          {displayed}<span style={{ animation: 'blink 1s infinite' }}>|</span>
        </p>
        <p style={{ color: 'var(--text-secondary)', marginBottom: 12 }}>{data.description}</p>
        <p style={{ color: 'var(--text-secondary)', marginBottom: 36, fontSize: '0.9rem' }}>📍 {data.location}</p>

        <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 36 }}>
          <a href="#projects" className="btn btn-primary">
            <Eye size={16} /> View Projects
          </a>
          <a href="/resume.pdf" download className="btn btn-outline">
            <Download size={16} /> Download Resume
          </a>
        </div>

        <div style={{ display: 'flex', gap: 20, justifyContent: 'center' }}>
          {[
            { icon: <Github size={22} />, href: data.github },
            { icon: <Linkedin size={22} />, href: data.linkedin },
            { icon: <Mail size={22} />, href: `mailto:${data.email}` },
          ].map((s, i) => (
            <a key={i} href={s.href} target="_blank" rel="noreferrer"
              style={{
                width: 44, height: 44, borderRadius: '50%',
                border: '1px solid var(--border)', display: 'flex',
                alignItems: 'center', justifyContent: 'center',
                color: 'var(--text-secondary)', textDecoration: 'none',
                transition: 'all 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent-cyan)'; e.currentTarget.style.color = 'var(--accent-cyan)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text-secondary)'; }}>
              {s.icon}
            </a>
          ))}
        </div>
      </div>
      <style>{`@keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }`}</style>
    </section>
  );
}