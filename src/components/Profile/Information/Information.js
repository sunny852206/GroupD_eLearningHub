import React, { Component } from 'react';
import { Nav } from 'react-bootstrap';

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
      </div>
    );
  }
}

export default Information;
