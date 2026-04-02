import React, { useEffect, useRef } from 'react';
import './StandardDeluxe.css';
import '../animations.css';

const StandardDeluxe = () => {
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
        <div className="standard-deluxe-page">
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
            <header className="sd-hero" style={{ backgroundImage: `url('https://sasthapuri.com/images/delux.jpg')` }}>
                <div className="sd-hero-overlay" />
                <div className="sd-hero-content anim anim-up">
                    <div className="rd-hero-stars" style={{ color: '#aa8453', marginBottom: '10px' }}>★★★</div>
                    <h5>Essential Comfort</h5>
                    <h1>Standard Deluxe Room</h1>
                </div>
            </header>

            {/* Main Content Section */}
            <section className="sd-content-section section-padding">
                <div className="sd-container">
                    <div className="sd-grid">
                        <div className="sd-text anim anim-left">
                            <div className="stars">★★★</div>
                            <h6 className="sd-subtitle">Quality Stay</h6>
                            <h2 className="sd-title">Cozy Ambience &amp; Modern Value</h2>
                            <p>
                                Our Standard Deluxe Rooms are designed to offer a comfortable and relaxing stay with
                                all the essential amenities for a pleasant experience. Featuring a cozy ambiance and
                                well-appointed interiors, these rooms are perfect for both business and leisure
                                travelers.
                            </p>
                            <p>
                                Each room is equipped with modern facilities including a comfortable bed, air
                                conditioning, high-speed internet access, multi-channel TV, and a clean, well-maintained
                                bathroom with essential toiletries. Thoughtfully arranged to provide convenience and
                                comfort, the room ensures a peaceful stay.
                            </p>
                            <p>
                                Ideal for guests seeking quality accommodation at great value, the Standard Deluxe
                                Room combines simplicity, comfort, and functionality to make your stay enjoyable and
                                hassle-free.
                            </p>

                            <div className="sd-amenities-mini">
                                <ul>
                                    <li>📶 Free Wi-Fi</li>
                                    <li>❄️ Air Conditioning</li>
                                    <li>📺 Multi-Channel TV</li>
                                </ul>
                                <ul>
                                    <li>🛌 Comfortable Queen Bed</li>
                                    <li>🚿 Clean Modern Bathroom</li>
                                    <li>🧹 Daily Service</li>
                                </ul>
                            </div>
                        </div>
                        <div className="sd-images anim anim-right">
                            <div className="sd-img-box main-img">
                                <img src="https://sasthapuri.com/images/delux.jpg" alt="Standard Deluxe Room Interior" />
                            </div>
                            <div className="sd-img-box sub-img">
                                <img src="https://sasthapuri.com/images/gallery/b-1.jpg" alt="Room View" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Reservation Strip */}
            <section className="sd-reservation-strip">
                <div className="sd-container">
                    <div className="sd-res-inner anim anim-up">
                        <div className="sd-res-text">
                            <h3>Affordable Luxury Awaits</h3>
                            <p>Experience the perfect combination of value and hospitality in our Standard Deluxe Room.</p>
                        </div>
                        <div className="sd-res-action">
                            <a href="tel:+914952723281" className="sd-btn-gold">Call +91-495-2723281</a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default StandardDeluxe;
