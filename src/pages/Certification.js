function Certification() {
  return (
    <div>
      {/* Education */}
      <p className="section-title">Academic Background</p>
      <h2 className="section-heading">Education</h2>

      <div className="card">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem' }}>
          <div>
            <p className="card-title">Bachelor of Computer Applications (BCA)</p>
            <p className="card-subtitle">Savitribai Phule Pune University, India</p>
          </div>
          <span className="tag tag-cyan">2023 – 2026</span>
        </div>
        <p className="card-meta">
          <span style={{ color: 'var(--accent-green)', fontWeight: '600' }}>CGPA: 8.2 / 10</span>
        </p>
        <ul className="styled-list">
          <li>Completed BCA (2023–2026) with CGPA 8.2 · Awaiting final result</li>
          <li>Actively pursuing Oracle Cloud Infrastructure (OCI) certifications</li>
        </ul>
      </div>

      <div className="divider"></div>

      {/* Certifications */}
      <p className="section-title">Credentials</p>
      <h2 className="section-heading">Certifications</h2>

      {[
        {
          title: 'Web Development Certification (Ongoing)',
          issuer: 'ITC INFOTECH & NASSCOM Foundation',
          year: '2026',
          color: 'tag-purple',
          icon: '🌐'
        },
        {
          title: 'Oracle Cloud Infrastructure 2025 Certified Architect Associate',
          issuer: 'Oracle',
          year: 'Oct 2025',
          color: 'tag-cyan',
          icon: '☁️'
        },
        {
          title: 'Oracle Cloud Infrastructure 2025 Certified Foundations Associate',
          issuer: 'Oracle',
          year: 'Sep 2025',
          color: 'tag-cyan',
          icon: '☁️'
        },
        {
          title: 'Core Java Programming',
          issuer: 'True Coders Academy',
          year: 'Aug 2024',
          color: 'tag-green',
          icon: '☕'
        },
      ].map((cert, i) => (
        <div className="card" key={i}>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
            <span style={{ fontSize: '1.5rem' }}>{cert.icon}</span>
            <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem' }}>
                <p className="card-title">{cert.title}</p>
                <span className={`tag ${cert.color}`}>{cert.year}</span>
              </div>
              <p className="card-subtitle">{cert.issuer}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Certification;