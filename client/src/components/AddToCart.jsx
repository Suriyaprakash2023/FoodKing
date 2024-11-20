import React, { useEffect, useState } from "react";
import breadcrumb from "../assets/website/img/banner/breadcrumb.jpg";
import food1 from "../assets/website/img/banner/main-cta-bg.jpg";
import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import { API_BASE_URL } from "../components/context/data";
import axios from "axios";
import Swal from "sweetalert2";

const AddToCart = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const cartDishes = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(`${API_BASE_URL}/cart/`, {
          headers: {
            Authorization: `Token ${token}`,
            "Content-Type": "application/json",
          },
        });

        if (response.status === 200) {
          console.log(response.data, "response.data");
          setCart(response.data);
        }
      } catch (error) {
        console.error("Error fetching dishes:", error);
      }
    };

    cartDishes();
  }, []);

  const handleRemove = async (id) => {
    const token = localStorage.getItem("token"); // Get the token from local storage or context
  
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "Do you want to delete this item from your cart?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    });
  
    if (result.isConfirmed) {
      try {
        // Include token in the Authorization header
        await axios.delete(`${API_BASE_URL}/cart/${id}/`, {
          headers: {
            Authorization: `Token ${token}`, // Use the token for authentication
          },
        });
  
        setCart(cart.filter((item) => item.id !== id)); // Update local state
        Swal.fire("Deleted!", "Your item has been removed.", "success");
      } catch (error) {
        Swal.fire("Error!", "Failed to delete the item. Try again.", "error");
        console.error("Error deleting item:", error);
      }
    }
  };
  

  return (
    <>
      <Header />
      {/* Breadcrumb Section Start  */}
      <div
        className="breadcrumb-wrapper bg-cover"
        style={{ backgroundImage: `url(${breadcrumb})` }}
      >
        <div className="container">
          <div className="page-heading center">
            <h1>shop Cart</h1>
            <ul className="breadcrumb-items">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <i className="far fa-chevron-right"></i>
              </li>
              <li>shop Cart</li>
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
                          <th>S.No</th>
                          <th>Product</th>
                          <th>Price</th>
                          <th>Quantity</th>
                          <th>Total</th>
                          <th>Remove</th>
                        </tr>
                      </thead>
                      <tbody>
                        {cart.length > 0 ? (
                          cart.map((item, index) => (
                            <tr className="cart-item" key={item.id}>
                              <td>{index + 1}</td>
                              <td className="cart-item-info">
                                <img
                                  src={`${API_BASE_URL}/${item.dish_image}`}
                                  alt={item.dish_name}
                                  style={{ width: "50px", height: "50px" }}
                                />
                                <span>{item.dish_name}</span>
                              </td>
                              <td className="cart-item-price">
                                ₹ {item.dish_price}
                              </td>
                              <td className="">
                                <span className="cart-item-quantity-amount">
                                  {item.quantity}
                                </span>
                              </td>
                              <td>₹ {item.total_price}</td>
                              <td className="cart-item-remove">
                                <a
                                  href="#0"
                                  onClick={() => handleRemove(item.id)}
                                >
                                  <i className="fas fa-trash-alt text-danger"></i>
                                </a>
                              </td>
                            </tr>
                          ))
                        ) : (
                          <tr>
                            <td colSpan="6" style={{ textAlign: "center" }}>
                              Your cart is empty.
                            </td>
                          </tr>
                        )}
                      </tbody>
                    </table>
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
                        <span>₹320.00</span>
                      </li>
                      <li>
                        <span>Shipping</span>
                        <span>₹10</span>
                      </li>
                      <li>
                        <span>Total</span>
                        <span>₹320.00</span>
                      </li>
                    </ul>
                    <div className="chck">
                      <a className="theme-btn border-radius-none">Checkout</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Cta Banner Section Start  */}
      <section
        className="main-cta-banner-2 section-padding bg-cover"
        style={{ backgroundImage: `url(${food1})` }}
      >
        <div className="tomato-shape-left float-bob-y">
          <img src="/src/assets/img/tomato.png" alt="shape-img" />
        </div>
        <div className="chili-shape-right float-bob-y">
          <img src="/src/assets/img/chilli.png" alt="shape-img" />
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
              className="theme-btn bg-white wow fadeInUp hover-bg-danger"
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
              <img src="/src/assets/img/delivery-man-2.png" alt="img" />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default AddToCart;
