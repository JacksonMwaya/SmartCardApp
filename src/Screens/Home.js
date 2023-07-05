import React from "react";
import Footer from "../Components/Footer";
import SideNav from "../Components/SideNav";
import Header from "../Components/Header";
import Dashboard from "../Components/Dashboard";
import { useEffect } from "react"; 
import { useState } from "react"; 
import { useNavigate } from "react-router";

export default function Home() {  

  const navigate = useNavigate();

  const [lecturerId, setLecturerId] = useState(""); 

  useEffect(() => {
    // Perform an API request to check the user's authentication status
    const checkAuthStatus = async () => {
      try {
        const response = await fetch(
          "http://192.168.43.109:8080/smartcardapp-api/auth.php",
          {
            //modify path
            method: "GET",
            Accept: "application/json",
            "Content-Type": "application/json", 
            credentials: "include",
          }, 
        );
        const data = await response.json();

        if (data.status === 401) { 
          navigate("/Login");
        }  
        if (data.status === 404) {
          // only admin can access this page
          navigate("/Teachers/Home2");
        }
        if (data.status ===200) {
          // User is not logged in, redirect to the login page 
          navigate("/Home");
        }
      } catch (error) {
        console.error(error);
      }
    };

    checkAuthStatus();
  }, [navigate]);

  return (
    <div>
      <Header lecturerId={lecturerId} />
      <SideNav />
      <Dashboard setLecturerId={setLecturerId} />
      <Footer />
    </div>
  );
}
