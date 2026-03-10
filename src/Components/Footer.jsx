import React from 'react';
import './Footer.css';
import { Instagram, Twitter, Youtube, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="site-footer" id="contact">
      <div className="footer-grid">
        <div className="footer-about">
          <h3>About Hotel</h3>
          <p>
            Sri. C. Karunakaran Nair, a Calicut based leading businessman in Hotel industry,
            established Sasthapuri in 1978. HOSPITALITY is the keyword for us, because we do
            everything with YOU in mind.
          </p>
        </div>

        <div className="footer-links">
          <h3>Explore</h3>
          <a href="#home">Home</a>
          <a href="#rooms">Rooms &amp; Suites</a>
          <a href="#restaurant">Restaurant</a>
          <a href="#gallery">Gallery</a>
          <a href="#promo">About Hotel</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="footer-contact">
          <h3>Contact</h3>
          <p>M.M.Ali Road, Palayam, Calicut - 673002,<br />Kerala, South India</p>
          <a className="footer-phone" href="tel:+914952723281">+91 - 495-2723281 (5 LINES)</a>
          <a className="footer-mail" href="mailto:sasthapuri@gmail.com">sasthapuri@gmail.com</a>
          <div className="footer-social" aria-label="Social links">
            
<a href="#"><Instagram size={20} /></a>
<a href="#"><Twitter size={20} /></a>
<a href="#"><Youtube size={20} /></a>
<a href="#"><Facebook size={20} /></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© Copyright 2025 by Genova Technologies Pvt Ltd</span>
      </div>
    </footer>
  );
};

export default Footer;
