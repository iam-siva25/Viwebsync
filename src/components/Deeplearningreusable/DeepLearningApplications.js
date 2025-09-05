import React, { useState, useEffect } from 'react';
import '../../styles/DeepLearning.css';

const allApplications = [
  {
    title: 'Defect Detection in Electronics',
    content: 'Use CNNs to identify manufacturing defects in semiconductor chips and PCBs, improving yield rates.',
    image: require('../../assets/predictive-maintenance.png'),
  },
  {
    title: 'Predictive Analytics in Oil & Gas',
    content: 'Forecast equipment failures and optimize drilling operations using time-series deep learning models.',
    image: require('../../assets/image-analysis.png'),
  },
  {
    title: 'Drug Discovery in Pharmaceuticals',
    content: 'Accelerate drug candidate screening using generative models and molecular property prediction.',
    image: require('../../assets/process-optimization.png'),
  },
  {
    title: 'Medical Image Diagnosis',
    content: 'Enhance diagnostic accuracy in biomedical imaging with deep learning for tumor detection and classification.',
    image: require('../../assets/anomaly-detection.png'),
  },
  {
    title: 'Energy Forecasting in Power',
    content: 'Predict energy demand and optimize grid operations using recurrent neural networks.',
    image: require('../../assets/drug-discovery.png'),
  },
  {
    title: 'Process Control in Chemical Industry',
    content: 'Optimize chemical reactions and yield prediction using deep reinforcement learning.',
    image: require('../../assets/predictive-maintenance.png'),
  },
  {
    title: 'Quality Control in Manufacturing',
    content: 'Implement vision systems for real-time quality inspection across various industries.',
    image: require('../../assets/image-analysis.png'),
  },
  {
    title: 'Personalized Medicine',
    content: 'Develop models for patient-specific treatment recommendations in biomedical applications.',
    image: require('../../assets/process-optimization.png'),
  },
  {
    title: 'Supply Chain Optimization',
    content: 'Forecast demand and optimize logistics using deep learning across multiple industries.',
    image: require('../../assets/anomaly-detection.png'),
  },
  {
    title: 'Fraud Detection in Operations',
    content: 'Detect anomalous patterns in operational data for industries like power and chemical.',
    image: require('../../assets/drug-discovery.png'),
  },
];

const leftApplications = allApplications.slice(0, 5);
const rightApplications = allApplications.slice(5);

const DeepLearningKeyApplications = () => {
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
        <h2 className="section-title animate-reveal">Deep Learning Solutions Across Industries</h2>
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

export default DeepLearningKeyApplications;