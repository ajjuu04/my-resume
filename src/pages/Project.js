function Project() {
  const projects = [
    {
      name: 'Bloodsearch — Blood Search Engine',
      link: 'https://github.com/ajjuu04/BloodSearch',
      linkLabel: 'GitHub Repo',
      liveLink: null,
      tech: ['HTML', 'CSS', 'JavaScript', 'MySQL', 'Bootstrap'],
      badge: 'BCA Sem 3 Project',
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
      badge: 'BCA Sem 3 Project',
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
      name: 'Word Scramble — Browser Word Game',
      link: 'https://github.com/ajjuu04/word-scramble',
      linkLabel: 'GitHub Repo',
      liveLink: 'https://ajjuu04.github.io/word-scramble/',
      tech: ['HTML', 'CSS', 'JavaScript', 'JSON'],
      badge: 'Personal Project · Deployed',
      icon: '🔤',
      color: 'tag-green',
      points: [
        'Built a fully browser-based word scramble game with start screen, win & loss graphics.',
        'Implemented correct timer logic and scramble algorithm for smooth gameplay.',
        'Loaded 100+ words dynamically from a words.json file using the Fetch API.',
        'Added celebration GIF animations and separate CSS theming for win/loss states.',
      ]
    },
    {
      name: 'Fruit Bazzar — E-commerce Website',
      link: 'https://github.com/ajjuu04/Fruit-Bazzar-Ecommerce',
      linkLabel: 'GitHub Repo',
      liveLink: null,
      tech: ['HTML', 'CSS', 'JavaScript', 'MySQL', 'Bootstrap'],
      badge: 'E-commerce Project',
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
      badge: 'E-commerce Project',
      icon: '💍',
      color: 'tag-cyan',
      points: [
        'Built a traditional Maharashtrian jewellery e-commerce platform with cultural design aesthetics.',
        'Created product showcase pages with detailed descriptions and image galleries.',
        'Designed user-friendly checkout and product browsing interface with Bootstrap.',
        'Managed backend database for inventory and product data management.',
      ]
    },
  ];

  return (
    <div>
      <p className="section-title">What I've Built</p>
      <h2 className="section-heading">Projects <span style={{ fontSize: '1rem', color: 'var(--text-muted)', fontWeight: '400' }}>({projects.length})</span></h2>

      {projects.map((project, i) => (
        <div className="card" key={i}>
          {/* Header Row */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.75rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <span style={{ fontSize: '1.75rem' }}>{project.icon}</span>
              <div>
                <p className="card-title">{project.name}</p>
                <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginTop: '0.2rem' }}>
                  <a href={project.link} target="_blank" rel="noreferrer" className="accent-link" style={{ fontSize: '0.8rem' }}>
                    🐙 {project.linkLabel} ↗
                  </a>
                  {project.liveLink && (
                    <a href={project.liveLink} target="_blank" rel="noreferrer" className="accent-link" style={{ fontSize: '0.8rem', color: 'var(--accent-green)' }}>
                      🌐 Live Demo ↗
                    </a>
                  )}
                </div>
              </div>
            </div>
            <span className="tag tag-green" style={{ flexShrink: 0 }}>{project.badge}</span>
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
        </div>
      ))}
    </div>
  );
}

export default Project;