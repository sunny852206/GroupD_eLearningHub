import React, { Component } from 'react';
import '../App.css';

class Index extends Component {
  render() {
    return (
      <div className='container'>
        <div className='wrap'>
          <div className='row'>
            <div className='col-8 offset-md-2 text-center'>
              <div className='title'>
                <h1>eLearning Hub</h1>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-5 offset-md-1'>
              <div className='navBar'>
                <div className='row'>
                  <div className='col-4'>
                    <h2>Home</h2>
                  </div>
                  <div className='col-4'>
                    <h2>Profile</h2>
                  </div>
                  <div className='col-4'>
                    <h2>About</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='row'>
            <div className='col-4 offset-md-1'>
              <h2>Subjects</h2>
            </div>
          </div>
          <div className='subjectWrap'>
            <div className='subjectPanel'>
              <div className='row'>
                <div className='col-md col1 text-center'>
                  <div className='subject1'>Music</div>
                </div>
                <div className='col-md col2 text-center'>
                  <div className='subject2'>Math</div>
                </div>
                <div className='col-md col3 text-center'>
                  <div className='subject3'>Science</div>
                </div>
                <div className='col-md col4 text-center'>
                  <div className='subject4'>Writing</div>
                </div>
                <div className='col-md col5 text-center'>
                  <div className='subject5'>Art</div>
                </div>
              </div>
            </div>
          </div>
          <div className='mainPanel'>
            <div className='row'></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Index;
