import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const BlogPage = () => {
  const cctvImages = [
    { src: '/CCTV (1).jpg', alt: 'CCTV Project 1', caption: 'CCTV Installations' },
    { src: '/CCTV (2).jpg', alt: 'CCTV Project 2' },
    { src: '/CCTV (3).jpg', alt: 'CCTV Project 3' },
    { src: '/CCTV (4).jpg', alt: 'CCTV Project 4' },
    { src: '/CCTV (5).jpg', alt: 'CCTV Project 5' },
  ];

  const computerImages = [
    { src: '/PC (3).jpg', alt: 'Computer Services Project 1' },
    { src: '/PC (2).jpg', alt: 'Computer Services Project 2' },
    { src: '/PC (4).jpg', alt: 'Computer Services Project 3' },
    { src: '/PC (1).jpg', alt: 'Computer Services Project 4' },
  ];

  const ispImages = [
    { src: '/ISP (3).jpg', alt: 'ISP Project 1' },
    { src: '/ISP (2).jpg', alt: 'ISP Project 2' },
    { src: '/ISP (4).jpg', alt: 'ISP Project 3' },
    { src: '/ISP (1).jpg', alt: 'ISP Project 4' },
  ];

  const renderImageGrid = (images, title, description) => (
    <div className="mb-5">
      <h2 className="text-center mb-4">{title}</h2>
      <p className="text-center text-muted mb-4">{description}</p>
      <Row>
        {images.map((image, index) => (
          <Col md={3} key={index} className="mb-3">
            <Card className="shadow-sm">
              <Card.Img variant="top" src={image.src} alt={image.alt} />
              {image.caption && <Card.Body><Card.Text className="text-center">{image.caption}</Card.Text></Card.Body>}
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );

  return (
    <Container className="my-5">
      <h1 className="text-center mb-5">Our Projects & Portfolio</h1>
      {renderImageGrid(
        cctvImages,
        'CCTV INSTALLATIONS',
        'Professional CCTV installation services for enhanced security and surveillance.'
      )}
      {renderImageGrid(
        computerImages,
        'COMPUTER SERVICES',
        'Comprehensive computer repair, maintenance, and technical support services.'
      )}
      {renderImageGrid(
        ispImages,
        'ISP SERVICES',
        'High-speed internet connectivity solutions and network infrastructure setup.'
      )}
    </Container>
  );
};

export default BlogPage;
