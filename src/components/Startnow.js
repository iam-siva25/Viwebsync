import React, { useState } from 'react';
import { motion } from 'framer-motion';
import '../styles/Startnow.css';

const Startnow = () => {
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = 'nivassr@viwebsync.com';
    setStatus('Sending...');
    const form = e.target;
    const data = new FormData(form);

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${email}`, {
        method: 'POST',
        body: data,
      });
      const result = await response.json();
      if (result.success) {
        setStatus('Message sent successfully!');
        form.reset();
      } else {
        setStatus('Error sending message. Please try again.');
      }
    } catch (error) {
      setStatus('Error sending message. Check your network.');
    }
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <main className="startnow-page">
      {/* Why Viwebsync Section */}
      <section className="why-viwebsync-section">
        <div className="content-wrap">
          <h2 className="section-title">Why Choose Viwebsync?</h2>
          <motion.div
            className="card-container"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div className="reason-card" variants={itemVariants}>
              <h3>Domain Expertise</h3>
              <p>
                Our team consists of certified LabVIEW professionals with deep knowledge across multiple industries, including Automotive, Aerospace, and Embedded Systems.
              </p>
            </motion.div>
            <motion.div className="reason-card" variants={itemVariants}>
              <h3>Tailored Solutions</h3>
              <p>
                We don't offer one-size-fits-all solutions. We work closely with you to design and implement custom applications that precisely meet your project requirements.
              </p>
            </motion.div>
            <motion.div className="reason-card" variants={itemVariants}>
              <h3>End-to-End Support</h3>
              <p>
                From initial consultation to post-deployment support, we are with you every step of the way, ensuring your project's success and long-term stability.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="contact-form-section">
        <div className="content-wrap">
          <h2 className="section-title">Get Started with Your Project</h2>
          <motion.div
            className="form-container"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <form onSubmit={handleSubmit} className="project-inquiry-form">
              <motion.h3 variants={itemVariants}>Project Inquiry</motion.h3>
              <motion.div className="form-group" variants={itemVariants}>
                <label htmlFor="name">Your Name</label>
                <input type="text" id="name" name="name" required />
              </motion.div>
              <motion.div className="form-group" variants={itemVariants}>
                <label htmlFor="email">Your Email</label>
                <input type="email" id="email" name="email" required />
              </motion.div>
              <motion.div className="form-group" variants={itemVariants}>
                <label htmlFor="message">Project Details</label>
                <textarea id="message" name="message" rows="5" required></textarea>
              </motion.div>
              <input type="text" name="_honeypot" style={{ display: 'none' }} />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_next" value="https://www.viwebsync.com/" />
              <motion.button
                type="submit"
                className="glow-button"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Submit Inquiry
              </motion.button>
              {status && <motion.p className="status-message" variants={itemVariants}>{status}</motion.p>}
            </form>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Startnow;