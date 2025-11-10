import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';

const Header = ({ theme, toggleTheme }) => {
  const location = useLocation();

  return (
    <Navbar bg="primary" variant="dark" expand="lg" className="py-3 w-100">
      <Container fluid>
        <Navbar.Brand as={Link} to="/">
          <img
            src="/logo2.png"
            alt="IT Services Logo"
            className="me-2"
            style={{ height: '40px' }}
          />
          <span className="fw-bold">REUTECH HUB</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto d-flex align-items-center">
            <Nav.Link as={Link} to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Nav.Link>
            <Nav.Link as={Link} to="/services" className={location.pathname === '/services' ? 'active' : ''}>Services</Nav.Link>
            <Nav.Link as={Link} to="/blog" className={location.pathname === '/blog' ? 'active' : ''}>Portfolio</Nav.Link>
            <Nav.Link as={Link} to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>Contact Us</Nav.Link>
            <Button variant="outline-light" onClick={toggleTheme} className="ms-3">
              {theme === 'light' ? '🌙' : '☀️'}
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
