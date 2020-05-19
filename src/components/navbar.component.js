import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
  render() {
    return (
      <div id='nav'>
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
                  <Link to='/'>
                    <h2>Home</h2>
                  </Link>
                </div>
                <div className='col-4'>
                  <Link to='/create'>
                    <h2>Profile</h2>
                  </Link>
                </div>
                <div className='col-4'>
                  <Link to='/user'>
                    <h2>About</h2>
                  </Link>
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
                  <Link href='/Music'>
                    <h2>Music</h2>
                  </Link>
                </div>
              </div>
              <div className='col-md col2 text-center'>
                <div className='subject2'>
                  <Link href='/Math'>
                    <h2>Math</h2>
                  </Link>
                </div>
              </div>
              <div className='col-md col3 text-center'>
                <div className='subject3'>
                  <Link href='/Science'>
                    <h2>Science</h2>
                  </Link>
                </div>
              </div>
              <div className='col-md col4 text-center'>
                <div className='subject4'>
                  <Link href='/Writing'>
                    <h2>Writing</h2>
                  </Link>
                </div>
              </div>
              <div className='col-md col5 text-center'>
                <div className='subject5'>
                  <Link href='/Art'>
                    <h2>Art</h2>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='mainPanel'></div>
      </div>
    );
  }
}
