import React, { useEffect } from 'react';
import gsap from 'gsap';
import featureImage from '../../assets/batch-automation.jpg';

const features = [
  'Engine control module (ECM) validation',
  'Automated test sequencing for production lines',
  'Real-time data logging and analysis',
  'Vehicle network bus communication (CAN, LIN, etc.)',
  'High-speed data acquisition for NVH analysis',
  'Integrated vision systems for quality inspection',
];

const AutomotiveKeyFeatures = () => {
  useEffect(() => {
    gsap.from('.section-title', {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: 'power2.out',
    });
    gsap.from('.features-image-container', {
      opacity: 0,
      y: 100,
      duration: 1.2,
      ease: 'power2.out',
      delay: 0.3,
    });
    gsap.from('.feature-item', {
      opacity: 0,
      y: 30,
      duration: 0.8,
      stagger: 0.2,
      ease: 'back.out(1.7)',
      delay: 0.6,
    });
    return () => {
      gsap.killTweensOf('.section-title, .features-image-container, .feature-item');
    };
  }, []);

  return (
    <section className="key-features-section">
      <div className="content-panel">
        <h2 className="section-title fade-in">Key Features</h2>
        <div className="features-grid">
          <div className="features-image-container fade-in">
            <img src={featureImage} alt="Key Features" className="features-image" />
          </div>
          <div className="features-list-container">
            <ul className="features-list">
              {features.map((feature, index) => (
                <li key={index} className="feature-item fade-in">
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

export default AutomotiveKeyFeatures;