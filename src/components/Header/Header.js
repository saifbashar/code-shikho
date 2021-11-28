// Import Section
import React from 'react';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css';
const Header = () => {
  // Header Section
  return (
    <Navbar bg="light" variant="light">
      <Container>
        <Navbar.Brand>
          <NavLink to="/" className="navbar-brand fw-bold">
            CodeShikho{' '}
          </NavLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <NavLink to="/" className="text-decoration-none mx-3  text-black">
              {' '}
              <Button variant=" btn-outline-dark border-0 w-100">Home</Button>
            </NavLink>

            <NavLink
              to="/course"
              className="text-decoration-none mx-3 text-black"
            >
              <Button variant=" btn-outline-dark border-0 w-100">Course</Button>
            </NavLink>
            <NavLink
              to="/blogs"
              className="text-decoration-none mx-3 text-black"
            >
              <Button variant=" btn-outline-dark border-0 w-100">Blogs</Button>
            </NavLink>
            <NavLink
              to="/about"
              className="text-decoration-none mx-3 text-black"
            >
              <Button variant=" btn-outline-dark w-100 border-0">About</Button>
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
