import React from 'react';
import { Link } from 'react-router-dom';
import automotiveImage from '../../assets/test-automation.jpg';
import '../../styles/Automotive.css';

const AutomotiveAbout = () => {
  return (
    <section className="automotive-about-section">
      <div className="content-panel">
        <div className="automotive-about-grid">
          <div className="automotive-about-image-container fade-in">
            <img src={automotiveImage} alt="Test Automation in the Automotive Industry" className="automotive-about-image" />
          </div>
          <div className="automotive-about-text fade-in">
            <h2 className="section-title fade-in">Automotive Industry LabVIEW Solutions</h2>
            <p>
              In the fast-paced automotive industry, precision, reliability, and speed are paramount. Our custom LabVIEW solutions enable engineers to accelerate development and manufacturing processes, ensuring every vehicle component meets the highest standards of quality and safety. From powertrain validation to in-vehicle data acquisition, our automated test systems provide a flexible and robust platform for addressing the industry's most pressing challenges, including the transition to electric vehicles (EVs) and advanced driver-assistance systems (ADAS).
            </p>
            <Link to="/contact" className="cta-button">
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AutomotiveAbout;