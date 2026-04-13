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
import imgt from "../assets/toil.JPG";
import imgr10 from  "../assets/rooms/10.jpg";
import imgr from "../assets/sastha-room.JPG";
import imgr1 from "../assets/sasthas1.JPG";
import stand from "../assets/stand.JPG";
import room1 from "../assets/room1.JPG";
import gal1 from "../assets/gal1.JPG";
import gal2 from "../assets/gal2.JPG";
import gal3 from "../assets/gal3.JPG";
import gal4 from "../assets/gal4.JPG";
import gal5 from "../assets/gal5.JPG";
import gal6 from "../assets/gal6.JPG";

const Gallery = () => {
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

  /* scroll-reveal */
  useEffect(() => {
    const els = document.querySelectorAll('.anim');
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('anim-show');
          obs.unobserve(e.target);
        }
      }),
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );
    els.forEach(el => obs.observe(el));
    return () => {
      els.forEach(el => obs.unobserve(el));
      obs.disconnect();
    };
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you! We have received your availability request. We will get back to you soon.');
  };

  return (
    <>


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
        style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${img1})` }}
      >
        <div className="container">
          <div className="row-g">
            <div className="col-md-12 text-left caption mt-90 anim anim-up">
              <h5>Images & Videos</h5>
              <h1 >Our Gallery</h1>
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
                    <a href={'https://sasthapuri.com/images/gallery/b-1.jpg'} title="" className="img-zoom">
                        <div className="gallery-box">
                            <div className="gallery-imgs">
                                 <img src={'https://sasthapuri.com/images/gallery/b-1.jpg'} className="img-fluid mx-auto d-block" alt="work-img"loading="lazy" /> </div>
                        </div>
                    </a>
                </div>
                <div className="col-md-4 gallery-item anim anim-up anim-d2">
                    <a href={'https://sasthapuri.com/images/gallery/b-6.jpg'} title="" className="img-zoom">
                        <div className="gallery-box">
                            <div className="gallery-imgs"> <img src={'https://sasthapuri.com/images/gallery/b-6.jpg'} className="img-fluid mx-auto d-block" alt="work-img"loading="lazy" /> </div>
                        </div>
                    </a>
                </div>
                <div className="col-md-4 gallery-item anim anim-up anim-d3">
                    <a href={stand} title="" className="img-zoom">
                        <div className="gallery-box">
                            <div className="gallery-imgs"> <img src={stand} className="img-fluid mx-auto d-block" alt="work-img"loading="lazy" /> </div>
                        </div>
                    </a>
                </div>
               </div>
               <div className="second-sec">
                <div className="col-md-6 gallery-item">
                    <a href={img2} title="" className="img-zoom">
                        <div className="gallery-box">
                            <div className="gallery-imgs"> <img src={img2} className="img-fluid mx-auto d-block" alt="work-img"loading="lazy" /> </div>
                        </div>
                    </a>
                </div>
              
                <div className="col-md-6 gallery-item">
                    <a href={imgr} title="" className="img-zoom">
                        <div className="gallery-box">
                            <div className="gallery-imgs"> <img src={imgr} className="img-fluid mx-auto d-block" alt="work-img"loading="lazy" /> </div>
                        </div>
                    </a>
                </div>
                </div>
                <div className="third-sec">
                <div className="col-md-4 gallery-item">
                    <a href={'https://sasthapuri.com/images/gallery/b-7.jpg'} title="" className="img-zoom">
                        <div className="gallery-box">
                            <div className="gallery-imgs1"> <img src={imgt} className="img-fluid mx-auto d-block" alt="work-img"loading="lazy" /> </div>
                        </div>
                    </a>
                </div>
                <div className="col-md-4 gallery-item">
                    <a href={'https://sasthapuri.com/images/gallery/b-8.jpg'} title="" className="img-zoom">
                        <div className="gallery-box">
                            <div className="gallery-imgs1"> <img src={'https://sasthapuri.com/images/gallery/b-8.jpg'} className="img-fluid mx-auto d-block" alt="work-img"loading="lazy" /> </div>
                        </div>
                    </a>
                </div>
                <div className="col-md-4 gallery-item">
                    <a href={gal1} title="" className="img-zoom">
                        <div className="gallery-box">
                            <div className="gallery-imgs1"> <img src={gal1} className="img-fluid mx-auto d-block" alt="work-img"loading="lazy" /> </div>
                        </div>
                    </a>
                </div>
            </div>
            
            <div className="fourth-sec">
                <div className="col-md-4 gallery-item">
                    <a href={gal2} title="" className="img-zoom">
                        <div className="gallery-box">
                            <div className="gallery-imgs1"> <img src={gal2} className="img-fluid mx-auto d-block" alt="work-img"loading="lazy" /> </div>
                        </div>
                    </a>
                </div>
                <div className="col-md-4 gallery-item">
                    <a href={gal3} title="" className="img-zoom">
                        <div className="gallery-box">
                            <div className="gallery-imgs1"> <img src={gal3} className="img-fluid mx-auto d-block" alt="work-img"loading="lazy" /> </div>
                        </div>
                    </a>
                </div>
                <div className="col-md-4 gallery-item">
                    <a href={gal4} title="" className="img-zoom">
                        <div className="gallery-box">
                            <div className="gallery-imgs1"> <img src={gal4} className="img-fluid mx-auto d-block" alt="work-img"loading="lazy" /> </div>
                        </div>
                    </a>
                </div>
            </div>

            <div className="fifth-sec">
                <div className="col-md-4 gallery-item">
                    <a href={gal5} title="" className="img-zoom">
                        <div className="gallery-box">
                            <div className="gallery-imgs1"> <img src={gal5} className="img-fluid mx-auto d-block" alt="work-img"loading="lazy" /> </div>
                        </div>
                    </a>
                </div>
                <div className="col-md-4 gallery-item">
                    <a href={gal6} title="" className="img-zoom">
                        <div className="gallery-box">
                            <div className="gallery-imgs1"> <img src={gal6} className="img-fluid mx-auto d-block" alt="work-img"loading="lazy" /> </div>
                        </div>
                    </a>
                </div>
                <div className="col-md-4 gallery-item">
                    <a href={imgr1} title="" className="img-zoom">
                        <div className="gallery-box">
                            <div className="gallery-imgs1"> <img src={imgr1} className="img-fluid mx-auto d-block" alt="work-img"loading="lazy" /> </div>
                        </div>
                    </a>
                </div>
            </div>

            <div className="sixth-sec">
                <div className="col-md-6 gallery-item">
                    <a href={room1} title="" className="img-zoom">
                        <div className="gallery-box">
                            <div className="gallery-imgs"> <img src={room1} className="img-fluid mx-auto d-block" alt="Executive Room"loading="lazy" /> </div>
                        </div>
                    </a>
                </div>
                <div className="col-md-6 gallery-item">
                    <a href={stand} title="" className="img-zoom">
                        <div className="gallery-box">
                            <div className="gallery-imgs"> <img src={stand} className="img-fluid mx-auto d-block" alt="Standard Deluxe Room"loading="lazy" /> </div>
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
                        <div className="vid-icon"> <img src={img2} alt="YouTube" loading="lazy" />
                            <a className="video-gallery-button vid" href="https://youtu.be/iuKUzm2YVqc?si=-UlINrmtMcmmfOkW"> 
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
    </>
  );  
};

export default Gallery;