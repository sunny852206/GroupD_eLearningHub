import React, { Component } from 'react';
import '../App.css';

class UserProfile extends Component {
  render() {
    return (
      <div class='container'>
        <div class='wrap'>
          <div class='first'>
            <div class='row'>
              <div class='col-4 offset-md-1'>
                <a class='profilePicture'>
                  <img
                    src='https://c-sf.smule.com/sf/s48/arr/73/57/77130078-659a-4900-a50b-18d4abe880ce.jpg'
                    alt=''
                  />
                </a>
              </div>
              <div class='col-4 offset-md-1'>
                <div class='userInfo'>
                  <div class='row'>
                    <div class='col-12 text-center'>
                      <h1>Name</h1>
                    </div>
                  </div>
                  <div class='row'>
                    <div class='col-6'>
                      <h3>Home</h3>
                    </div>
                    <div class='col-6'>
                      <h3>Information</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class='second'>
            <div class='row'>
              <div class='col-4 text-center'>
                <div class='UserProject1'>Project</div>
              </div>
              <div class='col-4 text-center'>
                <div class='UserProject2'>Project</div>
              </div>
              <div class='col-4 text-center'>
                <div class='UserProject3'>Project</div>
              </div>
            </div>
            <div class='row'>
              <div class='col-4 text-center'>
                <div class='UserProject2'>Project</div>
              </div>
              <div class='col-4 text-center'>
                <div class='UserProject1'>Project</div>
              </div>
              <div class='col-4 text-center'>
                <div class='UserProject3'>Project</div>
              </div>
            </div>
            <div class='row'>
              <div class='col-4 text-center'>
                <div class='UserProject3'>Project</div>
              </div>
              <div class='col-4 text-center'>
                <div class='UserProject2'>Project</div>
              </div>
              <div class='col-4 text-center'>
                <div class='UserProject1'>Project</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UserProfile;
