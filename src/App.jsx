import { useState, useEffect } from 'react';
import { portfolioData } from './data/portfolioData';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme(t => t === 'dark' ? 'light' : 'dark');

  return (
    <div>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <Hero data={portfolioData.personal} />
      <About data={portfolioData.about} />
      <Experience data={portfolioData.experience} />
      <Projects data={portfolioData.projects} />
      <Skills data={portfolioData.skills} />
      <Contact data={portfolioData.personal} />

      {/* Footer */}
      <footer style={{ textAlign: 'center', padding: '30px 20px', color: 'var(--text-secondary)', borderTop: '1px solid var(--border)', fontSize: '0.9rem' }}>
        Built with ❤️ by Nandan Sagar S • {new Date().getFullYear()}
      </footer>
    </div>
  );
}

export default App;