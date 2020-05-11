import React, { Component } from 'react';
import '../App.css';

class UserProfile extends Component {
  render() {
    return (
      <div className='container'>
        <div className='wrap'>
          <div className='userProfile'>
            <div className='row'>
              <div className='col-4 offset-md-1'>
                <a className='profilePicture'>
                  <img
                    src='https://c-sf.smule.com/sf/s48/arr/73/57/77130078-659a-4900-a50b-18d4abe880ce.jpg'
                    alt=''
                  />
                </a>
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
                      <h3>Home</h3>
                    </div>
                    <div className='col-6'>
                      <h3>Information</h3>
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
      </div>
    );
  }
}

export default UserProfile;
