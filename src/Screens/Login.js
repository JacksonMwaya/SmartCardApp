import React from "react";
import { Link } from "react-router-dom";
import "../Components/Css/Login.css";
import pic from "../Resources/Images/UDSM-logo.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";  


const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    lecturer_id: "",
    password: "",
  }); 

  const [errorMessage, setErrorMessage] = useState(""); 

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  //remember to change id to lectId
  const handleSubmit = (event) => {
    event.preventDefault();
    const loginAPIURL = `http://localhost:8080/smartcardapp-api/login.php`; 
    fetch(loginAPIURL, {
      method: "POST",
      headers: { 
        'Accept':'application/json',
        "Content-Type": "application/json"
      }, 
      body: JSON.stringify(formData)  
    }) 
    .then((response) => {
      if (response.status === 401) {
        return response.json().then((data) => {
          const errorMessage = data.message; // Assuming the error message is returned in the response JSON
          setErrorMessage(errorMessage); 
          console(response.status);
        });
      } if  (response.status === 200){
        navigate("/Home") ;
      }
    })
      .catch((error) => {
        console.error("Error:", error);
      }); 
}; 


  return (
    <>
      <div className="login-box">
        <img src={pic} alt="udsm-logo" className="udsm-logo" />
        <h1 className="login-title">Login to SEDCS</h1> 
        <div className="error-message">{errorMessage}</div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="lectId">Lecture ID:</label>
          <input
            type="text"
            id="lecturer_id"
            name="lecturer_id"
            value={formData.lecturer_id}
            onChange={handleInputChange} 
            required
          />
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
          <button type="submit" className="submit">
            Login
          </button>
          <button className="link-button">
            <Link to="/Register">Don't have an account? Register here.</Link>
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
