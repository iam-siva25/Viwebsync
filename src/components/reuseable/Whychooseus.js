import React from "react";
import "../../styles/Home.css";
import { FaCheckCircle, FaCogs, FaRocket, FaShieldAlt } from "react-icons/fa";

const Whychooseus = () => {
  const reasons = [
    {
      icon: <FaCheckCircle />,
      title: "Proven Expertise",
      description: "We deliver solutions backed by years of technical experience in AI, LabVIEW, and embedded systems.",
    },
    {
      icon: <FaCogs />,
      title: "Custom Solutions",
      description: "Tailored approaches to match your specific business and industry requirements.",
    },
    {
      icon: <FaRocket />,
      title: "Innovation Driven",
      description: "We combine creativity with technology to deliver cutting-edge solutions.",
    },
    {
      icon: <FaShieldAlt />,
      title: "Trusted Quality",
      description: "Our solutions are designed with reliability, scalability, and performance in mind.",
    },
  ];

  return (
    <section className="why-choose-us-new">
      <h2>Why Choose Us</h2>
      <div className="reasons-grid">
        {reasons.map((reason, index) => (
          <div className="reason-card-new" key={index}>
            <div className="reason-icon-new">{reason.icon}</div>
            <h3>{reason.title}</h3>
            <p>{reason.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Whychooseus;