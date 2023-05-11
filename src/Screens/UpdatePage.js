import React from 'react' 
import Header from '../Components/Header' 
import SideNav from '../Components/SideNav' 
import UpdateForm from '../Components/UpdateForm' 
import Footer from '../Components/Footer'

export default function  UpdatePage() {
  return (
    <div>  
     <SideNav />  
      <Header /> 
      <UpdateForm />
      <Footer />
    </div>
  )
}
