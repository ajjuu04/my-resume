function Personal() {
  const stats = [
    { value: '8.2', label: 'CGPA', icon: '🎓', color: 'var(--accent-green)' },
    { value: '2+', label: 'Years Experience', icon: '💼', color: 'var(--accent-cyan)' },
    { value: '2', label: 'Projects Built', icon: '🚀', color: 'var(--accent-primary)' },
    { value: '4', label: 'Certifications', icon: '📜', color: 'var(--accent-secondary)' },
  ];

  const currently = [
    { emoji: '📘', text: 'Studying Data Structures & Algorithms (DSA)' },
    { emoji: '☁️', text: 'Preparing for Oracle Cloud (OCI) Advanced Certifications' },
    { emoji: '⚛️', text: 'Building React.js projects & polishing web dev skills' },
    { emoji: '🔐', text: 'Exploring Networking & Cybersecurity fundamentals' },
  ];

  return (
    <div>
      {/* Hero Profile Card */}
      <div className="profile-hero">
        <div className="profile-photo-wrapper">
          <img
            src="/photo.jpeg"
            alt="Ajinkya Jambhulkar"
            className="profile-photo"
          />
          <span className="profile-status" title="Open to opportunities"></span>
        </div>
        <div className="profile-info">
          <h1>Ajinkya Jambhulkar</h1>
          <p className="profile-role">🎓 BCA Graduate (2026) · Aspiring Software Developer</p>
          <div className="contact-chips">
            <span className="contact-chip">
              <span className="chip-icon">📍</span> Nana Peth, Pune
            </span>
            <a href="tel:+919022007017" className="contact-chip">
              <span className="chip-icon">📞</span> +91-9022007017
            </a>
            <a href="mailto:ajinkyajambhulkar1@gmail.com" className="contact-chip">
              <span className="chip-icon">✉️</span> ajinkyajambhulkar1@gmail.com
            </a>
            <a href="https://www.linkedin.com/in/ajinkyajam/" target="_blank" rel="noreferrer" className="contact-chip">
              <span className="chip-icon">💼</span> LinkedIn
            </a>
            <a href="https://github.com/ajjuu04/" target="_blank" rel="noreferrer" className="contact-chip">
              <span className="chip-icon">🐙</span> GitHub
            </a>
            <a href="https://leetcode.com/u/ajjuu_04/" target="_blank" rel="noreferrer" className="contact-chip">
              <span className="chip-icon">🧩</span> LeetCode
            </a>
          </div>
        </div>
      </div>

      {/* Stats Row */}
      <div className="stats-grid">
        {stats.map((stat, i) => (
          <div className="stat-card" key={i}>
            <span className="stat-icon">{stat.icon}</span>
            <span className="stat-value" style={{ color: stat.color }}>{stat.value}</span>
            <span className="stat-label">{stat.label}</span>
          </div>
        ))}
      </div>

      {/* Summary Card */}
      <div className="card">
        <p className="section-title">About Me</p>
        <h2 className="section-heading">Professional Summary</h2>
        <p style={{ color: 'var(--text-secondary)', lineHeight: '1.9', fontSize: '0.925rem' }}>
          BCA Graduate (2026) with a strong interest in software development. Gained practical
          understanding of the software lifecycle by building functional web applications & database systems.
          Holds Oracle Cloud Infrastructure (OCI) certifications and actively strengthening core logic
          through Data Structures and Algorithms (DSA) practice. Eager to learn new technologies and adapt quickly.
        </p>
      </div>

      {/* Currently Doing */}
      <div className="card">
        <p className="section-title">Right Now</p>
        <h2 className="section-heading">Currently Learning & Doing</h2>
        <div className="currently-grid">
          {currently.map((item, i) => (
            <div className="currently-item" key={i}>
              <span className="currently-emoji">{item.emoji}</span>
              <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{item.text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Open to Work Banner */}
      <div className="open-to-work-banner">
        <div>
          <p style={{ fontWeight: '700', fontSize: '1rem', color: 'var(--text-primary)', marginBottom: '0.25rem' }}>
            🟢 Open to Opportunities
          </p>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>
            Actively looking for internships and entry-level roles in software development, web development, or cloud computing.
          </p>
        </div>
        <a href="mailto:ajinkyajambhulkar1@gmail.com" className="hire-btn">Hire Me ↗</a>
      </div>
    </div>
  );
}

export default Personal;