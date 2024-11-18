import { useState,useEffect } from "react";
import DashboardSideNav from "./DashboardSideNav";
import DashboardHeader from "./DashboardHeader";
import DashboardFooter from "./DashboardFooter";
import breadcrumb from "/src/assets/dashboard/images/dashboard.png";
import axios from "axios";
import {API_BASE_URL} from "../context/data";
const AddDish = () => {
  const [dishName, setDishName] = useState("");
  const [dishCategory, setDishCategory] = useState("");
  const [mrpPrice, setMrpPrice] = useState();
  const [sellingPrice, setSellingPrice] = useState();
  const [offerPercentage, setOfferPercentage] = useState();
  const [available, setAvailable] = useState(true);
  const [dishImage, setDishImage] = useState(null);
  const [description, setDescription] = useState("");
  const [successMessage,setSuccessMessage] = useState(false)
  const [errorMessage,setErrorMessage] = useState(false)



  const [ratings, setRatings] = useState(null);
  const [hover, setHover] = useState(null);
  const [totalStars, setTotalStars] = useState(5);

  const handleChange = (e) => {
    setTotalStars(parseInt(Boolean(e.target.value, 10) ? e.target.value : 5));
  };

  useEffect(() => {
    let timer;
    if (successMessage || errorMessage) {
      timer = setTimeout(() => {
        setSuccessMessage(false);
        setErrorMessage(false);
      }, 5000); // 5 seconds
    }

    // Cleanup the timer when the component unmounts or messages change
    return () => clearTimeout(timer);
  }, [successMessage, errorMessage]);



  const handleFileChange = (e) => {
    setDishImage(e.target.files[0]);
  };


    const handleSubmit = async (e) => {
      e.preventDefault();
    
      // Create a FormData object
      const formData = new FormData();
    
      // Add the file
      if (dishImage) {
        formData.append("image", dishImage); // Changed `dishImage` to `image`
      }
    
      // Add other data as JSON
      const jsonPayload = JSON.stringify({
        name: dishName, // Changed `dishName` to `name`
        category: dishCategory, // Changed `dishCategory` to `category`
        mrp_price: mrpPrice, // Changed `mrpPrice` to `mrp_price`
        selling_price: sellingPrice, // Changed `sellingPrice` to `selling_price`
        offer_percentage: offerPercentage, // Changed `offerPercentage` to `offer_percentage`
        available:available,
        ratings:ratings,
        description,
      });
    
      formData.append("data", jsonPayload);
      console.log(dishImage,"dishImage")
      try {
        const response = await axios.post(`${API_BASE_URL}/add_new_add/`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
    
        if (response.status === 201) {

          setSuccessMessage(true);


          setDishName("");
          setDishCategory("");
          setDishImage(null);
          setRatings(null);
          setAvailable(true);
          setDescription("");
          setMrpPrice('');
          setSellingPrice('');
          setOfferPercentage('');
          
          
         
          

        } else {
          setErrorMessage(true);

        }
      } catch (error) {
        console.log(error,"error")
        setErrorMessage(true);
        
      }
    };
    
  

  return (
    <>
      <DashboardSideNav />
      <main
        className="main-content"
        style={{ backgroundImage: `url(${breadcrumb})` }}
      >
        <DashboardHeader />

        <div className="content-inner mt-5 py-0">
          <div className="">
            <div className="row d-flex justify-content-center">
              
              <div className="col-sm-12 col-lg-11">
              {
                  successMessage ? (
                    <div className="alert alert-solid alert-success alert-dismissible fade show mb-3" role="alert">
                      <span>
                        <a href="https://emoji.gg/emoji/success">
                          <img src="https://cdn3.emoji.gg/emojis/success.gif" width="34px" height="34px" alt="success"/>
                        </a>
                      </span>
                      <span>Dish Created Successfully Please Check Menu List..!</span>
                      <button type="button" className="btn-close btn-close-white" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>
                  ) :
                  ('')

              }

              {
                errorMessage ? (
                  <div className="alert alert-solid alert-danger alert-dismissible fade show mb-3" role="alert">
                      <span>
                        <img src="/src/assets/dashboard/images/error.gif" width="34px" height="34px" alt="danger"/>
                      </span>
                      <span> Something Went Wrong Pleae Try Again..!</span>
                      <button type="button" className="btn-close btn-close-white" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>
                ) :
                ('')
              }
                <div className="card">
                
                  <div className="card-header d-flex justify-content-between">
                    <div className="header-title">
                      <h4 className="card-title"> Add New Dish</h4>
                    </div>
                  </div>
                  <div className="card-body">
                    <form onSubmit={handleSubmit}>
                      <div className="row">
                        <div className="col-md-6 mb-3">
                          <label
                            className="form-label"
                            htmlFor="validationDefault01"
                          >
                            Dish name
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Dish Name"
                            id="validationDefault01"
                            required
                            value={dishName}
                            onChange={(e) => setDishName(e.target.value)}
                          />
                        </div>
                        <div className="col-md-6 mb-3">
                          <label
                            className="form-label"
                            htmlFor="validationDefault02"
                          >
                            Dish Category
                          </label>
                          <select
                            className="form-select"
                            id="validationDefault04"
                            required
                            value={dishCategory}
                            onChange={(e) => setDishCategory(e.target.value)}
                          >
                            <option disabled value="">
                              Choose Dish Category...
                            </option>
                            <option value="Burger">Burger</option>
                            <option value="Chicken">Chicken</option>
                            <option value="Chinese">Chinese</option>
                            <option value="Pasta">Pasta</option>
                            <option value="French Fries">French Fries</option>
                            <option value="Sandwich">Sandwich</option>
                            <option value="Fried Rice">Fried Rice</option>
                            <option value="Pizza">Pizza</option>
                            <option value="Deserts">Deserts</option>
                          </select>
                        </div>
                        <div className="col-md-6 mb-3">
                          <label
                            htmlFor="validationCustomUsername"
                            className="form-label"
                          >
                            Mrp Price
                          </label>
                          <input
                            type="number"
                            className="form-control"
                            placeholder="Enter Mrp Price"
                            id="validationCustomUsername"
                            required
                            value={mrpPrice}
                           
                            onChange={(e) => {
                              const value = e.target.value;
                              // Only allow numbers between 1 and 99
                              if (value >= 0 && value <= 1000) {
                                 setMrpPrice(Number(value)); // Update state with valid number
                              }
                            }}
                          />
                        </div>
                        <div className="col-md-6 mb-3">
                          <label
                            className="form-label"
                            htmlFor="validationDefault03"
                          >
                            Selling Price
                          </label>
                          <input
                            type="number"
                            className="form-control"
                            placeholder="Enter Selling Price"
                            id="validationDefault03"
                            required
                            value={sellingPrice}
                            onChange={(e) => {
                              const value = e.target.value;
                              // Only allow numbers between 1 and 99
                              if (value >= 0 && value <= 1000) {
                                 setSellingPrice(Number(value)); // Update state with valid number
                              }
                            }}
                          />
                        </div>
                        <div className="col-md-6 mb-3">
                          <label
                            className="form-label"
                            htmlFor="validationDefault04"
                          >
                            Offer Percentage
                          </label>
                          <input
                            type="number"
                            minLength="1"
                            maxLength="99"
                            step="1"
                            pattern="\d{1,2}"
                            className="form-control"
                            placeholder="Enter Offer Percentage"
                            id="validationDefault03"
                            required
                            value={offerPercentage}
                            onChange={(e) => {
                              const value = e.target.value;
                              // Only allow numbers between 1 and 99
                              if (value >= 0 && value <= 99) {
                                setOfferPercentage(Number(value)); // Update state with valid number
                              }
                            }}
                          />
                        </div>

                        <div className="col-md-6 mb-3">
                            <label className="form-label" htmlFor="exampleInputEmail3">Dish Category</label>
                           
                            <select
                              className="form-select"
                              id="validationDefault04"
                              required
                              value={String(available)} // Convert the boolean to a string for matching
                              onChange={(e) => setAvailable(e.target.value === "true")} // Convert back to boolean
                            >
                              <option disabled value="">
                                Choose Dish Category...
                              </option>
                              <option value="true">Available</option>
                              <option value="false">Unavailable</option>
                            </select>
                        </div>


                        <div className="col-md-6 mb-3">
                          <label
                            className="form-label"
                            htmlFor="validationDefault05"
                          >
                            Dish Image
                          </label>
                          <input
                            type="file"
                            className="form-control"
                            accept=".png,.jpg,.jpeg"
                            id="validationDefault05"
                            onChange={handleFileChange}
                            required
                          />
                        </div>
                        <div className="col-md-6 mb-3">
                          <label
                            className="form-label"
                            htmlFor="validationDefault05"
                          >
                            Rating
                          </label> <br/>
                         

                          {[...Array(totalStars)].map((_, index) => {
                          const currentRating = index + 1;

                          return (
                            <label key={index}>
                              <input
                                type="radio"
                                name="rating"
                                value={currentRating}
                                onChange={() => setRatings(currentRating)}
                                className="d-none"
                              />
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill={currentRating <= (hover || ratings) ? "#ffc107" : "#e4e5e9"}
                                style={{
                                  width: "2rem",
                                  height: "2rem",
                                  cursor: "pointer",
                                  margin: "5px",
                                }}
                                onMouseEnter={() => setHover(currentRating)}
                                onMouseLeave={() => setHover(null)}
                              >
                                <path d="M12 .587l3.668 7.431 8.2 1.2-5.934 5.798 1.4 8.184L12 18.897l-7.334 3.866 1.4-8.184L.132 9.218l8.2-1.2L12 .587z" />
                              </svg>
                            </label>
                          );
                        })}



                        </div>


                        <div className="col-md-12 mb-3">
                          <label
                            className="form-label"
                            htmlFor="validationDefault05"
                          >
                            Description
                          </label>
                          <textarea
                            className="form-control"
                            id="exampleFormControlTextarea1"
                            rows="5"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                          ></textarea>
                        </div>
                      </div>
                      <div className="form-group">
                        <button
                          className="btn btn-primary rounded"
                          type="submit"
                        >
                          Submit form
                        </button>
                      </div>
                    </form>
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

export default AddDish;
