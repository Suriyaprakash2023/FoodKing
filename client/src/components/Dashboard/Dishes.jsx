import { useState,useEffect } from "react";
import DashboardFooter from "./DashboardFooter";
import DashboardHeader from "./DashboardHeader";
import DashboardSideNav from "./DashboardSideNav";
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import {Link} from "react-router-dom";
import {API_BASE_URL} from '../context/data';
import axios from "axios";

const Dishes = () => {
  const [dishes, setDishes] = useState([]);
  const [newDishes, setNewDishes] = useState([]);
  const [categoryTitle, setCategoryTitle] = useState("New Dishes"); // Dynamic title for card header
  const [selectedCategory, setSelectedCategory] = useState(null); // Tracks the selected category
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);


  useEffect(()=>{
    const fetchDishes = async () => {
      try {

      setLoading(true);
      const response = await axios.get(`${API_BASE_URL}/dishes/`);
      setDishes(response.data); 
      setLoading(false);

      } catch (error) {
        console.error("Error fetching dishes:", error);
        setError(true);

      }
    };


    const getNewDishes =async ()=>{
      try{
        const response = await axios.get(`${API_BASE_URL}/new_dishes/`);

        if(response.status == 200){
          console.log(response.data,"new dish")
          setNewDishes(response.data)
        }else{
          console.log('fetch new data error')
        }
      }catch{
        console.log('fetch new data error')
      }
    }


    fetchDishes();
    getNewDishes();

  },[])


  useEffect(() => {
    const fetchNewDishes = async () => {
      if (!selectedCategory) return; // Do nothing if no category is selected

      try {
        setLoading(true);
        const response = await axios.get(
          `${API_BASE_URL}/dishes/${selectedCategory}`
        );
        if (response.status === 200) {
          setNewDishes(response.data);
          setCategoryTitle(`${selectedCategory} Dishes`);
        } else {
          console.log("Failed to fetch new dishes.");
        }
      } catch (err) {
        console.error("Error fetching category dishes:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchNewDishes();
  }, [selectedCategory]); 






  const { categories } = dishes;
  return (
    <>   
   



      <DashboardSideNav />
     
      <main className="main-content"
      style={{
        background: 'url("/src/assets/dashboard/images/dashboard.png")',
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
       
       
      }}
      >
      <DashboardHeader />
        <div className="content-inner mt-5 py-0">
          <div className="row">
            <div className="col-lg-3">
              <div className="card">
                <div className="card-header border-0">
                  <h4 className="card-title">Menu List [{dishes.category_count}]</h4>
                </div>
                <div className="card-body py-0">
                  <ul className="list-inline " style={{cursor:'pointer !important'}}>
                  {categories && Object.entries(categories).map(([categoryName, categoryData]) => (
                      <a
                        key={categoryName}
                        className="py-4 d-flex justify-content-between cursor-pointer" style={{cursor:'pointer !important'}}
                      >
                        <span className="fw-bolder heading-title text-dark"  onClick={() => setSelectedCategory(categoryName)}  style={{cursor:'pointer !important'}} >
                          {categoryName}
                          
                        </span>
                        <span className="badge bg-primary px-3 rounded-pill d-flex align-items-center">
                          {categoryData.count}
                        </span>
                      </a>
                    ))}
                                
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-9 ">
              <div className="card">
              <div className="card-header d-flex justify-content-between align-items-center">
                <h4 className="card-title list-main">{categoryTitle}</h4>
                <Link to='/add-dish'>
                  <button className="btn btn-success w-5 h-5 rounded">
                    <RestaurantMenuIcon/> add New Product
                  </button>
                </Link>
              </div>

                <div className="card-body py-0">
                  <ul className="list-inline chat-list-main1">

                 
                  {newDishes.map((dish) => (
                    <li key={dish.name} className="py-5 border-bottom border-soft-primary">
                      <div className="d-flex justify-content-between">
                        <div className="d-flex align-items-center">
                          {/* Render image or placeholder if image is null */}
                          <img
                            src={`${API_BASE_URL}/${dish.image}`}
                            
                            className="img-fluid avatar avatar-40"
                            alt={dish.name}
                          />
                          <div className="d-flex justify-content-between ms-3">
                            <div>
                              <Link to={`/dish-details/${dish.id}`}>
                                <h6 className="mb-1 fw-bolder heading-title">{dish.name}</h6>

                              </Link>
                              <small className="mb-0 d-none d-sm-block">{dish.description.substring(0, 80)} </small>

                            </div>
                            <div>
                              {/* Placeholder for rating, you can replace this with actual ratings */}
                              <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                {/* SVG Path for rating icon */}
                              </svg>
                              <svg className="ms-2" width="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                {/* SVG Path for another icon */}
                              </svg>
                            </div>
                          </div>
                        </div>
                        <div className="d-flex align-items-end">
                          <small className="text-dark">
                          <span style={{fontWeight:'700'}}>₹{dish.selling_price}</span> 
                            {dish.offer_percentage > 0 && (
                              <span className="ms-2 text-muted" style={{ textDecoration: 'line-through',textDecorationColor: 'red'  }}>
                                ₹{dish.mrp_price}
                              </span>
                            )}
                          </small>
                        </div>
                      </div>
                    </li>
                  ))}
                
                   
                  </ul>
                </div>
              </div>
            </div>
            
          </div>
        </div>
        

        <footer className="footer d-sm-block"  style={{ position: 'absolute', bottom: 0, width: '100%' }}>
        <div className="footer-body">
          <ul className="left-panel list-inline mb-0 p-0">
            <li className="list-inline-item">
              <a >Privacy Policy</a>
            </li>
            <li className="list-inline-item">
              <a >Terms of Use</a>
            </li>
          </ul>
          <div className="right-panel">
            ©
            2024
            Suriya, Made with
            <span className="text-danger">
             💕
            </span>
            by <a href="">FoodKing Design</a>.
          </div>
        </div>
      </footer>
      </main>
    </>
  );
};

export default Dishes;
