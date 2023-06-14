import React from 'react' 
import SideNav from '../Components/SideNav' 
import Footer from '../Components/Footer' 
import Header from '../Components/Header' 
import { useEffect } from "react";

export default function ViewReport() {   

  useEffect(() => {
    // Perform an API request to check the user's authentication status
    const checkAuthStatus = async () => {
      try {
        const response = await fetch('/viewReport.php', { //modify path
          method: 'GET',
          credentials: 'include',
        });
        const data = await response.json();

        if (data.status ===401) {
          // User is not logged in, redirect to the login page
          window.location.href = "/Login";
        } 
        if (data.status ===200) {
          // User is not logged in, redirect to the login page
          window.location.href = "/ViewReport";
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
    <Footer />
    </div>
  )
}

