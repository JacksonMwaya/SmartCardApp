import React from "react";
import { Link } from "react-router-dom";
import "../Components/Css/Login.css";
import pic from "../Resources/Images/UDSM-logo.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react"; 



const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    id: "", 
    //lecturer_id: "",
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
    const loginAPIURL = `http://localhost:8000/Lecturers?id=${formData.id}&password=${formData.password}`; //?lecturer_id = ${formData.lecture_id}&password=${formData.password}
    fetch(loginAPIURL)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        if (data.length > 0) { 
          navigate("/Home");
        } else {
          alert("Lecture ID or Password is Incorrect!!");
        }
        // do something with the response data, such as setting it to a state
        // or redirecting to another page
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>
      <div className="login-box">
        <img src={pic} alt="How are you" className="udsm-logo" />
        <h1 className="login-title">Login to SEDCS</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="lectId">Lecture ID:</label>
          <input
            type="text"
            id="id" //"lecturer_id"
            name="id" //"lecturer_id"
            value={formData.id} //{formData.lecturer_id}
            onChange={handleInputChange} //{handleInputChange}
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
