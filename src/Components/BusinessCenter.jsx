import React, { useEffect, useRef } from 'react';
import './BusinessCenter.css';
import '../animations.css';
import hall2 from '../assets/hall2.jpeg';
import hall from '../assets/hall.JPG';

const BusinessCenter = () => {
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
    <div className="business-center-page">
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
      <header className="bc-hero">
        <div className="bc-hero-overlay" />
        <div className="bc-hero-content anim anim-up">
          <h5>Productivity Amplified</h5>
          <h1>Business Center</h1>
        </div>
      </header>

      {/* Main Content Section */}
      <section className="bc-content-section section-padding">
        <div className="bc-container">
          <div className="bc-grid">
            <div className="bc-text anim anim-left">
              <div className="stars">★★★</div>
              <h6 className="bc-subtitle">Corporate Support</h6>
              <h2 className="bc-title">Work with Ease & Efficiency</h2>
              <p>
                Our business center is designed to meet the needs of modern professionals, offering a
                convenient and efficient space for work, meetings, and communication. Whether you
                are traveling for business or need a quiet place to focus, the center provides a
                comfortable and well-equipped environment to stay productive.
              </p>
              <p>
                Guests can access essential facilities such as high-speed internet, printing and
                scanning services, and dedicated workstations. The space is thoughtfully arranged to
                ensure privacy and ease of use, making it ideal for handling emails, preparing
                presentations, or conducting virtual meetings.
              </p>
              <p>
                With a calm atmosphere and reliable support, our business center ensures that all your
                professional requirements are met smoothly. It is the perfect solution for business
                travelers seeking a seamless blend of comfort and productivity.
              </p>
            </div>
            <div className="bc-images anim anim-right">
              <div className="bc-img-box main-img">
                <img src={hall2} alt="Business Center Interior" />
              </div>
              <div className="bc-img-box sub-img">
                <img src={hall} alt="Workstation" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BusinessCenter;
