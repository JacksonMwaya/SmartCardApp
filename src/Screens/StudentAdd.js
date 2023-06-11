import React from "react";
import SideNav from "../Components/SideNav";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import RegisterForm from "../Components/RegisterForm";
import { useEffect } from "react";

function StudentAdd() {
  useEffect(() => {
    // Perform an API request to check the user's authentication status
    const checkAuthStatus = async () => {
      try {
        const response = await fetch(
          "http://localhost:8080/smartcardapp-api/auth.php",
          {
            //modify path
            method: "GET",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
          }
        );
        const data = await response.json();

        if (data.message === "User not logged in") {
          // User is not logged in, redirect to the login page
          window.history.href("/login");
        }
        if (data.message === "Unauthorized access") {
          // only admin can access this page
          window.history.href("/Teachers/Home2");
        }
      } catch (error) {
        console.error(error);
      }
    };

    checkAuthStatus();
  }, []);

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
