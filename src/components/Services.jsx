import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Services = () => {
  const services = [
    {
      title: 'Access Point',
      description: 'Reliable access point solutions for your business needs.',
    },
    {
      title: 'ISP',
      description: 'High-speed Internet Service Provider solutions.',
    },
    {
      title: 'Networking',
      description: 'Comprehensive networking services for seamless connectivity.',
    },
    {
      title: 'Coding Lessons',
      description: 'Learn coding with our expert instructors.',
    },
    {
      title: 'MPS',
      description: 'Managed Print Services for efficient printing solutions.',
    },
    {
      title: 'CCTV Installation',
      description: 'Professional CCTV installation for your security needs.',
    },
  ];

  return (
    <Container id="services" className="my-5">
      <h2 className="text-center mb-4">Our Services</h2>
      <Row>
        {services.map((service, index) => (
          <Col md={4} key={index} className="mb-4">
            <Card className="h-100 shadow-sm">
              <Card.Body className="text-center">
                <Card.Title>{service.title}</Card.Title>
                <Card.Text>{service.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Services;
