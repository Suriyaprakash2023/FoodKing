import {useState} from 'react'

const MobileNav = () => {

    const [isMobileNavOpen, setMobileNavOpen] = useState(false);

    const closeMobileNav = () => {
        setMobileNavOpen(false);
      };

  return (
    <>
        <div className="fix-area">
              <div className="offcanvas__info info-open">
                  <div className="offcanvas__wrapper">
                      <div className="offcanvas__content">
                          <div className="offcanvas__top mb-5 d-flex justify-content-between align-items-center">
                              <div className="offcanvas__logo">
                                  <a href="">
                                  <img src="/src/assets/img/logo/logo.svg" alt="logo-img"/>
                                  </a>
                              </div>
                              <div className="offcanvas__close" onClick={closeMobileNav}>
                                  <button>
                                  <i className="fas fa-times"></i>
                                  </button>
                              </div>
                          </div>
                          <p className="text d-none d-lg-block">
                              This involves interactions between a business and its customers. It's about meeting customers' needs and resolving their problems. Effective customer service is crucial.
                          </p>
                          <div className="offcanvas-gallery-area d-none d-lg-block">
                              <div className="offcanvas-gallery-items">
                                  <a href="/src/assets/img/header/01.jpg" className="offcanvas-image img-popup">
                                  <img src="/src/assets/img/header/01.jpg" alt="gallery-img"/>
                                  </a>
                                  <a href="/src/assets/img/header/02.jpg" className="offcanvas-image img-popup">
                                  <img src="/src/assets/img/header/02.jpg" alt="gallery-img"/>
                                  </a>
                                  <a href="/src/assets/img/header/03.jpg" className="offcanvas-image img-popup">
                                  <img src="/src/assets/img/header/03.jpg" alt="gallery-img"/>
                                  </a>
                              </div>
                              <div className="offcanvas-gallery-items">
                                  <a href="/src/assets/img/header/04.jpg" className="offcanvas-image img-popup">
                                  <img src="/src/assets/img/header/04.jpg" alt="gallery-img"/>
                                  </a>
                                  <a href="/src/assets/img/header/05.jpg" className="offcanvas-image img-popup">
                                  <img src="/src/assets/img/header/05.jpg" alt="gallery-img"/>
                                  </a>
                                  <a href="/src/assets/img/header/06.jpg" className="offcanvas-image img-popup">
                                  <img src="/src/assets/img/header/06.jpg" alt="gallery-img"/>
                                  </a>
                              </div>
                          </div>
                          <div className="mobile-menu fix mb-3"></div>
                          <div className="offcanvas__contact">
                              <h4>Contact Info</h4>
                              <ul>
                                  <li className="d-flex align-items-center">
                                      <div className="offcanvas__contact-icon">
                                          <i className="fal fa-map-marker-alt"></i>
                                      </div>
                                      <div className="offcanvas__contact-text">
                                          <a> 
                                            No 49, Express Avenue, <br/>
                                            Royapettah, Chennai,  <br/>
                                            Tamil Nadu <span>600014. &nbsp;</span>
                                        </a>
                                      </div>
                                  </li>
                                  <li className="d-flex align-items-center">
                                      <div className="offcanvas__contact-icon mr-15">
                                          <i className="fal fa-envelope"></i>
                                      </div>
                                      <div className="offcanvas__contact-text">
                                          <a href="tel:+013-003-003-9993"><span className="mailto:info@enofik.com">info@foodking.com</span></a>
                                      </div>
                                  </li>
                                  <li className="d-flex align-items-center">
                                      <div className="offcanvas__contact-icon mr-15">
                                          <i className="fal fa-clock"></i>
                                      </div>
                                      <div className="offcanvas__contact-text">
                                          <a target="_blank" href="#">Mod-friday, 09am -05pm</a>
                                      </div>
                                  </li>
                                  <li className="d-flex align-items-center">
                                      <div className="offcanvas__contact-icon mr-15">
                                          <i className="far fa-phone"></i>
                                      </div>
                                      <div className="offcanvas__contact-text">
                                          <a href="tel:+11002345909">+91 9994383989</a>
                                      </div>
                                  </li>
                              </ul>
                              <div className="header-button mt-4">
                                  <a  className="theme-btn">
                                  <span className="button-content-wrapper d-flex align-items-center justify-content-center">
                                  <span className="button-icon"><i className="flaticon-delivery"></i></span>
                                  <span className="button-text">order now</span>
                                  </span>
                                  </a>
                              </div>
                              <div className="social-icon d-flex align-items-center">
                                  <a href="#"><i className="fab fa-facebook-f"></i></a>
                                  <a href="#"><i className="fab fa-twitter"></i></a>
                                  <a href="#"><i className="fab fa-youtube"></i></a>
                                  <a href="#"><i className="fab fa-linkedin-in"></i></a>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
        </div>
        <div className="offcanvas__overlay"></div>
    </>
  )
}

export default MobileNav
