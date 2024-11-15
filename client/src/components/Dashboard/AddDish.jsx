import { useState } from "react";
import DashboardSideNav from "./DashboardSideNav";
import DashboardHeader from "./DashboardHeader";
import DashboardFooter from "./DashboardFooter";
import breadcrumb from "/src/assets/dashboard/images/dashboard.png";
import axios from "axios";

const AddDish = () => {
  const [dishName, setDishName] = useState("");
  const [dishCategory, setDishCategory] = useState("");
  const [mrpPrice, setMrpPrice] = useState(0);
  const [sellingPrice, setSellingPrice] = useState(0);
  const [offerPercentage, setOfferPercentage] = useState(0);
  const [dishImage, setDishImage] = useState(null);
  const [description, setDescription] = useState("");
   console.log(typeof(offerPercentage),"offerPercentage")
  const handleFileChange = (e) => {
    setDishImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", dishName);
    formData.append("category", dishCategory);
    formData.append("mrp_price", mrpPrice);
    formData.append("selling_price", sellingPrice);
    formData.append("offer_percentage", offerPercentage);
    formData.append("image", dishImage);
    formData.append("description", description);
      console.log(formData,"formdata")

   // To check the type of offer_percentage specifically:
const offerPercentageValue = formData.get("offer_percentage");
console.log(typeof offerPercentageValue, "offer_percentage type");
    try {
      const response = await axios.post(
        "http://127.0.0.1:8008/add_new_add/",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.status === 201) {

        alert("Dish added successfully!");

      } else {

        alert("Failed to add dish.");

      }
    } catch (error) {
      console.error("Error:", error);

      alert("An error occurred. Please try again.");

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
                            required
                            onChange={handleFileChange}
                          />
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
