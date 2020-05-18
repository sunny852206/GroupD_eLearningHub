import React, { Component } from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import history from './history';
import Home from './Home/Home';
import Profile from './Profile/Profile';
import Information from './Profile/Information/Information';
import About from './About/About';
import Music from './Subject/Music/Music';
import Math from './Subject/Math/Math';
import Science from './Subject/Science/Science';
import Writing from './Subject/Writing/Writing';
import Art from './Subject/Art/Art';

export default class Routes extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/Profile' component={Profile} />
          <Route path='/Information' component={Information} />
          <Route path='/About' component={About} />
          <Route path='/Music' component={Music} />
          <Route path='/Math' component={Math} />
          <Route path='/Science' component={Science} />
          <Route path='/Writing' component={Writing} />
          <Route path='/Art' component={Art} />
        </Switch>
      </Router>
    );
  }
}
