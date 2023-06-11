import React from 'react'
import Footer from '../../Components/Footer' 
import SideNav2 from '../../Components/SideNav2'
import Header from '../../Components/Header'
import Dashboard from '../../Components/Dashboard'
import { useEffect } from 'react' 
import { useState } from 'react'

export default function Home2() {  

  const [lecturerId, setLecturerId] = useState("");  

 useEffect(() => {
    // Perform an API request to check the user's authentication status
    const checkAuthStatus = async () => {
      try {
        const response = await fetch(
          "http://localhost:8080/smartcardapp-api/auth.php",
          {
            //modify path
            method: "GET",
            Accept: "application/json",
            "Content-Type": "application/json",
          }
        );
        const data = await response.json();

        if (data.message === "User not logged in") {
          // User is not logged in, redirect to the login page
          window.history.href("/login");
        }
      } catch (error) {
        console.error(error);
      }
    };

    checkAuthStatus();
  }, []);
  
  return (
    <div>  
      <Header lecturerId={lecturerId} />
      <SideNav2 />  
      <Dashboard setLecturerId={setLecturerId} />
      <Footer />
    </div>
  )
}