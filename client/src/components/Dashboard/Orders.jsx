
import DashboardHeader from './DashboardHeader'
import DashboardSideNav from './DashboardSideNav'
import DashboardFooter from './DashboardFooter';
import VerifiedIcon from '@mui/icons-material/Verified';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
const Orders = () => {
  return (
    <>
      <DashboardSideNav/>

      <main className="main-content">
      <DashboardHeader/>
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
                        <button type="button" className="btn btn-outline-danger rounded iq-col-masonry-block">
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M10.6654 5.33496L5.33203 10.6683" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M10.6643 10.6663L5.33203 5.33301" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                            Un Shipped Orders
                        </button>

                        <button type="button" className="btn btn-outline-warning rounded iq-col-masonry-block" >
                        <LocalShippingIcon className='me-1'/>
                            Shipped Orders
                        </button>

                        <button type="button" className="btn btn-outline-success rounded iq-col-masonry-block">
                       <VerifiedIcon className='me-1'/> 
                            Delivary Orders
                        </button>
                       
                        <input type="search" className="form-control" placeholder="Search..."/>
                          
                       
                       
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 row-cols-xxl-4">
        <div className="col">
            <div className="card order-history-card">
                <div className="card-body">
                    <div className="d-flex align-items-center justify-content-between mb-5">
                        <div className="">
                            <h6 className="heading-title mb-2">Order #309</h6>
                            <p className="mb-0">23 Feb 2021, 08:28 PM</p>
                        </div>
                        <img src="/src/assets/dashboard/images/order-history/01.png" className="img-fluid rounded-pill avatar-50" alt=""/>
                    </div>
                    <div className="d-flex">
                        <img src="/src/assets/dashboard/images/order-history/09.png" className="img-fluid rounded-pill avatar-60" alt=""/>
                        <div className="ms-4 order-history">
                            <h6 className="mb-2 heading-title fw-bolder">Vegetable Mixups</h6>
                            <p>Vegetable Fritters with Egg</p>
                            <div className="d-flex justify-content-between align-items-center">
                                <h6 className="heading-title fw-bolder">$05.30</h6>
                                <h6 className="heading-title fw-bolder">Qty : 1</h6>
                            </div>
                            <hr className="my-4"/>
                        </div>
                    </div>
                    <div className="d-flex">
                        <img src="/src/assets/dashboard/images/order-history/10.png" className="img-fluid rounded-pill avatar-60" alt=""/>
                        <div className="ms-4">
                            <h6 className="mb-2 heading-title fw-bolder">Burger</h6>
                            <p>Vegetable Fritters with Egg</p>
                            <div className="d-flex justify-content-between align-items-center">
                                <h6 className="heading-title fw-bolder">05.30</h6>
                                <h6 className="heading-title fw-bolder">Qty : 1</h6>
                            </div>
                        </div>
                    </div>
                    <hr/>
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="">
                            <p className="mb-0">X2 items</p>
                            <h6 className="heading-title fw-bolder">$20.60</h6>
                        </div>
                        <div className="d-flex align-items-center" id="action-01">
                            <button className="btn btn-icon btn-outline-success rounded ctc-button" data-action="click" data-closest="#action-01" data-status="complete">
                                <span className="btn-inner d-flex align-items-center">
                                    <span>
                                        <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M0.667969 4.09434L3.93567 7.33366L10.668 0.666992" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </span>
                                    <span className="status pe-2">Completed</span>
                                </span>
                            </button>
                            <button className="btn btn-icon btn-outline-danger rounded ctc-button ms-3" data-action="click" data-closest="#action-01" data-status="reject">
                                <span className="btn-inner d-flex align-items-center">
                                    <span>
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10.6654 5.33496L5.33203 10.6683" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                            <path d="M10.6643 10.6663L5.33203 5.33301" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </span>
                                    <span className="status pe-2">Rejected</span>
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>        </div>
        <div className="col">
            <div className="card order-history-card">
                <div className="card-body">
                    <div className="d-flex align-items-center justify-content-between mb-5">
                        <div className="">
                            <h6 className="heading-title mb-2">Order #309</h6>
                            <p className="mb-0">23 Feb 2021, 08:28 PM</p>
                        </div>
                        <img src="/src/assets/dashboard/images/order-history/02.png" className="img-fluid rounded-pill avatar-50" alt=""/>
                    </div>
                    <div className="d-flex">
                        <img src="/src/assets/dashboard/images/order-history/11.png" className="img-fluid rounded-pill avatar-60" alt=""/>
                        <div className="ms-4 order-history">
                            <h6 className="mb-2 heading-title fw-bolder">Pasta</h6>
                            <p>Vegetable Fritters with Egg</p>
                            <div className="d-flex justify-content-between align-items-center">
                                <h6 className="heading-title fw-bolder">$15.30</h6>
                                <h6 className="heading-title fw-bolder">Qty : 1</h6>
                            </div>
                            <hr className="my-4"/>
                        </div>
                    </div>
                    <div className="d-flex">
                        <img src="/src/assets/dashboard/images/order-history/11.png" className="img-fluid rounded-pill avatar-60" alt=""/>
                        <div className="ms-4">
                            <h6 className="mb-2 heading-title fw-bolder">Mexican Burger</h6>
                            <p>Vegetable Fritters with Egg</p>
                            <div className="d-flex justify-content-between align-items-center">
                                <h6 className="heading-title fw-bolder">$45.30</h6>
                                <h6 className="heading-title fw-bolder">Qty : 1</h6>
                            </div>
                        </div>
                    </div>
                    <hr/>
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="">
                            <p className="mb-0">X2 items</p>
                            <h6 className="heading-title fw-bolder">$50.60</h6>
                        </div>
                        <div className="d-flex align-items-center" id="action-02">
                            <button className="btn btn-icon btn-outline-success rounded ctc-button" data-action="click" data-closest="#action-02" data-status="complete">
                                <span className="btn-inner d-flex align-items-center">
                                    <span>
                                        <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M0.667969 4.09434L3.93567 7.33366L10.668 0.666992" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </span>
                                    <span className="status pe-2">Completed</span>
                                </span>
                            </button>
                            <button className="btn btn-icon btn-outline-danger rounded ctc-button ms-3" data-action="click" data-closest="#action-02" data-status="reject">
                                <span className="btn-inner d-flex align-items-center">
                                    <span>
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10.6654 5.33496L5.33203 10.6683" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                            <path d="M10.6643 10.6663L5.33203 5.33301" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </span>
                                    <span className="status pe-2">Rejected</span>
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>        </div>
        <div className="col">
            <div className="card order-history-card">
                <div className="card-body">
                    <div className="d-flex align-items-center justify-content-between mb-5">
                        <div className="">
                            <h6 className="heading-title mb-2">Order #309</h6>
                            <p className="mb-0">23 Feb 2021, 08:28 PM</p>
                        </div>
                        <img src="/src/assets/dashboard/images/order-history/03.png" className="img-fluid rounded-pill avatar-50" alt=""/>
                    </div>
                    <div className="d-flex">
                        <img src="/src/assets/dashboard/images/order-history/09.png" className="img-fluid rounded-pill avatar-60" alt=""/>
                        <div className="ms-4 order-history">
                            <h6 className="mb-2 heading-title fw-bolder">Vegetable Mixups</h6>
                            <p>Vegetable Fritters with Egg</p>
                            <div className="d-flex justify-content-between align-items-center">
                                <h6 className="heading-title fw-bolder">$05.70</h6>
                                <h6 className="heading-title fw-bolder">Qty : 1</h6>
                            </div>
                            <hr className="my-4"/>
                        </div>
                    </div>
                    <div className="d-flex">
                        <img src="/src/assets/dashboard/images/order-history/10.png" className="img-fluid rounded-pill avatar-60" alt=""/>
                        <div className="ms-4">
                            <h6 className="mb-2 heading-title fw-bolder">Mexican Burger</h6>
                            <p>Vegetable Fritters with Egg</p>
                            <div className="d-flex justify-content-between align-items-center">
                                <h6 className="heading-title fw-bolder">$75.30</h6>
                                <h6 className="heading-title fw-bolder">Qty : 1</h6>
                            </div>
                        </div>
                    </div>
                    <hr/>
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="">
                            <p className="mb-0">X2 items</p>
                            <h6 className="heading-title fw-bolder">$60.60</h6>
                        </div>
                        <div className="d-flex align-items-center" id="action-03">
                            <button className="btn btn-icon btn-outline-success rounded ctc-button" data-action="click" data-closest="#action-03" data-status="complete">
                                <span className="btn-inner d-flex align-items-center">
                                    <span>
                                        <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M0.667969 4.09434L3.93567 7.33366L10.668 0.666992" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </span>
                                    <span className="status pe-2">Completed</span>
                                </span>
                            </button>
                            <button className="btn btn-icon btn-outline-danger rounded ctc-button ms-3" data-action="click" data-closest="#action-03" data-status="reject">
                                <span className="btn-inner d-flex align-items-center">
                                    <span>
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10.6654 5.33496L5.33203 10.6683" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                            <path d="M10.6643 10.6663L5.33203 5.33301" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </span>
                                    <span className="status pe-2">Rejected</span>
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>        </div>
        <div className="col">
            <div className="card order-history-card">
                <div className="card-body">
                    <div className="d-flex align-items-center justify-content-between mb-5">
                        <div className="">
                            <h6 className="heading-title mb-2">Order #309</h6>
                            <p className="mb-0">23 Feb 2021, 08:28 PM</p>
                        </div>
                        <img src="/src/assets/dashboard/images/order-history/04.png" className="img-fluid rounded-pill avatar-50" alt=""/>
                    </div>
                    <div className="d-flex">
                        <img src="/src/assets/dashboard/images/order-history/12.png" className="img-fluid rounded-pill avatar-60" alt=""/>
                        <div className="ms-4 order-history">
                            <h6 className="mb-2 heading-title fw-bolder">Noodles</h6>
                            <p>Vegetable Fritters with Egg</p>
                            <div className="d-flex justify-content-between align-items-center">
                                <h6 className="heading-title fw-bolder">$75.30</h6>
                                <h6 className="heading-title fw-bolder">Qty : 1</h6>
                            </div>
                            <hr className="my-4"/>
                        </div>
                    </div>
                    <div className="d-flex">
                        <img src="/src/assets/dashboard/images/order-history/13.png" className="img-fluid rounded-pill avatar-60" alt=""/>
                        <div className="ms-4">
                            <h6 className="mb-2 heading-title fw-bolder">Pizza</h6>
                            <p>Vegetable Fritters with Egg</p>
                            <div className="d-flex justify-content-between align-items-center">
                                <h6 className="heading-title fw-bolder">$55.30</h6>
                                <h6 className="heading-title fw-bolder">Qty : 1</h6>
                            </div>
                        </div>
                    </div>
                    <hr/>
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="">
                            <p className="mb-0">X2 items</p>
                            <h6 className="heading-title fw-bolder">$40.60</h6>
                        </div>
                        <div className="d-flex align-items-center" id="action-04">
                            <button className="btn btn-icon btn-outline-success rounded ctc-button" data-action="click" data-closest="#action-04" data-status="complete">
                                <span className="btn-inner d-flex align-items-center">
                                    <span>
                                        <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M0.667969 4.09434L3.93567 7.33366L10.668 0.666992" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </span>
                                    <span className="status pe-2">Completed</span>
                                </span>
                            </button>
                            <button className="btn btn-icon btn-outline-danger rounded ctc-button ms-3" data-action="click" data-closest="#action-04" data-status="reject">
                                <span className="btn-inner d-flex align-items-center">
                                    <span>
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10.6654 5.33496L5.33203 10.6683" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                            <path d="M10.6643 10.6663L5.33203 5.33301" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </span>
                                    <span className="status pe-2">Rejected</span>
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>        </div>
         <div className="col">
            <div className="card order-history-card">
                <div className="card-body">
                    <div className="d-flex align-items-center justify-content-between mb-5">
                        <div className="">
                            <h6 className="heading-title mb-2">Order #309</h6>
                            <p className="mb-0">23 Feb 2021, 08:28 PM</p>
                        </div>
                        <img src="/src/assets/dashboard/images/order-history/05.png" className="img-fluid rounded-pill avatar-50" alt=""/>
                    </div>
                    <div className="d-flex">
                        <img src="/src/assets/dashboard/images/order-history/15.png" className="img-fluid rounded-pill avatar-60" alt=""/>
                        <div className="ms-4 order-history">
                            <h6 className="mb-2 heading-title fw-bolder">Veg Crispy</h6>
                            <p>Vegetable Fritters with Egg</p>
                            <div className="d-flex justify-content-between align-items-center">
                                <h6 className="heading-title fw-bolder">$45.30</h6>
                                <h6 className="heading-title fw-bolder">Qty : 1</h6>
                            </div>
                            <hr className="my-4"/>
                        </div>
                    </div>
                    <div className="d-flex">
                        <img src="/src/assets/dashboard/images/order-history/16.png" className="img-fluid rounded-pill avatar-60" alt=""/>
                        <div className="ms-4">
                            <h6 className="mb-2 heading-title fw-bolder">Salad</h6>
                            <p>Vegetable Fritters with Egg</p>
                            <div className="d-flex justify-content-between align-items-center">
                                <h6 className="heading-title fw-bolder">$15.30</h6>
                                <h6 className="heading-title fw-bolder">Qty : 1</h6>
                            </div>
                        </div>
                    </div>
                    <hr/>
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="">
                            <p className="mb-0">X2 items</p>
                            <h6 className="heading-title fw-bolder">$20.60</h6>
                        </div>
                        <div className="d-flex align-items-center" id="action-05">
                            <button className="btn btn-icon btn-outline-success rounded ctc-button" data-action="click" data-closest="#action-05" data-status="complete">
                                <span className="btn-inner d-flex align-items-center">
                                    <span>
                                        <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M0.667969 4.09434L3.93567 7.33366L10.668 0.666992" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </span>
                                    <span className="status pe-2">Completed</span>
                                </span>
                            </button>
                            <button className="btn btn-icon btn-outline-danger rounded ctc-button ms-3" data-action="click" data-closest="#action-05" data-status="reject">
                                <span className="btn-inner d-flex align-items-center">
                                    <span>
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10.6654 5.33496L5.33203 10.6683" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                            <path d="M10.6643 10.6663L5.33203 5.33301" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </span>
                                    <span className="status pe-2">Rejected</span>
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>        </div>
        <div className="col">
            <div className="card order-history-card">
                <div className="card-body">
                    <div className="d-flex align-items-center justify-content-between mb-5">
                        <div className="">
                            <h6 className="heading-title mb-2">Order #309</h6>
                            <p className="mb-0">23 Feb 2021, 08:28 PM</p>
                        </div>
                        <img src="/src/assets/dashboard/images/order-history/06.png" className="img-fluid rounded-pill avatar-50" alt=""/>
                    </div>
                    <div className="d-flex">
                        <img src="/src/assets/dashboard/images/order-history/17.png" className="img-fluid rounded-pill avatar-60" alt=""/>
                        <div className="ms-4 order-history">
                            <h6 className="mb-2 heading-title fw-bolder">Mix Veggie Pizza</h6>
                            <p>Vegetable Fritters with Egg</p>
                            <div className="d-flex justify-content-between align-items-center">
                                <h6 className="heading-title fw-bolder">$55.30</h6>
                                <h6 className="heading-title fw-bolder">Qty : 1</h6>
                            </div>
                            <hr className="my-4"/>
                        </div>
                    </div>
                    <div className="d-flex">
                        <img src="/src/assets/dashboard/images/order-history/18.png" className="img-fluid rounded-pill avatar-60" alt=""/>
                        <div className="ms-4">
                            <h6 className="mb-2 heading-title fw-bolder">Veg Soup</h6>
                            <p>Vegetable Fritters with Egg</p>
                            <div className="d-flex justify-content-between align-items-center">
                                <h6 className="heading-title fw-bolder">$55.30</h6>
                                <h6 className="heading-title fw-bolder">Qty : 1</h6>
                            </div>
                        </div>
                    </div>
                    <hr/>
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="">
                            <p className="mb-0">X2 items</p>
                            <h6 className="heading-title fw-bolder">$10.60</h6>
                        </div>
                        <div className="d-flex align-items-center" id="action-06">
                            <button className="btn btn-icon btn-outline-success rounded ctc-button" data-action="click" data-closest="#action-06" data-status="complete">
                                <span className="btn-inner d-flex align-items-center">
                                    <span>
                                        <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M0.667969 4.09434L3.93567 7.33366L10.668 0.666992" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </span>
                                    <span className="status pe-2">Completed</span>
                                </span>
                            </button>
                            <button className="btn btn-icon btn-outline-danger rounded ctc-button ms-3" data-action="click" data-closest="#action-06" data-status="reject">
                                <span className="btn-inner d-flex align-items-center">
                                    <span>
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10.6654 5.33496L5.33203 10.6683" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                            <path d="M10.6643 10.6663L5.33203 5.33301" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </span>
                                    <span className="status pe-2">Rejected</span>
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>        </div>
        <div className="col">
            <div className="card order-history-card">
                <div className="card-body">
                    <div className="d-flex align-items-center justify-content-between mb-5">
                        <div className="">
                            <h6 className="heading-title mb-2">Order #309</h6>
                            <p className="mb-0">23 Feb 2021, 08:28 PM</p>
                        </div>
                        <img src="/src/assets/dashboard/images/order-history/07.png" className="img-fluid rounded-pill avatar-50" alt=""/>
                    </div>
                    <div className="d-flex">
                        <img src="/src/assets/dashboard/images/order-history/19.png" className="img-fluid rounded-pill avatar-60" alt=""/>
                        <div className="ms-4 order-history">
                            <h6 className="mb-2 heading-title fw-bolder">Chilly Garlic</h6>
                            <p>Vegetable Fritters with Egg</p>
                            <div className="d-flex justify-content-between align-items-center">
                                <h6 className="heading-title fw-bolder">$45.30</h6>
                                <h6 className="heading-title fw-bolder">Qty : 1</h6>
                            </div>
                            <hr className="my-4"/>
                        </div>
                    </div>
                    <div className="d-flex">
                        <img src="/src/assets/dashboard/images/order-history/20.png" className="img-fluid rounded-pill avatar-60" alt=""/>
                        <div className="ms-4">
                            <h6 className="mb-2 heading-title fw-bolder">Paneer Pizza</h6>
                            <p>Vegetable Fritters with Egg</p>
                            <div className="d-flex justify-content-between align-items-center">
                                <h6 className="heading-title fw-bolder">$55.30</h6>
                                <h6 className="heading-title fw-bolder">Qty : 1</h6>
                            </div>
                        </div>
                    </div>
                    <hr/>
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="">
                            <p className="mb-0">X2 items</p>
                            <h6 className="heading-title fw-bolder">$10.60</h6>
                        </div>
                        <div className="d-flex align-items-center" id="action-07">
                            <button className="btn btn-icon btn-outline-success rounded ctc-button" data-action="click" data-closest="#action-07" data-status="complete">
                                <span className="btn-inner d-flex align-items-center">
                                    <span>
                                        <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M0.667969 4.09434L3.93567 7.33366L10.668 0.666992" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </span>
                                    <span className="status pe-2">Completed</span>
                                </span>
                            </button>
                            <button className="btn btn-icon btn-outline-danger rounded ctc-button ms-3" data-action="click" data-closest="#action-07" data-status="reject">
                                <span className="btn-inner d-flex align-items-center">
                                    <span>
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10.6654 5.33496L5.33203 10.6683" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                            <path d="M10.6643 10.6663L5.33203 5.33301" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </span>
                                    <span className="status pe-2">Rejected</span>
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>        </div>
        <div className="col">
            <div className="card order-history-card">
                <div className="card-body">
                    <div className="d-flex align-items-center justify-content-between mb-5">
                        <div className="">
                            <h6 className="heading-title mb-2">Order #309</h6>
                            <p className="mb-0">23 Feb 2021, 08:28 PM</p>
                        </div>
                        <img src="/src/assets/dashboard/images/order-history/08.png" className="img-fluid rounded-pill avatar-50" alt=""/>
                    </div>
                    <div className="d-flex">
                        <img src="/src/assets/dashboard/images/order-history/21.png" className="img-fluid rounded-pill avatar-60" alt=""/>
                        <div className="ms-4 order-history">
                            <h6 className="mb-2 heading-title fw-bolder">Spring Roll</h6>
                            <p>Vegetable Fritters with Egg</p>
                            <div className="d-flex justify-content-between align-items-center">
                                <h6 className="heading-title fw-bolder">$05.30</h6>
                                <h6 className="heading-title fw-bolder">Qty : 1</h6>
                            </div>
                            <hr className="my-4"/>
                        </div>
                    </div>
                    <div className="d-flex">
                        <img src="/src/assets/dashboard/images/order-history/22.png" 
                        className="img-fluid rounded-pill avatar-60" alt=""/>
                        <div className="ms-4">
                            <h6 className="mb-2 heading-title fw-bolder">Nachos</h6>
                            <p>Vegetable Fritters with Egg</p>
                            <div className="d-flex justify-content-between align-items-center">
                                <h6 className="heading-title fw-bolder">$05.30</h6>
                                <h6 className="heading-title fw-bolder">Qty : 1</h6>
                            </div>
                        </div>
                    </div>
                    <hr/>
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="">
                            <p className="mb-0">X2 items</p>
                            <h6 className="heading-title fw-bolder">$10.60</h6>
                        </div>
                        <div className="d-flex align-items-center" id="action-08">
                            <button className="btn btn-icon btn-outline-success rounded ctc-button" data-action="click" data-closest="#action-08" data-status="complete">
                                <span className="btn-inner d-flex align-items-center">
                                    <span>
                                        <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M0.667969 4.09434L3.93567 7.33366L10.668 0.666992" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </span>
                                    <span className="status pe-2">Completed</span>
                                </span>
                            </button>
                            <button className="btn btn-icon btn-outline-danger rounded ctc-button ms-3" data-action="click" data-closest="#action-08" data-status="reject">
                                <span className="btn-inner d-flex align-items-center">
                                    <span>
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10.6654 5.33496L5.33203 10.6683" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                            <path d="M10.6643 10.6663L5.33203 5.33301" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </span>
                                    <span className="status pe-2">Rejected</span>
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>        </div>
    </div>
    <div className="row mb-4 text-center">
        <div className="col-12">
            <a href="#" className="btn btn-primary rounded">Load More</a>
        </div>
    </div>
      </div>

      {/* <!-- Footer Section Start */}
      <DashboardFooter/>
      {/* <!-- Footer Section End   */}
      </main>
      
    </>
  )
}

export default Orders
