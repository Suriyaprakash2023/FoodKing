
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import DashboardHeader from './DashboardHeader'
import DashboardSideNav from './DashboardSideNav'

const Orders = () => {
  return (
    <>
    <DashboardHeader/>
    <DashboardSideNav/>
        {/*  Start Content  */}
    <div className="w-full lg:ps-64">
        <div className="p-6 page-content">

            <div className="flex items-center justify-between w-full mb-6">
                <h4 className="text-xl font-medium">
                    Customers List
                </h4>
            
                <ol aria-label="Breadcrumb" className="hidden md:flex items-center whitespace-nowrap min-w-0 gap-2">
                    <li className="text-sm">
                        <a className="flex items-center gap-2 align-middle text-default-800 transition-all leading-none hover:text-primary-500" href="">
                            Customers
                            <i className="w-4 h-4" data-lucide="chevron-right"></i>
                        </a>
                    </li>
            
                    <li aria-current="page" className="text-sm font-medium text-primary truncate leading-none hover:text-primary-500">
                        Customers List
                    </li>
                </ol>
            </div>            
            <div className="grid xl:grid-cols-12 gap-6">
                <div className="xl:col-span-9">
                    <div className="space-y-6">
                        <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-6">
                            <div className="border rounded-lg p-6 overflow-hidden border-default-200">
                                <div className="flex items-center gap-4">
                                    <div className="inline-flex items-center justify-center rounded-full bg-primary/20 text-primary h-16 w-16">
                                        <i data-lucide="banknote" className="h-8 w-8"></i>
                                    </div>
                                    <div className="">
                                        <p className="text-base text-default-500 font-medium mb-1">Food Delivered</p>
                                        <h4 className="text-2xl text-default-950 font-semibold mb-2">23,568</h4>
                                    </div>
                                </div>
                            </div>
                            {/*  end grid-cols  */}
                            <div className="border rounded-lg p-6 overflow-hidden border-default-200">
                                <div className="flex items-center gap-4">
                                    <div className="inline-flex items-center justify-center rounded-full bg-yellow-500/20 text-yellow-500 h-16 w-16">
                                        {/* <i data-lucide="wallet" className="h-8 w-8"></i> */}
                                        <AccountBalanceWalletIcon className="h-8 w-8"/>
                                    </div>
                                    <div>
                                        <p className="text-base text-default-500 font-medium mb-1">Your Balance</p>
                                        <h4 className="text-2xl text-default-950 font-semibold mb-2">₹ 8,904.80</h4>
                                    </div>
                                </div>
                            </div>
                            {/*  end grid-cols  */}
                            <div className="border rounded-lg p-6 overflow-hidden border-default-200">
                                <div className="flex items-center gap-4">
                                    <div className="inline-flex items-center justify-center rounded-full bg-green-500/20 text-green-500 h-16 w-16">
                                        <i data-lucide="star" className="h-8 w-8 fill-green-500"></i>
                                    </div>
                                    <div className="">
                                        <p className="text-base text-default-500 font-medium mb-1">Satisfaction Rating</p>
                                        <h4 className="text-2xl text-default-950 font-semibold mb-2">98%</h4>
                                    </div>
                                </div>
                            </div>
                            {/*  end grid-cols  */}
                        </div>
                        {/*  end grid  */}


                        <div className="grid grid-cols-1">
                            <div className="border rounded-lg border-default-200">
                                <div className="p-6 overflow-hidden ">
                                    <div className="flex flex-wrap md:flex-nowrap items-center justify-between gap-4">
                                        <h2 className="text-xl text-default-800 font-semibold">Order History</h2>

                                        <div className="flex items-center">
                                            <span className="text-base text-default-950 me-3">Sort By :</span>
                                            <div className="hs-dropdown relative inline-flex [--placement:bottom-right]">
                                                <button type="button" className="hs-dropdown-toggle flex items-center gap-2 font-medium text-default-950 text-sm py-2.5 px-4 xl:px-5 rounded-full border border-default-200 transition-all">
                                                    All <i data-lucide="chevron-down" className="h-4 w-4"></i>
                                                </button>
                                                {/*  end dropdown button  */}

                                                <div className="hs-dropdown-menu hs-dropdown-open:opacity-100 min-w-[200px] transition-[opacity,margin] mt-4 opacity-0 hidden z-20 bg-white dark:bg-default-50 shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] rounded-lg border border-default-100 p-1.5">
                                                    <ul className="flex flex-col gap-1">
                                                        <li><a className="flex items-center gap-3 font-normal py-2 px-3 transition-all text-default-700 bg-default-400/20 rounded" href="">All</a></li>
                                                        <li><a className="flex items-center gap-3 font-normal text-default-600 py-2 px-3 transition-all hover:text-default-700 hover:bg-default-400/20 rounded" href="">Refund</a></li>
                                                        <li><a className="flex items-center gap-3 font-normal text-default-600 py-2 px-3 transition-all hover:text-default-700 hover:bg-default-400/20 rounded" href="">Paid</a></li>
                                                        <li><a className="flex items-center gap-3 font-normal text-default-600 py-2 px-3 transition-all hover:text-default-700 hover:bg-default-400/20 rounded" href="">Cancel</a></li>
                                                    </ul>
                                                    {/*  end dropdown items  */}
                                                </div>
                                                {/*  end dropdown menu  */}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="relative overflow-x-auto">
                                    <div className="min-w-full inline-block align-middle">
                                        <div className="overflow-hidden">
                                            <table className="min-w-full divide-y divide-default-200">
                                                <thead className="bg-default-100">
                                                    <tr className="text-start">
                                                        <th className="px-6 py-3 text-start text-sm whitespace-nowrap font-medium text-default-800">Date</th>
                                                        <th className="px-6 py-3 text-start text-sm whitespace-nowrap font-medium text-default-800">Order ID</th>
                                                        <th className="px-6 py-3 text-start text-sm whitespace-nowrap font-medium text-default-800 min-w">Menu</th>
                                                        <th className="px-6 py-3 text-start text-sm whitespace-nowrap font-medium text-default-800">Amount</th>
                                                        <th className="px-6 py-3 text-start text-sm whitespace-nowrap font-medium text-default-800 min-w-[10rem]">Status</th>
                                                    </tr>
                                                    {/*  end table-head-row  */}
                                                </thead>
                                                {/*  end t-head  */}
                                                <tbody className="divide-y divide-default-200">
                                                    <tr>
                                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-default-500">01/Sep/22</td>
                                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-default-500">#4357</td>
                                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-default-800">
                                                            <div className="flex items-center gap-4">
                                                                <div className="shrink">
                                                                    <div className="h-11 w-11">
                                                                        <img src="src/assets/dashboard/pizza-6722ca13.png" className="max-w-full h-full"/>
                                                                    </div>
                                                                </div>
                                                                <div className="grow">
                                                                    <p className="text-sm text-default-500 mb-1">Veg Pizza</p>
                                                                    <div className="flex items-center gap-2">
                                                                        <div className="flex gap-1.5">
                                                                            <button><i data-lucide="star" className="h-5 w-5 text-yellow-400 fill-yellow-400"></i></button>
                                                                            <button><i data-lucide="star" className="h-5 w-5 text-yellow-400 fill-yellow-400"></i></button>
                                                                            <button><i data-lucide="star" className="h-5 w-5 text-yellow-400 fill-yellow-400"></i></button>
                                                                            <button><i data-lucide="star" className="h-5 w-5 text-yellow-400 fill-yellow-400"></i></button>
                                                                            <button><i data-lucide="star" className="h-5 w-5 text-yellow-400 fill-yellow-400"></i></button>
                                                                        </div>
                                                                        <h6 className="text-xs text-default-500 mt-1">(54)</h6>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-default-500">₹45.24</td>
                                                        <td className="px-6 py-4">
                                                            <span className="inline-flex items-center gap-1 py-1 px-4 rounded-full text-sm font-medium bg-yellow-500/20 text-yellow-500">Refund</span>
                                                        </td>
                                                    </tr>
                                                    {/*  end table-row  */}
                                                    <tr>
                                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-default-500">01/Sep/22</td>
                                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-default-500">#4358</td>
                                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-default-800">
                                                            <div className="flex items-center gap-4">
                                                                <div className="shrink">
                                                                    <div className="h-11 w-11">
                                                                        <img src="src/assets/dashboard/bread-116fbca4.png" className="max-w-full h-full"/>
                                                                    </div>
                                                                </div>
                                                                <div className="grow">
                                                                    <p className="text-sm text-default-500 mb-1">Butter Bread</p>
                                                                    <div className="flex items-center gap-2">
                                                                        <div className="flex gap-1.5">
                                                                            <button><i data-lucide="star" className="h-5 w-5 text-yellow-400 fill-yellow-400"></i></button>
                                                                            <button><i data-lucide="star" className="h-5 w-5 text-yellow-400 fill-yellow-400"></i></button>
                                                                            <button><i data-lucide="star" className="h-5 w-5 text-yellow-400 fill-yellow-400"></i></button>
                                                                            <button><i data-lucide="star" className="h-5 w-5 text-yellow-400 fill-yellow-400"></i></button>
                                                                            <button><i data-lucide="star" className="h-5 w-5 text-yellow-400 fill-yellow-400"></i></button>
                                                                        </div>
                                                                        <h6 className="text-xs text-default-500 mt-1">(23)</h6>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-default-500">₹50.34</td>
                                                        <td className="px-6 py-4">
                                                            <span className="inline-flex items-center gap-1 py-1 px-4 rounded-full text-sm font-medium bg-green-500/20 text-green-500">Paid</span>
                                                        </td>
                                                    </tr>
                                                    {/*  end table-row  */}
                                                    <tr>
                                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-default-500">04/Sep/22</td>
                                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-default-500">#4360</td>
                                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-default-800">
                                                            <div className="flex items-center gap-4">
                                                                <div className="shrink">
                                                                    <div className="h-11 w-11">
                                                                        <img src="src/assets/dashboard/rice-fc6759e0.png" className="max-w-full h-full"/>
                                                                    </div>
                                                                </div>
                                                                <div className="grow">
                                                                    <p className="text-sm text-default-500 mb-1">Mutton Biryani</p>
                                                                    <div className="flex items-center gap-2">
                                                                        <div className="flex gap-1.5">
                                                                            <button><i data-lucide="star" className="h-5 w-5 text-yellow-400 fill-yellow-400"></i></button>
                                                                            <button><i data-lucide="star" className="h-5 w-5 text-yellow-400 fill-yellow-400"></i></button>
                                                                            <button><i data-lucide="star" className="h-5 w-5 text-yellow-400 fill-yellow-400"></i></button>
                                                                            <button><i data-lucide="star" className="h-5 w-5 text-yellow-400 fill-yellow-400"></i></button>
                                                                            <button><i data-lucide="star" className="h-5 w-5 text-yellow-400 fill-yellow-400"></i></button>
                                                                        </div>
                                                                        <h6 className="text-xs text-default-500 mt-1">(12)</h6>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-default-500">₹34.21</td>
                                                        <td className="px-6 py-4">
                                                            <span className="inline-flex items-center gap-1 py-1 px-4 rounded-full text-sm font-medium bg-red-500/20 text-red-500">Cancel</span>
                                                        </td>
                                                    </tr>
                                                    {/*  end table-row  */}
                                                    <tr>
                                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-default-500">04/Sep/22</td>
                                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-default-500">#4359</td>
                                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-default-800">
                                                            <div className="flex items-center gap-4">
                                                                <div className="shrink">
                                                                    <div className="h-11 w-11">
                                                                        <img src="src/assets/dashboard/pizza-2-6f6035dd.png" className="max-w-full h-full"/>
                                                                    </div>
                                                                </div>
                                                                <div className="grow">
                                                                    <p className="text-sm text-default-500 mb-1">Seafood Pizza</p>
                                                                    <div className="flex items-center gap-2">
                                                                        <div className="flex gap-1.5">
                                                                            <button><i data-lucide="star" className="h-5 w-5 text-yellow-400 fill-yellow-400"></i></button>
                                                                            <button><i data-lucide="star" className="h-5 w-5 text-yellow-400 fill-yellow-400"></i></button>
                                                                            <button><i data-lucide="star" className="h-5 w-5 text-yellow-400 fill-yellow-400"></i></button>
                                                                            <button><i data-lucide="star" className="h-5 w-5 text-yellow-400 fill-yellow-400"></i></button>
                                                                            <button><i data-lucide="star" className="h-5 w-5 text-default-200 fill-default-200"></i></button>
                                                                        </div>
                                                                        <h6 className="text-xs text-default-500 mt-1">(25)</h6>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-default-500">₹25.00</td>
                                                        <td className="px-6 py-4">
                                                            <span className="inline-flex items-center gap-1 py-1 px-4 rounded-full text-sm font-medium bg-green-500/20 text-green-500">Paid</span>
                                                        </td>
                                                    </tr>
                                                    {/*  end table-row  */}
                                                    <tr>
                                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-default-500">07/Sep/22</td>
                                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-default-500">#4361</td>
                                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-default-800">
                                                            <div className="flex items-center gap-4">
                                                                <div className="shrink">
                                                                    <div className="h-11 w-11">
                                                                        <img src="src/assets/dashboard/cooki-d5b44af7.png" className="max-w-full h-full"/>
                                                                    </div>
                                                                </div>
                                                                <div className="grow">
                                                                    <p className="text-sm text-default-500 mb-1">Butter Cookies</p>
                                                                    <div className="flex items-center gap-2">
                                                                        <div className="flex gap-1.5">
                                                                            <button><i data-lucide="star" className="h-5 w-5 text-yellow-400 fill-yellow-400"></i></button>
                                                                            <button><i data-lucide="star" className="h-5 w-5 text-yellow-400 fill-yellow-400"></i></button>
                                                                            <button><i data-lucide="star" className="h-5 w-5 text-yellow-400 fill-yellow-400"></i></button>
                                                                            <button><i data-lucide="star" className="h-5 w-5 text-default-200 fill-default-200"></i></button>
                                                                            <button><i data-lucide="star" className="h-5 w-5 text-default-200 fill-default-200"></i></button>
                                                                        </div>
                                                                        <h6 className="text-xs text-default-500 mt-1">(25)</h6>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-default-500">₹49.99</td>
                                                        <td className="px-6 py-4">
                                                            <span className="inline-flex items-center gap-1 py-1 px-4 rounded-full text-sm font-medium bg-amber-500/20 text-amber-500">Refund</span>
                                                        </td>
                                                    </tr>
                                                    {/*  end table-row  */}
                                                    <tr>
                                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-default-500">10/Sep/22</td>
                                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-default-500">#4362</td>
                                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-default-800">
                                                            <div className="flex items-center gap-4">
                                                                <div className="shrink">
                                                                    <div className="h-11 w-11">
                                                                        <img src="src/assets/dashboard/salad-493d4b3c.png" className="max-w-full h-full"/>
                                                                    </div>
                                                                </div>
                                                                <div className="grow">
                                                                    <p className="text-sm text-default-500 mb-1">Fresh Salad</p>
                                                                    <div className="flex items-center gap-2">
                                                                        <div className="flex gap-1.5">
                                                                            <button><i data-lucide="star" className="h-5 w-5 text-yellow-400 fill-yellow-400"></i></button>
                                                                            <button><i data-lucide="star" className="h-5 w-5 text-yellow-400 fill-yellow-400"></i></button>
                                                                            <button><i data-lucide="star" className="h-5 w-5 text-yellow-400 fill-yellow-400"></i></button>
                                                                            <button><i data-lucide="star" className="h-5 w-5 text-default-200 fill-default-200"></i></button>
                                                                            <button><i data-lucide="star" className="h-5 w-5 text-default-200 fill-default-200"></i></button>
                                                                        </div>
                                                                        <h6 className="text-xs text-default-500 mt-1">(46)</h6>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-default-500">₹24.19</td>
                                                        <td className="px-6 py-4">
                                                            <span className="inline-flex items-center gap-1 py-1 px-4 rounded-full text-sm font-medium bg-amber-500/20 text-amber-500">Refund</span>
                                                        </td>
                                                    </tr>
                                                    {/*  end table-row  */}
                                                    <tr>
                                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-default-500">12/Sep/22</td>
                                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-default-500">#4363</td>
                                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-default-800">
                                                            <div className="flex items-center gap-4">
                                                                <div className="shrink">
                                                                    <div className="h-11 w-11">
                                                                        <img src="src/assets/dashboard/bbq-b5336b9c.png" className="max-w-full h-full"/>
                                                                    </div>
                                                                </div>
                                                                <div className="grow">
                                                                    <p className="text-sm text-default-500 mb-1">Barbeque</p>
                                                                    <div className="flex items-center gap-2">
                                                                        <div className="flex gap-1.5">
                                                                            <button><i data-lucide="star" className="h-5 w-5 text-yellow-400 fill-yellow-400"></i></button>
                                                                            <button><i data-lucide="star" className="h-5 w-5 text-yellow-400 fill-yellow-400"></i></button>
                                                                            <button><i data-lucide="star" className="h-5 w-5 text-yellow-400 fill-yellow-400"></i></button>
                                                                            <button><i data-lucide="star" className="h-5 w-5 text-yellow-400 fill-yellow-400"></i></button>
                                                                            <button><i data-lucide="star" className="h-5 w-5 text-default-200 fill-default-200"></i></button>
                                                                        </div>
                                                                        <h6 className="text-xs text-default-500 mt-1">(25)</h6>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-default-500">₹15.43</td>
                                                        <td className="px-6 py-4">
                                                            <span className="inline-flex items-center gap-1 py-1 px-4 rounded-full text-sm font-medium bg-green-500/20 text-green-500">Paid</span>
                                                        </td>
                                                    </tr>
                                                    {/*  end table-row  */}
                                                    <tr>
                                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-default-500">31/Aug/22</td>
                                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-default-500">#4356</td>
                                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-default-800">
                                                            <div className="flex items-center gap-4">
                                                                <div className="shrink">
                                                                    <div className="h-11 w-11">
                                                                        <img src="src/assets/dashboard/burger-05c15c9d.png" className="max-w-full h-full"/>
                                                                    </div>
                                                                </div>
                                                                <div className="grow">
                                                                    <p className="text-sm text-default-500 mb-1">Burger</p>
                                                                    <div className="flex items-center gap-2">
                                                                        <div className="flex gap-1.5">
                                                                            <button><i data-lucide="star" className="h-5 w-5 text-yellow-400 fill-yellow-400"></i></button>
                                                                            <button><i data-lucide="star" className="h-5 w-5 text-yellow-400 fill-yellow-400"></i></button>
                                                                            <button><i data-lucide="star" className="h-5 w-5 text-yellow-400 fill-yellow-400"></i></button>
                                                                            <button><i data-lucide="star" className="h-5 w-5 text-yellow-400 fill-yellow-400"></i></button>
                                                                            <button><i data-lucide="star" className="h-5 w-5 text-default-200 fill-default-200"></i></button>
                                                                        </div>
                                                                        <h6 className="text-xs text-default-500 mt-1">(42)</h6>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-default-500">₹28.99</td>
                                                        <td className="px-6 py-4">
                                                            <span className="inline-flex items-center gap-1 py-1 px-4 rounded-full text-sm font-medium bg-green-500/20 text-green-500">Paid</span>
                                                        </td>
                                                    </tr>
                                                    {/*  end table-row  */}
                                                </tbody>
                                                {/*  end t-body  */}
                                            </table>
                                            {/*  end table  */}
                                        </div>
                                        {/*  end overflo-hidden  */}
                                    </div>
                                    {/*  end table-responsive  */}
                                </div>
                            </div>
                        </div>
                        {/*  end grid  */}
                    </div>
                </div>
                {/*  end grid-cols  */}

                <div className="xl:col-span-3">
                    <div className="border border-default-200 rounded-lg">
                        <div className="p-6">
                            <div className="mb-6">
                                <h2 className="text-xl text-default-800 font-semibold mb-4">Your Meal Plan</h2>
                                <div className="relative">
                                    <span className="absolute top-1/2 start-2.5 -translate-y-1/2"><i data-lucide="calendar" className="h-4 w-4 text-default-700"></i></span>
                                    <span className="absolute top-1/2 end-2.5 -translate-y-1/2"><i data-lucide="chevron-down" className="h-4 w-4 text-default-700"></i></span>
                                    <input type="text" className="py-2 px-9 block w-full bg-transparent rounded-md border-default-200 text-sm text-default-700 font-medium focus:border-default-200 focus:ring-0" id="datepicker-basic"/>
                                </div>
                                {/*  end relative */}
                            </div>

                            <div className="mb-6">
                                <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                                    <div>
                                        <h2 className="text-xl text-default-800 font-semibold mb-0.5">Breakfast</h2>
                                        <p className="text-xs text-default-400 font-medium">6.25 AM</p>
                                    </div>
                                    <a href="" className="inline-flex items-center justify-center group gap-2 border border-green-500 text-green-500 text-sm font-medium rounded-full py-1.5 px-3 transition-all duration-300 hover:bg-green-500 hover:text-white">Purchased</a>
                                </div>
                                {/*  end flex  */}
                                <div className="flex flex-col gap-4">
                                    <div className="flex items-center gap-4 bg-primary/10 p-2 rounded-lg">
                                        <div className="h-16 w-16">
                                            <img src="src/assets/dashboard/bread-116fbca4.png"/>
                                        </div>
                                        <div className="">
                                            <h6 className="text-base font-medium text-default-900 mb-1">Butter Bread</h6>
                                            <p className="text-default-600 font-medium">₹125 <span className="text-default-400 line-through">₹150</span></p>
                                        </div>
                                    </div>
                                    {/*  end offer-item  */}
                                    <div className="flex items-center gap-4 bg-primary/10 p-2 rounded-lg">
                                        <div className="h-16 w-16">
                                            <img src="src/assets/dashboard/salad-493d4b3c.png"/>
                                        </div>
                                        <div className="">
                                            <h6 className="text-base font-medium text-default-900 mb-1">Fresh Salad</h6>
                                            <p className="text-default-600 font-medium">₹78 <span className="text-default-400 line-through">₹89</span></p>
                                        </div>
                                    </div>
                                    {/*  end offer-item  */}
                                </div>
                                {/*  end flex  */}
                            </div>

                            <div className="mb-6">
                                <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                                    <div>
                                        <h2 className="text-xl text-default-800 font-semibold mb-0.5">Breakfast</h2>
                                        <p className="text-xs text-default-400 font-medium">6.25 AM</p>
                                    </div>
                                    <a href="" className="inline-flex items-center justify-center group gap-2 border border-yellow-500 text-yellow-500 text-sm font-medium rounded-full py-1.5 px-3 transition-all duration-300 hover:bg-yellow-500 hover:text-white">Being Order</a>
                                </div>
                                {/*  end flex  */}
                                <div className="flex flex-col gap-4">
                                    <div className="flex items-center gap-4 bg-primary/10 p-2 rounded-lg">
                                        <div className="h-16 w-16">
                                            <img src="src/assets/dashboard/rice-fc6759e0.png"/>
                                        </div>
                                        <div className="">
                                            <h6 className="text-base font-medium text-default-900 mb-1">Curry Fried Rice</h6>
                                            <p className="text-default-600 font-medium">₹125 <span className="text-default-400 line-through">₹150</span></p>
                                        </div>
                                    </div>
                                    {/*  end offer-item  */}
                                    <div className="flex items-center gap-4 bg-primary/10 p-2 rounded-lg">
                                        <div className="h-16 w-16">
                                            <img src="src/assets/dashboard/bbq-b5336b9c.png"/>
                                        </div>
                                        <div className="">
                                            <h6 className="text-base font-medium text-default-900 mb-1">Barbeque</h6>
                                            <p className="text-default-600 font-medium">₹78 <span className="text-default-400 line-through">₹89</span></p>
                                        </div>
                                    </div>
                                    {/*  end offer-item  */}
                                </div>
                                {/*  end flex  */}
                            </div>

                            <div className="">
                                <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                                    <div>
                                        <h2 className="text-xl text-default-800 font-semibold mb-0.5">Dinner</h2>
                                        <p className="text-xs text-default-400 font-medium">08.30 PM</p>
                                    </div>
                                    <a href="" className="inline-flex items-center justify-center group gap-2 border border-red-500 text-red-500 text-sm font-medium rounded-full py-1.5 px-3 transition-all duration-300 hover:bg-red-500 hover:text-white">Have not order yet</a>
                                {/* </div> end flex  */}
                                <div className="flex flex-col gap-4">
                                    <div className="">
                                        <form action="https://coderthemes.com/target" id="my-dropzone" className="dropzone flex items-center justify-center bg-primary/10 border-dashed border-primary/50 p-0 min-h-0">
                                            <div className="fallback">
                                                <input type="file" name="file" />
                                            </div>
                                            <div className="dz-message needsclick w-full">
                                                <p className="text-sm text-primary">Drop here to add item</p>
                                            </div>
                                        </form>
                                    </div>
                                    {/*  end dropzone  */}
                                </div>
                                {/*  end flex  */}
                            </div>
                        </div>
                        {/*  end p-6  */}
                    </div>
                    {/*  end card  */}
                </div>
                {/*  end grid-cols */}
            </div>
            {/*  end grid  */}
        </div>
    </div>
    </div>
    {/*  End Content  */}
    </>
  )
}

export default Orders
