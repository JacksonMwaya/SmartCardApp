import React from 'react' 
import Header from '../Components/Header' 
import SideNav from '../Components/SideNav' 
import UpdateForm from '../Components/UpdateForm' 
import Footer from '../Components/Footer' 
import { useNavigate } from "react-router-dom"; 
import { useEffect } from "react";

export default function  UpdatePage() { 

  const navigate = useNavigate();  
  
  useEffect(() => {
    // Perform an API request to check the user's authentication status
    const checkAuthStatus = async () => {
      try {
        const response = await fetch('/updateStudent.php', { //modify path
          method: 'GET',
          credentials: 'include',
        });
        const data = await response.json();

        if (data.status === 'error') {
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
     <SideNav />  
      <Header /> 
      <UpdateForm />
      <Footer />
    </div>
  )
}
