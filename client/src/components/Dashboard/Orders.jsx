import DashboardHeader from "./DashboardHeader";
import DashboardSideNav from "./DashboardSideNav";
import DashboardFooter from "./DashboardFooter";
import VerifiedIcon from "@mui/icons-material/Verified";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { API_BASE_URL } from "../context/data";
import "./smooth.css";
import Swal from "sweetalert2";
import CloseIcon from '@mui/icons-material/Close';
import DoneIcon from '@mui/icons-material/Done';
const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [orderCategory, setOrderCategory] = useState([]);
  const [newOrders, setNewOrders] = useState([]);
  const [delivaryPartner, setDelivaryPartner] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [refresh, setRefresh] = useState(false); // State to trigger re-fetching
  console.log(delivaryPartner, "response.delivaryPartner");

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${API_BASE_URL}/orders/`);

        setOrders(response.data.last_8_orders);
        setOrderCategory(response.data.status_counts);
        setDelivaryPartner(response.data.delivary_user)
        setLoading(false);
      } catch (error) {
        console.error("Error fetching dishes:", error);
        setError(true);
      }
    };

    fetchOrders();
  }, []);

  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  const [currentPage, setCurrentPage] = useState(1);
  const ordersPerPage = 8;

  // Calculate the orders for the current page
  const indexOfLastOrder = currentPage * ordersPerPage;
  const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
  const currentOrders = orders.slice(indexOfFirstOrder, indexOfLastOrder);

  // Calculate total pages
  const totalPages = Math.ceil(orders.length / ordersPerPage);

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };


  const handleStatusChange = async (unique_id) => {
    // Determine if status is being set to "Shipped"
    const { value: status } = await Swal.fire({
      title: "Change Order Status",
      text: "Select a new status for this order.",
      input: "select",
      inputOptions: {
        Pending: "Pending",
        Shipped: "Shipped",
        Delivered: "Delivered",
        Canceled: "Canceled",
      },
      inputPlaceholder: "Select status",
      showCancelButton: true,
      confirmButtonText: "Change Status",
      cancelButtonText: "Cancel",
      imageUrl:
        "https://cdni.iconscout.com/illustration/premium/thumb/businessman-having-doubt-illustration-download-in-svg-png-gif-file-formats--confusing-confusion-confused-question-business-activity-pack-professionals-illustrations-4185610.png?f=webp",
      imageWidth: 300,
      imageHeight: 350,
      inputValidator: (value) => {
        if (!value) {
          return "Please select a status!";
        }
      },
    });
  
    if (status === "Shipped") {
      // Select delivery partner when status is set to Shipped
      const deliveryOptions = delivaryPartner.reduce((acc, partner) => {
        acc[partner.id] = partner.name;
        return acc;
      }, {});
  
      const { value: deliveryPartnerId } = await Swal.fire({
        title: "Assign Delivery Partner",
        text: "Select a delivery partner for this order.",
        input: "select",
        inputOptions: deliveryOptions,
        inputPlaceholder: "Select delivery partner",
        showCancelButton: true,
        confirmButtonText: "Assign",
        cancelButtonText: "Cancel",
        inputValidator: (value) => {
          if (!value) {
            return "Please select a delivery partner!";
          }
        },
      });
  
      if (deliveryPartnerId) {
        // Confirm assignment
        Swal.fire({
          title: "Are you sure?",
          text: `Assign delivery partner "${deliveryOptions[deliveryPartnerId]}" and change status to "Shipped"?`,
          icon: "question",
          showCancelButton: true,
          confirmButtonText: "Yes, assign and change!",
          cancelButtonText: "Cancel",
        }).then((result) => {
          if (result.isConfirmed) {
            axios
              .patch(`${API_BASE_URL}/orders/${unique_id}/`, {
                status,
                delivery_partner_id: deliveryPartnerId,
              })
              .then(() => {
                setRefresh(!refresh); // Trigger re-fetching of orders
                Swal.fire(
                  "Updated!",
                  `Order status changed to "Shipped" and delivery partner assigned.`,
                  "success"
                );
              })
              .catch(() => {
                Swal.fire(
                  "Error!",
                  "There was an issue assigning the delivery partner or changing the status.",
                  "error"
                );
              });
          }
        });
      }
    } else if (status) {
      // For other statuses
      Swal.fire({
        title: "Are you sure?",
        text: `Do you want to change the order status to "${status}"?`,
        icon: "question",
        showCancelButton: true,
        confirmButtonText: "Yes, change it!",
        cancelButtonText: "Cancel",
      }).then((result) => {
        if (result.isConfirmed) {
          axios
            .patch(`${API_BASE_URL}/orders/${unique_id}/`, { status })
            .then(() => {
              setRefresh(!refresh); // Trigger re-fetching of orders
              Swal.fire(
                "Updated!",
                `Order status has been changed to "${status}".`,
                "success"
              );
            })
            .catch(() => {
              Swal.fire(
                "Error!",
                "There was an issue changing the order status.",
                "error"
              );
            });
        }
      });
    }
  };
  

  const handleCancelOrder = (unique_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "Do you want to cancel this order?",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, cancel it!",
      cancelButtonText: "No, keep it",
      imageUrl: "https://cdni.iconscout.com/illustration/premium/thumb/cancel-order-illustration-download-in-svg-png-gif-file-formats--cancelled-refusal-rejected-online-shopping-pack-e-commerce-illustrations-6506585.png", // Cancel GIF
      imageWidth: 400,
      imageHeight: 300,
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .patch(`${API_BASE_URL}/orders/${unique_id}/`, { status: "Canceled" })
          .then(() => {
            setRefresh(!refresh); // Trigger re-fetching of orders
            Swal.fire(
              "Cancelled!",
              "The order has been successfully cancelled.",
              "success"
            );
          })
          .catch(() => {
            Swal.fire(
              "Error!",
              "There was an issue cancelling the order.",
              "error"
            );
          });
      }
    });
  };

  const handleCategoryClick = async (category) => {
    try {
      setLoading(true);
      const response = await axios.post(`${API_BASE_URL}/orders-status/${category}/`);
      setOrders(response.data); // Assuming the API returns filtered orders
      setLoading(false);
    } catch (error) {
      console.error(`Error fetching ${category} orders:`, error);
      setError(true);
      setLoading(false);
    }
  };


  
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleString("en-US", {
      weekday: "short",   // Fri
      day: "2-digit",     // 22
      month: "short",     // Nov
      year: "numeric",    // 2024
      hour: "2-digit",    // 01
      minute: "2-digit",  // 20
      hour12: true,       // AM/PM
    });
  };
  
  

  return (
    <>
      <DashboardSideNav />

      <main
        className="main-content"
        style={{
          background: 'url("/src/assets/dashboard/images/dashboard.png")',
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
        }}
      >
        <DashboardHeader />
        <div className="content-inner mt-5 py-0">
          <div className="row">
            <div className="col">
              <div className="card bg-transparent">
                <div className="card-header d-flex align-items-center justify-content-between p-0 m-0 border-bottom-0">
                  <div className="header-title">
                    <h4 className="card-title">Orders</h4>
                  </div>
                </div>
                <div className="card-body px-0">
                  <div className="iq-col-masonry m-0">
                    <button
                      type="button"
                      className="btn btn-outline-info  rounded iq-col-masonry-block"
                      onClick={() => handleCategoryClick("Pending")}
                    >
                      <SentimentVeryDissatisfiedIcon className="me-1" />
                      Pendding Orders ({orderCategory.Pending || 0})
                    </button>

                    <button
                      type="button"
                      className="btn btn-outline-warning rounded iq-col-masonry-block"
                      onClick={() => handleCategoryClick("Shipped")}
                    >
                      <LocalShippingIcon className="me-1" />
                      Shipped Orders ({orderCategory.Shipped || 0})
                    </button>

                    <button
                      type="button"
                      className="btn btn-outline-success rounded iq-col-masonry-block"
                      onClick={() => handleCategoryClick("Delivered")}
                    >
                      <VerifiedIcon className="me-1" />
                      Delivered Orders ({orderCategory.Delivered || 0})
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-danger rounded iq-col-masonry-block"
                      onClick={() => handleCategoryClick("Canceled")}
                    >
                      <DeleteForeverIcon className="me-1" />
                      Canceled Orders ({orderCategory.Canceled || 0})
                    </button>
                    <input
                      type="search"
                      className="form-control"
                      placeholder="Search..."
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 row-cols-xxl-4">
            {orders.map((order, index) => (
              <div className="col" key={index}>
                  <div className="card order-history-card">
                    <div className="card-body">
                      {/* Order Header */}
                      <div className="d-flex align-items-center justify-content-between mb-5">
                        <div>
                          <Link to={`/order-detail/${order.unique_id}/`}>
                          <h6 className="heading-title mb-2 text-success fw-bold">
                            Order #{order.unique_id}
                          </h6>
                          </Link>
                          <p className="mb-0">
                            {formatDate(order.order_at)}
                          </p>
                        </div>
                        <img
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIf4R5qPKHPNMyAqV-FjS_OTBB8pfUV29Phg&s"
                          className="img-fluid rounded-pill avatar-50"
                          alt="Dish"
                        />
                      </div>

                      {/* Purchases */}
                      <div
                        className={`purchases-list ${
                          expanded ? "expanded" : "collapsed"
                        }`}
                      >
                        {order.purchases.map((purchase, i) => (
                          <div className="d-flex mb-4" key={i}>
                            <img
                              src={`${API_BASE_URL}/${purchase.dish_image}`}
                              className="img-fluid rounded-pill avatar-60"
                              alt={purchase.dish_name}
                            />
                            <div className="ms-4 order-history">
                              <h6 className="mb-2 heading-title fw-bolder">
                                {purchase.dish_name}
                              </h6>

                              <div className="d-flex justify-content-between align-items-center">
                                <h6 className="heading-title fw-bolder">
                                  ₹ {purchase.total_price}
                                </h6>
                                <h6 className="heading-title fw-bolder">
                                  Qty: {purchase.quantity}
                                </h6>
                              </div>
                              {i !== order.purchases.length - 1 && (
                                <hr className="my-4" />
                              )}
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* View More Button */}
                      {order.purchases.length > 1 && (
                        <div className="text-center mt-3">
                          <button
                            className="btn btn-sm btn-outline-primary"
                            onClick={(e) => {
                              e.preventDefault();
                              toggleExpand();
                            }}
                          >
                            {expanded ? "View Less" : "View More"}
                          </button>
                        </div>
                      )}

                      {/* Footer */}
                      <hr />
                      <div className="d-flex justify-content-between align-items-center">
                        <div>
                          <p className="mb-0">
                            X{order.purchases.length} items
                          </p>
                          <h6 className="heading-title fw-bolder">
                            ₹ {order.total_price}
                          </h6>
                        </div>
                        <div
                          className="d-flex align-items-center"
                         
                        >
                          {order.status === "Delivered" ? (
                            // If status is "Delivered", show only the "Completed" button
                            <button className="btn btn-icon btn-success rounded" onClick={() => handleStatusChange(order.unique_id)} >
                              <span className="btn-inner d-flex align-items-center">
                                Delivered
                              </span>
                            </button>
                          ) : (
                            // If status is not "Delivered", show both "Completed" and "Rejected" buttons
                            <>
                               <button
                                className="btn btn-icon btn-outline-success rounded ctc-button"
                                onClick={() => handleStatusChange(order.unique_id)}
                              >
                               <span className="btn-inner d-flex align-items-center">
                            <span>
                              <svg
                                width="12"
                                height="8"
                                viewBox="0 0 12 8"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M0.667969 4.09434L3.93567 7.33366L10.668 0.666992"
                                  stroke="currentColor"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </span>
                            </span>
                              </button>
                              <button
                                className="btn btn-icon btn-outline-danger rounded ctc-button ms-3"
                                onClick={() => handleCancelOrder(order.unique_id)}
                              >
                                <span className="btn-inner d-flex align-items-center">
                                  <span>
                                    <svg
                                      width="16"
                                      height="16"
                                      viewBox="0 0 16 16"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M10.6654 5.33496L5.33203 10.6683"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                      <path
                                        d="M10.6643 10.6663L5.33203 5.33301"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                    </svg>
                                  </span>
                                 
                                </span>
                              </button>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                
              </div>
            ))}
          </div>
          <div className="row mb-4 text-center">
            <div className="col-12">
              <a href="#" className="btn btn-white rounded">
                {/* Pagination */}
                <ul className="pagination justify-content-center mt-4">
                  {/* Previous Button */}
                  <li
                    className={`page-item ${
                      currentPage === 1 ? "disabled" : ""
                    }`}
                    onClick={() =>
                      currentPage > 1 && handlePageChange(currentPage - 1)
                    }
                  >
                    <span className="page-link">Previous</span>
                  </li>

                  {/* Page Numbers */}
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                    (page) => (
                      <li
                        key={page}
                        className={`page-item ${
                          currentPage === page ? "active" : ""
                        }`}
                        onClick={() => handlePageChange(page)}
                      >
                        <span className="page-link">{page}</span>
                      </li>
                    )
                  )}

                  {/* Next Button */}
                  <li
                    className={`page-item ${
                      currentPage === totalPages ? "disabled" : ""
                    }`}
                    onClick={() =>
                      currentPage < totalPages &&
                      handlePageChange(currentPage + 1)
                    }
                  >
                    <span className="page-link">Next</span>
                  </li>
                </ul>
              </a>
            </div>
          </div>
        </div>

        {/* <!-- Footer Section Start */}
        <DashboardFooter />
        {/* <!-- Footer Section End   */}
      </main>
    </>
  );
};

export default Orders;
