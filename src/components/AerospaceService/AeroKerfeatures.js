import React, { useEffect } from 'react';
import gsap from 'gsap';

// Import a placeholder image
import featureImage from '../../assets/aerospace-defense.jpg'; 

const features = [
  'Ensuring optimal performance',
  'Unique BMS supports',
  'Wide working temperature range',
  'Extended usage periods',
  'Safe and reliable operation',
  'Smart charging capabilities',
];

const KeyFeatures = () => {
  useEffect(() => {
    // Animation for the title
    gsap.from('.highlight-title', {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: 'power2.out',
    });

    // Animation for the image
    gsap.from('.highlight-image-container', {
      opacity: 0,
      y: 100,
      duration: 1.2,
      ease: 'power2.out',
      delay: 0.3,
    });

    // Staggered animation for feature list items
    gsap.from('.feature-point', {
      opacity: 0,
      y: 30,
      duration: 0.8,
      stagger: 0.2,
      ease: 'back.out(1.7)',
      delay: 0.6,
    });

    // Cleanup on unmount
    return () => {
      gsap.killTweensOf('.highlight-title, .highlight-image-container, .feature-point');
    };
  }, []);

  return (
    <section className="feature-showcase aerospace-section " >
      <div className="content-panel">
        <h2 className="highlight-title">Key Features</h2>
        <div className="feature-layout">
          <div className="highlight-image-container">
            <img src={featureImage} alt="Key Features" className="highlight-image" />
          </div>
          <div className="feature-items-container">
            <ul className="feature-collection">
              {features.map((feature, index) => (
                <li key={index} className="feature-point">
                  <span className="feature-icon">✓</span>
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

export default KeyFeatures;