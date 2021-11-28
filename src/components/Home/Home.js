// Import Section
import React, { useEffect, useState } from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import library from '../../images/library.svg';
import content from '../../images/conent.svg';
import community from '../../images/community.svg';
import Course from '../Course/Course';
import { Link } from 'react-router-dom';
import './Home.css';

// import { library } from '@fortawesome/fontawesome-svg-core';
// import { fab } from '@fortawesome/free-brands-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Home = () => {
  // use state
  const [courses, setCourses] = useState([]);
  // Load Api
  useEffect(() => {
    fetch('./fakedata.JSON')
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  return (
    <div className="mt-5">
      <h1 className="text-center fw-bold">
        Why choose <span className="green">Code Shikho</span>?
      </h1>
      <p className="text-center">
        Build your tech knowledge across any subject. We give you everything you
        need.
      </p>
      <Container className="text-center">
        <Row className="d-flex justify-content-around">
          <Col>
            <Image src={library} className="w-75"></Image>
            <h3>Explore a Huge Library</h3>
            <p>
              Get access to over 600 books, courses, and videos. Learn twice as
              fast with the ultimate text-based learning experience.
            </p>
          </Col>
          <Col>
            <Image src={content} className="w-75"></Image>
            <h3>Get Fresh Content Weekly</h3>
            <p>
              We’re constantly adding new content on web development, design,
              and technology.
            </p>
          </Col>
          <Col>
            <Image src={community} className="w-75"></Image>
            <h3>Join a Vibrant Community</h3>
            <p>
              Join 100,000 developers and designers. Discuss new tech, get fast
              feedback, and a helping hand when you’re stuck.
            </p>
          </Col>
        </Row>
      </Container>
      <h1 className="text-center fw-bold">Popular Courses</h1>
      <Container className="d-flex justify-content-center my-5">
        <Row className="g-5">
          {courses.slice(0, 4).map((course) => (
            <Course course={course} key={course.key}></Course>
          ))}
        </Row>
      </Container>
      <div className="text-center">
        <Link to="/course" className="text-decoration-none mx-auto text-center">
          See All Courses <FontAwesomeIcon icon={faArrowRight} />
        </Link>
      </div>
    </div>
  );
};

export default Home;
