import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Profile.css';

class Profile extends Component {
  render() {
    return (
      <div className='container'>
        <div className='userProfile'>
          <div className='row'>
            <div className='col-4 offset-md-1'>
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
                    <h1>Name</h1>
                  </div>
                </div>
                <div className='row'>
                  <div className='col-6'>
                    <Link to='/'>
                      <h2>Home</h2>
                    </Link>
                  </div>
                  <div className='col-6'>
                    <Link to='/Information'>
                      <h2>Information</h2>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='projectPanel'>
          <div className='row'>
            <div className='col-4 text-center'>
              <div className='UserProject1'>Project</div>
            </div>
            <div className='col-4 text-center'>
              <div className='UserProject2'>Project</div>
            </div>
            <div className='col-4 text-center'>
              <div className='UserProject3'>Project</div>
            </div>
          </div>
          <div className='row'>
            <div className='col-4 text-center'>
              <div className='UserProject2'>Project</div>
            </div>
            <div className='col-4 text-center'>
              <div className='UserProject1'>Project</div>
            </div>
            <div className='col-4 text-center'>
              <div className='UserProject3'>Project</div>
            </div>
          </div>
          <div className='row'>
            <div className='col-4 text-center'>
              <div className='UserProject3'>Project</div>
            </div>
            <div className='col-4 text-center'>
              <div className='UserProject2'>Project</div>
            </div>
            <div className='col-4 text-center'>
              <div className='UserProject1'>Project</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
