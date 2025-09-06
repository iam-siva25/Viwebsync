import React, { useState, useEffect } from "react";
import "../../styles/Home.css";

const testimonials = [
  {
    "text": "By integrating LabVIEW into our hardware design process, we've drastically accelerated our prototyping cycles and improved system efficiency.",
    "author": "Vikraman, Agribusiness Technology Manager"
  },
  {
    "text": "The real-time data analysis and seamless hardware integration capabilities of LabVIEW give us the insights needed to optimize our designs and manage resources more effectively.",
    "author": "Priya, Lead Systems Integrator"
  },
  {
    "text": "An indispensable partner for innovation, their expertise in LabVIEW solutions allows us to develop complex hardware systems that meet our exact specifications and deliver exceptional performance.",
    "author": "Ramesh, Aerospace Systems Architect"
  }
];

export default function ClientsSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 4000); // change every 4 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="clients-section">
      <h2 className="clients-title">Our Valuable Clients</h2>
      <div className="client-logos">
        <img src="/images/client1.png" alt="Client 1" />
        <img src="/images/client2.png" alt="Client 2" />
        <img src="/images/client3.png" alt="Client 3" />
        <img src="/images/client4.png" alt="Client 4" />
      </div>

      <div className="testimonials">
        <h3 className="testimonial-heading">
          <span className="quote-icon">“</span>
          WHAT THEY SAY <span className="blue-text">ABOUT US</span>
        </h3>
        <p
          key={index}
          className="testimonial-text fade-animation"
        >
          "{testimonials[index].text}"
          <span className="testimonial-author"> - {testimonials[index].author}</span>
        </p>
      </div>
    </section>
  );
}