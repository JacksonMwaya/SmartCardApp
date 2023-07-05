import React from 'react' 
import SideNav from '../Components/SideNav' 
import Footer from '../Components/Footer' 
import Header from '../Components/Header' 
import { useEffect } from "react"; 
import { useNavigate } from 'react-router';
import ReportTable from '../Components/ReportTable';

export default function ViewReport() {   

  const navigate = useNavigate();
 

  useEffect(() => {
    // Perform an API request to check the user's authentication status
    const checkAuthStatus = async () => {
      try {
        const response = await fetch(
          "http://192.168.43.109:8080/smartcardapp-api/auth.php",
          {
            //modify path
            method: "GET",
            Accept: "application/json",
            "Content-Type": "application/json",
            credentials: "include",
          }
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
    <SideNav />  
    <Header /> 
    <ReportTable />
    <Footer />
    </div>
  )
}

