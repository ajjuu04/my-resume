function Achivements() {
  const achievements = [
    {
      icon: '🥈',
      title: 'Runner-up — Cybersecurity Poster Competition',
      year: '2024',
      description: 'Secured 2nd place in a cybersecurity awareness poster competition, showcasing creativity and technical knowledge.',
      color: 'tag-cyan',
    },
    {
      icon: '🏆',
      title: '2nd Rank Holder — Academic Excellence',
      year: '2024–2025',
      description: 'Maintained a top-tier academic standing among peers in the 2024-2025 academic session at Savitribai Phule Pune University.',
      color: 'tag-purple',
    },
  ];

  return (
    <div>
      <p className="section-title">Milestones</p>
      <h2 className="section-heading">Achievements</h2>

      {achievements.map((item, i) => (
        <div className="achievement-card" key={i}>
          <span className="achievement-icon">{item.icon}</span>
          <div style={{ flex: 1 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.4rem' }}>
              <p className="card-title">{item.title}</p>
              <span className={`tag ${item.color}`}>{item.year}</span>
            </div>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Achivements;