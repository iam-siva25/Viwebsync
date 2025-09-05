import React, { useState, useEffect } from 'react';
import gsap from 'gsap';

// Import local images from the assets folder
import missile from "../../assets/missile-checkout.jpg";
import radarSimulationImage from '../../assets/radar-simulation.jpg';
import sarSimulationImage from '../../assets/sar-simulator.jpg';
import missileSystemImage from '../../assets/CheckoutSystem.png';
import cableHarnessImage from '../../assets/cable-harness-tester.png';
import acousticEmissionImage from '../../assets/acuostic.png';
import radarWaveformImage from '../../assets/radarwaveform.png';
import antennaMeasurementImage from '../../assets/Anntena.png';
import dvbS2Image from '../../assets/Dvb.png';
import multiEmitterImage from '../../assets/multiemittor.png';
import actuatorTestImage from '../../assets/Acutatortest.png';
import actuatorControlImage from '../../assets/AcutatorCES.png';
import automatedTestImage from '../../assets/AutomatedTesteq.png';
import dataAcquisitionImage from '../../assets/DAQ.png';

const applications = [
    {
        title: 'Ballistic Missile Checkout and Analysis',
        content: 'Perform comprehensive pre-launch system checks and post-flight data analysis to ensure the reliability and performance of ballistic missile systems.',
        image: missile
    },
    {
        title: 'Radar Target and Echo Simulation',
        content: 'Simulate realistic radar echoes and moving targets in a controlled environment to test and validate the performance of radar systems and signal processing algorithms.',
        image: radarSimulationImage
    },
    {
        title: 'SAR Environment Simulation',
        content: 'Emulate synthetic aperture radar (SAR) environments to create virtual scenarios for testing and calibrating airborne and space-based radar imaging systems.',
        image: sarSimulationImage
    },
    {
        title: 'Missile Checkout System',
        content: 'Deploy automated test equipment (ATE) to perform a wide range of functional and performance tests on missile components and sub-systems before deployment.',
        image: missileSystemImage
    },
    {
        title: 'Cable Harness Tester',
        content: 'Validate the electrical integrity of complex cable harnesses and wiring systems to ensure reliability in aircraft and spacecraft applications.',
        image: cableHarnessImage
    },
    {
        title: 'Acoustic Emission, Acquisition and Analysis',
        content: 'Capture and analyze acoustic signals from structures and materials to detect defects, monitor structural health, and predict component failure in real-time.',
        image: acousticEmissionImage
    },
    {
        title: 'Radar Waveform Generator',
        content: 'Generate complex radar signals with specific characteristics to test and calibrate radar receivers, electronic warfare systems, and countermeasures.',
        image: radarWaveformImage
    },
    {
        title: 'Antenna Measurement Module',
        content: 'Measure the performance of antennas, including gain, radiation patterns, and impedance, to ensure they meet mission-critical specifications.',
        image: antennaMeasurementImage
    },
    {
        title: 'DVB-S2 RCS SATCOM HUB',
        content: 'Test and validate satellite communication (SATCOM) hubs and terminals that adhere to the DVB-S2 Return Channel Satellite (RCS) standard for reliable data transmission.',
        image: dvbS2Image
    },
    {
        title: 'Multi Emitter Scenario Simulator',
        content: 'Simulate complex electromagnetic environments with multiple signal emitters to test and evaluate the performance of electronic warfare and signal intelligence systems.',
        image: multiEmitterImage
    },
    {
        title: 'Actuator Test System',
        content: 'Perform dynamic and static tests on flight control actuators to ensure they operate within precise parameters for safe and reliable aircraft and spacecraft control.',
        image: actuatorTestImage
    },
    {
        title: 'Actuator Control Electronic System',
        content: 'Validate the electronic control units (ECUs) responsible for controlling actuators, ensuring their logic and performance meet stringent aerospace safety standards.',
        image: actuatorControlImage
    },
    {
        title: 'Automated Test Equipment',
        content: 'Utilize automated test sequences and hardware to perform high-throughput testing and validation of electronic and mechanical components with minimal human intervention.',
        image: automatedTestImage
    },
    {
        title: 'Data Acquisition and Control System',
        content: 'Implement robust systems to collect critical sensor data and control test parameters in real-time, essential for flight simulations and environmental testing.',
        image: dataAcquisitionImage
    },
];

const leftApplications = applications.slice(0, 7);
const rightApplications = applications.slice(7);

const Applications = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    // Animation for the title
    gsap.from('.app-title', {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: 'power2.out',
    });

    // Animation for the details center
    gsap.from('.app-details-center', {
      opacity: 0,
      y: 100,
      duration: 1.2,
      ease: 'power2.out',
      delay: 0.3,
    });

    // Staggered animation for application items
    gsap.from('.app-item', {
      opacity: 0,
      y: 30,
      duration: 0.8,
      stagger: 0.2,
      ease: 'back.out(1.7)',
      delay: 0.6,
    });

    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % applications.length);
    }, 5000);

    return () => {
      clearInterval(interval);
      gsap.killTweensOf('.app-title, .app-details-center, .app-item');
    };
  }, [applications.length]);

  const handleHeadingClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <section className="app-showcase aerospace-section" >
      <div className="content-panel">
        <h2 className="app-title">Applications</h2>
        <div className="app-grid">
          <div className="app-menu-left">
            {leftApplications.map((app, index) => (
              <div
                key={index}
                className={`app-item ${activeIndex === index ? 'active' : ''}`}
                onClick={() => handleHeadingClick(index)}
              >
                <span className="dot-marker"></span>
                <p className="item-label">{app.title}</p>
              </div>
            ))}
          </div>
          <div className="app-details-center">
            <div className="detail-layout">
              <div className="image-display">
                <img src={applications[activeIndex].image} alt={applications[activeIndex].title} className="detail-image" />
              </div>
              <div className="text-display">
                <p className="detail-text">{applications[activeIndex].content}</p>
              </div>
            </div>
          </div>
          <div className="app-menu-right">
            {rightApplications.map((app, index) => (
              <div
                key={index + leftApplications.length}
                className={`app-item ${activeIndex === index + leftApplications.length ? 'active' : ''}`}
                onClick={() => handleHeadingClick(index + leftApplications.length)}
              >
                <span className="dot-marker"></span>
                <p className="item-label">{app.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Applications;