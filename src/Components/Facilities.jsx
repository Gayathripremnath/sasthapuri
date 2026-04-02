import React, { useEffect, useRef } from 'react';
import './Facilities.css';
import '../animations.css';

const Facilities = () => {
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

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

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
    <div className="facilities-page">

      {/* Progress scroll to top */}
      <div className="progress-wrap cursor-pointer" ref={progressWrapRef} onClick={scrollToTop} role="button" aria-label="Back to top">
        <svg className="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
          <path ref={progressPathRef} d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
        </svg>
      </div>

      {/* Hero */}
      <header className="fac-hero">
        <div className="fac-hero-overlay" />
        <div className="fac-hero-content anim anim-up">
          <h5>In-House Guests</h5>
          <h1>Facilities &amp; Amenities</h1>
        </div>
      </header>

      {/* Intro Strip */}
      <section className="fac-intro">
        <div className="fac-container">
          <div className="fac-intro-text anim anim-up">
            <h5>Facilities and Amenities Provided for In-House Guests</h5>
            <p>
              At Hotel Sasthapuri, we believe every guest deserves a stay that is comfortable, convenient, and memorable.
              Our wide range of facilities and amenities — offered on both complimentary and chargeable basis — ensures that all your needs are met under one roof.
            </p>
          </div>
        </div>
      </section>


      {/* ── Complimentary Section ── */}
      <section className="fac-list section-padding" style={{ paddingBottom: '60px' }}>
        <div className="fac-container">
          <div className="fac-category-heading anim anim-up">
            <h5>Included With Your Stay</h5>
            <h2>On Complimentary Basis</h2>
          </div>

          <div className="fac-bullets anim anim-up">
            <ul>
              <li>Breakfast — Indian &amp; Continental</li>
              <li>Bottled Mineral Water (1000ml)</li>
              <li>Mini Fridge</li>
              <li>Soap, Dental Kit, Comb, Shampoo, Moisturizer, Shoeshine Strip, All-Purpose Kit</li>
              <li>Free Internet Access &amp; Daily Newspaper</li>
              <li>Hair Dryer &amp; Left Luggage</li>
              <li>Guest Stationary &amp; Valet Parking</li>
              <li>Shaving Kit, Shower Cap &amp; Foreign Exchange</li>
              <li>High Quality Guest Amenities &amp; Multi-Channel TV Entertainment</li>
            </ul>
            <ul>
              <li><strong>On Request:</strong> Wheel Chair, Wake Up Call Service, First Aid Kit</li>
              <li><strong>On Request:</strong> Iron &amp; Iron Board</li>
              <li><strong>On Request:</strong> Safe Deposit Locker</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ── Chargeable Section ── */}
      <section className="fac-list section-padding" style={{ paddingTop: '0' }}>
        <div className="fac-container">
          <div className="fac-category-heading anim anim-up">
            <h5>Additional Services</h5>
            <h2>On Chargeable Basis</h2>
          </div>

          <div className="fac-bullets anim anim-up">
            <ul>
              <li>Travel Desk</li>
              <li>Business Center &amp; Laser Prints</li>
              <li>In-house Laundry</li>
              <li>Car Wash</li>
              <li>Doctor on Call</li>
            </ul>
            <ul>
              <li>Multi Cuisine Restaurant</li>
              <li>Board Room &amp; Conference Hall</li>
              <li>STD/ISD Facilities</li>
              <li>24hrs Room Service</li>
            </ul>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Facilities;
