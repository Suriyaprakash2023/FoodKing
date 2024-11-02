import React,{useEffect} from 'react';
import Header from './Header';
import Footer from './Footer';
import {Link} from 'react-router-dom';
import breadcrumb from '/src/assets/website/img/banner/breadcrumb.jpg';
import mainctabg2 from '/src/assets/website/img/banner/main-cta-bg-2.jpg';
import deliveryman2 from '/src/assets/website/img/delivery-man-2.png';
import location from '/src/assets/website/img/icon/location.svg';
import phone from "/src/assets/website/img/icon/phone.svg";
import email from "/src/assets/website/img/icon/email.svg";
import tomato from "/src/assets/website/img/tomato.png";
import chilli from "/src/assets/website/img/chilli.png"
const Contact = () => {
    // useEffect(() => {
    //     // Load main site CSS
    //     import('/src/assets/website/img/logo/favicon.svg');
    //     import('/src/assets/website/css/bootstrap.min.css');
    //     import('/src/assets/website/css/font-awesome.css');
    //     import('/src/assets/website/css/animate.css');
    //     import('/src/assets/website/css/magnific-popup.css');
    //     import('/src/assets/website/css/swiper-bundle.min.css');
    //     import('/src/assets/website/css/nice-select.css');
    //     import('/src/assets/website/css/main.css');
    //     import('/src/assets/website/css/meanmenu.css');
        
        
    //     // Load main site JS
    //     import('/src/assets/website/js/animation.js');
    //     import('/src/assets/website/js/bootstrap.bundle.min.js');
    //     import('/src/assets/website/js/countdowncustom.js');
    //     import('/src/assets/website/js/jquery-3.7.1.min.js');
    //     import('/src/assets/website/js/jquery.counterup.min.js');
    //     import('/src/assets/website/js/jquery.magnific-popup.min.js');
    //     import('/src/assets/website/js/jquery.meanmenu.min.js');
    //     import('/src/assets/website/js/jquery.nice-select.min.js');
    //     import('/src/assets/website/js/jquery.waypoints.js');
    //     import('/src/assets/website/js/main.js');
    //     import('/src/assets/website/js/swiper-bundle.min.js');
    //     import('/src/assets/website/js/viewport.jquery.js');
    //     import('/src/assets/website/js/wow.min.js');



        
    //   }, []);
    

  return (
    <>
        <Header/>
            <div className="breadcrumb-wrapper bg-cover" style={{
                    backgroundImage: `url(${breadcrumb})`,
                    backgroundSize: "cover",
                    // Add other styles if needed
                  }}>
            <div className="container">
                <div className="page-heading center">
                    <h1>Contact us</h1>
                    <ul className="breadcrumb-items">
                        <li>
                            <Link to='/'>
                            Home 
                            </Link>
                        </li>
                        <li>
                            <i className="far fa-chevron-right"></i>
                        </li>
                        <li>
                            contact
                        </li>
                    </ul>
                </div>
            </div>
        </div>

 
        <section className="contact-info-section fix section-padding section-bg">
            <div className="container">
                <div className="row g-4">
                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                        <div className="contact-info-items text-center">
                            <div className="icon">
                                <img src={location} alt="icon-img"/>
                            </div>
                            <div className="content">
                                <h3>address line</h3>
                                <p>    No 49, Express Avenue, <br/>
                                         Chennai,  
                                        Tamil Nadu <span>600014. &nbsp;</span> 
                                     
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".5s">
                        <div className="contact-info-items active text-center">
                            <div className="icon">
                                <img src={phone} alt="icon-img"/>
                            </div>
                            <div className="content">
                                <h3>Phone Number</h3>
                                <p>
                                    +91 9994383989 
                                    <br/>
                                    +91 9994383898 
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".7s">
                        <div className="contact-info-items text-center">
                            <div className="icon">
                                <img src={email} alt="icon-img"/>
                            </div>
                            <div className="content">
                                <h3>Mail Adress</h3>
                                <p>
                                    foodking@gamil.com
                                    <br/>
                                    info@foodking.com
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="contact-section section-padding pt-0 section-bg">
            <div className="container">
                <div className="contact-area">
                    <div className="row justify-content-between">
                        <div className="col-xl-6 col-lg-6">
                            <div className="map-content-area">
                                <h3 className="wow fadeInUp" data-wow-delay=".3s"> Get in touch</h3>
                                <p className="wow fadeInUp" data-wow-delay=".5s">
                                    Lorem ipsum dolor sit amet consectetur adipiscing elit mattis 
                                    <br/>
                                    faucibus odio feugiat arc dolor.
                                </p>
                                <div className="google-map wow fadeInUp" data-wow-delay=".7s">
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21930.6496945441!2d80.2582088397009!3d13.05713014582028!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52663d5cb874df%3A0xa023b9a57f8de95e!2sKFC!5e1!3m2!1sen!2sin!4v1729327362844!5m2!1sen!2sin" width="600" height="450"  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" style={{border:"0"}}  ></iframe>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-5 col-lg-5 mt-5 mt-lg-0">
                            <div className="contact-form-items">
                                <div className="contact-title">
                                    <h3 className="wow fadeInUp" data-wow-delay=".3s">Fill Up The Form</h3>
                                    <p className="wow fadeInUp" data-wow-delay=".5s">Your email address will not be published. Required fields are marked *</p>
                                </div>
                                <form  id="contact-form">
                                    <div className="row g-4">
                                        <div className="col-lg-12 wow fadeInUp" data-wow-delay=".3s">
                                            <div className="form-clt">
                                                <input type="text" name="name" id="name" placeholder="Your Name*" />
                                                <div className="icon">
                                                    <i className="fal fa-user"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-12 wow fadeInUp" data-wow-delay=".5s">
                                            <div className="form-clt">
                                                <input type="text" name="email" id="email" placeholder="Email Address*"/>
                                                <div className="icon">
                                                    <i className="fal fa-envelope"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-12 wow fadeInUp" data-wow-delay=".7s">
                                            <div className="form-clt-big form-clt">
                                                <textarea name="message" id="message" placeholder="Enter Your Messege here"></textarea>
                                                <div className="icon">
                                                    <i className="fal fa-edit"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 wow fadeInUp" data-wow-delay=".8s">
                                            <button type="submit" className="theme-btn">
                                            <span className="button-content-wrapper d-flex align-items-center">
                                            <span className="button-icon"><i className="fal fa-paper-plane"></i></span>
                                            <span className="button-text">Get In Touch</span>
                                            </span>
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    
        <section className="main-cta-banner-2 section-padding bg-cover" style={{
                    backgroundImage:`url(${mainctabg2})`,
                    backgroundSize: "cover",
                    // Add other styles if needed
                  }}>
            <div className="tomato-shape-left float-bob-y">
                <img src={tomato} alt="shape-img"/>
            </div>
            <div className="chili-shape-right float-bob-y">
                <img src={chilli} alt="shape-img"/>
            </div>
            <div className="container">
                <div className="main-cta-banner-wrapper-2 d-flex align-items-center justify-content-between">
                    <div className="section-title mb-0">
                        <span className="theme-color-3 wow fadeInUp">crispy, every bite taste</span>
                        <h2 className="text-white wow fadeInUp" data-wow-delay=".3s">
                            30 minutes fast 
                            <br/>
                            <span className="theme-color-3">delivery</span> challage
                        </h2>
                    </div>
                    <a  className="theme-btn bg-white wow fadeInUp" data-wow-delay=".5s">
                    <span className="button-content-wrapper d-flex align-items-center">
                    <span className="button-icon"><i className="flaticon-delivery"></i></span>
                    <span className="button-text">order now</span>
                    </span>
                    </a>
                    <div className="delivery-man">
                        <img src={deliveryman2} alt="img"/>
                    </div>
                </div>
            </div>
        </section>
    <Footer/>
    </>
  )
}

export default Contact
