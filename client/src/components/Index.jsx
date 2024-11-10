import { useEffect } from 'react';
import Header from './Header'
import Footer from './Footer'

import bookingshape from '/src/assets/website/img/shape/booking-shape.png';
import mainbg from '/src/assets/website/img/banner/main-bg.jpg';
import mainctabg from '/src/assets/website/img/banner/main-cta-bg.jpg';
import herobg from '/src/assets/website/img/hero/hero-bg.jpg';
import catagorycardshape from '/src/assets/website/img/shape/catagory-card-shape.jpg';
import offerbg from '/src/assets/website/img/banner/offer-bg.png';
import bg from '/src/assets/website/img/bg-image/bg.jpg';
import comboobg from '/src/assets/website/img/banner/comboo-bg.jpg';
import foodshape2 from '/src/assets/website/img/shape/food-shape-2.png';
import foodshape from '/src/assets/website/img/shape/food-shape.png';  
import foodshapesvg from '/src/assets/website/img/shape/food-shape.svg';  
import pepsibg from '/src/assets/website/img/banner/pepsi-bg.png';
import kfc from '/src/assets/website/img/food/kfc.png';
import burgerbg from '/src/assets/website/img/banner/burger-bg.png';
import client1 from '/src/assets/website/img/client/01.jpg';
import client2 from '/src/assets/website/img/client/02.jpg';
import client3 from '/src/assets/website/img/client/03.jpg';
import chillishape from "/src/assets/website/img/hero/chilli-shape.png";
import fireshape from "/src/assets/website/img/hero/fire-shape.png";
import chillishape2 from "/src/assets/website/img/hero/chilli-shape-2.png";
import chillishape3 from "/src/assets/website/img/hero/chilli-shape-3.png";
import offershape from "/src/assets/website/img/hero/offer-shape.png";
import chiken from "/src/assets/website/img/hero/chiken.png";
import tomatoshape from "/src/assets/website/img/shape/tomato-shape.png";
import burgershape2 from "/src/assets/website/img/shape/burger-shape-2.png";
import pizza from "/src/assets/website/img/food/pizza.png";
import decorleaf from "/src/assets/website/img/shape/decor-leaf.svg";
import decorleaf2 from "/src/assets/website/img/shape/decor-leaf-2.svg";
import burgershape from "/src/assets/website/img/shape/burger-shape.png";
import burgershape3  from "/src/assets/website/img/shape/burger-shape-3.png";
import burger from "/src/assets/website/img/food/burger.png";
import chilishape from "/src/assets/website/img/shape/chili-shape.png";
import fryshape from "/src/assets/website/img/shape/fry-shape.png";
import fryshape2 from "/src/assets/website/img/shape/fry-shape-2.png";
import percentoff from "/src/assets/website/img/offer/50percent-off.png" ;
import  percentoff2 from "/src/assets/website/img/offer/50percent-off-2.png";
import burgertext from "/src/assets/website/img/shape/burger-text.png";

import mainfood from "/src/assets/website/img/food/main-food.png"
import pizzatext from "/src/assets/website/img/shape/pizza-text.png"
import pizzashape  from "/src/assets/website/img/shape/pizzashape.png"
import pizza2 from "/src/assets/website/img/food/pizza-2.png"
import brand01 from "/src/assets/website/img/brand/01.svg"
import brand02 from "/src/assets/website/img/brand/02.svg"
import brand03 from "/src/assets/website/img/brand/03.svg"
import brand04 from "/src/assets/website/img/brand/04.svg"
import brand05 from "/src/assets/website/img/brand/05.svg"
import brand06 from "/src/assets/website/img/brand/06.svg"
import patatoshape from "/src/assets/website/img/shape/patato-shape.png"
import spicy from"/src/assets/website/img/shape/spicy.png"
import tomatoshape2 from "/src/assets/website/img/shape/tomato-shape-2.png"
import grilled from "/src/assets/website/img/food/grilled.png"
import beefruti from "/src/assets/website/img/food/beef-ruti.png"
import burger2 from "/src/assets/website/img/food/burger-2.png"
import pasta2 from "/src/assets/website/img/food/pasta-2.png"
import pizza3 from "/src/assets/website/img/food/pizza-3.png"
import mainfood2 from "/src/assets/website/img/food/main-food-2.png"
import ruti from "/src/assets/website/img/food/ruti.png"
import grilled2 from "/src/assets/website/img/food/grilled-2.png"
import deliciousburger from "/src/assets/website/img/food/delicious-burger.png"
import arrowshape from "/src/assets/website/img/shape/arrow-shape.png"
import deliveryman from "/src/assets/website/img/delivery-man.png"
import frame from "/src/assets/website/img/shape/frame.png";
import pasta from "/src/assets/website/img/food/pasta.png";
import frenchfry from "/src/assets/website/img/food/french-fry.png";
import pizzatext2 from "/src/assets/website/img/shape/pizza-text-2.png" 
import bigpizza from "/src/assets/website/img/food/big-pizza.png"
import vegetable from "/src/assets/website/img/shape/vegetable.png"
import combopizzatext from "/src/assets/website/img/shape/combo-pizza-text.png"
import bigburger from "/src/assets/website/img/food/big-burger.png"
import percentoff3 from "/src/assets/website/img/offer/50percent-off-3.png"
import rollerbox from "/src/assets/website/img/food/roller-box.png"
import chicken from "/src/assets/website/img/offer/chicken.png"
import drinks from "/src/assets/website/img/shape/drinks.png"
import iconpizza from "/src/assets/website/img/icon/pizza.png";
import iconburger from "/src/assets/website/img/icon/burger.png";
import kfcbg from "/src/assets/website/img/banner/kfc-bg.png";
import aboutburger from "/src/assets/website/img/about/burger.png";
import offerburger from "/src/assets/website/img/offer/burger.png";
import offerpizza from "/src/assets/website/img/offer/pizza.png";


import "../assets/website/css/animate.css";
import "../assets/website/css/bootstrap.min.css";
import "../assets/website/css/font-awesome.css";
import "../assets/website/css/magnific-popup.css";
import "../assets/website/css/main.css";
import "../assets/website/css/meanmenu.css";
import "../assets/website/css/nice-select.css";
import "../assets/website/css/swiper-bundle.min.css";





const Index = () => {
    
    


  return (
    <>
      <Header/>

      {/* Hero Section Start  */}
        <section className="hero-section">
            <div className="swiper hero-slider">
                <div className="swiper-wrapper">
                    <div className="swiper-slide">
                        <div className="hero-1 bg-cover" style={{ backgroundImage: `url(${herobg})` }}>
                            <div className="chilii-shape" data-animation="fadeInUp" data-delay="2.1s">
                                <img src={chillishape} alt="shape-img"/>
                            </div>
                            <div className="fire-shape" data-animation="fadeInUp" data-delay="2.4s">
                                <img src={fireshape} alt="shape-img"/>
                            </div>
                            <div className="chilii-shape-2" data-animation="fadeInUp" data-delay="2.7s">
                                <img src={chillishape2} alt="shape-img"/>
                            </div>
                            <div className="chilii-shape-3" data-animation="fadeInUp" data-delay="3s">
                                <img src={chillishape3} alt="shape-img"/>
                            </div>
                            <div className="offer-shape"  data-animation="fadeInUp" data-delay="2.1s">
                                <img src={offershape} alt="shape-img"/>
                            </div>
                            <h2 className="hero-back-title"  data-animation="fadeInRight" data-delay="2.5s">fast food</h2>
                            <div className="container">
                                <div className="row justify-content-between">
                                    <div className="col-xl-5 col-lg-7">
                                        <div className="hero-content">
                                            <p data-animation="fadeInUp">crispy, every bite taste</p>
                                            <h1  data-animation="fadeInUp" data-delay="0.5s">
                                                delicious
                                                <span>fried</span>
                                                chiken
                                            </h1>
                                            <div className="hero-button">
                                                <a href="" className="theme-btn" data-animation="fadeInUp" data-delay="0.9s">
                                                <span className="button-content-wrapper d-flex align-items-center">
                                                <span className="button-icon"><i className="flaticon-delivery"></i></span>
                                                <span className="button-text">order now</span>
                                                </span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-5 mt-5 mt-lg-0">
                                        <div className="chiken-image" data-animation="fadeInUp" data-delay="1.4s">
                                            <img src={chiken} alt="chiken-img"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="swiper-slide">
                        <div className="hero-1 bg-cover" 
                        style={{ backgroundImage: `url(${herobg})` }}>
                            <div className="chilii-shape" data-animation="fadeInUp" data-delay="2.1s">
                                <img src={chillishape} alt="shape-img"/>
                            </div>
                            <div className="fire-shape" data-animation="fadeInUp" data-delay="2.4s">
                                <img src={fireshape} alt="shape-img"/>
                            </div>
                            <div className="chilii-shape-2" data-animation="fadeInUp" data-delay="2.7s">
                                <img src={chillishape2} alt="shape-img"/>
                            </div>
                            <div className="chilii-shape-3" data-animation="fadeInUp" data-delay="3s">
                                <img src={chillishape3} alt="shape-img"/>
                            </div>
                            <div className="offer-shape"  data-animation="fadeInUp" data-delay="2.1s">
                                <img src={offershape} alt="shape-img"/>
                            </div>
                            <h2 className="hero-back-title"  data-animation="fadeInRight" data-delay="2.5s">fast food</h2>
                            <div className="container">
                                <div className="row justify-content-between">
                                    <div className="col-xl-5 col-lg-7">
                                        <div className="hero-content">
                                            <p data-animation="fadeInUp">crispy, every bite taste</p>
                                            <h1  data-animation="fadeInUp" data-delay="0.5s">
                                                Awesome
                                                <span>fried</span>
                                                chiken
                                            </h1>
                                            <div className="hero-button">
                                                <a href="" className="theme-btn" data-animation="fadeInUp" data-delay="0.9s">
                                                <span className="button-content-wrapper d-flex align-items-center">
                                                <span className="button-icon"><i className="flaticon-delivery"></i></span>
                                                <span className="button-text">order now</span>
                                                </span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-5 mt-5 mt-lg-0">
                                        <div className="chiken-image" data-animation="fadeInUp" data-delay="1.4s">
                                            <img src={chiken} alt="chiken-img"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="swiper-slide">
                        <div className="hero-1 bg-cover"

                        style= {{ backgroundImage: `url(${herobg})` }}
                        >
                            <div className="chilii-shape" data-animation="fadeInUp" data-delay="2.1s">
                                <img src={chillishape2} alt="shape-img"/>
                            </div>
                            <div className="fire-shape" data-animation="fadeInUp" data-delay="2.4s">
                                <img src={fireshape} alt="shape-img"/>
                            </div>
                            <div className="chilii-shape-2" data-animation="fadeInUp" data-delay="2.7s">
                                <img src={chillishape2} alt="shape-img"/>
                            </div>
                            <div className="chilii-shape-3" data-animation="fadeInUp" data-delay="3s">
                                <img src={chillishape3} alt="shape-img"/>
                            </div>
                            <div className="offer-shape"  data-animation="fadeInUp" data-delay="2.1s">
                                <img src={offershape} alt="shape-img"/>
                            </div>
                            <h2 className="hero-back-title"  data-animation="fadeInRight" data-delay="2.5s">fast food</h2>
                            <div className="container">
                                <div className="row justify-content-between">
                                    <div className="col-xl-5 col-lg-7">
                                        <div className="hero-content">
                                            <p data-animation="fadeInUp">crispy, every bite taste</p>
                                            <h1  data-animation="fadeInUp" data-delay="0.5s">
                                                Favorite
                                                <span>fried</span>
                                                chiken
                                            </h1>
                                            <div className="hero-button">
                                                <a href="" className="theme-btn" data-animation="fadeInUp" data-delay="0.9s">
                                                <span className="button-content-wrapper d-flex align-items-center">
                                                <span className="button-icon"><i className="flaticon-delivery"></i></span>
                                                <span className="button-text">order now</span>
                                                </span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-5 mt-5 mt-lg-0">
                                        <div className="chiken-image" data-animation="fadeInUp" data-delay="1.4s">
                                            <img src={chiken} alt="chiken-img"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="swiper-slide">
                        <div className="hero-1 bg-cover" 
                        style= {{ backgroundImage: `url(${herobg})` }}
                        >
                            <div className="chilii-shape" data-animation="fadeInUp" data-delay="2.1s">
                                <img src={chillishape} alt="shape-img"/>
                            </div>
                            <div className="fire-shape" data-animation="fadeInUp" data-delay="2.4s">
                                <img src={fireshape} alt="shape-img"/>
                            </div>
                            <div className="chilii-shape-2" data-animation="fadeInUp" data-delay="2.7s">
                                <img src={chillishape2} alt="shape-img"/>
                            </div>
                            <div className="chilii-shape-3" data-animation="fadeInUp" data-delay="3s">
                                <img src={chillishape3} alt="shape-img"/>
                            </div>
                            <div className="offer-shape"  data-animation="fadeInUp" data-delay="2.1s">
                                <img src={offershape} alt="shape-img"/>
                            </div>
                            <h2 className="hero-back-title"  data-animation="fadeInRight" data-delay="2.5s">fast food</h2>
                            <div className="container">
                                <div className="row justify-content-between">
                                    <div className="col-xl-5 col-lg-7">
                                        <div className="hero-content">
                                            <p data-animation="fadeInUp">crispy, every bite taste</p>
                                            <h1  data-animation="fadeInUp" data-delay="0.5s">
                                                delicious
                                                <span>fried</span>
                                                chiken
                                            </h1>
                                            <div className="hero-button">
                                                <a href="" className="theme-btn" data-animation="fadeInUp" data-delay="0.9s">
                                                <span className="button-content-wrapper d-flex align-items-center">
                                                <span className="button-icon"><i className="flaticon-delivery"></i></span>
                                                <span className="button-text">order now</span>
                                                </span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-5 mt-5 mt-lg-0">
                                        <div className="chiken-image" data-animation="fadeInUp" data-delay="1.4s">
                                            <img src={chiken} alt="chiken-img"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="swiper-dot text-center pt-5">
                    <div className="dot"></div>
                </div>
            </div>
        </section>

        {/* Food Catagory Section Start  */}
        <section className="food-category-section fix section-padding section-bg">
            <div className="tomato-shape">
                <img src={tomatoshape} alt="shape-img"/>
            </div>
            <div className="burger-shape-2">
                <img src={burgershape2} alt="shape-img"/>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-7 col-9">
                        <div className="section-title">
                            <span className="wow fadeInUp">crispy, every bite taste</span>
                            <h2 className="wow fadeInUp" data-wow-delay=".3s">Popular Food Items</h2>
                        </div>
                    </div>
                    <div className="col-md-5 ps-0 col-3 text-end wow fadeInUp" data-wow-delay=".5s">
                        <div className="array-button">
                            <button className="array-prev"><i className="far fa-long-arrow-left"></i></button>
                            <button className="array-next"><i className="far fa-long-arrow-right"></i></button>
                        </div>
                    </div>
                </div>
                <div className="swiper food-catagory-slider">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide">
                            <div className="catagory-product-card bg-cover"
                           style= {{ backgroundImage: `url(${catagorycardshape})`}} >
                                <h5>5 products</h5>
                                <div className="catagory-product-image text-center">
                                    <a href="">
                                        <img src={pizza} alt="product-img"/>
                                        <div className="decor-leaf">
                                            <img src={decorleaf} alt="shape-img"/>
                                        </div>
                                        <div className="decor-leaf-2">
                                            <img src={decorleaf2} alt="shape-img"/>
                                        </div>
                                        <div className="burger-shape">
                                            <img src={burgershape} alt="shape-img"/>
                                        </div>
                                    </a>
                                </div>
                                <div className="catagory-product-content text-center">
                                    <div className="catagory-product-icon">
                                        <img src={foodshapesvg} alt="shape-text"/>
                                    </div>
                                    <h3>
                                        <a href="">
                                        pro pizza
                                        </a>
                                    </h3>
                                    <p>5 products</p>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="catagory-product-card bg-cover" 
                          style=  {{ backgroundImage: `url(${catagorycardshape})` }}>
                                <h5>5 products</h5>
                                <div className="catagory-product-image text-center">
                                    <a href="">
                                        <img src={pasta} alt="product-img"/>
                                        <div className="decor-leaf">
                                            <img src={decorleaf} alt="shape-img"/>
                                        </div>
                                        <div className="decor-leaf-2">
                                            <img src={decorleaf2} alt="shape-img"/>
                                        </div>
                                        <div className="burger-shape">
                                            <img src={burgershape} alt="shape-img"/>
                                        </div>
                                    </a>
                                </div>
                                <div className="catagory-product-content text-center">
                                    <div className="catagory-product-icon">
                                        <img src={foodshapesvg} alt="shape-text"/>
                                    </div>
                                    <h3>
                                        <a href="">
                                        pro pizza
                                        </a>
                                    </h3>
                                    <p>5 products</p>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="catagory-product-card bg-cover"
                            style=  {{ backgroundImage: `url(${catagorycardshape})` }}>
                                <h5>5 products</h5>
                                <div className="catagory-product-image text-center">
                                    <a href="">
                                        <img src={burger} alt="product-img"/>
                                        <div className="decor-leaf">
                                            <img src={decorleaf} alt="shape-img"/>
                                        </div>
                                        <div className="decor-leaf-2">
                                            <img src={decorleaf2} alt="shape-img"/>
                                        </div>
                                        <div className="burger-shape">
                                            <img src={burgershape} alt="shape-img"/>
                                        </div>
                                    </a>
                                </div>
                                <div className="catagory-product-content text-center">
                                    <div className="catagory-product-icon">
                                        <img src={foodshapesvg} alt="shape-text"/>
                                    </div>
                                    <h3>
                                        <a href="">
                                        pro pizza
                                        </a>
                                    </h3>
                                    <p>5 products</p>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="catagory-product-card bg-cover"
                            style=  {{ backgroundImage: `url(${catagorycardshape})` }}>
                                <h5>5 products</h5>
                                <div className="catagory-product-image text-center">
                                    <a href="">
                                        <img src={frenchfry} alt="product-img"/>
                                        <div className="decor-leaf">
                                            <img src={decorleaf} alt="shape-img"/>
                                        </div>
                                        <div className="decor-leaf-2">
                                            <img src={decorleaf2} alt="shape-img"/>
                                        </div>
                                        <div className="burger-shape">
                                            <img src={burgershape} alt="shape-img"/>
                                        </div>
                                    </a>
                                </div>
                                <div className="catagory-product-content text-center">
                                    <div className="catagory-product-icon">
                                        <img src={foodshapesvg} alt="shape-text"/>
                                    </div>
                                    <h3>
                                        <a href="">
                                        pro pizza
                                        </a>
                                    </h3>
                                    <p>5 products</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

       {/* Food Banner Section Start  */}
        <section className="food-banner-section section-padding fix section-bg pt-0">
            <div className="chili-shape">
                <img src={chilishape} alt="shape-img"/>
            </div>
            <div className="fry-shape">
                <img src={fryshape} alt="shape-img"/>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-5 wow fadeInUp" data-wow-delay=".3s">
                        <div className="single-offer-items bg-cover"
                        style=  {{ backgroundImage: `url(${offerbg})` }}
                        >
                            <div className="offer-content">
                                <h5>crispy, every bite taste</h5>
                                <h3>
                                    SUPER <br/>
                                    DELICIOUS 
                                </h3>
                            </div>
                            <div className="offer-image">
                                <img src={percentoff} alt="offer-img"/>
                            </div>
                            <div className="burger-text">
                                <img src={burgertext} alt="shape-img"/>
                            </div>
                            <div className="main-food">
                                <img src={mainfood} alt="food-img"/>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-7 mt-5 mt-xl-0 wow fadeInUp" data-wow-delay=".5s">
                        <div className="pizza-banner-items bg-cover" 
                        
                        style=  {{ backgroundImage: `url(${offerbg})` }}
                        >
                            <div className="pizza-text">
                                <img src={pizzatext} alt="shape-img"/>
                            </div>
                            <div className="pizza-text-2">
                                <img src={pizzatext2} alt="shape-img"/>
                            </div>
                            <div className="pizza-image">
                                <img src={pizza2} alt="pizza-img"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

         {/* Brand Section Start  */}
        <section className="brand-shape section-padding fix section-bg pt-0">
            <div className="container">
                <div className="brand-wrapper">
                    <div className="brand-title">
                        <h4>
                            Global <span>5K+</span> Happy Sponsors With us
                        </h4>
                    </div>
                    <div className="swiper brand-slider">
                        <div className="swiper-wrapper">
                            <div className="swiper-slide">
                                <div className="brand-image">
                                    <img src={brand01} alt="brand-img"/>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="brand-image">
                                    <img src={brand02} alt="brand-img"/>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="brand-image">
                                    <img src={brand03} alt="brand-img"/>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="brand-image">
                                    <img src={brand04} alt="brand-img"/>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="brand-image">
                                    <img src={brand05} alt="brand-img"/>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="brand-image">
                                    <img src={brand06} alt="brand-img"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

         {/* Grilled Banner Section Start  */}
        <section className="grilled-banner fix section-padding bg-cover" 
        style=  {{ backgroundImage: `url(${mainbg})` }}
        >
            <div className="patato-shape">
                <img src={patatoshape} alt="shape-img"/>
            </div>
            <div className="offer-shape float-bob-y">
                <img src={percentoff2} alt="shape-img"/>
            </div>
            <div className="text-shape">
                <img src={pizzatext2} alt="shape-img"/>
            </div>
            <div className="spicy-shape">
                <img src={spicy} alt="shape-img"/>
            </div>
            <div className="tomato-shape">
                <img src={tomatoshape2} alt="shape-img"/>
            </div>
            <div className="container">
                <div className="grilled-wrapper">
                    <div className="row align-items-center">
                        <div className="col-xl-6 col-lg-6">
                            <div className="grilled-content">
                                <h4 className="wow fadeInUp">
                                    save 20%
                                </h4>
                                <h2 className="wow fadeInUp" data-wow-delay=".3s">
                                    tODAY'S <span>ASTACKIN</span> DAY
                                </h2>
                                <h3 className="wow fadeInUp" data-wow-delay=".5s">
                                    <a href="">
                                    grilled <span className="text-1">chiken</span>
                                    </a>
                                    <span className="text-2">₹59,00</span>
                                </h3>
                                <div className="grilled-button wow fadeInUp" data-wow-delay=".7s">
                                    <a href="" className="theme-btn">
                                    <span className="button-content-wrapper d-flex align-items-center">
                                    <span className="button-icon"><i className="flaticon-delivery"></i></span>
                                    <span className="button-text">order now</span>
                                    </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 mt-5 mt-lg-0 wow fadeInUp" data-wow-delay=".4s">
                            <div className="grilled-image">
                                <img src={grilled} alt="grilled-img"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

         {/* Food Catagory Section Start  */}
        <section className="food-category-section fix section-padding section-bg">
            <div className="container">
                <div className="section-title text-center">
                    <span className="wow fadeInUp">crispy, every bite taste</span>
                    <h2 className="wow fadeInUp" data-wow-delay=".3s">Popular Food Items</h2>
                </div>
                <div className="row">
                    <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                        <div className="catagory-product-card-2 text-center">
                            <div className="icon">
                                <a href=""><i className="far fa-heart"></i></a>
                            </div>
                            <div className="catagory-product-image">
                                <img src={beefruti} alt="product-img"/>
                            </div>
                            <div className="catagory-product-content">
                                <div className="catagory-button">
                                    <a href="" className="theme-btn-2"><i className="far fa-shopping-basket"></i>Add To Cart</a>
                                </div>
                                <div className="info-price d-flex align-items-center justify-content-center">
                                    <p>-5%</p>
                                    <h6>₹30.52</h6>
                                    <span>₹28.52</span>
                                </div>
                                <h4>
                                    <a href="">ruti with beef slice</a>
                                </h4>
                                <div className="star">
                                    <span className="fas fa-star"></span>
                                    <span className="fas fa-star"></span>
                                    <span className="fas fa-star"></span>
                                    <span className="fas fa-star"></span>
                                    <span className="fas fa-star text-white"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".5s">
                        <div className="catagory-product-card-2 active text-center">
                            <div className="icon">
                                <a href=""><i className="far fa-heart"></i></a>
                            </div>
                            <div className="catagory-product-image">
                                <img src={burger2} alt="product-img"/>
                            </div>
                            <div className="catagory-product-content">
                                <div className="catagory-button">
                                    <a href="" className="theme-btn-2"><i className="far fa-shopping-basket"></i>Add To Cart</a>
                                </div>
                                <div className="info-price d-flex align-items-center justify-content-center">
                                    <p>-5%</p>
                                    <h6>₹30.52</h6>
                                    <span>₹28.52</span>
                                </div>
                                <h4>
                                    <a href="">Whopper Burger King</a>
                                </h4>
                                <div className="star">
                                    <span className="fas fa-star"></span>
                                    <span className="fas fa-star"></span>
                                    <span className="fas fa-star"></span>
                                    <span className="fas fa-star"></span>
                                    <span className="fas fa-star text-white"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".7s">
                        <div className="catagory-product-card-2 text-center">
                            <div className="icon">
                                <a href=""><i className="far fa-heart"></i></a>
                            </div>
                            <div className="catagory-product-image">
                                <img src={pasta2} alt="product-img"/>
                            </div>
                            <div className="catagory-product-content">
                                <div className="catagory-button">
                                    <a href="" className="theme-btn-2"><i className="far fa-shopping-basket"></i>Add To Cart</a>
                                </div>
                                <div className="info-price d-flex align-items-center justify-content-center">
                                    <p>-5%</p>
                                    <h6>₹30.52</h6>
                                    <span>₹28.52</span>
                                </div>
                                <h4>
                                    <a href="">Chiness pasta</a>
                                </h4>
                                <div className="star">
                                    <span className="fas fa-star"></span>
                                    <span className="fas fa-star"></span>
                                    <span className="fas fa-star"></span>
                                    <span className="fas fa-star"></span>
                                    <span className="fas fa-star text-white"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".8s">
                        <div className="catagory-product-card-2 text-center">
                            <div className="icon">
                                <a href=""><i className="far fa-heart"></i></a>
                            </div>
                            <div className="catagory-product-image">
                                <img src={pizza3} alt="product-img"/>
                            </div>
                            <div className="catagory-product-content">
                                <div className="catagory-button">
                                    <a href="" className="theme-btn-2"><i className="far fa-shopping-basket"></i>Add To Cart</a>
                                </div>
                                <div className="info-price d-flex align-items-center justify-content-center">
                                    <p>-5%</p>
                                    <h6>₹30.52</h6>
                                    <span>₹28.52</span>
                                </div>
                                <h4>
                                    <a href="">delicious burger</a>
                                </h4>
                                <div className="star">
                                    <span className="fas fa-star"></span>
                                    <span className="fas fa-star"></span>
                                    <span className="fas fa-star"></span>
                                    <span className="fas fa-star"></span>
                                    <span className="fas fa-star text-white"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                        <div className="catagory-product-card-2 text-center">
                            <div className="icon">
                                <a href=""><i className="far fa-heart"></i></a>
                            </div>
                            <div className="catagory-product-image">
                                <img src={mainfood2} alt="product-img"/>
                            </div>
                            <div className="catagory-product-content">
                                <div className="catagory-button">
                                    <a href="" className="theme-btn-2"><i className="far fa-shopping-basket"></i>Add To Cart</a>
                                </div>
                                <div className="info-price d-flex align-items-center justify-content-center">
                                    <p>-5%</p>
                                    <h6>₹30.52</h6>
                                    <span>₹28.52</span>
                                </div>
                                <h4>
                                    <a href="">fast food combo</a>
                                </h4>
                                <div className="star">
                                    <span className="fas fa-star"></span>
                                    <span className="fas fa-star"></span>
                                    <span className="fas fa-star"></span>
                                    <span className="fas fa-star"></span>
                                    <span className="fas fa-star text-white"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".5s">
                        <div className="catagory-product-card-2 text-center">
                            <div className="icon">
                                <a href=""><i className="far fa-heart"></i></a>
                            </div>
                            <div className="catagory-product-image">
                                <img src={ruti} alt="product-img"/>
                            </div>
                            <div className="catagory-product-content">
                                <div className="catagory-button">
                                    <a href="" className="theme-btn-2"><i className="far fa-shopping-basket"></i>Add To Cart</a>
                                </div>
                                <div className="info-price d-flex align-items-center justify-content-center">
                                    <p>-5%</p>
                                    <h6>₹30.52</h6>
                                    <span>$28.52</span>
                                </div>
                                <h4>
                                    <a href="">ruti with chiken</a>
                                </h4>
                                <div className="star">
                                    <span className="fas fa-star"></span>
                                    <span className="fas fa-star"></span>
                                    <span className="fas fa-star"></span>
                                    <span className="fas fa-star"></span>
                                    <span className="fas fa-star text-white"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".7s">
                        <div className="catagory-product-card-2 text-center">
                            <div className="icon">
                                <a href=""><i className="far fa-heart"></i></a>
                            </div>
                            <div className="catagory-product-image">
                                <img src={grilled2} alt="product-img"/>
                            </div>
                            <div className="catagory-product-content">
                                <div className="catagory-button">
                                    <a href="" className="theme-btn-2"><i className="far fa-shopping-basket"></i>Add To Cart</a>
                                </div>
                                <div className="info-price d-flex align-items-center justify-content-center">
                                    <p>-5%</p>
                                    <h6>$30.52</h6>
                                    <span>$28.52</span>
                                </div>
                                <h4>
                                    <a href="">grilled chiken</a>
                                </h4>
                                <div className="star">
                                    <span className="fas fa-star"></span>
                                    <span className="fas fa-star"></span>
                                    <span className="fas fa-star"></span>
                                    <span className="fas fa-star"></span>
                                    <span className="fas fa-star text-white"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".8s">
                        <div className="catagory-product-card-2 text-center">
                            <div className="icon">
                                <a href=""><i className="far fa-heart"></i></a>
                            </div>
                            <div className="catagory-product-image">
                                <img src={deliciousburger} alt="product-img"/>
                            </div>
                            <div className="catagory-product-content">
                                <div className="catagory-button">
                                    <a href="" className="theme-btn-2"><i className="far fa-shopping-basket"></i>Add To Cart</a>
                                </div>
                                <div className="info-price d-flex align-items-center justify-content-center">
                                    <p>-5%</p>
                                    <h6>$30.52</h6>
                                    <span>$28.52</span>
                                </div>
                                <h4>
                                    <a href="">delicious burger</a>
                                </h4>
                                <div className="star">
                                    <span className="fas fa-star"></span>
                                    <span className="fas fa-star"></span>
                                    <span className="fas fa-star"></span>
                                    <span className="fas fa-star"></span>
                                    <span className="fas fa-star text-white"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="catagory-button text-center pt-4 wow fadeInUp" data-wow-delay=".3s">
                    <a href="" className="theme-btn">
                    <span className="button-content-wrapper d-flex align-items-center">
                    <span className="button-icon"><i className="flaticon-delivery"></i></span>
                    <span className="button-text">view more</span>
                    </span>
                    </a>
                </div>
            </div>
        </section>

         {/* Food Comboo Section Start  */}
        <section className="food-comboo-section fix bg-cover section-padding"
        style=  {{ backgroundImage: `url(${bg})` }}
        >
            <div className="drinks-shape">
                <img src={drinks} alt="shape-img"/>
            </div>
            <div className="container">
                <div className="comboo-wrapper">
                    <div className="row align-items-center">
                        <div className="col-xl-6">
                            <div className="food-comboo-content">
                                <div className="section-title">
                                    <span className="wow fadeInUp">crispy, every bite taste</span>
                                    <h2 className="wow fadeInUp" data-wow-delay=".3s">
                                        trending Food combo
                                        offer less <span>20%</span>
                                    </h2>
                                </div>
                                <p className="wow fadeInUp" data-wow-delay=".5s">
                                    A team of dreamers and doers building unique interactive music and art festivals.
                                </p>
                                <div className="nav nav-tabs" id="nav-tab" role="tablist">
                                    <button className="nav-link wow fadeInUp" data-wow-delay=".3s" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">
                                    <span className="food-comboo-list">
                                    <span className="offer-image">
                                    <img src={chicken} alt="img"/>
                                    </span>
                                    <span className="comboo-title">
                                    30% off 4pcs hot crispy & 8 pcs wing
                                    </span>
                                    </span>
                                    </button>
                                    <button className="nav-link active wow fadeInUp" data-wow-delay=".5s" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">
                                    <span className="food-comboo-list">
                                    <span className="offer-image">
                                    <img src={offerpizza} alt="img"/>
                                    </span>
                                    <span className="comboo-title">
                                    20% off tasty pizza with drink
                                    </span>
                                    </span>
                                    </button>
                                    <button className="nav-link wow fadeInUp" data-wow-delay=".7s" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">
                                    <span className="food-comboo-list">
                                    <span className="offer-image">
                                    <img src={offerburger} alt="img"/>
                                    </span>
                                    <span className="comboo-title">
                                    2pcs humbergur with drinks & sauce
                                    </span>
                                    </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6">
                            <div className="tab-content" id="nav-tab-Content">
                                <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                                    <div className="comboo-image bg-cover" 
                                
                                    style=  {{ backgroundImage: `url(${comboobg})` }}
                                    >
                                        <div className="pizza-text">
                                            <img src={pizzatext} alt="shape-img"/>
                                        </div>
                                        <div className="pizza-image">
                                            <img src={bigpizza} alt="food-img"/>
                                        </div>
                                        <div className="offer-shape">
                                            <img src={percentoff2} alt="shape-img"/>
                                        </div>
                                        <div className="vegetable-shape">
                                            <img src={vegetable} alt="shape-img"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                                    <div className="comboo-image bg-cover" 
                                    style=  {{ backgroundImage: `url(${comboobg})` }}
                                    
                                    >
                                        <div className="pizza-text">
                                            <img src={combopizzatext} alt="shape-img"/>
                                        </div>
                                        <div className="pizza-image">
                                            <img src={bigpizza} alt="food-img"/>
                                        </div>
                                        <div className="offer-shape">
                                            <img src={percentoff2} alt="shape-img"/>
                                        </div>
                                        <div className="vegetable-shape">
                                            <img src={vegetable} alt="shape-img"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
                                    <div className="comboo-image bg-cover" 
                                     style=  {{ backgroundImage: `url(${comboobg})` }}
                                    >
                                        <div className="pizza-text">
                                            <img src={combopizzatext} alt="shape-img"/>
                                        </div>
                                        <div className="pizza-image">
                                            <img src={bigpizza} alt="food-img"/>
                                        </div>
                                        <div className="offer-shape">
                                            <img src={percentoff2} alt="shape-img"/>
                                        </div>
                                        <div className="vegetable-shape">
                                            <img src={vegetable} alt="shape-img"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Marque Section Start  */}
        <div className="marque-section fix section-padding pt-0 section-bg">
            <div className="marquee-wrapper text-slider">
                <div className="marquee-inner to-left">
                    <ul className="marqee-list d-flex">
                        <li className="marquee-item">
                            <span className="text-slider text-color">populer</span>
                            <span className="text-slider"></span>
                            <span className="text-slider text-color">dishes</span>
                            <span className="text-slider">
                              <img src={iconburger} alt="icon-img"/>
                            </span> 
                            <span className="text-slider"></span>
                            <span className="text-slider text-color-2">delicious</span>
                            <span className="text-slider text-color-2">food</span> 
                            <img src={iconpizza} alt="icon-img"/> 
                            <span className="text-slider"></span> 
                            <span className="text-slider text-color">populer</span>
                            <span className="text-slider text-color">dishes</span> 
                            <span className="text-slider"></span>
                            <span className="text-slider">
                              <img src={iconburger} alt="icon-img"/></span> 
                            <span className="text-slider"></span> 
                            <span className="text-slider text-color-2">delicious</span>
                            <span className="text-slider text-color">populer</span>
                            <span className="text-slider"></span> 
                            <span className="text-slider text-color">dishes</span>
                            <span className="text-slider">
                              <img src={iconburger} alt="icon-img"/></span>
                            <span className="text-slider"></span> 
                            <span className="text-slider text-color-2">delicious</span>
                            <span className="text-slider text-color-2">food</span>
                             <img src={iconpizza} alt="icon-img"/> 
                            <span className="text-slider"></span> 
                            <span className="text-slider text-color">populer</span>
                            <span className="text-slider text-color">dishes</span>
                            <span className="text-slider"></span><span className="text-slider">
                              <img src={iconburger} alt="icon-img"/></span> 
                            <span className="text-slider"></span>
                            <span className="text-slider text-color-2">delicious</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

       {/* Choose Us Section Start  */}
        <section className="choose-us fix section-padding pt-0 section-bg">
            <div className="container">
                <div className="food-icon-wrapper bg-cover"
             style= {{ backgroundImage: `url(${foodshape2})` }}
                >
                    <div className="row g-4">
                        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                            <div className="single-food-icon">
                                <div className="icon">
                                    <i className="flaticon-quality"></i>
                                </div>
                                <div className="content">
                                    <h4>super quality food</h4>
                                    <p>
                                        A team of dreamers and doers building
                                        unique interactive music and art
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay=".5s">
                            <div className="single-food-icon">
                                <div className="icon">
                                    <i className="flaticon-cooking"></i>
                                </div>
                                <div className="content">
                                    <h4>original recipes</h4>
                                    <p>
                                        A team of dreamers and doers building
                                        unique interactive music and art
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay=".7s">
                            <div className="single-food-icon">
                                <div className="icon">
                                    <i className="flaticon-fast-delivery"></i>
                                </div>
                                <div className="content">
                                    <h4>quick fast delivery</h4>
                                    <p>
                                        A team of dreamers and doers building
                                        unique interactive music and art
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay=".9s">
                            <div className="single-food-icon">
                                <div className="icon">
                                    <i className="flaticon-quality"></i>
                                </div>
                                <div className="content">
                                    <h4>100% fresh foods</h4>
                                    <p>
                                        A team of dreamers and doers building
                                        unique interactive music and art
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

         {/* About Section Start  */}
        <section className="about-section fix section-padding pt-0 section-bg">
            <div className="container">
                <div className="about-wrapper">
                    <div className="row align-items-center">
                        <div className="col-xl-6 col-lg-6 wow fadeInUp" data-wow-delay=".3s">
                            <div className="about-image">
                                <img src={aboutburger} alt="about-img"/>
                                <div className="burger-text">
                                    <img src={burgertext} alt="shape-img"/>
                                </div>
                                <div className="price">
                                    <h2>₹<span className="count">4,99</span></h2>
                                </div>
                                <div className="since-text bg-cover" 
                                
                                style= {{ backgroundImage: `url(${foodshape})` }}
                                
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
                                        Where Quality Meet
                                        Excellent <span>Service.</span>
                                    </h2>
                                </div>
                                <p className="wow fadeInUp" data-wow-delay=".5s">
                                    It's the perfect dining experience where every dish is crafted with fresh, high-quality
                                    Experience quick and efficient service that ensures your food is servead fresh It's the
                                    dining experience where every dish is crafted with fresh, high-quality ingredients
                                </p>
                                <div className="icon-area">
                                    <div className="icon-items d-flex wow fadeInUp" data-wow-delay=".3s">
                                        <div className="icon">
                                            <i className="flaticon-quality"></i>
                                        </div>
                                        <div className="content">
                                            <h4>super quality food</h4>
                                            <p>
                                                A team of dreamers and doers build
                                                unique interactive music and art
                                            </p>
                                        </div>
                                    </div>
                                    <div className="icon-items d-flex wow fadeInUp" data-wow-delay=".5s">
                                        <div className="icon">
                                            <i className="flaticon-reputation"></i>
                                        </div>
                                        <div className="content">
                                            <h4>well reputation</h4>
                                            <p>
                                                A team of dreamers and doers build
                                                unique interactive music and art
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="info-area d-flex align-items-center">
                                    <a href="" className="theme-btn wow style-line-height fadeInUp" data-wow-delay=".3s">more about us</a>
                                    <div className="info-content wow fadeInUp" data-wow-delay=".5s">
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

         {/* Food Banner Section Start -- */}
        <section className="food-banner-section fix section-padding section-bg pt-0">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-7 col-lg-9 wow fadeInUp" data-wow-delay=".3s">
                        <div className="burger-banner-items bg-cover" 
                        style= {{ backgroundImage: `url(${burgerbg})` }}
                        >
                            <div className="burger-content text-center">
                                <h3>today</h3>
                                <h2>special</h2>
                                <h4><a href="" className="text-white">beef <span>burger</span></a></h4>
                                <a href="" className="theme-btn mt-4">
                                <span className="button-content-wrapper d-flex align-items-center">
                                <span className="button-icon"><i className="flaticon-delivery"></i></span>
                                <span className="button-text">order now</span>
                                </span>
                                </a>
                            </div>
                            <div className="burger-image">
                                <img src={bigburger} alt="food-img"/>
                            </div>
                            <div className="text-shape">
                                <img src={pizzatext2} alt="shape-img"/>
                            </div>
                            <div className="burger-text">
                                <img src={burgertext} alt="shape-img"/>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-5 col-lg-9 mt-5 mt-xl-0 wow fadeInUp" data-wow-delay=".5s">
                        <div className="single-offer-items style-2 bg-cover"
                        style= {{ backgroundImage: `url(${pepsibg})` }}
                        >
                            <div className="offer-content">
                                <h5>crispy, every bite taste</h5>
                                <h3>
                                    FASH FOOD <br/>
                                    MEAL
                                </h3>
                                <p>
                                    The mouth-watering aroma of <br/>
                                    sizzling burgers
                                </p>
                                <a href="" className="theme-btn mt-4">
                                <span className="button-content-wrapper d-flex align-items-center">
                                <span className="button-icon"><i className="flaticon-delivery"></i></span>
                                <span className="button-text">order now</span>
                                </span>
                                </a>
                            </div>
                            <div className="offer-img">
                                <img src={percentoff3} alt="shape-img"/>
                            </div>
                            <div className="roller-box">
                                <img src={rollerbox} alt="food-img"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

         {/* KFC Banner Section Start  */}
        <section className="kfc-banner fix bg-cover section-padding"
        style= {{ backgroundImage: `url(${bg})` }}
        >
            <div className="kfc-wrapper">
                <div className="container-fluid">
                    <div className="row justify-content-between">
                        <div className="col-lg-5">
                            <div className="kfc-image-items bg-cover" 
                            style= {{ backgroundImage: `url(${kfcbg})` }}
                            >
                                <div className="kfc-image">
                                    <img src={kfc} alt="food-img"/>
                                </div>
                                <div className="offer-shape">
                                    <img src={percentoff2} alt="shape-img"/>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="kfc-content text-center">
                                <div className="section-title">
                                    <span className="wow fadeInUp">crispy, every bite taste</span>
                                    <h2 className="wow fadeInUp" data-wow-delay=".3s">
                                        kfc chiken hot <br/>
                                        wing & french fries
                                    </h2>
                                </div>
                                <p className="mt-3 mt-lg-0 wow fadeInUp" data-wow-delay=".5s">
                                    Wheat tortilla with spicy chicken bites, cheese sauce <br/>
                                    tomatoes and soft cheese
                                </p>
                                <ul className="countdown-items wow fadeInUp" data-wow-delay=".7s">
                                    <li>
                                        <span id="day">30</span>
                                        <p>Days</p>
                                    </li>
                                    <li>
                                        <span id="Hours">22</span>
                                        <p className="cont">hours</p>
                                    </li>
                                    <li>
                                        <span id="Minutes">48</span>
                                        <p>Min</p>
                                    </li>
                                    <li>
                                        <span id="Seconds">22</span> 
                                        <p>Sec</p>
                                    </li>
                                </ul>
                                <a href="" className="theme-btn mt-5 wow fadeInUp" data-wow-delay=".8s">
                                <span className="button-content-wrapper d-flex align-items-center">
                                <span className="button-icon"><i className="flaticon-delivery"></i></span>
                                <span className="button-text">order now</span>
                                </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Testimonial Section Start   */}
          <section className="testimonial-section fix section-padding section-bg">
            <div className="burger-shape">
                <img src={burgershape3} alt="burger-shape"/>
            </div>
            <div className="fry-shape">
                <img src={fryshape2} alt="burger-shape"/>
            </div>
            <div className="pizza-shape">
                <img src={pizzashape} alt="burger-shape"/>
            </div>
            <div className="container">
                <div className="testimonial-wrapper style-responsive">
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
                                            “Thank you for dinner last night. It was amazing!! I have
                                            say it’s the best meal I have had in quite some time.
                                            will definitely be seeing more eating next year.”
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
                                            “Thank you for dinner last night. It was amazing!! I have
                                            say it’s the best meal I have had in quite some time.
                                            will definitely be seeing more eating next year.”
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
                                            “Thank you for dinner last night. It was amazing!! I have
                                            say it’s the best meal I have had in quite some time.
                                            will definitely be seeing more eating next year.”
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
                                        <div className="client-img bg-cover" 
                                        style= {{ backgroundImage: `url(${client1})` }}
                                        ></div>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="client-image-item">
                                        <div className="client-img bg-cover" 
                
                                        style= {{ backgroundImage: `url(${client2})` }}
                                        
                            ></div>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="client-image-item">
                                        <div className="client-img bg-cover" 
                                         style= {{ backgroundImage: `url(${client3})` }}
                                        ></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

         {/* Main Cta Banner Section Start  */}
        <section className="main-cta-banner section-padding pt-0">
            <div className="container">
                <div className="main-cta-banner-wrapper bg-cover mt-10" 
                style={{ backgroundImage: `url(${mainctabg})` }}>
                    <div className="section-title">
                        <span className="theme-color-3 wow fadeInUp">crispy, every bite taste</span>
                        <h2 className="text-white wow fadeInUp" data-wow-delay=".3s">
                            30 minutes fast <br/>
                            <span className="theme-color-3">delivery</span> challage
                        </h2>
                    </div>
                    <a href="" className="theme-btn bg-white mt-4 mt-md-0 wow fadeInUp" data-wow-delay=".5s">
                    <span className="button-content-wrapper d-flex align-items-center">
                    <span className="button-icon"><i className="flaticon-delivery"></i></span>
                    <span className="button-text">order now</span>
                    </span>
                    </a>
                    <div className="arrow-shape">
                        <img src={arrowshape} alt="shape-img"/>
                    </div>
                    <div className="delivery-man">
                        <img src={deliveryman} alt="img"/>
                    </div>
                    <div className="frame-shape">
                        <img src={frame} alt="shape-img"/>
                    </div>
                </div>
            </div>
        </section>

         {/* Booking Section Start  */}
        <section className="booking-section fix section-padding bg-cover" style={{ backgroundImage: `url(${mainbg})` }} >
            <div className="container">
                <div className="booking-wrapper style-responsive section-padding pb-0">
                    <div className="row justify-content-between align-items-center">
                        <div className="col-lg-6">
                            <div className="booking-content">
                                <div className="section-title">
                                    <span className="wow fadeInUp">crispy, every bite taste</span>
                                    <h2 className="text-white wow fadeInUp" data-wow-delay=".3s">
                                        need booking? <br/>
                                        reserve your table?
                                    </h2>
                                </div>
                                <div className="icon-items d-flex align-items-center wow fadeInUp" data-wow-delay=".5s">
                                    <div className="icon">
                                        <i className="flaticon-phone-call-2"></i>
                                    </div>
                                    <div className="content">
                                        <h5>24/7 Support center</h5>
                                        <h3><a href="tel:+1718-904-4450">+91 9994383989</a></h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5 mt-5 mt-lg-0 wow fadeInUp" data-wow-delay=".4s">
                            <div className="booking-contact bg-cover" 
                            style={{ backgroundImage: `url(${bookingshape})` }}>
                                <h4 className="text-center text-white">create an reservation</h4>
                                <div className="booking-items">
                                    <div className="form-clt">
                                        <div className="nice-select" tabIndex="0">
                                            <span className="current">
                                            no of person
                                            </span>
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
                                        <input type="text" name="number" id="number" placeholder="phone number"/>
                                        <div className="icon">
                                            <i className="fas fa-phone"></i>
                                        </div>
                                    </div>
                                    <div className="form-clt">
                                        <input type="date" id="calendar" name="calendar"/>
                                    </div>
                                    <div className="form-clt">
                                        <a href="" className="theme-btn bg-yellow">
                                        booking now
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>



      <Footer/>
    </>
  )
}

export default Index
