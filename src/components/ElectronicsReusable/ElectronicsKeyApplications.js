import React, { useState, useEffect } from 'react';
import '../../styles/Semiconductor.css';

// Import local images from the assets folder. Use placeholders for now.
import image1 from '../../assets/HILtesting.png';
import image2 from '../../assets/DAQ.png';
import image3 from '../../assets/Eoltest.png';
import image4 from '../../assets/bms-testing.jpg';
import image5 from '../../assets/Can lin.png';

const allApplications = [
    {
        title: 'Real-Time Data Acquisition and Processing',
        content: 'Implement high-speed systems to acquire, process, and analyze sensor data in real-time, crucial for mission-critical applications in a variety of industries.',
        image: image1
    },
    {
        title: 'Embedded System Control',
        content: 'Design and program embedded systems for precise control of devices, from simple consumer electronics to complex industrial machinery.',
        image: image2
    },
    {
        title: 'FPGA-Based Applications',
        content: 'Utilize Field-Programmable Gate Arrays (FPGAs) to create custom hardware and accelerate computationally intensive tasks, offering high performance and flexibility.',
        image: image3
    },
    {
        title: 'Edge Computing and Smart Devices',
        content: 'Develop intelligent devices that process data locally at the source, reducing latency and enabling immediate decision-making for IoT and automation.',
        image: image4
    },
    {
        title: 'State Machine Controllers',
        content: 'Engineer robust state machine controllers to manage sequential logic, ensuring predictable and reliable operation in complex digital circuits.',
        image: image5
    },
    {
        title: 'Industrial Machine Monitoring',
        content: 'Create monitoring solutions to track the health and performance of industrial machines, enabling predictive maintenance and improving operational efficiency.',
        image: image1
    },
    {
        title: 'Autonomous Vehicle Subsystems',
        content: 'Design and test the electronic subsystems for autonomous vehicles, including sensor fusion, control modules, and communication networks.',
        image: image2
    },
    {
        title: 'Medical Embedded Devices',
        content: 'Develop compact and reliable embedded systems for medical devices, ensuring data accuracy and safety for patient monitoring and diagnostics.',
        image: image3
    },
    {
        title: 'Energy and Power System Monitoring',
        content: 'Implement smart monitoring solutions for power grids and energy systems, providing real-time data for efficient management and optimization.',
        image: image4
    },
    {
        title: 'Embedded Vision Systems',
        content: 'Integrate vision systems into embedded devices for applications like object detection, facial recognition, and quality control in manufacturing.',
        image: image5
    },
];

const leftApplications = allApplications.slice(0, 5);
const rightApplications = allApplications.slice(5);

const KeyApplications = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % allApplications.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    const handleHeadingClick = (index) => {
        setActiveIndex(index);
    };

    return (
        <section className="key-applications-section">
            <div className="content-wrap">
                <h2 className="section-title animate-reveal">Semiconductor & Electronics Solutions</h2>
                <div className="applications-container">
                    {/* Left-side titles */}
                    <div className="application-list-left animate-reveal">
                        {leftApplications.map((app, index) => (
                            <div
                                key={index}
                                className={`application-heading ${activeIndex === index ? 'active' : ''}`}
                                onClick={() => handleHeadingClick(index)}
                            >
                                <span className="bullet-point"></span>
                                <p className="app-title">{app.title}</p>
                            </div>
                        ))}
                    </div>

                    {/* Central content box */}
                    <div className="application-details animate-reveal">
                        <div className="application-content-flex">
                            <div className="image-container">
                                <img src={allApplications[activeIndex].image} alt={allApplications[activeIndex].title} className="application-image" />
                            </div>
                            <div className="content-container">
                                <p className="application-content-text">{allApplications[activeIndex].content}</p>
                            </div>
                        </div>
                    </div>

                    {/* Right-side titles */}
                    <div className="application-list-right animate-reveal">
                        {rightApplications.map((app, index) => (
                            <div
                                key={index + leftApplications.length}
                                className={`application-heading ${activeIndex === index + leftApplications.length ? 'active' : ''}`}
                                onClick={() => handleHeadingClick(index + leftApplications.length)}
                            >
                                <span className="bullet-point"></span>
                                <p className="app-title">{app.title}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default KeyApplications;