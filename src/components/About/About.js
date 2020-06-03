import React, { Component } from 'react';
import './About.css';

class About extends Component {
  render() {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-12 text-center'>
            <div>
                <div className='pic'>
                  <img
                    src='https://img.freepik.com/free-photo/golden-light-bulb-as-ideas-person_23-2148342808.jpg?size=664&ext=jpg' 
                    alt=''
                  />
                  <div class="textPosition">THE MIND THAT OPENS TO A NEW IDEA NEVER RETURNS TO ITS ORIGINAL SIZE.</div>
                </div>
                <div className = 'body'>
                  <h2>About eLearningHub </h2>
                  <p class='paragraph'>The website is created students to pick projects they want to do through this eLearningHub. The original idea is from pinterest and Seesaw. The one we created is from the teachers' end. All projects are categorized by subjects.</p>
                </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
