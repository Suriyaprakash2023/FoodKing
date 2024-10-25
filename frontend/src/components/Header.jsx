import React,{useState} from 'react';
import logo from '../assets/img/logo/logo.svg';
import s2 from '../assets/img/shop-food/s2.png';
import s3 from '../assets/img/shop-food/s3.png';
import {Link} from 'react-router-dom';
import MobileNav from './MobileNav';
const Header = () => {

    const [isMobileNavOpen, setMobileNavOpen] = useState(false);

    const handleToggleClick = () => {
        setMobileNavOpen((prev) => !prev);
    };
  return (
    <>
      <header   className="section-bg">
            <div className="header-top">
                <div className="container">
                    
                </div>
            </div>
            <div id="header-sticky" className="header-1">
                <div className="container">
                    <div className="mega-menu-wrapper">
                        <div className="header-main">
                            <div className="logo">
                                <Link to='/' className="header-logo">
                                <img src={logo} alt="logo-img"/>
                                </Link>
                            </div>
                            <div className="header-left">
                                <div className="mean__menu-wrapper d-none d-lg-block">
                                    <div className="main-menu">
                                        <nav id="mobile-menu">
                                            <ul>
                                                <li className="has-dropdown active">
                                                    <Link to="/">
                                                    Home 
                                                   
                                                    </Link>
                                                   
                                                </li>
                                                <li className="has-dropdown">
                                                    <Link to='/shop'>
                                                    Shop
                                                    
                                                    </Link>
                                                  
                                                </li>
                                               
                                                <li className="has-dropdown">
                                                    <Link to='/about'>
                                                    About
                                                    </Link>
                                                </li>
                                               
                                            </ul>
                                        </nav>
                                       
                                    </div>
                                </div>
                            </div>
                            <div className="header-right d-flex justify-content-end align-items-center">
                                <div className="menu-cart">
                                    <div className="cart-box">
                                        <ul>
                                            <li>
                                                <img src={s2} alt="image"/>
                                                <div className="cart-product">
                                                    <a href="#0">grilled chiken</a>
                                                    <span>168$</span>
                                                </div>
                                            </li>
                                        </ul>
                                        <ul>
                                            <li className="border-none">
                                                <img src={s3} alt="image"/>
                                                <div className="cart-product">
                                                    <a href="#0">grilled chiken</a>
                                                    <span>168$</span>
                                                </div>
                                            </li>
                                        </ul>
                                        <div className="shopping-items d-flex align-items-center justify-content-between">
                                            <span>Shopping : $20.00</span>
                                            <span>Total : $168.00</span>
                                        </div>
                                        <div className="cart-button d-flex justify-content-between mb-4">
                                            <a  className="theme-btn">
                                            View Cart
                                            </a>
                                            <a  className="theme-btn bg-red-2">
                                            Checkout
                                            </a>
                                        </div>
                                    </div>
                                    <a  className="cart-icon">
                                    <i className="far fa-shopping-basket"></i>
                                    </a>
                                </div>
                                <div className="header-button">
                                    <Link to='/contact'  className="theme-btn bg-red-2">contact us</Link>
                                </div>
                                <div className="header__hamburger d-xl-block my-auto">
                                    <div className="sidebar__toggle"  onClick={handleToggleClick}>
                                        <div className="header-bar">
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                        </div>
                                    </div>
                                    {isMobileNavOpen && <MobileNav />}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    </>
  )
}

export default Header
