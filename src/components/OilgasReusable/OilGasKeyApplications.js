// OilGasKeyApplications.jsx
import React, { useState, useEffect } from 'react';
import '../../styles/OilGas.css';

// Placeholder images
import image1 from '../../assets/pipeline-monitoring.png';
import image2 from '../../assets/process-control.png';
import image3 from '../../assets/power-grid.png';
import image4 from '../../assets/environmental-testing.png';
import image5 from '../../assets/automation-system.png';

const allApplications = [
  {
    title: 'Pipeline Integrity Monitoring',
    content: 'Implement real-time systems to monitor pipeline conditions, detecting leaks, corrosion, and pressure issues to ensure operational safety.',
    image: image1,
  },
  {
    title: 'Chemical Process Optimization',
    content: 'Design automated systems for precise control of chemical reactions and processes, improving yield and reducing waste.',
    image: image2,
  },
  {
    title: 'Power Grid Stability Testing',
    content: 'Develop test systems for power grid components, ensuring reliability and efficiency under varying load conditions.',
    image: image3,
  },
  {
    title: 'Emissions Monitoring Systems',
    content: 'Create solutions for real-time monitoring of emissions, ensuring compliance with environmental regulations in oil and chemical industries.',
    image: image4,
  },
  {
    title: 'Industrial Automation Controllers',
    content: 'Engineer robust controllers for automated systems, ensuring reliable operation in oil, gas, and power plants.',
    image: image5,
  },
  {
    title: 'SCADA System Integration',
    content: 'Integrate LabVIEW with SCADA systems for centralized monitoring and control of industrial processes.',
    image: image1,
  },
  {
    title: 'Predictive Maintenance Systems',
    content: 'Develop monitoring solutions to predict equipment failures, reducing downtime and maintenance costs in industrial operations.',
    image: image2,
  },
  {
    title: 'Safety System Validation',
    content: 'Design test systems to validate safety mechanisms in chemical and power plants, ensuring compliance with industry standards.',
    image: image3,
  },
  {
    title: 'Energy Management Systems',
    content: 'Implement smart systems for optimizing energy consumption in power and chemical industries, improving efficiency.',
    image: image4,
  },
  {
    title: 'Real-Time Data Analytics',
    content: 'Create systems for analyzing operational data in real-time, enabling data-driven decisions for process optimization.',
    image: image5,
  },
];

const leftApplications = allApplications.slice(0, 5);
const rightApplications = allApplications.slice(5);

const OilGasKeyApplications = () => {
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
        <h2 className="section-title animate-reveal">Oil, Gas, Chemical & Power Solutions</h2>
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

export default OilGasKeyApplications;