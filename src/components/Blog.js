import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Blog.css';

const Blog = () => {
    // New data for the four specific blog posts
    const posts = [
        {
            id: 1,
            slug: 'radar-echo-simulator',
            title: 'Radar Echo Simulator with FPGA',
            excerpt: 'How we build high-fidelity radar echo simulators on a PXI platform using NI-LabVIEW FPGA for testing autonomous systems in a controlled setting.',
            author: 'A. Kumar',
            date: 'July 1, 2024',
            tags: ['Radar', 'FPGA', 'NI LabVIEW', 'Simulation'],
        },
        {
            id: 2,
            slug: 'deep-learning-labview',
            title: 'Deep Learning with LabVIEW',
            excerpt: 'Using the Deep Learning Toolkit for LabVIEW to build and deploy neural networks for image recognition and predictive analytics in manufacturing.',
            author: 'B. Sharma',
            date: 'June 25, 2024',
            tags: ['Deep Learning', 'LabVIEW', 'AI', 'Manufacturing'],
        },
        {
            id: 3,
            slug: 'telemetry-systems',
            title: 'Telemetry Systems for Autonomous Driving',
            excerpt: 'Developing robust telemetry systems that provide real-time data for autonomous vehicles, ensuring safety and performance in urban environments.',
            author: 'C. Patel',
            date: 'June 18, 2024',
            tags: ['Telemetry', 'Autonomous Vehicles', 'Data Acquisition'],
        },
        {
            id: 4,
            slug: 'checkout-systems',
            title: 'Vision-Based Automated Checkout',
            excerpt: 'Designing and deploying automated checkout systems using vision-based technology to reduce friction and improve accuracy in modern retail.',
            author: 'D. Gupta',
            date: 'June 10, 2024',
            tags: ['Vision Systems', 'Retail', 'Automation', 'Embedded Systems'],
        },
    ];

    return (
        <main className="blog-page">
            {/* Hero Section */}
            <section className="hero-block">
                <div className="hero-content">
                    <h1 className="hero-title animate-reveal">Our Recent Blogs</h1>
                    <p className="hero-subtext animate-reveal" style={{ animationDelay: '0.2s' }}>
                        Stay up-to-date with our latest insights on cutting-edge technologies and project innovations.
                    </p>
                </div>
            </section>

            {/* Blog Posts Section - Grid Layout */}
            <section className="blog-posts-section">
                <div className="content-wrap">
                    <div className="blog-posts-grid">
                        {posts.map((post) => (
                            <div className="blog-card" key={post.id}>
                                <div className="blog-content">
                                    <h3>{post.title}</h3>
                                    <p className="blog-card-meta">
                                        By {post.author} | {post.date}
                                    </p>
                                    <p>{post.excerpt}</p>
                                    <div className="blog-card-tags">
                                        {post.tags.map((tag, tagIndex) => (
                                            <span className="blog-tag" key={tagIndex}>{tag}</span>
                                        ))}
                                    </div>
                                    <Link
                                        to={`/blog/${post.slug}`}
                                        className="blog-read-more"
                                        aria-label={`Read more about ${post.title}`}
                                    >
                                        Read More
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="contact-section">
                <div className="content-wrap">
                    <h2 className="section-title animate-reveal">Grow with Our Startup</h2>
                    <div className="contact-content glass-card">
                        <p className="section-text animate-reveal" style={{ animationDelay: '0.2s' }}>
                            Get the latest on LabVIEW automation, deep learning, and pyrotechnic innovations, or partner with us to transform your automotive, aerospace, or manufacturing project.
                        </p>
                        <Link to="/contact" className="primary-action animate-pulse">Let’s Collaborate</Link>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Blog;