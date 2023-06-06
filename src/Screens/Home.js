import React from 'react'
import Footer from '../Components/Footer' 
import SideNav from '../Components/SideNav'
import Header from '../Components/Header' 
import Dashboard from '../Components/Dashboard'
import { useNavigate } from 'react-router' 
import { useEffect } from 'react'

export default function Home() {  

  const navigate = useNavigate();
  useEffect(() => {
    // Perform an API request to check the user's authentication status
    const checkAuthStatus = async () => {
      try {
        const response = await fetch('/login.php', { //modify path
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
      <Header />
      <SideNav />  
      <Dashboard />
      <Footer />
    </div>
  )
}