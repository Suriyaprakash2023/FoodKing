import {useEffect} from 'react'
import {Link} from 'react-router-dom';
import GridViewIcon from '@mui/icons-material/GridView';
import DinnerDiningIcon from '@mui/icons-material/DinnerDining';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';

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
            <li className="nav-item">
              <a
                className="nav-link"
                data-bs-toggle="collapse"
                href="#sidebar-auth"
                role="button"
                aria-expanded="false"
                aria-controls="sidebar-user"
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
                      d="M12.0865 22C11.9627 22 11.8388 21.9716 11.7271 21.9137L8.12599 20.0496C7.10415 19.5201 6.30481 18.9259 5.68063 18.2336C4.31449 16.7195 3.5544 14.776 3.54232 12.7599L3.50004 6.12426C3.495 5.35842 3.98931 4.67103 4.72826 4.41215L11.3405 2.10679C11.7331 1.96656 12.1711 1.9646 12.5707 2.09992L19.2081 4.32684C19.9511 4.57493 20.4535 5.25742 20.4575 6.02228L20.4998 12.6628C20.5129 14.676 19.779 16.6274 18.434 18.1581C17.8168 18.8602 17.0245 19.4632 16.0128 20.0025L12.4439 21.9088C12.3331 21.9686 12.2103 21.999 12.0865 22Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M11.3194 14.3209C11.1261 14.3219 10.9328 14.2523 10.7838 14.1091L8.86695 12.2656C8.57097 11.9793 8.56795 11.5145 8.86091 11.2262C9.15387 10.9369 9.63207 10.934 9.92906 11.2193L11.3083 12.5451L14.6758 9.22479C14.9698 8.93552 15.448 8.93258 15.744 9.21793C16.041 9.50426 16.044 9.97004 15.751 10.2574L11.8519 14.1022C11.7049 14.2474 11.5127 14.3199 11.3194 14.3209Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </i>
                <span className="item-name">Authentication</span>
                <i className="right-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </i>
              </a>
              <ul
                className="sub-nav collapse"
                id="sidebar-auth"
                data-bs-parent="#sidebar"
              >
                <li className="nav-item">
                  <a className="nav-link" href="auth/sign-in.html">
                    <i className="icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="10"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <g>
                          <circle
                            cx="12"
                            cy="12"
                            r="8"
                            fill="currentColor"
                          ></circle>
                        </g>
                      </svg>
                    </i>
                    <i className="sidenav-mini-icon"> L </i>
                    <span className="item-name">Login</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="auth/sign-up.html">
                    <i className="icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="10"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <g>
                          <circle
                            cx="12"
                            cy="12"
                            r="8"
                            fill="currentColor"
                          ></circle>
                        </g>
                      </svg>
                    </i>
                    <i className="sidenav-mini-icon"> R </i>
                    <span className="item-name">Register</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="auth/confirm-mail.html">
                    <i className="icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="10"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <g>
                          <circle
                            cx="12"
                            cy="12"
                            r="8"
                            fill="currentColor"
                          ></circle>
                        </g>
                      </svg>
                    </i>
                    <i className="sidenav-mini-icon"> C </i>
                    <span className="item-name">Confirm Mail</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="auth/recoverpw.html">
                    <i className="icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="10"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <g>
                          <circle
                            cx="12"
                            cy="12"
                            r="8"
                            fill="currentColor"
                          ></circle>
                        </g>
                      </svg>
                    </i>
                    <i className="sidenav-mini-icon"> R </i>
                    <span className="item-name">Recover password</span>
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                data-bs-toggle="collapse"
                href="#sidebar-user"
                role="button"
                aria-expanded="false"
                aria-controls="sidebar-user"
              >
                <i className="icon">
                  <svg
                    width="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.9488 14.54C8.49884 14.54 5.58789 15.1038 5.58789 17.2795C5.58789 19.4562 8.51765 20.0001 11.9488 20.0001C15.3988 20.0001 18.3098 19.4364 18.3098 17.2606C18.3098 15.084 15.38 14.54 11.9488 14.54Z"
                      fill="currentColor"
                    ></path>
                    <path
                      opacity="0.4"
                      d="M11.949 12.467C14.2851 12.467 16.1583 10.5831 16.1583 8.23351C16.1583 5.88306 14.2851 4 11.949 4C9.61293 4 7.73975 5.88306 7.73975 8.23351C7.73975 10.5831 9.61293 12.467 11.949 12.467Z"
                      fill="currentColor"
                    ></path>
                    <path
                      opacity="0.4"
                      d="M21.0881 9.21923C21.6925 6.84176 19.9205 4.70654 17.664 4.70654C17.4187 4.70654 17.1841 4.73356 16.9549 4.77949C16.9244 4.78669 16.8904 4.802 16.8725 4.82902C16.8519 4.86324 16.8671 4.90917 16.8895 4.93889C17.5673 5.89528 17.9568 7.0597 17.9568 8.30967C17.9568 9.50741 17.5996 10.6241 16.9728 11.5508C16.9083 11.6462 16.9656 11.775 17.0793 11.7948C17.2369 11.8227 17.3981 11.8371 17.5629 11.8416C19.2059 11.8849 20.6807 10.8213 21.0881 9.21923Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M22.8094 14.817C22.5086 14.1722 21.7824 13.73 20.6783 13.513C20.1572 13.3851 18.747 13.205 17.4352 13.2293C17.4155 13.232 17.4048 13.2455 17.403 13.2545C17.4003 13.2671 17.4057 13.2887 17.4316 13.3022C18.0378 13.6039 20.3811 14.916 20.0865 17.6834C20.074 17.8032 20.1698 17.9068 20.2888 17.8888C20.8655 17.8059 22.3492 17.4853 22.8094 16.4866C23.0637 15.9589 23.0637 15.3456 22.8094 14.817Z"
                      fill="currentColor"
                    ></path>
                    <path
                      opacity="0.4"
                      d="M7.04459 4.77973C6.81626 4.7329 6.58077 4.70679 6.33543 4.70679C4.07901 4.70679 2.30701 6.84201 2.9123 9.21947C3.31882 10.8216 4.79355 11.8851 6.43661 11.8419C6.60136 11.8374 6.76343 11.8221 6.92013 11.7951C7.03384 11.7753 7.09115 11.6465 7.02668 11.551C6.3999 10.6234 6.04263 9.50765 6.04263 8.30991C6.04263 7.05904 6.43303 5.89462 7.11085 4.93913C7.13234 4.90941 7.14845 4.86348 7.12696 4.82926C7.10906 4.80135 7.07593 4.78694 7.04459 4.77973Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M3.32156 13.5127C2.21752 13.7297 1.49225 14.1719 1.19139 14.8167C0.936203 15.3453 0.936203 15.9586 1.19139 16.4872C1.65163 17.4851 3.13531 17.8066 3.71195 17.8885C3.83104 17.9065 3.92595 17.8038 3.91342 17.6832C3.61883 14.9167 5.9621 13.6046 6.56918 13.3029C6.59425 13.2885 6.59962 13.2677 6.59694 13.2542C6.59515 13.2452 6.5853 13.2317 6.5656 13.2299C5.25294 13.2047 3.84358 13.3848 3.32156 13.5127Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </i>
                <span className="item-name">Users</span>
                <i className="right-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </i>
              </a>
              <ul
                className="sub-nav collapse"
                id="sidebar-user"
                data-bs-parent="#sidebar"
              >
                <li className="nav-item">
                  <a className="nav-link" href="app/user-profile.html">
                    <i className="icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="10"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <g>
                          <circle
                            cx="12"
                            cy="12"
                            r="8"
                            fill="currentColor"
                          ></circle>
                        </g>
                      </svg>
                    </i>
                    <i className="sidenav-mini-icon"> U </i>
                    <span className="item-name">User Profile</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="app/user-add.html">
                    <i className="icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="10"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <g>
                          <circle
                            cx="12"
                            cy="12"
                            r="8"
                            fill="currentColor"
                          ></circle>
                        </g>
                      </svg>
                    </i>
                    <i className="sidenav-mini-icon"> A </i>
                    <span className="item-name">Add User</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="app/user-list.html">
                    <i className="icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="10"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <g>
                          <circle
                            cx="12"
                            cy="12"
                            r="8"
                            fill="currentColor"
                          ></circle>
                        </g>
                      </svg>
                    </i>
                    <i className="sidenav-mini-icon"> U </i>
                    <span className="item-name">User List</span>
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                data-bs-toggle="collapse"
                href="#utilities-error"
                role="button"
                aria-expanded="false"
                aria-controls="utilities-error"
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
                      d="M11.9912 18.6215L5.49945 21.864C5.00921 22.1302 4.39768 21.9525 4.12348 21.4643C4.0434 21.3108 4.00106 21.1402 4 20.9668V13.7087C4 14.4283 4.40573 14.8725 5.47299 15.37L11.9912 18.6215Z"
                      fill="currentColor"
                    ></path>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M8.89526 2H15.0695C17.7773 2 19.9735 3.06605 20 5.79337V20.9668C19.9989 21.1374 19.9565 21.3051 19.8765 21.4554C19.7479 21.7007 19.5259 21.8827 19.2615 21.9598C18.997 22.0368 18.7128 22.0023 18.4741 21.8641L11.9912 18.6215L5.47299 15.3701C4.40573 14.8726 4 14.4284 4 13.7088V5.79337C4 3.06605 6.19625 2 8.89526 2ZM8.22492 9.62227H15.7486C16.1822 9.62227 16.5336 9.26828 16.5336 8.83162C16.5336 8.39495 16.1822 8.04096 15.7486 8.04096H8.22492C7.79137 8.04096 7.43991 8.39495 7.43991 8.83162C7.43991 9.26828 7.79137 9.62227 8.22492 9.62227Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </i>
                <span className="item-name">Utilities</span>
                <i className="right-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </i>
              </a>
              <ul
                className="sub-nav collapse"
                id="utilities-error"
                data-bs-parent="#sidebar"
              >
                <li className="nav-item">
                  <a className="nav-link" href="errors/error404.html">
                    <i className="icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="10"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <g>
                          <circle
                            cx="12"
                            cy="12"
                            r="8"
                            fill="currentColor"
                          ></circle>
                        </g>
                      </svg>
                    </i>
                    <i className="sidenav-mini-icon"> E </i>
                    <span className="item-name">Error 404</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="errors/error500.html">
                    <i className="icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="10"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <g>
                          <circle
                            cx="12"
                            cy="12"
                            r="8"
                            fill="currentColor"
                          ></circle>
                        </g>
                      </svg>
                    </i>
                    <i className="sidenav-mini-icon"> E </i>
                    <span className="item-name">Error 500</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="errors/maintenance.html">
                    <i className="icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="10"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <g>
                          <circle
                            cx="12"
                            cy="12"
                            r="8"
                            fill="currentColor"
                          ></circle>
                        </g>
                      </svg>
                    </i>
                    <i className="sidenav-mini-icon"> M </i>
                    <span className="item-name">Maintence</span>
                  </a>
                </li>
              </ul>
            </li>
            <li><hr className="hr-horizontal" /></li>
            <li className="nav-item static-item">
              <a className="nav-link static-item disabled" href="#" tabIndex="-1">
                <span className="default-icon">Elements</span>
                <span className="mini-icon">-</span>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                data-bs-toggle="collapse"
                href="#ui"
                role="button"
                aria-expanded="false"
                aria-controls="utilities-error"
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
                      d="M2 11.0786C2.05 13.4166 2.19 17.4156 2.21 17.8566C2.281 18.7996 2.642 19.7526 3.204 20.4246C3.986 21.3676 4.949 21.7886 6.292 21.7886C8.148 21.7986 10.194 21.7986 12.181 21.7986C14.176 21.7986 16.112 21.7986 17.747 21.7886C19.071 21.7886 20.064 21.3566 20.836 20.4246C21.398 19.7526 21.759 18.7896 21.81 17.8566C21.83 17.4856 21.93 13.1446 21.99 11.0786H2Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M11.2451 15.3843V16.6783C11.2451 17.0923 11.5811 17.4283 11.9951 17.4283C12.4091 17.4283 12.7451 17.0923 12.7451 16.6783V15.3843C12.7451 14.9703 12.4091 14.6343 11.9951 14.6343C11.5811 14.6343 11.2451 14.9703 11.2451 15.3843Z"
                      fill="currentColor"
                    ></path>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M10.211 14.5565C10.111 14.9195 9.762 15.1515 9.384 15.1015C6.833 14.7455 4.395 13.8405 2.337 12.4815C2.126 12.3435 2 12.1075 2 11.8555V8.38949C2 6.28949 3.712 4.58149 5.817 4.58149H7.784C7.972 3.12949 9.202 2.00049 10.704 2.00049H13.286C14.787 2.00049 16.018 3.12949 16.206 4.58149H18.183C20.282 4.58149 21.99 6.28949 21.99 8.38949V11.8555C21.99 12.1075 21.863 12.3425 21.654 12.4815C19.592 13.8465 17.144 14.7555 14.576 15.1105C14.541 15.1155 14.507 15.1175 14.473 15.1175C14.134 15.1175 13.831 14.8885 13.746 14.5525C13.544 13.7565 12.821 13.1995 11.99 13.1995C11.148 13.1995 10.433 13.7445 10.211 14.5565ZM13.286 3.50049H10.704C10.031 3.50049 9.469 3.96049 9.301 4.58149H14.688C14.52 3.96049 13.958 3.50049 13.286 3.50049Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </i>
                <span className="item-name">UI Elements</span>
                <i className="right-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </i>
              </a>
              <ul className="sub-nav collapse" id="ui" data-parent="#sidebar">
                <li className="nav-item">
                  <a className="nav-link" href="ui-elements/ui-avatars.html">
                    <i className="icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="10"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <g>
                          <circle
                            cx="12"
                            cy="12"
                            r="8"
                            fill="currentColor"
                          ></circle>
                        </g>
                      </svg>
                    </i>
                    <i className="sidenav-mini-icon"> A</i>
                    <span className="item-name">Avatars</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="ui-elements/ui-alerts.html">
                    <i className="icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="10"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <g>
                          <circle
                            cx="12"
                            cy="12"
                            r="8"
                            fill="currentColor"
                          ></circle>
                        </g>
                      </svg>
                    </i>
                    <i className="sidenav-mini-icon"> A </i>
                    <span className="item-name">Alerts</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="ui-elements/ui-badges.html">
                    <i className="icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="10"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <g>
                          <circle
                            cx="12"
                            cy="12"
                            r="8"
                            fill="currentColor"
                          ></circle>
                        </g>
                      </svg>
                    </i>
                    <i className="sidenav-mini-icon"> B </i>
                    <span className="item-name">Badge</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="ui-elements/ui-breadcrumb.html">
                    <i className="icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="10"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <g>
                          <circle
                            cx="12"
                            cy="12"
                            r="8"
                            fill="currentColor"
                          ></circle>
                        </g>
                      </svg>
                    </i>
                    <i className="sidenav-mini-icon"> B </i>
                    <span className="item-name">Breadcrumb</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="ui-elements/ui-buttons.html">
                    <i className="icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="10"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <g>
                          <circle
                            cx="12"
                            cy="12"
                            r="8"
                            fill="currentColor"
                          ></circle>
                        </g>
                      </svg>
                    </i>
                    <i className="sidenav-mini-icon"> B </i>
                    <span className="item-name">Buttons</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="ui-elements/ui-buttons-group.html">
                    <i className="icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="10"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <g>
                          <circle
                            cx="12"
                            cy="12"
                            r="8"
                            fill="currentColor"
                          ></circle>
                        </g>
                      </svg>
                    </i>
                    <i className="sidenav-mini-icon"> B </i>
                    <span className="item-name">Buttons Group</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="ui-elements/ui-boxshadow.html">
                    <i className="icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="10"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <g>
                          <circle
                            cx="12"
                            cy="12"
                            r="8"
                            fill="currentColor"
                          ></circle>
                        </g>
                      </svg>
                    </i>
                    <i className="sidenav-mini-icon"> B </i>
                    <span className="item-name">Box Shadow</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="ui-elements/ui-color.html">
                    <i className="icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="10"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <g>
                          <circle
                            cx="12"
                            cy="12"
                            r="8"
                            fill="currentColor"
                          ></circle>
                        </g>
                      </svg>
                    </i>
                    <i className="sidenav-mini-icon"> C</i>
                    <span className="item-name">Colors</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="ui-elements/ui-cards.html">
                    <i className="icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="10"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <g>
                          <circle
                            cx="12"
                            cy="12"
                            r="8"
                            fill="currentColor"
                          ></circle>
                        </g>
                      </svg>
                    </i>
                    <i className="sidenav-mini-icon"> C </i>
                    <span className="item-name">Cards</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="ui-elements/ui-carousel.html">
                    <i className="icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="10"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <g>
                          <circle
                            cx="12"
                            cy="12"
                            r="8"
                            fill="currentColor"
                          ></circle>
                        </g>
                      </svg>
                    </i>
                    <i className="sidenav-mini-icon"> C </i>
                    <span className="item-name">Carousel</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="ui-elements/ui-grid.html">
                    <i className="icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="10"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <g>
                          <circle
                            cx="12"
                            cy="12"
                            r="8"
                            fill="currentColor"
                          ></circle>
                        </g>
                      </svg>
                    </i>
                    <i className="sidenav-mini-icon"> G </i>
                    <span className="item-name">Grid</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="ui-elements/ui-helper-classes.html">
                    <i className="icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="10"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <g>
                          <circle
                            cx="12"
                            cy="12"
                            r="8"
                            fill="currentColor"
                          ></circle>
                        </g>
                      </svg>
                    </i>
                    <i className="sidenav-mini-icon"> H </i>
                    <span className="item-name">Helper classes</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="ui-elements/ui-images.html">
                    <i className="icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="10"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <g>
                          <circle
                            cx="12"
                            cy="12"
                            r="8"
                            fill="currentColor"
                          ></circle>
                        </g>
                      </svg>
                    </i>
                    <i className="sidenav-mini-icon"> I </i>
                    <span className="item-name">Images</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="ui-elements/ui-list-group.html">
                    <i className="icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="10"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <g>
                          <circle
                            cx="12"
                            cy="12"
                            r="8"
                            fill="currentColor"
                          ></circle>
                        </g>
                      </svg>
                    </i>
                    <i className="sidenav-mini-icon"> L </i>
                    <span className="item-name">List Group</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="ui-elements/ui-modal.html">
                    <i className="icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="10"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <g>
                          <circle
                            cx="12"
                            cy="12"
                            r="8"
                            fill="currentColor"
                          ></circle>
                        </g>
                      </svg>
                    </i>
                    <i className="sidenav-mini-icon"> M </i>
                    <span className="item-name">Modal</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="ui-elements/ui-notifications.html">
                    <i className="icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="10"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <g>
                          <circle
                            cx="12"
                            cy="12"
                            r="8"
                            fill="currentColor"
                          ></circle>
                        </g>
                      </svg>
                    </i>
                    <i className="sidenav-mini-icon"> N </i>
                    <span className="item-name">Notifications</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="ui-elements/ui-pagination.html">
                    <i className="icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="10"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <g>
                          <circle
                            cx="12"
                            cy="12"
                            r="8"
                            fill="currentColor"
                          ></circle>
                        </g>
                      </svg>
                    </i>
                    <i className="sidenav-mini-icon"> P </i>
                    <span className="item-name">Pagination</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="ui-elements/ui-popovers.html">
                    <i className="icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="10"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <g>
                          <circle
                            cx="12"
                            cy="12"
                            r="8"
                            fill="currentColor"
                          ></circle>
                        </g>
                      </svg>
                    </i>
                    <i className="sidenav-mini-icon"> P </i>
                    <span className="item-name">Popovers</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="ui-elements/ui-typography.html">
                    <i className="icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="10"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <g>
                          <circle
                            cx="12"
                            cy="12"
                            r="8"
                            fill="currentColor"
                          ></circle>
                        </g>
                      </svg>
                    </i>
                    <i className="sidenav-mini-icon"> T </i>
                    <span className="item-name">Typography</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="ui-elements/ui-tabs.html">
                    <i className="icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="10"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <g>
                          <circle
                            cx="12"
                            cy="12"
                            r="8"
                            fill="currentColor"
                          ></circle>
                        </g>
                      </svg>
                    </i>
                    <i className="sidenav-mini-icon"> T </i>
                    <span className="item-name">Tabs</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="ui-elements/ui-tooltips.html">
                    <i className="icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="10"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <g>
                          <circle
                            cx="12"
                            cy="12"
                            r="8"
                            fill="currentColor"
                          ></circle>
                        </g>
                      </svg>
                    </i>
                    <i className="sidenav-mini-icon"> T </i>
                    <span className="item-name">Tooltips</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="ui-elements/ui-embed-video.html">
                    <i className="icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="10"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <g>
                          <circle
                            cx="12"
                            cy="12"
                            r="8"
                            fill="currentColor"
                          ></circle>
                        </g>
                      </svg>
                    </i>
                    <i className="sidenav-mini-icon"> V </i>
                    <span className="item-name">Video</span>
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                data-bs-toggle="collapse"
                href="#sidebar-widget"
                role="button"
                aria-expanded="false"
                aria-controls="sidebar-widget"
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
                      d="M21.25 13.4764C20.429 13.4764 19.761 12.8145 19.761 12.001C19.761 11.1865 20.429 10.5246 21.25 10.5246C21.449 10.5246 21.64 10.4463 21.78 10.3076C21.921 10.1679 22 9.97864 22 9.78146L21.999 7.10415C21.999 4.84102 20.14 3 17.856 3H6.144C3.86 3 2.001 4.84102 2.001 7.10415L2 9.86766C2 10.0648 2.079 10.2541 2.22 10.3938C2.36 10.5325 2.551 10.6108 2.75 10.6108C3.599 10.6108 4.239 11.2083 4.239 12.001C4.239 12.8145 3.571 13.4764 2.75 13.4764C2.336 13.4764 2 13.8093 2 14.2195V16.8949C2 19.158 3.858 21 6.143 21H17.857C20.142 21 22 19.158 22 16.8949V14.2195C22 13.8093 21.664 13.4764 21.25 13.4764Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M15.4303 11.5887L14.2513 12.7367L14.5303 14.3597C14.5783 14.6407 14.4653 14.9177 14.2343 15.0837C14.0053 15.2517 13.7063 15.2727 13.4543 15.1387L11.9993 14.3737L10.5413 15.1397C10.4333 15.1967 10.3153 15.2267 10.1983 15.2267C10.0453 15.2267 9.89434 15.1787 9.76434 15.0847C9.53434 14.9177 9.42134 14.6407 9.46934 14.3597L9.74734 12.7367L8.56834 11.5887C8.36434 11.3907 8.29334 11.0997 8.38134 10.8287C8.47034 10.5587 8.70034 10.3667 8.98134 10.3267L10.6073 10.0897L11.3363 8.61268C11.4633 8.35868 11.7173 8.20068 11.9993 8.20068H12.0013C12.2843 8.20168 12.5383 8.35968 12.6633 8.61368L13.3923 10.0897L15.0213 10.3277C15.2993 10.3667 15.5293 10.5587 15.6173 10.8287C15.7063 11.0997 15.6353 11.3907 15.4303 11.5887Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </i>
                <span className="item-name">widget</span>
                <i className="right-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </i>
              </a>
              <ul
                className="sub-nav collapse"
                id="sidebar-widget"
                data-bs-parent="#sidebar"
              >
                <li className="nav-item">
                  <a className="nav-link" href="widget/widgetbasic.html">
                    <i className="icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="10"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <g>
                          <circle
                            cx="12"
                            cy="12"
                            r="8"
                            fill="currentColor"
                          ></circle>
                        </g>
                      </svg>
                    </i>
                    <i className="sidenav-mini-icon"> W </i>
                    <span className="item-name">Widget Basic</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="widget/widgetchart.html">
                    <i className="icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="10"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <g>
                          <circle
                            cx="12"
                            cy="12"
                            r="8"
                            fill="currentColor"
                          ></circle>
                        </g>
                      </svg>
                    </i>
                    <i className="sidenav-mini-icon"> W </i>
                    <span className="item-name">Widget Chart</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="widget/widgetcard.html">
                    <i className="icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="10"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <g>
                          <circle
                            cx="12"
                            cy="12"
                            r="8"
                            fill="currentColor"
                          ></circle>
                        </g>
                      </svg>
                    </i>
                    <i className="sidenav-mini-icon"> W </i>
                    <span className="item-name">Widget Card</span>
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                data-bs-toggle="collapse"
                href="#sidebar-maps"
                role="button"
                aria-expanded="false"
                aria-controls="sidebar-maps"
              >
                <i className="icon">
                  <svg
                    width="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M8.53162 2.93677C10.7165 1.66727 13.402 1.68946 15.5664 2.99489C17.7095 4.32691 19.012 6.70418 18.9998 9.26144C18.95 11.8019 17.5533 14.19 15.8075 16.0361C14.7998 17.1064 13.6726 18.0528 12.4488 18.856C12.3228 18.9289 12.1848 18.9777 12.0415 19C11.9036 18.9941 11.7693 18.9534 11.6508 18.8814C9.78243 17.6746 8.14334 16.134 6.81233 14.334C5.69859 12.8314 5.06584 11.016 5 9.13442C4.99856 6.57225 6.34677 4.20627 8.53162 2.93677ZM9.79416 10.1948C10.1617 11.1008 11.0292 11.6918 11.9916 11.6918C12.6221 11.6964 13.2282 11.4438 13.6748 10.9905C14.1214 10.5371 14.3715 9.92064 14.3692 9.27838C14.3726 8.29804 13.7955 7.41231 12.9073 7.03477C12.0191 6.65723 10.995 6.86235 10.3133 7.55435C9.63159 8.24635 9.42664 9.28872 9.79416 10.1948Z"
                      fill="currentColor"
                    ></path>
                    <ellipse
                      opacity="0.4"
                      cx="12"
                      cy="21"
                      rx="5"
                      ry="1"
                      fill="currentColor"
                    ></ellipse>
                  </svg>
                </i>
                <span className="item-name">Maps</span>
                <i className="right-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </i>
              </a>
              <ul
                className="sub-nav collapse"
                id="sidebar-maps"
                data-bs-parent="#sidebar"
              >
                <li className="nav-item">
                  <a className="nav-link" href="maps/google.html">
                    <i className="icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="10"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <g>
                          <circle
                            cx="12"
                            cy="12"
                            r="8"
                            fill="currentColor"
                          ></circle>
                        </g>
                      </svg>
                    </i>
                    <i className="sidenav-mini-icon"> G </i>
                    <span className="item-name">Google</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="maps/vector.html">
                    <i className="icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="10"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <g>
                          <circle
                            cx="12"
                            cy="12"
                            r="8"
                            fill="currentColor"
                          ></circle>
                        </g>
                      </svg>
                    </i>
                    <i className="sidenav-mini-icon"> V </i>
                    <span className="item-name">Vector</span>
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                data-bs-toggle="collapse"
                href="#sidebar-form"
                role="button"
                aria-expanded="false"
                aria-controls="sidebar-form"
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
                      d="M16.191 2H7.81C4.77 2 3 3.78 3 6.83V17.16C3 20.26 4.77 22 7.81 22H16.191C19.28 22 21 20.26 21 17.16V6.83C21 3.78 19.28 2 16.191 2Z"
                      fill="currentColor"
                    ></path>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M8.07996 6.6499V6.6599C7.64896 6.6599 7.29996 7.0099 7.29996 7.4399C7.29996 7.8699 7.64896 8.2199 8.07996 8.2199H11.069C11.5 8.2199 11.85 7.8699 11.85 7.4289C11.85 6.9999 11.5 6.6499 11.069 6.6499H8.07996ZM15.92 12.7399H8.07996C7.64896 12.7399 7.29996 12.3899 7.29996 11.9599C7.29996 11.5299 7.64896 11.1789 8.07996 11.1789H15.92C16.35 11.1789 16.7 11.5299 16.7 11.9599C16.7 12.3899 16.35 12.7399 15.92 12.7399ZM15.92 17.3099H8.07996C7.77996 17.3499 7.48996 17.1999 7.32996 16.9499C7.16996 16.6899 7.16996 16.3599 7.32996 16.1099C7.48996 15.8499 7.77996 15.7099 8.07996 15.7399H15.92C16.319 15.7799 16.62 16.1199 16.62 16.5299C16.62 16.9289 16.319 17.2699 15.92 17.3099Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </i>
                <span className="item-name">Form</span>
                <i className="right-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </i>
              </a>
              <ul
                className="sub-nav collapse"
                id="sidebar-form"
                data-bs-parent="#sidebar"
              >
                <li className="nav-item">
                  <a className="nav-link" href="form/form-element.html">
                    <i className="icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="10"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <g>
                          <circle
                            cx="12"
                            cy="12"
                            r="8"
                            fill="currentColor"
                          ></circle>
                        </g>
                      </svg>
                    </i>
                    <i className="sidenav-mini-icon"> E </i>
                    <span className="item-name">Elements</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="form/form-wizard.html">
                    <i className="icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="10"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <g>
                          <circle
                            cx="12"
                            cy="12"
                            r="8"
                            fill="currentColor"
                          ></circle>
                        </g>
                      </svg>
                    </i>
                    <i className="sidenav-mini-icon"> W </i>
                    <span className="item-name">Wizard</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="form/form-validation.html">
                    <i className="icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="10"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <g>
                          <circle
                            cx="12"
                            cy="12"
                            r="8"
                            fill="currentColor"
                          ></circle>
                        </g>
                      </svg>
                    </i>
                    <i className="sidenav-mini-icon"> V </i>
                    <span className="item-name">Validation</span>
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                data-bs-toggle="collapse"
                href="#sidebar-table"
                role="button"
                aria-expanded="false"
                aria-controls="sidebar-table"
              >
                <i className="icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M2 5C2 4.44772 2.44772 4 3 4H8.66667H21C21.5523 4 22 4.44772 22 5V8H15.3333H8.66667H2V5Z"
                      fill="currentColor"
                      stroke="currentColor"
                    />
                    <path
                      d="M6 8H2V11M6 8V20M6 8H14M6 20H3C2.44772 20 2 19.5523 2 19V11M6 20H14M14 8H22V11M14 8V20M14 20H21C21.5523 20 22 19.5523 22 19V11M2 11H22M2 14H22M2 17H22M10 8V20M18 8V20"
                      stroke="currentColor"
                    />
                  </svg>
                </i>
                <span className="item-name">Table</span>
                <i className="right-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </i>
              </a>
              <ul
                className="sub-nav collapse"
                id="sidebar-table"
                data-bs-parent="#sidebar"
              >
                <li className="nav-item">
                  <a className="nav-link" href="table/bootstrap-table.html">
                    <i className="icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="10"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <g>
                          <circle
                            cx="12"
                            cy="12"
                            r="8"
                            fill="currentColor"
                          ></circle>
                        </g>
                      </svg>
                    </i>
                    <i className="sidenav-mini-icon"> B </i>
                    <span className="item-name">Bootstrap Table</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="table/table-data.html">
                    <i className="icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="10"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <g>
                          <circle
                            cx="12"
                            cy="12"
                            r="8"
                            fill="currentColor"
                          ></circle>
                        </g>
                      </svg>
                    </i>
                    <i className="sidenav-mini-icon"> D </i>
                    <span className="item-name">Datatable</span>
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item mb-5 pb-5">
              <a
                className="nav-link"
                data-bs-toggle="collapse"
                href="#sidebar-icons"
                role="button"
                aria-expanded="false"
                aria-controls="sidebar-icons"
              >
                <i className="icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path
                      d="M8 10.5378C8 9.43327 8.89543 8.53784 10 8.53784H11.3333C12.4379 8.53784 13.3333 9.43327 13.3333 10.5378V19.8285C13.3333 20.9331 14.2288 21.8285 15.3333 21.8285H16C16 21.8285 12.7624 23.323 10.6667 22.9361C10.1372 22.8384 9.52234 22.5913 9.01654 22.3553C8.37357 22.0553 8 21.3927 8 20.6832V10.5378Z"
                      fill="currentColor"
                    />
                    <rect
                      opacity="0.4"
                      x="8"
                      y="1"
                      width="5"
                      height="5"
                      rx="2.5"
                      fill="currentColor"
                    />
                  </svg>
                </i>
                <span className="item-name">Icons</span>
                <i className="right-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </i>
              </a>
              <ul
                className="sub-nav collapse"
                id="sidebar-icons"
                data-bs-parent="#sidebar"
              >
                <li className="nav-item">
                  <a className="nav-link" href="icons/solid.html">
                    <i className="icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="10"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <g>
                          <circle
                            cx="12"
                            cy="12"
                            r="8"
                            fill="currentColor"
                          ></circle>
                        </g>
                      </svg>
                    </i>
                    <i className="sidenav-mini-icon"> S </i>
                    <span className="item-name">Solid</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="icons/outline.html">
                    <i className="icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="10"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <g>
                          <circle
                            cx="12"
                            cy="12"
                            r="8"
                            fill="currentColor"
                          ></circle>
                        </g>
                      </svg>
                    </i>
                    <i className="sidenav-mini-icon"> O </i>
                    <span className="item-name">Outlined</span></a
                  >
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="icons/dual-tone.html">
                    <i className="icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="10"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <g>
                          <circle
                            cx="12"
                            cy="12"
                            r="8"
                            fill="currentColor"
                          ></circle>
                        </g>
                      </svg>
                    </i>
                    <i className="sidenav-mini-icon"> D </i>
                    <span className="item-name">Dual Tone</span>
                  </a>
                </li>
              </ul>
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
