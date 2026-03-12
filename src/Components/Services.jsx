import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Services.css';
import '../animations.css';

const servicesData = [
  {
    subtitle: 'Discover',
    title: 'The Restaurant',
    description: 'Restaurant inilla duiman at elit finibus viverra nec a lacus themo the nesudea seneoice misuscipit non sagie the fermen ziverra tristiue duru the ivite dianne onen nivami acsestion augue artine.',
    image: 'https://sasthapuri.com/web_demo/img/restaurant/1.jpg',
    link: '/restaurant',
    align: 'left'
  },
  {
    subtitle: 'Experiences',
    title: 'Spa Center',
    description: 'Spa center inilla duiman at elit finibus viverra nec a lacus themo the nesudea seneoice misuscipit non sagie the fermen ziverra tristiue duru the ivite dianne onen nivami acsestion augue artine.',
    image: 'https://sasthapuri.com/web_demo/img/spa/3.jpg',
    link: '#',
    align: 'right'
  },
  {
    subtitle: 'Modern',
    title: 'Fitness Center',
    description: 'Restaurant inilla duiman at elit finibus viverra nec a lacus themo the nesudea seneoice misuscipit non sagie the fermen ziverra tristiue duru the ivite dianne onen nivami acsestion augue artine.',
    image: 'https://sasthapuri.com/web_demo/img/spa/2.jpg',
    link: '#',
    align: 'left'
  },
  {
    subtitle: 'Experiences',
    title: 'The Health Club & Pool',
    description: 'The health club & pool at elit finibus viverra nec a lacus themo the nesudea seneoice misuscipit non sagie the fermen ziverra tristiue duru the ivite dianne onen nivami acsestion augue artine.',
    image: 'https://sasthapuri.com/web_demo/img/spa/1.jpg',
    link: '#',
    align: 'right'
  }
];

const Services = () => {
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
      { threshold: 0.1 }
    );
    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

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

      <div className="preloader-bg"></div>
      <div id="preloader"><div className="loader"><span></span></div></div>

      <header className="srv-hero">
        <div className="srv-hero-overlay" />
        <div className="srv-hero-content anim anim-up">
          <h5>Discover</h5>
          <h1>Our Services</h1>
        </div>
      </header>

      <section className="srv-list section-padding">
        <div className="srv-container">
          {servicesData.map((srv, idx) => (
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
          ))}
        </div>
      </section>

      {/* Booking Form Section */}
      <section className="srv-booking bg-img bg-fixed" style={{ backgroundImage: "url('https://sasthapuri.com/web_demo/img/slider/2.jpg')" }}>
        <div className="srv-booking-overlay" />
        <div className="srv-container">
          <div className="srv-booking-grid">
            <div className="srv-booking-info anim anim-left">
              <div className="stars">★★★★★</div>
              <h5>Each of our guest rooms feature a private bath, wi-fi, cable television and include full breakfast.</h5>
              <div className="srv-res-strip">
                <div className="icon">📞</div>
                <div className="text">
                  <p>Reservation</p>
                  <a href="tel:+914952723281">+91-4952-2723281</a>
                </div>
              </div>
            </div>
            <div className="srv-booking-box anim anim-right">
              <div className="head-box">
                <h6>Rooms & Suites</h6>
                <h4>Hotel Booking Form</h4>
              </div>
              <form>
                <div className="form-group"><label>Check In</label><input type="date" /></div>
                <div className="form-group"><label>Check Out</label><input type="date" /></div>
                <button type="submit" className="srv-submit-btn">Check Availability</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
