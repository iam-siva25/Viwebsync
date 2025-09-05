// OilGasSpecifications.jsx
import React from 'react';
import '../../styles/OilGas.css';

const specifications = [
  {
    title: 'Pipeline Monitoring Systems',
    description: 'We develop automated systems for real-time monitoring of pipelines, ensuring early detection of leaks, pressure anomalies, and operational inefficiencies.',
    icon: '🛠️',
  },
  {
    title: 'Process Control Automation',
    description: 'Our solutions provide precise control of chemical and power plant processes, optimizing production and ensuring compliance with safety standards.',
    icon: '⚙️',
  },
  {
    title: 'Power Grid Testing',
    description: 'We create test systems for validating power grid components, ensuring stability, efficiency, and compliance with industry regulations.',
    icon: '⚡️',
  },
  {
    title: 'Environmental Compliance Testing',
    description: 'Our systems enable accurate monitoring and testing of emissions and effluents, ensuring adherence to environmental regulations in chemical and oil industries.',
    icon: '🌍',
  },
];

const OilGasSpecifications = () => {
  return (
    <section className="electronic-specifications-section">
      <div className="electronic-content-panel">
        <h2 className="electronic-section-title fade-in">Key Industry Capabilities</h2>
        <div className="electronic-staggered-grid">
          {specifications.map((spec, index) => (
            <div
              key={index}
              className={`electronic-staggered-card electronic-glass-card fade-in ${index % 2 === 1 ? 'electronic-align-right' : 'electronic-align-left'}`}
            >
              <div className="electronic-staggered-icon-wrapper">
                <div className="electronic-staggered-icon">{spec.icon}</div>
              </div>
              <div className="electronic-staggered-content">
                <h3>{spec.title}</h3>
                <p>{spec.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OilGasSpecifications;