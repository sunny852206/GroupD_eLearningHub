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
            <div className='col-3 '>
              <div className='profilePicture'><br></br><br></br>
                <img
                  src='https://images.squarespace-cdn.com/content/v1/56b4e4ce01dbae0166a67779/1573349797748-FRQE8LK97GHOQZOMOIDR/ke17ZwdGBToddI8pDm48kNiEM88mrzHRsd1mQ3bxVct7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0s0XaMNjCqAzRibjnE_wBlkZ2axuMlPfqFLWy-3Tjp4nKScCHg1XF4aLsQJlo6oYbA/DA02292C-CC5B-40C3-834C-89CC7FA8A905.jpg'
                  alt=''
                />
              </div>
              <br></br>
              <h5>&nbsp;Sophia Lo </h5>
              <img class="icon_teacher"
                src='https://png2.cleanpng.com/sh/c06ef9fbdd06372a884ae52355f192c7/L0KzQYm3VMI3N6RtfZH0aYP2gLBuTfNwdaF6jNd7LXnmf7B6TgRmaZRtfeQ2cILydrb6kB9zNZZpjdVqdHnyfn7zhfN1faNqRadqZUG7Roe9gvE4PJU1RqcBM0m8R4q6UcUzPGg3UaY9Nke5Q4i1kP5o/kisspng-computer-icons-teacher-professor-education-lecture-5ae18666ba74d0.5639979315247294467637.png'
                alt=''
              /> Head Teacher<br></br>
              <img class="icon_location"
                src='https://images.vexels.com/media/users/3/154655/isolated/preview/71dccbb077597dea55dfc5b7a7af52c4-location-pin-contact-icon-by-vexels.png'
                alt=''
              /> International Friends School<br></br><br></br><br></br>
              <div class="quote">"Education is the key to success in life, and teachers make a lasting impact in the lives of their students."</div>
            </div>

            <div className='col-9 '>
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
              <Route path='/profile' exact component={ProjectsList} />
            </div>


          </div>
        </div>



      </div >
    );
  }
}

export default Profile;
