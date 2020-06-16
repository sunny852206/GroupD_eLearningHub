import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Route } from 'react-router-dom';
import './Home.css';
import axios from "axios";

import ProjectsList from '../projects-list.component';

export default class Home extends Component {
  render() {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-4 '>
            <h3>Subjects</h3>
          </div>
        </div>
        <div className='subjectWrap'>
          <div className='subjectPanel'>
            <div className='row'>
              <div className='col-md col1 text-center'>
                <div className='subject1'>
                  <Link to='/art'>
                    Art
                  </Link>
                </div>
              </div>
              <div className='col-md col2 text-center'>
                <div className='subject2'>
                  <Link to='/math'>
                    Math
                  </Link>
                </div>
              </div>
              <div className='col-md col3 text-center'>
                <div className='subject3'>
                  <Link to='/music'>
                    Music
                  </Link>
                </div>
              </div>
              <div className='col-md col4 text-center'>
                <div className='subject4'>
                  <Link to='/science'>
                    Science
                  </Link>
                </div>
              </div>
              <div className='col-md col5 text-center'>
                <div className='subject5'>
                  <Link to='/writing'>
                    Writing
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
