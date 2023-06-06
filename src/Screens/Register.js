import React from "react";
import { Link } from "react-router-dom";
import "../Components/Css/Register.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

//remember to change id to lectId

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fName: "",
    lName: "",
    email: "",
    phoneNo: "",
    deptCode: "",
    password: "", 
    //lecturer_id: "",
    id: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const checkIfLecturerExists = (id) => {
    const apiUrl = `http://localhost:8000/Lecturers?id=${formData.id}`; //lecturer_id=${formData.lecturer_id}
    return fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        return data.length > 0;
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const registerAPIURL = "http://localhost:8000/Lecturers";
    const headers = {
      Accept: "application/json",
      "Content-Type": "application/json",
    };
    fetch(registerAPIURL, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(formData),
    })
      .then(checkIfLecturerExists(formData.id)) //formData.lecturer_id
      .then((response) => {
        if (!response.ok) {
          alert("This lecture exists");
          throw new Error("Network response was not ok");
        } else {
          navigate("/Login");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>
      <div className="registration-box">
        <form onSubmit={handleSubmit}>
          <h1 className="register-title">Register to SEDCS</h1>
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="fName"
            name="fName"
            value={formData.fName}
            onChange={handleInputChange}
            required
          />

          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lName"
            name="lName"
            value={formData.lName}
            onChange={handleInputChange}
            required
          />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />

          <label htmlFor="phone Number">Phone No:</label>
          <input
            type="tel"
            id="phoneNo"
            name="phoneNo"
            value={formData.phoneNo}
            onChange={handleInputChange}
            required
          />

          <label htmlFor="Department Code">Department Code:</label>
          <input
            type="text"
            id="deptCode"
            name="deptCode"
            value={formData.deptCode}
            onChange={handleInputChange}
            required
          />

          <label htmlFor="Lecture ID">Lecture ID:</label>
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
            Register
          </button>
          <button className="link-button">
            <Link to="/Login">Already have an account? Login here.</Link>
          </button>
        </form>
      </div>
    </>
  );
};

export default Register;
