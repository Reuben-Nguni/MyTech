import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Blog = () => {
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

  const renderImageGrid = (images, title) => (
    <div className="mb-5">
      <h3 className="text-center mb-4">{title}</h3>
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
    <Container id="blog" className="my-5">
      {renderImageGrid(cctvImages, 'CCTV INSTALLATIONS')}
      {renderImageGrid(computerImages, 'COMPUTER SERVICES')}
      {renderImageGrid(ispImages, 'ISP')}
    </Container>
  );
};

export default Blog;
