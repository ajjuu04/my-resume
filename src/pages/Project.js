function Project() {
  const projects = [
    {
      name: 'Bloodsearch — Blood Search Engine',
      link: 'https://github.com/ajjuu04/BloodSearch',
      linkLabel: 'GitHub Repo',
      tech: ['HTML', 'CSS', 'JavaScript', 'MySQL', 'Bootstrap'],
      badge: 'BCA Sem 3 Project',
      icon: '🩸',
      color: 'tag-purple',
      points: [
        'Developed a responsive user interface using Bootstrap to ensure the platform was fully accessible on mobile devices for users in emergency situations.',
        'Designed the MySQL database schema, organizing tables efficiently to store donor details, blood groups, and locations.',
        'Defined the user experience (UX) workflow, implementing a "login-free" architecture to allow instant access to donor numbers.',
        'Integrated the frontend with the database, ensuring accurate data display for search results and admin updates.',
      ]
    },
    {
      name: 'Maharashtra Yatra — Family Bus Booking System',
      link: 'https://busbooking.wuaze.com/',
      linkLabel: 'Live Demo',
      tech: ['HTML', 'CSS', 'JavaScript', 'MySQL', 'Bootstrap'],
      badge: 'BCA Sem 3 Project',
      icon: '🚌',
      color: 'tag-cyan',
      points: [
        'Built client-side interface for the booking platform, focusing on an intuitive layout for seat selection and route schedules.',
        'Designed the Admin Dashboard layout, creating a visual control panel for managing buses, routes, and user bookings.',
        'Managed the database integration, connecting user input forms to the MySQL database for accurate data storage.',
        'Conducted system testing, validating the booking flow across different devices to ensure a smooth user experience.',
      ]
    }
  ];

  return (
    <div>
      <p className="section-title">What I've Built</p>
      <h2 className="section-heading">Projects</h2>

      {projects.map((project, i) => (
        <div className="card" key={i}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.75rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <span style={{ fontSize: '1.75rem' }}>{project.icon}</span>
              <div>
                <p className="card-title">{project.name}</p>
                <a href={project.link} target="_blank" rel="noreferrer" className="accent-link" style={{ fontSize: '0.82rem' }}>
                  🔗 {project.linkLabel} ↗
                </a>
              </div>
            </div>
            <span className="tag tag-green">{project.badge}</span>
          </div>

          <div style={{ marginBottom: '1rem' }}>
            {project.tech.map(t => (
              <span key={t} className={`tag ${project.color}`}>{t}</span>
            ))}
          </div>

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