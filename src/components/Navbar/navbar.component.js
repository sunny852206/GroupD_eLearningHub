import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './navbar.component.css';

export default class Navbar extends Component {
  render() {
    return (

      <div className='container'>
        <div className='col-md col12 '>
          <div className='row'>
            <div className='col-md col6 text-left'>
              <div className='title'>
                <h1>eLearning Hub</h1>
              </div>
            </div>

            <div className='col-md col6 text-right'>

              <div className='navBar'>
                <Link to='/profile'>
                  <h2>Profile </h2>
                </Link>
                <Link to='/about'>
                  <h2>&nbsp;About </h2>
                </Link>
              </div>


            </div>
          </div>
        </div>
      </div >
    );
  }
}
