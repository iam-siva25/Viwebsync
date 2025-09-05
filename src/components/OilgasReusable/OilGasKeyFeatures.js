// OilGasKeyFeatures.jsx
import React from 'react';
import '../../styles/OilGas.css';
import featureImage from '../../assets/oil-gas-testing.png'; // Placeholder image

const features = [
  'Real-time process monitoring and control',
  'Integrated sensor data acquisition',
  'Support for industry-standard protocols',
  'Automated compliance reporting',
  'Scalable for large-scale industrial operations',
  'Seamless integration with SCADA systems',
];

const OilGasKeyFeatures = () => {
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

export default OilGasKeyFeatures;