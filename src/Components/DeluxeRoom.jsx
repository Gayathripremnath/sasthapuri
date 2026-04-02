import React, { useEffect, useRef } from 'react';
import './DeluxeRoom.css';
import '../animations.css';

const DeluxeRoom = () => {
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
        <div className="deluxe-room-page">
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
            <header className="dr-hero" style={{ backgroundImage: `url('https://sasthapuri.com/images/delux-room.jpg')` }}>
                <div className="dr-hero-overlay" />
                <div className="dr-hero-content anim anim-up">
                    <div className="rd-hero-stars" style={{ color: '#aa8453', marginBottom: '10px' }}>★★★</div>
                    <h5>Refined Elegance</h5>
                    <h1>Deluxe Room</h1>
                </div>
            </header>

            {/* Main Content Section */}
            <section className="dr-content-section section-padding">
                <div className="dr-container">
                    <div className="dr-grid">
                        <div className="dr-text anim anim-left">
                            <div className="stars">★★★</div>
                            <h6 className="dr-subtitle">Premium Comfort</h6>
                            <h2 className="dr-title">Superior Style &amp; Spaciousness</h2>
                            <p>
                                Our Deluxe Rooms offer a perfect blend of comfort and style, designed to provide a
                                relaxing and enjoyable stay. With spacious interiors and tasteful décor, these rooms
                                create a warm and welcoming atmosphere for both business and leisure travelers.
                            </p>
                            <p>
                                Each room is well-equipped with modern amenities including a comfortable bed, air
                                conditioning, high-speed internet access, multi-channel TV, and a mini fridge. The well-maintained bathroom comes with quality toiletries to ensure a refreshing experience.
                            </p>
                            <p>
                                Whether you are visiting for a short stay or an extended trip, our Deluxe Rooms provide
                                the ideal balance of comfort, convenience, and value, making your stay truly pleasant
                                and memorable.
                            </p>

                            <div className="dr-amenities-mini">
                                <ul>
                                    <li>📶 High-Speed Wi-Fi</li>
                                    <li>❄️ Air Conditioning</li>
                                    <li>📺 Multi-Channel TV</li>
                                </ul>
                                <ul>
                                    <li>🧊 Mini Fridge</li>
                                    <li>🚿 Quality Toiletries</li>
                                    <li>🧹 Daily Housekeeping</li>
                                </ul>
                            </div>
                        </div>
                        <div className="dr-images anim anim-right">
                            <div className="dr-img-box main-img">
                                <img src="https://sasthapuri.com/images/delux-room.jpg" alt="Deluxe Room Interior" />
                            </div>
                            <div className="dr-img-box sub-img">
                                <img src="https://sasthapuri.com/images/gallery/b-6.jpg" alt="Room View" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Reservation Strip */}
            <section className="dr-reservation-strip">
                <div className="dr-container">
                    <div className="dr-res-inner anim anim-up">
                        <div className="dr-res-text">
                            <h3>Ready to Experience Luxury?</h3>
                            <p>Book your stay in our Deluxe Room today for a truly memorable experience.</p>
                        </div>
                        <div className="dr-res-action">
                            <a href="tel:+914952723281" className="dr-btn-gold">Call +91-495-2723281</a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default DeluxeRoom;
