import React from 'react'

const Shop = () => {
  return (
    <>
       <div class="breadcrumb-wrapper bg-cover" style="background-image: url('assets/img/banner/breadcrumb.jpg');">
            <div class="container">
                <div class="page-heading center">
                    <h1>shop</h1>
                    <ul class="breadcrumb-items">
                        <li>
                            <a href="index-2.html">
                            Home Page
                            </a>
                        </li>
                        <li>
                            <i class="far fa-chevron-right"></i>
                        </li>
                        <li>
                            shop
                        </li>
                    </ul>
                </div>
            </div>
        </div>

       {/* Food Catagory Section Start  */}
        <section class="food-category-section fix section-padding section-bg">
            <div class="container">
                <div class="row g-5">
                    <div class="col-xl-3 col-lg-4 order-2 order-md-1 mt-5">
                        <div class="main-sidebar">
                            <div class="single-sidebar-widget">
                                <div class="wid-title">
                                    <h4>catagories</h4>
                                </div>
                                <div class="widget-categories">
                                    <ul>
                                        <li><a href="shop-single.html"><i class="flaticon-burger"></i>burger</a></li>
                                        <li><a href="shop-single.html"><i class="flaticon-chicken"></i>Fried Chiken</a></li>
                                        <li><a href="shop-single.html"><i class="flaticon-french-fries"></i>French Fries</a></li>
                                        <li><a href="shop-single.html"><i class="flaticon-pizza"></i>Hot Pizzas</a></li>
                                        <li><a href="shop-single.html"><i class="flaticon-sandwich"></i>Sandwich</a></li>
                                        <li><a href="shop-single.html"><i class="flaticon-bread"></i>Bread</a></li>
                                        <li><a href="shop-single.html"><i class="flaticon-rice"></i>fried rice</a></li>
                                        <li><a href="shop-single.html"><i class="flaticon-hotdog"></i>hot dog</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="single-sidebar-widget">
                                <div class="wid-title">
                                    <h4>price filter</h4>
                                </div>
                                <div class="range__barcustom">
                                    <div class="slider">
                                        <div class="progress" style="left: 25%; right: 25%;"></div>
                                    </div>
                                    <div class="range-input">
                                        <input type="range" class="range-min" min="0" max="10000" value="2500">
                                        <input type="range" class="range-max" min="100" max="10000" value="7500">
                                    </div>
                                    <div class="range-items">
                                        <div class="price-input d-flex">
                                            <div class="field">
                                                <span>Price:</span>
                                            </div>
                                            <div class="field">
                                                <span>$</span>
                                                <input type="number" class="input-min" value="100">
                                            </div>
                                            <div class="separators">-</div>
                                            <div class="field">
                                                <span>$</span>
                                                <input type="number" class="input-max" value="1000">
                                            </div>
                                            <a href="shop-left-sidebar.html" class="theme-btn border-radius-none">Filter</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="single-sidebar-widget">
                                <div class="wid-title">
                                    <h4>filter by size</h4>
                                </div>
                                <div class="filter-size">
                                    <div class="input-save d-flex align-items-center">
                                        <input type="checkbox" class="form-check-input" name="save-for-next" id="saveForNext">
                                        <label for="saveForNext">Small</label>
                                    </div>
                                    <div class="input-save d-flex align-items-center">
                                        <input type="checkbox" class="form-check-input" name="save-for-next" id="saveForNext2">
                                        <label for="saveForNext">Medium</label>
                                    </div>
                                    <div class="input-save d-flex align-items-center">
                                        <input type="checkbox" class="form-check-input" name="save-for-next" id="saveForNext3">
                                        <label for="saveForNext">Big</label>
                                    </div>
                                    <div class="input-save d-flex align-items-center">
                                        <input type="checkbox" class="form-check-input" name="save-for-next" id="saveForNext4">
                                        <label for="saveForNext">Mixing</label>
                                    </div>
                                </div>
                            </div>
                            <div class="single-sidebar-widget">
                                <div class="wid-title">
                                    <h4>new arrival</h4>
                                </div>
                                <div class="popular-food-posts">
                                    <div class="single-post-item">
                                        <div class="thumb bg-cover" style="background-image: url('assets/img/shop-food/food-1.png');"></div>
                                        <div class="post-content">
                                            <div class="star">
                                                <span class="fas fa-star"></span>
                                                <span class="fas fa-star"></span>
                                                <span class="fas fa-star"></span>
                                                <span class="fas fa-star"></span>
                                                <span class="fas fa-star color-bg"></span>
                                            </div>
                                            <h4><a href="shop-single.html">ruti with chiken</a></h4>
                                            <div class="post-price">
                                                <span class="theme-color-2">$30.52</span>
                                                <span>$28.52</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="single-post-item">
                                        <div class="thumb bg-cover" style="background-image: url('assets/img/shop-food/food-2.png');"></div>
                                        <div class="post-content">
                                            <div class="star">
                                                <span class="fas fa-star"></span>
                                                <span class="fas fa-star"></span>
                                                <span class="fas fa-star"></span>
                                                <span class="fas fa-star"></span>
                                                <span class="fas fa-star color-bg"></span>
                                            </div>
                                            <h4><a href="shop-single.html">ruti with chiken</a></h4>
                                            <div class="post-price">
                                                <span class="theme-color-2">$30.52</span>
                                                <span>$28.52</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="single-post-item">
                                        <div class="thumb bg-cover" style="background-image: url('assets/img/shop-food/food-3.png');"></div>
                                        <div class="post-content">
                                            <div class="star">
                                                <span class="fas fa-star"></span>
                                                <span class="fas fa-star"></span>
                                                <span class="fas fa-star"></span>
                                                <span class="fas fa-star"></span>
                                                <span class="fas fa-star color-bg"></span>
                                            </div>
                                            <h4><a href="shop-single.html">ruti with chiken</a></h4>
                                            <div class="post-price">
                                                <span class="theme-color-2">$30.52</span>
                                                <span>$28.52</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="single-post-item">
                                        <div class="thumb bg-cover" style="background-image: url('assets/img/shop-food/food-4.png');"></div>
                                        <div class="post-content">
                                            <div class="star">
                                                <span class="fas fa-star"></span>
                                                <span class="fas fa-star"></span>
                                                <span class="fas fa-star"></span>
                                                <span class="fas fa-star"></span>
                                                <span class="fas fa-star color-bg"></span>
                                            </div>
                                            <h4><a href="shop-single.html">ruti with chiken</a></h4>
                                            <div class="post-price">
                                                <span class="theme-color-2">$30.52</span>
                                                <span>$28.52</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-9 col-lg-8 order-1 order-md-2">
                        <div class="woocommerce-notices-wrapper mb-0">
                            <div class="product-showing">
                                <h5><a href="shop-left-sidebar.html"><span>
                                  <img src="assets/img/filter.png" alt="img"/></span> Filtering</a></h5>
                                <h5>Showing <span>1–12</span> of 27 results</h5>
                            </div>
                            <div class="form-clt">
                                <h6>Sort by: <a href="shop.html"><i class="fal fa-sort-alt"></i></a></h6>
                                <div class="nice-select" tabindex="0">
                                    <span class="current">
                                    Price
                                    </span>
                                    <ul class="list">
                                        <li data-value="1" class="option selected">
                                            100$
                                        </li>
                                        <li data-value="1" class="option">
                                            120$
                                        </li>
                                        <li data-value="1" class="option">
                                            150$
                                        </li>
                                        <li data-value="1" class="option">
                                            200$
                                        </li>
                                    </ul>
                                </div>
                                <div class="icon">
                                    <a href="shop-left-sidebar.html"><i class="fas fa-th"></i></a>
                                </div>
                                <div class="icon-2">
                                    <a href="shop-list.html"><i class="fas fa-list"></i></a>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-xl-12 col-lg-12">
                                <div class="shop-list-items">
                                    <div class="shop-image">
                                        <img src="assets/img/shop-food/list/01.png" alt="shop-img"/>
                                    </div>
                                    <div class="shop-content">
                                        <div class="star pb-4">
                                            <span>-5%</span>
                                            <a href="#"> <i class="fas fa-star"></i></a>
                                            <a href="#"><i class="fas fa-star"></i></a>
                                            <a href="#"> <i class="fas fa-star"></i></a>
                                            <a href="#"><i class="fas fa-star"></i></a>
                                            <a href="#" class="color-bg"> <i class="fas fa-star"></i></a>
                                        </div>
                                        <h3><a href="shop-single.html">SUBWAY MELT</a></h3>
                                        <p>
                                            There are many variations of passages of Lorem Ipsum available, but majority have suffered teration in some form, by injected humour, or randomised
                                        </p>
                                        <h5>4.19$-6.09$</h5>
                                        <div class="shop-list-btn">
                                            <a href="shop-single.html" class="theme-btn">
                                            <span class="button-content-wrapper d-flex align-items-center">
                                            <span class="button-icon"><i class="flaticon-delivery"></i></span>
                                            <span class="button-text">order now</span>
                                            </span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-12 col-lg-12">
                                <div class="shop-list-items">
                                    <div class="shop-image">
                                        <img src="assets/img/shop-food/list/02.png" alt="shop-img"/>
                                    </div>
                                    <div class="shop-content">
                                        <div class="star pb-4">
                                            <span>-5%</span>
                                            <a href="#"> <i class="fas fa-star"></i></a>
                                            <a href="#"><i class="fas fa-star"></i></a>
                                            <a href="#"> <i class="fas fa-star"></i></a>
                                            <a href="#"><i class="fas fa-star"></i></a>
                                            <a href="#" class="color-bg"> <i class="fas fa-star"></i></a>
                                        </div>
                                        <h3><a href="shop-single.html">SPICY CHICKEN SANDWICH</a></h3>
                                        <p>
                                            There are many variations of passages of Lorem Ipsum available, but majority have suffered teration in some form, by injected humour, or randomised
                                        </p>
                                        <h5>4.19$-6.09$</h5>
                                        <div class="shop-list-btn">
                                            <a href="shop-single.html" class="theme-btn">
                                            <span class="button-content-wrapper d-flex align-items-center">
                                            <span class="button-icon"><i class="flaticon-delivery"></i></span>
                                            <span class="button-text">order now</span>
                                            </span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-12 col-lg-12">
                                <div class="shop-list-items">
                                    <div class="shop-image">
                                        <img src="assets/img/shop-food/list/03.png" alt="shop-img"/>
                                    </div>
                                    <div class="shop-content">
                                        <div class="star pb-4">
                                            <span>-5%</span>
                                            <a href="#"> <i class="fas fa-star"></i></a>
                                            <a href="#"><i class="fas fa-star"></i></a>
                                            <a href="#"> <i class="fas fa-star"></i></a>
                                            <a href="#"><i class="fas fa-star"></i></a>
                                            <a href="#" class="color-bg"> <i class="fas fa-star"></i></a>
                                        </div>
                                        <h3><a href="shop-single.html">CRUNCHWRAP SUPREME</a></h3>
                                        <p>
                                            There are many variations of passages of Lorem Ipsum available, but majority have suffered teration in some form, by injected humour, or randomised
                                        </p>
                                        <h5>4.19$-6.09$</h5>
                                        <div class="shop-list-btn">
                                            <a href="shop-single.html" class="theme-btn">
                                            <span class="button-content-wrapper d-flex align-items-center">
                                            <span class="button-icon"><i class="flaticon-delivery"></i></span>
                                            <span class="button-text">order now</span>
                                            </span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-12 col-lg-12">
                                <div class="shop-list-items">
                                    <div class="shop-image">
                                        <img src="assets/img/shop-food/list/04.png" alt="shop-img"/>
                                    </div>
                                    <div class="shop-content">
                                        <div class="star pb-4">
                                            <span>-5%</span>
                                            <a href="#"> <i class="fas fa-star"></i></a>
                                            <a href="#"><i class="fas fa-star"></i></a>
                                            <a href="#"> <i class="fas fa-star"></i></a>
                                            <a href="#"><i class="fas fa-star"></i></a>
                                            <a href="#" class="color-bg"> <i class="fas fa-star"></i></a>
                                        </div>
                                        <h3><a href="shop-single.html">GRILLED CHICKEN WRAP</a></h3>
                                        <p>
                                            There are many variations of passages of Lorem Ipsum available, but majority have suffered teration in some form, by injected humour, or randomised
                                        </p>
                                        <h5>4.19$-6.09$</h5>
                                        <div class="shop-list-btn">
                                            <a href="shop-single.html" class="theme-btn">
                                            <span class="button-content-wrapper d-flex align-items-center">
                                            <span class="button-icon"><i class="flaticon-delivery"></i></span>
                                            <span class="button-text">order now</span>
                                            </span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-12 col-lg-12">
                                <div class="shop-list-items">
                                    <div class="shop-image">
                                        <img src="assets/img/shop-food/list/05.png" alt="shop-img"/>
                                    </div>
                                    <div class="shop-content">
                                        <div class="star pb-4">
                                            <span>-5%</span>
                                            <a href="#"> <i class="fas fa-star"></i></a>
                                            <a href="#"><i class="fas fa-star"></i></a>
                                            <a href="#"> <i class="fas fa-star"></i></a>
                                            <a href="#"><i class="fas fa-star"></i></a>
                                            <a href="#" class="color-bg"> <i class="fas fa-star"></i></a>
                                        </div>
                                        <h3><a href="shop-single.html">PIECE CHICKEN MCNUGGETS</a></h3>
                                        <p>
                                            There are many variations of passages of Lorem Ipsum available, but majority have suffered teration in some form, by injected humour, or randomised
                                        </p>
                                        <h5>4.19$-6.09$</h5>
                                        <div class="shop-list-btn">
                                            <a href="shop-single.html" class="theme-btn">
                                            <span class="button-content-wrapper d-flex align-items-center">
                                            <span class="button-icon"><i class="flaticon-delivery"></i></span>
                                            <span class="button-text">order now</span>
                                            </span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="page-nav-wrap mt-5 text-center">
                            <ul>
                                <li><a class="page-numbers" href="#"><i class="fal fa-long-arrow-left"></i></a></li>
                                <li><a class="page-numbers" href="#">1</a></li>
                                <li><a class="page-numbers" href="#">2</a></li>
                                <li><a class="page-numbers" href="#">3</a></li>
                                <li><a class="page-numbers" href="#">4</a></li>
                                <li><a class="page-numbers" href="#"><i class="fal fa-long-arrow-right"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    
        <section class="main-cta-banner-2 section-padding bg-cover" style="background-image: url('assets/img/banner/main-cta-bg-2.jpg');">
            <div class="tomato-shape-left float-bob-y">
                <img src="assets/img/tomato.png" alt="shape-img">
            </div>
            <div class="chili-shape-right float-bob-y">
                <img src="assets/img/chilli.png" alt="shape-img">
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
                    <a href="shop-single.html" class="theme-btn bg-white wow fadeInUp" data-wow-delay=".5s">
                    <span class="button-content-wrapper d-flex align-items-center">
                    <span class="button-icon"><i class="flaticon-delivery"></i></span>
                    <span class="button-text">order now</span>
                    </span>
                    </a>
                    <div class="delivery-man">
                        <img src="assets/img/delivery-man-2.png" alt="img">
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Shop
