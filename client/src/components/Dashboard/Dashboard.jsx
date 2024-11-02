import { useEffect } from "react";

const Dashboard = () => {





  

 
  return (
    <>
    {/* Start Sidebar --> */}
<div id="application-sidebar" className="hs-overlay hs-overlay-open:translate-x-0 -translate-x-full transition-all duration-300 transform hidden fixed inset-y-0 start-0 z-60 w-64 bg-white border-e border-default-200 overflow-y-auto lg:block lg:translate-x-0 lg:right-auto lg:bottom-0 dark:bg-default-50">
   <div className="flex sticky top-0 items-center justify-center px-6 h-18 border-b border-dashed border-default-200">
       <a href="admin-dashboard.html">
           <img src="/src/assets/dashboard/logo-dark-6dbab3e1.png" alt="logo" className="h-10 flex dark:hidden"/>
           <img src="/src/assets/dashboard/logo-light-35c89c2c.png" alt="logo" className="h-10 hidden dark:flex"/>
       </a>
   </div>

   <div className="h-[calc(100%-390px)]" data-simplebar>
       <ul className="admin-menu p-4 w-full flex flex-col gap-1.5">
           <li className="menu-item">
               <a className="flex items-center gap-x-3.5 py-3 px-4 text-sm text-default-700 rounded-md hover:bg-default-100" href="admin-dashboard.html">
                   <i data-lucide="layout-grid" className="w-5 h-5"></i>
                   Dashboard
               </a>
           </li>

           <li className="menu-item">
               <a className="flex items-center gap-x-3.5 py-3 px-4 text-sm text-default-700 rounded-md hover:bg-default-100" href="admin-manage.html">
                   <i data-lucide="settings-2" className="w-5 h-5"></i>
                   Manage
               </a>
           </li>

           <li className="menu-item">
               <a href="javascript:void(0)" data-hs-collapse="#menuOrders" className="hs-collapse-toggle flex items-center gap-x-3.5 py-3 px-4 text-sm text-default-700 rounded-md hover:bg-default-100">
                   <i data-lucide="list-ordered" className="w-5 h-5"></i>
                   Orders
                   <i data-lucide="chevron-down" className="w-4 h-4 ms-auto transition-all hs-collapse-open:rotate-180"></i>
               </a>

               <div id="menuOrders" className="hs-collapse w-full overflow-hidden transition-[height] duration-300 hidden">
                   <ul className="space-y-2 mt-2">
                       <li className="menu-item">
                           <a className="flex items-center gap-x-2.5 py-2 px-4 text-sm text-default-700 rounded-md hover:bg-default-100" href="admin-order-list.html">
                               <i data-lucide="dot" className="w-6 h-6"></i>
                               Order List
                           </a>
                       </li>
                       <li className="menu-item">
                           <a className="flex items-center gap-x-2.5 py-2 px-4 text-sm text-default-700 rounded-md hover:bg-default-100" href="admin-order-details.html">
                               <i data-lucide="dot" className="w-6 h-6"></i>
                               Order Details
                           </a>
                       </li>
                   </ul>
               </div>
           </li>

           <li className="menu-item">
               <a href="javascript:void(0)" data-hs-collapse="#menuCustomers" className="hs-collapse-toggle flex items-center gap-x-3.5 py-3 px-4 text-sm text-default-700 rounded-md hover:bg-default-100">
                   <i data-lucide="users" className="w-5 h-5"></i>
                   Customers
                   <i data-lucide="chevron-down" className="w-4 h-4 ms-auto transition-all hs-collapse-open:rotate-180"></i>
               </a>

               <div id="menuCustomers" className="hs-collapse w-full overflow-hidden transition-[height] duration-300 hidden">
                   <ul className="space-y-2 mt-2">
                       <li className="menu-item">
                           <a className="flex items-center gap-x-2.5 py-2 px-4 text-sm text-default-700 rounded-md hover:bg-default-100" href="admin-customers-list.html">
                               <i data-lucide="dot" className="w-6 h-6"></i>
                               Customers List
                           </a>
                       </li>
                       <li className="menu-item">
                           <a className="flex items-center gap-x-2.5 py-2 px-4 text-sm text-default-700 rounded-md hover:bg-default-100" href="admin-customers-details.html">
                               <i data-lucide="dot" className="w-6 h-6"></i>
                               Customers Details
                           </a>
                       </li>
                       <li className="menu-item">
                           <a className="flex items-center gap-x-2.5 py-2 px-4 text-sm text-default-700 rounded-md hover:bg-default-100" href="admin-customers-add.html">
                               <i data-lucide="dot" className="w-6 h-6"></i>
                               Customers Add
                           </a>
                       </li>
                       <li className="menu-item">
                           <a className="flex items-center gap-x-2.5 py-2 px-4 text-sm text-default-700 rounded-md hover:bg-default-100" href="admin-customers-edit.html">
                               <i data-lucide="dot" className="w-6 h-6"></i>
                               Customers Edit
                           </a>
                       </li>
                   </ul>
               </div>
           </li>

           <li className="menu-item">
               <a href="javascript:void(0)" data-hs-collapse="#menuRestaurants" className="hs-collapse-toggle flex items-center gap-x-3.5 py-3 px-4 text-sm text-default-700 rounded-md hover:bg-default-100">
                   <i data-lucide="hotel" className="w-5 h-5"></i>
                   Restaurants
                   <i data-lucide="chevron-down" className="w-4 h-4 ms-auto transition-all hs-collapse-open:rotate-180"></i>
               </a>

               <div id="menuRestaurants" className="hs-collapse w-full overflow-hidden transition-[height] duration-300 hidden">
                   <ul className="space-y-2 mt-2">
                       <li className="menu-item">
                           <a className="flex items-center gap-x-2.5 py-2 px-4 text-sm text-default-700 rounded-md hover:bg-default-100" href="admin-restaurants-list.html">
                               <i data-lucide="dot" className="w-6 h-6"></i>
                               Restaurants List
                           </a>
                       </li>
                       <li className="menu-item">
                           <a className="flex items-center gap-x-2.5 py-2 px-4 text-sm text-default-700 rounded-md hover:bg-default-100" href="admin-restaurants-details.html">
                               <i data-lucide="dot" className="w-6 h-6"></i>
                               Restaurants Details
                           </a>
                       </li>
                       <li className="menu-item">
                           <a className="flex items-center gap-x-2.5 py-2 px-4 text-sm text-default-700 rounded-md hover:bg-default-100" href="admin-restaurants-add.html">
                               <i data-lucide="dot" className="w-6 h-6"></i>
                               Restaurants Add
                           </a>
                       </li>
                       <li className="menu-item">
                           <a className="flex items-center gap-x-2.5 py-2 px-4 text-sm text-default-700 rounded-md hover:bg-default-100" href="admin-restaurants-edit.html">
                               <i data-lucide="dot" className="w-6 h-6"></i>
                               Restaurants Edit
                           </a>
                       </li>
                   </ul>
               </div>
           </li>

           <li className="menu-item">
               <a href="javascript:void(0)" data-hs-collapse="#menuProduct" className="hs-collapse-toggle flex items-center gap-x-3.5 py-3 px-4 text-sm text-default-700 rounded-md hover:bg-default-100">
                   <i data-lucide="shopping-bag" className="w-5 h-5"></i>
                   Product
                   <i data-lucide="chevron-down" className="w-4 h-4 ms-auto transition-all hs-collapse-open:rotate-180"></i>
               </a>

               <div id="menuProduct" className="hs-collapse w-full overflow-hidden transition-[height] duration-300 hidden">
                   <ul className="space-y-2 mt-2">
                       <li className="menu-item">
                           <a className="flex items-center gap-x-2.5 py-2 px-4 text-sm text-default-700 rounded-md hover:bg-default-100" href="admin-product-list.html">
                               <i data-lucide="dot" className="w-6 h-6"></i>
                               Product List
                           </a>
                       </li>
                       <li className="menu-item">
                           <a className="flex items-center gap-x-2.5 py-2 px-4 text-sm text-default-700 rounded-md hover:bg-default-100" href="admin-product-details.html">
                               <i data-lucide="dot" className="w-6 h-6"></i>
                               Product Details
                           </a>
                       </li>
                       <li className="menu-item">
                           <a className="flex items-center gap-x-2.5 py-2 px-4 text-sm text-default-700 rounded-md hover:bg-default-100" href="admin-product-add.html">
                               <i data-lucide="dot" className="w-6 h-6"></i>
                               Product Add
                           </a>
                       </li>
                       <li className="menu-item">
                           <a className="flex items-center gap-x-2.5 py-2 px-4 text-sm text-default-700 rounded-md hover:bg-default-100" href="admin-product-edit.html">
                               <i data-lucide="dot" className="w-6 h-6"></i>
                               Product Edit
                           </a>
                       </li>
                   </ul>
               </div>
           </li>

           <li className="menu-item">
               <a href="javascript:void(0)" data-hs-collapse="#menuSeller" className="hs-collapse-toggle flex items-center gap-x-3.5 py-3 px-4 text-sm text-default-700 rounded-md hover:bg-default-100">
                   <i data-lucide="user-cog" className="w-5 h-5"></i>
                   Seller
                   <i data-lucide="chevron-down" className="w-4 h-4 ms-auto transition-all hs-collapse-open:rotate-180"></i>
               </a>

               <div id="menuSeller" className="hs-collapse w-full overflow-hidden transition-[height] duration-300 hidden">
                   <ul className="space-y-2 mt-2">
                       <li className="menu-item">
                           <a className="flex items-center gap-x-2.5 py-2 px-4 text-sm text-default-700 rounded-md hover:bg-default-100" href="admin-seller-list.html">
                               <i data-lucide="dot" className="w-6 h-6"></i>
                               Seller List
                           </a>
                       </li>
                       <li className="menu-item">
                           <a className="flex items-center gap-x-2.5 py-2 px-4 text-sm text-default-700 rounded-md hover:bg-default-100" href="admin-seller-details.html">
                               <i data-lucide="dot" className="w-6 h-6"></i>
                               Seller Details
                           </a>
                       </li>
                       <li className="menu-item">
                           <a className="flex items-center gap-x-2.5 py-2 px-4 text-sm text-default-700 rounded-md hover:bg-default-100" href="admin-seller-add.html">
                               <i data-lucide="dot" className="w-6 h-6"></i>
                               Seller Add
                           </a>
                       </li>
                       <li className="menu-item">
                           <a className="flex items-center gap-x-2.5 py-2 px-4 text-sm text-default-700 rounded-md hover:bg-default-100" href="admin-seller-edit.html">
                               <i data-lucide="dot" className="w-6 h-6"></i>
                               Seller Edit
                           </a>
                       </li>
                   </ul>
               </div>
           </li>

           <li className="menu-item">
               <a className="flex items-center gap-x-3.5 py-3 px-4 text-sm text-default-700 rounded-md hover:bg-default-100" href="admin-wallet.html">
                   <i data-lucide="wallet" className="w-5 h-5"></i>
                   Wallet
               </a>
           </li>
       </ul>
   </div>

   <ul className="admin-menu px-4 pt-10 flex flex-col gap-2">
       <li className="menu-item">
           <div className="flex flex-col items-center text-center p-4 text-sm text-default-700 rounded-md bg-no-repeat bg-cover bg-[url(../images/other/offer-bg.png)] bg-primary/5" href="javascript:void(0)">
               <div className="h-16 w-16 border border-default-100 bg-white dark:bg-default-50 text-primary shadow-lg rounded-full flex items-center justify-center -mt-10 mb-4">
                   <i data-lucide="headphones" className="w-6 h-6"></i>
               </div>
               <p className="text-sm text-default-700 mb-4">🔥 Upgrade Your Plan. Find Out here</p>
               <button className="px-4 py-2 bg-primary/10 text-primary text-sm font-medium rounded transition-all hover:bg-primary hover:text-white">Contact Support</button>
           </div>
       </li>

       <li className="menu-item">
           <a className="flex items-center gap-x-3.5 py-3 px-4 text-sm text-default-700 rounded-md hover:bg-default-100" href="admin-settings.html">
               <i data-lucide="settings" className="w-5 h-5"></i>
               Settings
           </a>
       </li>

       <li className="menu-item">
           <a className="flex items-center gap-x-3.5 py-3 px-4 text-sm text-red-700 rounded-md hover:bg-red-400/10 hover:text-red-800" href="auth-login.html">
               <i data-lucide="log-out" className="w-5 h-5"></i>
               Logout
           </a>
       </li>
   </ul>
</div>
{/* End Sidebar --> */}
{/* Start Content --> */}
<div className="w-full lg:ps-64">
   <div className="p-6 page-content">

       <div className="flex items-center justify-between w-full mb-6">
           <h4 className="text-xl font-medium">
               Home
           </h4>
       
           <ol aria-label="Breadcrumb" className="hidden md:flex items-center whitespace-nowrap min-w-0 gap-2">
               <li className="text-sm">
                   <a className="flex items-center gap-2 align-middle text-default-800 transition-all leading-none hover:text-primary-500" href="javascript:void(0)">
                       Admin
                       <i className="w-4 h-4" data-lucide="chevron-right"></i>
                   </a>
               </li>
       
               <li aria-current="page" className="text-sm font-medium text-primary truncate leading-none hover:text-primary-500">
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
                           <h5 className="text-2xl text-white uppercase mb-2">Up to</h5>
                           <h4 className="text-2xl text-primary font-semibold mb-4">50% OFF</h4>
                           <p className="text-base text-white mb-6 max-w-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. </p>
                           <a href="javascript:void(0)" className="inline-flex items-center justify-center gap-2 rounded-full border border-primary bg-primary px-10 py-3 text-center text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:border-primary-700 hover:bg-primary-500">
                               Order Now
                           </a>
                       </div>
                   </div>
               </div>

               <div className="py-10">
                   <div className="flex items-center mb-10">
                       <h3 className="text-xl font-semibold text-default-950">Analytics Overview</h3>
                   </div>
                   <div className="grid lg:grid-cols-4 grid-cols-2 gap-6">
                       <div className="border border-default-200 rounded-lg p-4 overflow-hidden text-center hover:border-primary transition-all duration-300">
                           <h4 className="text-2xl text-primary font-semibold mb-2">12.56K</h4>
                           <h6 className="text-lg font-medium text-default-950 mb-4">Total Revenue</h6>
                           <p className="text-sm text-default-600">10% Increase</p>
                       </div>
                       {/* end grid-cols --> */}
                       <div className="border border-default-200 rounded-lg p-4 overflow-hidden text-center hover:border-primary transition-all duration-300">
                           <h4 className="text-2xl text-primary font-semibold mb-2">2.5K</h4>
                           <h6 className="text-lg font-medium text-default-950 mb-4">New Orders</h6>
                           <p className="text-sm text-default-600">05% Increase</p>
                       </div>
                       {/* end grid-cols --> */}
                       <div className="border border-default-200 rounded-lg p-4 overflow-hidden text-center hover:border-primary transition-all duration-300">
                           <h4 className="text-2xl text-primary font-semibold mb-2">400</h4>
                           <h6 className="text-lg font-medium text-default-950 mb-4">Received Order</h6>
                           <p className="text-sm text-default-600">30% Increase</p>
                       </div>
                        {/* end grid-cols --> */}
                       <div className="border border-default-200 rounded-lg p-4 overflow-hidden text-center hover:border-primary transition-all duration-300">
                           <h4 className="text-2xl text-primary font-semibold mb-2">476</h4>
                           <h6 className="text-lg font-medium text-default-950 mb-4">Reviews</h6>
                           <p className="text-sm text-default-600">15% Increase</p>
                       </div>
                     {/* end grid-cols  */}
                   </div>
                   {/* end grid  */}
               </div>

               <div className="pb-10">
                   <div className="flex flex-wrap items-center justify-between gap-4 mb-10">
                       <h3 className="text-xl font-semibold text-default-950">Category</h3>
                       <a href="product-grid.html" className="inline-flex items-center gap-1 text-sm text-primary font-medium hover:text-primary-500">View all <i data-lucide="chevron-right" className="h-5 w-5"></i></a>
                   </div>
                   <div className="grid lg:grid-cols-6 grid-cols-3 gap-6">
                       <a href="product-grid.html" className="text-center space-y-4">
                           <div className="">
                               <img src="/src/assets/dashboard/bubble-tea-5a8ac6be.svg" className="mx-auto max-w-full h-full"/>
                           </div>
                           <h5 className="text-lg text-default-600">Beverage</h5>
                       </a>
                       <a href="product-grid.html" className="text-center space-y-4">
                           <div className="">
                               <img src="/src/assets/dashboard/bakery-72cb9b3e.svg" className="mx-auto max-w-full h-full"/>
                           </div>
                           <h5 className="text-lg text-default-600">Bakery</h5>
                       </a>
                       <a href="product-grid.html" className="text-center space-y-4">
                           <div className="">
                               <img src="/src/assets/dashboard/pizza-b04aa43d.svg" className="mx-auto max-w-full h-full"/>
                           </div>
                           <h5 className="text-lg text-default-600">Pizza</h5>
                       </a>
                       <a href="product-grid.html" className="text-center space-y-4">
                           <div className="">
                               <img src="/src/assets/dashboard/burger-ac2b9f02.svg" className="mx-auto max-w-full h-full"/>
                           </div>
                           <h5 className="text-lg text-default-600">Burger</h5>
                       </a>
                       <a href="product-grid.html" className="text-center space-y-4">
                           <div className="">
                               <img src="/src/assets/dashboard/seafood-74ad4647.svg" className="mx-auto max-w-full h-full"/>
                           </div>
                           <h5 className="text-lg text-default-600">Seafood</h5>
                       </a>
                       <a href="product-grid.html" className="text-center space-y-4">
                           <div className="">
                               <img src="/src/assets/dashboard/gelato-be97ae84.svg" className="mx-auto max-w-full h-full"/>
                           </div>
                           <h5 className="text-lg text-default-600">Desserts</h5>
                       </a>
                   </div>
                   {/* end grid  */}
               </div>

               <div className="pb-10">
                   <div className="flex flex-wrap items-center justify-between gap-4 mb-10">
                       <h3 className="text-xl font-semibold text-default-950">Best Selling Products</h3>
                       <a href="product-grid.html" className="inline-flex items-center gap-1 text-sm text-primary font-medium hover:text-primary-500">View all <i data-lucide="chevron-right" className="h-5 w-5"></i></a>
                   </div>
                   <div className="grid lg:grid-cols-4 grid-cols-2 gap-6">
                       <a href="product-grid.html" className="border border-default-200 rounded-lg p-4 overflow-hidden hover:border-primary transition-all duration-300">
                           <div className="relative rounded-lg overflow-hidden divide-y divide-default-200">
                               <div className="mb-4 mx-auto">
                                   <img src="/src/assets/dashboard/veg-rice-e40004d1.png" className="w-full h-full"/>
                               </div>

                               <div className="pt-2">
                                   <h4 className="text-default-800 text-xl font-semibold line-clamp-1 mb-2">Indian Food</h4>
                                   <h6 className="font-semibold text-lg text-default-500">$25.14</h6>
                               </div>
                           </div>
                       </a>
                        {/* end grid-cols  */}
                       <a href="product-grid.html" className="border border-default-200 rounded-lg p-4 overflow-hidden hover:border-primary transition-all duration-300">
                           <div className="relative rounded-lg overflow-hidden divide-y divide-default-200">
                               <div className="mb-4 mx-auto">
                                   <img src="/src/assets/dashboard/noodles-65d947ec.png" className="w-full h-full"/>
                               </div>

                               <div className="pt-2">
                                   <h4 className="text-default-800 text-xl font-semibold line-clamp-1 mb-2">Noodles</h4>
                                   <h6 className="font-semibold text-lg text-default-500">$15.24</h6>
                               </div>
                           </div>
                       </a>
                        {/* end grid-cols --> */}
                       <a href="product-grid.html" className="border border-default-200 rounded-lg p-4 overflow-hidden hover:border-primary transition-all duration-300">
                           <div className="relative rounded-lg overflow-hidden divide-y divide-default-200">
                               <div className="mb-4 mx-auto">
                                   <img src="/src/assets/dashboard/red-velvet-pastry-b09214ba.png" className="w-full h-full"/>
                               </div>

                               <div className="pt-2">
                                   <h4 className="text-default-800 text-xl font-semibold line-clamp-1 mb-2">Red Velvet Pastry</h4>
                                   <h6 className="font-semibold text-lg text-default-500">$25.14</h6>
                               </div>
                           </div>
                       </a>
                        {/* end grid-cols  */}
                       <a href="product-grid.html" className="border border-default-200 rounded-lg p-4 overflow-hidden hover:border-primary transition-all duration-300">
                           <div className="relative rounded-lg overflow-hidden divide-y divide-default-200">
                               <div className="mb-4 mx-auto">
                                   <img src="/src/assets/dashboard/garlic-herb-bread-8a00951d.png" className="w-full h-full"/>
                               </div>

                               <div className="pt-2">
                                   <h4 className="text-default-800 text-xl font-semibold line-clamp-1 mb-2">Indian Food</h4>
                                   <h6 className="font-semibold text-lg text-default-500">$25.14</h6>
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
                           <h2 className="text-xl text-default-800 font-semibold mb-4">Your Balance</h2>

                           <div className="bg-no-repeat bg-cover bg-[url(../images/other/offer-bg.png)] bg-primary/10 rounded-lg">
                               <div className="py-6 px-8">
                                   <div className="flex sm:flex-row flex-col items-center gap-6">
                                       <div className="sm:w-1/2 w-full flex items-center gap-6">
                                           <div>
                                               <span className="inline-flex items-center justify-center h-14 w-14 bg-primary-200 text-primary shadow-md rounded-lg">
                                                   <i data-lucide="hard-drive-download" className="h-8 w-8"></i>
                                               </span>
                                               <p className="text-default-600 mt-1.5">Top Up</p>
                                           </div>

                                           <div>
                                               <span className="inline-flex items-center justify-center h-14 w-14 bg-primary-200 text-primary shadow-md rounded-lg">
                                                   <i data-lucide="hard-drive-upload" className="h-8 w-8"></i>
                                               </span>
                                               <p className="text-default-600 mt-1.5">Transfer</p>
                                           </div>
                                       </div>

                                       <div className="sm:w-1/2 w-full">
                                           <div className="bg-primary rounded-lg">
                                               <div className="p-4">
                                                   <h6 className="text-lg font-medium text-default-100 mb-1">Balance</h6>
                                                   <h1 className="text-2xl font-bold text-white">$12.000</h1>
                                               </div>
                                           </div>
                                       </div>
                                   </div>
                               </div>
                           </div>
                       </div>

                       <div className="mb-6">
                           <h2 className="text-xl text-default-800 font-semibold mb-4">Your Address</h2>

                           <div className="flex items-center justify-between gap-4 mb-4">
                               <h3 className="text-lg text-default-800 font-semibold"><i data-lucide="map-pin" className="h-5 w-5 inline align-middle text-primary"></i> 47, Victoria Street</h3>
                               <button className="border border-primary text-primary text-xs font-medium rounded-lg py-1.5 px-4 transition-all duration-300 hover:bg-primary hover:text-white">Change</button>
                           </div>
                           <p className="text-base/relaxed text-default-500 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                           <div className="flex items-center justify-start gap-4 mb-4">
                               <button className="border border-default-600 text-default-900 text-xs font-medium rounded-lg py-1.5 px-4 transition-all duration-300 hover:bg-default-600 hover:text-white">Add Details</button>
                               <button className="border border-default-600 text-default-900 text-xs font-medium rounded-lg py-1.5 px-4 transition-all duration-300 hover:bg-default-600 hover:text-white">Add Note</button>
                           </div>
                       </div>

                       <div className="">
                           <h3 className="text-xl font-semibold text-default-800">Order Summery</h3>
                           <div className="">
                               <div className="my-6 border-b border-default-200">
                                   <div className="flex items-center justify-between mb-4">
                                       <div className="flex items-center gap-4">
                                           <img src="/src/assets/dashboard/pizza-2-6f6035dd.png" className="h-16 w-16"/>
                                           <div className="">
                                               <a href="product-grid.html" className="text-base font-medium text-default-800">Pepperoni Pizza</a>
                                               <p className="text-sm font-medium text-default-800">x1</p>
                                           </div>
                                       </div>
                                       <h3 className="text-base font-medium text-default-800">+$5.59</h3>
                                   </div>
                                   <div className="flex items-center justify-between mb-4">
                                       <div className="flex items-center gap-4">
                                           <img src="/src/assets/dashboard/burger-05c15c9d.png" className="h-16 w-16"/>
                                           <div className="">
                                               <a href="product-grid.html" className="text-base font-medium text-default-800">Cheese Burger</a>
                                               <p className="text-sm font-medium text-default-800">x2</p>
                                           </div>
                                       </div>
                                       <h3 className="text-base font-medium text-default-800">+$6.49</h3>
                                   </div>
                                   <div className="flex items-center justify-between mb-4">
                                       <div className="flex items-center gap-4">
                                           <img src="/src/assets/dashboard/pizza-2-6f6035dd.png" className="h-16 w-16"/>
                                           <div className="">
                                               <a href="product-grid.html" className="text-base font-medium text-default-800">Vegan Pizza</a>
                                               <p className="text-sm font-medium text-default-800">x1</p>
                                           </div>
                                       </div>
                                       <h3 className="text-base font-medium text-default-800">+$5.00</h3>
                                   </div>
                               </div>

                               <div className="py-6">
                                   <div className="flex items-center justify-between py-3">
                                       <h6 className="text-base text-default-600 font-medium">Service :</h6>
                                       <h6 className="text-base text-default-600 font-medium">+$1.00</h6>
                                   </div>
                                   <div className="flex items-center justify-between py-3">
                                       <h6 className="text-base text-default-800 font-medium">Total :</h6>
                                       <h4 className="text-xl text-primary font-semibold">$17.08</h4>
                                   </div>
                               </div>
                           </div>

                           <div className="flex flex-col gap-4">
                               <a href="javascript:void(0)" className="flex items-center justify-center gap-2 rounded-full border border-primary bg-primary px-10 py-4 text-center text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:border-primary-700 hover:bg-primary-500">Checkout</a>
                               <a href="javascript:void(0)" className="flex items-center justify-center gap-2 rounded-full border border-primary px-10 py-4 text-center text-sm font-semibold text-primary shadow-sm transition-all duration-200 hover:border-primary hover:bg-primary hover:text-white">Have a coupon code?</a>
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
  )
}

export default Dashboard
