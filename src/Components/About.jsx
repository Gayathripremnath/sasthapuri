import React, { useState, useEffect, useRef } from 'react';
import './About.css';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import './Footer.css';
import { Instagram, Twitter, Youtube, Facebook } from "lucide-react";





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

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
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
      progressWrap.classList.add("active-progress");
    } else {
      progressWrap.classList.remove("active-progress");
    }
  };

  updateProgress();
  window.addEventListener("scroll", updateProgress);

  return () => window.removeEventListener("scroll", updateProgress);
}, []);

  return (
    <div className="about-page">
      <Navbar onMenuClick={toggleSidebar} />
      <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />

      <header className="about-banner" role="banner">
        <div className="about-banner__overlay" />
        <div className="about-banner__content">
          <p className="banner-kicker">Luxury Hotel</p>
          <h1>About Us</h1>
          <div className="banner-stars" aria-hidden="true">
            ★★★★☆
          </div>
        </div>
      </header>

      <main>
        <section className="about-section" id="about">
          <div className="about-grid">
            <div className="about-copy">
             <div className="stars">★★★★★</div>

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

            <div className="about-images">
              <img src="https://sasthapuri.com/web_demo/img/rooms/8.jpg" alt="Lobby" />
              <img src="https://sasthapuri.com/web_demo/img/rooms/2.jpg" alt="Premium room" />
            </div>
          </div>
        </section>

        <section className="testimonials-section" aria-label="Testimonials">
          <div className="testimonials-overlay" />
          <div className="testimonials-inner">
            <div className="testimonials-head">
              <h6>Testimonials</h6>
              <h3>What Clients Say?</h3>
              <div className="line" />
            </div>

            <div className="testimonials-cards">
              {testimonials.map((item) => (
                <article className="testimonial-card" key={item.name}>
                  <span className="quote-mark">“</span>
                  <p>{item.quote}</p>
                  <div className="testimonial-author">
                    <img src={item.avatar} alt={item.name} />
                    <div>
                      <h4>{item.name}</h4>
                      <span>{item.role}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
        <footer className="site-footer" id="contact">
      <div className="footer-grid">
        <div className="footer-about">
          <h3>About Hotel</h3>
          <p>
            Sri. C. Karunakaran Nair, a Calicut based leading businessman in Hotel industry,
            established Sasthapuri in 1978. HOSPITALITY is the keyword for us, because we do
            everything with YOU in mind.
          </p>
        </div>

        <div className="footer-links">
          <h3>Explore</h3>
          <a href="/">Home</a>
          <a href="#rooms">Rooms &amp; Suites</a>
          <a href="#restaurant">Restaurant</a>
          <a href="#gallery">Gallery</a>
          <a href="#promo">About Hotel</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="footer-contact">
          <h3>Contact</h3>
          <p>M.M.Ali Road, Palayam, Calicut - 673002,<br />Kerala, South India</p>
          <a className="footer-phone" href="tel:+914952723281">+91 - 495-2723281 (5 LINES)</a>
          <a className="footer-mail" href="mailto:sasthapuri@gmail.com">sasthapuri@gmail.com</a>
          <div className="footer-social" aria-label="Social links">
            
<a href="#"><Instagram size={20} /></a>
<a href="#"><Twitter size={20} /></a>
<a href="#"><Youtube size={20} /></a>
<a href="#"><Facebook size={20} /></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p >© Copyright 2025 by  </p>
        <a href="/">Genova Technology Pvt Ltd</a>
      </div>
    </footer>
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
