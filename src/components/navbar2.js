import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../components/navbar2.css'
import { Link } from "react-router-dom"

const NavigationBar2 = () => {
  return (
    <Navbar expand="lg" className='nav-s'>
      <Container>
        <Navbar.Brand as={Link} to="/" className='text-dark'><h1>QuickRentz</h1></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className='qweqwe'>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/"> HOME</Nav.Link> 
            <NavDropdown title="OFFERS" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/Offers">Action</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/">Another action
                
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="BUSINESS RENTALS" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/SmallMid">SMALL & MID-SIZED BUSINESS</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/CarRentalP">CAR RENTAL AFFILIATE PROGRAM</NavDropdown.Item>
              
            </NavDropdown>
            <NavDropdown title="BRANCHES" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Makati Branch</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Quezon City Branch</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Cavite Branch</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Pampanga Branch</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="HELP" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/CustomerService">Customer Service</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/Under">
                FAQS
              </NavDropdown.Item>
              
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
};

export default NavigationBar2;