import React, { useState, useEffect } from "react";
import "../../styles/Home.css";
import img1 from "../../assets/Radar.png";
import img2 from "../../assets/Checkout System For Aerospace And Defence.png";
import img3 from "../../assets/Telemetry Checkout System.png";
import img4 from "../../assets/Deep Lreaning Using AI,LabVIEW And FPGA.png";
import img5 from "../../assets/embeddedand validation.jpg";
import img6 from "../../assets/hardware.jpg";

const Bodysolutions = () => {
  const products = [
    { name: "Radar Echo Simulator", image: img1, description: "A tool generating virtual echoes for radar system testing, improving safety and reducing costs." },
    { name: "Checkout Systems", image: img2, description: "A system for a final pre-deployment check, ensuring mission-critical systems are fully operational." },
    { name: "Telemetry Systems", image: img3, description: "Remotely collects data from a source for monitoring, critical for remote vehicle and drone monitoring." },
    { name: "Deep Learning for Image Processing", image: img4, description: "Neural networks automatically analyze and understand images, revolutionizing object detection and medical analysis." },
    { name: "Embedded System and Validation", image: img5, description: "Designing and testing integrated systems for reliable performance in various applications." },
    { name: "Hardware Design", image: img6, description: "Creating and testing physical components for electronic systems to ensure optimal performance." },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  // Automatic expansion every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % products.length);
    }, 2000); // 2 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [products.length]);

  return ( 
    <section className="product-showcase-section">
      <h2 className="product-showcase-title">
        <span className="title-white">Our Core</span>
        <span className="title-blue">Solutions</span>
      </h2>
      <div className="product-showcase">
        {products.map((product, index) => (
          <div
            key={index}
            className={`product-card ${activeIndex === index ? "active" : ""}`}
            onClick={() => setActiveIndex(index)}
          >
            <img src={product.image} alt={product.name} />
            <div className="glass-content">
              <div className="product-info">
                <h3>{product.name}</h3>
                {activeIndex === index && <p>{product.description}</p>}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Bodysolutions;