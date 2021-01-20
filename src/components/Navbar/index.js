import React from 'react';
import './style.css';
import { Navbar } from 'react-bootstrap';

function Navigation() {
  return (
      <Navbar className="navbar" bg="dark" variant="dark">
        <Navbar.Brand>User Name Here</Navbar.Brand>
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Login
            Logout
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
  );
}

export default Navigation;
