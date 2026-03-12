import React, { useEffect, useState, useRef } from 'react';
import './Attractions.css';
import '../animations.css';

import spa1 from '../assets/spa/1.jpg';
import spa2 from '../assets/spa/2.jpg';
import spa3 from '../assets/spa/3.jpg';
import spa4 from '../assets/spa/4.jpg';

/* ── Slider images ── */
const slides = [spa3, spa1, spa2];

/* ── Services data ── */
const services = [
  {
    img: spa3,
    label: 'Experiences',
    title: 'Spa Center',
    desc: 'Spa center inilla duiman at elit finibus viverra nec a lacus themo the drudea seneoice misuscipit non sagie the fermen. Viverra tristique jusio the ivite dianne onen nivami acsestion augue artine.',
    hours: 'Daily: 7:00 AM – 9:00 PM',
    imgLeft: true,
  },
  {
    img: spa2,
    label: 'Modern',
    title: 'Fitness Center',
    desc: 'Fitness center duiman at elit finibus viverra nec a lacus themo the drudea seneoice misuscipit non sagie the fermen. Viverra tristique jusio the ivite dianne onen nivami acsestion augue artine.',
    hours: 'Daily: 6:00 AM – 9:00 PM',
    imgLeft: false,
  },
  {
    img: spa1,
    label: 'Experiences',
    title: 'The Health Club & Pool',
    desc: 'Spa center inilla duiman at elit finibus viverra nec a lacus themo the drudea seneoice misuscipit non sagie the fermen. Viverra tristique jusio the ivite dianne onen nivami acsestion augue artine.',
    hours: 'Daily: 10:00 AM – 7:00 PM',
    imgLeft: true,
  },
  {
    img: spa4,
    label: 'Relaxation',
    title: 'Sauna & Steam Room',
    desc: 'Sauna inilla duiman at elit finibus viverra nec a lacus themo the drudea seneoice misuscipit non sagie the fermen. Viverra tristique jusio the ivite dianne onen nivami acsestion augue artine.',
    hours: 'Daily: 8:00 AM – 10:00 PM',
    imgLeft: false,
  },
];

/* ── FAQ data ── */
const faqs = [
  {
    q: 'Arriving at The Spa',
    a: 'Please arrive at The Spa 15 minutes prior to your scheduled treatment and enjoy the calm and serenity of The Spa atmosphere. Arriving late makes it necessary to curtail the time for your treatment.',
  },
  {
    q: 'Mobile Phones',
    a: 'Kindly refrain from using your mobile phone in The Spa premises. Please keep your mobile phone on silent mode at all times.',
  },
  {
    q: 'Valuables',
    a: 'We provide a secure place for your personal items inside The Spa complex. However, we do not accept liability for loss or damage. We recommend valuable items are stored inside the safe located in your hotel room/suite.',
  },
  {
    q: 'Health Matters',
    a: 'Please communicate health conditions such as high blood pressure and allergies, as well as pregnancy or any health-related concerns you may have when making your appointment. We do not recommend the consumption of alcohol before or directly after spa treatments.',
  },
  {
    q: 'Children',
    a: 'The minimum age for entry to The Spa, The Health Club and the hydrothermal facilities is 16 years of age. Children under the age of 16 may use the hotel pool if they are accompanied by a parent/adult.',
  },
  {
    q: 'Safety',
    a: 'The max depth of the pool is 1.60 m. There is no lifeguard at the pool. Children may only use the pool if accompanied by an adult or parent/guardian.',
  },
  {
    q: 'Smoking',
    a: 'Kindly note that you are not allowed to smoke in The Spa, The Health Club or sauna area.',
  },
];

/* ── Component ── */
const Attractions = () => {
  const progressPathRef = useRef(null);
  const progressWrapRef = useRef(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const [openFaq, setOpenFaq] = useState(null);

  /* preloader */
  useEffect(() => {
    const t = setTimeout(() => {
      const pl = document.getElementById('preloader');
      const bg = document.querySelector('.preloader-bg');
      if (pl) pl.style.display = 'none';
      if (bg) bg.style.display = 'none';
    }, 1000);
    return () => clearTimeout(t);
  }, []);

  /* hero auto-slide */
  useEffect(() => {
    const id = setInterval(() => setActiveSlide(s => (s + 1) % slides.length), 4500);
    return () => clearInterval(id);
  }, []);

  /* animate-in on scroll — covers both .at-animate and .anim classes */
  useEffect(() => {
    const els = document.querySelectorAll('.at-animate, .anim');
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('at-visible', 'anim-show');
          obs.unobserve(e.target);
        }
      }),
      { threshold: 0.12 }
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

  const toggleFaq = i => setOpenFaq(prev => (prev === i ? null : i));

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

      {/* ── Preloader ── */}
      <div className="preloader-bg"></div>
      <div id="preloader">
        <div id="preloader-status">
          <div className="preloader-position loader"><span></span></div>
        </div>
      </div>

      {/* ── Scroll Progress ── */}
      <div className="at-progress-wrap">
        <svg className="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
          <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
        </svg>
      </div>

      {/* ── Hero Slider ── */}
      <div className="at-hero">
        {slides.map((src, i) => (
          <div
            key={i}
            className={`at-hero-slide ${i === activeSlide ? 'active' : ''}`}
            style={{ backgroundImage: `url(${src})` }}
          />
        ))}
        <div className="at-hero-overlay" />
        <div className="at-hero-content anim anim-up">
          <p className="at-hero-sub">Sasthapuri Hotel</p>
          <h1 className="at-hero-title">Spa &amp; Attractions</h1>
          <ul className="at-breadcrumb">
            <li><a href="/">Home</a></li>
            <li className="at-sep">/</li>
            <li className="at-active">Attractions</li>
          </ul>
        </div>
        <div className="at-hero-dots">
          {slides.map((_, i) => (
            <button
              key={i}
              className={`at-dot ${i === activeSlide ? 'active' : ''}`}
              onClick={() => setActiveSlide(i)}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
        {/* bounce arrow */}
        <div className="at-bounce-arrow">
          <span>↓</span>
        </div>
      </div>

      {/* ── Intro Section ── */}
      <section className="at-intro">
        <div className="at-container">
          <div className="at-stars anim anim-fade">★★★★★</div>
          <div className="at-subtitle anim anim-up anim-d1">So Many Ways to Unwind</div>
          <h2 className="at-section-title anim anim-up anim-d2">Spa &amp; Wellness</h2>
          <p className="at-intro-text anim anim-up anim-d3">
            Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent volutpat nibh ac sodales
            sodales. Nunc tincidunt erat sed nisi faucibus, eget sagittis libero imperdiet. Nunc risus magna,
            imperdiet gravida ultricies in, aliquam a tortor. Vestibulum tristique posuere magna, quis
            elementum neque luctus non. Aenean sed arcu efficitur, commodo justo ut, accumsan massa. Vivamus
            ac risus in felis imperdiet mollis id sit amet odio.
          </p>
          <div className="at-reservation anim anim-up anim-d4">
            <span className="at-res-icon">📞</span>
            <div>
              <p className="at-res-label">Reservations</p>
              <a className="at-res-num" href="tel:8551004444">855 100 4444</a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Services — alternating rows ── */}
      <section className="at-services">
        {services.map((svc, i) => (
          <div
            key={i}
            className={`at-svc-row ${svc.imgLeft ? 'img-left' : 'img-right'} at-animate`}
          >
            <div className="at-svc-img">
              <img src={svc.img} alt={svc.title} />
              <div className="at-svc-img-overlay" />
            </div>
            <div className="at-svc-content">
              <span className="at-svc-label">{svc.label}</span>
              <h3 className="at-svc-title">{svc.title}</h3>
              <p className="at-svc-desc">{svc.desc}</p>
              <p className="at-svc-hours">
                <span className="at-clock-icon">🕐</span> {svc.hours}
              </p>
            </div>
          </div>
        ))}
      </section>

      {/* ── FAQ / Spa Etiquette ── */}
      <section className="at-faq">
        <div className="at-container">
          <div className="at-subtitle anim anim-up">F.A.Qs</div>
          <h2 className="at-section-title anim anim-up anim-d1">Spa Etiquette</h2>

          <div className="at-accordion">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className={`at-acc-block ${openFaq === i ? 'at-acc-open' : ''} anim anim-up anim-d${(i % 4) + 1}`}
              >
                <button
                  className="at-acc-btn"
                  onClick={() => toggleFaq(i)}
                  aria-expanded={openFaq === i}
                >
                  <span className="at-acc-num">0{i + 1}</span>
                  {faq.q}
                  <span className="at-acc-arrow">{openFaq === i ? '−' : '+'}</span>
                </button>
                <div className="at-acc-content">
                  <p>{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Attractions;
