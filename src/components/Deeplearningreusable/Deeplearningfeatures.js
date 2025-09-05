import React from 'react';
import '../../styles/DeepLearning.css';
import featureImage from '../../assets/Deep-Learning.jpg'; // Ensure this path is correct

const features = [
  'Custom neural network architectures',
  'Transfer learning for quick deployment',
  'Integration with big data platforms',
  'Real-time inference capabilities',
  'Explainable AI for regulatory compliance',
  'Scalable cloud-based training',
];

const DeepLearningKeyFeatures = () => {
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

export default DeepLearningKeyFeatures;