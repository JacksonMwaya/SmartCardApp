import React from "react";
import SideNav from "../Components/SideNav";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import RegisterForm from "../Components/RegisterForm";
import { useEffect } from "react";
import { useNavigate } from "react-router";

function StudentAdd() { 
  const navigate = useNavigate();
  useEffect(() => {
    // Perform an API request to check the user's authentication status
    const checkAuthStatus = async () => {
      try {
        const response = await fetch(
          "http://192.168.43.109:8080/smartcardapp-api/auth.php",
          {
            //modify path
            method: "GET",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json", 
              credentials: "include",
            },    
          }
        );
        const data = await response.json();

        if (data.status === 401) {
          // User is not logged in, redirect to the login page
          navigate("/");
        }
        if (data.status === 404) {
          // only admin can access this page
          navigate("/Teachers/Home2");
        }
      } catch (error) {
        console.error(error);
      }
    };

    checkAuthStatus();
  }, [navigate]);

  return (
    <div>
      <SideNav />
      <Header />
      <RegisterForm />
      <Footer />
    </div>
  );
}
export default StudentAdd;
