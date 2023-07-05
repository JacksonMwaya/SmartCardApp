import React from 'react' 
import Header from '../Components/Header' 
import SideNav from '../Components/SideNav' 
import UpdateForm from '../Components/UpdateForm' 
import Footer from '../Components/Footer' 
import { useEffect } from "react"; 
import { useNavigate } from 'react-router'

export default function  UpdatePage() { 

  const navigate = useNavigate();
  
  useEffect(() => {
    // Perform an API request to check the user's authentication status
    const checkAuthStatus = async () => {
      try {
        const response = await fetch('http://192.168.43.109:8080/smartcardapp-api/auth.php', { //modify path
          method: 'GET', 
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json", 
          }, 
          credentials: "include"
        });
        const data = await response.json();

        if (data.status ===401) {
          // User is not logged in, redirect to the login page
          navigate("/Login");
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
      <UpdateForm />
      <Footer />
    </div>
  )
}
