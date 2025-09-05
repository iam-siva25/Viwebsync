// BiomedPharmaKeyApplications.jsx
import React, { useState, useEffect } from 'react';
import '../../styles/BiomedPharma.css';

// Placeholder images
import image1 from '../../assets/medical-device-testing.png';
import image2 from '../../assets/pharma-monitoring.png';
import image3 from '../../assets/lab-automation.png';
import image4 from '../../assets/data-integrity.png';
import image5 from '../../assets/biomed-research.png';

const allApplications = [
  {
    title: 'Medical Device Validation',
    content: 'Develop automated systems to validate medical devices, ensuring compliance with regulatory standards and reliable performance.',
    image: image1,
  },
  {
    title: 'Pharmaceutical Quality Control',
    content: 'Implement real-time monitoring systems for pharmaceutical manufacturing, ensuring product consistency and regulatory compliance.',
    image: image2,
  },
  {
    title: 'Biomedical Research Automation',
    content: 'Create automated workflows for biomedical research, increasing throughput and accuracy in experimental data collection.',
    image: image3,
  },
  {
    title: 'Data Traceability Systems',
    content: 'Design systems to ensure data integrity and traceability, meeting GMP and FDA requirements for pharmaceutical processes.',
    image: image4,
  },
  {
    title: 'Wearable Health Monitoring',
    content: 'Develop embedded systems for wearable devices, enabling real-time health monitoring and data analysis for patients.',
    image: image5,
  },
  {
    title: 'Diagnostic Equipment Testing',
    content: 'Create test systems for diagnostic equipment, ensuring accuracy and reliability in medical diagnostics.',
    image: image1,
  },
  {
    title: 'Drug Stability Testing',
    content: 'Implement automated systems for testing drug stability, ensuring shelf-life and efficacy under various conditions.',
    image: image2,
  },
  {
    title: 'Laboratory Information Management',
    content: 'Integrate LabVIEW with LIMS for streamlined data management and reporting in biomedical and pharmaceutical labs.',
    image: image3,
  },
  {
    title: 'Clinical Trial Data Acquisition',
    content: 'Develop systems for real-time data acquisition in clinical trials, ensuring accurate and compliant data collection.',
    image: image4,
  },
  {
    title: 'Biomedical Sensor Integration',
    content: 'Integrate sensors into biomedical devices for precise monitoring of physiological parameters in research and clinical settings.',
    image: image5,
  },
];

const leftApplications = allApplications.slice(0, 5);
const rightApplications = allApplications.slice(5);

const BiomedPharmaKeyApplications = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % allApplications.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleHeadingClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <section className="key-applications-section">
      <div className="content-wrap">
        <h2 className="section-title animate-reveal">Biomedical & Pharmaceutical Solutions</h2>
        <div className="applications-container">
          <div className="application-list-left animate-reveal">
            {leftApplications.map((app, index) => (
              <div
                key={index}
                className={`application-heading ${activeIndex === index ? 'active' : ''}`}
                onClick={() => handleHeadingClick(index)}
              >
                <span className="bullet-point"></span>
                <p className="app-title">{app.title}</p>
              </div>
            ))}
          </div>
          <div className="application-details animate-reveal">
            <div className="application-content-flex">
              <div className="image-container">
                <img src={allApplications[activeIndex].image} alt={allApplications[activeIndex].title} className="application-image" />
              </div>
              <div className="content-container">
                <p className="application-content-text">{allApplications[activeIndex].content}</p>
              </div>
            </div>
          </div>
          <div className="application-list-right animate-reveal">
            {rightApplications.map((app, index) => (
              <div
                key={index + leftApplications.length}
                className={`application-heading ${activeIndex === index + leftApplications.length ? 'active' : ''}`}
                onClick={() => handleHeadingClick(index + leftApplications.length)}
              >
                <span className="bullet-point"></span>
                <p className="app-title">{app.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BiomedPharmaKeyApplications;