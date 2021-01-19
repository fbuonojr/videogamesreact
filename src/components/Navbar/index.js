import React from 'react';
import { Navbar } from 'react-bootstrap';
import './style.css';

function Navigation() {
  return (
      <Navbar className="navbar" bg="dark" variant="dark">
        <Navbar.Brand>FRANK</Navbar.Brand>
      </Navbar>
  );
}

export default Navigation;
