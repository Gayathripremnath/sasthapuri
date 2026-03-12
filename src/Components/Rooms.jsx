import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Rooms.css';
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
    id: 'room1',
    img: slide4,
    price: '₹3,200',
    name: 'Junior Suite',
    desc: 'Spacious, bright guestrooms with tasteful furnishing, wooden floor and panoramic windows from the ceiling to the floor.',
    persons: '1–2 Persons',
    bed: 'Twin Bed',
    size: '200 sqft Room',
    wifi: 'Free Wifi',
    breakfast: 'Breakfast',
    pool: 'Swimming Pool',
    imgLeft: false,
  },
  {
    id: 'room2',
    img: slide3,
    price: '₹4,500',
    name: 'Family Room',
    desc: 'Spacious, bright guestrooms with tasteful furnishing, wooden floor and panoramic windows from the ceiling to the floor.',
    persons: '1–2 Persons',
    bed: 'Twin Bed',
    size: '200 sqft Room',
    wifi: 'Free Wifi',
    breakfast: 'Breakfast',
    pool: 'Swimming Pool',
    imgLeft: true,
  },
  {
    id: 'room3',
    img: slide5,
    price: '₹5,200',
    name: 'Double Room',
    desc: 'Spacious, bright guestrooms with tasteful furnishing, wooden floor and panoramic windows from the ceiling to the floor.',
    persons: '2–3 Persons',
    bed: 'Twin Bed',
    size: '200 sqft Room',
    wifi: 'Free Wifi',
    breakfast: 'Breakfast',
    pool: 'Swimming Pool',
    imgLeft: false,
  },
  {
    id: 'room4',
    img: slide2,
    price: '₹6,800',
    name: 'Deluxe Room',
    desc: 'Spacious, bright guestrooms with tasteful furnishing, wooden floor and panoramic windows from the ceiling to the floor.',
    persons: '2–4 Persons',
    bed: 'King Bed',
    size: '200 sqft Room',
    wifi: 'Free Wifi',
    breakfast: 'Breakfast',
    pool: 'Swimming Pool',
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

  /* preloader */
  useEffect(() => {
    const t = setTimeout(() => {
      document.getElementById('preloader')?.style && (document.getElementById('preloader').style.display = 'none');
      document.querySelector('.preloader-bg')?.style && (document.querySelector('.preloader-bg').style.display = 'none');
    }, 1000);
    return () => clearTimeout(t);
  }, []);

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
      {/* Preloader */}
      <div className="preloader-bg"></div>
      <div id="preloader">
        <div id="preloader-status">
          <div className="preloader-position loader"><span></span></div>
        </div>
      </div>

      {/* Hero Banner */}
      <div
        className="rm-hero"
        style={{ backgroundImage: `url(${slide1})` }}
      >
        <div className="rm-hero-overlay" />
        <div className="rm-hero-content anim anim-up">
          <div className="rm-hero-stars">★★★★★</div>
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
                <h3 className="rm-room-price">{room.price} <span>/ Night</span></h3>
                <h4 className="rm-room-name">
                  <Link to="/room-details">{room.name}</Link>
                </h4>
                <p className="rm-room-desc">{room.desc}</p>

                <div className="rm-facilities">
                  <ul>
                    <li>👥 {room.persons}</li>
                    <li>📶 {room.wifi}</li>
                  </ul>
                  <ul>
                    <li>🛏 {room.bed}</li>
                    <li>🍳 {room.breakfast}</li>
                  </ul>
                  <ul>
                    <li>📐 {room.size}</li>
                    <li>🏊 {room.pool}</li>
                  </ul>
                </div>

                <hr className="rm-divider" />

                <div className="rm-room-footer">
                  <Link className="rm-link-btn" to="/room-details">Details →</Link>
                  <Link className="rm-book-btn" to="/room-details"><span>Book Now</span></Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing / Extra Services */}
      <section className="rm-pricing">
        <div className="rm-container rm-pricing-inner">
          {/* Left intro */}
          <div className="rm-pricing-info anim anim-left">
            <div className="rm-subtitle">Best Prices</div>
            <h2 className="rm-section-title">Extra Services</h2>
            <p>The best prices for your relaxing vacation. Premium amenities crafted to make your stay unforgettable.</p>
            <p>Orci varius natoque penatibus et magnis parturient montes nascetur ridiculus mus.</p>
            <div className="rm-reservation-bar">
              <span className="rm-res-icon">📞</span>
              <div>
                <p className="rm-res-label">For Information</p>
                <a className="rm-res-num" href="tel:+914952723281">+91-495-2723281</a>
              </div>
            </div>
          </div>

          {/* Pricing cards carousel */}
          <div className="rm-pricing-cards anim anim-right">
            <div className="rm-pricing-track">
              {pricingCards.map((card, i) => (
                <div
                  key={i}
                  className={`rm-pricing-card ${i === activePricing ? 'rm-pc-active' : ''}`}
                >
                  <img src={card.img} alt={card.name} />
                  <div className="rm-pc-body">
                    <div className="rm-pc-name">{card.name}</div>
                    <div className="rm-pc-amount">{card.amount}<span>{card.per}</span></div>
                    <ul className="rm-pc-list">
                      <li>✓ Hotel ut nisan the duru</li>
                      <li>✓ Orci miss natoque vasa ince</li>
                      <li className="rm-unavail">✕ Clean sorem ipsum morbin</li>
                    </ul>
                  </div>
                </div>
              ))}
            </div>
            <div className="rm-pc-dots">
              {pricingCards.map((_, i) => (
                <button
                  key={i}
                  className={`rm-pc-dot ${i === activePricing ? 'active' : ''}`}
                  onClick={() => setActivePricing(i)}
                  aria-label={`Pricing card ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Booking / Reservation Section */}
      <section
        className="rm-booking"
        style={{ backgroundImage: `url(${slide2})` }}
      >
        <div className="rm-booking-overlay" />
        <div className="rm-container rm-booking-inner">
          {/* Left info */}
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

          {/* Booking form */}
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
      </section>
    </>
  );
};

export default Rooms;
