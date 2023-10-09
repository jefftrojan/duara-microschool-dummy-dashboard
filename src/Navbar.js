import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from './duara-logo-text.png';

function NavbarComponent() {
  return (
    <><header className="App-header">
          <img src={logo} alt="Logo" className="App-logo" />
      </header><Navbar expand="lg">
              <Navbar.Brand as={Link} to="/">Dashboard</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="mr-auto">
                      <Nav.Link as={Link} to="/kpi">KPIs</Nav.Link>
                      <Nav.Link as={Link} to="/financial">Financials</Nav.Link>
                      <Nav.Link as={Link} to="/progress">Student Progress</Nav.Link>
                  </Nav>
              </Navbar.Collapse>
          </Navbar></>
  );
}

export default NavbarComponent;
