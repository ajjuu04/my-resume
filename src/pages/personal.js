import { FloatingText, TypewriterText } from '../components/AnimatedText';
import { AnimatedCard, ScrollReveal } from '../components/AnimatedCard';
import MarqueeTicker from '../components/MarqueeTicker';

function Personal() {
  const stats = [
    { value: '8.2', label: 'CGPA', icon: '🎓', color: 'var(--accent-green)' },
    { value: '2+', label: 'Years Experience', icon: '💼', color: 'var(--accent-cyan)' },
    { value: '10+', label: 'Big & Mini Projects', icon: '🚀', color: 'var(--accent-primary)' },
    { value: '4', label: 'Certifications', icon: '📜', color: 'var(--accent-secondary)' },
  ];

  const currently = [
    { emoji: '📘', text: 'Studying Data Structures & Algorithms (DSA)' },
    { emoji: '☁️', text: 'Preparing for Oracle Cloud (OCI) Advanced Certifications' },
    { emoji: '⚛️', text: 'Building React.js projects & polishing web dev skills' },
    { emoji: '🔐', text: 'Exploring Networking & Cybersecurity fundamentals' },
  ];

  const tickerItems = [
    'Web Design', 'App Design', 'Development', 'React', 'Cloud', 
    'Java', 'Python', 'SQL', 'Branding', 'UI/UX'
  ];

  return (
    <div>
      {/* Hero Profile Card */}
      <ScrollReveal direction="scale">
        <div className="profile-hero">
          <div className="gradient-orb gradient-orb-1"></div>
          <div className="gradient-orb gradient-orb-2"></div>
          <div className="hello-bubble">Hello! 👋</div>
          <div className="profile-photo-wrapper">
            <img
              src={`${process.env.PUBLIC_URL}/photo.jpeg`}
              alt="Ajinkya Jambhulkar"
              className="profile-photo"
            />
            <span className="profile-status" title="Open to opportunities"></span>
          </div>
          <div className="profile-info">
            <div style={{ marginBottom: '0.5rem' }}>
              <span className="waving-hand">👋</span>
            </div>
            <h1>
              <FloatingText text="Ajinkya Jambhulkar" delay={300} />
            </h1>
            <p className="profile-role">
              <TypewriterText 
                text="🎓 BCA Graduate (2026) · Aspiring Software Developer" 
                speed={35}
                delay={1500}
              />
            </p>
            <div className="contact-chips stagger-children">
              <span className="contact-chip">
                <span className="chip-icon">📍</span> Nana Peth, Pune
              </span>
              <a href="tel:+919022007017" className="contact-chip">
                <span className="chip-icon">📞</span> +91-9022007017
              </a>
              <a href="mailto:ajinkyajambhulkar1@gmail.com" className="contact-chip">
                <img src={`${process.env.PUBLIC_URL}/New folder/email.png`} alt="Email" className="chip-logo" /> ajinkyajambhulkar1@gmail.com
              </a>
              <a href="https://www.linkedin.com/in/ajinkyajam/" target="_blank" rel="noreferrer" className="contact-chip">
                <img src={`${process.env.PUBLIC_URL}/New folder/linkedin.png`} alt="LinkedIn" className="chip-logo" /> LinkedIn
              </a>
              <a href="https://github.com/ajjuu04/" target="_blank" rel="noreferrer" className="contact-chip">
                <img src={`${process.env.PUBLIC_URL}/New folder/github.png`} alt="GitHub" className="chip-logo" style={{ filter: 'invert(1)' }} /> GitHub
              </a>
              <a href="https://leetcode.com/u/ajjuu_04/" target="_blank" rel="noreferrer" className="contact-chip">
                <img src={`${process.env.PUBLIC_URL}/New folder/leetcode.png`} alt="LeetCode" className="chip-logo" /> LeetCode
              </a>
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* Marquee Ticker */}
      <MarqueeTicker items={tickerItems} speed={25} />

      {/* Stats Row */}
      <div className="stats-grid">
        {stats.map((stat, i) => (
          <ScrollReveal key={i} delay={i * 100} direction="up">
            <div className="stat-card magnetic-hover">
              <span className="stat-icon">{stat.icon}</span>
              <span className="stat-value stat-value-animated" style={{ color: stat.color, animationDelay: `${i * 0.15}s` }}>{stat.value}</span>
              <span className="stat-label">{stat.label}</span>
            </div>
          </ScrollReveal>
        ))}
      </div>

      {/* Summary Card */}
      <AnimatedCard className="card" delay={200}>
        <p className="section-title">About Me</p>
        <h2 className="section-heading">
          <FloatingText text="Professional Summary" delay={200} />
        </h2>
        <p style={{ color: 'var(--text-secondary)', lineHeight: '1.9', fontSize: '0.925rem' }}>
          BCA Graduate (2026) with a strong interest in software development. Gained practical
          understanding of the software lifecycle by building functional web applications & database systems.
          Holds Oracle Cloud Infrastructure (OCI) certifications and actively strengthening core logic
          through Data Structures and Algorithms (DSA) practice. Eager to learn new technologies and adapt quickly.
        </p>
      </AnimatedCard>

      {/* Currently Doing */}
      <AnimatedCard className="card" delay={300}>
        <p className="section-title">Right Now</p>
        <h2 className="section-heading">Currently Learning & Doing</h2>
        <div className="currently-grid">
          {currently.map((item, i) => (
            <ScrollReveal key={i} delay={i * 80} direction="left">
              <div className="currently-item">
                <span className="currently-emoji">{item.emoji}</span>
                <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{item.text}</span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </AnimatedCard>

      {/* Open to Work Banner */}
      <ScrollReveal direction="up" delay={400}>
        <div className="open-to-work-banner">
          <div>
            <p style={{ fontWeight: '700', fontSize: '1rem', color: 'var(--text-primary)', marginBottom: '0.25rem' }}>
              🟢 Open to Opportunities
            </p>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>
              Actively looking for internships and entry-level roles in software development, web development, or cloud computing.
            </p>
          </div>
          <a href="https://www.linkedin.com/in/ajinkyajam/" target="_blank" rel="noreferrer" className="hire-btn" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
            <img src={`${process.env.PUBLIC_URL}/New folder/linkedin.png`} alt="LinkedIn" style={{ width: '16px', height: '16px' }} /> Hire Me on LinkedIn ↗
          </a>
        </div>
      </ScrollReveal>
    </div>
  );
}

export default Personal;