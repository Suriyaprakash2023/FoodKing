import React, { useEffect, useState } from "react";
import breadcrumb from "../assets/website/img/banner/breadcrumb.jpg";
import food1 from "../assets/website/img/banner/main-cta-bg.jpg";
import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import { API_BASE_URL } from "../components/context/data";
import axios from "axios";
import Swal from "sweetalert2";

const trackingData = {
  productName: "Some Jewellery Name",
  category: "Category",
  price: "₹ 23,456",
  steps: [
    { title: "Order Received", date: "21st November, 2019" },
    { title: "Order Processed", date: "21st November, 2019" },
    { title: "Manufacturing In Progress", date: "21st November, 2019" },
    { title: "Order Dispatched", date: "21st November, 2019" },
    { title: "Order Delivered", date: "21st November, 2019" },
  ],
};

const AddToCart = () => {
  const [cart, setCart] = useState([]);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Function to fetch the orders
    const fetchOrders = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/user-orders/`, {
          headers: {
            Authorization: `Token ${localStorage.getItem("token")}`, // Add token for authentication
          },
        });
        setOrders(response.data);
      } catch (err) {
        setError("Failed to load orders.");
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  useEffect(() => {
    const cartDishes = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(`${API_BASE_URL}/user-orders/`, {
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

  const [subtotal, setSubtotal] = useState(0); // Ensure this is a number
  const shipping = 50; // Fixed shipping cost
  const [total, setTotal] = useState(0);

  useEffect(() => {
    // Convert total_price to numbers and calculate subtotal
    const calculatedSubtotal = cart.reduce(
      (sum, item) => sum + Number(item.total_price),
      0
    );
    setSubtotal(calculatedSubtotal);

    // Calculate total
    setTotal(calculatedSubtotal + shipping);
  }, [cart]);

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

  const handleCheckout = () => {
    // Transform cart data into the desired format
    const formattedCart = cart.map((item) => ({
      id: item.id, // Keep the cart item ID
      quantity: item.quantity, // Keep the quantity
    }));

    // API payload
    const payload = {
      cart_items: formattedCart,
    };

    Swal.fire({
      title: "Are you sure you want to buy?",
      text: "Your cart items will be processed!",
      imageUrl:
        "https://i.pinimg.com/originals/e5/6d/4a/e56d4afe4614e549e07f6995467c57a4.gif", // Example animation or GIF
      imageWidth: 400,
      imageHeight: 200,
      showCancelButton: true,
      confirmButtonText: "Confirm",
      cancelButtonText: "Cancel",
      reverseButtons: true,
    }).then((result) => {
      if (result.isConfirmed) {
        const token = localStorage.getItem("token");
        // Send cart data using Axios
        axios
          .post(`${API_BASE_URL}/purchase-cart-items/`, payload, {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Token ${token}`,
            },
          })
          .then((response) => {
            Swal.fire(
              "Purchased!",
              "Your order has been placed successfully.",
              "success"
            );
            // Optionally clear the cart
            setCart([]);
          })
          .catch((error) => {
            Swal.fire(
              "Error!",
              "Something went wrong. Please try again later.",
              "error"
            );
          });
      }
    });
  };

  const [currentStep, setCurrentStep] = useState(0);

  const handleTrackClick = () => {
    Swal.fire({
      title: "Order Tracking",
      html: generateTrackingInfo(trackingData, currentStep),
      showCloseButton: true,
      focusConfirm: false,
      confirmButtonText: "Close",
      didOpen: () => {
        startLiveTracking();
      },
      willClose: () => {
        clearInterval(window.liveTrackingInterval);
      },
    });
  };

  const generateTrackingInfo = (data, currentStep) => {
    return `
      <div style="text-align: left; font-size: 14px;">
        <div style="margin-bottom: 10px;">
          <img src="https://via.placeholder.com/50" alt="product" style="border-radius: 50%;" />
          <h4 style="margin: 0;">${data.productName}</h4>
          <p style="margin: 0; color: grey;">${data.category}</p>
          <h5 style="margin: 0;">${data.price}</h5>
        </div>
        <hr />
        <ul style="list-style: none; padding: 0; font-size: 14px;">
          ${data.steps
            .map(
              (step, index) => `
                <li style="display: flex; align-items: center; margin: 10px 0;">
                  <div style="
                    width: 10px; 
                    height: 10px; 
                    ${
                      index <= currentStep
                        ? "background-color: orange;"
                        : "background-color: grey;"
                    } 
                    border-radius: 50%; 
                    margin-right: 10px;
                  "></div>
                  <span>${step.title} <br />
                  <small style="color: grey;">${step.date}</small></span>
                </li>
              `
            )
            .join("")}
        </ul>
      </div>
    `;
  };

  const startLiveTracking = () => {
    let step = 0;
    window.liveTrackingInterval = setInterval(() => {
      if (step < trackingData.steps.length) {
        setCurrentStep(step);
        Swal.update({
          html: generateTrackingInfo(trackingData, step),
        });
        step++;
      } else {
        clearInterval(window.liveTrackingInterval);
      }
    }, 2000); // Update every 2 seconds
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
            <h1>Order Track</h1>
            <ul className="breadcrumb-items">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <i className="far fa-chevron-right"></i>
              </li>
              <li>Order Track</li>
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

                          <th>Quantity</th>
                          <th>Total</th>
                          <th>Track</th>

                          <th>Remove</th>
                        </tr>
                      </thead>
                      <tbody>
                      {orders.length > 0 ? (
          orders.map((order, index) => (
            <tr key={order.id}>
              <td>{index + 1}</td>
              <td>{order.id}</td>
              <td>₹ {order.total_price}</td>
              <td>{order.status}</td>
              <td>{new Date(order.created_at).toLocaleString()}</td>
              <td>
                {order.purchases.length > 0 ? (
                  <ul>
                    {order.purchases.map((purchase, idx) => (
                      <li key={idx}>
                        <strong>Item ID:</strong> {purchase.item}, 
                        <strong> Quantity:</strong> {purchase.quantity}, 
                        <strong> Price:</strong> ₹ {purchase.total_price}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <span>No purchases</span>
                )}
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="6" style={{ textAlign: "center" }}>
              No orders found.
            </td>
          </tr>
        )}
                      </tbody>
                    </table>
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
