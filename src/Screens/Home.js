import React from 'react'
import Footer from '../Components/Footer' 
import SideNav from '../Components/SideNav'
import Header from '../Components/Header' 
import Dashboard from '../Components/Dashboard'


export default function Home() { 
  
  return (
    <div>  
      <Header />
      <SideNav />  
      <Dashboard />
      <Footer />
    </div>
  )
}