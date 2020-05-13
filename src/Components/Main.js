import React, { Component } from 'react';
import Index from './Index';
import UserProfile from './UserProfile';

class Main extends Component {
  render() {
    return (
      <div>
        <Index />
        <UserProfile />
      </div>
    );
  }
}

export default Main;
