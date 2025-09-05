import React from 'react';
import '../../styles/DeepLearning.css';

const DeepLearningAbout = () => {
  const deepLearningImage = require('../../assets/deep-learning.png'); // Fallback to require for robustness

  return (
    <section className="electronic-about-section">
      <div className="electronic-content-panel">
        <h2 className="electronic-section-title fade-in">Deep Learning Solutions for Multiple Industries</h2>
        <div className="electronic-about-grid">
          <div className="electronic-about-text fade-in">
            <p>
              Our Deep Learning services leverage advanced AI models to solve complex problems across industries such as electronics, oil & gas, chemical, power, biomedical, and pharmaceutical. We provide custom neural network solutions for predictive analytics, image processing, and automation.
            </p>
            <p>
              From optimizing manufacturing processes to enhancing medical diagnostics, our Deep Learning expertise ensures data-driven insights, improved efficiency, and innovation tailored to your industry needs.
            </p>
          </div>
          <div className="electronic-about-image-container fade-in">
            <img src={deepLearningImage} alt="Deep Learning Solutions" className="electronic-about-image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeepLearningAbout;