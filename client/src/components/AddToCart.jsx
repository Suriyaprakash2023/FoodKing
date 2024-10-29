import React from 'react'
import breadcrumb from '../assets/img/banner/breadcrumb.jpg';
import food1 from '../assets/img/shop-food/food-1.png'
import Header from './Header';

 
const AddToCart = () => {
  return (
    <>
    <Header/>
        {/* Breadcrumb Section Start  */}
        <div className="breadcrumb-wrapper bg-cover"  style={{ backgroundImage: `url(${breadcrumb})` }}>
            <div className="container">
                <div className="page-heading center">
                    <h1>shop Cart</h1>
                    <ul className="breadcrumb-items">
                        <li>
                            <a href="index-2.html">
                            Home Page
                            </a>
                        </li>
                        <li>
                            <i className="far fa-chevron-right"></i>
                        </li>
                        <li>
                            shop Cart
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        {/* Product Cart Section Start   */}
        <section className="cart-section section-padding fix">
            <div className="container">
                <div className="main-cart-wrapper">
                    <div className="row">
                        <div className="col-12">
                            <div className="cart-wrapper">
                                <div className="cart-items-wrapper">
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>Product</th>
                                                <th>Price</th>
                                                <th>Quantity</th>
                                                <th>Subtotal</th>
                                                <th>Remove</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className="cart-item">
                                                <td className="cart-item-info">
                                                    <img src="/src/assets/img/shop-food/s1.png" alt="Image"/>
                                                </td>
                                                <td className="cart-item-price">
                                                    $ <span className="base-price">195.00</span>
                                                </td>
                                                <td>
                                                    <div className="cart-item-quantity">
                                                        <span className="cart-item-quantity-amount"></span>
                                                        <div className="cart-item-quantity-controller">
                                                            <a href="#0" className="cart-increment">
                                                            <i className="far fa-caret-up"></i>
                                                            </a>
                                                            <a href="#0" className="cart-decrement">
                                                            <i className="far fa-caret-down"></i>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="cart-item-price">
                                                    $ <span className="total-price"></span>
                                                </td>
                                                <td className="cart-item-remove">
                                                    <a href="#0">
                                                    <i className="fas fa-times"></i>
                                                    </a>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="cart-wrapper-footer">
                                    <form action="https://modinatheme.com/html/foodking-html/shop-cart.html">
                                        <input type="text" name="promo-code" id="promoCode" placeholder="Promo code">
                                        <button type="submit" className="theme-btn border-radius-none">
                                        Apply Code
                                        </button>
                                    </form>
                                    <a href="shop-cart.html" className="theme-btn border-radius-none">
                                    Update Cart
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6"></div>
                        <div className="col-xl-6">
                            <div className="cart-pragh-box">
                                <div className="cart-graph">
                                    <h4>Cart Total</h4>
                                    <ul>
                                        <li>
                                            <span>Subtotal</span>
                                            <span>$320.00</span>
                                        </li>
                                        <li>
                                            <span>Shipping</span>
                                            <span>$10</span>
                                        </li>
                                        <li>
                                            <span>Total</span>
                                            <span>$320.00</span>
                                        </li>
                                    </ul>
                                    <div className="chck">
                                        <a href="checkout.html" className="theme-btn border-radius-none">
                                        Checkout
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Main Cta Banner Section Start  */}
        <section className="main-cta-banner-2 section-padding bg-cover" 
           style={{ backgroundImage: `url(${food1})` }}
        >
            <div className="tomato-shape-left float-bob-y">
                <img src="/src/assets/img/tomato.png" alt="shape-img"/>
            </div>
            <div className="chili-shape-right float-bob-y">
                <img src="/src/assets/img/chilli.png" alt="shape-img"/>
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
                    <a href="shop-single.html" className="theme-btn bg-white wow fadeInUp" data-wow-delay=".5s">
                    <span className="button-content-wrapper d-flex align-items-center">
                    <span className="button-icon"><i className="flaticon-delivery"></i></span>
                    <span className="button-text">order now</span>
                    </span>
                    </a>
                    <div className="delivery-man">
                        <img src="/src/assets/img/delivery-man-2.png" alt="img"/>
                    </div>
                </div>
            </div>
        </section>
    <Footer/>
    </>
  )
}

export default AddToCart
