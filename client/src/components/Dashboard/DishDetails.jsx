import React, { useState, useEffect } from "react";
import DashboardFooter from "./DashboardFooter";
import DashboardHeader from "./DashboardHeader";
import DashboardSideNav from "./DashboardSideNav";
import axios from "axios";
import { API_BASE_URL } from "../context/data";
import { useParams,useNavigate } from "react-router-dom";


const DishDetails = () => {
  const [dishName, setDishName] = useState("");
  const [dishCategory, setDishCategory] = useState("");
  const [mrpPrice, setMrpPrice] = useState();
  const [sellingPrice, setSellingPrice] = useState();
  const [offerPercentage, setOfferPercentage] = useState();
  const [available, setAvailable] = useState(true);
  const [dishImage, setDishImage] = useState(null);
  const [description, setDescription] = useState("");
  const [successMessage, setSuccessMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);

  const [dish, setDish] = useState([]); // State to store dish details
  const { id } = useParams(); // Extract `dishId` from the URL
  const navigate = useNavigate();
  
  const token = localStorage.getItem("token");
  const [totalStars, setTotalStars] = useState(5);

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

  // Fetch the dish details
  const dishDetail = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/dish-details/${id}`, {
        headers: {
          Authorization: `Token ${token}`,
        },
      });
      if (response.status === 200) {
        console.log(response.data, "response.data");
        setDish(response.data); // Set dish details
      }
    } catch (error) {
      console.error("Error fetching dish details", error);
    }
  };

  // useEffect hook to call dishDetail on component mount or when id/token changes
  useEffect(() => {
    if (id && token) {
      dishDetail();
    }
  }, [id, token]);

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
      available: available,
      description,
    });

    formData.append("data", jsonPayload);
    console.log(dishImage, "dishImage");
    try {
      const response = await axios.put(
        `${API_BASE_URL}/dish-details/${id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Token ${token}`,
          },
        }
      );

      if (response.status === 200) {
        setSuccessMessage(true);

        setDishName("");
        setDishCategory("");
        setDishImage(null);
        setAvailable(true);
        setDescription("");
        setMrpPrice("");
        setSellingPrice("");
        setOfferPercentage("");

        // After successful update, re-fetch the updated dish data
        await dishDetail();

        // Programmatically click the close button
        const closeButton = document.querySelector(
          "#exampleModalCenteredScrollable .btn-close"
        );
        if (closeButton) {
          closeButton.click();
        }
      } else {
        setErrorMessage(true);
      }
    } catch (error) {
      console.log(error, "error");
      setErrorMessage(true);
    }
  };

  const handleDelete = async (e) => {
    e.preventDefault();
  
    try {
      const response = await axios.delete(`${API_BASE_URL}/dish-details/${id}`, {
        headers: {
          Authorization: `Token ${token}`,
        },
      });
  
      if (response.status === 204) {


      const closeButton = document.querySelector("#exampleModalCenter .btn-close");
      if (closeButton) closeButton.click();


      navigate('/dishes', { state: { successMessage: "Dish deleted successfully!" } });
      console.log("Dish deleted successfully", response.data);  
      }else{
        setErrorMessage(true)
      }
      
    } catch (error) {
      console.error("Error deleting dish:", error);
      alert("There was an error deleting the dish. Please try again.");
    }
  };
  
  return (
    <>
      <DashboardSideNav />
      <main className="main-content">
        <DashboardHeader />
        <div className="content-inner mt-5 py-0">
          <div className="row">
            <div className="col-lg-12">
              {successMessage && (
                <div
                  className="alert alert-solid alert-success alert-dismissible fade show mb-3"
                  role="alert"
                >
                  <span>
                    <a href="https://emoji.gg/emoji/success">
                      <img
                        src="https://cdn3.emoji.gg/emojis/success.gif"
                        width="34px"
                        height="34px"
                        alt="success"
                      />
                    </a>
                  </span>
                  <span>Dish Edited Successfully..!</span>
                  <button
                    type="button"
                    className="btn-close btn-close-white"
                    data-bs-dismiss="alert"
                    aria-label="Close"
                  ></button>
                </div>
              )}

              <div className="card">
                <div className="card-header border-bottom-0 pb-0">
                  <h2 className="card-title">Product Details</h2>
                </div>
                <div className="card-body">
                  <div className="row">
                    <div className="col-lg-12 col-xl-5  mb-4 mt-xl-0">
                      <img
                        src={`${API_BASE_URL}/${dish.image}`}
                        className="img-fluid rounded"
                        alt="image"
                        style={{ height: "100%" }}
                      />
                    </div>
                    <div className="col-lg-12 col-xl-7">
                      <h4 className="mb-2">{dish.name}</h4>
                      <p className="mb-4">{dish.description}</p>
                      <div className="mb-5">
                        <h4 className="mb-3">Dish Info</h4>
                        <div className="">
                          <div className="col">
                            <div className="card-body">
                              <ul className="list-inline list-main p-0 m-0 text-dark">
                                <li className="py-4 pt-0">
                                  <div className="d-flex align-items-center justify-content-between">
                                    <h6 className="heading-title">Category</h6>
                                    <h6 className="heading-title">
                                      {dish.category}
                                    </h6>
                                  </div>
                                </li>

                                <li className="py-4">
                                  <div className="d-flex align-items-center justify-content-between">
                                    <h6 className="heading-title">
                                      Availiblity
                                    </h6>
                                    {dish.available ? (
                                      <span className="badge rounded-pill bg-success p-2">
                                        In stock
                                      </span>
                                    ) : (
                                      <span className="badge rounded-pill bg-danger p-2">
                                        No stock
                                      </span>
                                    )}
                                  </div>
                                </li>

                                <li className="py-4">
                                  <div className="d-flex align-items-center justify-content-between">
                                    <h6 className="heading-title">
                                      Selling Price
                                    </h6>
                                    <h6 className="heading-title">
                                      ₹ {dish.selling_price}
                                    </h6>
                                  </div>
                                </li>

                                <li className="py-4">
                                  <div className="d-flex align-items-center justify-content-between">
                                    <h6 className="heading-title">
                                      Rating
                                    </h6>
                                    <h6 className="heading-title">
                                    {[...Array(totalStars)].map((_, index) => {
                                        const currentRating = index + 1;

                                        return (
                                          <svg
                                            key={index}
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill={currentRating <= dish.ratings ? "#ffc107" : "#e4e5e9"} // Highlight stars up to the given rating
                                            style={{
                                              width: "2rem",
                                              height: "2rem",
                                              margin: "5px",
                                            }}
                                          >
                                            <path d="M12 .587l3.668 7.431 8.2 1.2-5.934 5.798 1.4 8.184L12 18.897l-7.334 3.866 1.4-8.184L.132 9.218l8.2-1.2L12 .587z" />
                                          </svg>
                                        );
                                      })}

                                    </h6>
                                  </div>
                                </li>

                              </ul>
                              <div className="d-flex align-items-center justify-content-between mt-5">
                                <button
                                  type="button"
                                  className="btn btn-primary mt-2 rounded"
                                  data-bs-toggle="modal"
                                  data-bs-target="#exampleModalCenteredScrollable"
                                >
                                  Edit
                                </button>
                                <button
                                  type="button"
                                  className="btn btn-primary mt-2 rounded"
                                  data-bs-toggle="modal"
                                  data-bs-target="#exampleModalCenter"
                                >
                                  Delete
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <DashboardFooter />
      </main>

      <div
        id="exampleModalCenteredScrollable"
        className="modal fade"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenteredScrollableTitle"
        aria-hidden="true"
      >
        <div
          className="modal-dialog modal-dialog-scrollable modal-dialog-centered"
          role="document"
        >
          <div className="modal-content">
            <div className="modal-header">
              <h5
                className="modal-title"
                id="exampleModalCenteredScrollableTitle"
              >
                Edit {dish.name}
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="card">
                <div className="card-body">
                  <form onSubmit={handleSubmit}>
                    <div className="form-group">
                      <label className="form-label" htmlFor="exampleInputText1">
                        Dish Name{" "}
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="exampleInputText1"
                        value={dishName}
                        placeholder="Enter Name"
                        onChange={(e) => setDishName(e.target.value)}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label
                        className="form-label"
                        htmlFor="exampleInputEmail3"
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
                        <option value="Pizza">Pizza</option>
                        <option value="Deserts">Deserts</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label
                        className="form-label"
                        htmlFor="exampleInputEmail3"
                      >
                        {" "}
                        Mrp Price
                      </label>
                      <input
                        type="number"
                        className="form-control"
                        id="exampleInputEmail3"
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
                    <div className="form-group">
                      <label
                        className="form-label"
                        htmlFor="exampleInputEmail3"
                      >
                        {" "}
                        Selling Price
                      </label>
                      <input
                        type="number"
                        className="form-control"
                        id="exampleInputEmail3"
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
                    <div className="form-group">
                      <label
                        className="form-label"
                        htmlFor="exampleInputEmail3"
                      >
                        {" "}
                        Offer Percentage
                      </label>
                      <input
                        type="number"
                        className="form-control"
                        id="exampleInputEmail3"
                        required
                        value={offerPercentage}
                        onChange={(e) => {
                          const value = e.target.value;
                          // Only allow numbers between 1 and 99
                          if (value >= 0 && value <= 100) {
                            setOfferPercentage(Number(value)); // Update state with valid number
                          }
                        }}
                      />
                    </div>

                    <div className="form-group">
                      <label
                        className="form-label"
                        htmlFor="exampleInputEmail3"
                      >
                        Dish Category
                      </label>

                      <select
                        className="form-select"
                        id="validationDefault04"
                        required
                        value={String(available)} // Convert the boolean to a string for matching
                        onChange={(e) =>
                          setAvailable(e.target.value === "true")
                        } // Convert back to boolean
                      >
                        <option disabled value="">
                          Choose Dish Category...
                        </option>
                        <option value="true">Available</option>
                        <option value="false">Unavailable</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label
                        className="form-label"
                        htmlFor="exampleInputEmail3"
                      >
                        {" "}
                        Dish Image
                      </label>
                      <input
                        type="file"
                        className="form-control"
                        accept=".png,.jpg,.jpeg"
                        id="validationDefault05"
                        onChange={handleFileChange}
                      />
                    </div>
                    <div className="form-group">
                      <label
                        className="form-label"
                        htmlFor="exampleInputEmail3"
                      >
                        {" "}
                        Description
                      </label>
                      <textarea
                        className="form-control"
                        id="exampleFormControlTextarea1"
                        rows="5"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                      ></textarea>
                    </div>
                    <button type="submit" className="btn btn-success rounded">
                      Submit
                    </button>
                    <button type="reset" className="btn btn-danger rounded">
                      cancel
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>





      <div className="modal fade"  id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
         <div className="modal-dialog modal-dialog-centered" role="document">
            
              <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalCenterTitle">Delete {dish.name}</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
                    </button>
                </div>
                <div className="modal-body d-flex justify-content-center align-items-center">
                  <img src='/src/assets/dashboard/images/delete.png' alt="Delete" className="d-block" />
                
                </div>
                <p className="d-flex justify-content-center align-items-center"> Are you Sure Want to Delete..?</p>

                <div className="modal-footer">
                <form onSubmit={handleDelete}>
                    <button type="button" className="btn btn-secondary me-4" data-bs-dismiss="modal">Close</button>
                    <button type="submit" className="btn btn-danger">Delete</button>
                </form>
                </div>
              </div>
            
         </div>
      </div>


    </>
  );
};

export default DishDetails;
