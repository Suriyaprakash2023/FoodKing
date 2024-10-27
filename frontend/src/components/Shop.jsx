
import breadcrumb from '../assets/img/banner/breadcrumb.jpg'
import food1 from '../assets/img/shop-food/food-1.png'
import food2 from '../assets/img/shop-food/food-2.png'
import food3 from '../assets/img/shop-food/food-3.png'
import food4 from '../assets/img/shop-food/food-4.png'
import mainctabg2 from '../assets/img/banner/main-cta-bg-2.jpg'
import filter from "../assets/img/filter.png";
import list01 from "../assets/img/shop-food/list/01.png";
import list02 from "../assets/img/shop-food/list/02.png";
import list03 from "../assets/img/shop-food/list/03.png";
import list04 from "../assets/img/shop-food/list/04.png";
import list05 from "../assets/img/shop-food/list/05.png";
import tomato from "../assets/img/tomato.png";
import chilli from "../assets/img/chilli.png"
import deliveryman2 from "../assets/img/delivery-man-2.png";

import Header from './Header'
const Shop = () => {
  return (
    <>
     <Header/>
       <div className="breadcrumb-wrapper bg-cover"  style={{ backgroundImage: `url(${breadcrumb})` }}>
            <div className="container">
                <div className="page-heading center">
                    <h1>shop</h1>
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
                            shop
                        </li>
                    </ul>
                </div>
            </div>
        </div>

       {/* Food Catagory Section Start  */}
        <section className="food-category-section fix section-padding section-bg">
            <div className="container">
                <div className="row g-5">
                    <div className="col-xl-3 col-lg-4 order-2 order-md-1 mt-5">
                        <div className="main-sidebar">
                            <div className="single-sidebar-widget">
                                <div className="wid-title">
                                    <h4>catagories</h4>
                                </div>
                                <div className="widget-categories">
                                    <ul>
                                        <li><a href=""><i className="flaticon-burger"></i>burger</a></li>
                                        <li><a href=""><i className="flaticon-chicken"></i>Fried Chiken</a></li>
                                        <li><a href=""><i className="flaticon-french-fries"></i>French Fries</a></li>
                                        <li><a href=""><i className="flaticon-pizza"></i>Hot Pizzas</a></li>
                                        <li><a href=""><i className="flaticon-sandwich"></i>Sandwich</a></li>
                                        <li><a href=""><i className="flaticon-bread"></i>Bread</a></li>
                                        <li><a href=""><i className="flaticon-rice"></i>fried rice</a></li>
                                        <li><a href=""><i className="flaticon-hotdog"></i>hot dog</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="single-sidebar-widget">
                                <div className="wid-title">
                                    <h4>price filter</h4>
                                </div>
                                <div className="range__barcustom">
                                    <div className="slider">
                                        <div className="progress"  style={{ left: "25%", right: "25%", position: "absolute" }}></div>
                                    </div>
                                    <div className="range-input">
                                        <input type="range" className="range-min" min="0" max="10000" value="2500"/>
                                        <input type="range" className="range-max" min="100" max="10000" value="7500"/>
                                    </div>
                                    <div className="range-items">
                                        <div className="price-input d-flex">
                                            <div className="field">
                                                <span>Price:</span>
                                            </div>
                                            <div className="field">
                                                <span>$</span>
                                                <input type="number" className="input-min" value="100"/>
                                            </div>
                                            <div className="separators">-</div>
                                            <div className="field">
                                                <span>$</span>
                                                <input type="number" className="input-max" value="1000"/>
                                            </div>
                                            <a href="" className="theme-btn border-radius-none">Filter</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="single-sidebar-widget">
                                <div className="wid-title">
                                    <h4>filter by size</h4>
                                </div>
                                <div className="filter-size">
                                    <div className="input-save d-flex align-items-center">
                                        <input type="checkbox" className="form-check-input" name="save-for-next" id="saveForNext"/>
                                        <label for="saveForNext">Small</label>
                                    </div>
                                    <div className="input-save d-flex align-items-center">
                                        <input type="checkbox" className="form-check-input" name="save-for-next" id="saveForNext2"/>
                                        <label for="saveForNext">Medium</label>
                                    </div>
                                    <div className="input-save d-flex align-items-center">
                                        <input type="checkbox" className="form-check-input" name="save-for-next" id="saveForNext3"/>
                                        <label for="saveForNext">Big</label>
                                    </div>
                                    <div className="input-save d-flex align-items-center">
                                        <input type="checkbox" className="form-check-input" name="save-for-next" id="saveForNext4"/>
                                        <label for="saveForNext">Mixing</label>
                                    </div>
                                </div>
                            </div>
                            <div className="single-sidebar-widget">
                                <div className="wid-title">
                                    <h4>new arrival</h4>
                                </div>
                                <div className="popular-food-posts">
                                    <div className="single-post-item">
                                        <div className="thumb bg-cover"  style={{ backgroundImage: `url(${food1})` }}></div>
                                        <div className="post-content">
                                            <div className="star">
                                                <span className="fas fa-star"></span>
                                                <span className="fas fa-star"></span>
                                                <span className="fas fa-star"></span>
                                                <span className="fas fa-star"></span>
                                                <span className="fas fa-star color-bg"></span>
                                            </div>
                                            <h4><a href="">ruti with chiken</a></h4>
                                            <div className="post-price">
                                                <span className="theme-color-2">$30.52</span>
                                                <span>$28.52</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="single-post-item">
                                        <div className="thumb bg-cover"   style={{ backgroundImage: `url(${food2})` }}></div>
                                        <div className="post-content">
                                            <div className="star">
                                                <span className="fas fa-star"></span>
                                                <span className="fas fa-star"></span>
                                                <span className="fas fa-star"></span>
                                                <span className="fas fa-star"></span>
                                                <span className="fas fa-star color-bg"></span>
                                            </div>
                                            <h4><a href="">ruti with chiken</a></h4>
                                            <div className="post-price">
                                                <span className="theme-color-2">$30.52</span>
                                                <span>$28.52</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="single-post-item">
                                        <div className="thumb bg-cover"style={{ backgroundImage: `url(${food3})` }}></div>
                                        <div className="post-content">
                                            <div className="star">
                                                <span className="fas fa-star"></span>
                                                <span className="fas fa-star"></span>
                                                <span className="fas fa-star"></span>
                                                <span className="fas fa-star"></span>
                                                <span className="fas fa-star color-bg"></span>
                                            </div>
                                            <h4><a href="">ruti with chiken</a></h4>
                                            <div className="post-price">
                                                <span className="theme-color-2">$30.52</span>
                                                <span>$28.52</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="single-post-item">
                                        <div className="thumb bg-cover" style={{ backgroundImage: `url(${food4})` }}></div>
                                        <div className="post-content">
                                            <div className="star">
                                                <span className="fas fa-star"></span>
                                                <span className="fas fa-star"></span>
                                                <span className="fas fa-star"></span>
                                                <span className="fas fa-star"></span>
                                                <span className="fas fa-star color-bg"></span>
                                            </div>
                                            <h4><a href="">ruti with chiken</a></h4>
                                            <div className="post-price">
                                                <span className="theme-color-2">$30.52</span>
                                                <span>$28.52</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-9 col-lg-8 order-1 order-md-2">
                        <div className="woocommerce-notices-wrapper mb-0">
                            <div className="product-showing">
                                <h5><a href=""><span>
                                  <img src={filter} alt="img"/></span> Filtering</a></h5>
                                <h5>Showing <span>1–12</span> of 27 results</h5>
                            </div>
                            <div className="form-clt">
                                <h6>Sort by: <a href=""><i className="fal fa-sort-alt"></i></a></h6>
                                <div className="nice-select" tabIndex="0">
                                    <span className="current">
                                    Price
                                    </span>
                                    <ul className="list">
                                        <li data-value="1" className="option selected">
                                            100$
                                        </li>
                                        <li data-value="1" className="option">
                                            120$
                                        </li>
                                        <li data-value="1" className="option">
                                            150$
                                        </li>
                                        <li data-value="1" className="option">
                                            200$
                                        </li>
                                    </ul>
                                </div>
                                <div className="icon">
                                    <a href=""><i className="fas fa-th"></i></a>
                                </div>
                                <div className="icon-2">
                                    <a href=""><i className="fas fa-list"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-12 col-lg-12">
                                <div className="shop-list-items">
                                    <div className="shop-image">
                                        <img src={list01} alt="shop-img"/>
                                    </div>
                                    <div className="shop-content">
                                        <div className="star pb-4">
                                            <span>-5%</span>
                                            <a href="#"> <i className="fas fa-star"></i></a>
                                            <a href="#"><i className="fas fa-star"></i></a>
                                            <a href="#"> <i className="fas fa-star"></i></a>
                                            <a href="#"><i className="fas fa-star"></i></a>
                                            <a href="#" className="color-bg"> <i className="fas fa-star"></i></a>
                                        </div>
                                        <h3><a href="">SUBWAY MELT</a></h3>
                                        <p>
                                            There are many variations of passages of Lorem Ipsum available, but majority have suffered teration in some form, by injected humour, or randomised
                                        </p>
                                        <h5>4.19$-6.09$</h5>
                                        <div className="shop-list-btn">
                                            <a href="" className="theme-btn">
                                            <span className="button-content-wrapper d-flex align-items-center">
                                            <span className="button-icon"><i className="flaticon-delivery"></i></span>
                                            <span className="button-text">order now</span>
                                            </span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-12 col-lg-12">
                                <div className="shop-list-items">
                                    <div className="shop-image">
                                        <img src={list02} alt="shop-img"/>
                                    </div>
                                    <div className="shop-content">
                                        <div className="star pb-4">
                                            <span>-5%</span>
                                            <a href="#"> <i className="fas fa-star"></i></a>
                                            <a href="#"><i className="fas fa-star"></i></a>
                                            <a href="#"> <i className="fas fa-star"></i></a>
                                            <a href="#"><i className="fas fa-star"></i></a>
                                            <a href="#" className="color-bg"> <i className="fas fa-star"></i></a>
                                        </div>
                                        <h3><a href="">SPICY CHICKEN SANDWICH</a></h3>
                                        <p>
                                            There are many variations of passages of Lorem Ipsum available, but majority have suffered teration in some form, by injected humour, or randomised
                                        </p>
                                        <h5>4.19$-6.09$</h5>
                                        <div className="shop-list-btn">
                                            <a href="" className="theme-btn">
                                            <span className="button-content-wrapper d-flex align-items-center">
                                            <span className="button-icon"><i className="flaticon-delivery"></i></span>
                                            <span className="button-text">order now</span>
                                            </span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-12 col-lg-12">
                                <div className="shop-list-items">
                                    <div className="shop-image">
                                        <img src={list03} alt="shop-img"/>
                                    </div>
                                    <div className="shop-content">
                                        <div className="star pb-4">
                                            <span>-5%</span>
                                            <a href="#"> <i className="fas fa-star"></i></a>
                                            <a href="#"><i className="fas fa-star"></i></a>
                                            <a href="#"> <i className="fas fa-star"></i></a>
                                            <a href="#"><i className="fas fa-star"></i></a>
                                            <a href="#" className="color-bg"> <i className="fas fa-star"></i></a>
                                        </div>
                                        <h3><a href="">CRUNCHWRAP SUPREME</a></h3>
                                        <p>
                                            There are many variations of passages of Lorem Ipsum available, but majority have suffered teration in some form, by injected humour, or randomised
                                        </p>
                                        <h5>4.19$-6.09$</h5>
                                        <div className="shop-list-btn">
                                            <a href="" className="theme-btn">
                                            <span className="button-content-wrapper d-flex align-items-center">
                                            <span className="button-icon"><i className="flaticon-delivery"></i></span>
                                            <span className="button-text">order now</span>
                                            </span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-12 col-lg-12">
                                <div className="shop-list-items">
                                    <div className="shop-image">
                                        <img src={list04} alt="shop-img"/>
                                    </div>
                                    <div className="shop-content">
                                        <div className="star pb-4">
                                            <span>-5%</span>
                                            <a href="#"> <i className="fas fa-star"></i></a>
                                            <a href="#"><i className="fas fa-star"></i></a>
                                            <a href="#"> <i className="fas fa-star"></i></a>
                                            <a href="#"><i className="fas fa-star"></i></a>
                                            <a href="#" className="color-bg"> <i className="fas fa-star"></i></a>
                                        </div>
                                        <h3><a href="">GRILLED CHICKEN WRAP</a></h3>
                                        <p>
                                            There are many variations of passages of Lorem Ipsum available, but majority have suffered teration in some form, by injected humour, or randomised
                                        </p>
                                        <h5>4.19$-6.09$</h5>
                                        <div className="shop-list-btn">
                                            <a href="" className="theme-btn">
                                            <span className="button-content-wrapper d-flex align-items-center">
                                            <span className="button-icon"><i className="flaticon-delivery"></i></span>
                                            <span className="button-text">order now</span>
                                            </span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-12 col-lg-12">
                                <div className="shop-list-items">
                                    <div className="shop-image">
                                        <img src={list05} alt="shop-img"/>
                                    </div>
                                    <div className="shop-content">
                                        <div className="star pb-4">
                                            <span>-5%</span>
                                            <a href="#"> <i className="fas fa-star"></i></a>
                                            <a href="#"><i className="fas fa-star"></i></a>
                                            <a href="#"> <i className="fas fa-star"></i></a>
                                            <a href="#"><i className="fas fa-star"></i></a>
                                            <a href="#" className="color-bg"> <i className="fas fa-star"></i></a>
                                        </div>
                                        <h3><a href="">PIECE CHICKEN MCNUGGETS</a></h3>
                                        <p>
                                            There are many variations of passages of Lorem Ipsum available, but majority have suffered teration in some form, by injected humour, or randomised
                                        </p>
                                        <h5>4.19$-6.09$</h5>
                                        <div className="shop-list-btn">
                                            <a href="" className="theme-btn">
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
                        <div className="page-nav-wrap mt-5 text-center">
                            <ul>
                                <li><a className="page-numbers" href="#"><i className="fal fa-long-arrow-left"></i></a></li>
                                <li><a className="page-numbers" href="#">1</a></li>
                                <li><a className="page-numbers" href="#">2</a></li>
                                <li><a className="page-numbers" href="#">3</a></li>
                                <li><a className="page-numbers" href="#">4</a></li>
                                <li><a className="page-numbers" href="#"><i className="fal fa-long-arrow-right"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    
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
                        <img src={deliveryman2} alt="img" />
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Shop
