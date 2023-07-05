import React from 'react'
import Footer from '../../Components/Footer' 
import SideNav2 from '../../Components/SideNav2'
import Header from '../../Components/Header'
import Dashboard from '../../Components/Dashboard' 
import { useEffect } from 'react'  
import { useNavigate } from 'react-router'
import { useState } from 'react'


export default function Home2() {   

  const navigate = useNavigate();
  const [lecturerId, setLecturerId] = useState("");   
  useEffect(() => {
    // Perform an API request to check the user's authentication status
    const checkAuthStatus = async () => {
      try {
        const response = await fetch(
          "http://192.168.43.109:8080/smartcardapp-api/auth2.php",
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
      } catch (error) {
        console.error(error);
      }
    };

    checkAuthStatus();
  }, [navigate]);


  return (
    <div>  
      <Header lecturerId={lecturerId} />
      <SideNav2 />  
      <Dashboard setLecturerId={setLecturerId} />
      <Footer />
    </div>
  )
}