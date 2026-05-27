function Skills() {
  return (
    <div>
      <p className="section-title">What I Know</p>
      <h2 className="section-heading">Skills</h2>

      <div className="skills-grid">
        {/* Technical Skills */}
        <div className="skill-category">
          <p className="skill-category-label" style={{ color: 'var(--accent-primary)' }}>⚡ Technical</p>
          <div>
            {['Java', 'Python', 'JavaScript', 'SQL', 'MySQL', 'HTML5', 'CSS3', 'Bootstrap', 'Linux Basics', 'Oracle Cloud (OCI)'].map(skill => (
              <span key={skill} className="tag tag-purple">{skill}</span>
            ))}
          </div>
        </div>

        {/* Tools */}
        <div className="skill-category">
          <p className="skill-category-label" style={{ color: 'var(--accent-cyan)' }}>🛠 Tools & Platforms</p>
          <div>
            {['Git', 'GitHub', 'VS Code', 'PowerShell', 'Figma', 'Adobe Photoshop', 'Adobe Illustrator'].map(skill => (
              <span key={skill} className="tag tag-cyan">{skill}</span>
            ))}
          </div>
        </div>

        {/* Other */}
        <div className="skill-category">
          <p className="skill-category-label" style={{ color: 'var(--accent-green)' }}>📚 Other Skills</p>
          <div>
            {['DSA (Learning)', 'Responsive Design', 'Automation Scripting', 'DBMS Concepts', 'Networking Basics', 'Security Basics'].map(skill => (
              <span key={skill} className="tag tag-green">{skill}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;