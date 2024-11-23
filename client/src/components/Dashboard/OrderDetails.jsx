import React,{useEffect, useState} from "react";
import DashboardSideNav from "../Dashboard/DashboardSideNav";
import DashboardHeader from "../Dashboard/DashboardHeader";
import {Link,useParams,useNavigate,useLocation } from "react-router-dom";
import {API_BASE_URL} from '../context/data';
import axios from "axios";
import Swal from "sweetalert2";

const OrderDetails = () => {
  
    // useEffect hook to call dishDetail on component mount or when id/token changes
    const [order, setOrder] = useState(null);
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [refresh, setRefresh] = useState(false); // To trigger re-fetch
  
    const { id } = useParams();
  
    // Fetch Order Details
    useEffect(() => {
      const orderDetail = async () => {
        try {
          if (!id) {
            console.error("No ID provided");
            return;
          }
  
          console.log(`Fetching order details for ID: ${id}`);
          const response = await axios.post(`${API_BASE_URL}/order-detail/${id}/`);
          if (response.status === 200) {
            console.log(response.data, "response.data");
            setOrder(response.data);
            setUser(response.data.user);
          } else {
            console.warn("Failed to fetch order details:", response.status);
          }
        } catch (error) {
          console.error("Error fetching order details:", error.response || error);
        } finally {
          setLoading(false);
        }
      };
  
      orderDetail();
    }, [id, refresh]); // Re-fetch when `id` or `refresh` changes
  
    if (loading) {
      return <p>Loading order details...</p>;
    }
  
    if (!order || !user) {
      return <p>Error: Unable to fetch order details.</p>;
    }
  
    const handleStatusChange = async (id) => {
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
        imageUrl: "https://cdni.iconscout.com/illustration/premium/thumb/businessman-having-doubt-illustration-download-in-svg-png-gif-file-formats--confusing-confusion-confused-question-business-activity-pack-professionals-illustrations-4185610.png?f=webp",
        imageWidth: 400,
        imageHeight: 350,
        inputValidator: (value) => {
          if (!value) {
            return "Please select a status!";
          }
        },
      });
  
      if (status) {
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
              .patch(`${API_BASE_URL}/orders/${id}/`, { status })
              .then(() => {
                setRefresh(!refresh); // Trigger re-fetching of order details
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
  
    const handleCancelOrder = (id) => {
      Swal.fire({
        title: "Are you sure?",
        text: "Do you want to cancel this order?",
        showCancelButton: true,
        confirmButtonColor: "#d33",
        cancelButtonColor: "#3085d6",
        confirmButtonText: "Yes, cancel it!",
        cancelButtonText: "No, keep it",
        imageUrl: "https://cdni.iconscout.com/illustration/premium/thumb/cancel-order-illustration-download-in-svg-png-gif-file-formats--cancelled-refusal-rejected-online-shopping-pack-e-commerce-illustrations-6506585.png",
        imageWidth: 400,
        imageHeight: 300,
      }).then((result) => {
        if (result.isConfirmed) {
          axios
            .patch(`${API_BASE_URL}/orders/${id}/`, { status: "Canceled" })
            .then(() => {
              setRefresh(!refresh); // Trigger re-fetching of order details
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
      <main className="main-content">
        <DashboardHeader />

        <div className="content-inner mt-5 py-0">
          <div className="d-flex flex-wrap justify-content-between">
            <div className="d-flex align-items-center flex-wrap mb-4 mb-lg-0">
             
            <div className="d-flex align-items-end mx-5">
                <Link to={'/orders'}>
                  <span className="text-dark fw-bolder">Orders /</span>
                </Link>
                <span className="mb-0 fw-bolder">Orders Details</span>
              </div>
              <button
                type="button"
                className="btn btn-outline-primary me-5 rounded-pill"
              >
                #{id}
              </button>
              
            </div>
            <div className="d-flex flex-wrap">
              <button
                type="button"
                className="btn btn-outline-danger rounded-pill"
                onClick={() => handleCancelOrder(id)}
              >
                Cancel Order
              </button>
              <button
                type="button"
                className="btn text-white btn-success ms-3 rounded-pill"
                onClick={() => handleStatusChange(id)}
              >
                Delivered
              </button>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-md-12 col-lg-4 col-xl-3">
              <div className="card ">
                <div className="card-body p-0">
                  <div className="p-4 border-bottom">
                    <div className="text-center">
                      <img
                        src="/src/assets/dashboard//images/order-details/1.png"
                        className="img-fluid avatar-rounded avatar-100"
                        alt="profile-image"
                      />
                      <h6 className="mt-3 heading-title fw-bolder">
                       {user.name}
                      </h6>
                      <button
                        type="button"
                        className="btn btn-outline-primary mt-3 rounded-pill"
                      >
                        Customer
                      </button>
                    </div>
                    <div className="d-flex mt-4">
                      <svg
                        width="19"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M11.5317 12.4724C15.5208 16.4604 16.4258 11.8467 18.9656 14.3848C21.4143 16.8328 22.8216 17.3232 19.7192 20.4247C19.3306 20.737 16.8616 24.4943 8.1846 15.8197C-0.493478 7.144 3.26158 4.67244 3.57397 4.28395C6.68387 1.17385 7.16586 2.58938 9.61449 5.03733C12.1544 7.5765 7.54266 8.48441 11.5317 12.4724Z"
                          stroke="#232D42"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span className="mb-0 ms-3 fw-bolder text-primary">
                        +91 {user.mobile_number}
                      </span>
                    </div>
                    <div className="d-flex mt-3 ">
                      <svg
                        width="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M21 10.8421C21 16.9172 12 23 12 23C12 23 3 16.9172 3 10.8421C3 4.76697 7.02944 1 12 1C16.9706 1 21 4.76697 21 10.8421Z"
                          stroke="#07143B"
                          strokeWidth="1.5"
                        />
                        <circle
                          cx="12"
                          cy="9"
                          r="3"
                          stroke="#07143B"
                          strokeWidth="1.5"
                        />
                      </svg>
                      <span className="mb-0 ms-3 text-dark fw-bolder">
                        {user.address}, {user.city}.
                      </span>
                    </div>
                  </div>
                  
                </div>
              </div>
              <div className="card ">
                <div className="card-body">
                  <div className="text-center">
                    <h4 className="fw-bolder mb-2">Delivery Guy</h4>
                    <img
                      src="/src/assets/dashboard/images/order-details/2.png"
                      className="img-fluid avatar-rounded avatar-100 mt-5"
                      alt="profile-image"
                    />
                    <h6 className="mt-3 heading-title fw-bolder">
                      {" "}
                      Robert Fox
                    </h6>
                  </div>
                  <div className="d-flex mt-4">
                    <svg
                      width="19"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M11.5317 12.4724C15.5208 16.4604 16.4258 11.8467 18.9656 14.3848C21.4143 16.8328 22.8216 17.3232 19.7192 20.4247C19.3306 20.737 16.8616 24.4943 8.1846 15.8197C-0.493478 7.144 3.26158 4.67244 3.57397 4.28395C6.68387 1.17385 7.16586 2.58938 9.61449 5.03733C12.1544 7.5765 7.54266 8.48441 11.5317 12.4724Z"
                        stroke="#232D42"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span className="mb-0 ms-3 fw-bolder text-primary">
                      (480) 555-0103
                    </span>
                  </div>
                  <div className="d-flex mt-3 ">
                    <svg
                      width="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M21 10.8421C21 16.9172 12 23 12 23C12 23 3 16.9172 3 10.8421C3 4.76697 7.02944 1 12 1C16.9706 1 21 4.76697 21 10.8421Z"
                        stroke="#07143B"
                        strokeWidth="1.5"
                      />
                      <circle
                        cx="12"
                        cy="9"
                        r="3"
                        stroke="#07143B"
                        strokeWidth="1.5"
                      />
                    </svg>
                    <span className="mb-0 ms-3 text-dark fw-bolder">
                      6391 Elgin St. Celina, Delaware 10299
                    </span>
                  </div>
                </div>
              </div>
           
            </div>
            <div className="col-md-12 col-lg-8 col-xl-9">
              <div className="card table-responsive">
                <table className="table table-borderless product-table rounded">
                  <thead className="bg-primary ">
                    <tr>
                      <th>
                        <span className="heading-title rowpad text-white">
                          Items
                        </span>
                      </th>
                      <th>
                        <span className="heading-title rowpad text-white">
                          Qty
                        </span>
                      </th>
                      <th>
                        <span className="heading-title rowpad text-white">
                          Price
                        </span>
                      </th>
                      <th>
                        <span className="heading-title rowpad text-white">
                          Total Price
                        </span>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                  {order.purchases.map((purchase, index) => (
          <tr key={index} className="cart_item border-bottom">
            {/* Item Details */}
            <td>
              <div className="d-flex align-items-center">
                <img
                  src={`${API_BASE_URL}/${purchase.dish_image}`}
                  className="img-fluid avatar-rounded avatar-70"
                  alt={purchase.dish_name}
                />
                <div className="d-flex ms-4">
                  <div>
                    <h6 className="heading-title text-primary">
                      {purchase.dish_category}
                    </h6>
                    <p className="mb-0 fw-bolder">{purchase.dish_name}</p>
                    <div className="d-flex mb-2 mt-3">
                      {/* Render dish ratings */}
                      {Array.from({ length: purchase.dish_ratings }).map(
                        (_, i) => (
                          <svg
                            key={i}
                            width="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M13.1043 4.17701L14.9317 7.82776C15.1108 8.18616 15.4565 8.43467 15.8573 8.49218L19.9453 9.08062C20.9554 9.22644 21.3573 10.4505 20.6263 11.1519L17.6702 13.9924C17.3797 14.2718 17.2474 14.6733 17.3162 15.0676L18.0138 19.0778C18.1856 20.0698 17.1298 20.8267 16.227 20.3574L12.5732 18.4627C12.215 18.2768 11.786 18.2768 11.4268 18.4627L7.773 20.3574C6.87023 20.8267 5.81439 20.0698 5.98724 19.0778L6.68385 15.0676C6.75257 14.6733 6.62033 14.2718 6.32982 13.9924L3.37368 11.1519C2.64272 10.4505 3.04464 9.22644 4.05466 9.08062L8.14265 8.49218C8.54354 8.43467 8.89028 8.18616 9.06937 7.82776L10.8957 4.17701C11.3477 3.27433 12.6523 3.27433 13.1043 4.17701Z"
                              fill="#EA6A12"
                            />
                          </svg>
                        )
                      )}
                      <small className="ms-1 text-dark">
                        ({purchase.dish_ratings} reviews)
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            </td>

            {/* Quantity */}
            <td className="text-center">
              <span className="rowpad">{purchase.quantity}x</span>
            </td>

            {/* Price */}
            <td className="text-center">
              <span className="rowpad">₹ {purchase.total_price}</span>
            </td>

            {/* Total Price */}
            <td className="text-center">
              <span className="rowpad">₹ {purchase.total_price}</span>
            </td>
          </tr>
        ))}
                    
                  </tbody>
                </table>
              </div>
              <div className="card">
                <div className="card-body">
                  <div className="checkout-panel">
                    <div className="panel-body">
                      <div className="stepper">
                        <div className="step active">
                          <a
                            className="persistant-disabled"
                            data-bs-toggle="tab"
                            role="tablist"
                            title="Step 1"
                          >
                            <span className="round-tab">
                              <svg
                                width="24"
                                viewBox="0 0 40 40"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M18.8132 8.31901C19.1763 8.10979 19.5847 8 20 8C20.4153 8 20.8237 8.10979 21.1868 8.31901L30.3718 13.6128C30.5622 13.7227 30.7209 13.8834 30.8313 14.0783C30.9418 14.2732 31 14.4952 31 14.7213V25.1657C30.9999 25.618 30.8832 26.0621 30.6621 26.4519C30.441 26.8417 30.1234 27.163 29.7423 27.3826L21.1868 32.3163C20.8237 32.5255 20.4153 32.6353 20 32.6353C19.5847 32.6353 19.1763 32.5255 18.8132 32.3163L10.2577 27.3826C9.87677 27.1631 9.55933 26.842 9.33821 26.4524C9.11709 26.0629 9.00032 25.619 9 25.1669V14.7213C8.99999 14.4952 9.05823 14.2732 9.16869 14.0783C9.27914 13.8834 9.4378 13.7227 9.62822 13.6128L18.8144 8.31901H18.8132Z"
                                  fill="white"
                                  stroke="#EA6A12"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M9 13.9756L20 20.317L9 13.9756ZM20 20.317L31 13.9756L20 20.317ZM20 20.317V32.9999Z"
                                  fill="white"
                                />
                                <path
                                  d="M20 20.317V32.9999M9 13.9756L20 20.317L9 13.9756ZM20 20.317L31 13.9756L20 20.317Z"
                                  stroke="#EA6A12"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M14.5 17.1471L25.5 10.8057Z"
                                  fill="white"
                                />
                                <path
                                  d="M14.5 17.1471L25.5 10.8057"
                                  stroke="#EA6A12"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M12.6641 20.7334L16.3307 22.854Z"
                                  fill="white"
                                />
                                <path
                                  d="M12.6641 20.7334L16.3307 22.854"
                                  stroke="#EA6A12"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </span>
                          </a>
                        </div>
                        <div className="step active">
                          <a
                            className="persistant-disabled"
                            data-bs-toggle="tab"
                            role="tablist"
                            title="Step 2"
                          >
                            <span className="round-tab">
                              <svg
                                width="24"
                                viewBox="0 0 40 40"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M20 7.5L23.4521 9.895L27.7257 9.8875L29.038 13.755L32.5 16.1375L31.1719 20L32.5 23.8625L29.038 26.245L27.7257 30.1125L23.4521 30.105L20 32.5L16.5479 30.105L12.2743 30.1125L10.962 26.245L7.5 23.8625L8.82814 20L7.5 16.1375L10.962 13.755L12.2743 9.8875L16.5479 9.895L20 7.5Z"
                                  fill="white"
                                />
                                <path
                                  d="M15 19.375L18.3333 22.5L25 16.25"
                                  fill="white"
                                />
                                <path
                                  d="M15 19.375L18.3333 22.5L25 16.25"
                                  stroke="#EA6A12"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </span>
                          </a>
                        </div>
                        <div className="step">
                          <a
                            className="persistant-disabled"
                            data-bs-toggle="tab"
                            role="tablist"
                            title="Step 3"
                          >
                            <span className="round-tab">
                              <svg
                                width="24"
                                viewBox="0 0 40 40"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M27.6364 28.9375C28.6927 28.9375 29.5455 28.0163 29.5455 26.875C29.5455 25.7337 28.6927 24.8125 27.6364 24.8125C26.58 24.8125 25.7273 25.7337 25.7273 26.875C25.7273 28.0163 26.58 28.9375 27.6364 28.9375ZM29.5455 16.5625H26.3636V20H32.04L29.5455 16.5625ZM12.3636 28.9375C13.42 28.9375 14.2727 28.0163 14.2727 26.875C14.2727 25.7337 13.42 24.8125 12.3636 24.8125C11.3073 24.8125 10.4545 25.7337 10.4545 26.875C10.4545 28.0163 11.3073 28.9375 12.3636 28.9375ZM30.1818 14.5L34 20V26.875H31.4545C31.4545 29.1575 29.7491 31 27.6364 31C25.5236 31 23.8182 29.1575 23.8182 26.875H16.1818C16.1818 29.1575 14.4764 31 12.3636 31C10.2509 31 8.54545 29.1575 8.54545 26.875H6V11.75C6 10.2237 7.13273 9 8.54545 9H26.3636V14.5H30.1818ZM8.54545 11.75V24.125H9.51273C10.2127 23.2863 11.2309 22.75 12.3636 22.75C13.4964 22.75 14.5145 23.2863 15.2145 24.125H23.8182V11.75H8.54545ZM17.4545 13.125L21.9091 17.9375L17.4545 22.75V19.3125H11.0909V16.5625H17.4545V13.125Z"
                                  fill="white"
                                />
                              </svg>
                            </span>
                          </a>
                        </div>
                        <div className="step">
                          <a
                            className="persistant-disabled"
                            data-bs-toggle="tab"
                            role="tablist"
                            title="Complete"
                          >
                            <span className="round-tab">
                              <svg
                                width="24"
                                viewBox="0 0 40 40"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M18.3735 8.30477C18.7203 8.10489 19.1104 8 19.5071 8C19.9038 8 20.2939 8.10489 20.6407 8.30477L29.4142 13.3623C29.5961 13.4673 29.7476 13.6208 29.8531 13.807C29.9586 13.9932 30.0142 14.2053 30.0142 14.4213V24.3995C30.0141 24.8316 29.9027 25.2559 29.6915 25.6283C29.4803 26.0007 29.1769 26.3077 28.8129 26.5175L20.6407 31.2309C20.2939 31.4308 19.9038 31.5357 19.5071 31.5357C19.1104 31.5357 18.7203 31.4308 18.3735 31.2309L10.2013 26.5175C9.83748 26.3078 9.53427 26.0009 9.32305 25.6288C9.11184 25.2566 9.00031 24.8326 9 24.4007V14.4213C8.99999 14.2053 9.05562 13.9932 9.16113 13.807C9.26663 13.6208 9.41818 13.4673 9.60007 13.3623L18.3735 8.30477Z"
                                  fill="white"
                                  stroke="#68CF29"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M9 13.707L19.5071 19.7654L9 13.707ZM19.5071 19.7654L30.0142 13.707L19.5071 19.7654ZM19.5071 19.7654V31.8822V19.7654Z"
                                  fill="white"
                                />
                                <path
                                  d="M19.5071 19.7654V31.8822M9 13.707L19.5071 19.7654L9 13.707ZM19.5071 19.7654L30.0142 13.707L19.5071 19.7654Z"
                                  stroke="#68CF29"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M14.2461 16.7381L24.7532 10.6797L14.2461 16.7381Z"
                                  fill="white"
                                />
                                <path
                                  d="M14.2461 16.7381L24.7532 10.6797"
                                  stroke="#68CF29"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M12.5078 20.1641L16.0102 22.19L12.5078 20.1641Z"
                                  fill="white"
                                />
                                <path
                                  d="M12.5078 20.1641L16.0102 22.19"
                                  stroke="#68CF29"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <rect
                                  x="24.6094"
                                  y="22.5488"
                                  width="8.88875"
                                  height="8.95141"
                                  rx="4.44438"
                                  fill="white"
                                />
                                <path
                                  d="M26.1133 27.6199L27.8085 29.2311L31.1989 25.2031"
                                  stroke="#68CF29"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <rect
                                  x="24.6094"
                                  y="22.5488"
                                  width="8.88875"
                                  height="8.95141"
                                  rx="4.44438"
                                  stroke="#68CF29"
                                />
                              </svg>
                            </span>
                          </a>
                        </div>
                      </div>
                      <div className="d-flex justify-content-between flex-wrap">
                        <div className="div  mb-3 mb--md-0">
                          <h6 className="heading-title fw-bolder mb-2">
                            Order Created
                          </h6>
                          <p className="mb-0">{formatDate(order.order_at)}</p>
                          
                        </div>
                        <div className="div  mb-3 mb-md-0">
                          <h6 className="heading-title fw-bolder mb-2">
                            Shipped
                          </h6>
                          <p className="mb-0">{formatDate(order.shipping_time)}</p>
                          
                        </div>
                        <div className="div">
                          <h6 className="heading-title fw-bolder mb-2">
                            On Delivery
                          </h6>
                          <p className="mb-0">{formatDate(order.delivery_time)}</p>
                        
                        </div>
                        <div className="div">
                          <h6 className="heading-title fw-bolder mb-2">
                            Order Delivered
                          </h6>
                          <p className="mb-0">{formatDate(order.delivery_time)}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-body">
                  <div className="header-title d-flex justify-content-between mb-4">
                    <h4 className="card-title">Track your order</h4>
                    <small className="text-primary mb-0">
                      Expected in 45 mins
                    </small>
                  </div>
                  <iframe
                    className="w-100"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3902543.2003194243!2d-118.04220880485131!3d36.56083290513502!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80be29b9f4abb783%3A0x4757dc6be1305318!2sInyo%20National%20Forest!5e0!3m2!1sen!2sin!4v1576668158879!5m2!1sen!2sin"
                    height="500"
                    allowFullScreen=""
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default OrderDetails;
