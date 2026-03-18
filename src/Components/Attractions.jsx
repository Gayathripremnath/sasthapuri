import React, { useEffect, useState, useRef } from 'react';
import './Attractions.css';
import '../animations.css';

import spa1 from '../assets/spa/1.jpg';
import spa2 from '../assets/spa/2.jpg';
import spa3 from '../assets/spa/3.jpg';
import spa4 from '../assets/spa/4.jpg';

/* ── Slider images ── */
const slides = [
  'https://www.dtpckozhikode.com/uploads/picture_gallery/gallery_images/kappad-beach-park-kozhikodu-20230602163015499265.webp',
  'https://images.unsplash.com/photo-1693744440108-9a0767f1c3f8?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
];


/* ── Services data ── */
const services = [
  {
    img: 'https://images.unsplash.com/photo-1693744440108-9a0767f1c3f8?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Calicut Beach',
    desc: 'The city nestles on the coast of the Arabian Sea. It is about 1.2 m above sea level. The coastline extends to a length of 15 km. Two piers which are crumbling and the old lighthouse still stand recalling the times when foreign vessels used to anchor near Calicut. The Beach Hospital was built by the British. The Beach Hotel is one of the oldest in Calicut, it was mainly for the British planters to spend weekends away from the plantations..',
    hours: '24 hours',
    imgLeft: true,
  },
  {
    img: 'https://flycnn.com/wp-content/uploads/2024/05/mananchira-square-1024x683.webp',
    title: 'Mananchira Square',
    desc: 'This forms the heart of the city. The name comes from the large pool of clear water bound by laterite stone steps built by Manavedan Raja one of the earlier Zamorins. The park around it is tastefully kept with types of palms, trees and shrubs. Recently there is a move to adorn the city with sculptures and a number of them has come up here. There is an open air theater and a musical fountain.',
    hours: 'Daily: 3:30 PM – 11:00 PM',
    imgLeft: false,
  },
  {
    img: 'https://talimahakshethram.in/images/temple/uploads/imga20230921awa0000ajpg1700454151145.jpg',
    title: 'Taliyil Sree Mahaganapathi Temple',
    desc: 'The Tali Temple was built in the 14th century by Swami Thirumulpad. This temple is one of the greatest attractions of Calicut. It is made with a remarkable combination of laterite along with wood. Also, the rich evidence of the Keralean architecture makes this temple more amazing.This temple is famous not only because of its architecture but due to its annual festival as well. Each year the festival celebrated here consists of various intellectual as well as cultural events.',
    hours: '4:30 AM to 11:00 AM and 5:00 PM to 8:30 PM',
    imgLeft: true,
  },
  {
    img: 'https://www.dtpckozhikode.com/uploads/picture_gallery/gallery_images/kappad-beach-park-kozhikodu-20230602163015499265.webp',
    title: 'Kappad Beach',
    desc: 'Definitely a beautiful beach about 20 km from Calicut. Its historical importance stems from the fact that Vasco da Gama with his sailors landed here in 1498 in 3 ships. This was the start of economic relationship between Europeans and this part of India now called Kerala. Quench your thirst with the nature-flavored tender coconut water which is healthful.',
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
];

/* ── Component ── */
const Attractions = () => {
  const progressPathRef = useRef(null);
  const progressWrapRef = useRef(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const [openFaqs, setOpenFaqs] = useState([]);



  /* hero auto-slide */
  useEffect(() => {
    const id = setInterval(() => setActiveSlide(s => (s + 1) % slides.length), 4500);
    return () => clearInterval(id);
  }, []);

  /* scroll-reveal observer */
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

  const toggleFaq = i => {
    setOpenFaqs(prev =>
      prev.includes(i) ? prev.filter(item => item !== i) : [...prev, i]
    );
  };

  return (
    <>
      {/* Progress scroll totop */}
      <div className="progress-wrap cursor-pointer" ref={progressWrapRef} onClick={scrollToTop} role="button" aria-label="Back to top">
        <svg
          className="progress-circle svg-content"
          width="100%"
          height="100%"
          viewBox="-1 -1 102 102"
        >
          <path
            ref={progressPathRef}
            d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
          />
        </svg>
      </div>




      {/* ── Scroll Progress ── */}
      
      {/* ── Hero Slider ── */}
      <div className="at-hero">
        {slides.map((src, i) => (
          <div
            key={i}
            className={`at-hero-slide ${i === activeSlide ? 'active' : ''}`}
            style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(${src})` }}
          />
        ))}
        <div className="at-hero-overlay" />
        <div className="at-hero-content anim anim-up">
          <p className="at-hero-sub">Sasthapuri Hotel</p>
          <h1 className="at-hero-title"> Attractions</h1>
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
      <section className="at-intro anim anim-up">
        <div className="at-container">
          <div className="at-stars anim anim-fade">★★★★★</div>
          <div className="at-subtitle anim anim-up anim-d1">So Many Ways to Unwind</div>
          <h2 className="at-section-title anim anim-up anim-d2"> Attractions</h2>
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
        <div className="at-container">
          {services.map((svc, i) => (
            <div
              key={i}
              className={`at-svc-row ${svc.imgLeft ? 'img-left' : 'img-right'} anim ${svc.imgLeft ? 'anim-left' : 'anim-right'}`}
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
        </div>
      </section>

      {/* ── FAQ / Spa Etiquette ── */}
      <section className="at-faq anim anim-up">
        <div className="at-container">
          <div className="at-faq-head" style={{ marginBottom: '50px', textAlign: 'center' }}>
            <span className="at-subtitle" style={{ justifyContent: 'center' }}>Guidelines</span>
            <h2 className="at-section-title">FAQ</h2>
          </div>

          <div className="at-accordion">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className={`at-acc-block ${openFaqs.includes(i) ? 'at-acc-open' : ''}`}
              >
                <button
                  className="at-acc-btn"
                  onClick={() => toggleFaq(i)}
                  aria-expanded={openFaqs.includes(i)}
                >
                  <span className="at-acc-num">0{i + 1}</span>
                  <span className="at-acc-title">{faq.q}</span>
                  <span className="at-acc-arrow">+</span>
                </button>
                <div className="at-acc-content">
                  <div className="at-acc-inner-p">
                    <p>{faq.a}</p>
                  </div>
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
