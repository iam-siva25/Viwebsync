// BiomedPharmaKeyFeatures.jsx
import React from 'react';
import '../../styles/BiomedPharma.css';
import featureImage from '../../assets/pharma-automation.jpg'; // Placeholder image

const features = [
  'Automated validation for medical devices',
  'Real-time process monitoring',
  'Compliance with FDA and GMP standards',
  'High-precision data acquisition',
  'Scalable for high-throughput testing',
  'Integration with laboratory information systems',
];

const BiomedPharmaKeyFeatures = () => {
  return (
    <section className="key-features-section">
      <div className="content-wrap">
        <h2 className="section-title animate-reveal">Key Features</h2>
        <div className="features-grid">
          <div className="features-image-container animate-reveal">
            <img src={featureImage} alt="Key Features" className="features-image" />
          </div>
          <div className="features-list-container">
            <ul className="features-list">
              {features.map((feature, index) => (
                <li key={index} className="feature-item animate-reveal">
                  <span className="feature-checkmark">✓</span>
                  <p>{feature}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BiomedPharmaKeyFeatures;