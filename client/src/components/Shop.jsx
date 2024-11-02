import {useEffect} from 'react';
import Header from './Header';
import Footer from './Footer';
import breadcrumb from '/src/assets/website/img/banner/breadcrumb.jpg';
import mainctabg2 from '/src/assets/website/img/banner/main-cta-bg-2.jpg';
import food1 from '/src/assets/website/img/shop-food/food-1.png';
import food2 from '/src/assets/website/img/shop-food/food-2.png';
import food3 from '/src/assets/website/img/shop-food/food-3.png';
import food4 from '/src/assets/website/img/shop-food/food-4.png';
import {Link} from 'react-router-dom';

const Shop = () => {

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
    {/* Breadcrumb Section Start  */}
        <div className="breadcrumb-wrapper bg-cover" 
        style={{ backgroundImage: `url(${breadcrumb})` }}
        >
            <div className="container">
                <div className="page-heading center">
                    <h1>shop</h1>
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
                            shop
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        {/* Food Catagory Section Start  */}
        <section className="food-category-section fix section-padding">
            <div className="container">
                <div className="row g-4">
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
                                    <h4>new arrival</h4>
                                </div>
                                <div className="popular-food-posts">
                                    <div className="single-post-item">
                                        <div className="thumb bg-cover" 
                                        style={{ backgroundImage: `url(${food1})` }}
                                        >

                                        </div>
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
                                        <div className="thumb bg-cover" 
                                       
                                        style={{ backgroundImage: `url(${food2})` }}
                                        ></div>
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
                                        <div className="thumb bg-cover" style={{ backgroundImage: `url(${food3})` }}
                                        ></div>
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
                                        <div className="thumb bg-cover" 
                                         style={{ backgroundImage: `url(${food4})` }}
                                        ></div>
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
                        <div className="woocommerce-notices-wrapper">
                            <div className="product-showing">
                                <h5><a href=""><span><img src="/src/assets/website//img/filter.png" alt="img"/></span> Filtering</a></h5>
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
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="catagory-product-card-2 shadow-style text-center">
                                    <div className="icon">
                                        <a href=""><i className="far fa-heart"></i></a>
                                    </div>
                                    <div className="catagory-product-image">
                                        <img src="/src/assets/website//img/food/pasta-2.png" alt="product-img"/>
                                    </div>
                                    <div className="catagory-product-content">
                                        <div className="catagory-button">
                                            <Link to='/product-details' className="theme-btn-2"><i className="far fa-shopping-basket"></i>Add To Cart</Link>
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
                                            <span className="fas fa-star color-bg"></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="catagory-product-card-2 shadow-style active text-center">
                                    
                                    <div className="catagory-product-image">
                                        <img src="/src/assets/website//img/food/burger-2.png" alt="product-img"/>
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
                                            <span className="fas fa-star color-bg"></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="catagory-product-card-2 shadow-style text-center">
                                    <div className="icon">
                                        <a href=""><i className="far fa-heart"></i></a>
                                    </div>
                                    <div className="catagory-product-image">
                                        <img src="/src/assets/website//img/food/pizza-3.png" alt="product-img"/>
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
                                            <span className="fas fa-star color-bg"></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="catagory-product-card-2 shadow-style text-center">
                                    <div className="icon">
                                        <a href=""><i className="far fa-heart"></i></a>
                                    </div>
                                    <div className="catagory-product-image">
                                        <img src="/src/assets/website//img/food/ruti.png" alt="product-img"/>
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
                                            <a href="">ruti with chiken</a>
                                        </h4>
                                        <div className="star">
                                            <span className="fas fa-star"></span>
                                            <span className="fas fa-star"></span>
                                            <span className="fas fa-star"></span>
                                            <span className="fas fa-star"></span>
                                            <span className="fas fa-star color-bg"></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="catagory-product-card-2 shadow-style text-center">
                                    <div className="icon">
                                        <a href=""><i className="far fa-heart"></i></a>
                                    </div>
                                    <div className="catagory-product-image">
                                        <img src="/src/assets/website//img/food/grilled-2.png" alt="product-img"/>
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
                                            <span className="fas fa-star color-bg"></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="catagory-product-card-2 shadow-style text-center">
                                    <div className="icon">
                                        <a href=""><i className="far fa-heart"></i></a>
                                    </div>
                                    <div className="catagory-product-image">
                                        <img src="/src/assets/website//img/food/main-food-3.png" alt="product-img"/>
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
                                            <span className="fas fa-star color-bg"></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="catagory-product-card-2 shadow-style text-center">
                                    <div className="icon">
                                        <a href=""><i className="far fa-heart"></i></a>
                                    </div>
                                    <div className="catagory-product-image">
                                        <img src="/src/assets/website//img/food/french-fry-3.png" alt="product-img"/>
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
                                            <a href="">ruti with chiken</a>
                                        </h4>
                                        <div className="star">
                                            <span className="fas fa-star"></span>
                                            <span className="fas fa-star"></span>
                                            <span className="fas fa-star"></span>
                                            <span className="fas fa-star"></span>
                                            <span className="fas fa-star color-bg"></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="catagory-product-card-2 shadow-style text-center">
                                    <div className="icon">
                                        <a href=""><i className="far fa-heart"></i></a>
                                    </div>
                                    <div className="catagory-product-image">
                                        <img src="/src/assets/website//img/food/fried-chicken-2.png" alt="product-img"/>
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
                                            <span className="fas fa-star color-bg"></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="catagory-product-card-2 shadow-style text-center">
                                    <div className="icon">
                                        <a href=""><i className="far fa-heart"></i></a>
                                    </div>
                                    <div className="catagory-product-image">
                                        <img src="/src/assets/website//img/food/french-fry-4.png" alt="product-img"/>
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
                                            <span className="fas fa-star color-bg"></span>
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

         {/* Main Cta Banner Section Start  */}
        <section className="main-cta-banner-2 section-padding bg-cover" 
       
        style={{ backgroundImage: `url(${mainctabg2})` }}
        >
            <div className="tomato-shape-left float-bob-y">
                <img src="/src/assets/website//img/tomato.png" alt="shape-img"/>
            </div>
            <div className="chili-shape-right float-bob-y">
                <img src="/src/assets/website//img/chilli.png" alt="shape-img"/>
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
                        <img src="/src/assets/website//img/delivery-man-2.png" alt="img"/>
                    </div>
                </div>
            </div>
        </section>


     <Footer/>
    </>
  )
}

export default Shop
