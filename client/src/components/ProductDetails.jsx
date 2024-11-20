import breadcrumb from "/src/assets/website/img/banner/breadcrumb.jpg";
import mainctabg2 from "/src/assets/website/img/banner/breadcrumb.jpg";
import review01 from "/src/assets/website/img/shop-food/review/01.jpg";
import review02 from "/src/assets/website/img/shop-food/review/02.jpg";
import tomato from "/src/assets/website/img/tomato.png";
import chilli from "/src/assets/website/img/chilli.png";
import deliveryman2 from "/src/assets/website/img/delivery-man-2.png";

import Header from "./Header";
import Footer from "./Footer";
import axios from "axios";
import { useEffect, useState } from "react";
import { API_BASE_URL } from "./context/data";
import { Link, useParams, useNavigate } from "react-router-dom";
import Alert from '@mui/material/Alert';

const ProductDetails = () => {
  const { id } = useParams(); // Extract `dishId` from the URL
  const navigate = useNavigate();
  const [dish, setDish] = useState([]); // State to store dish details
  const [relatedDishes, setRelatedDishes] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState(dish?.selling_price || 0);
  const [successMessage,setSuccessMessage] = useState(false)
  const [warningMessage,setWarningMessage] = useState(false)
  console.log(dish, "pro");
  
  
  useEffect(() => {
    let timer;
    if (successMessage || warningMessage) {
      timer = setTimeout(() => {
        setSuccessMessage(false);
        setWarningMessage(false);
      }, 5000); // 5 seconds
    }

    // Cleanup the timer when the component unmounts or messages change
    return () => clearTimeout(timer);
  }, [successMessage, warningMessage]);



  // Fetch the dish details
  const handleQuantityChange = (operation) => {
    setQuantity((prevQuantity) => {
      let newQuantity =
        operation === "increment" ? prevQuantity + 1 : prevQuantity - 1;

      // Ensure quantity is within limits
      if (newQuantity < 1) newQuantity = 1;
      if (newQuantity > 10) newQuantity = 10;

      // Update price
      setPrice(newQuantity * dish.selling_price);

      return newQuantity;
    });
  };


  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
        
      const token = localStorage.getItem("token")
      const response = await axios.post(`${API_BASE_URL}/cart/`, 
        {
          dish: dish.id,
          quantity,
          total_price:price,
        },
        {
          headers: {
            Authorization: `Token ${token}`, // Example token from localStorage
            "Content-Type": "application/json", // Specify content type
          },
        }
      );

      if (response.status === 200) {
        
        setWarningMessage(true)
      }else if( response.status === 201){
        setSuccessMessage(true)
      }
       else {
        alert("Failed to add item to cart.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred while adding the item to the cart.");
    }
  };

  const dishDetail = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/product-details/${id}`);
      if (response.status === 200) {
        console.log(response.data, "product.data");
        setDish(response.data.product_data); // Set dish details
        setRelatedDishes(response.data.related_items);
      }
    } catch (error) {
      console.error("Error fetching dish details", error);
    }
  };

  // useEffect hook to call dishDetail on component mount or when id/token changes
  useEffect(() => {
    if (id) {
      dishDetail();
    }
  }, [id]);

  return (
    <>
      <Header />

      {/*  Breadcrumb Section Start  */}
      <div
        className="breadcrumb-wrapper bg-cover"
        style={{ backgroundImage: `url(${breadcrumb})` }}
      >
        <div className="container">
          <div className="page-heading center">
            <h1>product </h1>
            <ul className="breadcrumb-items">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <i className="far fa-chevron-right"></i>
              </li>
              <li>product</li>
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
                    {/* <img src={details1} alt="img" className="w-100"/> */}
                    <img
                      src={`${API_BASE_URL}/${dish.image}`}
                      alt={dish.name}
                      className="w-100"
                    />
                  </div>
                </div>
              </div>
              <div className="col-xl-5 col-lg-6">
                <div className="product-details-content">
                  <div className="star pb-3">
                    <span>-{dish.offer_percentage}%</span>
                    <div className="star-ratings">
                      {Array(5)
                        .fill()
                        .map((_, index) => (
                          <a href="#" key={index}>
                            <i
                              className={`fas fa-star ${
                                index < dish.ratings ? "" : "text-muted"
                              }`}
                            ></i>
                          </a>
                        ))}
                    </div>
                  </div>
                  <h3 className="pb-3">{dish.name}</h3>
                  <div className="price-list d-flex align-items-center mb-4">
                    <span>₹ {dish.selling_price}</span>
                    <del>₹ {dish.mrp_price}</del>
                  </div>
                  <p className="mb-4">
                    {dish.description ? dish.description.slice(0, 250) : ""}
                  </p>
                  <div className="social-icon d-flex align-items-center">
                    <a href="#">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="#">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href="#">
                      <i className="fab fa-vimeo-v"></i>
                    </a>
                    <a href="#">
                      <i className="fab fa-pinterest-p"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4">
                { successMessage ? (
                    <Alert className="mb-4" variant="filled" severity="success" style={{backgroundColor:'#00813d'}}>
                    Dish Added Successfully..!
                    </Alert>
                    ) :
                    ('')
                    }
                { warningMessage ? (
                   <Alert className="mb-4" variant="filled" severity="warning" style={{backgroundColor:'#ffb936'}} >
                   Cart Updated Successfully..!
                   </Alert>
                    ) :
                    ('' )
                    }
              
                <div className="product-form-wrapper">
                  <div className="delivery-time">
                    Delivery: <span>35 minutes</span>
                  </div>
                  <form id="contact-forms" onSubmit={handleSubmit}>
                    <div className="form-clt">
                      <label className="select-crust">Quantity</label>
                      <div className="quantity-basket">
                        <p className="qty">
                          <button
                            type="button"
                            className="qtyminus"
                            aria-hidden="true"
                            onClick={() => handleQuantityChange("decrement")}
                          >
                            &minus;
                          </button>
                          <input
                            type="number"
                            name="qty"
                            id="qty2"
                            min="1"
                            max="10"
                            step="1"
                            value={quantity}
                            readOnly
                          />
                          <button
                            type="button"
                            className="qtyplus"
                            aria-hidden="true"
                            onClick={() => handleQuantityChange("increment")}
                          >
                            +
                          </button>
                        </p>
                      </div>
                    </div>

                    <div className="form-clt">
                      <label className="select-crust">Price</label>: &nbsp; ₹{" "}
                      <span className="fw-bold text-danger">{price ? price.toFixed(2) : dish.selling_price}</span>
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
                  <a
                    href="#description"
                    data-bs-toggle="tab"
                    className="nav-link active"
                  >
                    Description
                  </a>
                </li>
              </ul>
              <div className="tab-content">
                <div id="description" className="tab-pane fade show active">
                  <div className="description-items">
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="description-content">
                          <h3>{dish.name}</h3>
                          <p>{dish.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div id="review" className="tab-pane fade">
                  <div className="review-items">
                    <div className="admin-items d-flex flex-wrap flex-md-nowrap align-items-center pb-4">
                      <div className="admin-img pb-4 pb-md-0 me-4">
                        <img src={review01} alt="image" />
                      </div>
                      <div className="content p-4">
                        <div className="head-content pb-1 d-flex flex-wrap justify-content-between">
                          <h5>
                            miklos salsa<span>27June 2024 at 5.44pm</span>
                          </h5>
                          <div className="star">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                          </div>
                        </div>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipiscing
                          elit. Curabitur vulputate vestibulum Phasellus rhoncus
                          dolor eget viverra pretium.Curabitur vulputate
                          vestibulum Phasellus rhoncus dolor eget viverra
                          pretium.
                        </p>
                      </div>
                    </div>
                    <div className="admin-items d-flex flex-wrap flex-md-nowrap align-items-center pb-4">
                      <div className="admin-img pb-4 pb-md-0 me-4">
                        <img src={review02} alt="image" />
                      </div>
                      <div className="content p-4">
                        <div className="head-content pb-1 d-flex flex-wrap justify-content-between">
                          <h5>
                            Ethan Turner <span>27June 2024 at 5.44pm</span>
                          </h5>
                          <div className="star">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                          </div>
                        </div>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipiscing
                          elit. Curabitur vulputate vestibulum Phasellus rhoncus
                          dolor eget viverra pretium.Curabitur vulputate
                          vestibulum Phasellus rhoncus dolor eget viverra
                          pretium.
                        </p>
                      </div>
                    </div>
                    <div className="admin-items d-flex flex-wrap flex-md-nowrap align-items-center pb-4">
                      <div className="admin-img pb-4 pb-md-0 me-4">
                        <img src={review01} alt="image" />
                      </div>
                      <div className="content p-4">
                        <div className="head-content pb-1 d-flex flex-wrap justify-content-between">
                          <h5>
                            miklos salsa<span>27June 2024 at 5.44pm</span>
                          </h5>
                          <div className="star">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                          </div>
                        </div>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipiscing
                          elit. Curabitur vulputate vestibulum Phasellus rhoncus
                          dolor eget viverra pretium.Curabitur vulputate
                          vestibulum Phasellus rhoncus dolor eget viverra
                          pretium.
                        </p>
                      </div>
                    </div>
                    <div className="admin-items d-flex flex-wrap flex-md-nowrap align-items-center pb-4">
                      <div className="admin-img pb-4 pb-md-0 me-4">
                        <img src={review02} alt="image" />
                      </div>
                      <div className="content p-4">
                        <div className="head-content pb-1 d-flex flex-wrap justify-content-between">
                          <h5>
                            Ethan Turner <span>27June 2024 at 5.44pm</span>
                          </h5>
                          <div className="star">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                          </div>
                        </div>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipiscing
                          elit. Curabitur vulputate vestibulum Phasellus rhoncus
                          dolor eget viverra pretium.Curabitur vulputate
                          vestibulum Phasellus rhoncus dolor eget viverra
                          pretium.
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
                              <input
                                type="text"
                                name="name"
                                id="name"
                                placeholder="Full Name"
                              />
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="form-clt">
                              <input
                                type="text"
                                name="email"
                                id="email"
                                placeholder="email addres"
                              />
                            </div>
                          </div>
                          <div
                            className="col-lg-12 wow fadeInUp"
                            data-wow-delay=".8"
                          >
                            <div className="form-clt-big form-clt">
                              <textarea
                                name="message"
                                id="message"
                                placeholder="message"
                              ></textarea>
                            </div>
                          </div>
                          <div
                            className="col-lg-6 wow fadeInUp"
                            data-wow-delay=".9"
                          >
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
            <h2 className="wow fadeInUp" data-wow-delay=".3s">
              RELATED PRODUCTS
            </h2>
          </div>
          <div className="row">
            {relatedDishes.map((dish) => (
              <div
                key={dish.id}
                className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay=".3s"
              >
                <div className="catagory-product-card-2 text-center">
                  {/* Product Image */}
                  <div className="catagory-product-image">
                    <img
                      src={`${API_BASE_URL}/${dish.image}`} // Use product image from backend data
                      alt={dish.name}
                      className="img-fluid"
                    />
                  </div>
                  {/* Product Content */}
                  <div className="catagory-product-content">
                    {/* Add to Cart Button */}
                    <Link to={`/product-details/${dish.id}`}>
                      {dish.name}
                      <div className="catagory-button">
                        <button className="theme-btn-2">
                          <i className="far fa-shopping-basket"></i> Add To Cart
                        </button>
                      </div>
                    </Link>
                    {/* Pricing */}
                    <div className="info-price d-flex align-items-center justify-content-center">
                      <p>-{dish.offer_percentage}%</p>
                      <h6>₹{parseFloat(dish.selling_price).toFixed(2)}</h6>
                      <span
                        style={{
                          textDecoration: "line-through",
                          textDecorationColor: "red",
                        }}
                      >
                        ₹{parseFloat(dish.mrp_price).toFixed(2)}
                      </span>
                    </div>
                    {/* Product Name */}
                    <h4>
                      <a href="#">{dish.name}</a>
                    </h4>
                    {/* Ratings */}
                    <div className="star">
                      {Array(5)
                        .fill()
                        .map((_, index) => (
                          <span
                            key={index}
                            className={`fas fa-star ${
                              index < dish.ratings ? "" : "text-white"
                            }`}
                          ></span>
                        ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Cta Banner Section Start  */}
      <section
        className="main-cta-banner-2 section-padding bg-cover"
        style={{ backgroundImage: `url(${mainctabg2})` }}
      >
        <div className="tomato-shape-left float-bob-y">
          <img src={tomato} alt="shape-img" />
        </div>
        <div className="chili-shape-right float-bob-y">
          <img src={chilli} alt="shape-img" />
        </div>
        <div className="container">
          <div className="main-cta-banner-wrapper-2 d-flex align-items-center justify-content-between">
            <div className="section-title mb-0">
              <span className="theme-color-3 wow fadeInUp">
                crispy, every bite taste
              </span>
              <h2 className="text-white wow fadeInUp" data-wow-delay=".3s">
                30 minutes fast <br />
                <span className="theme-color-3">delivery</span> challage
              </h2>
            </div>
            <a
              href=""
              className="theme-btn bg-white wow fadeInUp"
              data-wow-delay=".5s"
            >
              <span className="button-content-wrapper d-flex align-items-center">
                <span className="button-icon">
                  <i className="flaticon-delivery"></i>
                </span>
                <span className="button-text">order now</span>
              </span>
            </a>
            <div className="delivery-man">
              <img src={deliveryman2} alt="img" />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ProductDetails;
