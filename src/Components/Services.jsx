import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Services.css';
import '../animations.css';


const complimentaryServices = [
  {
    subtitle: 'Complimentary',
    title: 'Breakfast & Refreshments',
    description: 'Guests lodging with us can avail Indian & Continental breakfast, bottled mineral water (1000ml), and access to a mini fridge.',
    image: 'https://sasthapuri.com/images/gallery/b-10.jpg',
    link: '/restaurant',
    align: 'left'
  },
  {
    subtitle: 'Complimentary',
    title: 'Essential Toiletries',
    description: 'We provide premium soap, dental kit, comb, shampoo, moisturizer, shoeshine strip, and an all-purpose kit for a fresh and comfortable stay.',
    image: 'https://images.trvl-media.com/lodging/112000000/111120000/111118900/111118831/08ba5b1e.jpg?impolicy=resizecrop&rw=1200&ra=fit',
    link: '#',
    align: 'right'
  },
  {
    subtitle: 'Complimentary',
    title: 'Connectivity & Convenience',
    description: 'Stay connected with free internet access and a daily newspaper. We also offer a hair dryer, left luggage facility, guest stationary, and valet parking.',
    image: 'https://sasthapuri.com/images/gallery/b-11.jpg',
    link: '#',
    align: 'left'
  },
  {
    subtitle: 'Complimentary',
    title: 'Grooming & Entertainment',
    description: 'We provide a shaving kit, shower cap, and foreign exchange services. Along with this, high-quality guest amenities and multi-channel TV entertainment can be enjoyed.',
    image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/18/68/ed/executive-suite.jpg?w=900&h=500&s=1',
    link: '#',
    align: 'right'
  },
  {
    subtitle: 'On Request',
    title: 'Special Guest Services',
    description: 'Guests can request a wheelchair, wake-up call service, and first aid kit. An iron & iron board and safe deposit locker are also available on a complimentary basis.',
    image: 'https://images.trvl-media.com/lodging/112000000/111120000/111118900/111118831/954b8dc6.jpg?impolicy=resizecrop&rw=1200&ra=fit',
    link: '#',
    align: 'left'
  },
];

const chargeableServices = [
  {
    subtitle: 'Chargeable',
    title: 'Travel Desk & Business Center',
    description: 'Our travel desk assists with bookings, tours, and itineraries. The business center offers laser printing and professional secretarial support for all your business needs.',
    image: 'https://images.trvl-media.com/lodging/112000000/111120000/111118900/111118831/94f465d0.jpg?impolicy=resizecrop&rw=1200&ra=fit',
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
    image: 'https://images.trvl-media.com/lodging/112000000/111120000/111118900/111118831/7b2aaabe.jpg?impolicy=resizecrop&rw=1200&ra=fit',
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
