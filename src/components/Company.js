import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Company.css';

const faqs = [
  {
    id: 1,
    question: "What is the role of LabVIEW in your services?",
    answer: "LabVIEW applications are used in production industries for automation, testing, and data logging to ensure efficiency, quality, and traceability.",
  },
  {
    id: 2,
    question: "What are some of your Deep Learning services?",
    answer: "We offer a range of Deep Learning services including Visual Inspection for Defect Detection, Predictive Maintenance, Human Activity Recognition, and Anomaly Detection in Manufacturing Data.",
  },
  {
    id: 3,
    question: "Do you use Edge AI?",
    answer: "Yes, we implement Edge AI solutions to process data at the source, specifically using NI hardware.",
  },
];

const Home = () => {
  const [openFaqId, setOpenFaqId] = useState(null);

  const toggleFaq = (id) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  return (
    <div className="home-page">
      {/* Hero Section with Glassmorphism */}
      <section className="hero-block">
        <video className="hero-media" autoPlay loop muted>
          <source src="https://assets.mixkit.co/videos/preview/mixkit-futuristic-software-in-a-computer-4475-large.mp4" type="video/mp4" />
        </video>
        <div className="glass-content-box hero-content2 animate-pulse">
          <h1 className="hero-title">Engineering Solutions for a Smarter World</h1>
          <p className="hero-quote">
            Powering progress in Aerospace & Defense, Automotive,
            Biomedical & Pharmaceutical, and beyond.
          </p>
          <Link to="/start-now" className="glow-button">
            Start Your Project
          </Link>
        </div>
      </section>

      {/* Brief About Section */}
      <section className="about-us animate-fade-in">
        <h2 className="about-header"><span className="about-text-white">Who</span> <span className="about-text-blue">We Are</span></h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              At VI Web Sync, we specialize in providing tailored engineering solutions across
              critical sectors. Our expertise is rooted in a commitment to innovation, quality, and
              unmatched client service. We are your partners in solving complex challenges and
              driving technological advancement.
            </p>
          </div>
        </div>
      </section>

      {/* Our Expertise Section */}
      <section className="expertise-section">
        <h2>Our Specialized Expertise</h2>
        <div className="expertise-grid">
          <div className="expertise-card labview-card animate-fade-in">
            <h3>LabVIEW Applications</h3>
            <p>
              We leverage LabVIEW for robust automation, testing, and data logging to ensure precision and quality across production industries.
            </p>
          </div>
          <div className="expertise-card deeplearning-card animate-fade-in">
            <h3>Deep Learning Solutions</h3>
            <p>
              Our deep learning expertise drives innovation through visual inspection, predictive maintenance, and human activity recognition.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <h2>Our Core Services</h2>
        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon">⚙️</div>
            <h3>Aerospace & Defense</h3>
            <p>
              Delivering mission-critical engineering for the future of flight and security.
            </p>
          </div>
          <div className="service-card">
            <div className="service-icon">🚗</div>
            <h3>Automotive</h3>
            <p>
              Innovating a new era of automotive technology, from design to automation.
            </p>
          </div>
          <div className="service-card">
            <div className="service-icon">🧬</div>
            <h3>Biomedical & Pharmaceutical</h3>
            <p>
              Creating advanced solutions for life sciences and medical device technology.
            </p>
          </div>
          <div className="service-card">
            <div className="service-icon">⚡</div>
            <h3>Semiconductor</h3>
            <p>
              Providing high-precision engineering for the heart of modern electronics.
            </p>
          </div>
          <div className="service-card">
            <div className="service-icon">🛢️</div>
            <h3>Oil, Gas, Chemical & Power</h3>
            <p>
              Building robust systems for energy and industrial process control.
            </p>
          </div>
          <div className="service-card">
            <div className="service-icon">🧠</div>
            <h3>Deep Learning</h3>
            <p>
              Leveraging AI and machine learning for intelligent, automated systems.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-us">
        <div className="section-title-container">
          <h2 className="section-title"><span className="about-text-white">Why</span> <span className="about-text-blue">Choose Us</span></h2>
          <p className="section-subtitle">
            Experience our commitment to excellence, innovation, and client success.
          </p>
        </div>
        <div className="reasons-container">
          <div className="reason-row">
            <div className="reason-card left">
              <div className="reason-icon">🚀</div>
              <h3>Innovation</h3>
              <p>We stay ahead of the curve with cutting-edge technology and creative solutions.</p>
            </div>
            <div className="reason-card right">
              <div className="reason-icon">💡</div>
              <h3>Expertise</h3>
              <p>Our team consists of highly skilled engineers with deep industry knowledge.</p>
            </div>
          </div>
          <div className="reason-row">
            <div className="reason-card left">
              <div className="reason-icon">🤝</div>
              <h3>Collaboration</h3>
              <p>We work closely with clients to deliver tailored solutions that meet their unique needs.</p>
            </div>
            <div className="reason-card right">
              <div className="reason-icon">🏆</div>
              <h3>Quality</h3>
              <p>We are committed to delivering the highest quality in every project we undertake.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision and Mission Sections */}
      <section className="vision-section animate-fade-in">
        <div className="vision-content">
          <h2>Our Vision</h2>
          <p>
            To be the global leader in transformative engineering solutions, driving
            innovation and shaping the future of industries by tackling their most
            complex challenges with unparalleled expertise and a passion for excellence.
          </p>
        </div>
      </section>

      <section className="mission-section animate-fade-in">
        <div className="mission-content">
          <h2>Our Mission</h2>
          <p>
            We are committed to empowering our clients with reliable, tailored, and
            state-of-the-art engineering services. Our mission is to propel our clients'
            success and contribute to a more advanced and sustainable world.
          </p>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="faqs-section">
        <div className="faqs-content">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-list">
            {faqs.map((faq) => (
              <div className="faq-item" key={faq.id}>
                <button
                  className={`faq-question-button ${openFaqId === faq.id ? 'open' : ''}`}
                  onClick={() => toggleFaq(faq.id)}
                >
                  <span className="question-text">{faq.question}</span>
                  <span className="faq-icon">{openFaqId === faq.id ? '−' : '+'}</span>
                </button>
                <div
                  className={`faq-answer ${openFaqId === faq.id ? 'open' : ''}`}
                >
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;