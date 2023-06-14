import React from 'react'
import Footer from '../../Components/Footer' 
import SideNav2 from '../../Components/SideNav2'
import Header from '../../Components/Header'
import Dashboard from '../../Components/Dashboard'

import { useState } from 'react'


export default function Home2() {   


  const [lecturerId, setLecturerId] = useState("");  


  return (
    <div>  
      <Header lecturerId={lecturerId} />
      <SideNav2 />  
      <Dashboard setLecturerId={setLecturerId} />
      <Footer />
    </div>
  )
}