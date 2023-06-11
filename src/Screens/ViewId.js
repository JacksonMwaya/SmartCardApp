import React from "react";
import SideNav from "../Components/SideNav";
import Footer from "../Components/Footer"; 
import Header from '../Components/Header' 
import { useEffect } from "react";

export default function ViewId() {  

  
  useEffect(() => {
    // Perform an API request to check the user's authentication status
    const checkAuthStatus = async () => {
      try {
        const response = await fetch('/viewId.php', { //modify path
          method: 'GET',
          credentials: 'include',
        });
        const data = await response.json();

        if (data.message === 'User not logged in') {
          // User is not logged in, redirect to the login page
          window.history.href('/login');
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
  );
}
