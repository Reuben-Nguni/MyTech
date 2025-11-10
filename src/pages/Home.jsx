import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero bg-primary text-white py-5">
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <h1 className="display-4 fw-bold">Welcome to Reutech Hub</h1>
              <p className="lead">
                Your trusted partner in IT solutions, providing cutting-edge technology services
                to businesses and individuals in Zimbabwe and beyond.
              </p>
              <Button variant="light" size="lg" href="#about">Learn More</Button>
            </Col>
            <Col md={6}>
              <img src="/logo2.png" alt="Reutech Hub Logo" className="img-fluid" />
            </Col>
          </Row>
        </Container>
      </section>

      {/* About Section */}
      <section id="about" className="py-5">
        <Container>
          <Row>
            <Col md={6}>
              <h2>About Reutech Hub</h2>
              <p>
                Reutech Hub is a leading IT services company based in Zimbabwe, specializing in
                access point solutions, internet service provision, networking, coding education,
                managed print services, and CCTV installations. We are committed to delivering
                high-quality, reliable, and innovative technology solutions to meet the diverse
                needs of our clients.
              </p>
              <p>
                With years of experience in the industry, our team of skilled professionals is
                dedicated to helping businesses and individuals leverage technology to achieve
                their goals and stay ahead in today's digital world.
              </p>
            </Col>
            <Col md={6}>
              <img src="/CCTV.jpg" alt="CCTV Installation" className="img-fluid rounded" />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Mission Section */}
      <section className="bg-light py-5">
        <Container>
          <Row>
            <Col md={6}>
              <img src="/ISP (1).jpg" alt="ISP Services" className="img-fluid rounded" />
            </Col>
            <Col md={6}>
              <h2>Our Mission</h2>
              <p>
                To empower businesses and individuals with innovative IT solutions that enhance
                productivity, security, and connectivity. We strive to be the go-to partner for
                all technology needs, providing exceptional service and support to our clients
                across Zimbabwe and the region.
              </p>
              <ul>
                <li>Deliver reliable and high-performance IT services</li>
                <li>Provide expert guidance and education in technology</li>
                <li>Ensure customer satisfaction through quality and innovation</li>
                <li>Contribute to the growth of the digital economy in Zimbabwe</li>
              </ul>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Services Preview */}
      <section className="py-5">
        <Container>
          <h2 className="text-center mb-4">Our Services</h2>
          <Row>
            <Col md={4} className="mb-4">
              <Card className="h-100 shadow-sm">
                <Card.Body className="text-center">
                  <Card.Title>Access Point Solutions</Card.Title>
                  <Card.Text>Reliable wireless connectivity for your business needs.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card className="h-100 shadow-sm">
                <Card.Body className="text-center">
                  <Card.Title>ISP Services</Card.Title>
                  <Card.Text>High-speed internet solutions for homes and businesses.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card className="h-100 shadow-sm">
                <Card.Body className="text-center">
                  <Card.Title>CCTV Installation</Card.Title>
                  <Card.Text>Professional security camera installations.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <div className="text-center">
            <Button variant="primary" href="/services">View All Services</Button>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Home;
