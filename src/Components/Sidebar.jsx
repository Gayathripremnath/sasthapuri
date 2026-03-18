import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = ({ isOpen, onClose }) => {

  return (
    <div className={`sidebar-overlay ${isOpen ? 'open' : ''}`} onClick={onClose}>
      <div className={`sidebar ${isOpen ? 'open' : ''}`} onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose} aria-label="Close sidebar">
          ×
        </button>

        <ul className="sidebar-links">
          <li><Link to="/" onClick={onClose}>HOME</Link></li>
          <li><Link to="/about" onClick={onClose}>ABOUT US</Link></li>
          <li><Link to="/restaurant" onClick={onClose}>RESTAURANT</Link></li>
          <li><Link to="/services" onClick={onClose}>SERVICES</Link></li>
          <li><Link to="/rooms" onClick={onClose}>ROOMS</Link></li>
          <li><Link to="/reservation" onClick={onClose}>RESERVATION</Link></li>
          <li><Link to="/gallery" onClick={onClose}>GALLERY</Link></li>
          <li><Link to="/attractions" onClick={onClose}>ATTRACTIONS</Link></li>
          <li><Link to="/contact" onClick={onClose}>CONTACT</Link></li>
        </ul>

        <div className="sidebar-reservation">
          <a className="reservation-call" href="tel:+914952723281" aria-label="Call reservation">
            ☎
          </a>
          <div className="reservation-text">
            <span className="reservation-label">RESERVATION</span>
            <a className="reservation-number" href="tel:+914952723281">
              +91-4952-2723281 (5 LINES)
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
