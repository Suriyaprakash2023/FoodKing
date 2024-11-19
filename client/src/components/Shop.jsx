import { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import breadcrumb from "/src/assets/website/img/banner/breadcrumb.jpg";
import mainctabg2 from "/src/assets/website/img/banner/main-cta-bg-2.jpg";
import { Link } from "react-router-dom";
import axios from "axios";
import { API_BASE_URL } from "./context/data";

const Shop = () => {
  const [categories, setCategories] = useState([]);
  const [newArrival, setNewArrival] = useState([]);
  const [dishes, setDishes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const dishesPerPage = 6;

  // Calculate indices for current page
  const indexOfLastDish = currentPage * dishesPerPage;
  const indexOfFirstDish = indexOfLastDish - dishesPerPage;
  const currentDishes = dishes.slice(indexOfFirstDish, indexOfLastDish);

  // Calculate total pages
  const totalPages = Math.ceil(dishes.length / dishesPerPage);

  // Change page handler
  const paginate = (pageNumber) => setCurrentPage(pageNumber);


  useEffect(() => {
    const fetchDishes = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${API_BASE_URL}/shop/`);

        setCategories(response.data.categories);
        setNewArrival(response.data.new_arrival);
        setDishes(response.data.all_dishes);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching dishes:", error);
        setError(true);
      }
    };

    fetchDishes();
  }, []);

  const categoryIcons = {
    Burger: "flaticon-burger",
    Chicken: "flaticon-chicken",
    "French Fries": "flaticon-french-fries",
    Pizza: "flaticon-pizza",
    Sandwich: "flaticon-sandwich",
    "Fried Rice": "flaticon-rice",
    "Hot Dog": "flaticon-hotdog", // Example if you add a new category
  };

  return (
    <>
      <Header />
      {/* Breadcrumb Section Start  */}
      <div
        className="breadcrumb-wrapper bg-cover"
        style={{ backgroundImage: `url(${breadcrumb})` }}
      >
        <div className="container">
          <div className="page-heading center">
            <h1>shop</h1>
            <ul className="breadcrumb-items">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <i className="far fa-chevron-right"></i>
              </li>
              <li>shop</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Food Catagory Section Start  */}
      <section className="food-category-section fix section-padding">
        <div className="container">
          <div className="row g-4">
            <div className="col-xl-3 col-lg-4 order-2 order-md-1 mt-5">
              <div className="main-sidebar">
                <div className="single-sidebar-widget">
                  <div className="wid-title">
                    <h4>catagories</h4>
                  </div>
                  <div className="widget-categories">
                    <ul>
                      {categories.map((category) => (
                        <li key={category}>
                          <i
                            className={
                              categoryIcons[category] || "flaticon-hotdog" // Default icon if not mapped
                            }
                          ></i>
                          &nbsp; {category}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="single-sidebar-widget">
                  <div className="wid-title">
                    <h4>new arrival</h4>
                  </div>
                  <div className="popular-food-posts">
                    {newArrival.map((food) => (
                      <div className="single-post-item" key={food.id}>
                        <div
                          className="thumb bg-cover"
                          style={{
                            backgroundImage: `url(${API_BASE_URL}/${food.image})`,
                          }}
                        ></div>
                        <div className="post-content">
                          {/* Ratings */}
                          <div className="star">
                            {[...Array(5)].map((_, index) => (
                              <span
                                key={index}
                                className={`fas fa-star ${
                                  index < food.ratings ? "" : "color-bg"
                                }`}
                              ></span>
                            ))}
                          </div>
                          {/* Food Name */}
                          <h4>
                            <Link to={`/product-details/${food.id}`}>{food.name}</Link>
                          </h4>
                          {/* Prices */}
                          <div className="post-price">
                            <span className="theme-color-2">
                              ₹{food.selling_price}
                            </span>
                            <span style={{ textDecoration: 'line-through',textDecorationColor: 'red'  }}>₹{food.mrp_price}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-9 col-lg-8 order-1 order-md-2">
              <div className="woocommerce-notices-wrapper">
                <div className="product-showing">
                  <h5>
                    <a>
                      <span>
                        <img
                          src="/src/assets/website/img/filter.png"
                          alt="img"
                        />
                      </span>
                     
                    </a>
                  </h5>
                  <h5>
                    Showing <span>1–6</span> of {dishes.length} results
                  </h5>
                </div>
                <div className="form-clt">
                  <h6>
                    Sort by:{" "}
                    <a>
                      <i className="fal fa-sort-alt"></i>
                    </a>
                  </h6>
                  <div className="nice-select" tabIndex="0">
                    <span className="current">Price</span>
                    <ul className="list">
                      <li data-value="1" className="option selected">
                        100$
                      </li>
                      <li data-value="1" className="option">
                        120$
                      </li>
                      <li data-value="1" className="option">
                        150$
                      </li>
                      <li data-value="1" className="option">
                        200$
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="row">
                {currentDishes.map((dish) => (
                  <div className="col-xl-4 col-lg-6 col-md-6" key={dish.id}>
                    <div className="catagory-product-card-2 shadow-style text-center">
                      <div className="catagory-product-image">
                        <img src={`${API_BASE_URL}/${dish.image}`} alt={dish.name} />
                      </div>
                      <div className="catagory-product-content">
                        <div className="catagory-button">
                          <Link to={`/product-details/${dish.id}`} className="theme-btn-2">
                            <i className="far fa-shopping-basket"></i> Add To
                            Cart
                          </Link>
                        </div>
                        <div className="info-price d-flex align-items-center justify-content-center">
                          <p>-{dish.offer_percentage}%</p>
                          <h6>₹{dish.selling_price}</h6>
                          <span style={{ textDecoration: 'line-through',textDecorationColor: 'red'  }}>₹{dish.mrp_price}</span>
                        </div>
                        <h4>
                          <a>{dish.name}</a>
                        </h4>
                        <div className="star">
                          {[...Array(5)].map((_, index) => (
                            <span
                              key={index}
                              className={`fas fa-star ${
                                index < dish.ratings ? "" : "color-bg"
                              }`}
                            ></span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              {/* Pagination */}
              <div className="page-nav-wrap mt-5 text-center">
  <ul>
    {/* Previous Page Button */}
    <li>
      <a
        className={`page-numbers ${currentPage === 1 ? "disabled" : ""}`}
        href="#"
        onClick={() => paginate(currentPage > 1 ? currentPage - 1 : 1)}
      >
        <i className="fal fa-long-arrow-left"></i>
      </a>
    </li>
    {/* Page Numbers */}
    {[...Array(totalPages)].map((_, index) => (
      <li key={index}>
        <a
          href="#"
          className={`page-numbers ${currentPage === index + 1 ? "active-bg" : ""}`}
          onClick={() => paginate(index + 1)}
        >
          {index + 1}
        </a>
      </li>
    ))}
    {/* Next Page Button */}
    <li>
      <a
        className={`page-numbers ${currentPage === totalPages ? "disabled" : ""}`}
        href="#"
        onClick={() =>
          paginate(currentPage < totalPages ? currentPage + 1 : totalPages)
        }
      >
        <i className="fal fa-long-arrow-right"></i>
      </a>
    </li>
  </ul>
</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Cta Banner Section Start  */}
      <section
        className="main-cta-banner-2 section-padding bg-cover"
        style={{ backgroundImage: `url(${mainctabg2})` }}
      >
        <div className="tomato-shape-left float-bob-y">
          <img src="/src/assets/website//img/tomato.png" alt="shape-img" />
        </div>
        <div className="chili-shape-right float-bob-y">
          <img src="/src/assets/website//img/chilli.png" alt="shape-img" />
        </div>
        <div className="container">
          <div className="main-cta-banner-wrapper-2 d-flex align-items-center justify-content-between">
            <div className="section-title mb-0">
              <span className="theme-color-3 wow fadeInUp">
                crispy, every bite taste
              </span>
              <h2 className="text-white wow fadeInUp" data-wow-delay=".3s">
                30 minutes fast <br />
                <span className="theme-color-3">delivery</span> challage
              </h2>
            </div>
            <a className="theme-btn bg-white wow fadeInUp" data-wow-delay=".5s">
              <span className="button-content-wrapper d-flex align-items-center">
                <span className="button-icon">
                  <i className="flaticon-delivery"></i>
                </span>
                <span className="button-text">order now</span>
              </span>
            </a>
            <div className="delivery-man">
              <img
                src="/src/assets/website//img/delivery-man-2.png"
                alt="img"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Shop;
