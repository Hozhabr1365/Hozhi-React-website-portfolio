import React, { useState } from 'react';
import { FaHome, FaUser, FaFileAlt, FaBook, FaServer, FaEnvelope, FaBars, FaTimes, FaYoutube, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

const Layout = ({ children }) => {
    const [mobileNavActive, setMobileNavActive] = useState(false);

    const toggleMobileNav = () => {
        setMobileNavActive(!mobileNavActive);
    };

    return (
        <>
            <i
                className={`bi mobile-nav-toggle d-xl-none ${mobileNavActive ? 'bi-x' : 'bi-list'}`}
                onClick={toggleMobileNav}
                style={{
                    position: 'fixed',
                    right: '15px',
                    top: '15px',
                    zIndex: 9999,
                    fontSize: '24px',
                    cursor: 'pointer',
                    color: '#fff',
                    display: 'none' // Hidden by default, show in media query
                }}
            >
                {mobileNavActive ? <FaTimes /> : <FaBars />}
            </i>

            <header id="header" className={mobileNavActive ? 'mobile-nav-active' : ''}>
                <div className="d-flex flex-column">
                    <div className="profile">
                        <img src="/assets/img/Untitled project-Layer 1.png" alt="" className="img-fluid rounded-circle" />
                        <h1 className="text-light"><a href="index.html">Mohammad Hozhabri</a></h1>
                        <div className="social-links mt-3 text-center">
                            <a href="https://www.youtube.com/@HozhiLearn" className="youtube"><FaYoutube /></a>
                            <a href="#" className="instagram"><FaInstagram /></a>
                            <a href="#" className="linkedin"><FaLinkedin /></a>
                        </div>
                    </div>

                    <nav id="navbar" className="nav-menu navbar">
                        <ul>
                            <li><a href="#hero" className="nav-link scrollto active"><FaHome /> <span>Home</span></a></li>
                            <li><a href="#about" className="nav-link scrollto"><FaUser /> <span>About</span></a></li>
                            <li><a href="#resume" className="nav-link scrollto"><FaFileAlt /> <span>Resume</span></a></li>
                            <li><a href="#portfolio" className="nav-link scrollto"><FaBook /> <span>Portfolio</span></a></li>
                            <li><a href="#services" className="nav-link scrollto"><FaServer /> <span>Services</span></a></li>
                            <li><a href="#contact" className="nav-link scrollto"><FaEnvelope /> <span>Contact</span></a></li>
                        </ul>
                    </nav>
                </div>
            </header>

            {/* Mobile Toggle Button for small screens (CSS will handle display) */}
            <button
                className="mobile-nav-toggle d-xl-none"
                onClick={toggleMobileNav}
                style={{
                    position: 'fixed',
                    right: 15,
                    top: 15,
                    zIndex: 9999,
                    border: 'none',
                    background: 'none',
                    color: 'white',
                    fontSize: '24px'
                }}
            >
                {mobileNavActive ? <FaTimes /> : <FaBars />}
            </button>

            {children}
        </>
    );
};

export default Layout;
