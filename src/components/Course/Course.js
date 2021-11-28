// Import Section
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col, Card, Button } from 'react-bootstrap';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Course = (props) => {
  // Destructuring the prop.course
  const { course, img, instructor, oldPrice, price } = props.course;

  return (
    <Col xs lg="4">
      <Card className="h-100">
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>
            <h2 className="fw-bold">{course}</h2>
          </Card.Title>
          <Card.Text as="div">
            <p>
              Instructor:{' '}
              <span className="fw-bold text-danger">{instructor}</span>
            </p>
            <p>
              <span className="text-decoration-line-through">{oldPrice}</span>
              <span> {price}$</span>
            </p>
          </Card.Text>
        </Card.Body>
        <Card.Footer className="border-0 p-0 bg-white">
          <Button variant="btn btn-outline-danger w-100">
            {' '}
            <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon> Enroll
            Now!
          </Button>
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default Course;
