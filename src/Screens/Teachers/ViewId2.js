import React from "react";
import Footer from '../../Components/Footer' 
import SideNav2 from '../../Components/SideNav2'
import Header from '../../Components/Header'
import { useNavigate } from "react-router-dom"; 
import { useEffect } from "react";

export default function ViewId2() {  
  const navigate = useNavigate();  
  
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
          navigate('/login');
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
  );
}
