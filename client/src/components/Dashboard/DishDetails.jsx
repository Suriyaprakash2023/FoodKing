import React from "react";
import DashboardFooter from "./DashboardFooter";
import DashboardHeader from "./DashboardHeader";
import DashboardSideNav from "./DashboardSideNav";

const DishDetails = () => {
  return (
    <>
      <DashboardSideNav />
      <main className="main-content">
        <DashboardHeader />
        <div className="content-inner mt-5 py-0">
          <div className="row">
            <div className="col-lg-12">
              <div className="card">
                <div className="card-header border-bottom-0 pb-0">
                  <h2 className="card-title">Product Details</h2>
                </div>
                <div className="card-body">
                  <div className="row">
                    <div className="col-lg-12 col-xl-5  mb-4 mt-xl-0">
                      <img
                        src="/src/assets/dashboard/images/layouts/dish-detail/01.png"
                        className="img-fluid rounded"
                        alt="image"
                        style={{ height: "100%" }}
                      />
                    </div>
                    <div className="col-lg-12 col-xl-7">
                      <h4 className="mb-2">Veg Burger</h4>
                      <p className="mb-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Eu erat adipiscing convallis libero elit et eros
                        pellentesque. Sapien, fringilla eget egestas eget. Lorem
                        ipsum dolor sit amet, consectetur adipiscing elit. Eu
                        erat adipiscing convallis libero elit et eros
                        pellentesque. Sapien, fringilla eget egestas eget.{" "}
                      </p>
                      <div className="mb-5">
                        <h4 className="mb-3">Ingredients</h4>
                        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-2 g-lg-3">
                          <div className="col">
                            <div className="d-flex align-items-center">
                              <img
                                src="/src/assets/dashboard/images/layouts/dish-detail/02.png"
                                className="img-fluid avatar-48"
                                alt="image"
                              />
                              <div className="ms-3">
                                <h6 className="heading-title">Spices</h6>
                                <p className="mb-0">
                                  <small>Lorem ipsum</small>
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="col">
                            <div className="d-flex align-items-center">
                              <img
                                src="/src/assets/dashboard/images/layouts/dish-detail/03.png"
                                className="img-fluid avatar-48"
                                alt="image"
                              />
                              <div className="ms-3">
                                <h6 className="heading-title">Veggies</h6>
                                <p className="mb-0">
                                  <small>Lorem ipsum</small>
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="col">
                            <div className="d-flex align-items-center">
                              <img
                                src="/src/assets/dashboard/images/layouts/dish-detail/04.png"
                                className="img-fluid avatar-48"
                                alt="image"
                              />
                              <div className="ms-3">
                                <h6 className="heading-title">Corn</h6>
                                <small>Lorem ipsum</small>
                              </div>
                            </div>
                          </div>
                          <div className="col">
                            <div className="d-flex align-items-center">
                              <img
                                src="/src/assets/dashboard/images/layouts/dish-detail/05.png"
                                className="img-fluid avatar-48"
                                alt="image"
                              />
                              <div className="ms-3">
                                <h6 className="heading-title">Cheese</h6>
                                <small>Lorem ipsum</small>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <button
                        type="button"
                        className="btn btn-primary rounded mb-4"
                      >
                        View of Ingridients
                      </button>
                      <div className="mb-0">
                        <h4 className="mb-3">Nutritional Values</h4>
                        <div className="row row-cols-8 row-cols-lg-8 g-2 g-lg-3">
                          <div className="col">
                            <div className="card rounded-1">
                              <div className="card-body p-2 text-center">
                                <h6 className="mb-1 text-primary heading-title">
                                  150
                                </h6>
                                <h6 className="mb-1 heading-title">Calories</h6>
                                <span className="text-dark">
                                  <small>Kcal</small>
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="col">
                            <div className="card rounded-1">
                              <div className="card-body p-2 text-center">
                                <h6 className="mb-1 text-primary heading-title">
                                  100
                                </h6>
                                <h6 className="mb-1 heading-title">Protein</h6>
                                <span className="text-dark">
                                  <small>gm</small>
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="col">
                            <div className="card rounded-1">
                              <div className="card-body p-2 text-center">
                                <h6 className="mb-1 text-primary heading-title">
                                  250
                                </h6>
                                <h6 className="mb-1 heading-title">Fats</h6>
                                <span className="text-dark">
                                  <small>gm</small>
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="col">
                            <div className="card rounded-1">
                              <div className="card-body p-2 text-center">
                                <h6 className="mb-1 text-primary heading-title">
                                  300
                                </h6>
                                <h6 className="mb-1 heading-title">Sugar</h6>
                                <span className="text-dark">
                                  <small>gm</small>
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="col">
                            <div className="card rounded-1">
                              <div className="card-body p-2 text-center">
                                <h6 className="mb-1 text-primary heading-title">
                                  350
                                </h6>
                                <h6 className="mb-1 heading-title">Carbs</h6>
                                <span className="text-dark">
                                  <small>gm</small>
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="col">
                            <div className="card rounded-1">
                              <div className="card-body p-2 text-center">
                                <h6 className="mb-1 text-primary heading-title">
                                  400
                                </h6>
                                <h6 className="mb-1 heading-title">Fibres</h6>
                                <span className="text-dark">
                                  <small>gm</small>
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="col">
                            <div className="card rounded-1">
                              <div className="card-body p-2 text-center">
                                <h6 className="mb-1 text-primary heading-title">
                                  5
                                </h6>
                                <h6 className="mb-1 heading-title">Sodium</h6>
                                <span className="text-dark">
                                  <small>gm</small>
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="col">
                            <div className="card rounded-1">
                              <div className="card-body p-2 text-center">
                                <h6 className="mb-1 text-primary heading-title">
                                  350
                                </h6>
                                <h6 className="mb-1 heading-title">Vitamins</h6>
                                <span className="text-dark">
                                  <small>gm</small>
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex align-items-center">
                        <button
                          type="button"
                          className="btn btn-primary rounded me-3"
                        >
                          View of Ingridients
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6  col-xl-4">
              <div className="card">
                <div className="card-header">
                  <h4 className="card-title">Product Info</h4>
                </div>
                <div className="card-body">
                  <ul className="list-inline list-main p-0 m-0 text-dark">
                    <li className="py-4 pt-0">
                      <div className="d-flex align-items-center justify-content-between">
                        <h6 className="heading-title">Price</h6>
                        <h6 className="heading-title">$15</h6>
                      </div>
                    </li>
                    <li className="py-4">
                      <div className="d-flex align-items-center justify-content-between">
                        <h6 className="heading-title">Product Category</h6>
                        <h6 className="heading-title">Veg</h6>
                      </div>
                    </li>
                    <li className="py-4">
                      <div className="d-flex align-items-center justify-content-between">
                        <h6 className="heading-title">Availiblity</h6>
                        <span className="badge rounded-pill bg-success p-2">
                          In stock
                        </span>
                      </div>
                    </li>
                    <li className="py-4">
                      <div className="d-flex align-items-center justify-content-between">
                        <h6 className="heading-title">Delivery Charges</h6>
                        <h6 className="heading-title">Free</h6>
                      </div>
                    </li>
                    <li className="py-3">
                      <div className="d-flex align-items-center justify-content-between mb-3">
                        <h6 className="heading-title">SKU Identification</h6>
                        <h6 className="heading-title">23445</h6>
                      </div>
                    </li>
                  </ul>
                  <div className="d-flex align-items-center justify-content-between mt-5">
                    <a href="#" className="btn btn-primary rounded">
                      Edit
                    </a>
                    <a href="#" className="btn btn-primary rounded">
                      Delete
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6  col-xl-4">
              <div className="card iq-glass-card rounded border border-white">
                <div className="card-header bg-transparent">
                  <div className="d-flex justify-content-between align-items-center flex-wrap">
                    <h4>Recommendations for you</h4>
                    <div className="d-flex">
                      <a href="#" className="text-dark heading-title">
                        View All
                        <svg
                          width="24"
                          height="24"
                          className="ms-1"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            width="24"
                            height="24"
                            rx="12"
                            fill="#EA6A12"
                          ></rect>
                          <path
                            d="M10.25 8.5L13.75 12L10.25 15.5"
                            stroke="white"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <div className="iq-col-masonry">
                    <button
                      type="button"
                      className="btn btn-primary iq-col-masonry-block rounded-pill"
                    >
                      Burgers
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-primary iq-col-masonry-block rounded-pill"
                    >
                      Pizza
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-primary iq-col-masonry-block rounded-pill"
                    >
                      Soup
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-primary iq-col-masonry-block rounded-pill"
                    >
                      Dessert
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-primary iq-col-masonry-block rounded-pill"
                    >
                      Dessert
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-primary iq-col-masonry-block rounded-pill"
                    >
                      Biscuits
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-primary iq-col-masonry-block rounded-pill"
                    >
                      {" "}
                      cheese
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-primary iq-col-masonry-block rounded-pill"
                    >
                      {" "}
                      cheese
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-primary iq-col-masonry-block rounded-pill"
                    >
                      Tomato soup
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-primary iq-col-masonry-block rounded-pill"
                    >
                      Chicken fingers
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-primary iq-col-masonry-block rounded-pill"
                    >
                      Chicken{" "}
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-primary iq-col-masonry-block rounded-pill"
                    >
                      nuggets
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-primary iq-col-masonry-block rounded-pill"
                    >
                      Flatbread pizza
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-primary iq-col-masonry-block rounded-pill"
                    >
                      Soup
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-primary iq-col-masonry-block rounded-pill"
                    >
                      Flatbread pizza
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-primary iq-col-masonry-block rounded-pill"
                    >
                      cheese
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-primary iq-col-masonry-block rounded-pill"
                    >
                      Mini burgers
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-primary iq-col-masonry-block rounded-pill"
                    >
                      Mini burgers
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-primary iq-col-masonry-block rounded-pill"
                    >
                      Mini pizzas
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-primary iq-col-masonry-block rounded-pill"
                    >
                      Grilled Cheese
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-primary iq-col-masonry-block rounded-pill"
                    >
                      Grilled{" "}
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-primary iq-col-masonry-block rounded-pill"
                    >
                      Veggie Grill’s
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-primary iq-col-masonry-block rounded-pill"
                    >
                      Sandwich
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-xl-4">
              <div className="card">
                <div className="card-header">
                  <h4 className="card-title mb-2">Veg Burger</h4>
                  <p className="mb-0">The world’s favourite US burger!</p>
                </div>
                <div className="card-body text-dark py-4">
                  <table className="table table-sm table-borderless">
                    <tr className="text-primary">
                      <th>Add-ons</th>
                      <th>Price</th>
                      <th>Remove</th>
                    </tr>
                    <tbody className="p-0">
                      <tr>
                        <td>
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              width="16"
                              height="16"
                              rx="2"
                              fill="#B9EBD4"
                            />
                            <circle cx="8" cy="8" r="4" fill="#3BB77E" />
                          </svg>
                          cheese
                        </td>
                        <td>$ 70</td>
                        <td>
                          <div className="form-check d-block text-center">
                            <input
                              className="form-check-input border-dark ms-0"
                              type="radio"
                              name="flexRadioDefault"
                              id="flexRadioDefault1"
                            />
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="text-primary">Add a drink</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              width="16"
                              height="16"
                              rx="2"
                              fill="#B9EBD4"
                            />
                            <circle cx="8" cy="8" r="4" fill="#3BB77E" />
                          </svg>
                          Chocolate shake
                        </td>
                        <td>$ 80</td>
                        <td>
                          <div className="form-check d-block text-center">
                            <input
                              className="form-check-input border-dark ms-0"
                              type="radio"
                              name="flexRadioDefault"
                              id="flexRadioDefault2"
                            />
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              width="16"
                              height="16"
                              rx="2"
                              fill="#B9EBD4"
                            />
                            <circle cx="8" cy="8" r="4" fill="#3BB77E" />
                          </svg>
                          Coke (M)
                        </td>
                        <td>$ 70</td>
                        <td>
                          <div className="form-check d-block text-center">
                            <input
                              className="form-check-input border-dark ms-0"
                              type="radio"
                              name="flexRadioDefault"
                              id="flexRadioDefault3"
                            />
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="text-primary">Add a Side</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              width="16"
                              height="16"
                              rx="2"
                              fill="#B9EBD4"
                            />
                            <circle cx="8" cy="8" r="4" fill="#3BB77E" />
                          </svg>
                          Fries (M)
                        </td>
                        <td>$ 60</td>
                        <td>
                          <div className="form-check d-block text-center">
                            <input
                              className="form-check-input border-dark ms-0"
                              type="radio"
                              name="flexRadioDefault"
                              id="flexRadioDefault4"
                            />
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              width="16"
                              height="16"
                              rx="2"
                              fill="#B9EBD4"
                            />
                            <circle cx="8" cy="8" r="4" fill="#3BB77E" />
                          </svg>
                          Fries (L)
                        </td>
                        <td>$ 90</td>
                        <td>
                          <div className="form-check d-block text-center">
                            <input
                              className="form-check-input border-dark ms-0"
                              type="radio"
                              name="flexRadioDefault"
                              id="flexRadioDefault5"
                            />
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              width="16"
                              height="16"
                              rx="2"
                              fill="#B9EBD4"
                            />
                            <circle cx="8" cy="8" r="4" fill="#3BB77E" />
                          </svg>
                          Fries (XL)
                        </td>
                        <td>$ 120</td>
                        <td>
                          <div className="form-check d-block text-center">
                            <input
                              className="form-check-input border-dark ms-0"
                              type="radio"
                              name="flexRadioDefault"
                              id="flexRadioDefault6"
                            />
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="d-flex align-items-center justify-content-center">
                    <button
                      type="button"
                      className="btn btn-primary  rounded-pill me-4"
                    >
                      Total $200
                    </button>
                    <button
                      type="button"
                      className="btn btn-primary  rounded-pill ms-4"
                    >
                      Add To Cart
                    </button>
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

export default DishDetails;
