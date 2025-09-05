import React from 'react';
import img1 from "../../assets/Deep-Learning.jpg"; // Replace with actual image path
import "../../styles/Solutions.css"; // Same CSS for consistent styling

const DeepLearningImageProcessingPage = () => {
  return (
    <div className="solution-page-container">
      <div className="solution-header">
        <h2 className="solution-title">
          <span className="highlight">Deep Learning</span> Image Processing
        </h2>
        <img src={img1} alt="Hardware Design" className="solution-image" />
      </div>
      <div className="solution-content">
        <p className="solution-intro">
          <strong>Deep Learning Image Processing</strong> leverages advanced neural networks, such as CNNs, to analyze and interpret visual data for applications in <strong>aerospace, defense, and healthcare</strong>. By processing images and videos in real-time, these systems enable object detection, classification, and anomaly identification with high accuracy.
        </p>

        <div className="section-divider"></div>

        <h3>Key Features and Functionalities</h3>
        <ul className="solution-features">
          <li>
            <strong>Object Detection and Classification:</strong> Uses models like YOLO and Faster R-CNN for real-time identification of objects in images or video streams.
          </li>
          <li>
            <strong>Edge AI Integration:</strong> Deploys lightweight models on embedded devices using tools like NVIDIA Jetson or TensorFlow.js for on-device processing.
          </li>
          <li>
            <strong>Image Enhancement:</strong> Applies techniques like deblurring and noise reduction to improve image quality for medical or satellite imagery.
          </li>
          <li>
            <strong>Scalable Frameworks:</strong> Supports frameworks like OpenCV and TensorFlow for flexible development and deployment across platforms.
          </li>
        </ul>

        <div className="section-divider"></div>

        <h3>Applications and Benefits</h3>
        <ul className="solution-benefits">
          <li>
            <strong>High Accuracy:</strong> Achieves precise detection and classification, critical for applications like autonomous navigation and medical diagnostics.
          </li>
          <li>
            <strong>Real-Time Processing:</strong> Enables rapid analysis on edge devices, reducing latency for time-sensitive tasks like surveillance.
          </li>
          <li>
            <strong>Cost Efficiency:</strong> Reduces reliance on cloud computing by processing data locally, lowering bandwidth and operational costs.
          </li>
          <li>
            <strong>Broad Applications:</strong> Supports diverse use cases, from defect detection in manufacturing to facial recognition in security systems.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DeepLearningImageProcessingPage;