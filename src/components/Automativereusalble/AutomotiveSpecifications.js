import React, { useEffect } from 'react';
import gsap from 'gsap';
import '../../styles/Automotive.css';
const specifications = [
  {
    title: 'High-Speed Data Acquisition',
    description: 'Capture critical data from thousands of sensors in real-time, enabling precise analysis of vehicle performance under various conditions, from engine temperature to chassis stress.',
    icon: '⚡',
  },
  {
    title: 'Functional Test Automation',
    description: 'Automate the testing of electronic control units (ECUs), infotainment systems, and other vehicle electronics to ensure flawless operation and reduce manual test time.',
    icon: '🤖',
  },
  {
    title: 'Battery Management System (BMS) Testing',
    description: 'Validate the performance and safety of EV batteries by simulating charging and discharging cycles and monitoring cell-level data with high accuracy.',
    icon: '🔋',
  },
  {
    title: 'Hardware-in-the-Loop (HIL) Testing',
    description: 'Use real-time HIL simulations to test vehicle components and embedded software in a virtual environment, accelerating development and reducing the need for costly physical prototypes.',
    icon: '🔄',
  },
];

const AutomotiveSpecifications = () => {
  useEffect(() => {
    gsap.from('.section-title', {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: 'power2.out',
    });
    gsap.from('.staggered-card', {
      opacity: 0,
      y: 30,
      duration: 0.8,
      stagger: 0.2,
      ease: 'back.out(1.7)',
      delay: 0.6,
    });
    return () => {
      gsap.killTweensOf('.section-title, .staggered-card');
    };
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

export default AutomotiveSpecifications;