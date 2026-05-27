import { FloatingText } from '../components/AnimatedText';
import { AnimatedCard, ScrollReveal } from '../components/AnimatedCard';

function Project() {
  const projects = [
    {
      name: 'Bloodsearch — Blood Search Engine',
      link: 'https://github.com/ajjuu04/BloodSearch',
      linkLabel: 'GitHub Repo',
      liveLink: null,
      tech: ['HTML', 'CSS', 'JavaScript', 'MySQL', 'Bootstrap'],
      badge: 'BCA Semester 3',
      icon: '🩸',
      color: 'tag-purple',
      points: [
        'Developed a responsive UI using Bootstrap, fully accessible on mobile for users in emergency situations.',
        'Designed the MySQL database schema to store donor details, blood groups, and locations efficiently.',
        'Implemented a "login-free" architecture to allow instant access to donor contact numbers.',
        'Integrated frontend with the MySQL database for accurate search results and admin updates.',
      ]
    },
    {
      name: 'Maharashtra Yatra — Family Bus Booking System',
      link: 'https://github.com/ajjuu04/maharashtrayatra',
      linkLabel: 'GitHub Repo',
      liveLink: 'https://busbooking.wuaze.com/',
      tech: ['HTML', 'CSS', 'JavaScript', 'MySQL', 'Bootstrap'],
      badge: 'BCA Semester 4',
      icon: '🚌',
      color: 'tag-cyan',
      points: [
        'Built client-side interface with intuitive layout for seat selection and route schedules.',
        'Designed the Admin Dashboard for managing buses, routes, and user bookings visually.',
        'Connected user input forms to the MySQL database for accurate data storage.',
        'Conducted system testing across devices to ensure a smooth booking experience.',
      ]
    },
    {
      name: 'Fruit Bazzar — E-commerce Website',
      link: 'https://github.com/ajjuu04/Fruit-Bazzar-Ecommerce',
      linkLabel: 'GitHub Repo',
      liveLink: null,
      tech: ['HTML', 'CSS', 'JavaScript', 'MySQL', 'Bootstrap'],
      badge: 'BCA Semester 5',
      icon: '🍎',
      color: 'tag-purple',
      points: [
        'Designed a full e-commerce product listing UI for an online fruit store.',
        'Implemented product catalog pages with category filtering and shopping cart UI.',
        'Built responsive layout using Bootstrap for seamless mobile and desktop experience.',
        'Integrated database backend for product and order management.',
      ]
    },
    {
      name: 'Maharashtrian Jwellary — E-commerce Store',
      link: 'https://github.com/ajjuu04/Maharashtrian-Jwellary-Ecommerce',
      linkLabel: 'GitHub Repo',
      liveLink: null,
      tech: ['HTML', 'CSS', 'JavaScript', 'MySQL', 'Bootstrap'],
      badge: 'BCA Semester 6',
      icon: '💍',
      color: 'tag-cyan',
      points: [
        'Built a traditional Maharashtrian jewellery e-commerce platform with cultural design aesthetics.',
        'Created product showcase pages with detailed descriptions and image galleries.',
        'Designed user-friendly checkout and product browsing interface with Bootstrap.',
        'Managed backend database for inventory and product data management.',
      ]
    },
    {
      name: 'Word Scramble — Browser Word Game',
      link: 'https://github.com/ajjuu04/word-scramble',
      linkLabel: 'GitHub Repo',
      liveLink: 'https://ajjuu04.github.io/word-scramble/',
      tech: ['HTML', 'CSS', 'JavaScript', 'JSON'],
      badge: 'Learning · GitHub Practice',
      icon: '🔤',
      color: 'tag-green',
      points: [
        'Built a fully browser-based word scramble game to practice vanilla JavaScript & GitHub workflows.',
        'Implemented timer logic, scramble algorithm, and win/loss screen graphics.',
        'Loaded 100+ words dynamically from a words.json file using the Fetch API.',
        'Deployed live using GitHub Actions & GitHub Pages as a CI/CD learning exercise.',
      ]
    },
    {
      name: 'My Resume — React Portfolio Website',
      link: 'https://github.com/ajjuu04/my-resume',
      linkLabel: 'GitHub Repo',
      liveLink: null,
      tech: ['React', 'JavaScript', 'CSS', 'React Router'],
      badge: 'Learning · React & AI',
      icon: '🧑‍💻',
      color: 'tag-green',
      points: [
        'Built this portfolio resume app using React.js to learn component-based architecture.',
        'Implemented multi-page navigation with React Router for a smooth SPA experience.',
        'Explored AI-assisted development to enhance UI design and coding workflow.',
        'Applied modern CSS techniques including dark theme, glassmorphism, and micro-animations.',
      ]
    },
  ];

  return (
    <div>
      <ScrollReveal direction="left">
        <p className="section-title">What I've Built</p>
        <h2 className="section-heading">
          <FloatingText text="Projects" delay={200} />{' '}
          <span style={{ fontSize: '1rem', color: 'var(--text-muted)', fontWeight: '400' }}>
            ({projects.length})
          </span>
        </h2>
      </ScrollReveal>

      {projects.map((project, i) => (
        <AnimatedCard className="card" key={i} delay={i * 80}>
          {/* Header Row */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.75rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <span style={{ fontSize: '1.75rem', animation: 'gentleFloat 3s ease-in-out infinite', animationDelay: `${i * 0.3}s` }}>{project.icon}</span>
              <div>
                <p className="card-title">{project.name}</p>
                <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginTop: '0.25rem' }}>
                  <a href={project.link} target="_blank" rel="noreferrer" className="accent-link" style={{ fontSize: '0.8rem', display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}>
                    <img src="/New folder/github.png" alt="GitHub" style={{ width: '14px', height: '14px', filter: 'invert(1)' }} /> {project.linkLabel} ↗
                  </a>
                  {project.liveLink && (
                    <a href={project.liveLink} target="_blank" rel="noreferrer" className="accent-link" style={{ fontSize: '0.8rem', color: 'var(--accent-green)' }}>
                      🌐 Live Demo ↗
                    </a>
                  )}
                </div>
              </div>
            </div>
            <span
              className={`tag ${project.badge.startsWith('Learning') ? 'tag-green' : 'tag-purple'}`}
              style={{ flexShrink: 0 }}
            >
              {project.badge}
            </span>
          </div>

          {/* Tech Stack */}
          <div style={{ marginBottom: '1rem' }}>
            {project.tech.map(t => (
              <span key={t} className={`tag ${project.color}`}>{t}</span>
            ))}
          </div>

          {/* Bullet Points */}
          <ul className="styled-list">
            {project.points.map((point, j) => (
              <li key={j}>{point}</li>
            ))}
          </ul>
        </AnimatedCard>
      ))}
    </div>
  );
}

export default Project;