import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './navbar.component.css';

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <div className='row'>
          <div className='col-12 text-center'>
            <div className='title'>
              <h1>eLearning Hub</h1>
            </div>
          </div>
        </div>

        <div className='container'>

          <div className='row'>
            <div className='col-7 '>

              <div className='row'>
                <div className='nav_top'>
                  <Link to='/profile'>
                    <h2>Profile</h2>
                  </Link>
                </div>
                <div className='nav_top'>
                  <Link to='/about'>
                    <h2>About</h2>
                  </Link>
                </div>
              </div>
            </div>

            <div className='col-5 text-right'>
              <Link to='/project'>
                <h2>*Create Project*</h2>
              </Link>
              <Link to='/user'>
                <h2>*Create Account*</h2>
              </Link>
            </div>
          </div>



        </div>
      </div >
    );
  }
}
