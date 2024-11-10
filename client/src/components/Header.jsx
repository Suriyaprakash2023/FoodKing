import {useState,useContext,useEffect} from 'react';
import { useNavigate } from "react-router-dom";
import logo from '/src/assets/website/img/logo/logo.svg';
import {Link} from 'react-router-dom';
import bookingshape from "/src/assets/website/img/shape/booking-shape.png";
import boy from "/src/assets/website/img/boy.png";
import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import AuthContext from '../components/context/AuthContext';
import axios from 'axios';
import {API_BASE_URL} from '../components/context/data';






const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    // width: 400,
    // boxShadow: 24,
    p: 4,
    
  };

const Header = () => {

    // const [isMobileNavOpen, setMobileNavOpen] = useState(false);

    // const handleToggleClick = () => {
    //     setMobileNavOpen((prev) => !prev);
    // };

    // const closeMobileNav = () => {
    //     setMobileNavOpen(false);
    //   };


    const [loginOpen, setLoginOpen] = useState(false);
    const [registerOpen, setRegisterOpen] = useState(false);
  
    const handleLoginOpen = () => setLoginOpen(true);
    const handleLoginClose = () => setLoginOpen(false);
  
    const handleRegisterOpen = () => setRegisterOpen(true);
    const handleRegisterClose = () => setRegisterOpen(false);

    const navigate = useNavigate();
    const { login,userData,isAuthenticated } = useContext(AuthContext);
    const [email,setEmail] = useState("");
    const [mobile_number, setMobileNumber] = useState("");
    const password = mobile_number;
    // const [password, setPassword] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    const [errors, setErrors] = useState("");
  
    const showMessage = (message, isError = false) => {
        if (isError) {
            setErrors(message);
            setSuccessMessage("");
        } else {
            setSuccessMessage(message);
            setErrors("");
        }
    };
    
    // Clear messages after 3 seconds when they are set
    useEffect(() => {
        if (successMessage || errors) {
            const timer = setTimeout(() => {
                setSuccessMessage("");
                setErrors("");
            }, 3000);
    
            // Clear the timeout if the component unmounts or a new message is shown
            return () => clearTimeout(timer);
        }
    }, [successMessage, errors]);
    
  
    // Submit handler with async/await
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        await login(mobile_number, password); // Wait for login to complete
  
        // Retrieve user role from localStorage
        const userRole = localStorage.getItem('userRole');
  
        // Redirect based on role
        if (userRole === 'admin') {
          setLoginOpen(false);
          navigate("/dashboard");
          
        } else {
          setLoginOpen(false);
          navigate("/");
        }
      } catch (err) {
       
        setErrors(err.message || "Login failed. Please check your credentials."); // Show error message if login fails
      }
    };



    const handleRegisterSubmit = async (e) => {
        e.preventDefault();
        setErrors("");
        setSuccessMessage("");
    
    
        try {
          const response = await axios.post(`${API_BASE_URL}/register/`, {
            email,
            password,
            mobile_number,
          });
    
          if (response.status === 201) {
            setMobileNumber("")
            setEmail("")
            setSuccessMessage("Account Created Successfully..😍");
           // Wait for 5 seconds before navigating to login
            setTimeout(() => {
                navigate("/shop");
                setRegisterOpen(false);
            }, 3000); // 5000 milliseconds = 5 seconds
           
         
          } else {
            setErrors("Please try again!");
          }
        } catch (error) {
          setErrors("Registration failed! " + (error.response?.data?.message || ""));
        }
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

                                                <li className="has-dropdown">
                                                    <Link to='/contact'>
                                                    Contact
                                                    </Link>
                                                </li>
                                               
                                            </ul>
                                        </nav>
                                       
                                    </div>
                                </div>
                            </div>
                            <div className="header-right d-flex justify-content-end align-items-center">
                                <div className="menu-cart">
                                   
                                    { isAuthenticated ? (
                                        <a  className="d-flex flex-column align-items-center text-center">

                                        <img src={boy} style={{ height: '44px',width: '46px',borderRadius: '50%'}}/>
                                        <span>{userData.email}</span>
                                       
                                        </a>
                                    ):
                                    ('')
                                    }
                                    
                                </div>
                                <div className="header-button">
                                    <a className="theme-btn bg-red-2">
                                        <span onClick={handleLoginOpen}>Login</span> /{' '}
                                        <span onClick={handleRegisterOpen}>Register</span>
                                    </a>
                                </div>
                                <div className="header__hamburger d-xl-block my-auto">
                                     <div className="sidebar__toggle" > {/*  onClick={handleToggleClick} */}
                                        <div className="header-bar">
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>

        {/* <div className="fix-area">
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
        <div className="offcanvas__overlay"></div> */}






        {/* Login Modal */}
        <Modal open={loginOpen} onClose={handleLoginClose} aria-labelledby="login-modal-title" aria-describedby="login-modal-description">
                <Box sx={style}  className="col-xl-4 col-lg-6 col-md-8 col-sm-12  booking-contact" style={{backgroundImage: `url(${bookingshape})`,backgroundSize: "cover"}}>
                        <div >
                            <h4 className="text-center text-white">Login</h4>
                            {errors && <Alert severity="error" variant="filled">{errors}</Alert>}
                            {successMessage && <Alert severity="success" variant="filled">{successMessage}</Alert>}
                            <form onSubmit={handleSubmit} >
                            <div className="booking-items">
                                <div className="form-clt">
                                <input 
                                    type="text"
                                    name="number"
                                    id="number"
                                    placeholder="Enter Phone Number"
                                    value={mobile_number}
                                    onChange={(e) => setMobileNumber(e.target.value)}
                                    required
                                />
                                <div className="icon">
                                    <i className="fas fa-phone"></i>
                                </div>
                                </div>
                            
                                <div className="form-clt">
                                <button type="sumbit" className="theme-btn bg-yellow">
                                    Login
                                </button>
                                </div>
                            </div>
                            </form>
                        </div>
            
                </Box>
            </Modal>

            {/* Register Modal */}
            <Modal
                open={registerOpen}
                onClose={handleRegisterClose}
                aria-labelledby="register-modal-title"
                aria-describedby="register-modal-description"
            >
                <Box sx={style}  className="col-xl-4 col-lg-6 col-md-8 col-sm-12  booking-contact" style={{backgroundImage: `url(${bookingshape})`,backgroundSize: "cover",}}>
                        <div >
                            <h4 className="text-center text-white">Register</h4>
                            {errors && <Alert severity="error"  variant="filled">{errors}</Alert>}
                            {successMessage && <Alert severity="info"  variant="filled">{successMessage}</Alert>}
                            <form onSubmit={handleRegisterSubmit} >
                            <div className="booking-items">
                                <div className="form-clt">
                                <input 
                                    type="email"
                                    name="name"
                                    id="number"
                                    placeholder="Enter Your gmail"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value.toLowerCase())}
                                    required
                                />
                                
                                </div>
                                <div className="form-clt">
                                <input 
                                    type="text"
                                    name="number"
                                    id="number"
                                    placeholder="Enter Phone Number"
                                    value={mobile_number}
                                    onChange={(e) => setMobileNumber(e.target.value)}
                                    required
                                />
                                
                                </div>
                                <div className="form-clt">
                                <button type="sumbit" className="theme-btn bg-yellow">
                                    Register
                                </button>
                                </div>
                            </div>
                            </form>
                        </div>
                    </Box>
            </Modal>
    </>
  )
}

export default Header
