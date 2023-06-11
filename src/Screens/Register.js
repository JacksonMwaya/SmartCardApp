import React from "react";
import { Link } from "react-router-dom";
import "../Components/Css/Register.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

//remember to change id to lectId

const Register = () => {
  const [formData, setFormData] = useState({
    fName: "",
    lName: "",
    email: "",
    phoneNo: "",
    deptCode: "",
    password: "",
    lecturer_id: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const registerAPIURL =
      "http://localhost:8080/smartcardapp-api/register.php";
    const headers = {
      Accept: "application/json",
      "Content-Type": "application/json",
    };
    fetch(registerAPIURL, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.status === 401) {
          return response.json().then((data) => {
            const errorMessage = data.message; // Assuming the error message is returned in the response JSON
            setErrorMessage(errorMessage);
            console(response.status);
          });
        }
        if (response.status === 200) {
          navigate("/Login");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <>
      <div className="registration-box">
        <form onSubmit={handleSubmit}>
          <h1 className="register-title">Register to SEDCS</h1>
          <div className="error-message">{errorMessage}</div>
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
