import React from 'react'

import { FaAngleDown } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";


const Restaurant = () => {
  return (
    <div>
        <section className="hero-section hero-section-bg room-hero">

            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="hero-text text-center">
                            <h2>Restaurant</h2>
                            <ul className="breadcrumb justify-content-center">
                                <li><a href="index.html">Home</a></li>
                                <li className="active">Restaurant</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
<div className="preloader-bg"></div>
    <div id="preloader">
        <div id="preloader-status">
            <div className="preloader-position loader"> <span></span> </div>
        </div>
    </div>

    <div className="progress-wrap cursor-pointer">
        <svg className="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
            <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
        </svg>
    </div>
   
    <div className="cappa-wrap">
        <div className="cappa-wrap-inner">
            <nav className="cappa-menu">
                <ul>
                    <li className='cappa-menu-sub'><a href='/'>Home <FaAngleDown /></a>
                        <ul>
                            <li><a href="index.html">Home Layout 1</a></li>
                            <li><a href="index2.html">Home Layout 2</a></li>
                            <li><a href="index3.html">Home Layout 3</a></li>
                            <li><a href="index4.html">Home Layout 4</a></li>
                            <li><a href="index5.html">Video 1</a></li>
                            <li><a href="index6.html">Video 2</a></li>
                            <li><a href="index7.html">Video 3</a></li>
                            <li><a href="index8.html">Slideshow 1</a></li>
                            <li><a href="index9.html">Slideshow 2</a></li>
                            <li><a href="index10.html">Slideshow 3</a></li>
                            <li><a href="index11.html">Parallax Image 1</a></li>
                            <li><a href="index12.html">Parallax Image 2</a></li>
                            <li><a href="index13.html">Parallax Image 3</a></li>
                            <li><a href="index14.html">Grid Background 1</a></li>
                            <li><a href="index15.html">Grid Background 2</a></li>
                        </ul> 
                    </li>
                    <li><a href="about.html">About</a></li>
                    <li className='cappa-menu-sub'><a className="active" href='#'>Rooms &amp; Suites</a>
                        <ul>
                            <li><a href='rooms.html'>Rooms 1</a></li>
                            <li><a href='rooms2.html'>Rooms 2</a></li>
                            <li><a href='rooms3.html'>Rooms 3</a></li>
                            <li className="active"><a href='room-details.html'>Room Details</a></li>
                        </ul>
                    </li>
                    <li><a href="restaurant.html">Restaurant</a></li>
                    <li><a href="spa-wellness.html">Spa Wellness</a></li>
                    <li className="cappa-menu-sub"><a href='#'>Pages <i className="ti-angle-down"></i></a>
                        <ul>
                            <li><a href="services.html">Services</a></li>
                            <li><a href="facilities.html">Facilites</a></li>
                            <li><a href="gallery.html">Gallery</a></li>
                            <li><a href="team.html">Team</a></li>
                            <li><a href="pricing.html">Pricing</a></li>
                            <li><a href="careers.html">Careers</a></li>
                            <li><a href="faq.html">F.A.Qs</a></li>
                            <li className='cappa-menu-sub'><a href='#'> Other Pages <i className="ti-angle-down"></i></a>
                                <ul>
                                    <li><a href='404.html'>404 Page</a></li>
                                    <li><a href='coming-soon.html'>Coming Soon</a></li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li className='cappa-menu-sub'><a href='#'>News <i className="ti-angle-down"></i></a>
                        <ul>
                            <li><a href='news.html'>News 1</a></li>
                            <li><a href='news2.html'>News 2</a></li>
                            <li><a href='post.html'>Single Post</a></li>
                        </ul>
                    </li>
                    <li><a href="contact.html">Contact</a></li>
                </ul>
            </nav>
            <div className="cappa-menu-footer">
                <div className="reservation">
                    <a href="tel:8551004444">
                        <div className="icon d-flex justify-content-center align-items-center">
                            <i className="FaPhone"></i>
                        </div>
                        <div className="call">Reservation<br/><span>855 100 4444</span></div>
                    </a>
                </div>
            </div>
        </div>
    </div></div>
  )
}

export default Restaurant