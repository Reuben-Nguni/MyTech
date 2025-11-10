import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const ServicesPage = () => {
  const services = [
    {
      title: 'Access Point',
      description: 'Reliable access point solutions for your business needs.',
      details: 'We provide high-quality access points that ensure seamless connectivity for your office or home network. Our solutions include wireless access points with advanced security features, easy installation, and 24/7 support.'
    },
    {
      title: 'ISP',
      description: 'High-speed Internet Service Provider solutions.',
      details: 'Experience blazing-fast internet speeds with our ISP services. We offer various packages tailored to your needs, including fiber optic connections, dedicated lines, and reliable customer support.'
    },
    {
      title: 'Networking',
      description: 'Comprehensive networking services for seamless connectivity.',
      details: 'Our networking experts design and implement robust network infrastructures. From LAN setup to WAN configurations, we ensure your business stays connected and secure.'
    },
    {
      title: 'Coding Lessons',
      description: 'Learn coding with our expert instructors.',
      details: 'Join our coding bootcamps and workshops led by industry professionals. Learn popular programming languages, web development, and software engineering best practices.'
    },
    {
      title: 'MPS',
      description: 'Managed Print Services for efficient printing solutions.',
      details: 'Optimize your printing infrastructure with our Managed Print Services. We handle everything from printer maintenance to supply management, reducing costs and improving efficiency.'
    },
    {
      title: 'CCTV Installation',
      description: 'Professional CCTV installation for your security needs.',
      details: 'Protect your property with our professional CCTV installation services. We offer complete surveillance solutions including camera placement, monitoring systems, and remote access capabilities.'
    },
  ];

  return (
    <Container className="my-5">
      <h1 className="text-center mb-5">Our Services</h1>
      <Row>
        {services.map((service, index) => (
          <Col lg={6} key={index} className="mb-4">
            <Card className="h-100 shadow-sm">
              <Card.Body>
                <Card.Title className="text-primary">{service.title}</Card.Title>
                <Card.Text className="mb-3">{service.description}</Card.Text>
                <Card.Text className="text-muted">{service.details}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ServicesPage;
