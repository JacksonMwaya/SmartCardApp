import React from "react";
import SideNav from "../Components/SideNav";
import Footer from "../Components/Footer"; 
import Header from '../Components/Header' 
import RegisterForm from "../Components/RegisterForm";

function StudentAdd() { 

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
