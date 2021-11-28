// Import Section
import React from 'react';

import { Container, Row, Col } from 'react-bootstrap';
import './Footer.css';
const Footer = () => {
  return (
    <div className="footer mt-5">
      <Container className="text-white py-2">
        <Row className="py-4">
          <Col>
            <h4>Code Shikho</h4>
            <p>Location:</p>
            <p className="text-secondary lh-1">
              47 Destiny Common, South Jolieview
            </p>
            <p>Office hour:</p>
            <p className="text-secondary lh-1">8:00am – 5:00pm</p>
            <p>Telephone</p>
            <p className="text-secondary lh-1">826-696-8370</p>
            <p>Email</p>
            <p className="text-secondary lh-1">codeshikho@edu.com</p>
          </Col>
          <Col>
            <h4>EXPLORE</h4>
            <p className="text-secondary lh-1">History</p>
            <p className="text-secondary lh-1">Mission</p>
            <p className="text-secondary lh-1">Community</p>
            <p className="text-secondary lh-1">Around the world</p>
            <p className="text-secondary lh-1">News Network</p>
            <p className="text-secondary lh-1">Social Media</p>
          </Col>
          <Col>
            <h4>Courses</h4>
            <p className="text-secondary lh-1">Undergraduate</p>
            <p className="text-secondary lh-1">By School</p>
            <p className="text-secondary lh-1">Process</p>
          </Col>
          <Col>
            <h4>Language</h4>
            <p className="text-secondary lh-1">Python</p>
            <p className="text-secondary lh-1">Javascript</p>
            <p className="text-secondary lh-1">C++</p>
            <p className="text-secondary lh-1">Java</p>
          </Col>
        </Row>
        <div className="d-flex justify-content-between">
          <div>
            <span>© 2020 Scrate Education. All Rights Reserved</span>
          </div>
          <div>
            <span>PRIVACY POLICY | TERMS OF USE</span>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
