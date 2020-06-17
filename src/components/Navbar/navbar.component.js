import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './navbar.component.css';

export default class Navbar extends Component {
  render() {
    return (

      <div className='container'>
        <div className='col-md col12 '>
          <div className='row'>
            <div className='col-md col6 text-left'>
              <div className='title'>
                <Link to='/profile'>
                  <h1>eLearning Hub</h1>
                </Link>
              </div>
            </div>

            <div className='col-md col6 text-right'>

              <div className='navBar'>
                <Link to='/profile'>
                  <h2>Profile </h2>
                </Link>
                <Link to='/about'>
                  <h2>&nbsp;About </h2>
                </Link>
                <Link to='/'>
                  <img class="icon_teacher"
                    src='https://banner2.cleanpng.com/20190120/azp/kisspng-computer-icons-scalable-vector-graphics-user-profi-account-user-profile-avatar-svg-png-icon-free-down-5c4483f9061896.011432951547994105025.jpg'
                    alt=''
                  /> Login<br></br>


                </Link>

              </div>


            </div>
          </div>
        </div>
      </div >
    );
  }
}
