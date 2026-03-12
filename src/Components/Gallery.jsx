import React , { useEffect, useRef } from "react";
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
        style={{ backgroundImage: `url(${img1})` }}
      >
        <div className="container">
          <div className="row-g">
            <div className="col-md-12 text-left caption mt-90">
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
                            <a className="video-gallery-button vid" href="https://youtu.be/xh4GnTKFQso"> <span className="video-gallery-polygon">
                                    <i className="ti-control-play"></i>
                                </span> </a>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="vid-area mb-30">
                        <div className="vid-icon"> <img src={img3} alt="Vimeo"/>
                            <a className="video-gallery-button vid" href="https://youtu.be/xh4GnTKFQso"> <span className="video-gallery-polygon">
                                    <i className="ti-control-play"></i>
                                </span> </a>
                        </div>
                    </div>
                </div>
             </div>
             <div className="video2">
                <div className="col-md-4">
                    <div className="vid-area mb-30">
                        <div className="vid-icon"> <img src={img4} className="img-fluid" alt="YouTube"/>
                            <a className="video-gallery-button vid" href="https://youtu.be/xh4GnTKFQso"> <span className="video-gallery-polygon">
                                    <i className="ti-control-play"></i>
                                </span> </a>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="vid-area mb-30">
                        <div className="vid-icon"> <img src={img7} alt="YouTube"/>
                            <a className="video-gallery-button vid" href="https://youtu.be/xh4GnTKFQso"> <span className="video-gallery-polygon">
                                    <i className="ti-control-play"></i>
                                </span> </a>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="vid-area mb-30">
                        <div className="vid-icon"> <img src={img1} alt="YouTube"/>
                            <a className="video-gallery-button vid" href="https://youtu.be/xh4GnTKFQso"> <span className="video-gallery-polygon">
                                    <i className="ti-control-play"></i>
                                </span> </a>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </section>

      {/* Reservation Section */}
      <section className="testimonials">
        <div
          className="background bg-img bg-fixed section-padding pb-0"
          style={{ backgroundImage: `url(${img2})` }}
        >
          <div className="container">
            <div className="row">

              <div className="col-md-5 mb-30 mt-30">
                <h5>
                  Each of our guest rooms feature a private bath, wi-fi,
                  cable television and include full breakfast.
                </h5>

                <div className="reservations mb-30">
                  <div className="icon color-1">
                    <span className="flaticon-call"></span>
                  </div>

                  <div className="text">
                    <p className="color-1">Reservation</p>
                    <a className="color-1" href="tel:8551004444">
                      855 100 4444
                    </a>
                  </div>
                </div>
              </div>

              {/* Booking Form */}
              <div className="col-md-5 offset-md-2">
                <div className="booking-box">
                  <div className="head-box">
                    <h6>Rooms & Suites</h6>
                    <h4>Hotel Booking Form</h4>
                  </div>

                  <div className="booking-inner clearfix">
                    <form className="form1 clearfix">
                      <div className="row">

                        <div className="col-md-12">
                          <div className="input1_wrapper">
                            <label>Check in</label>
                            <div className="input1_inner">
                              <input
                                type="text"
                                className="form-control input"
                                placeholder="Check in"
                              />
                            </div>
                          </div>
                        </div>

                        <div className="col-md-12">
                          <div className="input1_wrapper">
                            <label>Check out</label>
                            <div className="input1_inner">
                              <input
                                type="text"
                                className="form-control input"
                                placeholder="Check out"
                              />
                            </div>
                          </div>
                        </div>

                        <div className="col-md-12">
                          <button
                            type="submit"
                            className="btn-form1-submit mt-15"
                          >
                            Book Now
                          </button>
                        </div>

                      </div>
                    </form>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Gallery;