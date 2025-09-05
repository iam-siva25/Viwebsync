import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/Aerospace.css';

// Use a placeholder image for the aerospace and defense theme
import aerospace from '../../assets/aerospace-defense.jpg';

const AerospaceDefenseAbout = () => {
  return (
    <section className="aerospace-section">
      <div className="content-wrap">
        <h2 className="section-title animate-reveal">
          Aerospace Defense LabVIEW Solutions
        </h2>
        <div className="aerospace-about-grid">
          <div className="aerospace-about-text animate-reveal">
            <p>
              In the aerospace and defense industry, the complexity of modern systems demands highly-automated testing to ensure the perfection of every component. Our LabVIEW-based solutions provide the tools and support necessary to develop, test, and maintain new technologies, helping engineers blaze new paths in the field.
            </p>
            <p>
              We specialize in creating custom automated test equipment (ATE) and functional test systems for a wide range of applications. Our expertise covers everything from manufacturing inspection systems to complex software for managing test sequences, all designed to reduce risk, cut costs, and improve efficiency.
            </p>
          </div>
          <div className="aerospace-about-image-container animate-reveal">
            <img
              src={aerospace}
              alt="Aerospace Defense LabVIEW Solutions"
              className="aerospace-about-image"
            />
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default AerospaceDefenseAbout;