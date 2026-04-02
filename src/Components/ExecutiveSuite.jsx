import React, { useEffect, useRef } from 'react';
import './ExecutiveSuite.css';
import '../animations.css';

const ExecutiveSuite = () => {
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
        <div className="executive-suite-page">
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
            <header className="es-hero" style={{ backgroundImage: `url('https://sasthapuri.com/images/ac-suit.jpg')` }}>
                <div className="es-hero-overlay" />
                <div className="es-hero-content anim anim-up">
                    <h5>Refined Elegance</h5>
                    <h1>Executive / Suite Room</h1>
                </div>
            </header>

            {/* Main Content Section */}
            <section className="es-content-section section-padding">
                <div className="es-container">
                    <div className="es-grid">
                        <div className="es-text anim anim-left">
                            <div className="stars">★★★</div>
                            <h6 className="es-subtitle">Luxury Stay</h6>
                            <h2 className="es-title">Experience Comfort &amp; Elegance</h2>
                            <p>
                                Experience comfort and elegance in our Executive / Suite Rooms, thoughtfully designed
                                to offer a premium stay for both business and leisure travelers. These spacious rooms
                                feature a refined interior, comfortable furnishings, and a relaxing ambiance that ensures
                                a pleasant and memorable experience.
                            </p>
                            <p>
                                Each room is equipped with modern amenities including a comfortable bed, air
                                conditioning, high-speed internet access, multi-channel TV, mini fridge, and a well-appointed
                                bathroom with quality toiletries. The additional space and enhanced features
                                make it ideal for guests seeking extra comfort and convenience.
                            </p>
                            <p>
                                Whether you are staying for work or relaxation, our Executive / Suite Rooms provide the
                                perfect balance of style, comfort, and functionality, ensuring a truly enjoyable stay.
                            </p>

                            <div className="es-amenities-mini">
                                <ul>
                                    <li>📶 Free High-Speed Wi-Fi</li>
                                    <li>❄️ Air Conditioning</li>
                                    <li>📺 Multi-Channel TV</li>
                                    <li>🧊 Mini Fridge</li>
                                </ul>
                                <ul>
                                    <li>🛌 King Size Comfort Bed</li>
                                    <li>🚿 Quality Toiletries</li>
                                    <li>☕ Coffee / Tea Maker</li>
                                    <li>🧹 Daily Housekeeping</li>
                                </ul>
                            </div>
                        </div>
                        <div className="es-images anim anim-right">
                            <div className="es-img-box main-img">
                                <img src="https://sasthapuri.com/images/ac-suit.jpg" alt="Executive Suite Interior" />
                            </div>
                            <div className="es-img-box sub-img">
                                <img src="https://sasthapuri.com/images/gallery/b-3.jpg" alt="Room View" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Reservation Strip */}
            <section className="es-reservation-strip">
                <div className="es-container">
                    <div className="es-res-inner anim anim-up">
                        <div className="es-res-text">
                            <h3>Ready to Experience Luxury?</h3>
                            <p>Book your stay in our Executive / Suite Room today for an unforgettable experience.</p>
                        </div>
                        <div className="es-res-action">
                             <a href="tel:+914952723281" className="es-btn-gold">Call +91-495-2723281</a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ExecutiveSuite;
