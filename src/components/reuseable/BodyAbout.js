import React, { useState, useEffect } from "react";
import "../../styles/Home.css";
import img1 from "../../assets/AboutViweb1.png";
import img2 from "../../assets/AboutViweb2.png";

const BodyAbout = () => {
  const images = [img1, img2];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000); // Change every 3 seconds
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="about-us black-bg">
      <h2 className="about-header">
        <span className="about-text-white">About</span>{" "}
        <span className="about-text-blue">Us</span>
      </h2>
      <div className="about-content">
        <div className="about-text">
          <p>



At Viwebsync, we specialize in developing and implementing LabVIEW applications for diverse production industries. Our core mission is to empower businesses by providing critical solutions for automation, testing, and data logging, ensuring enhanced efficiency, superior quality, and complete traceability across all operations.
          </p>
          <p>
            We leverage the power of LabVIEW's graphical programming to create intuitive and robust systems that accelerate your development lifecycle. Our team of certified LabVIEW developers is dedicated to crafting high-performance solutions that precisely meet your technical requirements and drive significant operational efficiency.
          </p>
        </div>
        <div className="about-slider">
          <img
            src={images[currentIndex]}
            alt={`LabVIEW application slideshow ${currentIndex + 1}`}
            className="slideshow-image"
          />
        </div>
      </div>
    </section>
  );
};

export default BodyAbout;