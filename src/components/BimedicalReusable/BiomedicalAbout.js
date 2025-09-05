// BiomedPharmaAbout.jsx
import React from 'react';
import biomedPharmaImage from '../../assets/biomed-pharma-testing.png'; // Placeholder image
import '../../styles/BiomedPharma.css';

const BiomedPharmaAbout = () => {
  return (
    <section className="electronic-about-section">
      <div className="electronic-content-panel">
        <h2 className="electronic-section-title fade-in">Biomedical & Pharmaceutical LabVIEW Solutions</h2>
        <div className="electronic-about-grid">
          <div className="electronic-about-text fade-in">
            <p>
              In the highly regulated biomedical and pharmaceutical industries, precision and compliance are critical. Our LabVIEW solutions provide engineers with tools to develop automated testing, monitoring, and control systems for medical devices and pharmaceutical processes.
            </p>
            <p>
              We specialize in creating custom systems for applications ranging from medical device validation to pharmaceutical quality control. Our solutions ensure accuracy, streamline workflows, and meet stringent regulatory standards like FDA and GMP.
            </p>
          </div>
          <div className="electronic-about-image-container fade-in">
            <img src={biomedPharmaImage} alt="Biomedical and Pharmaceutical" className="electronic-about-image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BiomedPharmaAbout;