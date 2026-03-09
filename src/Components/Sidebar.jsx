import React, { useEffect, useState } from 'react';
import './Sidebar.css';

const Sidebar = ({ isOpen, onClose }) => {
    const [isRoomsOpen, setIsRoomsOpen] = useState(false);

    useEffect(() => {
        if (!isOpen) {
            setIsRoomsOpen(false);
        }
    }, [isOpen]);

    const toggleRooms = () => {
        setIsRoomsOpen((prev) => !prev);
    };

    return (
        <div className={`sidebar-overlay ${isOpen ? 'open' : ''}`} onClick={onClose}>
            <div className={`sidebar ${isOpen ? 'open' : ''}`} onClick={(e) => e.stopPropagation()}>
                <button className="close-btn" onClick={onClose} aria-label="Close sidebar">×</button>
                <ul className="sidebar-links">
                    <li><a href="#home" onClick={onClose}>HOME</a></li>
                    <li><a href="#restaurant" onClick={onClose}>RESTAURANT</a></li>
                    <li className={`dropdown ${isRoomsOpen ? 'active' : ''}`}>
                        <button
                            type="button"
                            className="dropdown-toggle"
                            onClick={toggleRooms}
                            aria-expanded={isRoomsOpen}
                            aria-controls="rooms-submenu"
                        >
                            <span>ROOMS</span>
                            <span>{isRoomsOpen ? '▴' : '▾'}</span>
                        </button>
                        <ul id="rooms-submenu" className={`submenu ${isRoomsOpen ? 'show' : ''}`}>
                            <li><a href="#room1" onClick={onClose}>Room Name 01</a></li>
                            <li><a href="#room2" onClick={onClose}>Room Name 02</a></li>
                            <li><a href="#room3" onClick={onClose}>Room Name 03</a></li>
                        </ul>
                    </li>
                    <li><a href="#reservation" onClick={onClose}>RESERVATION</a></li>
                    <li><a href="#gallery" onClick={onClose}>GALLERY</a></li>
                    <li><a href="#attractions" onClick={onClose}>ATTRACTIONS</a></li>
                    <li><a href="#contact" onClick={onClose}>CONTACT</a></li>
                </ul>
                <div className="sidebar-footer">
                    <p>© 2026 Hotel Sasthapuri</p>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
