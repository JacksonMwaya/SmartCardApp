import React from 'react'

import { Link } from 'react-router-dom'; 

export default function SideBar() {
  return (  

    <div >
    <div className="top">
      <Link to="/Home" style={{ textDecoration: "none" }}>
        <span className="logo"><b>SEDCS</b></span>
      </Link>
    </div>
    <div className="center">
      <ul>
        <li>
          <span>Dashboard</span>
        </li>
        <Link to="/Home" style={{ textDecoration: "none" }}>
          <li>
            <span>Home</span>
          </li>
        </Link>
        <Link to="/ViewId" style={{ textDecoration: "none" }}>
          <li>
            <span>View ID</span>
          </li>
        </Link> 
        <Link to="/ViewReport" style={{ textDecoration: "none" }}>
        <li>
          <span>View Report</span>
        </li> 
        </Link> 
        <Link to="/Login" style={{ textDecoration: "none" }}>
        <li>
          <span>Logout</span>
        </li> 
        </Link> 
      </ul>
    </div>
    <div className="bottom">
    </div>
  </div>
  )
}
