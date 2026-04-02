import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Rooms.css';
import BookingModal from './BookingModal';
import '../animations.css';

import slide1 from '../assets/slider/1.jpg';
import slide2 from '../assets/slider/2.jpg';
import slide3 from '../assets/slider/3.jpg';
import slide4 from '../assets/slider/4.jpg';
import slide5 from '../assets/slider/5.jpg';
import price1 from '../assets/pricing/1.jpg';
import price2 from '../assets/pricing/2.jpg';
import price3 from '../assets/pricing/3.jpg';
import price4 from '../assets/pricing/4.jpg';

/* ── Room data ── */
const rooms = [

  {
    id: 'room2',
    img: "https://sasthapuri.com/images/ac-suit.jpg",
    name: 'Executive/Suite Room',
    price: '3,400/- INR + Tax',
    desc: 'Our well- designed A/C & NON A/C Rooms and their comfort will evoke a feeling of home sickness in you because they will very much remind you of your home indeed.',
    persons: '2–4 Persons',
    bed: 'King Bed',
    wifi: 'Free Wifi',
    breakfast: 'Breakfast',
    pool: 'Swimming Pool',
    tv: 'Cable TV',            
    ac: 'Air Conditioning',
    imgLeft: true,
  },
  {
    id: 'room3',
    img: 'https://sasthapuri.com/images/delux.jpg',
    price: '2,500/- + Tax',
    name: 'Standard Deluxe',
    desc: 'Our well- designed A/C & NON A/C Rooms and their comfort will evoke a feeling of home sickness in you because they will very much remind you of your home indeed.',
    persons: '2–3 Persons',
    bed: 'Queen Bed',
    wifi: 'Free Wifi',
    breakfast: 'Breakfast',
    pool: 'Swimming Pool',
    tv: 'Cable TV',            
    ac: 'Air Conditioning',
    imgLeft: false,
  },
  {
    id: 'room4',
    img: slide2,
    price: '1,800/- INR + Tax',
    name: 'Deluxe Room',
    desc: 'Our well- designed A/C & NON A/C Rooms and their comfort will evoke a feeling of home sickness in you because they will very much remind you of your home indeed.',
    persons: '2–4 Persons',
    bed: 'King Bed',
    wifi: 'Free Wifi',
    breakfast: 'Breakfast',
    pool: 'Swimming Pool',
    tv: 'Cable TV',            
    ac: 'Air Conditioning',
    imgLeft: true,
  },
];

const pricingCards = [
  { img: price1, name: 'Room Cleaning',   amount: '₹500', per: '/ month' },
  { img: price2, name: 'Drinks Included', amount: '₹350', per: '/ daily' },
  { img: price3, name: 'Room Breakfast',  amount: '₹300', per: '/ daily' },
  { img: price4, name: 'Safe & Secure',   amount: '₹150', per: '/ daily' },
];

const Rooms = () => {
  const progressPathRef = useRef(null);
  const progressWrapRef = useRef(null);
  const [activePricing, setActivePricing] = useState(0);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState('');

  const openBooking = (roomName = '') => {
    setSelectedRoom(roomName);
    setIsBookingOpen(true);
  };



  /* scroll-reveal */
  useEffect(() => {
    const els = document.querySelectorAll('.anim');
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('anim-show'); obs.unobserve(e.target); }
      }),
      { threshold: 0.10 }
    );
    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  /* pricing carousel auto-advance */
  useEffect(() => {
    const id = setInterval(() => setActivePricing(s => (s + 1) % pricingCards.length), 4000);
    return () => clearInterval(id);
  }, []);

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

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Progress scroll totop */}
      <div className="progress-wrap cursor-pointer" ref={progressWrapRef} onClick={scrollToTop} role="button" aria-label="Back to top">
        <svg className="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
          <path
            ref={progressPathRef}
            d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
          />
        </svg>
      </div>

      <BookingModal 
        isOpen={isBookingOpen} 
        onClose={() => setIsBookingOpen(false)} 
        initialRoom={selectedRoom} 
      />


      {/* Hero Banner */}
      <div
        className="rm-hero"
        style={{ backgroundImage: `url(${slide1})` }}
      >
        <div className="rm-hero-overlay" />
        <div className="rm-hero-content anim anim-up">
          <div className="rm-hero-stars">★★★</div>
          <p className="rm-hero-kicker">Sasthapuri Hotel</p>
          <h1 className="rm-hero-title">Rooms &amp; Suites</h1>
        </div>
      </div>

      {/* Rooms List */}
      <section className="rm-rooms-section">
        <div className="rm-container">
          {rooms.map((room, i) => (
            <div
              key={room.id}
              id={room.id}
              className={`rm-room-card anim ${room.imgLeft ? 'anim-right' : 'anim-left'}`}
            >
              <figure className="rm-room-fig">
                <img src={room.img} alt={room.name} />
              </figure>
              <div className="rm-room-caption">
                <h4 className="rm-room-name">
                  <Link to={room.name === 'Executive/Suite Room' ? '/room-executive-suite' : room.name === 'Standard Deluxe' ? '/room-standard-deluxe' : room.name === 'Deluxe Room' ? '/room-deluxe' : '/room-details'}>{room.name}</Link>
                </h4>
                <h3 className="rm-room-price">{room.price} <span>/ Night</span></h3>
                <p className="rm-room-desc">{room.desc}</p>

                <div className="rm-facilities">
                  <ul>
                    <li>📺 {room.tv}</li>
                    <li>📶 {room.wifi}</li>
                  </ul>
                  <ul>
                    <li>🛏 {room.bed}</li>
                    <li>🍳 {room.breakfast}</li>
                  </ul>
                  <ul>
                      <li>🪟 {room.ac}</li>
                    <li>🏊 {room.pool}</li>
                  </ul>
               
                    
                  
                </div>

                <hr className="rm-divider" />

                <div className="rm-room-footer">
                  <Link className="rm-link-btn" to={room.name === 'Executive/Suite Room' ? '/room-executive-suite' : room.name === 'Standard Deluxe' ? '/room-standard-deluxe' : room.name === 'Deluxe Room' ? '/room-deluxe' : '/room-details'}>Details →</Link>
                 
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Booking / Reservation Section */}
      {/* <section
        className="rm-booking"
        style={{ backgroundImage: `url(${slide2})` }}
      >
        <div className="rm-booking-overlay" />
        <div className="rm-container rm-booking-inner">
          <div className="rm-booking-info anim anim-left">
            <div className="rm-booking-stars">★★★★★</div>
            <h5>Each of our guest rooms feature a private bath, wi-fi, cable television and include full breakfast.</h5>
            <div className="rm-res-strip">
              <span className="rm-res-big-icon">📞</span>
              <div>
                <p className="rm-res-label gold">Reservation</p>
                <a className="rm-res-call" href="tel:+914952723281">+91-495-2723281</a>
              </div>
            </div>
            <p className="rm-toll">✓ <small>Call us, it's toll-free.</small></p>
          </div>

        
          <div className="rm-booking-form anim anim-right">
            <div className="rm-form-head">
              <h6>Rooms &amp; Suites</h6>
              <h4>Hotel Booking Form</h4>
            </div>
            <form>
              <div className="rm-form-group">
                <label>Check In</label>
                <input type="date" />
              </div>
              <div className="rm-form-group">
                <label>Check Out</label>
                <input type="date" />
              </div>
              <div className="rm-form-row">
                <div className="rm-form-group">
                  <label>Adults</label>
                  <select>
                    <option>1</option><option>2</option>
                    <option>3</option><option>4</option>
                  </select>
                </div>
                <div className="rm-form-group">
                  <label>Children</label>
                  <select>
                    <option>0</option><option>1</option>
                    <option>2</option><option>3</option>
                  </select>
                </div>
              </div>
              <button type="submit" className="rm-form-submit">Check Availability</button>
            </form>
          </div>
        </div>
      </section> */}
    </>
  );
};

export default Rooms;
