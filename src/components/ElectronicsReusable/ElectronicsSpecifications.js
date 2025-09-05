import React from 'react';
import '../../styles/Semiconductor.css';

const specifications = [
  {
    title: 'High-Throughput ATE',
    description: 'We develop high-speed automated test systems to increase production efficiency and reduce time-to-market for electronic devices and integrated circuits.',
    icon: '⚡',
  },
  {
    title: 'PCB Functional Testing',
    description: 'Our solutions automate the functional testing of printed circuit boards, ensuring every component and signal path operates as designed before final assembly.',
    icon: '🤖',
  },
  {
    title: 'RF and Wireless Testing',
    description: 'We create custom test benches for validating RF components and wireless communication protocols, ensuring signal integrity and compliance with industry standards.',
    icon: '📶',
  },
  {
    title: 'Wafer-Level Probing',
    description: 'Our systems provide automated control for wafer probers, enabling precise testing and characterization of individual die on a semiconductor wafer.',
    icon: '🔬',
  },
];

const ElectronicsSpecifications = () => {
  return (
    <section className="electronic-specifications-section">
      <div className="electronic-content-panel">
        <h2 className="electronic-section-title fade-in">Key Electronics Capabilities</h2>
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

export default ElectronicsSpecifications;