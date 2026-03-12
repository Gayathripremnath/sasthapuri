import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Rooms.css';
import '../animations.css';
import slide1 from '../assets/slider/1.jpg';
import slide4 from '../assets/slider/4.jpg';
import slide2 from '../assets/slider/2.jpg';

const Room1 = () => {
  const progressPathRef = useRef(null);
  const progressWrapRef = useRef(null);
  useEffect(() => {
    const t = setTimeout(() => {
      document.getElementById('preloader')?.style && (document.getElementById('preloader').style.display = 'none');
      document.querySelector('.preloader-bg')?.style && (document.querySelector('.preloader-bg').style.display = 'none');
    }, 1000);
    return () => clearTimeout(t);
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

  return (
    <div className="rooms-page">
      {/* Progress scroll totop */}
      <div className="progress-wrap cursor-pointer" ref={progressWrapRef} onClick={scrollToTop} role="button" aria-label="Back to top">
        <svg className="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
          <path
            ref={progressPathRef}
            d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
          />
        </svg>
      </div>
      <div className="preloader-bg"></div>
      <div id="preloader"><div className="loader"><span></span></div></div>

      <div className="rm-hero" style={{ backgroundImage: `url(${slide1})` }}>
        <div className="rm-hero-overlay" />
        <div className="rm-hero-content anim anim-up">
          <div className="rm-hero-stars">★★★★★</div>
          <p className="rm-hero-kicker">Sasthapuri Hotel</p>
          <h1 className="rm-hero-title">Junior Suite</h1>
        </div>
      </div>

      <section className="rm-rooms-section">
        <div className="rm-container">
          <div className="rm-room-card anim anim-left">
            <figure className="rm-room-fig"><img src={slide4} alt="Junior Suite" /></figure>
            <div className="rm-room-caption">
              <h3 className="rm-room-price">₹3,200 <span>/ Night</span></h3>
              <h4 className="rm-room-name">Junior Suite</h4>
              <p className="rm-room-desc">Spacious, bright guestrooms with tasteful furnishing, wooden floor and panoramic windows from the ceiling to the floor.</p>
              <div className="rm-facilities">
                <ul><li>👥 1-2 Persons</li><li>📶 Free Wifi</li></ul>
                <ul><li>🛏 Twin Bed</li><li>🍳 Breakfast</li></ul>
                <ul><li>📐 200 sqft Room</li><li>🏊 Swimming Pool</li></ul>
              </div>
              <hr className="rm-divider" />
              <div className="rm-room-footer">
                <Link className="rm-link-btn" to="/room-details">Details →</Link>
                <Link className="rm-book-btn" to="/room-details"><span>Book Now</span></Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Form Footer */}
      <section className="rm-booking" style={{ backgroundImage: `url(${slide2})` }}>
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
          </div>
          <div className="rm-booking-form anim anim-right">
            <div className="rm-form-head"><h4>Hotel Booking Form</h4></div>
            <form>
              <div className="rm-form-group"><label>Check In</label><input type="date" /></div>
              <div className="rm-form-group"><label>Check Out</label><input type="date" /></div>
              <button type="submit" className="rm-form-submit">Check Availability</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Room1;
