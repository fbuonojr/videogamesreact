import React from 'react';
import './style.css';
import { Navbar } from 'react-bootstrap';

function Navigation() {
  return (
      <Navbar className="navbar" bg="dark" variant="dark">
        <Navbar.Brand>Video Games</Navbar.Brand>
      </Navbar>
  );
}

export default Navigation;
