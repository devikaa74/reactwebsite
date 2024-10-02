import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Component = () => {
  return (
    <Navbar expand="lg" className="bg-body-info">
      <Container>
        <Navbar.Brand href="#home" className='fw-bolder'>LIP<span className='text-warning'>STICK</span></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Products</Nav.Link>
            <Nav.Link href="#link">Shop</Nav.Link>
            <Nav.Link href="#link">Login</Nav.Link>


            <NavDropdown title="Agencies" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">UK</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                USA
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">INDIA</NavDropdown.Item>
              <NavDropdown.Divider />
              {/* <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item> */}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Component