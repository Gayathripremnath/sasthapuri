import React, { useEffect, useRef } from 'react';
import './ConferenceHall.css';
import '../animations.css';

import hall from '../assets/hall.JPG'
const ConferenceHall = () => {
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

  return (
    <div className="conference-hall-page">
      {/* Progress scroll to top */}
      <div className="progress-wrap cursor-pointer" ref={progressWrapRef} onClick={scrollToTop} role="button" aria-label="Back to top">
        <svg className="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
          <path
            ref={progressPathRef}
            d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
          />
        </svg>
      </div>

      {/* Hero Section */}
      <header className="ch-hero">
        <div className="ch-hero-overlay" />
        <div className="ch-hero-content anim anim-up">
          <h5>Meetings & Events</h5>
          <h1>Conference Hall</h1>
        </div>
      </header>

      {/* Main Content Section */}
      <section className="ch-content-section section-padding">
        <div className="ch-container">
          <div className="ch-grid">
            <div className="ch-text anim anim-left">
              <div className="stars">★★★</div>
              <h6 className="ch-subtitle">Professional Spaces</h6>
              <h2 className="ch-title">Thoughtfully Designed Venues</h2>
              <p>
                Our spacious conference hall is thoughtfully designed to host meetings, seminars,
                corporate events, and special gatherings with ease and professionalism. Featuring a
                well-planned layout and comfortable seating arrangements, it creates the perfect
                environment for productive discussions and successful events.
              </p>
              <p>
                Equipped with modern amenities such as audio-visual support, presentation facilities,
                high-speed connectivity, and proper lighting, the hall ensures a seamless experience for
                both organizers and attendees. The calm and organized atmosphere helps maintain
                focus, making it suitable for business meetings, training sessions, workshops, and
                conferences.
              </p>
              <p>
                Our dedicated team is always available to assist with arrangements, ensuring every
                detail is handled with care. Whether it’s a small business meeting or a large corporate
                event, our conference hall offers flexibility, comfort, and efficiency to meet your
                requirements.
              </p>
            </div>
            <div className="ch-images anim anim-right">
              <div className="ch-img-box main-img">
                <img src={hall} alt="Conference Hall Interior" />
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default ConferenceHall;
