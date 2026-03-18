import React, { useState } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import './Contact.css';
import bannerImg from '../assets/slider/5.jpg';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState({ type: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validation: Trim all values and check if any are empty
    const trimmedData = {
      name: formData.name.trim(),
      email: formData.email.trim(),
      phone: formData.phone.trim(),
      subject: formData.subject.trim(),
      message: formData.message.trim()
    };

    if (!trimmedData.name || !trimmedData.email || !trimmedData.phone || !trimmedData.subject || !trimmedData.message) {
      setStatus({ type: 'error', message: 'Please fill out all fields with valid information.' });
      return;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimmedData.email)) {
      setStatus({ type: 'error', message: 'Please enter a valid email address.' });
      return;
    }

    // Success simulation
    console.log('Form Submitted:', trimmedData);
    setStatus({ type: 'success', message: 'Your message was sent successfully. We will get back to you soon!' });
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  return (
    <div className="contact-page">
      {/* Header Banner */}
      <div 
        className="contact-banner" 
        style={{ backgroundImage: `url(${bannerImg})` }}
      >
        <div className="container">
          <h5>Get in touch</h5>
          <h1 style={{color:"#aa8453"}}>Contact Us</h1>
        </div>
      </div>

      {/* Contact Section */}
      <section className="contact-section">
        <div className="contact-container">
          {/* Info Side */}
          <div className="contact-info">
            <h3>Hotel Sasthapuri</h3>
            <p>
              HOSPITALITY is the keyword for us, because we do everything with YOU in mind.
              Our dedicated team is here to assist you with any inquiries and ensure your stay is comfortable and memorable.
            </p>
            
            <div className="reservation-item">
              <div className="icon"><Phone size={32} strokeWidth={1.5} /></div>
              <div className="text-cont">
                <p>Reservation</p> 
                <a href="tel:+914952723281">+91 - 495-2723281 (5 LINES)</a>
              </div>
            </div>

            <div className="reservation-item">
              <div className="icon"><Mail size={32} strokeWidth={1.5} /></div>
              <div className="text-cont">
                <p>Email Info</p> 
                <a href="mailto:sasthapuri@gmail.com">sasthapuri@gmail.com</a>
              </div>
            </div>

            <div className="reservation-item">
              <div className="icon"><MapPin size={32} strokeWidth={1.5} /></div>
              <div className="text-cont">
                <p>Address</p> 
                <span>M.M.Ali Road, Palayam, Calicut - 673002,<br />Kerala, South India</span>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="contact-form-container">
            <h3>Get in touch</h3>
            
            {status.message && (
              <div className={`alert alert-${status.type}`}>
                {status.message}
              </div>
            )}

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <input 
                  name="name"
                  type="text" 
                  placeholder="Your Name *" 
                  required 
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <input 
                  name="email"
                  type="email" 
                  placeholder="Your Email *" 
                  required 
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <input 
                  name="phone"
                  type="text" 
                  placeholder="Your Number *" 
                  required 
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <input 
                  name="subject"
                  type="text" 
                  placeholder="Subject *" 
                  required 
                  value={formData.subject}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group full-width">
                <textarea 
                  name="message"
                  rows="4" 
                  placeholder="Message *" 
                  required
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>
              <div className="submit-btn">
                <button type="submit" className="butn-dark2">
                  <span>Send Message</span>
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Map Section */}
        <div className="map-container">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3913.064506822286!2d75.78747447475962!3d11.2505230889242!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba6593532f50761%3A0x6d8f5aa2ee225a2e!2sHotel%20Sasthapuri!5e0!3m2!1sen!2sin!4v1710672728490!5m2!1sen!2sin" 
            title="Hotel Sasthapuri Location"
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default Contact;
