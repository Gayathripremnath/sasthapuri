import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = ({ isOpen, onClose }) => {
  const [isRoomsOpen, setIsRoomsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      setIsRoomsOpen(false);
    }
  }, [isOpen]);

  const toggleRooms = () => setIsRoomsOpen((prev) => !prev);

  return (
    <div className={`sidebar-overlay ${isOpen ? 'open' : ''}`} onClick={onClose}>
      <div className={`sidebar ${isOpen ? 'open' : ''}`} onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose} aria-label="Close sidebar">
          ×
        </button>

        <ul className="sidebar-links">
          <li><a href="/" onClick={onClose}>HOME</a></li>
          <li><a href="/restaurant" onClick={onClose}>RESTAURANT</a></li>
          <li><Link to="/services" onClick={onClose}>SERVICES</Link></li>
          <li className={`dropdown ${isRoomsOpen ? 'active' : ''}`}>
            <button
              type="button"
              className="dropdown-toggle"
              onClick={toggleRooms} aria-expanded={isRoomsOpen} aria-controls="rooms-submenu">
              <span>ROOMS</span>
              <span>{isRoomsOpen ? '▴' : '▾'}</span>
            </button>
            <ul id="rooms-submenu" className={`submenu ${isRoomsOpen ? 'show' : ''}`}>
              <li><Link to="/room-1" onClick={onClose}>Room 01</Link></li>
              <li><Link to="/room-2" onClick={onClose}>Room 02</Link></li>
              <li><Link to="/room-3" onClick={onClose}>Room 03</Link></li>
            </ul>
          </li>
          <li><Link to="/reservation" onClick={onClose}>RESERVATION</Link></li>
          <li><a href="/gallery" onClick={onClose}>GALLERY</a></li>
          <li><a href="/attractions" onClick={onClose}>ATTRACTIONS</a></li>
          <li><Link to="/about" onClick={onClose}>ABOUT US</Link></li>
          <li><a href="/contact" onClick={onClose}>CONTACT</a></li>
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
