import { FloatingText } from '../components/AnimatedText';
import { AnimatedCard, ScrollReveal } from '../components/AnimatedCard';

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
      <ScrollReveal direction="left">
        <p className="section-title">What I Know</p>
        <h2 className="section-heading">
          <FloatingText text="Skills" delay={200} />
        </h2>
      </ScrollReveal>

      <div className="skills-grid">
        {categories.map((cat, i) => (
          <AnimatedCard className="skill-category" key={i} delay={i * 100}>
            <p className="skill-category-label" style={{ color: cat.labelColor }}>
              {cat.label}
            </p>
            <div className="stagger-children">
              {cat.skills.map(skill => (
                <span key={skill} className={`tag ${cat.color}`}>{skill}</span>
              ))}
            </div>
          </AnimatedCard>
        ))}
      </div>
    </div>
  );
}

export default Skills;