import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-5 mt-5 w-100">
      <Container fluid>
        <Row>
          <Col md={4} className="mb-4">
            <h5>Reutech Hub</h5>
            <p>
              Your trusted partner in IT solutions. We provide cutting-edge technology services
              to businesses and individuals across Zimbabwe.
            </p>
            <img src="/logo2.png" alt="Reutech Hub Logo" style={{ height: '50px' }} />
          </Col>
          <Col md={4} className="mb-4">
            <h5>Our Services</h5>
            <ul className="list-unstyled">
              <li>Access Point Solutions</li>
              <li>ISP Services</li>
              <li>Networking</li>
              <li>Coding Lessons</li>
              <li>Managed Print Services</li>
              <li>CCTV Installation</li>
            </ul>
          </Col>
          <Col md={4} className="mb-4">
            <h5>Contact Us</h5>
            <p>
              <strong>Email:</strong> <a href="mailto:reutechhub@gmail.com" className="text-white">reutechhub@gmail.com</a><br />
              <strong>Phone:</strong> 0970067982 | 0769963307<br />
              <strong>Location:</strong> Zimbabwe
            </p>
            <p>
              Follow us on social media for the latest updates and technology insights.
            </p>
          </Col>
        </Row>
        <hr className="my-4" />
        <Row>
          <Col className="text-center">
            <p>&copy; 2024 Reutech Hub. All rights reserved.</p>
            <p>
              Empowering businesses with innovative IT solutions since 2024.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
