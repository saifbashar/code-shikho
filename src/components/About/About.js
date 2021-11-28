// Import Section
import React from 'react';
import { Image } from 'react-bootstrap';
import img from '../../images/my-bg2.png';
const About = () => {
  return (
    <div className="my-5">
      <div className="text-center">
        <Image src={img} className="w-25" rounded></Image>
      </div>
      <div className="w-50 mx-auto mt-3">
        <h2 className="text-center">
          Code Shikho by{' '}
          <span className="text-danger fw-bold"> Saif Bashar</span>
        </h2>
        <p>
          Hi! I am Saif Bashar! I am a passionate and pragmatic software
          engineer with 20 years of professional experience and I've taught over
          10 million people how to code or how to become professional software
          engineers through my YouTube channel and online courses. I have a
          Bachelor of Science in Software Engineering and a Master of Science in
          Networks Systems.
        </p>
        <p>
          My mission is to make coding and software engineering accessible to
          everyone through courses that are simple to digest, and practical to
          implement.
        </p>
      </div>
    </div>
  );
};

export default About;
