import { Link } from 'react-router-dom';
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
          <Link to="/">Home</Link>
          <Link to="/rooms">Rooms &amp; Suites</Link>
          <Link to="/restaurant">Restaurant</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/about">About Hotel</Link>
          <Link to="/contact">Contact</Link>
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
        <p >© Copyright 2025 by  </p>
        <a href="/">Genova Technology Pvt Ltd</a>
      </div>
    </footer>
  );
};

export default Footer;
