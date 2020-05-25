import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './navbar.component.css';

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <div className='row'>
          <div className='col-8 offset-md-2 text-center'>
            <div className='title'>
              <h1>eLearning Hub</h1>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-12 '>
            <div className='nav'>
              <div className='col-2'>
                <Link to='/'>
                  <h2>Home</h2>
                </Link>
              </div>
              <div className='col-2'>
                <Link to='/profile'>
                  <h2>Profile</h2>
                </Link>
              </div>
              <div className='col-2'>
                <Link to='/about'>
                  <h2>About</h2>
                </Link>
              </div>
              <div className='col-4 offset-2'>
                <Link to='/project'>
                  <h2>*Create A Project*</h2>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
