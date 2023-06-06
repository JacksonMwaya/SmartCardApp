import React from "react";
import SideNav from "../Components/SideNav";
import Footer from "../Components/Footer"; 
import Header from '../Components/Header' 
import RegisterForm from "../Components/RegisterForm"; 
import { useNavigate } from "react-router-dom"; 
import { useEffect } from "react";

function StudentAdd() {  
  const navigate = useNavigate();  
  
  useEffect(() => {
    // Perform an API request to check the user's authentication status
    const checkAuthStatus = async () => {
      try {
        const response = await fetch('/registerStudent.php', { //modify path
          method: 'GET',
          credentials: 'include',
        });
        const data = await response.json();

        if (data.message === 'User not logged in') {
          // User is not logged in, redirect to the login page
          navigate('/login');
        } 
        if (data.message === 'Unauthorized access') {
          // only admin can access this page
          navigate('/Teachers/Home2');
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
      <RegisterForm />
      <Footer />
    </div>
  );
}
export default StudentAdd;
