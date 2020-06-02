import React, { Component } from 'react';
import { Nav } from 'react-bootstrap';
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

import UserInfo from '../user-info.component';

class Information extends Component {
  render() {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-12 text-center'>
            <div>
              <h2>
                <Nav.Link href='/'>
                  <h2>- Home -</h2>
                </Nav.Link>
              </h2>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-12 text-center'>
            <div>
              <h2>Information Page </h2>
              <h2>*work in progress*</h2>
            </div>
          </div>
        </div>
        <Route path='/' exact component={UserInfo} />
      </div>
    );
  }
}

export default Information;
