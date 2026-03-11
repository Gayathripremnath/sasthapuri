import React, { useState, useEffect } from 'react';
import './Navbar.css';
import logo from '../assets/logo.png';

const Navbar = ({ onMenuClick }) => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="logo-container">
                <img src={logo} alt="Hotel Sasthapuri" className="navbar-logo" />
            </div>
            <button className="menu-toggle" onClick={onMenuClick}>
                <div className="hamburger">
                    <span className={scrolled ? 'dark' : ''}></span>
                    <span className={scrolled ? 'dark' : ''}></span>
                    <span className={scrolled ? 'dark' : ''}></span>
                </div>
            </button>
        </nav>
    );
};

export default Navbar;
