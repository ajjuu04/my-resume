import { HashRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './App.css';
import Project from "./pages/Project";
import Skills from "./pages/Skills";
import Achivements from "./pages/Achivements";
import Certification from "./pages/Certification";
import Expirence from "./pages/Expirence";
import Personal from './pages/personal';
import ParticleBackground from './components/ParticleBackground';
import PageTransition from './components/PageTransition';
import { GlitchText } from './components/AnimatedText';

function NavBar() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { to: '/', label: 'Personal' },
    { to: '/Certification', label: 'Education' },
    { to: '/Skills', label: 'Skills' },
    { to: '/Expirence', label: 'Experience' },
    { to: '/Project', label: 'Projects' },
    { to: '/Achivements', label: 'Achievements' },
  ];
  return (
    <nav className="navbar" style={scrolled ? { boxShadow: '0 8px 40px rgba(0,0,0,0.5)' } : {}}>
      <Link to="/" style={{ textDecoration: 'none' }}>
        <GlitchText text="Ajinkya's Portfolio" className="navbar-brand" tag="span" />
      </Link>
      <ul className="nav-links">
        {links.map(link => (
          <li key={link.to}>
            <Link to={link.to} className={location.pathname === link.to ? 'active' : ''}>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

function SnapHint() {
  const [visible, setVisible] = useState(true);
  const [dismissing, setDismissing] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDismissing(true);
      setTimeout(() => setVisible(false), 400);
    }, 8000);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`snap-hint ${dismissing ? 'snap-hint-dismiss' : ''}`}
      onClick={() => {
        setDismissing(true);
        setTimeout(() => setVisible(false), 400);
      }}
    >
      <span className="snap-hint-icon">🫰</span>
      <span>Double-click any card for Thanos effect!</span>
    </div>
  );
}

function AppContent() {
  const location = useLocation();

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <NavBar />
      <main className="main-content" style={{ flex: 1 }}>
        <PageTransition key={location.pathname}>
          <Routes location={location}>
            <Route path="/" element={<Personal />} />
            <Route path="/Certification" element={<Certification />} />
            <Route path="/Skills" element={<Skills />} />
            <Route path="/Expirence" element={<Expirence />} />
            <Route path="/Project" element={<Project />} />
            <Route path="/Achivements" element={<Achivements />} />
          </Routes>
        </PageTransition>
      </main>
      <footer className="page-footer">
        <div className="footer-content">
          <div className="footer-social-links">
            <a href="https://github.com/ajjuu04/" target="_blank" rel="noreferrer" className="footer-social-link" title="GitHub">
              <img src={`${process.env.PUBLIC_URL}/New folder/github.png`} alt="GitHub" className="social-logo" style={{ filter: 'invert(1)' }} />
            </a>
            <a href="https://www.linkedin.com/in/ajinkyajam/" target="_blank" rel="noreferrer" className="footer-social-link" title="LinkedIn">
              <img src={`${process.env.PUBLIC_URL}/New folder/linkedin.png`} alt="LinkedIn" className="social-logo" />
            </a>
            <a href="https://leetcode.com/u/ajjuu_04/" target="_blank" rel="noreferrer" className="footer-social-link" title="LeetCode">
              <img src={`${process.env.PUBLIC_URL}/New folder/leetcode.png`} alt="LeetCode" className="social-logo" />
            </a>
            <a href="mailto:ajinkyajambhulkar1@gmail.com" className="footer-social-link" title="Email">
              <img src={`${process.env.PUBLIC_URL}/New folder/email.png`} alt="Email" className="social-logo" />
            </a>
          </div>
          <p>© 2026 Ajinkya Jambhulkar · Built with React & ✨</p>
        </div>
      </footer>
      <SnapHint />
    </div>
  );
}

function App() {
  return (
    <HashRouter>
      <ParticleBackground />
      <AppContent />
    </HashRouter>
  );
}

export default App;
