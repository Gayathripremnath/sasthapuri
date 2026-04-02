import React, { useEffect, useRef } from 'react';
import './MultiCuisine.css';
import '../animations.css';

const MultiCuisine = () => {
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
    <div className="multi-cuisine-page">
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
      <header className="mc-hero">
        <div className="mc-hero-overlay" />
        <div className="mc-hero-content anim anim-up">
          <h5>The Taste of Tradition</h5>
          <h1>Multi Cuisine Restaurant</h1>
        </div>
      </header>

      {/* Main Content Section */}
      <section className="mc-content-section section-padding">
        <div className="mc-container">
          <div className="mc-grid">
            <div className="mc-text anim anim-left">
              <div className="stars">★★★</div>
              <h6 className="mc-subtitle">Sasthapuri Hotels</h6>
              <h2 className="mc-title">Delicious Dining Experience</h2>
              <p>
                Sasthapuri Hotels is a destination where taste meets tradition, offering a delightful
                multi-cuisine dining experience in a serene and refreshing environment. The menu
                features a wide range of Indian, Chinese, and Continental dishes, carefully crafted to
                satisfy every palate.
              </p>
              <p>
                From authentic South Indian flavors to rich North Indian delicacies, aromatic biryanis,
                fresh seafood, and popular fast foods, every dish is prepared with quality, freshness,
                and care. Whether it’s a hearty breakfast, a relaxed lunch, or a memorable dinner,
                guests can enjoy delicious meals in a comfortable setting.
              </p>
              <p>
                With a welcoming ambiance, spacious seating, and excellent service, Sasthapuri is an
                ideal place for families, friends, and travelers to enjoy great food and create
                unforgettable moments.
              </p>
            </div>
            <div className="mc-images anim anim-right">
              <div className="mc-img-box main-img">
                <img src="https://sasthapuri.com/web_demo/img/rooms/7.jpg" alt="Restaurant Interior" />
              </div>
              <div className="mc-img-box sub-img">
                <img src="https://sasthapuri.com/images/gallery/b-8.jpg" alt="Delicious Food" />
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default MultiCuisine;
