import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import burger from "../assets/img/about/burger.png";
import burgertext from "../assets/img/about/burger-text.png";
import tomato from "../assets/img/tomato.png";
import chilli from "../assets/img/chilli.png";
import deliveryman2 from "../assets/img/delivery-man-2.png";
import breadcrumb from "../assets/img/banner/breadcrumb.jpg";

import pizza from "../assets/img/about-food/pizza.png";
import potato from "../assets/img/about-food/potato.png";
import chicken from "../assets/img/about-food/chicken.png";
import cheeseburger from "../assets/img/about-food/cheeseburger.png";
import bigburger from "../assets/img/food/big-burger.png";
import pizzatext2 from "../assets/img/shape/pizza-text-2.png";
import percent from "../assets/img/offer/50percent-off-3.png";
import rollerbox from "../assets/img/food/roller-box.png";
import fryshape4 from "../assets/img/shape/fry-shape-4.png";
import burgershape4 from "../assets/img/shape/burger-shape-4.png";
import burgershape3 from "../assets/img/shape/burger-shape-3.png";
import team01 from "../assets/img/team/01.jpg";
import team02 from "../assets/img/team/02.jpg";
import team03 from "../assets/img/team/03.jpg";

import choose01 from "../assets/img/choose/01.png";
import choose02 from "../assets/img/choose/02.png";
import choose03 from "../assets/img/choose/03.png";
import pizzashape from "../assets/img/shape/pizzashape.png";
import instagrambanner from "../assets/img/instagram-banner/01.jpg";
import fryshape2 from "../assets/img/shape/fry-shape-2.png";
import instagrambanner2 from "../assets/img/instagram-banner/02.jpg";
import instagrambanner3 from "../assets/img/instagram-banner/03.jpg";
import instagrambanner4 from "../assets/img/instagram-banner/04.jpg";
import instagrambanner5 from "../assets/img/instagram-banner/05.jpg";
import foodshape from "../assets/img/shape/food-shape.png";
import burgerbg from "../assets/img/banner/burger-bg.png";
// import burger from "../assets/img/icon/burger.png"
import pepsibg from "../assets/img/banner/pepsi-bg.png";
import bestsale4 from "../assets/img/banner/best-sale-4.jpg";
import shape from "../assets/img/shape.png";
import aboutfoodbg from "../assets/img/shape/about-food-bg.png";
import client01 from "../assets/img/client/01.jpg";
import client02 from "../assets/img/client/02.jpg";
import client03 from "../assets/img/client/03.jpg";
import mainbg from "../assets/img/banner/main-bg.jpg";
import mainctabg2 from "../assets/img/banner/main-cta-bg-2.jpg";
import bookingshape from '../assets/img/shape/booking-shape.png';
const About = () => {
  return (
    <>
      <Header />
      <div
        className="breadcrumb-wrapper bg-cover"
        style={{
          backgroundImage: `url(${breadcrumb})`,
          backgroundSize: "cover",
          // Add other styles if needed
        }}
      >
        <div className="container">
          <div className="page-heading center">
            <h1>About us</h1>
            <ul className="breadcrumb-items">
              <li>
                <Link to="/">Home </Link>
              </li>
              <li>
                <i className="far fa-chevron-right"></i>
              </li>
              <li>about</li>
            </ul>
          </div>
        </div>
      </div>

      <section className="about-section fix section-padding section-bg">
        <div className="container">
          <div className="about-wrapper">
            <div className="row align-items-center">
              <div
                className="col-xl-6 col-lg-6 wow fadeInUp"
                data-wow-delay=".3s"
              >
                <div className="about-image">
                  <img src={burger} alt="about-img" />
                  <div className="burger-text">
                    <img src={burgertext} alt="shape-img" />
                  </div>
                  <div className="price">
                    <h2>
                      $<span className="count">4,99</span>
                    </h2>
                  </div>
                  <div
                    className="since-text bg-cover"
                    style={{
                      backgroundImage: `url(${foodshape})`,
                      backgroundSize: "cover",
                      // Add other styles if needed
                    }}
                  >
                    <h3>since /1985</h3>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 mt-5 mt-lg-0">
                <div className="about-content">
                  <div className="section-title">
                    <span className="wow fadeInUp">about our food</span>
                    <h2 className="wow fadeInUp" data-wow-delay=".3s">
                      Where Quality Meet Excellent <span>Service.</span>
                    </h2>
                  </div>
                  <p className="wow fadeInUp" data-wow-delay=".5s">
                    It's the perfect dining experience where every dish is
                    crafted with fresh, high-quality Experience quick and
                    efficient service that ensures your food is servead fresh
                    It's the dining experience where every dish is crafted with
                    fresh, high-quality ingredients
                  </p>
                  <div className="icon-area">
                    <div
                      className="icon-items d-flex wow fadeInUp"
                      data-wow-delay=".3s"
                    >
                      <div className="icon">
                        <i className="flaticon-quality"></i>
                      </div>
                      <div className="content">
                        <h4>super quality food</h4>
                        <p>
                          A team of dreamers and doers build unique interactive
                          music and art
                        </p>
                      </div>
                    </div>
                    <div
                      className="icon-items d-flex wow fadeInUp"
                      data-wow-delay=".5s"
                    >
                      <div className="icon">
                        <i className="flaticon-reputation"></i>
                      </div>
                      <div className="content">
                        <h4>well reputation</h4>
                        <p>
                          A team of dreamers and doers build unique interactive
                          music and art
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="info-area d-flex align-items-center">
                    <a
                      href=""
                      className="theme-btn style-line-height wow fadeInUp"
                      data-wow-delay=".3s"
                    >
                      more about us
                    </a>
                    <div
                      className="info-content wow fadeInUp"
                      data-wow-delay=".5s"
                    >
                      <span>BRENDON GARREY</span>
                      <h6>Customer’s experience is our highest priority.</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="main-cta-banner-2 section-padding bg-cover"
        style={{
          backgroundImage: `url(${mainctabg2})`,
          backgroundSize: "cover",
          // Add other styles if needed
        }}
      >
        <div className="tomato-shape-left float-bob-y">
          <img src={tomato} alt="shape-img" />
        </div>
        <div className="chili-shape-right float-bob-y">
          <img src={chilli} alt="shape-img" />
        </div>
        <div className="container">
          <div className="main-cta-banner-wrapper-2 d-flex align-items-center justify-content-between">
            <div className="section-title mb-0">
              <span className="theme-color-3 wow fadeInUp">
                crispy, every bite taste
              </span>
              <h2 className="text-white wow fadeInUp" data-wow-delay=".3s">
                30 minutes fast
                <br />
                <span className="theme-color-3">delivery</span> challage
              </h2>
            </div>
            <a
              href=""
              className="theme-btn bg-white wow fadeInUp"
              data-wow-delay=".5s"
            >
              <span className="button-content-wrapper d-flex align-items-center">
                <span className="button-icon">
                  <i className="flaticon-delivery"></i>
                </span>
                <span className="button-text">order now</span>
              </span>
            </a>
            <div className="delivery-man">
              <img src={deliveryman2} alt="img" />
            </div>
          </div>
        </div>
      </section>

      <section className="about-food-section section-bg section-padding">
        <div className="container">
          <div className="about-food-wrapper style-2">
            <div className="section-title text-center">
              <span className="wow fadeInUp">about our food</span>
              <h2 className="wow fadeInUp" data-wow-delay=".3s">
                hot delicious item
              </h2>
            </div>
            <ul className="nav justify-content-center">
              <li className="nav-item wow fadeInUp" data-wow-delay=".3s">
                <a
                  href="#chicken"
                  data-bs-toggle="tab"
                  className="nav-link active"
                >
                  chicken fry
                </a>
              </li>
              <li className="nav-item wow fadeInUp" data-wow-delay=".5s">
                <a href="#pizza" data-bs-toggle="tab" className="nav-link">
                  pizza
                </a>
              </li>
              <li className="nav-item wow fadeInUp" data-wow-delay=".7s">
                <a href="#burger" data-bs-toggle="tab" className="nav-link">
                  burger
                </a>
              </li>
              <li className="nav-item wow fadeInUp" data-wow-delay=".8s">
                <a href="#deserts" data-bs-toggle="tab" className="nav-link">
                  deserts
                </a>
              </li>
            </ul>
            <div className="tab-content">
              <div id="chicken" className="tab-pane fade show active">
                <div className="description-items">
                  <div className="row">
                    <div
                      className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
                      data-wow-delay=".3s"
                    >
                      <div className="about-food-items center">
                        <div className="food-image">
                          <img src={pizza} alt="food-img" />
                        </div>
                        <div className="food-content">
                          <h3>
                            <a href="">Chicago Deep Pizza.</a>
                          </h3>
                          <p>
                            It's the perfect dining experience where Experience
                            quick and efficient
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
                      data-wow-delay=".5s"
                    >
                      <div className="about-food-items center">
                        <div className="food-image">
                          <img src={potato} alt="food-img" />
                        </div>
                        <div className="food-content">
                          <h3>
                            <a href="">Chicago Deep Pizza.</a>
                          </h3>
                          <p>
                            It's the perfect dining experience where Experience
                            quick and efficient
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
                      data-wow-delay=".7s"
                    >
                      <div className="about-food-items center">
                        <div className="food-image">
                          <img src={chicken} alt="food-img" />
                        </div>
                        <div className="food-content">
                          <h3>
                            <a>Chicago Deep Pizza.</a>
                          </h3>
                          <p>
                            It's the perfect dining experience where Experience
                            quick and efficient
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
                      data-wow-delay=".9s"
                    >
                      <div className="about-food-items center">
                        <div className="food-image">
                          <img src={cheeseburger} alt="food-img" />
                        </div>
                        <div className="food-content">
                          <h3>
                            <a href="">Chicago Deep Pizza.</a>
                          </h3>
                          <p>
                            It's the perfect dining experience where Experience
                            quick and efficient
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="pizza" className="tab-pane fade">
                <div className="description-items">
                  <div className="row">
                    <div className="col-xl-3 col-lg-6">
                      <div className="about-food-items center">
                        <div className="food-image">
                          <img src={pizza} alt="food-img" />
                        </div>
                        <div className="food-content">
                          <h3>
                            <a href="">Chicago Deep Pizza.</a>
                          </h3>
                          <p>
                            It's the perfect dining experience where Experience
                            quick and efficient
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-6">
                      <div className="about-food-items center">
                        <div className="food-image">
                          <img src={potato} alt="food-img" />
                        </div>
                        <div className="food-content">
                          <h3>
                            <a href="">Chicago Deep Pizza.</a>
                          </h3>
                          <p>
                            It's the perfect dining experience where Experience
                            quick and efficient
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-6">
                      <div className="about-food-items center">
                        <div className="food-image">
                          <img src={chicken} alt="food-img" />
                        </div>
                        <div className="food-content">
                          <h3>
                            <a>Chicago Deep Pizza.</a>
                          </h3>
                          <p>
                            It's the perfect dining experience where Experience
                            quick and efficient
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-6">
                      <div className="about-food-items center">
                        <div className="food-image">
                          <img src={cheeseburger} alt="food-img" />
                        </div>
                        <div className="food-content">
                          <h3>
                            <a>Chicago Deep Pizza.</a>
                          </h3>
                          <p>
                            It's the perfect dining experience where Experience
                            quick and efficient
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="burger" className="tab-pane fade">
                <div className="description-items">
                  <div className="row">
                    <div className="col-xl-3 col-lg-6">
                      <div className="about-food-items center">
                        <div className="food-image">
                          <img src={pizza} alt="food-img" />
                        </div>
                        <div className="food-content">
                          <h3>
                            <a href="">Chicago Deep Pizza.</a>
                          </h3>
                          <p>
                            It's the perfect dining experience where Experience
                            quick and efficient
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-6">
                      <div className="about-food-items center">
                        <div className="food-image">
                          <img src={potato} alt="food-img" />
                        </div>
                        <div className="food-content">
                          <h3>
                            <a href="">Chicago Deep Pizza.</a>
                          </h3>
                          <p>
                            It's the perfect dining experience where Experience
                            quick and efficient
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-6">
                      <div className="about-food-items center">
                        <div className="food-image">
                          <img src={chicken} alt="food-img" />
                        </div>
                        <div className="food-content">
                          <h3>
                            <a href="">Chicago Deep Pizza.</a>
                          </h3>
                          <p>
                            It's the perfect dining experience where Experience
                            quick and efficient
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-6">
                      <div className="about-food-items center">
                        <div className="food-image">
                          <img src={cheeseburger} alt="food-img" />
                        </div>
                        <div className="food-content">
                          <h3>
                            <a>Chicago Deep Pizza.</a>
                          </h3>
                          <p>
                            It's the perfect dining experience where Experience
                            quick and efficient
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="deserts" className="tab-pane fade">
                <div className="description-items">
                  <div className="row">
                    <div className="col-xl-3 col-lg-6">
                      <div className="about-food-items center">
                        <div className="food-image">
                          <img src={pizza} alt="food-img" />
                        </div>
                        <div className="food-content">
                          <h3>
                            <a href="">Chicago Deep Pizza.</a>
                          </h3>
                          <p>
                            It's the perfect dining experience where Experience
                            quick and efficient
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-6">
                      <div className="about-food-items center">
                        <div className="food-image">
                          <img src={potato} alt="food-img" />
                        </div>
                        <div className="food-content">
                          <h3>
                            <a href="">Chicago Deep Pizza.</a>
                          </h3>
                          <p>
                            It's the perfect dining experience where Experience
                            quick and efficient
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-6">
                      <div className="about-food-items center">
                        <div className="food-image">
                          <img src={chicken} alt="food-img" />
                        </div>
                        <div className="food-content">
                          <h3>
                            <a href="">Chicago Deep Pizza.</a>
                          </h3>
                          <p>
                            It's the perfect dining experience where Experience
                            quick and efficient
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-6">
                      <div className="about-food-items center">
                        <div className="food-image">
                          <img src={cheeseburger} alt="food-img" />
                        </div>
                        <div className="food-content">
                          <h3>
                            <a href="">Chicago Deep Pizza.</a>
                          </h3>
                          <p>
                            It's the perfect dining experience where Experience
                            quick and efficient
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="food-banner-section fix section-padding section-bg pt-0">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-7 col-lg-9">
              <div
                className="burger-banner-items bg-cover"
                style={{
                  backgroundImage: `url(${burgerbg})`,
                  backgroundSize: "cover",
                  // Add other styles if needed
                }}
              >
                <div className="burger-content text-center">
                  <h3>today</h3>
                  <h2>special</h2>
                  <h4>
                    <a className="text-white">
                      beef <span>burger</span>
                    </a>
                  </h4>
                </div>
                <div className="burger-image">
                  <img src={bigburger} alt="food-img" />
                </div>
                <div className="text-shape">
                  <img src={pizzatext2} alt="shape-img" />
                </div>
                <div className="burger-text">
                  <img src={burgertext} alt="shape-img" />
                </div>
              </div>
            </div>
            <div className="col-xl-5 col-lg-9 mt-5 mt-xl-0">
              <div
                className="single-offer-items style-2 bg-cover"
                style={{
                  backgroundImage: `url(${pepsibg})`,
                  backgroundSize: "cover",
                  // Add other styles if needed
                }}
              >
                <div className="offer-content">
                  <h5>crispy, every bite taste</h5>
                  <h3>
                    FASH FOOD <br />
                    MEAL
                  </h3>
                  <p>
                    The mouth-watering aroma of <br />
                    sizzling burgers
                  </p>
                  <a className="theme-btn mt-4">order now</a>
                </div>
                <div className="offer-img">
                  <img src={percent} alt="shape-img" />
                </div>
                <div className="roller-box">
                  <img src={rollerbox} alt="food-img" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

     

      <section className="today-best-sale fix">
        <div className="today-best-sale-wrapper">
          <div className="row g-0">
            <div className="col-xl-8 col-lg-7">
              <div className="swiper today-best-sale-image-slider">
                <div className="array-button">
                  <button className="array-next">
                    <i className="far fa-long-arrow-right"></i>
                  </button>
                  <button className="array-prev">
                    <i className="far fa-long-arrow-left"></i>
                  </button>
                </div>
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <div
                      className="today-best-sale-image bg-cover"
                      style={{
                        backgroundImage: `url(${bestsale4})`,
                        backgroundSize: "cover",
                        // Add other styles if needed
                      }}
                    ></div>
                  </div>
                  <div className="swiper-slide">
                    <div
                      className="today-best-sale-image bg-cover"
                      style={{
                        backgroundImage: `url(${bestsale4})`,
                        backgroundSize: "cover",
                        // Add other styles if needed
                      }}
                    ></div>
                  </div>
                  <div className="swiper-slide">
                    <div
                      className="today-best-sale-image bg-cover"
                      style={{
                        backgroundImage: `url(${bestsale4})`,
                        backgroundSize: "cover",
                        // Add other styles if needed
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-5">
              <div
                className="best-sale-content style-2 bg-cover"
                style={{
                  backgroundImage: `url(${shape})`,
                  backgroundSize: "cover",
                  // Add other styles if needed
                }}
              >
                <div className="burger-shape">
                  <img src={fryshape4} alt="shape-img" />
                </div>
                <div className="fry-shape">
                  <img src={burgershape4} alt="shape-img" />
                </div>
                <h4 className="wow fadeInUp">Deal Of The Day</h4>
                <h2 className="wow fadeInUp" data-wow-delay=".3s">
                  TODAY'S the hamburger' DAY
                </h2>
                <h3 className="wow fadeInUp" data-wow-delay=".5s">
                  <span>special price</span> $55
                </h3>
                <p className="wow fadeInUp" data-wow-delay=".7s">
                  Savor the perfect symphony of flavors It's the perfect dining
                  experience where Experience quick and efficient with our
                  signature hamburger, a culinary
                </p>
                <div className="button-area wow fadeInUp" data-wow-delay=".9s">
                  <a
                    href=""
                    className="theme-btn bg-transparent"
                  >
                    <span className="button-content-wrapper d-flex align-items-center">
                      <span className="button-icon">
                        <i className="flaticon-delivery"></i>
                      </span>
                      <span className="button-text">order now</span>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="team-section section-padding section-bg fix">
        <div className="container">
          <div className="section-title text-center">
            <span className="wow fadeInUp">about our food</span>
            <h2 className="wow fadeInUp" data-wow-delay=".3s">
              MEET OUR EXPERT CHEFS
            </h2>
          </div>
          <div className="row">
            <div
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay=".3s"
            >
              <div className="single-team-items">
                <div className="team-image">
                  <img src={team01} alt="team-img" />
                  <div className="social-link">
                    <a href="#">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="#">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href="#">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a href="#">
                      <i className="fab fa-youtube"></i>
                    </a>
                  </div>
                </div>
                <div className="team-content">
                  <p>head chef</p>
                  <h3>
                    <a href="">Leslie Alexander</a>
                  </h3>
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay=".5s"
            >
              <div className="single-team-items active">
                <div className="team-image">
                  <img src={team02} alt="team-img" />
                  <div className="social-link">
                    <a href="#">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="#">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href="#">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a href="#">
                      <i className="fab fa-youtube"></i>
                    </a>
                  </div>
                </div>
                <div className="team-content">
                  <p>sr table manager</p>
                  <h3>
                    <a>Henry Lucas</a>
                  </h3>
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay=".7s"
            >
              <div className="single-team-items">
                <div className="team-image">
                  <img src={team03} alt="team-img" />
                  <div className="social-link">
                    <a href="#">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="#">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href="#">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a href="#">
                      <i className="fab fa-youtube"></i>
                    </a>
                  </div>
                </div>
                <div className="team-content">
                  <p>senoir cooker</p>
                  <h3>
                    <a>Mateo Levi</a>
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <div
            className="team-button text-center mt-5 wow fadeInUp"
            data-wow-delay=".4s"
          >
            <a className="theme-btn">meet our team</a>
          </div>
        </div>
      </section>

      <section
        className="food-processing-section section-padding fix bg-cover"
        style={{
          backgroundImage: `url(${aboutfoodbg})`,
          backgroundSize: "cover",
          // Add other styles if needed
        }}
      >
        <div className="container">
          <div className="section-title text-center">
            <span className="wow fadeInUp">food processing</span>
            <h2 className="wow fadeInUp" data-wow-delay=".3s">
              how we serve you?
            </h2>
          </div>
          <div className="food-processing-wrapper">
            <div className="row">
              <div
                className="col-xl-4 col-md-6 wow fadeInUp"
                data-wow-delay=".3s"
              >
                <div className="food-processing-items style-2 center">
                  <div className="food-processing-image">
                    <img src={choose01} alt="img" />
                    <div className="number">
                      <span>01</span>
                    </div>
                  </div>
                  <div className="food-processing-content">
                    <h3>cooking with care</h3>
                    <p>
                      It's the perfect dining experience where Experience quick
                      and efficient
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-4 col-md-6 wow fadeInUp"
                data-wow-delay=".5s"
              >
                <div className="food-processing-items style-2 center active">
                  <div className="food-processing-image">
                    <img src={choose02} alt="img" />
                    <div className="number">
                      <span>02</span>
                    </div>
                  </div>
                  <div className="food-processing-content">
                    <h3>quickly delivery</h3>
                    <p>
                      It's the perfect dining experience where Experience quick
                      and efficient
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-4 col-md-6 wow fadeInUp"
                data-wow-delay=".7s"
              >
                <div className="food-processing-items style-2 center">
                  <div className="food-processing-image">
                    <img src={choose03} alt="img" />
                    <div className="number">
                      <span>03</span>
                    </div>
                  </div>
                  <div className="food-processing-content">
                    <h3>choose food</h3>
                    <p>
                      It's the perfect dining experience where Experience quick
                      and efficient
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="testimonial-section fix section-padding section-bg">
        <div className="burger-shape">
          <img src={burgershape3} alt="burger-shape" />
        </div>
        <div className="fry-shape">
          <img src={fryshape2} alt="burger-shape" />
        </div>
        <div className="pizza-shape">
          <img src={pizzashape} alt="burger-shape" />
        </div>
        <div className="container">
          <div className="testimonial-wrapper style-2">
            <div className="testimonial-items text-center">
              <div className="swiper testimonial-content-slider">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <div className="testimonial-content">
                      <div className="client-info">
                        <h4>Piter Bowman</h4>
                        <h5>Business CEO & co founder</h5>
                      </div>
                      <h3>
                        “Thank you for dinner last night. It was amazing!! I
                        have say it’s the best meal I have had in quite some
                        time. will definitely be seeing more eating next year.”
                      </h3>
                      <div className="star">
                        <span className="fas fa-star"></span>
                        <span className="fas fa-star"></span>
                        <span className="fas fa-star"></span>
                        <span className="fas fa-star"></span>
                        <span className="fas fa-star"></span>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="testimonial-content">
                      <div className="client-info">
                        <h4>Piter Bowman</h4>
                        <h5>Business CEO & co founder</h5>
                      </div>
                      <h3>
                        “Thank you for dinner last night. It was amazing!! I
                        have say it’s the best meal I have had in quite some
                        time. will definitely be seeing more eating next year.”
                      </h3>
                      <div className="star">
                        <span className="fas fa-star"></span>
                        <span className="fas fa-star"></span>
                        <span className="fas fa-star"></span>
                        <span className="fas fa-star"></span>
                        <span className="fas fa-star"></span>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="testimonial-content">
                      <div className="client-info">
                        <h4>Piter Bowman</h4>
                        <h5>Business CEO & co founder</h5>
                      </div>
                      <h3>
                        “Thank you for dinner last night. It was amazing!! I
                        have say it’s the best meal I have had in quite some
                        time. will definitely be seeing more eating next year.”
                      </h3>
                      <div className="star">
                        <span className="fas fa-star"></span>
                        <span className="fas fa-star"></span>
                        <span className="fas fa-star"></span>
                        <span className="fas fa-star"></span>
                        <span className="fas fa-star"></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper testimonial-image-slider">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <div className="client-image-item">
                      <div
                        className="client-img bg-cover"
                        style={{
                          backgroundImage: `url(${client01})`,
                          backgroundSize: "cover",
                          // Add other styles if needed
                        }}
                      ></div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="client-image-item">
                      <div
                        className="client-img bg-cover"
                        style={{
                          backgroundImage: `url(${client02})`,
                          backgroundSize: "cover",
                          // Add other styles if needed
                        }}
                      ></div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="client-image-item">
                      <div
                        className="client-img bg-cover"
                        style={{
                          backgroundImage: `url(${client03})`,
                          backgroundSize: "cover",
                          // Add other styles if needed
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="booking-section mt-0 fix section-padding bg-cover"
        style={{
          backgroundImage: `url(${mainbg})`,
          backgroundSize: "cover",
          // Add other styles if needed
        }}
      >
        <div className="container">
          <div className="booking-wrapper">
            <div className="row justify-content-between align-items-center">
              <div className="col-lg-6">
                <div className="booking-content">
                  <div className="section-title">
                    <span className="wow fadeInUp">
                      crispy, every bite taste
                    </span>
                    <h2
                      className="text-white wow fadeInUp"
                      data-wow-delay=".3s"
                    >
                      need booking? <br />
                      reserve your table?
                    </h2>
                  </div>
                  <div
                    className="icon-items d-flex align-items-center wow fadeInUp"
                    data-wow-delay=".5s"
                  >
                    <div className="icon">
                      <i className="flaticon-phone-call-2"></i>
                    </div>
                    <div className="content">
                      <h5>24/7 Support center</h5>
                      <h3>
                        <a href="tel:+919994383989">+91 9994383989</a>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-5 mt-5 mt-lg-0 wow fadeInUp"
                data-wow-delay=".4s"
              >
                <div
                  className="booking-contact bg-cover"
                  style={{
                    backgroundImage:
                      `url(${bookingshape})`,
                    backgroundSize: "cover",
                    // Add other styles if needed
                  }}
                >
                  <h4 className="text-center text-white">
                    create an reservation
                  </h4>
                  <div className="booking-items">
                    <div className="form-clt">
                      <div className="nice-select" tabIndex="0">
                        <span className="current">no of person</span>
                        <ul className="list">
                          <li data-value="1" className="option selected">
                            no of person
                          </li>
                          <li data-value="1" className="option">
                            no of person
                          </li>
                          <li data-value="1" className="option">
                            no of person
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="form-clt">
                      <input
                        type="text"
                        name="number"
                        id="number"
                        placeholder="phone number"
                      />
                      <div className="icon">
                        <i className="fas fa-phone"></i>
                      </div>
                    </div>
                    <div className="form-clt">
                      <input type="date" id="calendar" name="calendar" />
                    </div>
                    <div className="form-clt">
                      <a className="theme-btn bg-yellow">booking now</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      
      <Footer />
    </>
  );
};

export default About;
