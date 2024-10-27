import React from 'react';
import breadcrumb from '../assets/img/banner/main-cta-bg-2.jpg';
import mainctabg2 from '../assets/img/banner/breadcrumb.jpg';
import details1 from "../assets/img/shop-food/details-1.png";
import review01 from"assets/img/shop-food/review/01.jpg";
import review02 from"assets/img/shop-food/review/02.jpg";
import beefruti from "../assets/img/food/beef-ruti.png";
import burger2 from "../assets/img/food/burger-2.png";
import pasta2 from "../assets/img/food/pasta-2.png";
import pizza3 from "../assets/img/food/pizza-3.png";
import tomato from "../assets/img/tomato.png";
import chilli from "assets/img/chilli.png";
import deliveryman2 from "../assets/img/delivery-man-2.png";

const ProductDetails = () => {
  return (
    <>
       {/*  Breadcrumb Section Start  */}
        <div class="breadcrumb-wrapper bg-cover" style={{ backgroundImage: `url(${breadcrumb})` }}>
            <div class="container">
                <div class="page-heading center">
                    <h1>product single 2</h1>
                    <ul class="breadcrumb-items">
                        <li>
                            <a href="">
                            Home Page
                            </a>
                        </li>
                        <li>
                            <i class="far fa-chevron-right"></i>
                        </li>
                        <li>
                            product single 2
                        </li>
                    </ul>
                </div>
            </div>
        </div>

         {/* Product Details Section Start  */}
        <section class="product-details-section section-padding">
            <div class="container">
                <div class="product-details-wrapper style-2">
                    <div class="row g-4">
                        <div class="col-xl-4 col-lg-6">
                            <div class="product-image-items">
                                <div class="product-image">
                                    <img src={details1} alt="img" class="w-100">
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-5 col-lg-6">
                            <div class="product-details-content">
                                <div class="star pb-3">
                                    <span>-5%</span>
                                    <a href="#"> <i class="fas fa-star"></i></a>
                                    <a href="#"><i class="fas fa-star"></i></a>
                                    <a href="#"> <i class="fas fa-star"></i></a>
                                    <a href="#"><i class="fas fa-star"></i></a>
                                    <a href="#" class="color-bg"> <i class="fas fa-star"></i></a>
                                    <a href="#" class="text-color">( 2 Reviews )</a>
                                </div>
                                <h3 class="pb-3">Whopper Burger King</h3>
                                <div class="price-list d-flex align-items-center mb-4">
                                    <span>$4,600.00</span>
                                    <del>$4,600.00</del>
                                </div>
                                <p class="mb-4">
                                    There are many variations of passages of Lorem Ipsum available, but majority
                                    have suffered teration in some form, by injected humour, or randomised
                                </p>
                                <p>
                                    There are many variations of passages of Lorem Ipsum available, but majority
                                    have suffered teration in some form, by injected humour, or randomised
                                </p>
                                <div class="social-icon d-flex align-items-center">
                                    <a href="#"><i class="fab fa-facebook-f"></i></a>
                                    <a href="#"><i class="fab fa-twitter"></i></a>
                                    <a href="#"><i class="fab fa-vimeo-v"></i></a>
                                    <a href="#"><i class="fab fa-pinterest-p"></i></a>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-3 col-lg-4">
                            <div class="product-form-wrapper">
                                <div class="delivery-time">Delivery: <span>35 minutes</span></div>
                                <form action="#" id="contact-forms" method="POST">
                                    <div class="form-clt">
                                        <label class="select-crust">select-crust</label>
                                        <div class="nice-select" tabindex="0">
                                            <span class="current">
                                                Choose an option
                                            </span>
                                            <ul class="list">
                                                <li data-value="1" class="option selected">
                                                    Original Crust
                                                </li>
                                                <li data-value="1" class="option">
                                                    Thick Crust
                                                </li>
                                                <li data-value="1" class="option">
                                                    Double Crust
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="form-clt">
                                        <label class="select-crust">Select Size</label>
                                        <div class="nice-select" tabindex="0">
                                            <span class="current">
                                                Choose an option
                                            </span>
                                            <ul class="list">
                                                <li data-value="1" class="option selected">
                                                    Small - 22cm
                                                </li>
                                                <li data-value="1" class="option">
                                                    Medium - 29cm
                                                </li>
                                                <li data-value="1" class="option">
                                                    Large - 35cm
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="form-clt">
                                        <label class="select-crust">Quantity</label>
                                        <div class="quantity-basket">
                                            <p class="qty">
                                                <button class="qtyminus" aria-hidden="true">&minus;</button>
                                                <input type="number" name="qty" id="qty2" min="1" max="10" step="1" value="1"/>
                                                <button class="qtyplus" aria-hidden="true">&plus;</button>
                                            </p>
                                        </div>
                                    </div>
                                    <div class="form-clt">
                                        <button type="submit" class="theme-btn">
                                            <i class="far fa-shopping-bag"></i>
                                            <span class="button-text">Add To Cart</span>
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div class="single-tab">
                        <ul class="nav mb-4">
                            <li class="nav-item">
                                <a href="#description" data-bs-toggle="tab" class="nav-link active">
                                Description
                                </a>
                            </li>
                            <li class="nav-item">
                                <a href="#additional" data-bs-toggle="tab" class="nav-link">
                                Additional Information
                                </a>
                            </li>
                            <li class="nav-item">
                                <a href="#review" data-bs-toggle="tab" class="nav-link">
                                reviews (4)
                                </a>
                            </li>
                        </ul>
                        <div class="tab-content">
                            <div id="description" class="tab-pane fade show active">
                                <div class="description-items">
                                    <div class="row">
                                        <div class="col-lg-12">
                                            <div class="description-content">
                                                <h3>Experience is over the world visit</h3>
                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vulputate vestibulum Phasellus rhoncus, dolor eget viverra pretium, dolor Numquam odit accusantium odit aut commodi et. Nostrum est atque ut dolorum. Et sequi aut atque doloribus qui. Iure amet in voluptate reiciendis. Perspiciatis consequatur aperiam repellendus velit quia est minima. tellus aliquet nunc vitae ultricies erat elit eu lacus. Vestibulum non justo consectetur, cursus ante, tincidunt sapien. Nulla quis diam sit amet turpis interdum accumsan quis necenim. Vivamus faucibus ex sed nibh egestas elementum. Mauris et bibendum dui. Aenean consequat pulvinar luctus
                                                </p>
                                                <h3 class="mb-0 mt-5">More Details</h3>
                                                <div class="description-list-items d-flex">
                                                    <ul class="description-list">
                                                        <li>
                                                            <i class="fal fa-check"></i>
                                                            <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry</span>
                                                        </li>
                                                        <li>
                                                            <i class="fal fa-check"></i>
                                                            <span>Lorem Ipsum has been the ‘s standard dummy text. Lorem Ipsumum is simply dummy text.</span>
                                                        </li>
                                                        <li>
                                                            <i class="fal fa-check"></i>
                                                            <span>type here your detail one by one li more add</span>
                                                        </li>
                                                        <li>
                                                            <i class="fal fa-check"></i>
                                                            <span>has been the industry’s standard dummy text ever since. Lorem Ips</span>
                                                        </li>
                                                    </ul>
                                                    <ul class="description-list">
                                                        <li>
                                                            <i class="fal fa-check"></i>
                                                            <span>Lorem Ipsum generators on the tend to repeat.</span>
                                                        </li>
                                                        <li>
                                                            <i class="fal fa-check"></i>
                                                            <span> If you are going to use a passage.</span>
                                                        </li>
                                                        <li>
                                                            <i class="fal fa-check"></i>
                                                            <span> Lorem Ipsum generators on the tend to repeat.</span>
                                                        </li>
                                                        <li>
                                                            <i class="fal fa-check"></i>
                                                            <span> Lorem Ipsum generators on the tend to repeat.</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="additional" class="tab-pane fade">
                                <div class="table-responsive">
                                    <table class="table table-bordered">
                                        <tbody>
                                            <tr>
                                                <td>Weight</td>
                                                <td>240 Ton</td>
                                            </tr>
                                            <tr>
                                                <td>Dimensions</td>
                                                <td>20 × 30 × 40 cm</td>
                                            </tr>
                                            <tr>
                                                <td>Colors</td>
                                                <td>Black, Blue, Green</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div id="review" class="tab-pane fade">
                                <div class="review-items">
                                    <div class="admin-items d-flex flex-wrap flex-md-nowrap align-items-center pb-4">
                                        <div class="admin-img pb-4 pb-md-0 me-4">
                                            <img src={review01} alt="image"/>
                                        </div>
                                        <div class="content p-4">
                                            <div class="head-content pb-1 d-flex flex-wrap justify-content-between">
                                                <h5>miklos salsa<span>27June 2024 at 5.44pm</span></h5>
                                                <div class="star">
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star"></i>
                                                </div>
                                            </div>
                                            <p>
                                                Lorem ipsum dolor sit amet consectetur adipiscing elit. Curabitur vulputate vestibulum Phasellus rhoncus dolor eget viverra pretium.Curabitur vulputate vestibulum Phasellus rhoncus dolor eget viverra pretium.
                                            </p>
                                        </div>
                                    </div>
                                    <div class="admin-items d-flex flex-wrap flex-md-nowrap align-items-center pb-4">
                                        <div class="admin-img pb-4 pb-md-0 me-4">
                                            <img src={review02} alt="image"/>
                                        </div>
                                        <div class="content p-4">
                                            <div class="head-content pb-1 d-flex flex-wrap justify-content-between">
                                                <h5>Ethan Turner <span>27June 2024 at 5.44pm</span></h5>
                                                <div class="star">
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star"></i>
                                                </div>
                                            </div>
                                            <p>
                                                Lorem ipsum dolor sit amet consectetur adipiscing elit. Curabitur vulputate vestibulum Phasellus rhoncus dolor eget viverra pretium.Curabitur vulputate vestibulum Phasellus rhoncus dolor eget viverra pretium.
                                            </p>
                                        </div>
                                    </div>
                                    <div class="admin-items d-flex flex-wrap flex-md-nowrap align-items-center pb-4">
                                        <div class="admin-img pb-4 pb-md-0 me-4">
                                            <img src={review01} alt="image"/>
                                        </div>
                                        <div class="content p-4">
                                            <div class="head-content pb-1 d-flex flex-wrap justify-content-between">
                                                <h5>miklos salsa<span>27June 2024 at 5.44pm</span></h5>
                                                <div class="star">
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star"></i>
                                                </div>
                                            </div>
                                            <p>
                                                Lorem ipsum dolor sit amet consectetur adipiscing elit. Curabitur vulputate vestibulum Phasellus rhoncus dolor eget viverra pretium.Curabitur vulputate vestibulum Phasellus rhoncus dolor eget viverra pretium.
                                            </p>
                                        </div>
                                    </div>
                                    <div class="admin-items d-flex flex-wrap flex-md-nowrap align-items-center pb-4">
                                        <div class="admin-img pb-4 pb-md-0 me-4">
                                            <img src={review02} alt="image" />
                                        </div>
                                        <div class="content p-4">
                                            <div class="head-content pb-1 d-flex flex-wrap justify-content-between">
                                                <h5>Ethan Turner <span>27June 2024 at 5.44pm</span></h5>
                                                <div class="star">
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star"></i>
                                                </div>
                                            </div>
                                            <p>
                                                Lorem ipsum dolor sit amet consectetur adipiscing elit. Curabitur vulputate vestibulum Phasellus rhoncus dolor eget viverra pretium.Curabitur vulputate vestibulum Phasellus rhoncus dolor eget viverra pretium.
                                            </p>
                                        </div>
                                    </div>
                                    <div class="review-title mt-5 py-15 mb-30">
                                        <h4>add a review</h4>
                                        <div class="rate-now d-flex align-items-center">
                                            <p>Rate this product? *</p>
                                            <div class="star">
                                                <i class="fas fa-star"></i>
                                                <i class="fas fa-star"></i>
                                                <i class="fas fa-star"></i>
                                                <i class="fas fa-star"></i>
                                                <i class="fas fa-star"></i>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="review-form">
                                        <form action="#" id="contact-form" method="POST">
                                            <div class="row g-4">
                                                <div class="col-lg-6">
                                                    <div class="form-clt">
                                                        <input type="text" name="name" id="name" placeholder="Full Name"/>
                                                    </div>
                                                </div>
                                                <div class="col-lg-6">
                                                    <div class="form-clt">
                                                        <input type="text" name="email" id="email" placeholder="email addres"/>
                                                    </div>
                                                </div>
                                                <div class="col-lg-12 wow fadeInUp" data-wow-delay=".8">
                                                    <div class="form-clt-big form-clt">
                                                        <textarea name="message" id="message" placeholder="message"></textarea> 
                                                    </div>
                                                </div>
                                                <div class="col-lg-6 wow fadeInUp" data-wow-delay=".9">
                                                    <button type="submit" class="theme-btn">
                                                    post Submit
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
            </div>
        </section>
        
        {/* Food Catagory Section Start  */}
        <section class="food-category-section fix section-padding section-bg">
            <div class="container">
                <div class="section-title text-center">
                    <span class="wow fadeInUp">crispy, every bite taste</span>
                    <h2 class="wow fadeInUp" data-wow-delay=".3s">RELATED PRODUCTS</h2>
                </div>
                <div class="row">
                    <div class="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                        <div class="catagory-product-card-2 text-center">
                            <div class="icon">
                                <a href=""><i class="far fa-heart"></i></a>
                            </div>
                            <div class="catagory-product-image">
                                <img src={beefruti} alt="product-img"/>
                            </div>
                            <div class="catagory-product-content">
                                <div class="catagory-button">
                                    <a href="" class="theme-btn-2"><i class="far fa-shopping-basket"></i>Add To Cart</a>
                                </div>
                                <div class="info-price d-flex align-items-center justify-content-center">
                                    <p>-5%</p>
                                    <h6>$30.52</h6>
                                    <span>$28.52</span>
                                </div>
                                <h4>
                                    <a href="">ruti with beef slice</a>
                                </h4>
                                <div class="star">
                                    <span class="fas fa-star"></span>
                                    <span class="fas fa-star"></span>
                                    <span class="fas fa-star"></span>
                                    <span class="fas fa-star"></span>
                                    <span class="fas fa-star text-white"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".5s">
                        <div class="catagory-product-card-2 active text-center">
                            <div class="icon">
                                <a href=""><i class="far fa-heart"></i></a>
                            </div>
                            <div class="catagory-product-image">
                                <img src={burger2} alt="product-img"/>
                            </div>
                            <div class="catagory-product-content">
                                <div class="catagory-button">
                                    <a href="" class="theme-btn-2"><i class="far fa-shopping-basket"></i>Add To Cart</a>
                                </div>
                                <div class="info-price d-flex align-items-center justify-content-center">
                                    <p>-5%</p>
                                    <h6>$30.52</h6>
                                    <span>$28.52</span>
                                </div>
                                <h4>
                                    <a href="">Whopper Burger King</a>
                                </h4>
                                <div class="star">
                                    <span class="fas fa-star"></span>
                                    <span class="fas fa-star"></span>
                                    <span class="fas fa-star"></span>
                                    <span class="fas fa-star"></span>
                                    <span class="fas fa-star text-white"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".7s">
                        <div class="catagory-product-card-2 text-center">
                            <div class="icon">
                                <a href=""><i class="far fa-heart"></i></a>
                            </div>
                            <div class="catagory-product-image">
                                <img src={pasta2} alt="product-img"/>
                            </div>
                            <div class="catagory-product-content">
                                <div class="catagory-button">
                                    <a href="" class="theme-btn-2"><i class="far fa-shopping-basket"></i>Add To Cart</a>
                                </div>
                                <div class="info-price d-flex align-items-center justify-content-center">
                                    <p>-5%</p>
                                    <h6>$30.52</h6>
                                    <span>$28.52</span>
                                </div>
                                <h4>
                                    <a href="">Chiness pasta</a>
                                </h4>
                                <div class="star">
                                    <span class="fas fa-star"></span>
                                    <span class="fas fa-star"></span>
                                    <span class="fas fa-star"></span>
                                    <span class="fas fa-star"></span>
                                    <span class="fas fa-star text-white"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".9s">
                        <div class="catagory-product-card-2 text-center">
                            <div class="icon">
                                <a href=""><i class="far fa-heart"></i></a>
                            </div>
                            <div class="catagory-product-image">
                                <img src={pizza3} alt="product-img"/>
                            </div>
                            <div class="catagory-product-content">
                                <div class="catagory-button">
                                    <a href="" class="theme-btn-2"><i class="far fa-shopping-basket"></i>Add To Cart</a>
                                </div>
                                <div class="info-price d-flex align-items-center justify-content-center">
                                    <p>-5%</p>
                                    <h6>$30.52</h6>
                                    <span>$28.52</span>
                                </div>
                                <h4>
                                    <a href="">delicious burger</a>
                                </h4>
                                <div class="star">
                                    <span class="fas fa-star"></span>
                                    <span class="fas fa-star"></span>
                                    <span class="fas fa-star"></span>
                                    <span class="fas fa-star"></span>
                                    <span class="fas fa-star text-white"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

         {/* Main Cta Banner Section Start  */}
        <section class="main-cta-banner-2 section-padding bg-cover" style={{ backgroundImage: `url(${mainctabg2})` }}>
            <div class="tomato-shape-left float-bob-y">
                <img src={tomato} alt="shape-img"/>
            </div>
            <div class="chili-shape-right float-bob-y">
                <img src={chilli} alt="shape-img"/>
            </div>
            <div class="container">
                <div class="main-cta-banner-wrapper-2 d-flex align-items-center justify-content-between">
                    <div class="section-title mb-0">
                        <span class="theme-color-3 wow fadeInUp">crispy, every bite taste</span>
                        <h2 class="text-white wow fadeInUp" data-wow-delay=".3s">
                            30 minutes fast <br>
                            <span class="theme-color-3">delivery</span> challage
                        </h2>
                    </div>
                    <a href="" class="theme-btn bg-white wow fadeInUp" data-wow-delay=".5s">
                    <span class="button-content-wrapper d-flex align-items-center">
                    <span class="button-icon"><i class="flaticon-delivery"></i></span>
                    <span class="button-text">order now</span>
                    </span>
                    </a>
                    <div class="delivery-man">
                        <img src={deliveryman2} alt="img"/>
                    </div>
                </div>
            </div>
        </section>

    </>
  )
}

export default ProductDetails
