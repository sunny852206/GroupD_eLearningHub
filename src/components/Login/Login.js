import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import logIn from '../Login/Login.js';

class Login extends Component {
  render() {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-12 text-center'>
            <div>
              <h2>Login Page </h2>
              <Route path='/' exact component={logIn} />

            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
