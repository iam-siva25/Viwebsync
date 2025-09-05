import React from 'react';
import '../../styles/Semiconductor.css';
import featureImage from '../../assets/electronics-testing.png'; // Placeholder image

const features = [
  'Automated test sequence generation',
  'Integrated vision systems for alignment',
  'Support for multiple communication protocols',
  'Real-time data logging and analysis',
  'Scalable for high-volume production',
  'Seamless integration with third-party instruments',
];

const ElectronicsKeyFeatures = () => {
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
export default ElectronicsKeyFeatures;