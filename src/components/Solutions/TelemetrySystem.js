import React from 'react';
import img1 from "../../assets/telemetry.png"; // Replace with actual image path
import "../../styles/Solutions.css"; // Same CSS file for consistent styling

const TelemetrySystemsPage = () => {
  return (
    <div className="solution-page-container">
      <div className="solution-header">
        <h2 className="solution-title">
          <span className="highlight">Telemetry</span> Systems
        </h2>
        <img src={img1} alt="Telemetry Systems" className="solution-image" />
      </div>
      <div className="solution-content">
        <p className="solution-intro">
          <strong>Telemetry Systems</strong> are advanced solutions designed to collect, measure, and transmit data from remote or inaccessible platforms, such as aircraft, spacecraft, and defense systems, to ground stations for real-time monitoring and analysis. Essential in the <strong>aerospace and defense</strong> sectors, these systems enable precise performance tracking, safety assurance, and mission optimization without physical intervention in challenging environments.
        </p>

        <div className="section-divider"></div>

        <h3>Key Features and Functionalities</h3>
        <ul className="solution-features">
          <li>
            <strong>Real-Time Data Acquisition:</strong> Captures critical parameters like velocity, altitude, and environmental conditions using sensors such as accelerometers, gyroscopes, and pressure transducers.
          </li>
          <li>
            <strong>Secure Wireless Transmission:</strong> Utilizes Pulse Code Modulation (PCM) and RF amplifiers to securely transmit high-rate data streams, supporting up to 20 Mbps.
          </li>
          <li>
            <strong>Hardware-in-the-Loop Integration:</strong> Interfaces with onboard systems and ground receivers for real-time validation and data processing during missions or tests.
          </li>
          <li>
            <strong>Environmental Resilience:</strong> Built to withstand extreme conditions like high EMI, vibration, and radiation, with encryption for secure data transmission in defense applications.
          </li>
        </ul>

        <div className="section-divider"></div>

        <h3>Applications and Benefits</h3>
        <ul className="solution-benefits">
          <li>
            <strong>Cost-Effective Monitoring:</strong> Reduces operational costs by minimizing the need for physical inspections or manned interventions in remote or hazardous environments.
          </li>
          <li>
            <strong>Enhanced Safety:</strong> Provides real-time anomaly detection, such as engine or structural issues, ensuring safety during flight tests, space missions, or defense operations.
          </li>
          <li>
            <strong>Accelerated Development:</strong> Enables rapid prototyping and iteration of aerospace systems like UAVs and satellites through reproducible data analysis.
          </li>
          <li>
            <strong>Scalable Solutions:</strong> Supports diverse platforms, from aircraft to ground vehicles, complying with standards like IRIG 106 for reliable mission analysis.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TelemetrySystemsPage;