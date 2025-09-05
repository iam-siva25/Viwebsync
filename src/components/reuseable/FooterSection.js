import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/Footer.css';
import logo from '../../assets/logo.png';

const Footer = () => {
  return (
    <footer className="viwebsync-footer-container">
      <div className="viwebsync-footer-content">
        <div className="viwebsync-footer-section viwebsync-company-info">
          <Link to="/" className="viwebsync-footer-logo">
            <img src={logo} alt="Viwebsync Logo" />
          </Link>
          <h3>Viwebsync</h3>
          <p>
            Specializing in LabVIEW applications for automation, testing, and data logging. We empower industries to achieve efficiency and precision.
          </p>
          <div className="viwebsync-social-links">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
          </div>
        </div>
        
        <div className="viwebsync-footer-section viwebsync-footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/company">Company</Link></li>
            <li><Link to="/portfolio">Blog</Link></li>
            <li><Link to="/start-now">Start Now</Link></li>
          </ul>
        </div>
        
        <div className="viwebsync-footer-section viwebsync-footer-links">
          <h4>Services</h4>
          <ul>
            <li><Link to="/aerospace-defense">Aerospace and Defense</Link></li>
            <li><Link to="/automotive">Automotive</Link></li>
            <li><Link to="/semiconductor">Semiconductor</Link></li>
            <li><Link to="/oil-gas-chemical-power">Oil, Gas, Chemical and Power</Link></li>
            <li><Link to="/biomedical-and-pharma">Biomedical & Pharmaceutical</Link></li>
            <li><Link to="/labview/deep-learning">Deep Learning</Link></li>
          </ul>
        </div>
        
        <div className="viwebsync-footer-section viwebsync-contact-info">
          <h4>Contact Us</h4>
          <p>Email: info@viwebsync.com</p>
          <p>Phone: +91 6385879906</p>
          <p>Chennai, Tamil Nadu, India</p>
        </div>
      </div>
      
      <div className="viwebsync-footer-bottom">
        <p>&copy; {new Date().getFullYear()} Viwebsync. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;