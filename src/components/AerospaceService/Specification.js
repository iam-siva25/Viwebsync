import React, { useEffect } from 'react';
import "../../styles/Aerospace.css";

const specifications = [
  {
    title: 'Multi-Functional Payloads',
    description: 'Our platforms support versatile payloads, allowing for seamless integration of surveillance cameras, sensor arrays, or communication modules to adapt to various mission requirements.',
    icon: '⚙️',
  },
  {
    title: 'Advanced Safety Mechanisms',
    description: 'We prioritize safety with advanced fail-safe features, including autonomous Return-to-Launch (RTL) capabilities and comprehensive battery health monitoring for reliable operations.',
    icon: '🛡️',
  },
  {
    title: 'Quick Deployment',
    description: 'Designed for efficiency, our systems can be deployed and operational in under 5 minutes, ensuring a rapid response to critical situations.',
    icon: '⏱️',
  },
  {
    title: 'Geo-Fencing Capability',
    description: 'Geo-fencing technology enables safe and controlled operation within predefined virtual boundaries, preventing unauthorized entry into restricted airspace.',
    icon: '🗺️',
  },
];

const Specification = () => {
  useEffect(() => {
    // Animation logic
  }, []);

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

export default Specification;