import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Route } from 'react-router-dom';
import './Home.css';

import ProjectsList from '../projects-list.component';

export default class Home extends Component {
  render() {
    return (
      <div className='container'>
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
                  <Link to='/Music'>
                    <h2>Music</h2>
                  </Link>
                </div>
              </div>
              <div className='col-md col2 text-center'>
                <div className='subject2'>
                  <Link to='/Math'>
                    <h2>Math</h2>
                  </Link>
                </div>
              </div>
              <div className='col-md col3 text-center'>
                <div className='subject3'>
                  <Link to='/Science'>
                    <h2>Science</h2>
                  </Link>
                </div>
              </div>
              <div className='col-md col4 text-center'>
                <div className='subject4'>
                  <Link to='/Writing'>
                    <h2>Writing</h2>
                  </Link>
                </div>
              </div>
              <div className='col-md col5 text-center'>
                <div className='subject5'>
                  <Link to='/Art'>
                    <h2>Art</h2>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Route path='/' exact component={ProjectsList} />
      </div>
    );
  }
}
