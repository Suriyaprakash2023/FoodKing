import {useEffect} from 'react'
import {Link} from 'react-router-dom';
import GridViewIcon from '@mui/icons-material/GridView';
import DinnerDiningIcon from '@mui/icons-material/DinnerDining';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import AssuredWorkloadIcon from '@mui/icons-material/AssuredWorkload';
const DashboardSideNav = () => {

  // useEffect(() => {
  //   // Load custom css
  //   import ("/src/components/Dashboard/custom.css");

  //   // Load main site CSS

  //   import("/src/assets/dashboard/theme-c9540983.css");

  //   // Load main site JS
  //   import("/src/assets/dashboard/theme-b118ffc1.js");
  // }, []);


  return (
    <>
      <aside
      className="sidebar sidebar-default sidebar-hover sidebar-mini navs-pill-all"
    >
      <div
        className="sidebar-header d-flex align-items-center justify-content-start"
      >
        <a  className="navbar-brand">
          {/* Logo start*/}
          <div className="logo">
          <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_337_77)">
            <path d="M41.9875 11.2475C41.6232 10.6176 40.8173 10.4021 40.1873 10.766L23.8184 20.1178V1.31836C23.8184 0.590273 23.2281 0 22.5 0C16.49 0 10.8398 2.34044 6.59004 6.59004C2.34044 10.8398 0 16.49 0 22.5C0 28.51 2.34044 34.1602 6.59004 38.41C10.8398 42.6596 16.49 45 22.5 45C28.51 45 34.1602 42.6596 38.41 38.41C42.6596 34.1602 45 28.51 45 22.5C45 18.5447 43.9582 14.6537 41.9875 11.2475ZM40.3265 13.7302C41.6623 16.4445 42.3633 19.4503 42.3633 22.5C42.3633 25.593 41.6599 28.5774 40.3311 31.2725L37.5362 29.6588C38.5734 27.4888 39.1551 25.0611 39.1551 22.4999C39.1551 20.0152 38.5977 17.5663 37.5377 15.3402L40.3265 13.7302ZM8.48162 22.5C8.48162 20.4186 8.93821 18.442 9.75551 16.6642L19.8633 22.5L9.75551 28.3358C8.93821 26.558 8.48162 24.5814 8.48162 22.5ZM21.1816 20.2165L11.0776 14.3829C13.381 11.1509 17.0195 8.93303 21.1816 8.54306V20.2165ZM21.1816 24.7835V36.4559C17.0197 36.0658 13.3804 33.8493 11.077 30.6174L21.1816 24.7835ZM23.8184 24.7835L33.923 30.6174C31.6196 33.8493 27.9803 36.0658 23.8184 36.4559V24.7835ZM25.1367 22.5L35.2474 16.6626C36.0816 18.4847 36.5184 20.4782 36.5184 22.5C36.5184 24.5814 36.0618 26.558 35.2444 28.3358L25.1367 22.5ZM8.45455 8.45455C11.8939 5.01521 16.3719 2.99241 21.1816 2.67952V5.89711C16.0461 6.30123 11.5588 9.04518 8.78643 13.0602L5.99027 11.4458C6.70526 10.3826 7.52836 9.38074 8.45455 8.45455ZM4.66893 13.7275L7.46385 15.3412C6.42656 17.5111 5.8449 19.9388 5.8449 22.5C5.8449 25.0612 6.42656 27.4889 7.46385 29.6589L4.66893 31.2725C3.34011 28.5774 2.63672 25.593 2.63672 22.5C2.63672 19.407 3.34011 16.4226 4.66893 13.7275ZM5.99027 33.5543L8.78643 31.9399C11.5588 35.9549 16.0461 38.6989 21.1816 39.103V42.3192C16.3722 42.0062 11.8938 39.9847 8.45455 36.5455C7.52836 35.6193 6.70526 34.6174 5.99027 33.5543ZM36.5454 36.5454C33.1063 39.9846 28.6278 42.0061 23.8184 42.3192V39.1029C28.9539 38.6988 33.4412 35.9548 36.2136 31.9398L39.0097 33.5542C38.2947 34.6174 37.4716 35.6193 36.5454 36.5454Z" fill="#D12525"/>
            <path d="M17.5734 32.3506C18.263 32.3506 18.9236 31.7442 18.8917 31.0322C18.8597 30.3179 18.3124 29.7139 17.5734 29.7139C16.8838 29.7139 16.2231 30.3202 16.255 31.0322C16.287 31.7465 16.8343 32.3506 17.5734 32.3506Z" fill="#FFB936"/>
            <path d="M27.4269 29.7139C26.7373 29.7139 26.0766 30.3202 26.1085 31.0322C26.1405 31.7465 26.6878 32.3506 27.4269 32.3506C28.1165 32.3506 28.7772 31.7442 28.7453 31.0322C28.7133 30.3179 28.166 29.7139 27.4269 29.7139Z" fill="#FFB936"/>
            <path d="M17.5734 15.2861C18.263 15.2861 18.9236 14.6798 18.8917 13.9678C18.8597 13.2535 18.3124 12.6494 17.5734 12.6494C16.8838 12.6494 16.2231 13.2558 16.255 13.9678C16.287 14.6821 16.8343 15.2861 17.5734 15.2861Z" fill="#FFB936"/>
            <path d="M32.3527 21.1816C31.6631 21.1816 31.0024 21.788 31.0343 22.5C31.0663 23.2143 31.6136 23.8184 32.3527 23.8184C33.0423 23.8184 33.7029 23.212 33.671 22.5C33.639 21.7857 33.0917 21.1816 32.3527 21.1816Z" fill="#FFB936"/>
            <path d="M12.6476 21.1816C11.958 21.1816 11.2973 21.788 11.3292 22.5C11.3612 23.2143 11.9085 23.8184 12.6476 23.8184C13.3372 23.8184 13.9979 23.212 13.966 22.5C13.934 21.7857 13.3867 21.1816 12.6476 21.1816Z" fill="#FFB936"/>
            </g>
            <defs>
            <clipPath id="clip0_337_77">
            <rect width="45" height="45" fill="white"/>
            </clipPath>
            </defs>
          </svg>

          </div>
          <div className="logo-hover">
            <img
              src="/src/assets/website/img/logo/logo.svg"
              className="img-fluid logo-img"
              alt="img4"
            />
          </div>

          {/* logo End--> */}
        </a>
        <div className="sidebar-toggle" data-toggle="sidebar" data-active="true">
          <i className="icon">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.25 12.2744L19.25 12.2744"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M10.2998 18.2988L4.2498 12.2748L10.2998 6.24976"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </i>
        </div>
      </div>
      <div className="sidebar-body pt-0 data-scrollbar">
        <div className="navbar-collapse" id="sidebar">
          {/* Sidebar Menu Start --> */}
          <ul className="navbar-nav iq-main-menu">
            
            <li className="nav-item">
              <Link to='/dashboard'
                className="nav-link"
                
              >
                <i className="icon">
                  <svg
                    width="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      opacity="0.4"
                      d="M16.0756 2H19.4616C20.8639 2 22.0001 3.14585 22.0001 4.55996V7.97452C22.0001 9.38864 20.8639 10.5345 19.4616 10.5345H16.0756C14.6734 10.5345 13.5371 9.38864 13.5371 7.97452V4.55996C13.5371 3.14585 14.6734 2 16.0756 2Z"
                      fill="currentColor"
                    ></path>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M4.53852 2H7.92449C9.32676 2 10.463 3.14585 10.463 4.55996V7.97452C10.463 9.38864 9.32676 10.5345 7.92449 10.5345H4.53852C3.13626 10.5345 2 9.38864 2 7.97452V4.55996C2 3.14585 3.13626 2 4.53852 2ZM4.53852 13.4655H7.92449C9.32676 13.4655 10.463 14.6114 10.463 16.0255V19.44C10.463 20.8532 9.32676 22 7.92449 22H4.53852C3.13626 22 2 20.8532 2 19.44V16.0255C2 14.6114 3.13626 13.4655 4.53852 13.4655ZM19.4615 13.4655H16.0755C14.6732 13.4655 13.537 14.6114 13.537 16.0255V19.44C13.537 20.8532 14.6732 22 16.0755 22H19.4615C20.8637 22 22 20.8532 22 19.44V16.0255C22 14.6114 20.8637 13.4655 19.4615 13.4655Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </i>
                <span className="item-name">Home</span>
                
              </Link>
             
            </li>
            <li>
              <hr className="hr-horizontal" />
              
            </li>
            
            <li className="nav-item">
              <Link to='/orders'
                className="nav-link"
                
              >
                <LocalShippingIcon/>
                <span className="item-name">Orders</span>
              
              </Link>
              
            </li>
            <li>
              <hr className="hr-horizontal" />
              
            </li>
            
            <li className="nav-item">
              <Link to='/dishes'
                className="nav-link"
                
              >
                <DinnerDiningIcon/>
                <span className="item-name">Dishes</span>
              
              </Link>
              
            </li>

            <li>
              <hr className="hr-horizontal" />
              
            </li>

            <li className="nav-item">
              <Link to='/payments'
                className="nav-link"
                
              >
                <AssuredWorkloadIcon/>
                <span className="item-name">Payments</span>
              
              </Link>
              
            </li>

          </ul>
          {/* Sidebar Menu End --> */}
        </div>
      </div>

      <div className="sidebar-footer"></div>
    </aside>
      
    </>
  )
}

export default DashboardSideNav
