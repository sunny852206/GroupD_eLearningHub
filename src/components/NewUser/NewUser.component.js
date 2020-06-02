import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './NewUser.component.css';

export default class NewUser extends Component {

  render() {
    return (
        <div class="login-div">
            <div class="row">
                <div className='title'>
                    <h1>eLearning Hub</h1>
                </div>
            </div>
            <div class="row center-align">
                <h5>Sign in</h5>
            </div>
            <div class="row">
                <div class="input-field col s12">
                    {/* <input id="email_input" type="email" class="validate"><label for="email_input">Email</label></input> */}
                </div>
            </div>
            <div class="row">
                <div class="input-field col s12">
                    {/* <input id="password_input" type="password" class="validate"> */}
                    {/* <label for="password_input">Password</label></input> */}
                <div>
                    {/* <a href="#"><b>Forgot password?</b></a></div> */}
                </div>
            </div>
            </div>
            <div class="row"></div>
            <div class="row">
                <div class="col s6">
                    <Link to ='/user'>Create account</Link>
                </div>
                <div class="col s6 right-align">
                    <a class="waves-effect waves-light btn">Login</a>
                </div>

            </div>
        </div>
      
    );
  }
}