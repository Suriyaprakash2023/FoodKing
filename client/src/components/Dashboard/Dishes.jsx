import { useState,useEffect } from "react";
import DashboardFooter from "./DashboardFooter";
import DashboardHeader from "./DashboardHeader";
import DashboardSideNav from "./DashboardSideNav";
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import {Link} from "react-router-dom";
import {API_BASE_URL} from '../context/data';
import axios from "axios";

const Dishes = () => {
  const [dishes, setDishes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(()=>{
    const fetchDishes = async () => {
      try {

      setLoading(true);
      const response = await axios.get(`${API_BASE_URL}/dishes/`);
      setDishes(response.data); 
      setLoading(false);

      } catch (error) {
        console.error("Error fetching dishes:", error);
        setError(true);

      }
    };

    fetchDishes();
  },[])

  return (
    <>   
   



      <DashboardSideNav />
     
      <main className="main-content"
      style={{
        background: 'url("/src/assets/dashboard/images/dashboard.png")',
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
       
       
      }}
      >
      <DashboardHeader />
        <div className="content-inner mt-5 py-0">
          <div className="row">
            <div className="col-lg-3">
              <div className="card">
                <div className="card-header border-0">
                  <h4 className="card-title">Menu List [25]</h4>
                </div>
                <div className="card-body py-0">
                  <ul className="list-inline">
                    <li className="py-4 d-flex justify-content-between">
                      <span className="fw-bolder heading-title text-dark">
                        Starters
                      </span>
                      <span className=" badge bg-primary px-3 rounded-pill d-flex align-items-center">
                        20
                      </span>
                    </li>
                    <li className="py-4 d-flex justify-content-between">
                      <span className="fw-bolder heading-title text-dark">
                        Main Course
                      </span>
                      <span className=" badge bg-primary px-3 rounded-pill d-flex align-items-center">
                        80
                      </span>
                    </li>
                    <li className="py-4 d-flex justify-content-between">
                      <span className="fw-bolder heading-title text-dark">
                        Soups
                      </span>
                      <span className=" badge bg-primary px-3 rounded-pill d-flex align-items-center">
                        20
                      </span>
                    </li>
                    <li className="py-4 d-flex justify-content-between">
                      <span className="fw-bolder heading-title text-dark">
                        Juices
                      </span>
                      <span className=" badge bg-primary px-3 rounded-pill d-flex align-items-center">
                        30
                      </span>
                    </li>
                    <li className="py-4 d-flex justify-content-between">
                      <span className="fw-bolder heading-title text-dark">
                        Italian
                      </span>
                      <span className=" badge bg-primary px-3 rounded-pill d-flex align-items-center">
                        50
                      </span>
                    </li>
                    <li className="py-4 d-flex justify-content-between">
                      <span className="fw-bolder heading-title text-dark">
                        Chinese
                      </span>
                      <span className=" badge bg-primary px-3 rounded-pill d-flex align-items-center">
                        70
                      </span>
                    </li>
                    <li className="py-4 d-flex justify-content-between">
                      <span className="fw-bolder heading-title text-dark">
                        Pizza
                      </span>
                      <span className=" badge bg-primary px-3 rounded-pill d-flex align-items-center">
                        50
                      </span>
                    </li>
                    <li className="py-4 d-flex justify-content-between pb-0">
                      <span className="fw-bolder heading-title text-dark">
                        Deserts
                      </span>
                      <span className=" badge bg-primary px-3 rounded-pill d-flex align-items-center">
                        20
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="card">
              <div className="card-header d-flex justify-content-between align-items-center">
                <h4 className="card-title list-main">New Dishes</h4>
                <Link to='/add-dish'>
                  <button className="btn btn-success w-5 h-5 rounded">
                    <RestaurantMenuIcon/> add New Product
                  </button>
                </Link>
              </div>



              

                <div className="card-body py-0">
                  <ul className="list-inline chat-list-main1">
                    <li className="py-5 border-bottom border-soft-primary">
                      <div className="d-flex justify-content-between">
                        <div className="d-flex align-items-center">
                          <img
                            src="/src/assets/dashboard/images/menu/10.png"
                            className="img-fluid avatar avatar-40"
                            alt="profile-image"
                          />
                          <div className="d-flex justify-content-between ms-3">
                            <div>
                              <Link to='/dish-details'>
                                <h6 className="mb-1 fw-bolder heading-title">
                                  Veg Cripsy
                                </h6>
                                </Link>
                              <small className="mb-0">
                                Tortila chips served with warm cheese sauce
                              </small>
                            </div>
                            <div>
                              <svg
                                width="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M6.32857 8.34749L6.93157 15.5195C6.97557 16.0715 7.42657 16.4855 7.97757 16.4855H7.98157H18.8926H18.8946C19.4156 16.4855 19.8606 16.0975 19.9346 15.5825L20.8846 9.02349C20.9066 8.86749 20.8676 8.71149 20.7726 8.58549C20.6786 8.45849 20.5406 8.37649 20.3846 8.35449C20.1756 8.36249 11.5026 8.35049 6.32857 8.34749ZM7.97557 17.9855C6.65857 17.9855 5.54357 16.9575 5.43657 15.6425L4.52057 4.74849L3.01357 4.48849C2.60457 4.41649 2.33157 4.02949 2.40157 3.62049C2.47357 3.21149 2.86857 2.94549 3.26857 3.00949L5.34857 3.36949C5.68357 3.42849 5.93857 3.70649 5.96757 4.04649L6.20257 6.84749C20.4786 6.85349 20.5246 6.86049 20.5936 6.86849C21.1506 6.94949 21.6406 7.24049 21.9746 7.68849C22.3086 8.13549 22.4486 8.68649 22.3686 9.23849L21.4196 15.7965C21.2406 17.0445 20.1566 17.9855 18.8966 17.9855H18.8916H7.98357H7.97557Z"
                                  fill="#07143B"
                                />
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M17.2876 12.0439H14.5156C14.1006 12.0439 13.7656 11.7079 13.7656 11.2939C13.7656 10.8799 14.1006 10.5439 14.5156 10.5439H17.2876C17.7016 10.5439 18.0376 10.8799 18.0376 11.2939C18.0376 11.7079 17.7016 12.0439 17.2876 12.0439Z"
                                  fill="#07143B"
                                />
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M7.545 20.7021C7.846 20.7021 8.089 20.9451 8.089 21.2461C8.089 21.5471 7.846 21.7911 7.545 21.7911C7.243 21.7911 7 21.5471 7 21.2461C7 20.9451 7.243 20.7021 7.545 20.7021Z"
                                  fill="#07143B"
                                />
                                <mask
                                  id="mask8"
                                  style={{ WebkitMaskType: 'alpha', maskType: 'alpha' }}
                                  maskUnits="userSpaceOnUse"
                                  x="7"
                                  y="20"
                                  width="2"
                                  height="2"
                                >
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M7 21.2452C7 21.5472 7.243 21.7912 7.546 21.7912C7.847 21.7912 8.09 21.5472 8.09 21.2452C8.09 20.9442 7.847 20.7012 7.546 20.7012C7.243 20.7012 7 20.9442 7 21.2452Z"
                                    fill="white"
                                  />
                                </mask>
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M7.544 21.0411C7.431 21.0411 7.339 21.1331 7.339 21.2461C7.339 21.4731 7.75 21.4731 7.75 21.2461C7.75 21.1331 7.657 21.0411 7.544 21.0411ZM7.544 22.5411C6.83 22.5411 6.25 21.9601 6.25 21.2461C6.25 20.5321 6.83 19.9521 7.544 19.9521C8.258 19.9521 8.839 20.5321 8.839 21.2461C8.839 21.9601 8.258 22.5411 7.544 22.5411Z"
                                  fill="#07143B"
                                />
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M18.8263 20.7021C19.1273 20.7021 19.3713 20.9451 19.3713 21.2461C19.3713 21.5471 19.1273 21.7911 18.8263 21.7911C18.5243 21.7911 18.2812 21.5471 18.2812 21.2461C18.2812 20.9451 18.5243 20.7021 18.8263 20.7021Z"
                                  fill="#07143B"
                                />
                                <mask
                                  id="mask61"
                                  style={{ WebkitMaskType: 'alpha', maskType: 'alpha' }}
                                  maskUnits="userSpaceOnUse"
                                  x="18"
                                  y="20"
                                  width="2"
                                  height="2"
                                >
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M18.2812 21.2452C18.2812 21.5472 18.5243 21.7912 18.8263 21.7912C19.1263 21.7912 19.3713 21.5472 19.3713 21.2452C19.3713 20.9442 19.1263 20.7012 18.8263 20.7012C18.5243 20.7012 18.2812 20.9442 18.2812 21.2452Z"
                                    fill="white"
                                  />
                                </mask>
                                <g mask="url(#mask1)">
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M13.2812 26.7902H24.3713V15.7012H13.2812V26.7902Z"
                                    fill="#07143B"
                                  />
                                </g>
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M18.8253 21.0411C18.7133 21.0411 18.6213 21.1331 18.6213 21.2461C18.6222 21.4751 19.0323 21.4731 19.0312 21.2461C19.0312 21.1331 18.9382 21.0411 18.8253 21.0411ZM18.8253 22.5411C18.1113 22.5411 17.5312 21.9601 17.5312 21.2461C17.5312 20.5321 18.1113 19.9521 18.8253 19.9521C19.5403 19.9521 20.1212 20.5321 20.1212 21.2461C20.1212 21.9601 19.5403 22.5411 18.8253 22.5411Z"
                                  fill="#07143B"
                                />
                              </svg>
                              <svg
                                className="ms-2"
                                width="20"
                                viewBox="0 0 21 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <mask
                                  style={{ WebkitMaskType: 'alpha', maskType: 'alpha' }}
                                  maskUnits="userSpaceOnUse"
                                  x="0"
                                  y="0"
                                  width="20"
                                >
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M0 0H20.4725V19.501H0V0Z"
                                    fill="white"
                                  />
                                </mask>
                                <g mask="url(#mask0)">
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M1.82396 9.12312C3.22596 13.4851 8.76496 17.0121 10.237 17.8851C11.714 17.0031 17.293 13.4371 18.65 9.12712C19.541 6.34112 18.714 2.81212 15.428 1.75312C13.836 1.24212 11.979 1.55312 10.697 2.54512C10.429 2.75112 10.057 2.75512 9.78696 2.55112C8.42896 1.53012 6.65496 1.23112 5.03796 1.75312C1.75696 2.81112 0.932957 6.34012 1.82396 9.12312ZM10.238 19.5011C10.114 19.5011 9.99096 19.4711 9.87896 19.4101C9.56596 19.2391 2.19296 15.1751 0.395957 9.58112C0.394957 9.58112 0.394957 9.58012 0.394957 9.58012C-0.733043 6.05812 0.522957 1.63212 4.57796 0.325118C6.48196 -0.290882 8.55696 -0.019882 10.235 1.03912C11.861 0.0111181 14.021 -0.272882 15.887 0.325118C19.946 1.63412 21.206 6.05912 20.079 9.58012C18.34 15.1101 10.913 19.2351 10.598 19.4081C10.486 19.4701 10.362 19.5011 10.238 19.5011Z"
                                    fill="#07143B"
                                  />
                                </g>
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M16.1547 7.62526C15.7677 7.62526 15.4397 7.32826 15.4077 6.93626C15.3417 6.11426 14.7917 5.42026 14.0087 5.16726C13.6137 5.03926 13.3977 4.61626 13.5247 4.22326C13.6537 3.82926 14.0727 3.61526 14.4687 3.73926C15.8317 4.18026 16.7867 5.38726 16.9037 6.81426C16.9367 7.22726 16.6297 7.58926 16.2167 7.62226C16.1957 7.62426 16.1757 7.62526 16.1547 7.62526Z"
                                  fill="#07143B"
                                />
                              </svg>
                            </div>
                          </div>
                        </div>
                        <div className="d-flex align-items-end">
                          <small className="text-dark">$70</small>
                        </div>
                      </div>
                    </li>
                    <li className="py-5 border-bottom border-soft-primary">
                      <div className="d-flex justify-content-between">
                        <div className="d-flex align-items-center">
                          <img
                            src="/src/assets/dashboard/images/menu/6.png"
                            className="img-fluid avatar avatar-40"
                            alt="profile-image"
                          />
                          <div className="d-flex justify-content-between ms-3">
                            <div>
                              <h6 className="mb-1 fw-bolder heading-title">
                                Paneer Chilly
                              </h6>
                              <small className="mb-0">
                                Tortila chips served with warm cheese sauce
                              </small>
                            </div>
                            <div>
                              <svg
                                width="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M6.32857 8.34749L6.93157 15.5195C6.97557 16.0715 7.42657 16.4855 7.97757 16.4855H7.98157H18.8926H18.8946C19.4156 16.4855 19.8606 16.0975 19.9346 15.5825L20.8846 9.02349C20.9066 8.86749 20.8676 8.71149 20.7726 8.58549C20.6786 8.45849 20.5406 8.37649 20.3846 8.35449C20.1756 8.36249 11.5026 8.35049 6.32857 8.34749ZM7.97557 17.9855C6.65857 17.9855 5.54357 16.9575 5.43657 15.6425L4.52057 4.74849L3.01357 4.48849C2.60457 4.41649 2.33157 4.02949 2.40157 3.62049C2.47357 3.21149 2.86857 2.94549 3.26857 3.00949L5.34857 3.36949C5.68357 3.42849 5.93857 3.70649 5.96757 4.04649L6.20257 6.84749C20.4786 6.85349 20.5246 6.86049 20.5936 6.86849C21.1506 6.94949 21.6406 7.24049 21.9746 7.68849C22.3086 8.13549 22.4486 8.68649 22.3686 9.23849L21.4196 15.7965C21.2406 17.0445 20.1566 17.9855 18.8966 17.9855H18.8916H7.98357H7.97557Z"
                                  fill="#07143B"
                                />
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M17.2876 12.0439H14.5156C14.1006 12.0439 13.7656 11.7079 13.7656 11.2939C13.7656 10.8799 14.1006 10.5439 14.5156 10.5439H17.2876C17.7016 10.5439 18.0376 10.8799 18.0376 11.2939C18.0376 11.7079 17.7016 12.0439 17.2876 12.0439Z"
                                  fill="#07143B"
                                />
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M7.545 20.7021C7.846 20.7021 8.089 20.9451 8.089 21.2461C8.089 21.5471 7.846 21.7911 7.545 21.7911C7.243 21.7911 7 21.5471 7 21.2461C7 20.9451 7.243 20.7021 7.545 20.7021Z"
                                  fill="#07143B"
                                />
                                <mask
                                  id="mask1"
                                  style={{ WebkitMaskType: 'alpha', maskType: 'alpha' }}
                                  maskUnits="userSpaceOnUse"
                                  x="7"
                                  y="20"
                                  width="2"
                                  height="2"
                                >
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M7 21.2452C7 21.5472 7.243 21.7912 7.546 21.7912C7.847 21.7912 8.09 21.5472 8.09 21.2452C8.09 20.9442 7.847 20.7012 7.546 20.7012C7.243 20.7012 7 20.9442 7 21.2452Z"
                                    fill="white"
                                  />
                                </mask>
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M7.544 21.0411C7.431 21.0411 7.339 21.1331 7.339 21.2461C7.339 21.4731 7.75 21.4731 7.75 21.2461C7.75 21.1331 7.657 21.0411 7.544 21.0411ZM7.544 22.5411C6.83 22.5411 6.25 21.9601 6.25 21.2461C6.25 20.5321 6.83 19.9521 7.544 19.9521C8.258 19.9521 8.839 20.5321 8.839 21.2461C8.839 21.9601 8.258 22.5411 7.544 22.5411Z"
                                  fill="#07143B"
                                />
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M18.8263 20.7021C19.1273 20.7021 19.3713 20.9451 19.3713 21.2461C19.3713 21.5471 19.1273 21.7911 18.8263 21.7911C18.5243 21.7911 18.2812 21.5471 18.2812 21.2461C18.2812 20.9451 18.5243 20.7021 18.8263 20.7021Z"
                                  fill="#07143B"
                                />
                                <mask
                                  id="mask62"
                                  style={{ WebkitMaskType: 'alpha', maskType: 'alpha' }}
                                  maskUnits="userSpaceOnUse"
                                  x="18"
                                  y="20"
                                  width="2"
                                  height="2"
                                >
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M18.2812 21.2452C18.2812 21.5472 18.5243 21.7912 18.8263 21.7912C19.1263 21.7912 19.3713 21.5472 19.3713 21.2452C19.3713 20.9442 19.1263 20.7012 18.8263 20.7012C18.5243 20.7012 18.2812 20.9442 18.2812 21.2452Z"
                                    fill="white"
                                  />
                                </mask>
                                <g mask="url(#mask1)">
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M13.2812 26.7902H24.3713V15.7012H13.2812V26.7902Z"
                                    fill="#07143B"
                                  />
                                </g>
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M18.8253 21.0411C18.7133 21.0411 18.6213 21.1331 18.6213 21.2461C18.6222 21.4751 19.0323 21.4731 19.0312 21.2461C19.0312 21.1331 18.9382 21.0411 18.8253 21.0411ZM18.8253 22.5411C18.1113 22.5411 17.5312 21.9601 17.5312 21.2461C17.5312 20.5321 18.1113 19.9521 18.8253 19.9521C19.5403 19.9521 20.1212 20.5321 20.1212 21.2461C20.1212 21.9601 19.5403 22.5411 18.8253 22.5411Z"
                                  fill="#07143B"
                                />
                              </svg>
                              <svg
                                className="ms-2"
                                width="20"
                                viewBox="0 0 21 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <mask
                                  id="mask3"
                                  style={{ WebkitMaskType: 'alpha', maskType: 'alpha' }}
                                  maskUnits="userSpaceOnUse"
                                  x="0"
                                  y="0"
                                  width="20"
                                >
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M0 0H20.4725V19.501H0V0Z"
                                    fill="white"
                                  />
                                </mask>
                                <g mask="url(#mask0)">
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M1.82396 9.12312C3.22596 13.4851 8.76496 17.0121 10.237 17.8851C11.714 17.0031 17.293 13.4371 18.65 9.12712C19.541 6.34112 18.714 2.81212 15.428 1.75312C13.836 1.24212 11.979 1.55312 10.697 2.54512C10.429 2.75112 10.057 2.75512 9.78696 2.55112C8.42896 1.53012 6.65496 1.23112 5.03796 1.75312C1.75696 2.81112 0.932957 6.34012 1.82396 9.12312ZM10.238 19.5011C10.114 19.5011 9.99096 19.4711 9.87896 19.4101C9.56596 19.2391 2.19296 15.1751 0.395957 9.58112C0.394957 9.58112 0.394957 9.58012 0.394957 9.58012C-0.733043 6.05812 0.522957 1.63212 4.57796 0.325118C6.48196 -0.290882 8.55696 -0.019882 10.235 1.03912C11.861 0.0111181 14.021 -0.272882 15.887 0.325118C19.946 1.63412 21.206 6.05912 20.079 9.58012C18.34 15.1101 10.913 19.2351 10.598 19.4081C10.486 19.4701 10.362 19.5011 10.238 19.5011Z"
                                    fill="#07143B"
                                  />
                                </g>
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M16.1547 7.62526C15.7677 7.62526 15.4397 7.32826 15.4077 6.93626C15.3417 6.11426 14.7917 5.42026 14.0087 5.16726C13.6137 5.03926 13.3977 4.61626 13.5247 4.22326C13.6537 3.82926 14.0727 3.61526 14.4687 3.73926C15.8317 4.18026 16.7867 5.38726 16.9037 6.81426C16.9367 7.22726 16.6297 7.58926 16.2167 7.62226C16.1957 7.62426 16.1757 7.62526 16.1547 7.62526Z"
                                  fill="#07143B"
                                />
                              </svg>
                            </div>
                          </div>
                        </div>
                        <div className="d-flex align-items-end">
                          <small className="text-dark">$30</small>
                        </div>
                      </div>
                    </li>
                    <li className="py-5 border-bottom border-soft-primary">
                      <div className="d-flex justify-content-between">
                        <div className="d-flex align-items-center">
                          <img
                            src="/src/assets/dashboard/images/menu/5.png"
                            className="img-fluid avatar avatar-40"
                            alt="profile-image"
                          />
                          <div className="d-flex justify-content-between ms-3">
                            <div>
                              <h6 className="mb-1 fw-bolder heading-title">
                                Creamy Nachos
                              </h6>
                              <small className="mb-0">
                                Tortila chips served with warm cheese sauce
                              </small>
                            </div>
                            <div>
                              <svg
                                width="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M6.32857 8.34749L6.93157 15.5195C6.97557 16.0715 7.42657 16.4855 7.97757 16.4855H7.98157H18.8926H18.8946C19.4156 16.4855 19.8606 16.0975 19.9346 15.5825L20.8846 9.02349C20.9066 8.86749 20.8676 8.71149 20.7726 8.58549C20.6786 8.45849 20.5406 8.37649 20.3846 8.35449C20.1756 8.36249 11.5026 8.35049 6.32857 8.34749ZM7.97557 17.9855C6.65857 17.9855 5.54357 16.9575 5.43657 15.6425L4.52057 4.74849L3.01357 4.48849C2.60457 4.41649 2.33157 4.02949 2.40157 3.62049C2.47357 3.21149 2.86857 2.94549 3.26857 3.00949L5.34857 3.36949C5.68357 3.42849 5.93857 3.70649 5.96757 4.04649L6.20257 6.84749C20.4786 6.85349 20.5246 6.86049 20.5936 6.86849C21.1506 6.94949 21.6406 7.24049 21.9746 7.68849C22.3086 8.13549 22.4486 8.68649 22.3686 9.23849L21.4196 15.7965C21.2406 17.0445 20.1566 17.9855 18.8966 17.9855H18.8916H7.98357H7.97557Z"
                                  fill="#07143B"
                                />
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M17.2876 12.0439H14.5156C14.1006 12.0439 13.7656 11.7079 13.7656 11.2939C13.7656 10.8799 14.1006 10.5439 14.5156 10.5439H17.2876C17.7016 10.5439 18.0376 10.8799 18.0376 11.2939C18.0376 11.7079 17.7016 12.0439 17.2876 12.0439Z"
                                  fill="#07143B"
                                />
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M7.545 20.7021C7.846 20.7021 8.089 20.9451 8.089 21.2461C8.089 21.5471 7.846 21.7911 7.545 21.7911C7.243 21.7911 7 21.5471 7 21.2461C7 20.9451 7.243 20.7021 7.545 20.7021Z"
                                  fill="#07143B"
                                />
                                <mask
                                  id="mask4"
                                  style={{ WebkitMaskType: 'alpha', maskType: 'alpha' }}
                                  maskUnits="userSpaceOnUse"
                                  x="7"
                                  y="20"
                                  width="2"
                                  height="2"
                                >
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M7 21.2452C7 21.5472 7.243 21.7912 7.546 21.7912C7.847 21.7912 8.09 21.5472 8.09 21.2452C8.09 20.9442 7.847 20.7012 7.546 20.7012C7.243 20.7012 7 20.9442 7 21.2452Z"
                                    fill="white"
                                  />
                                </mask>
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M7.544 21.0411C7.431 21.0411 7.339 21.1331 7.339 21.2461C7.339 21.4731 7.75 21.4731 7.75 21.2461C7.75 21.1331 7.657 21.0411 7.544 21.0411ZM7.544 22.5411C6.83 22.5411 6.25 21.9601 6.25 21.2461C6.25 20.5321 6.83 19.9521 7.544 19.9521C8.258 19.9521 8.839 20.5321 8.839 21.2461C8.839 21.9601 8.258 22.5411 7.544 22.5411Z"
                                  fill="#07143B"
                                />
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M18.8263 20.7021C19.1273 20.7021 19.3713 20.9451 19.3713 21.2461C19.3713 21.5471 19.1273 21.7911 18.8263 21.7911C18.5243 21.7911 18.2812 21.5471 18.2812 21.2461C18.2812 20.9451 18.5243 20.7021 18.8263 20.7021Z"
                                  fill="#07143B"
                                />
                                <mask
                                  id="mask63"
                                  style={{ WebkitMaskType: 'alpha', maskType: 'alpha' }}
                                  maskUnits="userSpaceOnUse"
                                  x="18"
                                  y="20"
                                  width="2"
                                  height="2"
                                >
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M18.2812 21.2452C18.2812 21.5472 18.5243 21.7912 18.8263 21.7912C19.1263 21.7912 19.3713 21.5472 19.3713 21.2452C19.3713 20.9442 19.1263 20.7012 18.8263 20.7012C18.5243 20.7012 18.2812 20.9442 18.2812 21.2452Z"
                                    fill="white"
                                  />
                                </mask>
                                <g mask="url(#mask1)">
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M13.2812 26.7902H24.3713V15.7012H13.2812V26.7902Z"
                                    fill="#07143B"
                                  />
                                </g>
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M18.8253 21.0411C18.7133 21.0411 18.6213 21.1331 18.6213 21.2461C18.6222 21.4751 19.0323 21.4731 19.0312 21.2461C19.0312 21.1331 18.9382 21.0411 18.8253 21.0411ZM18.8253 22.5411C18.1113 22.5411 17.5312 21.9601 17.5312 21.2461C17.5312 20.5321 18.1113 19.9521 18.8253 19.9521C19.5403 19.9521 20.1212 20.5321 20.1212 21.2461C20.1212 21.9601 19.5403 22.5411 18.8253 22.5411Z"
                                  fill="#07143B"
                                />
                              </svg>
                              <svg
                                className="ms-2"
                                width="20"
                                viewBox="0 0 21 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <mask
                                  id="mask5"
                                  style={{ WebkitMaskType: 'alpha', maskType: 'alpha' }}
                                  maskUnits="userSpaceOnUse"
                                  x="0"
                                  y="0"
                                  width="20"
                                >
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M0 0H20.4725V19.501H0V0Z"
                                    fill="white"
                                  />
                                </mask>
                                <g mask="url(#mask0)">
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M1.82396 9.12312C3.22596 13.4851 8.76496 17.0121 10.237 17.8851C11.714 17.0031 17.293 13.4371 18.65 9.12712C19.541 6.34112 18.714 2.81212 15.428 1.75312C13.836 1.24212 11.979 1.55312 10.697 2.54512C10.429 2.75112 10.057 2.75512 9.78696 2.55112C8.42896 1.53012 6.65496 1.23112 5.03796 1.75312C1.75696 2.81112 0.932957 6.34012 1.82396 9.12312ZM10.238 19.5011C10.114 19.5011 9.99096 19.4711 9.87896 19.4101C9.56596 19.2391 2.19296 15.1751 0.395957 9.58112C0.394957 9.58112 0.394957 9.58012 0.394957 9.58012C-0.733043 6.05812 0.522957 1.63212 4.57796 0.325118C6.48196 -0.290882 8.55696 -0.019882 10.235 1.03912C11.861 0.0111181 14.021 -0.272882 15.887 0.325118C19.946 1.63412 21.206 6.05912 20.079 9.58012C18.34 15.1101 10.913 19.2351 10.598 19.4081C10.486 19.4701 10.362 19.5011 10.238 19.5011Z"
                                    fill="#07143B"
                                  />
                                </g>
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M16.1547 7.62526C15.7677 7.62526 15.4397 7.32826 15.4077 6.93626C15.3417 6.11426 14.7917 5.42026 14.0087 5.16726C13.6137 5.03926 13.3977 4.61626 13.5247 4.22326C13.6537 3.82926 14.0727 3.61526 14.4687 3.73926C15.8317 4.18026 16.7867 5.38726 16.9037 6.81426C16.9367 7.22726 16.6297 7.58926 16.2167 7.62226C16.1957 7.62426 16.1757 7.62526 16.1547 7.62526Z"
                                  fill="#07143B"
                                />
                              </svg>
                            </div>
                          </div>
                        </div>
                        <div className="d-flex align-items-end">
                          <small className="text-dark">$55</small>
                        </div>
                      </div>
                    </li>
                    <li className="py-5 border-bottom border-soft-primary">
                      <div className="d-flex justify-content-between">
                        <div className="d-flex align-items-center">
                          <img
                            src="/src/assets/dashboard/images/menu/8.png"
                            className="img-fluid avatar avatar-40"
                            alt="profile-image"
                          />
                          <div className="d-flex justify-content-between ms-3">
                            <div>
                              <h6 className="mb-1 fw-bolder heading-title">
                                Hot and Sour soup
                              </h6>
                              <small className="mb-0">
                                Tortila chips served with warm cheese sauce
                              </small>
                            </div>
                            <div>
                              <svg
                                width="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M6.32857 8.34749L6.93157 15.5195C6.97557 16.0715 7.42657 16.4855 7.97757 16.4855H7.98157H18.8926H18.8946C19.4156 16.4855 19.8606 16.0975 19.9346 15.5825L20.8846 9.02349C20.9066 8.86749 20.8676 8.71149 20.7726 8.58549C20.6786 8.45849 20.5406 8.37649 20.3846 8.35449C20.1756 8.36249 11.5026 8.35049 6.32857 8.34749ZM7.97557 17.9855C6.65857 17.9855 5.54357 16.9575 5.43657 15.6425L4.52057 4.74849L3.01357 4.48849C2.60457 4.41649 2.33157 4.02949 2.40157 3.62049C2.47357 3.21149 2.86857 2.94549 3.26857 3.00949L5.34857 3.36949C5.68357 3.42849 5.93857 3.70649 5.96757 4.04649L6.20257 6.84749C20.4786 6.85349 20.5246 6.86049 20.5936 6.86849C21.1506 6.94949 21.6406 7.24049 21.9746 7.68849C22.3086 8.13549 22.4486 8.68649 22.3686 9.23849L21.4196 15.7965C21.2406 17.0445 20.1566 17.9855 18.8966 17.9855H18.8916H7.98357H7.97557Z"
                                  fill="#07143B"
                                />
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M17.2876 12.0439H14.5156C14.1006 12.0439 13.7656 11.7079 13.7656 11.2939C13.7656 10.8799 14.1006 10.5439 14.5156 10.5439H17.2876C17.7016 10.5439 18.0376 10.8799 18.0376 11.2939C18.0376 11.7079 17.7016 12.0439 17.2876 12.0439Z"
                                  fill="#07143B"
                                />
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M7.545 20.7021C7.846 20.7021 8.089 20.9451 8.089 21.2461C8.089 21.5471 7.846 21.7911 7.545 21.7911C7.243 21.7911 7 21.5471 7 21.2461C7 20.9451 7.243 20.7021 7.545 20.7021Z"
                                  fill="#07143B"
                                />
                                <mask
                                  id="mask6"
                                  style={{ WebkitMaskType: 'alpha', maskType: 'alpha' }}
                                  maskUnits="userSpaceOnUse"
                                  x="7"
                                  y="20"
                                  width="2"
                                  height="2"
                                >
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M7 21.2452C7 21.5472 7.243 21.7912 7.546 21.7912C7.847 21.7912 8.09 21.5472 8.09 21.2452C8.09 20.9442 7.847 20.7012 7.546 20.7012C7.243 20.7012 7 20.9442 7 21.2452Z"
                                    fill="white"
                                  />
                                </mask>
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M7.544 21.0411C7.431 21.0411 7.339 21.1331 7.339 21.2461C7.339 21.4731 7.75 21.4731 7.75 21.2461C7.75 21.1331 7.657 21.0411 7.544 21.0411ZM7.544 22.5411C6.83 22.5411 6.25 21.9601 6.25 21.2461C6.25 20.5321 6.83 19.9521 7.544 19.9521C8.258 19.9521 8.839 20.5321 8.839 21.2461C8.839 21.9601 8.258 22.5411 7.544 22.5411Z"
                                  fill="#07143B"
                                />
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M18.8263 20.7021C19.1273 20.7021 19.3713 20.9451 19.3713 21.2461C19.3713 21.5471 19.1273 21.7911 18.8263 21.7911C18.5243 21.7911 18.2812 21.5471 18.2812 21.2461C18.2812 20.9451 18.5243 20.7021 18.8263 20.7021Z"
                                  fill="#07143B"
                                />
                                <mask
                                  id="mask64"
                                  style={{ WebkitMaskType: 'alpha', maskType: 'alpha' }}
                                  maskUnits="userSpaceOnUse"
                                  x="18"
                                  y="20"
                                  width="2"
                                  height="2"
                                >
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M18.2812 21.2452C18.2812 21.5472 18.5243 21.7912 18.8263 21.7912C19.1263 21.7912 19.3713 21.5472 19.3713 21.2452C19.3713 20.9442 19.1263 20.7012 18.8263 20.7012C18.5243 20.7012 18.2812 20.9442 18.2812 21.2452Z"
                                    fill="white"
                                  />
                                </mask>
                                <g mask="url(#mask1)">
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M13.2812 26.7902H24.3713V15.7012H13.2812V26.7902Z"
                                    fill="#07143B"
                                  />
                                </g>
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M18.8253 21.0411C18.7133 21.0411 18.6213 21.1331 18.6213 21.2461C18.6222 21.4751 19.0323 21.4731 19.0312 21.2461C19.0312 21.1331 18.9382 21.0411 18.8253 21.0411ZM18.8253 22.5411C18.1113 22.5411 17.5312 21.9601 17.5312 21.2461C17.5312 20.5321 18.1113 19.9521 18.8253 19.9521C19.5403 19.9521 20.1212 20.5321 20.1212 21.2461C20.1212 21.9601 19.5403 22.5411 18.8253 22.5411Z"
                                  fill="#07143B"
                                />
                              </svg>
                              <svg
                                className="ms-2"
                                width="20"
                                viewBox="0 0 21 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <mask
                                  id="mask7"
                                  style={{ WebkitMaskType: 'alpha', maskType: 'alpha' }}
                                  maskUnits="userSpaceOnUse"
                                  x="0"
                                  y="0"
                                  width="20"
                                >
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M0 0H20.4725V19.501H0V0Z"
                                    fill="white"
                                  />
                                </mask>
                                <g mask="url(#mask0)">
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M1.82396 9.12312C3.22596 13.4851 8.76496 17.0121 10.237 17.8851C11.714 17.0031 17.293 13.4371 18.65 9.12712C19.541 6.34112 18.714 2.81212 15.428 1.75312C13.836 1.24212 11.979 1.55312 10.697 2.54512C10.429 2.75112 10.057 2.75512 9.78696 2.55112C8.42896 1.53012 6.65496 1.23112 5.03796 1.75312C1.75696 2.81112 0.932957 6.34012 1.82396 9.12312ZM10.238 19.5011C10.114 19.5011 9.99096 19.4711 9.87896 19.4101C9.56596 19.2391 2.19296 15.1751 0.395957 9.58112C0.394957 9.58112 0.394957 9.58012 0.394957 9.58012C-0.733043 6.05812 0.522957 1.63212 4.57796 0.325118C6.48196 -0.290882 8.55696 -0.019882 10.235 1.03912C11.861 0.0111181 14.021 -0.272882 15.887 0.325118C19.946 1.63412 21.206 6.05912 20.079 9.58012C18.34 15.1101 10.913 19.2351 10.598 19.4081C10.486 19.4701 10.362 19.5011 10.238 19.5011Z"
                                    fill="#07143B"
                                  />
                                </g>
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M16.1547 7.62526C15.7677 7.62526 15.4397 7.32826 15.4077 6.93626C15.3417 6.11426 14.7917 5.42026 14.0087 5.16726C13.6137 5.03926 13.3977 4.61626 13.5247 4.22326C13.6537 3.82926 14.0727 3.61526 14.4687 3.73926C15.8317 4.18026 16.7867 5.38726 16.9037 6.81426C16.9367 7.22726 16.6297 7.58926 16.2167 7.62226C16.1957 7.62426 16.1757 7.62526 16.1547 7.62526Z"
                                  fill="#07143B"
                                />
                              </svg>
                            </div>
                          </div>
                        </div>
                        <div className="d-flex align-items-end">
                          <small className="text-dark">$90</small>
                        </div>
                      </div>
                    </li>
                    <li className="py-5 border-bottom border-soft-primary">
                      <div className="d-flex justify-content-between">
                        <div className="d-flex align-items-center">
                          <img
                            src="/src/assets/dashboard/images/menu/9.png"
                            className="img-fluid avatar avatar-40"
                            alt="profile-image"
                          />
                          <div className="d-flex justify-content-between ms-3">
                            <div>
                              <h6 className="mb-1 fw-bolder heading-title">
                                Tomato soup
                              </h6>
                              <small className="mb-0">
                                Tortila chips served with warm cheese sauce
                              </small>
                            </div>
                            <div>
                              <svg
                                width="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M6.32857 8.34749L6.93157 15.5195C6.97557 16.0715 7.42657 16.4855 7.97757 16.4855H7.98157H18.8926H18.8946C19.4156 16.4855 19.8606 16.0975 19.9346 15.5825L20.8846 9.02349C20.9066 8.86749 20.8676 8.71149 20.7726 8.58549C20.6786 8.45849 20.5406 8.37649 20.3846 8.35449C20.1756 8.36249 11.5026 8.35049 6.32857 8.34749ZM7.97557 17.9855C6.65857 17.9855 5.54357 16.9575 5.43657 15.6425L4.52057 4.74849L3.01357 4.48849C2.60457 4.41649 2.33157 4.02949 2.40157 3.62049C2.47357 3.21149 2.86857 2.94549 3.26857 3.00949L5.34857 3.36949C5.68357 3.42849 5.93857 3.70649 5.96757 4.04649L6.20257 6.84749C20.4786 6.85349 20.5246 6.86049 20.5936 6.86849C21.1506 6.94949 21.6406 7.24049 21.9746 7.68849C22.3086 8.13549 22.4486 8.68649 22.3686 9.23849L21.4196 15.7965C21.2406 17.0445 20.1566 17.9855 18.8966 17.9855H18.8916H7.98357H7.97557Z"
                                  fill="#07143B"
                                />
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M17.2876 12.0439H14.5156C14.1006 12.0439 13.7656 11.7079 13.7656 11.2939C13.7656 10.8799 14.1006 10.5439 14.5156 10.5439H17.2876C17.7016 10.5439 18.0376 10.8799 18.0376 11.2939C18.0376 11.7079 17.7016 12.0439 17.2876 12.0439Z"
                                  fill="#07143B"
                                />
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M7.545 20.7021C7.846 20.7021 8.089 20.9451 8.089 21.2461C8.089 21.5471 7.846 21.7911 7.545 21.7911C7.243 21.7911 7 21.5471 7 21.2461C7 20.9451 7.243 20.7021 7.545 20.7021Z"
                                  fill="#07143B"
                                />
                                <mask
                                  id="mask9"
                                  style={{ WebkitMaskType: 'alpha', maskType: 'alpha' }}
                                  maskUnits="userSpaceOnUse"
                                  x="7"
                                  y="20"
                                  width="2"
                                  height="2"
                                >
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M7 21.2452C7 21.5472 7.243 21.7912 7.546 21.7912C7.847 21.7912 8.09 21.5472 8.09 21.2452C8.09 20.9442 7.847 20.7012 7.546 20.7012C7.243 20.7012 7 20.9442 7 21.2452Z"
                                    fill="white"
                                  />
                                </mask>
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M7.544 21.0411C7.431 21.0411 7.339 21.1331 7.339 21.2461C7.339 21.4731 7.75 21.4731 7.75 21.2461C7.75 21.1331 7.657 21.0411 7.544 21.0411ZM7.544 22.5411C6.83 22.5411 6.25 21.9601 6.25 21.2461C6.25 20.5321 6.83 19.9521 7.544 19.9521C8.258 19.9521 8.839 20.5321 8.839 21.2461C8.839 21.9601 8.258 22.5411 7.544 22.5411Z"
                                  fill="#07143B"
                                />
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M18.8263 20.7021C19.1273 20.7021 19.3713 20.9451 19.3713 21.2461C19.3713 21.5471 19.1273 21.7911 18.8263 21.7911C18.5243 21.7911 18.2812 21.5471 18.2812 21.2461C18.2812 20.9451 18.5243 20.7021 18.8263 20.7021Z"
                                  fill="#07143B"
                                />
                                <mask
                                  id="mask65"
                                  style={{ WebkitMaskType: 'alpha', maskType: 'alpha' }}
                                  maskUnits="userSpaceOnUse"
                                  x="18"
                                  y="20"
                                  width="2"
                                  height="2"
                                >
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M18.2812 21.2452C18.2812 21.5472 18.5243 21.7912 18.8263 21.7912C19.1263 21.7912 19.3713 21.5472 19.3713 21.2452C19.3713 20.9442 19.1263 20.7012 18.8263 20.7012C18.5243 20.7012 18.2812 20.9442 18.2812 21.2452Z"
                                    fill="white"
                                  />
                                </mask>
                                <g mask="url(#mask1)">
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M13.2812 26.7902H24.3713V15.7012H13.2812V26.7902Z"
                                    fill="#07143B"
                                  />
                                </g>
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M18.8253 21.0411C18.7133 21.0411 18.6213 21.1331 18.6213 21.2461C18.6222 21.4751 19.0323 21.4731 19.0312 21.2461C19.0312 21.1331 18.9382 21.0411 18.8253 21.0411ZM18.8253 22.5411C18.1113 22.5411 17.5312 21.9601 17.5312 21.2461C17.5312 20.5321 18.1113 19.9521 18.8253 19.9521C19.5403 19.9521 20.1212 20.5321 20.1212 21.2461C20.1212 21.9601 19.5403 22.5411 18.8253 22.5411Z"
                                  fill="#07143B"
                                />
                              </svg>
                              <svg
                                className="ms-2"
                                width="20"
                                viewBox="0 0 21 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <mask
                                  id="mask49"
                                  style={{ WebkitMaskType: 'alpha', maskType: 'alpha' }}
                                  maskUnits="userSpaceOnUse"
                                  x="0"
                                  y="0"
                                  width="20"
                                >
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M0 0H20.4725V19.501H0V0Z"
                                    fill="white"
                                  />
                                </mask>
                                <g mask="url(#mask0)">
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M1.82396 9.12312C3.22596 13.4851 8.76496 17.0121 10.237 17.8851C11.714 17.0031 17.293 13.4371 18.65 9.12712C19.541 6.34112 18.714 2.81212 15.428 1.75312C13.836 1.24212 11.979 1.55312 10.697 2.54512C10.429 2.75112 10.057 2.75512 9.78696 2.55112C8.42896 1.53012 6.65496 1.23112 5.03796 1.75312C1.75696 2.81112 0.932957 6.34012 1.82396 9.12312ZM10.238 19.5011C10.114 19.5011 9.99096 19.4711 9.87896 19.4101C9.56596 19.2391 2.19296 15.1751 0.395957 9.58112C0.394957 9.58112 0.394957 9.58012 0.394957 9.58012C-0.733043 6.05812 0.522957 1.63212 4.57796 0.325118C6.48196 -0.290882 8.55696 -0.019882 10.235 1.03912C11.861 0.0111181 14.021 -0.272882 15.887 0.325118C19.946 1.63412 21.206 6.05912 20.079 9.58012C18.34 15.1101 10.913 19.2351 10.598 19.4081C10.486 19.4701 10.362 19.5011 10.238 19.5011Z"
                                    fill="#07143B"
                                  />
                                </g>
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M16.1547 7.62526C15.7677 7.62526 15.4397 7.32826 15.4077 6.93626C15.3417 6.11426 14.7917 5.42026 14.0087 5.16726C13.6137 5.03926 13.3977 4.61626 13.5247 4.22326C13.6537 3.82926 14.0727 3.61526 14.4687 3.73926C15.8317 4.18026 16.7867 5.38726 16.9037 6.81426C16.9367 7.22726 16.6297 7.58926 16.2167 7.62226C16.1957 7.62426 16.1757 7.62526 16.1547 7.62526Z"
                                  fill="#07143B"
                                />
                              </svg>
                            </div>
                          </div>
                        </div>
                        <div className="d-flex align-items-end">
                          <small className="text-dark">$85</small>
                        </div>
                      </div>
                    </li>
                   
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div
                className="card"
                style={{
                  background: 'url("/src/assets/dashboard/images/User-profile/02.png")',
                  backgroundSize: 'cover',
                }}
              >
                <div className="card-body">
                  <div className="div">
                    <div className="div">
                      <h2 className="text-primary text-special">
                        Today’s
                        <br /> Special
                        <br /> Menu
                      </h2>
                    </div>
                    <div className="text-center">
                      <div>
                        <img
                          src="/src/assets/dashboard/images/User-profile/5.png"
                          className="img-fluid mt-5 w-75"
                          alt="profile-image"
                        />
                      </div>
                      <button
                        type="button"
                        className="btn btn-primary rounded-pill mt-5"
                      >
                        ORDER NOW!
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-body">
                  <h4>Special offer for you</h4>
                  <div className="d-flex pt-3">
                    <img
                      src="/src/assets/dashboard/images/layouts/1.png"
                      className="img-fluid avatar-rounded avatar-100"
                      alt="profile-image"
                    />
                    <div className="d-flex justify-content-between ms-3 w-100">
                      <div>
                        <small className="text-dark fw-bolder heading-title">
                          $7,99
                        </small>
                        <h5 className="mt-4">Buy 1 Get 1 Free</h5>
                      </div>
                      <div>
                        <svg
                          width="25"
                          viewBox="0 0 40 40"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M18.0902 13.864L23.0195 18.7932C23.41 19.1838 23.41 19.8169 23.0195 20.2075L18.0902 25.1367"
                            stroke="#ADB5BD"
                            strokeWidth="2"
                            strokeLinecap="round"
                          />
                          <circle
                            cx="19.5"
                            cy="19.5"
                            r="15.5"
                            transform="rotate(-90 19.5 19.5)"
                            stroke="#ADB5BD"
                            strokeWidth="2"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
             
            </div>
          </div>
        </div>
        <DashboardFooter />
      </main>
    </>
  );
};

export default Dishes;
