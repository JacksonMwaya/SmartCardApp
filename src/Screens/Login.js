import React from "react";
import { Link } from "react-router-dom";
import { Component } from "react"; 
import "../Components/Css/Login.css"
import pic from "../Resources/Images/UDSM-logo.png";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lectid: "",
      password: "",
      access: "",
    };
  }
  SignIn = () => {
    var lectid = this.state.lectid;
    var password = this.state.password;

    if (lectid.length === 0 || password.length === 0) {
      alert("Required field is missing");
    } else {
      var loginAPIURL = "";
      var headers = {
        Accept: "application/json",
        "Content-Type": "application/json",
      };
      var Data = {
        lectid: lectid,
        password: password,
      };
      fetch(loginAPIURL, {
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
        <div className="login-box"> 
          <img src={pic} alt="How are you" className="udsm-logo" />
          <h1 className="login-title">Login to SEDCS</h1>
          <form>
            <label htmlFor="lectid">Lecturer ID</label>
            <input
              type="text"
              onChange={(lectid) => this.setState({ lectid })}
              name="lectid"
              placeholder="2020144002134"
            />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              onChange={(password) => this.setState({ password })}
              name="password"
              placeholder="Enter Password"
            />
            <button onClick={this.SignIn} className="submit" type="submit">
              Log In
            </button>
          </form>
          <button className="link-button">
            <Link to="/Register">Don't have an account? Register here.</Link>
          </button>
        </div>
      </>
      // you put a fragment since they are more than one element
    );
  }
}
