import {useEffect} from 'react'
import {Link} from 'react-router-dom';
import GridViewIcon from '@mui/icons-material/GridView';

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
      {/* Start Sidebar --> */}
      <div
        id="application-sidebar"
        className="hs-overlay hs-overlay-open:translate-x-0 -translate-x-full transition-all duration-300 transform hidden fixed inset-y-0 start-0 z-60 w-64 bg-white border-e border-default-200 overflow-y-auto lg:block lg:translate-x-0 lg:right-auto lg:bottom-0 dark:bg-default-50"
      >
        <div className="flex sticky top-0 items-center justify-center px-6 h-18 border-b border-dashed border-default-200">
          <a href="admin-dashboard.html">
            <img
              src="/src/assets/dashboard/logo-dark-6dbab3e1.png"
              alt="logo"
              className="h-10 flex dark:hidden"
            />
            <img
              src="/src/assets/dashboard/logo-light-35c89c2c.png"
              alt="logo"
              className="h-10 hidden dark:flex"
            />
          </a>
        </div>

        <div className="h-[calc(100%-390px)]" data-simplebar >
          <ul className="admin-menu p-4 w-full flex flex-col gap-1.5">
            <li className="menu-item">
              <a
                className="flex items-center gap-x-3.5 py-3 px-4 text-sm text-default-700 rounded-md hover:bg-default-100"
                
              >
                <i data-lucide="layout-grid" className="w-5 h-5"></i>
                <GridViewIcon className="w-5 h-5"/>
                Dashboard
              </a>
            </li>
            <li className="menu-item">
              <Link to='/dashboard'
                className="flex items-center gap-x-3.5 py-3 px-4 text-sm text-default-700 rounded-md hover:bg-default-100"
              >
                <i data-lucide="layout-grid" className="w-5 h-5"></i>
                Dashboard
              </Link>
            </li>
          

            <li className="menu-item">
              <Link to='/orders'
                data-hs-collapse="#menuOrders"
                className="hs-collapse-toggle flex items-center gap-x-3.5 py-3 px-4 text-sm text-default-700 rounded-md hover:bg-default-100"
              >
                <i data-lucide="list-ordered" className="w-5 h-5"></i>
                Orders
                
              </Link>

            </li>

            <li className="menu-item">
              <a
                href=""
                data-hs-collapse="#menuCustomers"
                className="hs-collapse-toggle flex items-center gap-x-3.5 py-3 px-4 text-sm text-default-700 rounded-md hover:bg-default-100"
              >
                <i data-lucide="users" className="w-5 h-5"></i>
                Customers
                <i
                  data-lucide="chevron-down"
                  className="w-4 h-4 ms-auto transition-all hs-collapse-open:rotate-180"
                ></i>
              </a>

              <div
                id="menuCustomers"
                className="hs-collapse w-full overflow-hidden transition-[height] duration-300 hidden"
              >
                <ul className="space-y-2 mt-2">
                  <li className="menu-item">
                    <a
                      className="flex items-center gap-x-2.5 py-2 px-4 text-sm text-default-700 rounded-md hover:bg-default-100"
                      href="admin-customers-list.html"
                    >
                      <i data-lucide="dot" className="w-6 h-6"></i>
                      Customers List
                    </a>
                  </li>
                  <li className="menu-item">
                    <a
                      className="flex items-center gap-x-2.5 py-2 px-4 text-sm text-default-700 rounded-md hover:bg-default-100"
                      href="admin-customers-details.html"
                    >
                      <i data-lucide="dot" className="w-6 h-6"></i>
                      Customers Details
                    </a>
                  </li>
                  <li className="menu-item">
                    <a
                      className="flex items-center gap-x-2.5 py-2 px-4 text-sm text-default-700 rounded-md hover:bg-default-100"
                      href="admin-customers-add.html"
                    >
                      <i data-lucide="dot" className="w-6 h-6"></i>
                      Customers Add
                    </a>
                  </li>
                  <li className="menu-item">
                    <a
                      className="flex items-center gap-x-2.5 py-2 px-4 text-sm text-default-700 rounded-md hover:bg-default-100"
                      href="admin-customers-edit.html"
                    >
                      <i data-lucide="dot" className="w-6 h-6"></i>
                      Customers Edit
                    </a>
                  </li>
                </ul>
              </div>
            </li>

            <li className="menu-item">
              <a
                href=""
                data-hs-collapse="#menuRestaurants"
                className="hs-collapse-toggle flex items-center gap-x-3.5 py-3 px-4 text-sm text-default-700 rounded-md hover:bg-default-100"
              >
                <i data-lucide="hotel" className="w-5 h-5"></i>
                Restaurants
                <i
                  data-lucide="chevron-down"
                  className="w-4 h-4 ms-auto transition-all hs-collapse-open:rotate-180"
                ></i>
              </a>

              <div
                id="menuRestaurants"
                className="hs-collapse w-full overflow-hidden transition-[height] duration-300 hidden"
              >
                <ul className="space-y-2 mt-2">
                  <li className="menu-item">
                    <a
                      className="flex items-center gap-x-2.5 py-2 px-4 text-sm text-default-700 rounded-md hover:bg-default-100"
                      href="admin-restaurants-list.html"
                    >
                      <i data-lucide="dot" className="w-6 h-6"></i>
                      Restaurants List
                    </a>
                  </li>
                  <li className="menu-item">
                    <a
                      className="flex items-center gap-x-2.5 py-2 px-4 text-sm text-default-700 rounded-md hover:bg-default-100"
                      href="admin-restaurants-details.html"
                    >
                      <i data-lucide="dot" className="w-6 h-6"></i>
                      Restaurants Details
                    </a>
                  </li>
                  <li className="menu-item">
                    <a
                      className="flex items-center gap-x-2.5 py-2 px-4 text-sm text-default-700 rounded-md hover:bg-default-100"
                      href="admin-restaurants-add.html"
                    >
                      <i data-lucide="dot" className="w-6 h-6"></i>
                      Restaurants Add
                    </a>
                  </li>
                  <li className="menu-item">
                    <a
                      className="flex items-center gap-x-2.5 py-2 px-4 text-sm text-default-700 rounded-md hover:bg-default-100"
                      href="admin-restaurants-edit.html"
                    >
                      <i data-lucide="dot" className="w-6 h-6"></i>
                      Restaurants Edit
                    </a>
                  </li>
                </ul>
              </div>
            </li>

            <li className="menu-item">
              <a
                href=""
                data-hs-collapse="#menuProduct"
                className="hs-collapse-toggle flex items-center gap-x-3.5 py-3 px-4 text-sm text-default-700 rounded-md hover:bg-default-100"
              >
                <i data-lucide="shopping-bag" className="w-5 h-5"></i>
                Product
                <i
                  data-lucide="chevron-down"
                  className="w-4 h-4 ms-auto transition-all hs-collapse-open:rotate-180"
                ></i>
              </a>

              <div
                id="menuProduct"
                className="hs-collapse w-full overflow-hidden transition-[height] duration-300 hidden"
              >
                <ul className="space-y-2 mt-2">
                  <li className="menu-item">
                    <a
                      className="flex items-center gap-x-2.5 py-2 px-4 text-sm text-default-700 rounded-md hover:bg-default-100"
                      href="admin-product-list.html"
                    >
                      <i data-lucide="dot" className="w-6 h-6"></i>
                      Product List
                    </a>
                  </li>
                  <li className="menu-item">
                    <a
                      className="flex items-center gap-x-2.5 py-2 px-4 text-sm text-default-700 rounded-md hover:bg-default-100"
                      href="admin-product-details.html"
                    >
                      <i data-lucide="dot" className="w-6 h-6"></i>
                      Product Details
                    </a>
                  </li>
                  <li className="menu-item">
                    <a
                      className="flex items-center gap-x-2.5 py-2 px-4 text-sm text-default-700 rounded-md hover:bg-default-100"
                      href="admin-product-add.html"
                    >
                      <i data-lucide="dot" className="w-6 h-6"></i>
                      Product Add
                    </a>
                  </li>
                  <li className="menu-item">
                    <a
                      className="flex items-center gap-x-2.5 py-2 px-4 text-sm text-default-700 rounded-md hover:bg-default-100"
                      href="admin-product-edit.html"
                    >
                      <i data-lucide="dot" className="w-6 h-6"></i>
                      Product Edit
                    </a>
                  </li>
                </ul>
              </div>
            </li>

            <li className="menu-item">
              <a
                href=""
                data-hs-collapse="#menuSeller"
                className="hs-collapse-toggle flex items-center gap-x-3.5 py-3 px-4 text-sm text-default-700 rounded-md hover:bg-default-100"
              >
                <i data-lucide="user-cog" className="w-5 h-5"></i>
                Seller
                <i
                  data-lucide="chevron-down"
                  className="w-4 h-4 ms-auto transition-all hs-collapse-open:rotate-180"
                ></i>
              </a>

              <div
                id="menuSeller"
                className="hs-collapse w-full overflow-hidden transition-[height] duration-300 hidden"
              >
                <ul className="space-y-2 mt-2">
                  <li className="menu-item">
                    <a
                      className="flex items-center gap-x-2.5 py-2 px-4 text-sm text-default-700 rounded-md hover:bg-default-100"
                      href="admin-seller-list.html"
                    >
                      <i data-lucide="dot" className="w-6 h-6"></i>
                      Seller List
                    </a>
                  </li>
                  <li className="menu-item">
                    <a
                      className="flex items-center gap-x-2.5 py-2 px-4 text-sm text-default-700 rounded-md hover:bg-default-100"
                      href="admin-seller-details.html"
                    >
                      <i data-lucide="dot" className="w-6 h-6"></i>
                      Seller Details
                    </a>
                  </li>
                  <li className="menu-item">
                    <a
                      className="flex items-center gap-x-2.5 py-2 px-4 text-sm text-default-700 rounded-md hover:bg-default-100"
                      href="admin-seller-add.html"
                    >
                      <i data-lucide="dot" className="w-6 h-6"></i>
                      Seller Add
                    </a>
                  </li>
                  <li className="menu-item">
                    <a
                      className="flex items-center gap-x-2.5 py-2 px-4 text-sm text-default-700 rounded-md hover:bg-default-100"
                      href="admin-seller-edit.html"
                    >
                      <i data-lucide="dot" className="w-6 h-6"></i>
                      Seller Edit
                    </a>
                  </li>
                </ul>
              </div>
            </li>

            <li className="menu-item">
              <a
                className="flex items-center gap-x-3.5 py-3 px-4 text-sm text-default-700 rounded-md hover:bg-default-100"
                href="admin-wallet.html"
              >
                <i data-lucide="wallet" className="w-5 h-5"></i>
                Wallet
              </a>
            </li>
          </ul>
        </div>

        <ul className="admin-menu px-4 pt-10 flex flex-col gap-2">
          <li className="menu-item">
            <div
              className="flex flex-col items-center text-center p-4 text-sm text-default-700 rounded-md bg-no-repeat bg-cover bg-[url(../images/other/offer-bg.png)] bg-primary/5"
              href=""
            >
              <div className="h-16 w-16 border border-default-100 bg-white dark:bg-default-50 text-primary shadow-lg rounded-full flex items-center justify-center -mt-10 mb-4">
                <i data-lucide="headphones" className="w-6 h-6"></i>
              </div>
              <p className="text-sm text-default-700 mb-4">
                🔥 Upgrade Your Plan. Find Out here
              </p>
              <button className="px-4 py-2 bg-primary/10 text-primary text-sm font-medium rounded transition-all hover:bg-primary hover:text-white">
                Contact Support
              </button>
            </div>
          </li>

          <li className="menu-item">
            <a
              className="flex items-center gap-x-3.5 py-3 px-4 text-sm text-default-700 rounded-md hover:bg-default-100"
              href="admin-settings.html"
            >
              <i data-lucide="settings" className="w-5 h-5"></i>
              Settings
            </a>
          </li>

          <li className="menu-item">
            <a
              className="flex items-center gap-x-3.5 py-3 px-4 text-sm text-red-700 rounded-md hover:bg-red-400/10 hover:text-red-800"
              href="auth-login.html"
            >
              <i data-lucide="log-out" className="w-5 h-5"></i>
              Logout
            </a>
          </li>
        </ul>
      </div>
      {/* End Sidebar --> */}
    </>
  )
}

export default DashboardSideNav
