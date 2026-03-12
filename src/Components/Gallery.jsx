import React , { useEffect, useRef } from "react";
import { FaPhone } from "react-icons/fa";
import "./Gallery.css";
import '../animations.css';
import img1 from  "../assets/slider/1.jpg";
import img3 from  "../assets/slider/3.jpg";
import img7 from  "../assets/slider/7.jpg";
import img5 from  "../assets/slider/5.jpg";
import img4 from  "../assets/slider/4.jpg";
import img2 from  "../assets/slider/2.jpg";
import img8 from  "../assets/rooms/8.jpg";
import imgr5 from  "../assets/rooms/5.jpg";
import imgr10 from  "../assets/rooms/10.jpg";

const Gallery = () => {
  const progressPathRef = useRef(null);
  const progressWrapRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      const preloader = document.getElementById("preloader");
      const preloaderBg = document.querySelector(".preloader-bg");
      if (preloader) preloader.style.display = "none";
      if (preloaderBg) preloaderBg.style.display = "none";
    }, 1200);
    return () => clearTimeout(timer);
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

  /* scroll-reveal */
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
  return (
    <>
     <div className="preloader-bg"></div>
      <div id="preloader">
        <div id="preloader-status">
          <div className="preloader-position loader">
            <span></span>
          </div>
        </div>
      </div>

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

      {/* Header Banner */}
      <div
        className="banner-header section-padding valign bg-img bg-fixed"
        style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${img5})` }}
      >
        <div className="container">
          <div className="row-g">
            <div className="col-md-12 text-left caption mt-90 anim anim-up">
              <h5>Images & Videos</h5>
              <h1>Our Gallery</h1>
            </div>
          </div>
        </div>
      </div>

      {/* Image Gallery */}
       <section className="sec-padding-imge">
        <div className="cont-im">
            <div className="row-im">
                <div className="col-md-12">
                    <div className="section-subtitle anim anim-up">Images</div>
                    <div className="section-title anim anim-up anim-d1">Image Gallery</div>
                </div>
                <div className="first-sec">
                <div className="col-md-4 gallery-item anim anim-up anim-d1">
                    <a href={img7} title="" className="img-zoom">
                        <div className="gallery-box">
                            <div className="gallery-img">
                                 <img src={img7} className="img-fluid mx-auto d-block" alt="work-img"/> </div>
                        </div>
                    </a>
                </div>
                <div className="col-md-4 gallery-item anim anim-up anim-d2">
                    <a href={img5} title="" className="img-zoom">
                        <div className="gallery-box">
                            <div className="gallery-img"> <img src={img5} className="img-fluid mx-auto d-block" alt="work-img"/> </div>
                        </div>
                    </a>
                </div>
                <div className="col-md-4 gallery-item anim anim-up anim-d3">
                    <a href={img4} title="" className="img-zoom">
                        <div className="gallery-box">
                            <div className="gallery-img"> <img src={img4} className="img-fluid mx-auto d-block" alt="work-img"/> </div>
                        </div>
                    </a>
                </div>
               </div>
               <div className="second-sec">
                <div className="col-md-6 gallery-item">
                    <a href={img2} title="" className="img-zoom">
                        <div className="gallery-box">
                            <div className="gallery-imgs"> <img src={img2} className="img-fluid mx-auto d-block" alt="work-img"/> </div>
                        </div>
                    </a>
                </div>
              
                <div className="col-md-6 gallery-item">
                    <a href={img1} title="" className="img-zoom">
                        <div className="gallery-box">
                            <div className="gallery-imgs"> <img src={img1} className="img-fluid mx-auto d-block" alt="work-img"/> </div>
                        </div>
                    </a>
                </div>
                </div>
                <div className="third-sec">
                <div className="col-md-4 gallery-item">
                    <a href={img8} title="" className="img-zoom">
                        <div className="gallery-box">
                            <div className="gallery-imgs1"> <img src={img8} className="img-fluid mx-auto d-block" alt="work-img"/> </div>
                        </div>
                    </a>
                </div>
                <div className="col-md-4 gallery-item">
                    <a href={imgr5} title="" className="img-zoom">
                        <div className="gallery-box">
                            <div className="gallery-imgs1"> <img src={imgr5} className="img-fluid mx-auto d-block" alt="work-img"/> </div>
                        </div>
                    </a>
                </div>
                <div className="col-md-4 gallery-item">
                    <a href={imgr10} title="" className="img-zoom">
                        <div className="gallery-box">
                            <div className="gallery-imgs1"> <img src={imgr10} className="img-fluid mx-auto d-block" alt="work-img"/> </div>
                        </div>
                    </a>
                </div>
            </div>
            </div>
        </div>
    </section>
 
    <section className="sec-padding-vid bg-cream">
        <div className="cont-vid">
            <div className="row">
                <div className="col-md-12">
                    <div className="section-subtitle anim anim-up">Videos</div>
                    <div className="section-title anim anim-up anim-d1">Video Gallery</div>
                </div>
               <div className="video1">
                <div className="col-md-6">
                    <div className="vid-area mb-30">
                        <div className="vid-icon"> <img src={img2} alt="YouTube"/>
                            <a className="video-gallery-button vid" href="https://youtu.be/xh4GnTKFQso"> 
                              <span className="video-gallery-polygon">
                                <span className="play-arrow"></span>
                              </span> 
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="vid-area mb-30">
                        <div className="vid-icon"> <img src={img3} alt="Vimeo"/>
                            <a className="video-gallery-button vid" href="https://youtu.be/xh4GnTKFQso"> 
                              <span className="video-gallery-polygon">
                                <span className="play-arrow"></span>
                              </span> 
                            </a>
                        </div>
                    </div>
                </div>
             </div>
             <div className="video2">
                <div className="col-md-4">
                    <div className="vid-area mb-30">
                        <div className="vid-icon"> <img src={img4} className="img-fluid" alt="YouTube"/>
                            <a className="video-gallery-button vid" href="https://youtu.be/xh4GnTKFQso"> 
                              <span className="video-gallery-polygon">
                                <span className="play-arrow"></span>
                              </span> 
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="vid-area mb-30">
                        <div className="vid-icon"> <img src={img7} alt="YouTube"/>
                            <a className="video-gallery-button vid" href="https://youtu.be/xh4GnTKFQso"> 
                              <span className="video-gallery-polygon">
                                <span className="play-arrow"></span>
                              </span> 
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="vid-area mb-30">
                        <div className="vid-icon"> <img src={img1} alt="YouTube"/>
                            <a className="video-gallery-button vid" href="https://youtu.be/xh4GnTKFQso"> 
                              <span className="video-gallery-polygon">
                                <span className="play-arrow"></span>
                              </span> 
                            </a>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </section>

      {/* Reservation Section */}
      <section
        className="rest-booking bg-img bg-fixed"
        style={{ backgroundImage: `url(${img2})` }}
      >
        <div className="rest-booking-overlay"></div>
        <div className="rest-container rest-booking-inner">
          <div className="rest-booking-text anim anim-left">
            <span className="rest-subtitle light">Make a Reservation</span>
            <h2 className="rest-section-title light">Reserve Your<br/>Stay Today</h2>
            <p className="light-p">
              Each of our guest rooms feature a private bath, wi-fi,
              cable television and include full breakfast. Experience luxury
              in every detail.
            </p>
            <div className="rest-reservation-bar dark-bg">
              <FaPhone className="rest-phone-icon gold" />
              <div>
                <span className="rest-res-label gold">Call Us</span>
                <a href="tel:8551004444" className="rest-res-number gold">855 100 4444</a>
              </div>
            </div>
          </div>

          <div className="rest-booking-form anim anim-right">
            <h4>Hotel Booking Form</h4>
            <form>
              <div className="rest-form-group">
                <label>Check in</label>
                <input type="date" />
              </div>
              <div className="rest-form-group">
                <label>Check out</label>
                <input type="date" />
              </div>
              <div className="rest-form-row">
                <div className="rest-form-group">
                  <label>Adults</label>
                  <select>
                    <option value="1">1 Adult</option>
                    <option value="2">2 Adults</option>
                    <option value="3">3 Adults</option>
                    <option value="4">4 Adults</option>
                  </select>
                </div>
                <div className="rest-form-group">
                  <label>Children</label>
                  <select>
                    <option value="0">0 Children</option>
                    <option value="1">1 Child</option>
                    <option value="2">2 Children</option>
                  </select>
                </div>
              </div>
              <button type="submit" className="rest-btn-submit">Check Availability</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Gallery;