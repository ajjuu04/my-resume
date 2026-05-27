function Expirence() {
  return (
    <div>
      <p className="section-title">Work History</p>
      <h2 className="section-heading">Experience</h2>

      <div className="card">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.75rem' }}>
          <div>
            <p className="card-title">Junior Graphic Designer</p>
            <p className="card-subtitle">FirstCry.com · BrainBees Solutions Ltd., Pune</p>
          </div>
          <span className="tag tag-purple">Dec 2022 – Jan 2025</span>
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <span className="tag tag-green">Full-time</span>
          <span className="tag tag-cyan">Design & Automation</span>
          <span className="tag tag-cyan">E-commerce</span>
        </div>

        <ul className="styled-list">
          <li>Managed website catalog uploads and optimized digital assets for e-commerce platforms.</li>
          <li>
            Developed automation scripts (using PowerShell/ExtendScript) to batch-process catalog images,
            reducing manual data entry time by{' '}
            <strong style={{ color: 'var(--accent-green)' }}>40%</strong>.
          </li>
          <li>Improved catalog accuracy and performance through structured data handling.</li>
          <li>
            Collaborated on AI-driven image processing pipelines, contributing technical scripting inputs
            to automate asset handling workflows using ExtendScript and PowerShell.
          </li>
          <li>
            Worked in a large-scale e-commerce tech environment (BrainBees/FirstCry), gaining exposure to
            production-level data systems and digital asset management at scale.
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Expirence;