import React from 'react' 
import SideNav from '../Components/SideNav' 
import Footer from '../Components/Footer' 
import Header from '../Components/Header' 
import { useEffect } from "react"; 
import { useNavigate } from 'react-router';

export default function ViewReport() {   

  const navigate = useNavigate();
 

  useEffect(() => {
    // Perform an API request to check the user's authentication status
    const checkAuthStatus = async () => {
      try {
        const response = await fetch('http://localhost:8080/smartcardapp-api/viewReport.php', { //modify path
          method: 'GET',
          credentials: 'include',
        });
        const data = await response.json();

        if (data.status === 401) {
          // User is not logged in, redirect to the login page
          navigate("/Login"); 
        }  
        if (data.status === 404) {
          alert(data.message);
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
    <Footer />
    </div>
  )
}

