import React, { useState, useEffect } from 'react';
import { FaTimes, FaCalendarAlt, FaUserFriends, FaBed } from 'react-icons/fa';
import './BookingModal.css';

const BookingModal = ({ isOpen, onClose, initialRoom = 'Junior Suite' }) => {
  const [formData, setFormData] = useState({
    checkIn: '',
    checkOut: '',
    adults: '1',
    children: '0',
    roomType: initialRoom,
    name: '',
    email: '',
    phone: '',
    specialRequests: ''
  });

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setFormData(prev => ({ ...prev, roomType: initialRoom || 'Junior Suite' }));
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, initialRoom]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you! Your reservation request has been submitted. Our team will contact you shortly.');
    console.log('Reservation Data:', formData);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="bm-overlay" onClick={onClose}>
      <div className="bm-modal anim-scale anim-show" onClick={(e) => e.stopPropagation()}>
        <button className="bm-close" onClick={onClose} aria-label="Close modal">
          <FaTimes />
        </button>
        
        <div className="bm-header">
          <div className="bm-stars">★★★★★</div>
          <span className="bm-subtitle">Luxury Stay</span>
          <h2 className="bm-title">Book Your Room</h2>
        </div>

        <form className="bm-form" onSubmit={handleSubmit}>
          <div className="bm-form-grid">
            {/* Guest Info */}
            <div className="bm-group full">
              <label>Full Name</label>
              <input 
                type="text" 
                name="name" 
                placeholder="Enter your name" 
                required 
                value={formData.name} 
                onChange={handleChange} 
              />
            </div>

            <div className="bm-group">
              <label>Email Address</label>
              <input 
                type="email" 
                name="email" 
                placeholder="Enter your email" 
                required 
                value={formData.email} 
                onChange={handleChange} 
              />
            </div>

            <div className="bm-group">
              <label>Phone Number</label>
              <input 
                type="tel" 
                name="phone" 
                placeholder="Enter phone number" 
                required 
                value={formData.phone} 
                onChange={handleChange} 
              />
            </div>

            {/* Stay Details */}
            <div className="bm-group">
              <label><FaCalendarAlt /> Check-In</label>
              <input 
                type="date" 
                name="checkIn" 
                required 
                value={formData.checkIn} 
                onChange={handleChange} 
              />
            </div>

            <div className="bm-group">
              <label><FaCalendarAlt /> Check-Out</label>
              <input 
                type="date" 
                name="checkOut" 
                required 
                value={formData.checkOut} 
                onChange={handleChange} 
              />
            </div>

            <div className="bm-group">
              <label><FaBed /> Room Type</label>
              <select name="roomType" value={formData.roomType} onChange={handleChange}>
                <option value="Junior Suite">Junior Suite</option>
                <option value="Family Room">Family Room</option>
                <option value="Double Room">Double Room</option>
                <option value="Executive Room">Executive Room</option>
                <option value="Standard Deluxe">Standard Deluxe</option>
                <option value="Standard Room">Standard Room</option>
              </select>
            </div>

            <div className="bm-group">
              <label><FaUserFriends /> Guests</label>
              <div className="bm-select-row">
                <select name="adults" value={formData.adults} onChange={handleChange}>
                  <option value="1">1 Adult</option>
                  <option value="2">2 Adults</option>
                  <option value="3">3 Adults</option>
                  <option value="4">4 Adults</option>
                </select>
                <select name="children" value={formData.children} onChange={handleChange}>
                  <option value="0">0 Children</option>
                  <option value="1">1 Child</option>
                  <option value="2">2 Children</option>
                </select>
              </div>
            </div>

            <div className="bm-group full">
              <label>Special Requests</label>
              <textarea 
                name="specialRequests" 
                rows="2" 
                placeholder="Any special requirements?" 
                value={formData.specialRequests} 
                onChange={handleChange}
              ></textarea>
            </div>
          </div>

          <button type="submit" className="bm-submit">
            Confirm Booking
          </button>
        </form>

        <div className="bm-footer">
          <p>Or call us directly: <a href="tel:+914952723281">+91 495 2723281</a></p>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
