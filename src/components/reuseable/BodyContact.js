import React from "react";
import "../../styles/Home.css";

const ContactSection = () => {
  return (
    <section className="contact-section">
      <div className="contact-card-v2">
        <h2>Ready to Transform Your Business?</h2>
        <p>
          Let's discuss how our AI and automation solutions can help you achieve your goals. Click below to get a custom quote.
        </p>
        <a href="#quote-form" className="glow-button">
          GET A QUOTE
        </a>
      </div>
    </section>
  );
};

export default ContactSection;