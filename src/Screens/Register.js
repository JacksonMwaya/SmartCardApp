import React from "react";
import { Link } from "react-router-dom";
import { Component } from "react"; 
import "../Components/Css/Register.css"

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lectid: "",
      password: "",
      fname: "",
      lname: "",
      email: "",
      phoneNo: "",
      deptcode: "",
      access: "",
    };
  }

  SignUp = () => {
    var lectid = this.state.lectid;
    var password = this.state.password;
    var fname = this.state.fname;
    var lname = this.state.lname;
    var email = this.state.email;
    var phoneNo = this.state.phoneNo;
    var deptcode = this.state.deptcode;

    if (
      lectid.length === 0 ||
      password.length === 0 ||
      phoneNo.length === 0 ||
      deptcode.length === 0 ||
      fname.length === 0 ||
      lname.length === 0 ||
      email.length === 0
    ) {
      alert("Required field is missing");
    } else {
      var registerAPIURL = "";
      var headers = {
        Accept: "application/json",
        "Content-Type": "application/json",
      };
      var Data = {
        lectid: lectid,
        password: password,
        email: email,
        fname: fname,
        lname: lname,
        phoneNo: phoneNo,
        deptcode: deptcode,
      };
      fetch(registerAPIURL, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(Data), //Converts javascript object into JSON object
      })
        .then((response) => response.json()) //Check if response is in json
        .then((response) => {
          alert("message: " + response[0].Message);
          this.setState({ access: response[0].Access });
          if (this.state.access === true) {
            this.props.Navigation.navigate("Home");
          }
        })
        .catch((error) => {
          alert("Error: " + error);
        });
      //code works when you submit information in the form
    }
  };

  render() {
    return (
      <>
        <div className="registration-box">
          <h1 className="register-title">Register to SEDCS</h1>
          <form>
            <label htmlFor="fname">First Name</label>
            <input
              type="text"
              onChange={(fname) => this.setState({ fname })}
              name="firstname"
              placeholder="Enter First Name"
            />
            <label htmlFor="lname">Last Name</label>
            <input
              type="text"
              onChange={(fname) => this.setState({ fname })}
              name="lastname"
              placeholder="Enter Last Name"
            />
            <label htmlFor="email">Email</label>
            <input
              type="email"
              onChange={(email) => this.setState({ email })}
              name="email"
              placeholder="Enter Email"
            />
            <label htmlFor="phoneNo">Phone Number</label>
            <input
              type="tel"
              onChange={(phoneNo) => this.setState({ phoneNo })}
              name="phone"
              placeholder="Enter Phone Number"
            />
            <label htmlFor="deptcode">Department Code</label>
            <input
              type="text"
              onChange={(deptcode) => this.setState({ deptcode })}
              name="deptcode"
              placeholder="Enter Department Code"
            />
            <label htmlFor="lectid">Lecture ID</label>
            <input
              type="text"
              onChange={(lectid) => this.setState({ lectid })}
              name="lectureid"
              placeholder="Enter Lecture ID"
            />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              onChange={(password) => this.setState({ password })}
              name="password"
              placeholder="Enter Password"
            />
            <button onClick={this.SignUp} className="submit" type="submit">
              Register
            </button>

            <button className="link-button">
              <Link to="/">Already have an account? Login here.</Link>
            </button>
          </form>
        </div>
      </>
    );
  }
}
