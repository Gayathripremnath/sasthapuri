import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './RoomDetails.css';

import slide1 from '../assets/slider/3.jpg';
import slide2 from '../assets/slider/2.jpg';
import slide3 from '../assets/slider/5.jpg';
import room1  from '../assets/rooms/1.jpg';
import room2  from '../assets/rooms/2.jpg';
import room5  from '../assets/rooms/5.jpg';
import room6  from '../assets/rooms/6.jpg';
import room8  from '../assets/rooms/8.jpg';
import price1 from '../assets/pricing/1.jpg';
import price2 from '../assets/pricing/2.jpg';
import price3 from '../assets/pricing/3.jpg';
import price4 from '../assets/pricing/4.jpg';

/* ── data ── */
const slides = [slide1, slide2, slide3];

const similarRooms = [
  { img: room1, price: '₹3,600', title: 'Executive Room' },
  { img: room2, price: '₹2,600', title: 'Family Room' },
  { img: room5, price: '₹3,200', title: 'Double Room' },
  { img: room6, price: '₹4,500', title: 'Deluxe Room' },
  { img: room8, price: '₹2,800', title: 'Superior Room' },
];

const pricingCards = [
  { img: price1, name: 'Room Cleaning',    amount: '₹500', per: '/ month',
    items: ['Hotel ut nisan the duru', 'Orci miss natoque vasa ince', 'Clean sorem ipsum morbin'] },
  { img: price2, name: 'Drinks Included',  amount: '₹350', per: '/ daily',
    items: ['Hotel ut nisan the duru', 'Orci miss natoque vasa ince', 'Clean sorem ipsum morbin'] },
  { img: price3, name: 'Room Breakfast',   amount: '₹300', per: '/ daily',
    items: ['Hotel ut nisan the duru', 'Orci miss natoque vasa ince', 'Clean sorem ipsum morbin'] },
  { img: price4, name: 'Safe &amp; Secure', amount: '₹150', per: '/ daily',
    items: ['Hotel ut nisan the duru', 'Orci miss natoque vasa ince', 'Clean sorem ipsum morbin'] },
];

/* ── component ── */
const RoomDetails = () => {
  const progressPathRef = useRef(null);
  const progressWrapRef = useRef(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const [simStart, setSimStart]       = useState(0);
  const [visibleSim]                  = useState(3);

  /* preloader */
  useEffect(() => {
    const t = setTimeout(() => {
      document.getElementById('preloader')?.style && (document.getElementById('preloader').style.display = 'none');
      document.querySelector('.preloader-bg')?.style && (document.querySelector('.preloader-bg').style.display = 'none');
    }, 1000);
    return () => clearTimeout(t);
  }, []);

  /* hero auto-slide */
  useEffect(() => {
    const id = setInterval(() => setActiveSlide(s => (s + 1) % slides.length), 4000);
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

  const prevSim = () => setSimStart(s => Math.max(0, s - 1));
  const nextSim = () => setSimStart(s => Math.min(similarRooms.length - visibleSim, s + 1));

  return (
    <>
      {/* Progress scroll totop */}
      <div className="rd-progress-wrap cursor-pointer" ref={progressWrapRef} onClick={scrollToTop} role="button" aria-label="Back to top">
        <svg className="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
          <path
            ref={progressPathRef}
            d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
          />
        </svg>
      </div>
      {/* ── Preloader ── */}
      <div className="preloader-bg"></div>
      <div id="preloader">
        <div id="preloader-status">
          <div className="preloader-position loader"><span></span></div>
        </div>
      </div>


      {/* ── Hero Slider ── */}
      <div className="rd-slider">
        {slides.map((src, i) => (
          <div
            key={i}
            className={`rd-slide ${i === activeSlide ? 'active' : ''}`}
            style={{ backgroundImage: `url(${src})` }}
          />
        ))}
        <div className="rd-slide-overlay" />
        <div className="rd-slide-dots">
          {slides.map((_, i) => (
            <button
              key={i}
              className={`rd-dot ${i === activeSlide ? 'active' : ''}`}
              onClick={() => setActiveSlide(i)}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
        <div className="rd-hero-container">
          <div className="rd-hero-content anim anim-up">
            <div className="rd-hero-stars">★★★★★</div>
            <p className="rd-hero-kicker">Superior Suite</p>
            <h1 className="rd-hero-title">Room Details</h1>
          </div>
        </div>
      </div>

      {/* ── Room Content ── */}
      <section className="rd-room-section">
        <div className="rd-container">
          <div className="rd-room-grid">

            <div className="rd-room-main anim anim-up">
              <div className="rd-stars">★★★★★</div>
              <div className="rd-subtitle">Luxury Hotel</div>
              <h2 className="rd-title">Junior Suite</h2>

              <p className="rd-desc">
                Hotel non lorem ac erat suscipit bibendum nulla facilisi. Sedeuter nunc volutpat miss
                sapien vel conseyen turpeutionyer masin libero sevenion vusetion viventa augue sit amet
                hendrerit vestibulum. Duisteyerion venenatis lacus gravida eros ut turpis interdum ornare.
              </p>
              <p className="rd-desc">
                Interdum et malesu they adamale fames ac anteipsu pimsine faucibus curabitur arcu site
                feugiat in tortor in, volutpat sollicitudin libero. Hotel non lorem acer suscipit bibendum
                vulla facilisi nedeuter nunc.
              </p>

              {/* Check-in / Check-out */}
              <div className="rd-checklist-grid">
                <div>
                  <h6 className="rd-list-heading">Check-in</h6>
                  <ul className="rd-check-list">
                    <li><span className="rd-check-icon">✓</span> Check-in from 9:00 AM – anytime</li>
                    <li><span className="rd-check-icon">✓</span> Early check-in subject to availability</li>
                  </ul>
                </div>
                <div>
                  <h6 className="rd-list-heading">Check-out</h6>
                  <ul className="rd-check-list">
                    <li><span className="rd-check-icon">✓</span> Check-out before noon</li>
                    <li><span className="rd-check-icon">✓</span> Express check-out</li>
                  </ul>
                </div>
              </div>

              <h6 className="rd-list-heading">Special Check-in Instructions</h6>
              <p className="rd-desc">
                Guests will receive an email 5 days before arrival with check-in instructions; front desk
                staff will greet guests on arrival. For more details, please contact the property using the
                information on the booking confirmation.
              </p>

              <h6 className="rd-list-heading">Pets</h6>
              <p className="rd-desc">Pets not allowed</p>

              <h6 className="rd-list-heading">Children &amp; Extra Beds</h6>
              <p className="rd-desc">
                Children are welcome. Kids stay free! Children stay free when using existing bedding.
                Rollaway/extra beds are available for ₹800 per day.
              </p>

              <Link to="/rooms" className="rd-btn-dark">
                <span>Check Availability</span>
              </Link>
            </div>

            {/* Right — amenities sidebar */}
            <aside className="rd-amenities anim anim-right">
              <h6 className="rd-list-heading">Amenities</h6>
              <ul className="rd-amenity-list">
                <li>
                  <span className="rd-amenity-icon">👥</span>
                  <span>1–2 Persons</span>
                </li>
                <li>
                  <span className="rd-amenity-icon">📶</span>
                  <span>Free Wi-Fi</span>
                </li>
                <li>
                  <span className="rd-amenity-icon">📐</span>
                  <span>200 sqft Room</span>
                </li>
                <li>
                  <span className="rd-amenity-icon">🍳</span>
                  <span>Breakfast Included</span>
                </li>
                <li>
                  <span className="rd-amenity-icon">🛁</span>
                  <span>Towels &amp; Toiletries</span>
                </li>
                <li>
                  <span className="rd-amenity-icon">🏊</span>
                  <span>Swimming Pool Access</span>
                </li>
                <li>
                  <span className="rd-amenity-icon">❄️</span>
                  <span>Air Conditioning</span>
                </li>
                <li>
                  <span className="rd-amenity-icon">📺</span>
                  <span>Cable Television</span>
                </li>
              </ul>
            </aside>
          </div>
        </div>
      </section>

      {/* ── Similar Rooms ── */}
      <section className="rd-similar bg-blck anim anim-up">
        <div className="rd-container">
          <div className="rd-similar-head">
            <span className="rd-subtitle light">Luxury Hotel</span>
            <h2 className="rd-title light">Similar Rooms</h2>
          </div>

          <div className="rd-similar-viewport">
            <button className="rd-nav-btn rd-nav-prev" onClick={prevSim} disabled={simStart === 0}>‹</button>

            <div className="rd-similar-track">
              {similarRooms.slice(simStart, simStart + visibleSim).map((room, i) => (
                <div className="rd-similar-card" key={i}>
                  <div className="rd-sim-img-wrap">
                    <img src={room.img} alt={room.title} />
                    <Link to="/room-details" className="rd-sim-book">Book</Link>
                  </div>
                  <div className="rd-sim-info">
                    <p className="rd-sim-price">{room.price} / Night</p>
                    <h5 className="rd-sim-name">{room.title}</h5>
                    <div className="rd-sim-line"></div>
                    <div className="rd-sim-footer">
                      <div className="rd-sim-icons">
                        <span>🛏</span><span>🚿</span><span>🍳</span><span>🛁</span>
                      </div>
                      <Link to="/room-details" className="rd-sim-details">Details →</Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button
              className="rd-nav-btn rd-nav-next"
              onClick={nextSim}
              disabled={simStart >= similarRooms.length - visibleSim}
            >›</button>
          </div>
        </div>
      </section>

      {/* ── Pricing / Extra Services ── */}
      <section className="rd-pricing anim anim-up">
        <div className="rd-container rd-pricing-grid">
          <div className="rd-pricing-info">
            <div className="rd-pricing-intro">
              <div className="rd-subtitle">Best Prices</div>
              <h2 className="rd-title">Extra Services</h2>
              <p className="rd-desc">The best prices for your relaxing vacation. Premium amenities and personalised services crafted to make your stay unforgettable.</p>
              <div className="rd-reservation-bar">
                <span className="rd-res-icon">📞</span>
                <div>
                  <p className="rd-res-label">For Information</p>
                  <a className="rd-res-num" href="tel:8551004444">855 100 4444</a>
                </div>
              </div>
            </div>
          </div>

          <div className="rd-pricing-cards">
            {pricingCards.map((card, i) => (
              <div className="rd-pricing-card" key={i}>
                <img src={card.img} alt={card.name} />
                <div className="rd-card-body">
                  <div className="rd-card-name" dangerouslySetInnerHTML={{ __html: card.name }} />
                  <div className="rd-card-amount">{card.amount}<span>{card.per}</span></div>
                  <ul className="rd-card-list">
                    {card.items.map((it, j) => (
                      <li key={j} className={j === 2 ? 'unavail' : ''}>
                        {j < 2 ? '✓' : '✕'} {it}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Reservation & Booking Form ── */}
      <section
        className="rd-booking-section"
        style={{ backgroundImage: `url(${slide2})` }}
      >
        <div className="rd-booking-overlay" />
        <div className="rd-container rd-booking-inner">
          {/* Left */}
          <div className="rd-booking-info">
            <div className="rd-stars">★★★★★</div>
            <h5>Each of our guest rooms feature a private bath, wi-fi, cable television and include full breakfast.</h5>
            <div className="rd-res-strip">
              <span className="rd-res-icon large">📞</span>
              <div>
                <p className="rd-res-label gold">Reservation</p>
                <a className="rd-res-call-num" href="tel:8551004444">855 100 4444</a>
              </div>
            </div>
            <p className="rd-toll-free">✓ <small>Call us, it's toll-free.</small></p>
          </div>

          {/* Right — Booking form */}
          <div className="rd-booking-form anim anim-right">
            <div className="rd-form-head">
              <h6>Online Booking</h6>
              <h4>Hotel Booking Form</h4>
            </div>
            <form>
              <div className="rd-form-group">
                <label>Check In</label>
                <input type="date" />
              </div>
              <div className="rd-form-group">
                <label>Check Out</label>
                <input type="date" />
              </div>
              <div className="rd-form-row">
                <div className="rd-form-group">
                  <label>Adults</label>
                  <select>
                    <option>1</option><option>2</option>
                    <option>3</option><option>4</option>
                  </select>
                </div>
                <div className="rd-form-group">
                  <label>Children</label>
                  <select>
                    <option>0</option><option>1</option>
                    <option>2</option><option>3</option>
                  </select>
                </div>
              </div>
              <button type="submit" className="rd-form-submit">Check Availability</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default RoomDetails;
