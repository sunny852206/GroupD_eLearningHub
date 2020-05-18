import React, { Component } from 'react';
import { Nav, Container } from 'react-bootstrap';
import './Home.css';

export default class Home extends Component {
  render() {
    return (
      <Container>
        <div className='row'>
          <div className='col-8 offset-md-2 text-center'>
            <div className='title'>
              <h1>eLearning Hub</h1>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-5 '>
            <div className='navBar'>
              <div className='row'>
                <div className='col-4'>
                  <Nav.Link href='/'>
                    <h2>Home</h2>
                  </Nav.Link>
                </div>
                <div className='col-4'>
                  <Nav.Link href='/Profile'>
                    <h2>Profile</h2>
                  </Nav.Link>
                </div>
                <div className='col-4'>
                  <Nav.Link href='/About'>
                    <h2>About</h2>
                  </Nav.Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='row'>
          <div className='col-4 '>
            <h2>Subjects</h2>
          </div>
        </div>
        <div className='subjectWrap'>
          <div className='subjectPanel'>
            <div className='row'>
              <div className='col-md col1 text-center'>
                <div className='subject1'>
                  <Nav.Link href='/Music'>
                    <h2>Music</h2>
                  </Nav.Link>
                </div>
              </div>
              <div className='col-md col2 text-center'>
                <div className='subject2'>
                  <Nav.Link href='/Math'>
                    <h2>Math</h2>
                  </Nav.Link>
                </div>
              </div>
              <div className='col-md col3 text-center'>
                <div className='subject3'>
                  <Nav.Link href='/Science'>
                    <h2>Science</h2>
                  </Nav.Link>
                </div>
              </div>
              <div className='col-md col4 text-center'>
                <div className='subject4'>
                  <Nav.Link href='/Writing'>
                    <h2>Writing</h2>
                  </Nav.Link>
                </div>
              </div>
              <div className='col-md col5 text-center'>
                <div className='subject5'>
                  <Nav.Link href='/Art'>
                    <h2>Art</h2>
                  </Nav.Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='mainPanel'></div>
      </Container>
    );
  }
}
