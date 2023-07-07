import React from "react";
import Footer from '../../Components/Footer' 
import SideNav2 from '../../Components/SideNav2'
import Header from '../../Components/Header' 
import { useEffect } from "react"; 
import { useNavigate } from "react-router";
import IdCard from "../../Components/IdCard";
import DeviceOption from "../../Components/DeviceOption";



export default function ViewId2() {   

  const navigate = useNavigate();


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
          navigate("/");
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
      <DeviceOption />
      <IdCard />
      <Footer />
    </div>
  );
}
