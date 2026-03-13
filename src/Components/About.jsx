import React, { useState, useEffect, useRef } from 'react';
import './About.css';
import '../../src/animations.css';
import Navbar from './Navbar';
import Sidebar from './Sidebar';





    const testimonials = [
    {
        quote:
        'Hotel dapibus asue metus the nec feusiate eraten miss hendreri net ve ante the lemon sanleo nectan feugiat erat hendrerit necuis ve ante otel inilla duiman at finibus viverra.',
        name: 'Emily Brown',
        role: 'Guest review',
        avatar: 'https://sasthapuri.com/web_demo/img/team/4.jpg',
    },
    {
        quote:
        'Inilla duiman at elit finibus viverra nec a lacus themo the nesudea seneoice missuacipit non sagle the fermen ziverra tristiqu duru the ivite dianen onen nivami accersion augue.',
        name: 'Nolan White',
        role: 'Guest review',
        avatar: 'https://sasthapuri.com/web_demo/img/team/1.jpg',
    },
    {
        quote:
        'Fermen norttito sit space, mus nellentesque habitan. Hotel dapibus asue metus the nec feusiate eraten miss hendreri net ve ante the lemon sanleo nectan feugiat erat hendrerit.',
        name: 'Olivia Martin',
        role: 'Guest review',
        avatar: 'https://sasthapuri.com/web_demo/img/team/5.jpg',
    },
    ];

const About = () => {
    const progressPathRef = useRef(null);
const progressWrapRef = useRef(null);
  const [isSidebarOpen, setIsSidebarOpen] =React. useState(false);
  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);
  const closeSidebar = () => setIsSidebarOpen(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const testimonialCount = testimonials.length;

  /* Auto-advance carousel */
  useEffect(() => {
    const id = setInterval(() =>
      setActiveTestimonial(s => (s + 1) % testimonialCount)
    , 5000);
    return () => clearInterval(id);
  }, [testimonialCount]);

  const prevTestimonial = () =>
    setActiveTestimonial(s => (s - 1 + testimonialCount) % testimonialCount);
  const nextTestimonial = () =>
    setActiveTestimonial(s => (s + 1) % testimonialCount);

  /* ── Scroll-reveal observer ── */
  useEffect(() => {
    const els = document.querySelectorAll('.anim');
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('anim-show'); obs.unobserve(e.target); } }),
      { threshold: 0.12 }
    );
    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const progressPath = progressPathRef.current;
    const progressWrap = progressWrapRef.current;

    if (!progressPath || !progressWrap) return;

    const pathLength = progressPath.getTotalLength();
    progressPath.style.strokeDasharray = `${pathLength} ${pathLength}`;
    progressPath.style.strokeDashoffset = `${pathLength}`;

    const updateProgress = () => {
      const scrollTop = window.pageYOffset;
      const docHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const progress =
        docHeight > 0
          ? pathLength - (scrollTop * pathLength) / docHeight
          : pathLength;

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

  return (
    <div className="about-page">
      <Navbar onMenuClick={toggleSidebar} />
      <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />

      <header className="about-banner" role="banner">
        <div className="about-banner__overlay" />
        <div className="about-banner__content anim anim-up">
          <p className="banner-kicker">Luxury Hotel</p>
          <h1>About Us</h1>
        </div>
      </header>

      <main>
        <section className="about-section" id="about">
          <div className="about-grid">
            <div className="about-copy anim anim-left">
             <div className="stars">★★★</div>

              <span className="section-subtitle">Hotel Sasthapuri</span>
              <h2 className="section-title">Enjoy a Luxury Experience</h2>
              <p>
                Sri. C. Karunakaran Nair, a Calicut based leading businessman in Hotel industry,
                established Sasthapuri in 1978. Hospitality is the keyword for us, because we do
                everything with you in mind.
              </p>
              <p>
                Welcome to the best five-star deluxe hotel experience. From curated cuisine to refined
                rooms and thoughtful service, we create stays filled with comfort and lasting memories.
              </p>
              <div className="about-reservation" id="reservation">
                <div className="icon" aria-hidden="true">☎</div>
                <div className="text">
                  <p>Reservation</p>
                  <a href="tel:+914952723281">855 100 4444</a>
                </div>
              </div>
            </div>

            <div className="about-images anim anim-right">
              <img src="https://sasthapuri.com/web_demo/img/rooms/8.jpg" alt="Lobby" />
              <img src="https://sasthapuri.com/web_demo/img/rooms/2.jpg" alt="Premium room" />
            </div>
          </div>
        </section>

        <section className="testimonials-section" aria-label="Testimonials">
          <div className="testimonials-overlay" />
          <div className="testimonials-inner">
            <div className="testimonials-head anim anim-up">
              <h6>Testimonials</h6>
              <h3>What Clients Say?</h3>
              <div className="line" />
            </div>

            {/* ── Testimonials Carousel ── */}
            <div className="tc-carousel">
              {/* Prev */}
              <button
                className="tc-nav tc-prev"
                onClick={prevTestimonial}
                aria-label="Previous testimonial"
              >&#8249;</button>

              {/* Track */}
              <div className="tc-track">
                {testimonials.map((item, i) => (
                  <article
                    key={item.name}
                    className={`tc-card ${
                      i === activeTestimonial
                        ? 'tc-active'
                        : i === (activeTestimonial - 1 + testimonialCount) % testimonialCount
                        ? 'tc-prev-card'
                        : 'tc-next-card'
                    }`}
                  >
                    <span className="tc-quote">&#8220;</span>
                    <p>{item.quote}</p>
                    <div className="tc-author">
                      <img src={item.avatar} alt={item.name} />
                      <div>
                        <h4>{item.name}</h4>
                        <span>{item.role}</span>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              {/* Next */}
              <button
                className="tc-nav tc-next"
                onClick={nextTestimonial}
                aria-label="Next testimonial"
              >&#8250;</button>

              {/* Dots */}
              <div className="tc-dots">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    className={`tc-dot ${i === activeTestimonial ? 'tc-dot-active' : ''}`}
                    onClick={() => setActiveTestimonial(i)}
                    aria-label={`Testimonial ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <div className="progress-wrap" ref={progressWrapRef} onClick={scrollToTop} role="button" aria-label="Back to top">
        <svg className="progress-circle" width="100%" height="100%" viewBox="-1 -1 102 102">
          <path
            ref={progressPathRef}
            d="M50 1 a49 49 0 0 1 0 98 a49 49 0 0 1 0 -98"
          />
        </svg>
      </div>
    </div>
  );
};

export default About;
