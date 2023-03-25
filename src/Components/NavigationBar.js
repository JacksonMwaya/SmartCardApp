import React from 'react'  
import { Navbar, Nav , Container} from 'react-bootstrap' 
import "bootstrap/dist/css/bootstrap.min.css"


export default function NavigationBar() {
  return (
    <Navbar bg="primary" variant="dark" expand="lg"  >
    <Container>
      <Navbar.Brand href="#home"><b>SEDCS</b></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#home" className='active'>Home</Nav.Link>
          <Nav.Link href="#link">View ID</Nav.Link> 
          <Nav.Link href="#link">View Report</Nav.Link> 
          <Nav.Link href="#link">Log out</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

