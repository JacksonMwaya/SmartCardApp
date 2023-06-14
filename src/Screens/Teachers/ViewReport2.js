import React from 'react'  
import Footer from '../../Components/Footer' 
import Header from '../../Components/Header'
import SideNav2 from '../../Components/SideNav2'; 
import { useNavigate } from 'react-router'; 
import { useEffect } from 'react';

export default function ViewReport2() {    
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
    <SideNav2 />  
    <Header />
    <Footer />
    </div>
  )
}

