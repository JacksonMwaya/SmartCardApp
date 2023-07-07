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
    const loginAPIURL = `http://192.168.43.109:8080/smartcardapp-api/login.php`;   
    const headers = {
      Accept: "application/json",
      "Content-Type": "application/json",  
    };

    const loginFunction = async () => {
      try {
        const response = await fetch(loginAPIURL, {
          method: "POST",
          headers: headers,
          body: JSON.stringify(formData),  
          credentials: "include"
        }, 
        );
        const data = await response.json();

        if (data.status === 401) {
          alert(data.message);
          navigate("/");
        }
        if (data.status === 200) {
          navigate("/Home");
        }   
        if (data.status === 202) {
          navigate("/Teachers/Home2");
        }
      } catch (error) {
        console.log.error(error);
      }
    };
    loginFunction();
  };
   


  return (
    <>
      <div className="login-box">
        <img src={pic} alt="udsm-logo" className="udsm-logo" />
        <h1 className="login-title">Login to SEDCS</h1> 
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
