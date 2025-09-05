import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faSearch, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import '../styles/Header.css';
import logo from '../assets/logo.png';

const Header = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [searchActive, setSearchActive] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [servicesOpen, setServicesOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false); // New state for Solutions dropdown
  const headerRef = useRef(null);
  const searchRef = useRef(null);
  const servicesRef = useRef(null);
  const solutionsRef = useRef(null); // New ref for Solutions dropdown
  const navigate = useNavigate();

  const pages = [
    { name: 'Company', path: '/company' },
    { name: 'Blog', path: '/portfolio' },
    { name: 'Start Now', path: '/start-now' },
    { name: 'Aerospace Tech', path: '/aerospace-tech' },
    { name: 'Aerospace and Defense', path: '/aerospace-defense' },
    { name: 'Automotive', path: '/automotive' },
    { name: 'Biomedical & Pharmaceutical', path: '/biomedical-and-pharma' },
    { name: 'Semiconductor', path: '/semiconductor' },
    { name: 'Oil, Gas, Chemical and Power', path: '/oil-gas-chemical-power' },
    { name: 'Pyro Firing Setup Tool', path: '/products/pyro-firing-setup-tool' },
    { name: 'Deep Learning', path: '/labview/deep-learning' },
    // Solutions added to search
    { name: 'Radar Echo Simulator', path: '/radarecho' },
    { name: 'Checkout Systems', path: '/checkoutsystems' },
    { name: 'Telemetry Systems', path: '/telemetry' },
    { name: 'Deeplearning', path: '/deeplearning' },
    { name: 'Hardware Design', path: '/hardwaredesign' },
    { name: 'Embedded System and Validation', path: '/embeddedsystem' },
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        (searchRef.current && !searchRef.current.contains(event.target)) &&
        (servicesRef.current && !servicesRef.current.contains(event.target)) &&
        (solutionsRef.current && !solutionsRef.current.contains(event.target)) &&
        (!headerRef.current || !headerRef.current.contains(event.target))
      ) {
        setSearchActive(false);
        setSearchQuery('');
        setServicesOpen(false);
        setSolutionsOpen(false); // Close Solutions dropdown
        setMobileNavOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      headerRef.current.classList.toggle('scrolled', window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileNav = () => {
    setMobileNavOpen(!mobileNavOpen);
    setSearchActive(false);
    setSearchQuery('');
    setServicesOpen(false);
    setSolutionsOpen(false); // Close Solutions dropdown
  };

  const scrollToTopAndClose = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setMobileNavOpen(false);
    setSearchActive(false);
    setServicesOpen(false);
    setSolutionsOpen(false); // Close Solutions dropdown
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      const matchedPage = pages.find((page) =>
        page.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      if (matchedPage) {
        navigate(matchedPage.path);
        scrollToTopAndClose();
      } else {
        alert('Page not found. Try another search term.');
      }
    }
  };

  return (
    <header className="site-header animate-reveal" ref={headerRef}>
      <div className="header-content">
        <div className="site-logo logo-container">
          <Link to="/" onClick={scrollToTopAndClose}>
            <img src={logo} alt="VI Web Sync Logo" className="logo-image" />
          </Link>
          <div className="logo-text-area"></div>
        </div>

        <nav className="nav-desktop">
          <ul className="nav-items">
            <li
              className={`nav-item dropdown ${servicesOpen ? 'open' : ''}`}
              ref={servicesRef}
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button className="nav-link dropdown-toggle" aria-expanded={servicesOpen}>
                Services <FontAwesomeIcon icon={faChevronDown} className="dropdown-icon" />
              </button>
              <div className="dropdown-content">
                <Link to="/aerospace-defense" className="dropdown-link" onClick={scrollToTopAndClose}>
                  Aerospace and Defense
                </Link>
                <Link to="/automotive" className="dropdown-link" onClick={scrollToTopAndClose}>
                  Automotive
                </Link>
                <Link to="/semiconductor" className="dropdown-link" onClick={scrollToTopAndClose}>
                  Semiconductor
                </Link>
                <Link to="/oil-gas-chemical-power" className="dropdown-link" onClick={scrollToTopAndClose}>
                  Oil, Gas, Chemical and Power
                </Link>
                <Link to="/biomedical-and-pharma" className="dropdown-link" onClick={scrollToTopAndClose}>
                  Biomedical & Pharmaceutical
                </Link>
                <Link to="/labview/deep-learning" className="dropdown-link" onClick={scrollToTopAndClose}>
                  Deep Learning
                </Link>
              </div>
            </li>
            <li
              className={`nav-item dropdown ${solutionsOpen ? 'open' : ''}`}
              ref={solutionsRef}
              onMouseEnter={() => setSolutionsOpen(true)}
              onMouseLeave={() => setSolutionsOpen(false)}
            >
              <button className="nav-link dropdown-toggle" aria-expanded={solutionsOpen}>
                Solutions <FontAwesomeIcon icon={faChevronDown} className="dropdown-icon" />
              </button>
              <div className="dropdown-content">
                <Link to="/radarecho" className="dropdown-link" onClick={scrollToTopAndClose}>
                 Radar Echo Simulator
                </Link>
                <Link to="/checkoutsystems" className="dropdown-link" onClick={scrollToTopAndClose}>
                 Checkout Systems
                </Link>
                <Link to="/telemetry" className="dropdown-link" onClick={scrollToTopAndClose}>
                 Telemetry Systems  
                </Link>
                <Link to="/deeplearning" className="dropdown-link" onClick={scrollToTopAndClose}>
                 DeepLearning Solutions
                </Link>
                <Link to="/hardwaredesign" className="dropdown-link" onClick={scrollToTopAndClose}>
                 Hardware Design
                </Link>
                <Link to="/embeddedsystem" className="dropdown-link" onClick={scrollToTopAndClose}>
                 Embedded System and Validation
                </Link>
                
              </div>
            </li>
            <li className="nav-item">
              <Link to="/company" className="nav-link" onClick={scrollToTopAndClose}>
                Company
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/portfolio" className="nav-link" onClick={scrollToTopAndClose}>
                Blog
              </Link>
            </li>
            <li className="nav-item" ref={searchRef}>
              <button
                className="nav-link search-toggle"
                onClick={() => setSearchActive(!searchActive)}
                aria-label="Toggle search bar"
                aria-expanded={searchActive}
              >
                <FontAwesomeIcon icon={faSearch} />
              </button>
              {searchActive && (
                <div className="search-box">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search pages..."
                    className="search-field"
                    autoFocus
                  />
                  <button onClick={handleSearch} className="search-submit" aria-label="Submit search">
                    <FontAwesomeIcon icon={faSearch} />
                  </button>
                </div>
              )}
            </li>
          </ul>
        </nav>

        <Link to="/start-now" className="action-button" onClick={scrollToTopAndClose}>
          Start Now
        </Link>

        <button
          className="mobile-nav-toggle"
          onClick={toggleMobileNav}
          aria-label="Toggle navigation menu"
          aria-expanded={mobileNavOpen}
        >
          <FontAwesomeIcon icon={mobileNavOpen ? faTimes : faBars} />
        </button>

        <div className={`mobile-nav-panel ${mobileNavOpen ? 'open' : ''}`}>
          <div className="mobile-nav-content">
            <div className="mobile-dropdown-section">
              <button
                className="mobile-dropdown-toggle"
                onClick={() => setServicesOpen(!servicesOpen)}
                aria-expanded={servicesOpen}
              >
                Services <FontAwesomeIcon icon={faChevronDown} className={`fa-chevron-down ${servicesOpen ? 'rotate' : ''}`} />
              </button>
              <div className={`mobile-dropdown-content ${servicesOpen ? 'open' : ''}`}>
                <Link to="/aerospace-defense" className="mobile-dropdown-link" onClick={toggleMobileNav}>
                  Aerospace and Defense
                </Link>
                <Link to="/automotive" className="mobile-dropdown-link" onClick={toggleMobileNav}>
                  Automotive
                </Link>
                <Link to="/semiconductor" className="mobile-dropdown-link" onClick={toggleMobileNav}>
                  Semiconductor
                </Link>
                <Link to="/oil-gas-chemical-power" className="mobile-dropdown-link" onClick={toggleMobileNav}>
                  Oil, Gas, Chemical and Power
                </Link>
                <Link to="/biomedical-and-pharma" className="mobile-dropdown-link" onClick={toggleMobileNav}>
                  Biomedical & Pharmaceutical
                </Link>
                <Link to="/labview/deep-learning" className="mobile-dropdown-link" onClick={toggleMobileNav}>
                  Deep Learning
                </Link>
              </div>
            </div>
            <div className="mobile-dropdown-section">
              <button
                className="mobile-dropdown-toggle"
                onClick={() => setSolutionsOpen(!solutionsOpen)}
                aria-expanded={solutionsOpen}
              >
                Solutions <FontAwesomeIcon icon={faChevronDown} className={`fa-chevron-down ${solutionsOpen ? 'rotate' : ''}`} />
              </button>
              <div className={`mobile-dropdown-content ${solutionsOpen ? 'open' : ''}`}>
                <Link to="/radarecho" className="dropdown-link" onClick={scrollToTopAndClose}>
                 Radar Echo Simulator
                </Link>
                <Link to="/checkoutsystems" className="mobile-dropdown-link" onClick={scrollToTopAndClose}>
                 Checkout Systems
                </Link>
                <Link to="/telemetry" className="mobile-dropdown-link" onClick={scrollToTopAndClose}>
                 Telemetry Systems  
                </Link>
                <Link to="/deeplearning" className="mobile-dropdown-link" onClick={scrollToTopAndClose}>
                 DeepLearning Solutions
                </Link>
                <Link to="/hardwaredesign" className="mobile-dropdown-link" onClick={scrollToTopAndClose}>
                 Hardware Design
                </Link>
                <Link to="/embeddedsystem" className="mobile-dropdown-link" onClick={scrollToTopAndClose}>
                 Embedded System and Validation
                </Link>
              </div>
            </div>
            <Link to="/company" className="mobile-nav-link" onClick={toggleMobileNav}>
              Company
            </Link>
            <Link to="/portfolio" className="mobile-nav-link" onClick={toggleMobileNav}>
              Blog
            </Link>
            <div className="mobile-search-area">
              <div className="mobile-search-box">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search pages..."
                  className="mobile-search-field"
                />
                <button onClick={handleSearch} className="mobile-search-toggle" aria-label="Submit search">
                  <FontAwesomeIcon icon={faSearch} />
                </button>
              </div>
            </div>
            <Link to="/start-now" className="mobile-action-button" onClick={toggleMobileNav}>
              Start Now
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;