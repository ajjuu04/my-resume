import { FloatingText } from '../components/AnimatedText';
import { AnimatedCard, ScrollReveal } from '../components/AnimatedCard';

function Certification() {
  const certs = [
    {
      title: 'Web Development Certification',
      issuer: 'ITC INFOTECH & NASSCOM Foundation',
      year: 'Feb 2026',
      color: 'tag-purple',
      icon: '🌐',
      logo: null
    },
    {
      title: 'Oracle Cloud Infrastructure 2025 Certified Architect Associate',
      issuer: 'Oracle',
      year: 'Oct 2025',
      color: 'tag-cyan',
      icon: '☁️',
      logo: '/New folder/oracle.png'
    },
    {
      title: 'Oracle Cloud Infrastructure 2025 Certified Foundations Associate',
      issuer: 'Oracle',
      year: 'Sep 2025',
      color: 'tag-cyan',
      icon: '☁️',
      logo: '/New folder/oracle.png'
    },
    {
      title: 'Core Java Programming',
      issuer: 'True Coders Academy',
      year: 'Aug 2024',
      color: 'tag-green',
      icon: '☕',
      logo: null
    },
  ];

  return (
    <div>
      {/* Education */}
      <ScrollReveal direction="left">
        <p className="section-title">Academic Background</p>
        <h2 className="section-heading">
          <FloatingText text="Education" delay={200} />
        </h2>
      </ScrollReveal>

      <AnimatedCard className="card" delay={100}>
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
      </AnimatedCard>

      <div className="divider"></div>

      {/* Certifications */}
      <ScrollReveal direction="right">
        <p className="section-title">Credentials</p>
        <h2 className="section-heading">
          <FloatingText text="Certifications" delay={200} />
        </h2>
      </ScrollReveal>

      {certs.map((cert, i) => (
        <AnimatedCard className="card" key={i} delay={i * 100}>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
            {cert.logo ? (
              <img src={cert.logo} alt={cert.issuer} className="cert-logo" style={{ animationDelay: `${i * 0.5}s` }} />
            ) : (
              <span style={{ fontSize: '1.5rem', animation: 'gentleFloat 3s ease-in-out infinite', animationDelay: `${i * 0.5}s` }}>{cert.icon}</span>
            )}
            <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem' }}>
                <p className="card-title">{cert.title}</p>
                <span className={`tag ${cert.color}`}>{cert.year}</span>
              </div>
              <p className="card-subtitle">{cert.issuer}</p>
            </div>
          </div>
        </AnimatedCard>
      ))}
    </div>
  );
}

export default Certification;