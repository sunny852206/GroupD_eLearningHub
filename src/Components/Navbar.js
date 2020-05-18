import React from 'react';

import './Navbar.css';
import { Nav, Container, Row, Col, Form, Button } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';

const Navigation = (props) => {
  console.log(props);
  return (
    <Container>
      <Row className='justify-content-md-center'>
        <div className='title'>
          <h1>eLearning Hub</h1>
        </div>
      </Row>
      <Row className='col-5 offset-md-1'>
        <div className='navBar'>
          <Row>
            <Col md={4}>
              <Nav.Link href='/'>
                <h2>Home</h2>
              </Nav.Link>
            </Col>
            <Col md={4}>
              <Nav.Link href='/Profile'>
                <h2>Profile</h2>
              </Nav.Link>
            </Col>
            <Col md={4}>
              <Nav.Link href='/About'>
                <h2>About</h2>
              </Nav.Link>
            </Col>
          </Row>
        </div>
      </Row>
    </Container>
  );
};

export default withRouter(Navigation);
