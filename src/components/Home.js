import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import BodyAbout from './reuseable/BodyAbout';
import Bodysolutions from './reuseable/Bodysolutions';
import Whychooseus from './reuseable/Whychooseus';
import ClientsSection from './reuseable/clients';
import BodyContact from './reuseable/BodyContact';
import HeroSection from './reuseable/Herosection'; 
import FooterSection from './reuseable/FooterSection'; // Import the new HeroSection component

const Home = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    console.log('Home component mounted');

    // Initialize AOS
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const handleMouseEnter = (e) => {
    const card = e.currentTarget;
    const cards = document.querySelectorAll('.solution-card');
    cards.forEach(c => c.removeAttribute('data-active'));
    card.setAttribute('data-active', '');
  };

  return (
    <main className="home-wrapper">
      {/* Hero Section Component */}
      <HeroSection />

      {/* About Us Section */}
      <BodyAbout />

      {/* Core Solutions Section */}
      <Bodysolutions />

      {/* Why Choose Us Section */}
      <Whychooseus/>

      <ClientsSection/>
      <BodyContact />
      <FooterSection />
    </main>
  );
};

export default Home;