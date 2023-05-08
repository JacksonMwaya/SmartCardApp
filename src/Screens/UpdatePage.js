import React from 'react' 
import Header from '../Components/Header' 
import SideNav from '../Components/SideNav' 
import UpdateInfo from '../Components/UpdateInfo' 
import Footer from '../Components/Footer'

export default function  UpdatePage() {
  return (
    <div>  
     <SideNav />  
      <Header /> 
      <UpdateInfo />
      <Footer />
    </div>
  )
}
