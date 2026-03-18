import React, { useEffect, useRef, useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import './Reservation.css';
import '../animations.css';

const Reservation = () => {
    const progressPathRef = useRef(null);
    const progressWrapRef = useRef(null);
    const [formData, setFormData] = useState({
        checkIn: '',
        checkOut: '',
        adults: '1',
        children: '0',
        roomType: 'Junior Suite',
        name: '',
        email: '',
        phone: '',
        specialRequests: ''
    });



    useEffect(() => {
        const progressPath = progressPathRef.current;
        const progressWrap = progressWrapRef.current;
        if (!progressPath || !progressWrap) return;

        const pathLength = progressPath.getTotalLength();
        progressPath.style.strokeDasharray = `${pathLength} ${pathLength}`;
        progressPath.style.strokeDashoffset = `${pathLength}`;

        const updateProgress = () => {
            const scrollTop = window.pageYOffset;
            const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const progress = docHeight > 0 ? pathLength - (scrollTop * pathLength) / docHeight : pathLength;
            progressPath.style.strokeDashoffset = `${progress}`;

            if (scrollTop > 120) {
                progressWrap.classList.add('active-progress');
            } else {
                progressWrap.classList.remove('active-progress');
            }
        };

        updateProgress();
        window.addEventListener('scroll', updateProgress);
        return () => window.removeEventListener('scroll', updateProgress);
    }, []);

    useEffect(() => {
        const els = document.querySelectorAll('.anim');
        const obs = new IntersectionObserver(
            entries => entries.forEach(e => {
                if (e.isIntersecting) { e.target.classList.add('anim-show'); obs.unobserve(e.target); }
            }),
            { threshold: 0.1 }
        );
        els.forEach(el => obs.observe(el));
        return () => obs.disconnect();
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Final validation check for whitespace-only strings
        const nameValid = formData.name.trim().length > 0;
        const emailValid = formData.email.trim().length > 0;
        const phoneValid = formData.phone.trim().length > 0;

        if (!nameValid || !emailValid || !phoneValid) {
            alert('Please fill out all fields with valid information (no empty spaces).');
            return;
        }

        alert('Thank you! Your reservation request has been submitted. Our team will contact you shortly.');
        console.log('Reservation Data:', formData);
    };

    return (
        <div className="res-page">
            {/* Progress scroll totop */}
            <div className="progress-wrap cursor-pointer" ref={progressWrapRef} onClick={scrollToTop} role="button" aria-label="Back to top">
                <svg className="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
                    <path
                        ref={progressPathRef}
                        d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
                    />
                </svg>
            </div>



            {/* Hero Section */}
            <header className="res-hero">
                <div className="res-hero-overlay" />
                <div className="res-hero-content anim anim-up">
                    <div className="stars">★★★★★</div>
                    <h5>Booking Form</h5>
                    <h1>Reservation</h1>
                </div>
            </header>

            <main className="res-container">
                <div className="res-grid">
                    {/* Form Column */}
                    <section className="res-form-section anim anim-left">
                        <div className="rest-booking-form">
                            <div className="res-header">
                                <span className="rest-subtitle">Online Booking</span>
                                <h4 className="rest-section-title">Request Your Stay</h4>
                            </div>
                            <form onSubmit={handleSubmit} className="res-form">
                                <div className="res-form-row">
                                    <div className="rest-form-group">
                                        <label>Full Name</label>
                                        <input 
                                            type="text" 
                                            name="name" 
                                            placeholder="Your Name" 
                                            required 
                                            pattern=".*\S+.*"
                                            title="Input cannot be only spaces"
                                            onChange={handleChange} 
                                        />
                                    </div>
                                    <div className="rest-form-group">
                                        <label>Email Address</label>
                                        <input type="email" name="email" placeholder="Your Email" required onChange={handleChange} />
                                    </div>
                                </div>
                                <div className="res-form-row">
                                    <div className="rest-form-group">
                                        <label>Phone Number</label>
                                        <input 
                                            type="tel" 
                                            name="phone" 
                                            placeholder="Your Phone" 
                                            required 
                                            pattern=".*\S+.*"
                                            title="Input cannot be only spaces"
                                            onChange={handleChange} 
                                        />
                                    </div>
                                    <div className="rest-form-group">
                                        <label>Select Room</label>
                                        <select name="roomType" onChange={handleChange}>
                                            <option>Junior Suite</option>
                                            <option>Family Room</option>
                                            <option>Double Room</option>
                                            <option>Executive Room</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="res-form-row">
                                    <div className="rest-form-group">
                                        <label>Check-In Date</label>
                                        <input type="date" name="checkIn" required onChange={handleChange} />
                                    </div>
                                    <div className="rest-form-group">
                                        <label>Check-Out Date</label>
                                        <input type="date" name="checkOut" required onChange={handleChange} />
                                    </div>
                                </div>
                                <div className="res-form-row">
                                    <div className="rest-form-group">
                                        <label>Adults</label>
                                        <select name="adults" onChange={handleChange}>
                                            <option>Adults</option>
                                            <option>1 Adult</option>
                                            <option>2 Adults</option>
                                            <option>3 Adults</option>
                                            <option>4 Adults</option>
                                        </select>
                                    </div>
                                    <div className="rest-form-group">
                                        <label>Children</label>
                                        <select name="children" onChange={handleChange}>
                                            <option>0 Children</option>
                                            <option>1 Child</option>
                                            <option>2 Children</option>
                                            <option>3 Children</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="rest-form-group">
                                    <label>Special Requests</label>
                                    <textarea name="specialRequests" rows="3" placeholder="Tell us anything else..." onChange={handleChange}></textarea>
                                </div>
                                <button type="submit" className="rest-btn-submit">Check Availability</button>
                            </form>
                        </div>
                    </section>

                    {/* Info Column */}
                    <aside className="res-info-section anim anim-right">
                        <div className="info-box-styled">
                            <div className="info-item-styled">
                                <div className="icon-circle"><FaPhone /></div>
                                <div className="text-content">
                                    <p className="label">Reservation</p>
                                    <a href="tel:+914952723281" className="val">+91 - 495-2723281</a>
                                </div>
                            </div>
                            <div className="info-item-styled">
                                <div className="icon-circle"><FaEnvelope /></div>
                                <div className="text-content">
                                    <p className="label">Email Info</p>
                                    <a href="mailto:sasthapuri@gmail.com" className="val">sasthapuri@gmail.com</a>
                                </div>
                            </div>
                            <div className="info-item-styled">
                                <div className="icon-circle"><FaMapMarkerAlt /></div>
                                <div className="text-content">
                                    <p className="label">Our Location</p>
                                    <span className="val">M.M.Ali Road, Palayam, Calicut - 673002</span>
                                </div>
                            </div>
                        </div>

                        <div className="res-policy-styled">
                            <h4>Hotel Policies</h4>
                            <ul>
                                <li>Check-in: After 02:00 PM</li>
                                <li>Check-out: Before 12:00 PM</li>
                                <li>Late check-out available on request</li>
                                <li>Free cancellation up to 48 hours before arrival</li>
                                <li>Valid ID proof required at check-in</li>
                            </ul>
                        </div>
                    </aside>
                </div>
            </main>
        </div>
    );
};

export default Reservation;
