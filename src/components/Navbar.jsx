import { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';

export default function Navbar({ theme, toggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = ['Home', 'About', 'Experience', 'Projects', 'Skills', 'Contact'];

  return (
    <nav style={{
      position: 'fixed', top: 0, width: '100%', zIndex: 1000,
      background: scrolled ? 'rgba(10,10,11,0.92)' : 'transparent',
      backdropFilter: scrolled ? 'blur(10px)' : 'none',
      borderBottom: scrolled ? '1px solid var(--border)' : 'none',
      transition: 'all 0.3s',
      padding: '14px 32px',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    }}>
      <div style={{ fontWeight: 800, fontSize: '1.3rem', letterSpacing: 1 }}>
        <span style={{ color: 'var(--accent-cyan)' }}>N</span>
        <span style={{ color: 'var(--text-primary)' }}>S</span>
      </div>

      {/* Desktop nav */}
      <div style={{ display: 'flex', gap: 28, alignItems: 'center' }}
        className="desktop-nav">
        {links.map(l => (
          <a key={l} href={`#${l.toLowerCase()}`}
            style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.95rem', fontWeight: 500 }}
            onMouseEnter={e => e.target.style.color = 'var(--text-primary)'}
            onMouseLeave={e => e.target.style.color = 'var(--text-secondary)'}>
            {l}
          </a>
        ))}
        <button onClick={toggleTheme}
          style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-secondary)', display: 'flex' }}>
          {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </div>
    </nav>
  );
}