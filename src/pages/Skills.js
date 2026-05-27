function Skills() {
  const categories = [
    {
      label: '⚡ Technical',
      color: 'tag-purple',
      labelColor: 'var(--accent-primary)',
      skills: ['Java', 'Python', 'JavaScript', 'SQL', 'MySQL', 'HTML5', 'CSS3', 'Bootstrap', 'React (Learning)', 'Linux Basics', 'Oracle Cloud (OCI)'],
    },
    {
      label: '☕ Java Stack',
      color: 'tag-cyan',
      labelColor: 'var(--accent-cyan)',
      skills: ['Core Java', 'JDBC', 'Servlets', 'Spring Boot (Learning)'],
    },
    {
      label: '🛠 Tools & Platforms',
      color: 'tag-cyan',
      labelColor: 'var(--accent-cyan)',
      skills: ['Git', 'GitHub', 'VS Code', 'PowerShell', 'Adobe Creative Suite', 'Figma'],
    },
    {
      label: '🤖 AI Tools',
      color: 'tag-green',
      labelColor: 'var(--accent-green)',
      skills: ['Claude', 'ChatGPT', 'Prompt Engineering', 'AI-assisted Development'],
    },
    {
      label: '📚 Other Skills',
      color: 'tag-green',
      labelColor: 'var(--accent-green)',
      skills: ['Responsive Design', 'DBMS Concepts', 'REST APIs', 'Networking Basics', 'Security Basics'],
    },
  ];

  return (
    <div>
      <p className="section-title">What I Know</p>
      <h2 className="section-heading">Skills</h2>

      <div className="skills-grid">
        {categories.map((cat, i) => (
          <div className="skill-category" key={i}>
            <p className="skill-category-label" style={{ color: cat.labelColor }}>
              {cat.label}
            </p>
            <div>
              {cat.skills.map(skill => (
                <span key={skill} className={`tag ${cat.color}`}>{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;