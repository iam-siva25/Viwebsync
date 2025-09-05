import React from 'react';
import img1 from "../../assets/hardware.jpg"; // Replace with actual image path
import "../../styles/Solutions.css"; // Same CSS for consistent styling

const HardwareDesignPage = () => {
  return (
    <div className="solution-page-container">
      <div className="solution-header">
        <h2 className="solution-title">
          <span className="highlight">Hardware</span> Design
        </h2>
        <img src={img1} alt="Hardware Design" className="solution-image" />
      </div>
      <div className="solution-content">
        <p className="solution-intro">
          <strong>Hardware Design</strong> involves the creation and optimization of electronic circuits, systems, and components tailored for specific applications in industries like <strong>aerospace, defense, and IoT</strong>. Leveraging advanced tools and methodologies, hardware design ensures reliable, efficient, and high-performance systems for mission-critical operations.
        </p>

        <div className="section-divider"></div>

        <h3>Key Features and Functionalities</h3>
        <ul className="solution-features">
          <li>
            <strong>Custom Circuit Design:</strong> Develops tailored PCBs and SoCs using tools like Altium Designer, integrating microcontrollers, FPGAs, and sensors.[](https://www.researchgate.net/publication/278662280_HardwareSoftware_Co-design_for_Real_Time_Embedded_Image_Processing_A_Case_Study)[](https://resources.altium.com/p/image-processing-embedded-systems-with-modular-hardware)
          </li>
          <li>
            <strong>Hardware Acceleration:</strong> Incorporates GPUs, TPUs, or FPGAs to enhance processing capabilities for compute-intensive tasks like AI and signal processing.[](https://www.sciencedirect.com/science/article/pii/S0952197625001599)[](https://waverleysoftware.com/blog/embedded-ai-systems-guide/)
          </li>
          <li>
            <strong>Modular Architecture:</strong> Utilizes modular design tools like Geppetto for rapid prototyping and scalable hardware solutions.[](https://www.gumstix.com/community/blog/image-processing-embedded-systems-with-modular-hardware/)[](https://resources.altium.com/p/image-processing-embedded-systems-with-modular-hardware)
          </li>
          <li>
            <strong>Environmental Durability:</strong> Designs ruggedized hardware to withstand extreme conditions such as high vibration, temperature, and EMI in aerospace applications.[](https://www.embedur.ai/embedded-system-ecosystem/)
          </li>
        </ul>

        <div className="section-divider"></div>

        <h3>Applications and Benefits</h3>
        <ul className="solution-benefits">
          <li>
            <strong>Cost-Effective Prototyping:</strong> Reduces development costs by enabling rapid iteration and testing with modular and simulation-based design tools.[](https://www.gumstix.com/community/blog/image-processing-embedded-systems-with-modular-hardware/)
          </li>
          <li>
            <strong>High Performance:</strong> Optimizes hardware for real-time processing, critical for applications like autonomous vehicles and robotics.[](https://viso.ai/deep-learning/embedded-system-projects/)
          </li>
          <li>
            <strong>Scalable Solutions:</strong> Supports diverse applications, from IoT devices to complex defense systems, with customizable designs.[](https://www.embedur.ai/embedded-system-ecosystem/)
          </li>
          <li>
            <strong>Enhanced Reliability:</strong> Ensures robust performance in harsh environments, improving system longevity and safety.[](https://www.researchgate.net/publication/278662280_HardwareSoftware_Co-design_for_Real_Time_Embedded_Image_Processing_A_Case_Study)
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HardwareDesignPage;