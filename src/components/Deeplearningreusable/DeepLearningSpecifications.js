import React from 'react';
import '../../styles/DeepLearning.css';

const specifications = [
  {
    title: 'Predictive Maintenance',
    description: 'Use Deep Learning models to predict equipment failures in oil & gas, power, and manufacturing industries, reducing downtime and costs.',
    icon: '🔧',
  },
  {
    title: 'Image & Video Analysis',
    description: 'Apply computer vision for defect detection in electronics, medical imaging in biomedical, and quality control in pharmaceutical production.',
    icon: '📷',
  },
  {
    title: 'Process Optimization',
    description: 'Optimize chemical reactions, energy consumption in power plants, and supply chain in various industries using reinforcement learning.',
    icon: '📈',
  },
  {
    title: 'Anomaly Detection',
    description: 'Detect anomalies in data streams for fraud detection, safety monitoring in oil & gas, and drug discovery in pharmaceuticals.',
    icon: '🚨',
  },
];

const DeepLearningSpecifications = () => {
  return (
    <section className="electronic-specifications-section">
      <div className="electronic-content-panel">
        <h2 className="electronic-section-title fade-in">Key Deep Learning Capabilities</h2>
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

export default DeepLearningSpecifications;