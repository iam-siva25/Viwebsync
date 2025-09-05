import React from 'react';
import img1 from "../../assets/embeddedand validation.jpg"; // Replace with actual image path
import "../../styles/Solutions.css"; // Same CSS for consistent styling

const EmbeddedSystemAndValidationPage = () => {
  return (
    <div className="solution-page-container">
      <div className="solution-header">
        <h2 className="solution-title">
          <span className="highlight">Embedded System</span> and Validation
        </h2>
        <img src={img1} alt="Embedded System and Validation" className="solution-image" />
      </div>
      <div className="solution-content">
        <p className="solution-intro">
          <strong>Embedded System and Validation</strong> solutions integrate specialized computing systems with rigorous testing and verification processes to ensure reliable performance in <strong>aerospace, defense, automotive, and IoT</strong> applications. These systems combine hardware and software for dedicated functions, with validation ensuring compliance, safety, and functionality under real-world conditions.
        </p>

        <div className="section-divider"></div>

        <h3>Key Features and Functionalities</h3>
        <ul className="solution-features">
          <li>
            <strong>Real-Time Embedded Processing:</strong> Utilizes microcontrollers and RTOS for low-latency control in applications like drones, automotive ECUs, and smart sensors.
          </li>
          <li>
            <strong>Comprehensive Validation:</strong> Employs Hardware-in-the-Loop (HIL) and Software-in-the-Loop (SIL) testing to verify system performance against requirements.
          </li>
          <li>
            <strong>Compact and Efficient Design:</strong> Integrates processors, sensors, and communication modules into power-efficient System-on-Chip (SoC) architectures.
          </li>
          <li>
            <strong>Robust Connectivity and Security:</strong> Supports protocols like CAN, MQTT, and Bluetooth, with encryption and fault-tolerant designs for secure, reliable operation.
          </li>
        </ul>

        <div className="section-divider"></div>

        <h3>Applications and Benefits</h3>
        <ul className="solution-benefits">
          <li>
            <strong>Enhanced Reliability:</strong> Validation processes ensure embedded systems meet stringent standards, reducing failures in critical applications like medical devices and avionics.
          </li>
          <li>
            <strong>Cost-Effective Development:</strong> Early validation through simulation and testing minimizes costly redesigns and accelerates time-to-market.
          </li>
          <li>
            <strong>Scalable Solutions:</strong> Supports diverse platforms, from IoT devices to automotive systems, with modular designs for easy upgrades.
          </li>
          <li>
            <strong>Improved Safety:</strong> Rigorous testing ensures systems perform reliably in harsh environments, enhancing safety in mission-critical operations.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default EmbeddedSystemAndValidationPage;