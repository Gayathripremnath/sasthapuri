import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Services.css';
import '../animations.css';


const complimentaryServices = [
  {
    subtitle: 'Complimentary',
    title: 'Dining & Refreshments',
    description: 'Guests lodging with us can avail Indian & Continental breakfast and bottled mineral water (1000ml). Along with it, high quality guest amenities and multi-channel TV entertainment can be enjoyed.',
    image: 'https://sasthapuri.com/images/gallery/b-1.jpg',
    link: '/restaurant',
    align: 'left'
  },
  {
    subtitle: 'Complimentary',
    title: 'Personal Care Amenities',
    description: 'We provide premium soap, dental kit, comb, shampoo, moisturizer, shoeshine strip, all-purpose kit, shaving kit, and shower cap — everything you need for a fresh and comfortable stay.',
    image: 'https://sasthapuri.com/images/gallery/b-8.jpg',
    link: '#',
    align: 'right'
  },
  {
    subtitle: 'Complimentary',
    title: 'Connectivity & Convenience',
    description: 'Stay connected with free internet access and daily newspaper. We also provide hair dryer, mini fridge, left luggage facility, guest stationary, valet parking, and foreign exchange services.',
    image: 'https://sasthapuri.com/images/gallery/b-11.jpg',
    link: '#',
    align: 'left'
  },
  {
    subtitle: 'On Request',
    title: 'Special Guest Services',
    description: 'Guests can request a wheelchair, wake-up call service, first aid kit, iron & iron board, and safe deposit locker — all available on a complimentary basis to ensure a seamless stay.',
    image: 'https://sasthapuri.com/images/gallery/b-4.jpg',
    link: '#',
    align: 'right'
  },
];

const chargeableServices = [
  {
    subtitle: 'Chargeable',
    title: 'Travel Desk & Business Center',
    description: 'Our travel desk assists with bookings, tours, and itineraries. The business center offers laser printing and professional secretarial support for all your business needs.',
    image: 'https://sasthapuri.com/images/gallery/b-5.jpg',
    link: '#',
    align: 'left'
  },
  {
    subtitle: 'Chargeable',
    title: 'Laundry & Car Wash',
    description: 'Avail our professional in-house laundry service for careful garment care. Our car wash facility is also available to keep your vehicle clean and presentable throughout your stay.',
    image: 'https://sasthapuri.com/images/gallery/b-6.jpg',
    link: '#',
    align: 'right'
  },
  {
    subtitle: 'Chargeable',
    title: 'Doctor on Call & Multi Cuisine Restaurant',
    description: 'A doctor on call is available for any medical emergencies. Our multi-cuisine restaurant serves a wide variety of Indian, Continental, and international dishes with 24-hour room service.',
    image: 'https://sasthapuri.com/images/gallery/b-8.jpg',
    link: '/restaurant',
    align: 'left'
  },
  {
    subtitle: 'Chargeable',
    title: 'Board Room, Conference Hall & STD/ISD',
    description: 'Our fully equipped board room and conference hall are ideal for corporate meetings and seminars. STD/ISD communication facilities are also available for business and international calls.',
    image: 'https://sasthapuri.com/images/gallery/b-7.jpg',
    link: '#',
    align: 'right'
  },
];

const Services = () => {
  const progressPathRef = useRef(null);
  const progressWrapRef = useRef(null);



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
      { threshold: 0.1 }
    );
    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const renderRows = (services) =>
    services.map((srv, idx) => (
      <div key={idx} className={`srv-row ${srv.align === 'right' ? 'srv-reverse' : ''}`}>
        <div className="srv-col-img anim anim-left">
          <div className="srv-img-box">
            <img src={srv.image} alt={srv.title} />
          </div>
        </div>
        <div className="srv-col-text bg-cream anim anim-right">
          <div className="srv-content">
            <h6>{srv.subtitle}</h6>
            <h4>{srv.title}</h4>
            <p>{srv.description}</p>
            <Link to={srv.link} className="srv-btn"><span>Learn More</span></Link>
          </div>
        </div>
      </div>
    ));

  return (
    <div className="services-page">
      {/* Progress scroll totop */}
      <div className="progress-wrap cursor-pointer" ref={progressWrapRef} onClick={scrollToTop} role="button" aria-label="Back to top">
        <svg className="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
          <path
            ref={progressPathRef}
            d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
          />
        </svg>
      </div>



      <header className="srv-hero">
        <div className="srv-hero-overlay" />
        <div className="srv-hero-content anim anim-up">
          <h5>Discover</h5>
          <h1>Our Services</h1>
        </div>
      </header>

      {/* ── Complimentary Section ── */}
      <section className="srv-list section-padding" style={{ paddingBottom: '60px' }}>
        <div className="srv-container">
          <div className="srv-category-heading anim anim-up">
            <h5>Included With Your Stay</h5>
            <h2>On Complimentary Basis</h2>
          </div>
          {renderRows(complimentaryServices)}
        </div>
      </section>

      {/* ── Chargeable Section ── */}
      <section className="srv-list section-padding" style={{ paddingTop: '0' }}>
        <div className="srv-container">
          <div className="srv-category-heading anim anim-up">
            <h5>Additional Services</h5>
            <h2>On Chargeable Basis</h2>
          </div>
          {renderRows(chargeableServices)}
        </div>
      </section>


    

    </div>
  );
};

export default Services;
