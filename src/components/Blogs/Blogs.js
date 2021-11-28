// Import Section

import { faClock, faUserAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from 'react-bootstrap';
import React from 'react';
import { Container, Image } from 'react-bootstrap';
import './Blogs.css';

const Blogs = () => {
  // Blog Section
  return (
    <div className="my-5">
      <div className="border-header pb-3 my-4  w-50 mx-auto">
        {' '}
        <h2 className="fw-bold text-center">Blogs</h2>
      </div>
      <Container className="mx-auto p-0 w-50">
        {' '}
        <div className="my-4">
          <Image
            fluid
            src="https://dz8fbjd9gwp2s.cloudfront.net/articles/5fbe9be80cf2f7184309a866/cover.jpg?v=1"
          ></Image>
          <h3>Node.js + angular websocket (chat app)</h3>
          <p>
            {' '}
            <FontAwesomeIcon icon={faClock}></FontAwesomeIcon>{' '}
            <span>Thu Nov 26, 2020 </span>{' '}
            <FontAwesomeIcon icon={faUserAlt}></FontAwesomeIcon>
            <span className="fw-bold text-danger"> Saif Bashar</span>
          </p>
          <p>
            Node.js + angular web sockets chat app In this video we will discuss
            about node.js websocket, it is really important to understand
            websocket. we will use socket.io for using websocket in node.js with
            express.js. We will use best coding approaches and practices that
            you have ever seen on youtube for ...
          </p>
          <Button variant="primary">Read More</Button>
        </div>
        <div className="my-4">
          <Image
            fluid
            src="https://dz8fbjd9gwp2s.cloudfront.net/articles/5f3933f30cf266c75e1634ee/cover.jpg"
          ></Image>
          <h3>Creating Instagram like ads algorithm in javascript</h3>
          <p>
            {' '}
            <FontAwesomeIcon icon={faClock}></FontAwesomeIcon>{' '}
            <span>Sun Aug 16, 2020 </span>{' '}
            <FontAwesomeIcon icon={faUserAlt}></FontAwesomeIcon>
            <span className="fw-bold text-danger"> Rezaul Karim Shibly</span>
          </p>
          <p>
            Creating Instagram like ads algorithm in javascript In this video we
            will discuss and check that how can we create our own algorithm like
            Facebook and Instagram to show ads between posts. we will create our
            Instagram like ads algorithm using javascript CHECK THE CODE BELOW:
            ..
          </p>
          <Button variant="primary">Read More</Button>
        </div>
        <div className="my-4">
          <Image
            fluid
            src="https://dz8fbjd9gwp2s.cloudfront.net/articles/5f0740ae0cf2dfe1d8c0c81e/cover.jpg?v=1"
          ></Image>
          <h3>Upload video to youtube from Angular 9</h3>
          <p>
            {' '}
            <FontAwesomeIcon icon={faClock}></FontAwesomeIcon>{' '}
            <span>Thu Nov 26, 2020 </span>{' '}
            <FontAwesomeIcon icon={faUserAlt}></FontAwesomeIcon>
            <span className="fw-bold text-danger"> Jhankar Mahbub</span>
          </p>
          <p>
            Upload to youtube from angular 9
            FullPlaylist:https://www.youtube.com/playlist?list=PL6GcqPPzylelP_iBCttqLmua-1WGtrDCI
            SOURCE
            CODE:https://bitbucket.org/shagun123/angular-upload-to-youtube/src/master/
            In this video, we will see how to upload video from angular 9 to
            youtube in Hindi. in youtube histo...
          </p>
          <Button variant="primary">Read More</Button>
        </div>
      </Container>
    </div>
  );
};

export default Blogs;
