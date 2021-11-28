// Import Section
import React, { useState, useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import Course from '../Course/Course';

const Courses = () => {
  const [courses, setCourses] = useState([]);
  // Load API
  useEffect(() => {
    fetch('./fakedata.JSON')
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);
  return (
    <div className="my-5">
      <h2 className="text-center fw-bold">All Popular Courses</h2>
      <Container className="d-flex justify-content-center my-5">
        <Row className="g-5">
          {/* Mapping */}
          {courses.map((course) => (
            <Course course={course} key={course.key}></Course>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Courses;
