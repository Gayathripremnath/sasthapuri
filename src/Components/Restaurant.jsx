import React, { useEffect, useRef } from 'react';
import { FaPhone, FaUtensils, FaLeaf, FaWineGlassAlt, FaClock } from "react-icons/fa";
import './Restaurant.css';
import '../animations.css';

import heroImg   from '../assets/restaurant/1.jpg';
import ambiImg1  from '../assets/restaurant/2.jpg';
import ambiImg2  from '../assets/restaurant/3.jpg';
import food1     from '../assets/rooms/1.jpg';
import food2     from '../assets/rooms/2.jpg';
import food3     from '../assets/rooms/3.jpg';
import food4     from '../assets/rooms/4.jpg';
import food5     from '../assets/rooms/5.jpg';
import food6     from '../assets/rooms/6.jpg';

// const menuItems = [
//   { img: food1, title: 'Grilled Sea Bass',      category: 'Seafood',    price: '₹850',  desc: 'Fresh catch of the day served with herb butter and seasonal greens.' },
//   { img: food2, title: 'Royal Lamb Rack',        category: 'Grill',      price: '₹1,200', desc: 'Tender lamb rack marinated in aromatic spices, slow-roasted to perfection.' },
//   { img: food3, title: 'Forest Mushroom Risotto',category: 'Vegetarian', price: '₹650',  desc: 'Creamy Arborio rice with wild porcini mushrooms and truffle oil.' },
//   { img: food4, title: 'Kerala Prawn Curry',     category: 'Seafood',    price: '₹950',  desc: 'Succulent tiger prawns in a rich coconut and tamarind gravy.' },
//   { img: food5, title: 'Smoked Duck Breast',     category: 'Grill',      price: '₹1,100', desc: 'Hickory-smoked duck with orange reduction and crispy potato cake.' },
//   { img: food6, title: 'Mango Pannacotta',       category: 'Dessert',    price: '₹400',  desc: 'Silky smooth panna cotta with fresh Alphonso mango coulis and mint.' },
// ];

const features = [
  { icon: <FaUtensils />, title: 'Fine Dining',      desc: 'An elegant ambiance curated for a truly memorable dining experience.' },
  { icon: <FaLeaf     />, title: 'Farm Fresh',       desc: 'Ingredients sourced directly from local farms and coastal waters.' },
  { icon: <FaWineGlassAlt />, title: 'Premium Bar', desc: 'Handcrafted cocktails and an extensive selection of world wines.' },
  { icon: <FaClock    />, title: 'Open All Day',     desc: 'Serving breakfast, lunch, and dinner from 7 AM to 11 PM.' },
];

const Restaurant = () => {
  const progressPathRef = useRef(null);
  const progressWrapRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      const preloader = document.getElementById('preloader');
      const preloaderBg = document.querySelector('.preloader-bg');
      if (preloader)   preloader.style.display   = 'none';
      if (preloaderBg) preloaderBg.style.display = 'none';
    }, 1200);
    return () => clearTimeout(timer);
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

  /* scroll-reveal */
  useEffect(() => {
    const els = document.querySelectorAll('.anim');
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('anim-show'); obs.unobserve(e.target); }
      }),
      { threshold: 0.12 }
    );
    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <>
      {/* ── Preloader ── */}
      <div className="preloader-bg"></div>
      <div id="preloader">
        <div id="preloader-status">
          <div className="preloader-position loader"><span></span></div>
        </div>
      </div>

      {/* Progress scroll totop */}
      <div className="progress-wrap cursor-pointer" ref={progressWrapRef} onClick={scrollToTop} role="button" aria-label="Back to top">
        <svg className="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
          <path
            ref={progressPathRef}
            d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
          />
        </svg>
      </div>

      {/* ── Hero Banner ── */}
      <div
        className="rest-hero bg-img bg-fixed"
        style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(${heroImg})` }}
      >
        <div className="rest-hero-overlay"></div>
        <div className="rest-hero-content anim anim-up">
          <p className="rest-hero-sub">Sasthapuri Hotel</p>
          <h1 className="rest-hero-title">Restaurant &amp; Bar</h1>
          <ul className="rest-breadcrumb">
            <li><a href="/">Home</a></li>
            <li className="sep">/</li>
            <li className="active">Restaurant</li>
          </ul>
        </div>
      </div>

      {/* ── Feature Highlights ── */}
      <section className="rest-features">
        <div className="rest-container">
          <div className="rest-features-grid">
            {features.map((f, i) => (
              <div className={`rest-feature-card anim anim-up anim-d${i + 1}`} key={i}>
                <div className="rest-feature-icon">{f.icon}</div>
                <h4>{f.title}</h4>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Intro / About Section ── */}
      <section className="rest-intro">
        <div className="rest-container rest-intro-grid">
          <div className="rest-intro-text anim anim-left">
            <span className="rest-subtitle">A Culinary Journey</span>
            <h2 className="rest-section-title">Flavours Crafted<br/>with Passion</h2>
            <p>
              Our restaurant celebrates the vibrant culinary heritage of Kerala, elevated with
              contemporary techniques and the finest ingredients. Whether you seek a leisurely
              breakfast overlooking the gardens or an intimate candlelit dinner, every meal at
              Sasthapuri is an experience to savour.
            </p>
            <p>
              Our chefs blend traditional spices and coastal flavours with global inspirations —
              creating dishes that are both deeply familiar and beautifully surprising.
            </p>
            <div className="rest-reservation-bar">
              <FaPhone className="rest-phone-icon" />
              <div>
                <span className="rest-res-label">Reservations</span>
                <a href="tel:8551004444" className="rest-res-number">855 100 4444</a>
              </div>
            </div>
          </div>
          <div className="rest-intro-images anim anim-right">
            <img src={ambiImg1} alt="Restaurant ambiance" className="rest-intro-img rest-intro-img-top" />
            <img src={ambiImg2} alt="Restaurant interior"  className="rest-intro-img rest-intro-img-bot" />
          </div>
        </div>
      </section>

      {/* ── Menu Section ── */}
      {/* <section className="rest-menu">
        <div className="rest-container">
          <div className="rest-section-header anim anim-up">
            <span className="rest-subtitle">Curated Selection</span>
            <h2 className="rest-section-title">Our Signature Menu</h2>
          </div>
          <div className="rest-menu-grid">
            {menuItems.map((item, i) => (
              <div className={`rest-menu-card anim anim-up anim-d${(i % 3) + 1}`} key={i}>
                <div className="rest-menu-img-wrap">
                  <img src={item.img} alt={item.title} />
                  <span className="rest-menu-category">{item.category}</span>
                </div>
                <div className="rest-menu-info">
                  <div className="rest-menu-top">
                    <h4>{item.title}</h4>
                    <span className="rest-menu-price">{item.price}</span>
                  </div>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* ── Reservation Section ── */}
      <section
        className="rest-booking bg-img bg-fixed"
        style={{ backgroundImage: `url(${ambiImg1})` }}
      >
        <div className="rest-booking-overlay"></div>
        <div className="rest-container rest-booking-inner">
          <div className="rest-booking-text anim anim-left">
            <span className="rest-subtitle light">Make a Reservation</span>
            <h2 className="rest-section-title light">Reserve Your<br/>Table Today</h2>
            <p className="light-p">
              Experience the finest Kerala cuisine in an atmosphere of effortless elegance.
              Book your table in advance to ensure your preferred dining time.
            </p>
            <div className="rest-reservation-bar dark-bg">
              <FaPhone className="rest-phone-icon gold" />
              <div>
                <span className="rest-res-label gold">Call Us</span>
                <a href="tel:8551004444" className="rest-res-number gold">855 100 4444</a>
              </div>
            </div>
          </div>

          <div className="rest-booking-form anim anim-right">
            <h4>Book a Table</h4>
            <form>
              <div className="rest-form-group">
                <label>Full Name</label>
                <input type="text" placeholder="Your full name" />
              </div>
              <div className="rest-form-group">
                <label>Email Address</label>
                <input type="email" placeholder="Your email" />
              </div>
              <div className="rest-form-row">
                <div className="rest-form-group">
                  <label>Date</label>
                  <input type="date" />
                </div>
                <div className="rest-form-group">
                  <label>Time</label>
                  <input type="time" />
                </div>
              </div>
              <div className="rest-form-group">
                <label>Number of Guests</label>
                <select>
                  <option>1 Person</option>
                  <option>2 Persons</option>
                  <option>3 Persons</option>
                  <option>4 Persons</option>
                  <option>5+ Persons</option>
                </select>
              </div>
              <div className="rest-form-group">
                <label>Special Requests</label>
                <textarea rows="3" placeholder="Any dietary requirements or special occasions…"></textarea>
              </div>
              <button type="submit" className="rest-btn-submit">Reserve Table</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Restaurant;