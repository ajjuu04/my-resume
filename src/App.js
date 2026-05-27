import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import './App.css';
import Project from "./pages/Project";
import Skills from "./pages/Skills";
import Achivements from "./pages/Achivements";
import Certification from "./pages/Certification";
import Expirence from "./pages/Expirence";
import Personal from './pages/personal';

function NavBar() {
  const location = useLocation();
  const links = [
    { to: '/', label: 'Personal' },
    { to: '/Certification', label: 'Education' },
    { to: '/Skills', label: 'Skills' },
    { to: '/Expirence', label: 'Experience' },
    { to: '/Project', label: 'Projects' },
    { to: '/Achivements', label: 'Achievements' },
  ];
  return (
    <nav className="navbar">
      <span className="navbar-brand">AJ Portfolio</span>
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

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Personal />} />
          <Route path="/Certification" element={<Certification />} />
          <Route path="/Skills" element={<Skills />} />
          <Route path="/Expirence" element={<Expirence />} />
          <Route path="/Project" element={<Project />} />
          <Route path="/Achivements" element={<Achivements />} />
        </Routes>
      </main>
      <footer className="page-footer">
        © 2026 Ajinkya Jambhulkar · Built with React
      </footer>
    </BrowserRouter>
  );
}

export default App;
