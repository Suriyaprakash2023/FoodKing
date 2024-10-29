import React from 'react';
import breadcrumb from '../assets/img/banner/main-cta-bg-2.jpg';
import mainctabg2 from '../assets/img/banner/breadcrumb.jpg';
import details1 from "../assets/img/shop-food/details-1.png";
import review01 from"../assets/img/shop-food/review/01.jpg";
import review02 from"../assets/img/shop-food/review/02.jpg";
import beefruti from "../assets/img/food/beef-ruti.png";
import burger2 from "../assets/img/food/burger-2.png";
import pasta2 from "../assets/img/food/pasta-2.png";
import pizza3 from "../assets/img/food/pizza-3.png";
import tomato from "../assets/img/tomato.png";
import chilli from "../assets/img/chilli.png";
import deliveryman2 from "../assets/img/delivery-man-2.png";

const ProductDetails = () => {
  return (
    <>
       {/*  Breadcrumb Section Start  */}
        <div className="breadcrumb-wrapper bg-cover" style={{ backgroundImage: `url(${breadcrumb})` }}>
            <div className="container">
                <div className="page-heading center">
                    <h1>product single 2</h1>
                    <ul className="breadcrumb-items">
                        <li>
                            <a href="">
                            Home Page
                            </a>
                        </li>
                        <li>
                            <i className="far fa-chevron-right"></i>
                        </li>
                        <li>
                            product single 2
                        </li>
                    </ul>
                </div>
            </div>
        </div>

         {/* Product Details Section Start  */}
        <section className="product-details-section section-padding">
            <div className="container">
                <div className="product-details-wrapper style-2">
                    <div className="row g-4">
                        <div className="col-xl-4 col-lg-6">
                            <div className="product-image-items">
                                <div className="product-image">
                                    <img src={details1} alt="img" className="w-100"/>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-5 col-lg-6">
                            <div className="product-details-content">
                                <div className="star pb-3">
                                    <span>-5%</span>
                                    <a href="#"> <i className="fas fa-star"></i></a>
                                    <a href="#"><i className="fas fa-star"></i></a>
                                    <a href="#"> <i className="fas fa-star"></i></a>
                                    <a href="#"><i className="fas fa-star"></i></a>
                                    <a href="#" className="color-bg"> <i className="fas fa-star"></i></a>
                                    <a href="#" className="text-color">( 2 Reviews )</a>
                                </div>
                                <h3 className="pb-3">Whopper Burger King</h3>
                                <div className="price-list d-flex align-items-center mb-4">
                                    <span>$4,600.00</span>
                                    <del>$4,600.00</del>
                                </div>
                                <p className="mb-4">
                                    There are many variations of passages of Lorem Ipsum available, but majority
                                    have suffered teration in some form, by injected humour, or randomised
                                </p>
                                <p>
                                    There are many variations of passages of Lorem Ipsum available, but majority
                                    have suffered teration in some form, by injected humour, or randomised
                                </p>
                                <div className="social-icon d-flex align-items-center">
                                    <a href="#"><i className="fab fa-facebook-f"></i></a>
                                    <a href="#"><i className="fab fa-twitter"></i></a>
                                    <a href="#"><i className="fab fa-vimeo-v"></i></a>
                                    <a href="#"><i className="fab fa-pinterest-p"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4">
                            <div className="product-form-wrapper">
                                <div className="delivery-time">Delivery: <span>35 minutes</span></div>
                                <form action="#" id="contact-forms" method="POST">
                                    <div className="form-clt">
                                        <label className="select-crust">select-crust</label>
                                        <div className="nice-select" tabIndex="0">
                                            <span className="current">
                                                Choose an option
                                            </span>
                                            <ul className="list">
                                                <li data-value="1" className="option selected">
                                                    Original Crust
                                                </li>
                                                <li data-value="1" className="option">
                                                    Thick Crust
                                                </li>
                                                <li data-value="1" className="option">
                                                    Double Crust
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="form-clt">
                                        <label className="select-crust">Select Size</label>
                                        <div className="nice-select" tabindex="0">
                                            <span className="current">
                                                Choose an option
                                            </span>
                                            <ul className="list">
                                                <li data-value="1" className="option selected">
                                                    Small - 22cm
                                                </li>
                                                <li data-value="1" className="option">
                                                    Medium - 29cm
                                                </li>
                                                <li data-value="1" className="option">
                                                    Large - 35cm
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="form-clt">
                                        <label className="select-crust">Quantity</label>
                                        <div className="quantity-basket">
                                            <p className="qty">
                                                <button className="qtyminus" aria-hidden="true">&minus;</button>
                                                <input type="number" name="qty" id="qty2" min="1" max="10" step="1" value="1"/>
                                                <button className="qtyplus" aria-hidden="true">&plus;</button>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="form-clt">
                                        <button type="submit" className="theme-btn">
                                            <i className="far fa-shopping-bag"></i>
                                            <span className="button-text">Add To Cart</span>
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="single-tab">
                        <ul className="nav mb-4">
                            <li className="nav-item">
                                <a href="#description" data-bs-toggle="tab" className="nav-link active">
                                Description
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="#additional" data-bs-toggle="tab" className="nav-link">
                                Additional Information
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="#review" data-bs-toggle="tab" className="nav-link">
                                reviews (4)
                                </a>
                            </li>
                        </ul>
                        <div className="tab-content">
                            <div id="description" className="tab-pane fade show active">
                                <div className="description-items">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="description-content">
                                                <h3>Experience is over the world visit</h3>
                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vulputate vestibulum Phasellus rhoncus, dolor eget viverra pretium, dolor Numquam odit accusantium odit aut commodi et. Nostrum est atque ut dolorum. Et sequi aut atque doloribus qui. Iure amet in voluptate reiciendis. Perspiciatis consequatur aperiam repellendus velit quia est minima. tellus aliquet nunc vitae ultricies erat elit eu lacus. Vestibulum non justo consectetur, cursus ante, tincidunt sapien. Nulla quis diam sit amet turpis interdum accumsan quis necenim. Vivamus faucibus ex sed nibh egestas elementum. Mauris et bibendum dui. Aenean consequat pulvinar luctus
                                                </p>
                                                <h3 className="mb-0 mt-5">More Details</h3>
                                                <div className="description-list-items d-flex">
                                                    <ul className="description-list">
                                                        <li>
                                                            <i className="fal fa-check"></i>
                                                            <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry</span>
                                                        </li>
                                                        <li>
                                                            <i className="fal fa-check"></i>
                                                            <span>Lorem Ipsum has been the ‘s standard dummy text. Lorem Ipsumum is simply dummy text.</span>
                                                        </li>
                                                        <li>
                                                            <i className="fal fa-check"></i>
                                                            <span>type here your detail one by one li more add</span>
                                                        </li>
                                                        <li>
                                                            <i className="fal fa-check"></i>
                                                            <span>has been the industry’s standard dummy text ever since. Lorem Ips</span>
                                                        </li>
                                                    </ul>
                                                    <ul className="description-list">
                                                        <li>
                                                            <i className="fal fa-check"></i>
                                                            <span>Lorem Ipsum generators on the tend to repeat.</span>
                                                        </li>
                                                        <li>
                                                            <i className="fal fa-check"></i>
                                                            <span> If you are going to use a passage.</span>
                                                        </li>
                                                        <li>
                                                            <i className="fal fa-check"></i>
                                                            <span> Lorem Ipsum generators on the tend to repeat.</span>
                                                        </li>
                                                        <li>
                                                            <i className="fal fa-check"></i>
                                                            <span> Lorem Ipsum generators on the tend to repeat.</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="additional" className="tab-pane fade">
                                <div className="table-responsive">
                                    <table className="table table-bordered">
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
                            <div id="review" className="tab-pane fade">
                                <div className="review-items">
                                    <div className="admin-items d-flex flex-wrap flex-md-nowrap align-items-center pb-4">
                                        <div className="admin-img pb-4 pb-md-0 me-4">
                                            <img src={review01} alt="image"/>
                                        </div>
                                        <div className="content p-4">
                                            <div className="head-content pb-1 d-flex flex-wrap justify-content-between">
                                                <h5>miklos salsa<span>27June 2024 at 5.44pm</span></h5>
                                                <div className="star">
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                </div>
                                            </div>
                                            <p>
                                                Lorem ipsum dolor sit amet consectetur adipiscing elit. Curabitur vulputate vestibulum Phasellus rhoncus dolor eget viverra pretium.Curabitur vulputate vestibulum Phasellus rhoncus dolor eget viverra pretium.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="admin-items d-flex flex-wrap flex-md-nowrap align-items-center pb-4">
                                        <div className="admin-img pb-4 pb-md-0 me-4">
                                            <img src={review02} alt="image"/>
                                        </div>
                                        <div className="content p-4">
                                            <div className="head-content pb-1 d-flex flex-wrap justify-content-between">
                                                <h5>Ethan Turner <span>27June 2024 at 5.44pm</span></h5>
                                                <div className="star">
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                </div>
                                            </div>
                                            <p>
                                                Lorem ipsum dolor sit amet consectetur adipiscing elit. Curabitur vulputate vestibulum Phasellus rhoncus dolor eget viverra pretium.Curabitur vulputate vestibulum Phasellus rhoncus dolor eget viverra pretium.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="admin-items d-flex flex-wrap flex-md-nowrap align-items-center pb-4">
                                        <div className="admin-img pb-4 pb-md-0 me-4">
                                            <img src={review01} alt="image"/>
                                        </div>
                                        <div className="content p-4">
                                            <div className="head-content pb-1 d-flex flex-wrap justify-content-between">
                                                <h5>miklos salsa<span>27June 2024 at 5.44pm</span></h5>
                                                <div className="star">
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                </div>
                                            </div>
                                            <p>
                                                Lorem ipsum dolor sit amet consectetur adipiscing elit. Curabitur vulputate vestibulum Phasellus rhoncus dolor eget viverra pretium.Curabitur vulputate vestibulum Phasellus rhoncus dolor eget viverra pretium.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="admin-items d-flex flex-wrap flex-md-nowrap align-items-center pb-4">
                                        <div className="admin-img pb-4 pb-md-0 me-4">
                                            <img src={review02} alt="image" />
                                        </div>
                                        <div className="content p-4">
                                            <div className="head-content pb-1 d-flex flex-wrap justify-content-between">
                                                <h5>Ethan Turner <span>27June 2024 at 5.44pm</span></h5>
                                                <div className="star">
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                </div>
                                            </div>
                                            <p>
                                                Lorem ipsum dolor sit amet consectetur adipiscing elit. Curabitur vulputate vestibulum Phasellus rhoncus dolor eget viverra pretium.Curabitur vulputate vestibulum Phasellus rhoncus dolor eget viverra pretium.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="review-title mt-5 py-15 mb-30">
                                        <h4>add a review</h4>
                                        <div className="rate-now d-flex align-items-center">
                                            <p>Rate this product? *</p>
                                            <div className="star">
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="review-form">
                                        <form action="#" id="contact-form" method="POST">
                                            <div className="row g-4">
                                                <div className="col-lg-6">
                                                    <div className="form-clt">
                                                        <input type="text" name="name" id="name" placeholder="Full Name"/>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="form-clt">
                                                        <input type="text" name="email" id="email" placeholder="email addres"/>
                                                    </div>
                                                </div>
                                                <div className="col-lg-12 wow fadeInUp" data-wow-delay=".8">
                                                    <div className="form-clt-big form-clt">
                                                        <textarea name="message" id="message" placeholder="message"></textarea> 
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 wow fadeInUp" data-wow-delay=".9">
                                                    <button type="submit" className="theme-btn">
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
        <section className="food-category-section fix section-padding section-bg">
            <div className="container">
                <div className="section-title text-center">
                    <span className="wow fadeInUp">crispy, every bite taste</span>
                    <h2 className="wow fadeInUp" data-wow-delay=".3s">RELATED PRODUCTS</h2>
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
                                    <h6>$30.52</h6>
                                    <span>$28.52</span>
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
                                    <h6>$30.52</h6>
                                    <span>$28.52</span>
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
                                    <h6>$30.52</h6>
                                    <span>$28.52</span>
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
                    <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".9s">
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
            </div>
        </section>

         {/* Main Cta Banner Section Start  */}
        <section className="main-cta-banner-2 section-padding bg-cover" style={{ backgroundImage: `url(${mainctabg2})` }}>
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
                            30 minutes fast <br/>
                            <span className="theme-color-3">delivery</span> challage
                        </h2>
                    </div>
                    <a href="" className="theme-btn bg-white wow fadeInUp" data-wow-delay=".5s">
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

    </>
  )
}

export default ProductDetails
