import React, { useState, useEffect } from 'react';
import gsap from 'gsap';
import '../../styles/AutomotiveAbout.css';
import image1 from '../../assets/HILtesting.png';
import image2 from '../../assets/DAQ.png';
import image3 from '../../assets/Eoltest.png';
import image4 from '../../assets/bms-testing.jpg';
import image5 from '../../assets/Can lin.png';
import image6 from '../../assets/Testbench automation.png';
import image7 from '../../assets/in vechicle data.png';
import image8 from '../../assets/ADAS sensor.png';

const applications = [
  {
    title: 'HIL Testing',
    content: 'Develop and validate electronic control units (ECUs) in a safe, simulated environment, significantly reducing the need for expensive physical prototypes and accelerating your development cycles.',
    image: image1,
  },
  {
    title: 'DAQ & Signal Processing',
    content: 'Implement high-speed data acquisition systems to capture critical sensor data. Our solutions include robust signal conditioning and powerful data analysis tools for performance validation and diagnostics.',
    image: image2,
  },
  {
    title: 'End-of-Line (EOL) Testing',
    content: 'Create fully automated test stations for comprehensive quality checks on every vehicle and component at the end of the assembly line, ensuring consistent quality and traceability.',
    image: image3,
  },
  {
    title: 'Battery Management System (BMS) Testing',
    content: 'Ensure the safety and reliability of your electric vehicles (EVs) with our specialized BMS testing solutions. We test critical functions like cell balancing and thermal management under various operating conditions.',
    image: image4,
  },
  {
    title: 'CAN/LIN/FlexRay Communication',
    content: 'Validate the complex communication networks in modern vehicles. Our tools monitor, simulate, and analyze data traffic on CAN, LIN, and FlexRay buses to ensure data integrity and system reliability.',
    image: image5,
  },
  {
    title: 'Test Bench Automation',
    content: 'Automate your R&D and manufacturing test benches to improve efficiency and reduce human error. We design custom software to control test sequences and generate detailed reports automatically.',
    image: image6,
  },
  {
    title: 'In-Vehicle Data Logging',
    content: 'Capture and log real-world vehicle data for fleet management and road testing. Our robust solutions provide continuous data collection and remote monitoring capabilities for real-time analysis.',
    image: image7,
  },
  {
    title: 'ADAS and Sensor Fusion Testing',
    content: 'Test and validate advanced driver-assistance systems (ADAS) by emulating sensor inputs like radar and cameras. We ensure the reliability of sensor fusion algorithms for features like adaptive cruise control.',
    image: image8,
  },
];

const leftApplications = applications.slice(0, 4);
const rightApplications = applications.slice(4);

const AutomotiveKeyApplications = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    gsap.from('.automotive-app-title', {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: 'power2.out',
    });
    gsap.from('.automotive-app-details-center', {
      opacity: 0,
      y: 100,
      duration: 1.2,
      ease: 'power2.out',
      delay: 0.3,
    });
    gsap.from('.automotive-app-item', {
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
      gsap.killTweensOf('.automotive-app-title, .automotive-app-details-center, .automotive-app-item');
    };
  }, []);

  const handleHeadingClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <section className="automotive-app-showcase">
      <div className="content-panel">
        <h2 className="automotive-app-title fade-in">Applications</h2>
        <div className="automotive-app-grid">
          <div className="automotive-app-menu-left">
            {leftApplications.map((app, index) => (
              <div
                key={index}
                className={`automotive-app-item fade-in ${activeIndex === index ? 'active' : ''}`}
                onClick={() => handleHeadingClick(index)}
                tabIndex={0}
                role="button"
                aria-label={`Select ${app.title}`}
              >
                <span className="automotive-dot-marker"></span>
                <p className="automotive-item-label">{app.title}</p>
              </div>
            ))}
          </div>
          <div className="automotive-app-details-center">
            <div className="automotive-detail-layout">
              <div className="automotive-image-display">
                <img src={applications[activeIndex].image} alt={applications[activeIndex].title} className="automotive-detail-image" />
              </div>
              <div className="automotive-text-display">
                <p className="automotive-detail-text">{applications[activeIndex].content}</p>
              </div>
            </div>
          </div>
          <div className="automotive-app-menu-right">
            {rightApplications.map((app, index) => (
              <div
                key={index + leftApplications.length}
                className={`automotive-app-item fade-in ${activeIndex === index + leftApplications.length ? 'active' : ''}`}
                onClick={() => handleHeadingClick(index + leftApplications.length)}
                tabIndex={0}
                role="button"
                aria-label={`Select ${app.title}`}
              >
                <span className="automotive-dot-marker"></span>
                <p className="automotive-item-label">{app.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AutomotiveKeyApplications;