// OilGasAbout.jsx
import React from 'react';
import oilGasImage from '../../assets/oil-gas-testing.png'; // Placeholder image
import '../../styles/OilGas.css';

const OilGasAbout = () => {
  return (
    <section className="electronic-about-section">
      <div className="electronic-content-panel">
        <h2 className="electronic-section-title fade-in">Oil, Gas, Chemical & Power LabVIEW Solutions</h2>
        <div className="electronic-about-grid">
          <div className="electronic-about-text fade-in">
            <p>
              In the demanding oil, gas, chemical, and power industries, reliability and precision are paramount. Our LabVIEW solutions empower engineers to develop advanced monitoring, control, and automation systems for process optimization and safety compliance.
            </p>
            <p>
              We specialize in creating custom test and control systems for applications ranging from pipeline monitoring to power grid management. Our solutions enhance operational efficiency, ensure regulatory compliance, and improve system reliability across these critical industries.
            </p>
          </div>
          <div className="electronic-about-image-container fade-in">
            <img src={oilGasImage} alt="Oil, Gas, Chemical, and Power" className="electronic-about-image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OilGasAbout;