import { useEffect,useContext } from "react";
import './custom.css';
import '../../assets/dashboard/theme-c9540983.css';
import '../../assets/dashboard/favicon-c43f27ef.ico';
import '../../assets/dashboard/theme-b118ffc1.js';
import '../../assets/dashboard/admin-customers-list-13df649b.js';
// import '../../assets/dashboard/admin-manage-bb291f62.js';
import '../../assets/dashboard/admin-order-list-7159724c.js';
import '../../assets/dashboard/admin-product-add-f0a7687b.js';
import '../../assets/dashboard/admin-restaurants-details-2ed11d26.js';
import '../../assets/dashboard/admin-seller-list-13df649b.js';
import '../../assets/dashboard/admin-wallet-f2ea3253.js';
// import '../../assets/dashboard/apexcharts.common-f89256c1.js';
import '../../assets/dashboard/auth-login-1c0b6aa4.js';
import '../../assets/dashboard/form-input-spin-59c6a334.js';
import '../../assets/dashboard/free-mode-d251b1d1.js';
import '../../assets/dashboard/home-c1b793e9.js';
import '../../assets/dashboard/index-a4e39586.js';
import '../../assets/dashboard/navigation-f8e75545.js';
import '../../assets/dashboard/product-detail-80419c03.js';
import '../../assets/dashboard/product-range-2302f40f.js';
import '../../assets/dashboard/theme-b118ffc1.js';
import '../../assets/dashboard/thumbs-a96dec08.js';



// import DashboardHeader from "../Dashboard/DashboardHeader.jsx"
// import DashboardSideNav from "./DashboardSideNav.jsx";
// import AuthContext from '../context/AuthContext.jsx';

const Dashboard = () => {
  useEffect(() => {
    // Load custom css
    import ("/src/components/Dashboard/custom.css");

    // Load main site CSS

    import("/src/assets/dashboard/theme-c9540983.css");

    // Load main site JS
    import("/src/assets/dashboard/theme-b118ffc1.js");
  }, []);

  const { login,userData,isAuthenticated } = useContext(AuthContext);
  // console.log(userData,"dash")
  return (
    <>
        <DashboardHeader />

      {/* Start Sidebar --> */}
      
        <DashboardSideNav/>
      {/* End Sidebar --> */}

      {/* Start Content --> */}


      <div className="w-full lg:ps-64">
        <div className="p-6 page-content">
          <div className="flex items-center justify-between w-full mb-6">
            <h4 className="text-xl font-medium">Home</h4>

            <ol
              aria-label="Breadcrumb"
              className="hidden md:flex items-center whitespace-nowrap min-w-0 gap-2"
            >
              <li className="text-sm">
                <a
                  className="flex items-center gap-2 align-middle text-default-800 transition-all leading-none hover:text-primary-500"
                  href=""
                >
                  Admin
                  <i className="w-4 h-4" data-lucide="chevron-right"></i>
                </a>
              </li>

              <li
                aria-current="page"
                className="text-sm font-medium text-primary truncate leading-none hover:text-primary-500"
              >
                Home
              </li>
            </ol>
          </div>
          <div className="grid xl:grid-cols-3 grid-cols-1 gap-6">
            <div className="xl:col-span-2">
              <div className="flex">
                <div className="relative rounded-lg overflow-hidden bg-no-repeat bg-cover lg:bg-right bg-top bg-[url(../images/other/offer-bg2.png)] w-full">
                  <div className="absolute inset-0 bg-black/10"></div>
                  <div className="relative p-8 md:p-12">
                    <h5 className="text-2xl text-white uppercase mb-2">
                      Up to
                    </h5>
                    <h4 className="text-2xl text-primary font-semibold mb-4">
                      50% OFF
                    </h4>
                    <p className="text-base text-white mb-6 max-w-lg">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt.{" "}
                    </p>
                    <a
                      href=""
                      className="inline-flex items-center justify-center gap-2 rounded-full border border-primary bg-primary px-10 py-3 text-center text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:border-primary-700 hover:bg-primary-500"
                    >
                      Order Now
                    </a>
                  </div>
                </div>
              </div>

              <div className="py-10">
                <div className="flex items-center mb-10">
                  <h3 className="text-xl font-semibold text-default-950">
                    Analytics Overview
                  </h3>
                </div>
                <div className="grid lg:grid-cols-4 grid-cols-2 gap-6">
                  <div className="border border-default-200 rounded-lg p-4 overflow-hidden text-center hover:border-primary transition-all duration-300">
                    <h4 className="text-2xl text-primary font-semibold mb-2">
                      12.56K
                    </h4>
                    <h6 className="text-lg font-medium text-default-950 mb-4">
                      Total Revenue
                    </h6>
                    <p className="text-sm text-default-600">10% Increase</p>
                  </div>
                  {/* end grid-cols --> */}
                  <div className="border border-default-200 rounded-lg p-4 overflow-hidden text-center hover:border-primary transition-all duration-300">
                    <h4 className="text-2xl text-primary font-semibold mb-2">
                      2.5K
                    </h4>
                    <h6 className="text-lg font-medium text-default-950 mb-4">
                      New Orders
                    </h6>
                    <p className="text-sm text-default-600">05% Increase</p>
                  </div>
                  {/* end grid-cols --> */}
                  <div className="border border-default-200 rounded-lg p-4 overflow-hidden text-center hover:border-primary transition-all duration-300">
                    <h4 className="text-2xl text-primary font-semibold mb-2">
                      400
                    </h4>
                    <h6 className="text-lg font-medium text-default-950 mb-4">
                      Received Order
                    </h6>
                    <p className="text-sm text-default-600">30% Increase</p>
                  </div>
                  {/* end grid-cols --> */}
                  <div className="border border-default-200 rounded-lg p-4 overflow-hidden text-center hover:border-primary transition-all duration-300">
                    <h4 className="text-2xl text-primary font-semibold mb-2">
                      476
                    </h4>
                    <h6 className="text-lg font-medium text-default-950 mb-4">
                      Reviews
                    </h6>
                    <p className="text-sm text-default-600">15% Increase</p>
                  </div>
                  {/* end grid-cols  */}
                </div>
                {/* end grid  */}
              </div>

              <div className="pb-10">
                <div className="flex flex-wrap items-center justify-between gap-4 mb-10">
                  <h3 className="text-xl font-semibold text-default-950">
                    Category
                  </h3>
                  <a
                    href="product-grid.html"
                    className="inline-flex items-center gap-1 text-sm text-primary font-medium hover:text-primary-500"
                  >
                    View all{" "}
                    <i data-lucide="chevron-right" className="h-5 w-5"></i>
                  </a>
                </div>
                <div className="grid lg:grid-cols-6 grid-cols-3 gap-6">
                  <a href="product-grid.html" className="text-center space-y-4">
                    <div className="">
                      <img
                        src="/src/assets/dashboard/bubble-tea-5a8ac6be.svg"
                        className="mx-auto max-w-full h-full"
                      />
                    </div>
                    <h5 className="text-lg text-default-600">Beverage</h5>
                  </a>
                  <a href="product-grid.html" className="text-center space-y-4">
                    <div className="">
                      <img
                        src="/src/assets/dashboard/bakery-72cb9b3e.svg"
                        className="mx-auto max-w-full h-full"
                      />
                    </div>
                    <h5 className="text-lg text-default-600">Bakery</h5>
                  </a>
                  <a href="product-grid.html" className="text-center space-y-4">
                    <div className="">
                      <img
                        src="/src/assets/dashboard/pizza-b04aa43d.svg"
                        className="mx-auto max-w-full h-full"
                      />
                    </div>
                    <h5 className="text-lg text-default-600">Pizza</h5>
                  </a>
                  <a href="product-grid.html" className="text-center space-y-4">
                    <div className="">
                      <img
                        src="/src/assets/dashboard/burger-ac2b9f02.svg"
                        className="mx-auto max-w-full h-full"
                      />
                    </div>
                    <h5 className="text-lg text-default-600">Burger</h5>
                  </a>
                  <a href="product-grid.html" className="text-center space-y-4">
                    <div className="">
                      <img
                        src="/src/assets/dashboard/seafood-74ad4647.svg"
                        className="mx-auto max-w-full h-full"
                      />
                    </div>
                    <h5 className="text-lg text-default-600">Seafood</h5>
                  </a>
                  <a href="product-grid.html" className="text-center space-y-4">
                    <div className="">
                      <img
                        src="/src/assets/dashboard/gelato-be97ae84.svg"
                        className="mx-auto max-w-full h-full"
                      />
                    </div>
                    <h5 className="text-lg text-default-600">Desserts</h5>
                  </a>
                </div>
                {/* end grid  */}
              </div>

              <div className="pb-10">
                <div className="flex flex-wrap items-center justify-between gap-4 mb-10">
                  <h3 className="text-xl font-semibold text-default-950">
                    Best Selling Products
                  </h3>
                  <a
                    href="product-grid.html"
                    className="inline-flex items-center gap-1 text-sm text-primary font-medium hover:text-primary-500"
                  >
                    View all{" "}
                    <i data-lucide="chevron-right" className="h-5 w-5"></i>
                  </a>
                </div>
                <div className="grid lg:grid-cols-4 grid-cols-2 gap-6">
                  <a
                    href="product-grid.html"
                    className="border border-default-200 rounded-lg p-4 overflow-hidden hover:border-primary transition-all duration-300"
                  >
                    <div className="relative rounded-lg overflow-hidden divide-y divide-default-200">
                      <div className="mb-4 mx-auto">
                        <img
                          src="/src/assets/dashboard/veg-rice-e40004d1.png"
                          className="w-full h-full"
                        />
                      </div>

                      <div className="pt-2">
                        <h4 className="text-default-800 text-xl font-semibold line-clamp-1 mb-2">
                          Indian Food
                        </h4>
                        <h6 className="font-semibold text-lg text-default-500">
                          $25.14
                        </h6>
                      </div>
                    </div>
                  </a>
                  {/* end grid-cols  */}
                  <a
                    href="product-grid.html"
                    className="border border-default-200 rounded-lg p-4 overflow-hidden hover:border-primary transition-all duration-300"
                  >
                    <div className="relative rounded-lg overflow-hidden divide-y divide-default-200">
                      <div className="mb-4 mx-auto">
                        <img
                          src="/src/assets/dashboard/noodles-65d947ec.png"
                          className="w-full h-full"
                        />
                      </div>

                      <div className="pt-2">
                        <h4 className="text-default-800 text-xl font-semibold line-clamp-1 mb-2">
                          Noodles
                        </h4>
                        <h6 className="font-semibold text-lg text-default-500">
                          $15.24
                        </h6>
                      </div>
                    </div>
                  </a>
                  {/* end grid-cols --> */}
                  <a
                    href="product-grid.html"
                    className="border border-default-200 rounded-lg p-4 overflow-hidden hover:border-primary transition-all duration-300"
                  >
                    <div className="relative rounded-lg overflow-hidden divide-y divide-default-200">
                      <div className="mb-4 mx-auto">
                        <img
                          src="/src/assets/dashboard/red-velvet-pastry-b09214ba.png"
                          className="w-full h-full"
                        />
                      </div>

                      <div className="pt-2">
                        <h4 className="text-default-800 text-xl font-semibold line-clamp-1 mb-2">
                          Red Velvet Pastry
                        </h4>
                        <h6 className="font-semibold text-lg text-default-500">
                          $25.14
                        </h6>
                      </div>
                    </div>
                  </a>
                  {/* end grid-cols  */}
                  <a
                    href="product-grid.html"
                    className="border border-default-200 rounded-lg p-4 overflow-hidden hover:border-primary transition-all duration-300"
                  >
                    <div className="relative rounded-lg overflow-hidden divide-y divide-default-200">
                      <div className="mb-4 mx-auto">
                        <img
                          src="/src/assets/dashboard/garlic-herb-bread-8a00951d.png"
                          className="w-full h-full"
                        />
                      </div>

                      <div className="pt-2">
                        <h4 className="text-default-800 text-xl font-semibold line-clamp-1 mb-2">
                          Indian Food
                        </h4>
                        <h6 className="font-semibold text-lg text-default-500">
                          $25.14
                        </h6>
                      </div>
                    </div>
                  </a>
                  {/* end grid-cols  */}
                </div>
                {/* end grid  */}
              </div>
            </div>
            {/* end grid-cols  */}

            <div className="lg:col-span-1">
              <div className="border border-default-200 rounded-lg">
                <div className="p-6">
                  <div className="mb-6">
                    <h2 className="text-xl text-default-800 font-semibold mb-4">
                      Your Balance
                    </h2>

                    <div className="bg-no-repeat bg-cover bg-[url(../images/other/offer-bg.png)] bg-primary/10 rounded-lg">
                      <div className="py-6 px-8">
                        <div className="flex sm:flex-row flex-col items-center gap-6">
                          <div className="sm:w-1/2 w-full flex items-center gap-6">
                            <div>
                              <span className="inline-flex items-center justify-center h-14 w-14 bg-primary-200 text-primary shadow-md rounded-lg">
                                <i
                                  data-lucide="hard-drive-download"
                                  className="h-8 w-8"
                                ></i>
                              </span>
                              <p className="text-default-600 mt-1.5">Top Up</p>
                            </div>

                            <div>
                              <span className="inline-flex items-center justify-center h-14 w-14 bg-primary-200 text-primary shadow-md rounded-lg">
                                <i
                                  data-lucide="hard-drive-upload"
                                  className="h-8 w-8"
                                ></i>
                              </span>
                              <p className="text-default-600 mt-1.5">
                                Transfer
                              </p>
                            </div>
                          </div>

                          <div className="sm:w-1/2 w-full">
                            <div className="bg-primary rounded-lg">
                              <div className="p-4">
                                <h6 className="text-lg font-medium text-default-100 mb-1">
                                  Balance
                                </h6>
                                <h1 className="text-2xl font-bold text-white">
                                  $12.000
                                </h1>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h2 className="text-xl text-default-800 font-semibold mb-4">
                      Your Address
                    </h2>

                    <div className="flex items-center justify-between gap-4 mb-4">
                      <h3 className="text-lg text-default-800 font-semibold">
                        <i
                          data-lucide="map-pin"
                          className="h-5 w-5 inline align-middle text-primary"
                        ></i>{" "}
                        47, Victoria Street
                      </h3>
                      <button className="border border-primary text-primary text-xs font-medium rounded-lg py-1.5 px-4 transition-all duration-300 hover:bg-primary hover:text-white">
                        Change
                      </button>
                    </div>
                    <p className="text-base/relaxed text-default-500 mb-4">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt.
                    </p>
                    <div className="flex items-center justify-start gap-4 mb-4">
                      <button className="border border-default-600 text-default-900 text-xs font-medium rounded-lg py-1.5 px-4 transition-all duration-300 hover:bg-default-600 hover:text-white">
                        Add Details
                      </button>
                      <button className="border border-default-600 text-default-900 text-xs font-medium rounded-lg py-1.5 px-4 transition-all duration-300 hover:bg-default-600 hover:text-white">
                        Add Note
                      </button>
                    </div>
                  </div>

                  <div className="">
                    <h3 className="text-xl font-semibold text-default-800">
                      Order Summery
                    </h3>
                    <div className="">
                      <div className="my-6 border-b border-default-200">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center gap-4">
                            <img
                              src="/src/assets/dashboard/pizza-2-6f6035dd.png"
                              className="h-16 w-16"
                            />
                            <div className="">
                              <a
                                href="product-grid.html"
                                className="text-base font-medium text-default-800"
                              >
                                Pepperoni Pizza
                              </a>
                              <p className="text-sm font-medium text-default-800">
                                x1
                              </p>
                            </div>
                          </div>
                          <h3 className="text-base font-medium text-default-800">
                            +$5.59
                          </h3>
                        </div>
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center gap-4">
                            <img
                              src="/src/assets/dashboard/burger-05c15c9d.png"
                              className="h-16 w-16"
                            />
                            <div className="">
                              <a
                                href="product-grid.html"
                                className="text-base font-medium text-default-800"
                              >
                                Cheese Burger
                              </a>
                              <p className="text-sm font-medium text-default-800">
                                x2
                              </p>
                            </div>
                          </div>
                          <h3 className="text-base font-medium text-default-800">
                            +$6.49
                          </h3>
                        </div>
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center gap-4">
                            <img
                              src="/src/assets/dashboard/pizza-2-6f6035dd.png"
                              className="h-16 w-16"
                            />
                            <div className="">
                              <a
                                href="product-grid.html"
                                className="text-base font-medium text-default-800"
                              >
                                Vegan Pizza
                              </a>
                              <p className="text-sm font-medium text-default-800">
                                x1
                              </p>
                            </div>
                          </div>
                          <h3 className="text-base font-medium text-default-800">
                            +$5.00
                          </h3>
                        </div>
                      </div>

                      <div className="py-6">
                        <div className="flex items-center justify-between py-3">
                          <h6 className="text-base text-default-600 font-medium">
                            Service :
                          </h6>
                          <h6 className="text-base text-default-600 font-medium">
                            +$1.00
                          </h6>
                        </div>
                        <div className="flex items-center justify-between py-3">
                          <h6 className="text-base text-default-800 font-medium">
                            Total :
                          </h6>
                          <h4 className="text-xl text-primary font-semibold">
                            $17.08
                          </h4>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col gap-4">
                      <a
                        href=""
                        className="flex items-center justify-center gap-2 rounded-full border border-primary bg-primary px-10 py-4 text-center text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:border-primary-700 hover:bg-primary-500"
                      >
                        Checkout
                      </a>
                      <a
                        href=""
                        className="flex items-center justify-center gap-2 rounded-full border border-primary px-10 py-4 text-center text-sm font-semibold text-primary shadow-sm transition-all duration-200 hover:border-primary hover:bg-primary hover:text-white"
                      >
                        Have a coupon code?
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* end grid-cols  */}
          </div>
          {/* end grid  */}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
