import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import heroVideo from '../../assets/Robot Automation-4.mp4';
import '../../styles/Home.css';

const HeroSection = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.addEventListener('error', (e) => {
        console.error('Video loading error:', e);
      });
      video.addEventListener('canplay', () => {
        video.play().catch((err) => console.error('Video playback error:', err));
      });
    }

    // Initialize AOS
    AOS.init({
      duration: 1000,
      once: true,
    });

    return () => {
      if (video) {
        video.removeEventListener('error', () => {});
        video.removeEventListener('canplay', () => {});
      }
    };
  }, []);

  return (
    <section className="hero-block animate-reveal home-section-gradient">
      <video className="hero-media" ref={videoRef} autoPlay loop muted playsInline>
        <source src={heroVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="glass-morphism-overlay">
        <div className="hero-content2">
         
          <p className="hero-quote">Innovate. Automate. Elevate.</p>
          <div className="hero-ctas">
            <Link to="/start-now" className="primary-action glow-button">Book a Demo</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;