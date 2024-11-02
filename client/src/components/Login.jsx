import React, { useState,useContext } from "react";
import { useNavigate } from "react-router-dom";
import bookingshape from "/src/assets/website/img/shape/booking-shape.png";
import bg from "/src/assets/website/img/bg-image/food.jpg";
import AuthContext from "../components/context/AuthContext.jsx";
import Alert from '@mui/material/Alert';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
const Login = () => {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const [phone_number, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState("");
  const [successMessage, setSuccessMessage] = useState("");




  const [showPassword, setShowPassword] = useState(false);

  // Toggle the password visibility
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };


  // Submit handler with async/await
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(phone_number, password); // Wait for login to complete

      // Retrieve user role from localStorage
      const userRole = localStorage.getItem('userRole');

      // Redirect based on role
      if (userRole === 'admin') {
        navigate("/dashboard");
      } else {
        navigate("/");
      }
    } catch (err) {
      setPassword("");
      setErrors(err.message || "Login failed. Please check your credentials."); // Show error message if login fails
    }
  };


  return (
    <>
     <Header />
      <div
        className="d-flex justify-content-center align-items-center bg-cover"
        style={{
          minHeight: "100vh",
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        }} // Full viewport height
      >
        <div
          className="col-lg-5 col-sm-12 col-md-10 wow fadeInUp"
          data-wow-delay=".4s"
        >
          <div
            className="booking-contact bg-cover"
            style={{
              backgroundImage: `url(${bookingshape})`,
              backgroundSize: "cover",
            }}
          >
            <h4 className="text-center text-white">Login</h4>
            {errors && <Alert severity="error"  variant="filled">{errors}</Alert>}
            {successMessage && <Alert severity="success"  variant="filled">{successMessage}</Alert>}
            <form onSubmit={handleSubmit} >
              <div className="booking-items">
                <div className="form-clt">
                  <input
                    type="text"
                    name="number"
                    id="number"
                    placeholder="Enter Phone Number"
                    value={phone_number}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    required
                  />
                  <div className="icon">
                    <i className="fas fa-phone"></i>
                  </div>
                </div>
                <div className="form-clt">
                  <input
                    type={showPassword ? "text" : "password"} // Toggle between "password" and "text"
                    id="calendar"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter Your Password"
                  />
                  <div
                    className="icon"
                    onClick={togglePasswordVisibility}
                    style={{ cursor: "pointer" }}
                  >
                    <i className={`fas ${showPassword ? "fa-eye-slash" : "fa-eye"}`} ></i>{" "}
                    {/* Toggle icon */}
                  </div>
                </div>
                <div className="form-clt">
                  <button type="sumbit" className="theme-btn bg-yellow">
                    Login
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Login;
