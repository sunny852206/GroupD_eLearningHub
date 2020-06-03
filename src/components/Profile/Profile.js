import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Route } from 'react-router-dom';
import './Profile.css';

import ProjectsList from '../projects-list.component';


class Profile extends Component {
  render() {
    return (
      <div className='container'>
        <div className='userProfile'>
          <div className='row'>
            <div className='col-4 offset-md-2'>
              <div className='profilePicture'>
                <img
                  src='https://c-sf.smule.com/sf/s48/arr/73/57/77130078-659a-4900-a50b-18d4abe880ce.jpg'
                  alt=''
                />
              </div>
            </div>
            <div className='col-4 offset-md-1'>
              <div className='userInfo'>
                <div className='row'>
                  <div className='col-12 text-center'>
                    <h1>User Name</h1>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

        <div className='container'>
          <div className='row'>
            <div className='col-4 '>
              <br></br>
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
          <Route path='/profile' exact component={ProjectsList} />
        </div>

      </div>
    );
  }
}

export default Profile;
