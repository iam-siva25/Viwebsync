// BiomedPharmaSpecifications.jsx
import React from 'react';
import '../../styles/BiomedPharma.css';

const specifications = [
  {
    title: 'Medical Device Testing',
    description: 'We develop automated test systems for validating medical devices, ensuring compliance with regulatory standards and reliable performance.',
    icon: '🩺',
  },
  {
    title: 'Pharmaceutical Process Monitoring',
    description: 'Our solutions enable real-time monitoring of pharmaceutical manufacturing processes, ensuring quality and consistency in drug production.',
    icon: '💊',
  },
  {
    title: 'Laboratory Automation',
    description: 'We create systems to automate laboratory workflows, increasing throughput and accuracy in biomedical research and testing.',
    icon: '🔬',
  },
  {
    title: 'Data Integrity Systems',
    description: 'Our systems ensure data accuracy and traceability for compliance with GMP and FDA regulations in pharmaceutical applications.',
    icon: '📊',
  },
];

const BiomedPharmaSpecifications = () => {
  return (
    <section className="electronic-specifications-section">
      <div className="electronic-content-panel">
        <h2 className="electronic-section-title fade-in">Key Biomedical & Pharmaceutical Capabilities</h2>
        <div className="electronic-staggered-grid">
          {specifications.map((spec, index) => (
            <div
              key={index}
              className={`electronic-staggered-card electronic-glass-card fade-in ${index % 2 === 1 ? 'electronic-align-right' : 'electronic-align-left'}`}
            >
              <div className="electronic-staggered-icon-wrapper">
                <div className="electronic-staggered-icon">{spec.icon}</div>
              </div>
              <div className="electronic-staggered-content">
                <h3>{spec.title}</h3>
                <p>{spec.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BiomedPharmaSpecifications;