import React from 'react';
import electronicsImage from '../../assets/electronics-testing.png';
import '../../styles/Semiconductor.css';

const ElectronicsAbout = () => {
  return (
    <section className="electronic-about-section">
      <div className="electronic-content-panel">
        <h2 className="electronic-section-title fade-in">Electronics & Semiconductor LabVIEW Solutions</h2>
        <div className="electronic-about-grid">
          <div className="electronic-about-text fade-in">
            <p>
              In the fast-paced electronics and semiconductor industry, precision and throughput are critical. Our LabVIEW solutions provide the tools for engineers to design and implement highly automated test systems for quality control and research and development.
            </p>
            <p>
              We specialize in creating custom ATE and functional test systems for a wide range of applications, from wafer-level testing to final product validation. Our systems are designed to improve efficiency, reduce test time, and ensure the reliability of electronic components.
            </p>
          </div>
          <div className="electronic-about-image-container fade-in">
            <img src={electronicsImage} alt="Electronics and Semiconductor" className="electronic-about-image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ElectronicsAbout;