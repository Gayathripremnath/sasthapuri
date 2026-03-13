import React, { useState, useEffect, useRef } from "react";
import { Link } from 'react-router-dom';
import './Home.css';
import imgh1 from '../assets/slider/1.jpg';
import imgh2 from '../assets/slider/2.jpg';
import imgh3 from '../assets/slider/3.jpg';
import room1 from "../assets/rooms/1.jpg";
import room2 from "../assets/rooms/2.jpg";
import room12 from "../assets/rooms/12.jpg";
import worldIcon from '../assets/world.png';
import bedIcon from '../assets/bed.png';
import foodIcon from '../assets/food-serving.png';
import BookingModal from './BookingModal';

const services = [
  {
    title: 'Pick Up & Drop',
    description: "We'll pick up from airport while you comfy on your ride, mus nellentesque habitant.",
    icon: (
          <img src={worldIcon} alt="Pick up and drop world icon" className="service-image" />
    ),
  },
  {
    title: 'Parking Space',
    description: 'Fusce tincidunt nis ace park norttito sit amet space, mus nellentesque habitant.',
    icon: (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <rect x="11" y="24" width="42" height="18" rx="4" />
        <path d="M18 24 24 14h16l6 10" />
        <circle cx="19" cy="45" r="4" />
        <circle cx="45" cy="45" r="4" />
        <path d="M25 31h14M14 33h7M43 33h7" />
      </svg>
    ),
  },
  {
    title: '24hrs Room Service',
    description: 'Room tincidunt nis ace park norttito sit amet space, mus nellentesque habitant.',
    icon: (
        <img src={bedIcon} alt="24 hour room service bed icon" className="service-image" />
    ),
  },
  {
    title: 'Multi Cuisine Restaurant',
    description: 'Fusce tincidunt nis ace park norttito sit amet space, mus nellentesque habitant.',
    icon: (
            <img src={foodIcon} alt="Multi cuisine restaurant food icon" className="service-image" />

    ),
  },
  {
    title: 'Conference Hall',
    description: 'Fusce tincidunt nis ace park norttito sit amet space, mus nellentesque habitant.',
    icon: (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <rect x="12" y="16" width="40" height="36" />
        <path d="M12 26h40M22 12v8M42 12v8" />
        <circle cx="22" cy="34" r="2.5" />
        <circle cx="32" cy="34" r="2.5" />
        <circle cx="42" cy="34" r="2.5" />
        <circle cx="22" cy="44" r="2.5" />
        <circle cx="32" cy="44" r="2.5" />
        <circle cx="42" cy="44" r="2.5" />
      </svg>
    ),
  },
  {
    title: 'Doctor on Call',
    description: 'Eat tincidunt nisa ace park norttito sit amet space, mus nellentesque habitant.',
    icon: (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <circle cx="32" cy="18" r="10" />
        <path d="M18 52v-6c0-8 6-14 14-14s14 6 14 14v6" />
      </svg>
    ),
  },
];

const rooms = [
  {
    id: 'room1',
    title: 'Executive Room',
    price: '₹ 3600 + TAX NIGHT',
    image: room1,
  },
  {
    id: 'room2',
    title: 'Standard Delux',
    price: '₹ 2600 + TAX NIGHT',
    image: room2,
  },
  {
    id: 'room3',
    title: 'Standard Room',
    price: '₹ 1800 + TAX NIGHT',
    image: room12,
  },
];

const experiences = [
  {
    id: 'experience-restaurant',
    label: 'Discover',
    title: 'Multi Cuisine Restaurant',
    description:
      'Inilla duiman at elit finibus viverra nec a lacus themo the nesudea seneoice missuacipit non sagle the fermen ziverra tristiqu duru the ivite dianen onen nivami accersion augue artine.',
    image: 'https://sasthapuri.com/web_demo/img/rooms/4.jpg',
  },
  {
    id: 'experience-conference',
    label: 'Experiences',
    title: 'Conference Hall',
    description:
      'Inilla duiman at elit finibus viverra nec a lacus themo the nesudea seneoice missuacipit non sagle the fermen ziverra tristiqu duru the ivite dianen onen nivami accersion augue artine.',
    image: 'https://sasthapuri.com/web_demo/img/rooms/7.jpg',
  },
  {
    id: 'experience-business',
    label: 'Business Center',
    title: 'Business Center',
    description:
      'Inilla duiman at elit finibus viverra nec a lacus themo the nesudea seneoice missuacipit non sagle the fermen ziverra tristiqu duru the ivite dianen onen nivami accersion augue artine.',
    image: 'https://sasthapuri.com/web_demo/img/rooms/15.jpg',
  },
];

const Home = () => {
  const progressPathRef = useRef(null);
  const progressWrapRef = useRef(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState('');

  const openBooking = (roomTitle = '') => {
    setSelectedRoom(roomTitle);
    setIsBookingOpen(true);
  };

  useEffect(() => {
    // Original experience-row observer
    const rows = document.querySelectorAll('.experience-row');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          }
        });
      },
      { threshold: 0.2 }
    );

    rows.forEach((row) => observer.observe(row));
    return () => observer.disconnect();
  }, []);

  // Generic anim observer
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

  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);

  return (
    <>
      <div className="home-wrapper">
        <div className="home">
          <div className="slideshow-container">
            <div className="slide" style={{ backgroundImage: `url(${imgh1})` }}></div>
            <div className="slide" style={{ backgroundImage: `url(${imgh2})` }}></div>
            <div className="slide" style={{ backgroundImage: `url(${imgh3})` }}></div>
          </div>

          <div className="reservation-rail" id="reservation">
            <span className="reservation-label">RESERVATION</span>
            <a className="reservation-number" href="tel:+914952723281">
              +91-4952-2723281 (5 LINES)
            </a>
            <a className="reservation-call" href="tel:+914952723281" aria-label="Call reservation">
              ☎
            </a>
          </div>

          <div className="content-overlay anim anim-up">
            <div className="stars">★★★</div>
            <h5 className="welcome-text">WELCOME TO SASTHAPURI</h5>
            <h1 className="main-heading" style={{ padding: '10px', letterSpacing: '.9rem' }}>STAY WITH COMFORT</h1>
            <h1 className="sub-heading" style={{ padding: '10px', letterSpacing: '.9rem' }}>LEAVE WITH MEMORIES</h1>

            <div className="action-button">
              <button className="btn-luxury" onClick={() => openBooking('')}>Rooms & Restaurant</button>
            </div>
          </div>
        </div>

        <section className="services-section" id="services">
          <div className="section-title services-title anim anim-up">
            <h5>OUR SERVICES</h5>
            <h2>Hotel Facilities</h2>
          </div>

          <div className="services-grid">
            {services.map((service, idx) => (
              <article className={`service-card anim anim-up anim-d${(idx % 6) + 1}`} key={service.title}>
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="rooms-section" id="rooms">
            <div className='room-sec'>
          <div className="rooms-title services-title">
            <h5>The Hotel Sasthapuri</h5>
            <h2>Rooms</h2>
          </div>

          <div className="rooms-grid">
            {rooms.map((room, idx) => (
              <article
                className={`room-card room-card-featured anim anim-up anim-d${(idx % 6) + 1}`}
                id={room.id}
                key={room.id}
                style={{ backgroundImage: `url('${room.image}')` }}
              >
                <div className="room-card-overlay"></div>
                <button 
                  className="room-book-tag" 
                  onClick={() => openBooking(room.title)}
                  style={{ cursor: 'pointer' }}
                >
                  BOOK
                </button>
                <div className="room-card-content">
                  <p className="room-price">{room.price}</p>
                  <h3>{room.title}</h3>
                  <div className="room-card-footer">
                    <div className="room-amenities" aria-hidden="true">
                      <span className="amenity-icon">
                        <svg viewBox="0 0 24 24"><path d="M3 11h18M5 11V7h14v4M4 17v-6m16 6v-6M7 17v-3m10 3v-3" /></svg>
                      </span>
                      <span className="amenity-icon">
                        <svg viewBox="0 0 24 24"><path d="M6 18V8a3 3 0 0 1 3-3h6M8 18h8M14 5a4 4 0 0 1 0 8H8" /></svg>
                      </span>
                      <span className="amenity-icon">
                        <svg viewBox="0 0 24 24"><path d="M5 10h14l2 4H3l2-4Zm1 4v4m12-4v4M9 10V7a3 3 0 1 1 6 0v3" /></svg>
                      </span>
                      <span className="amenity-icon">
                        <svg viewBox="0 0 24 24"><path d="M4 12h16M6 12V8h12v4M5 16h14M7 16v2m10-2v2" /></svg>
                      </span>
                    </div>
                    <div className="room-actions">
                        <Link className="room-details-link" to="/room-details">Details</Link>
                      </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
          </div>
        </section>

        <section className="experience-section" id="experiences">
          <div className="experience-grid">
            {experiences.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  className={`experience-row ${isEven ? 'image-left' : 'image-right'}`}
                  key={item.id}
                >
                  <div
                    className={`experience-media ${isEven ? 'slide-from-left' : 'slide-from-right'}`}
                    style={{ backgroundImage: `url(${item.image})` }}
                    aria-label={item.title}
                  />

                  <div
                    className={`experience-content ${isEven ? 'slide-from-right' : 'slide-from-left'}`}
                  >
                    <p className="experience-label">{item.label}</p>
                    <h3>{item.title}</h3>
                    <p className="experience-description">{item.description}</p>
                    <button className="experience-cta" type="button">
                      Learn More
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <section className="promo-section anim anim-up" id="promo">
          <div
            className="promo-overlay"
            style={{
              backgroundImage:
                "linear-gradient(180deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.45) 100%), url('https://sasthapuri.com/web_demo/img/rooms/1.jpg')"
            }}
          >
            <div className="promo-stars">★★★</div>
            <p className="promo-kicker">THE HOTEL SASTHAPURI</p>
            <h2 className="promo-title">Promotional Video</h2>
            <a
              className="promo-play anim anim-scale"
              href="#"
            >
              <span className="play-icon" aria-hidden="true" />
            </a>
          </div>
        </section>
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

      <BookingModal 
        isOpen={isBookingOpen} 
        onClose={() => setIsBookingOpen(false)} 
        initialRoom={selectedRoom} 
      />

    </>
  );
};

export default Home;
