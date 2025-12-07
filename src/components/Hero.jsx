import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const Hero = () => {
    const el = useRef(null);

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ['Software Engineer', 'Content Creator', 'YouTuber', 'Freelancer'],
            typeSpeed: 100,
            backSpeed: 50,
            backDelay: 2000,
            loop: true
        });

        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <section id="hero" className="d-flex flex-column justify-content-center align-items-center" style={{
            backgroundImage: 'url("/assets/img/Untitled project-Layer 1 (1).png")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '100vh',
            width: '100%',
            position: 'relative'
        }}>
            <div className="hero-container" data-aos="fade-in">
                <h1>Mohammad Hozhabri</h1>
                <p>I'm <span ref={el} style={{ color: '#fff', borderBottom: '3px solid #149ddd', paddingBottom: '6px' }}></span></p>
            </div>
        </section>
    );
};

export default Hero;
