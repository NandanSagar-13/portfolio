import { Mail, Phone, Github, Linkedin, Send } from 'lucide-react';
import { useState } from 'react';

export default function Contact({ data }) {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = () => {
    const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`);
    window.open(`mailto:${data.email}?subject=${subject}&body=${body}`);
    setSent(true);
    setForm({ name: '', email: '', message: '' });
    setTimeout(() => setSent(false), 3000);
  };

  const inputStyle = {
    width: '100%', padding: '12px 16px',
    background: 'var(--bg-card)', border: '1px solid var(--border)',
    borderRadius: 8, color: 'var(--text-primary)',
    fontSize: '0.95rem', marginBottom: 16, outline: 'none',
    transition: 'border-color 0.2s',
  };

  return (
    <section id="contact" style={{ padding: '80px 20px', background: 'var(--bg-secondary)' }}>
      <div className="section">
        <h2 className="section-title">Get In <span>Touch</span></h2>
        <p className="section-subtitle">Have a project in mind? Let's build something great together.</p>
        <div className="underline" />

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40, flexWrap: 'wrap' }}>
          {/* Info */}
          <div>
            <h3 style={{ marginBottom: 24 }}>Contact Info</h3>
            {[
              { icon: <Mail size={18} />, text: data.email, href: `mailto:${data.email}` },
              { icon: <Phone size={18} />, text: data.phone, href: `tel:${data.phone}` },
              { icon: <Phone size={18} />, text: data.phone2, href: `tel:${data.phone2}` },
              { icon: <Github size={18} />, text: 'GitHub', href: data.github },
              { icon: <Linkedin size={18} />, text: 'LinkedIn', href: data.linkedin },
            ].map((item, i) => (
              <a key={i} href={item.href} target="_blank" rel="noreferrer"
                style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 20, textDecoration: 'none', color: 'var(--text-secondary)' }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--accent-cyan)'}
                onMouseLeave={e => e.currentTarget.style.color = 'var(--text-secondary)'}>
                <div style={{ width: 42, height: 42, border: '1px solid var(--border)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {item.icon}
                </div>
                {item.text}
              </a>
            ))}
          </div>

          {/* Form */}
          <div>
            <input style={inputStyle} placeholder="Your Name" value={form.name}
              onChange={e => setForm({ ...form, name: e.target.value })}
              onFocus={e => e.target.style.borderColor = 'var(--accent-cyan)'}
              onBlur={e => e.target.style.borderColor = 'var(--border)'} />
            <input style={inputStyle} placeholder="Your Email" type="email" value={form.email}
              onChange={e => setForm({ ...form, email: e.target.value })}
              onFocus={e => e.target.style.borderColor = 'var(--accent-cyan)'}
              onBlur={e => e.target.style.borderColor = 'var(--border)'} />
            <textarea style={{ ...inputStyle, height: 120, resize: 'vertical' }}
              placeholder="Your Message" value={form.message}
              onChange={e => setForm({ ...form, message: e.target.value })}
              onFocus={e => e.target.style.borderColor = 'var(--accent-cyan)'}
              onBlur={e => e.target.style.borderColor = 'var(--border)'} />
            <button className="btn btn-primary" onClick={handleSubmit}
              style={{ width: '100%', justifyContent: 'center' }}>
              {sent ? '✅ Opening email...' : <><Send size={16} /> Send Message</>}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}