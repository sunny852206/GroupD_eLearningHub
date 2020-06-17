import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Navbar from './components/Navbar/navbar.component';
import Profile from './components/Profile/Profile';
import About from './components/About/About';
import CreateProject from './components/create-project.component';
import EditProject from './components/edit-project.component';
import CreateUser from './components/create-user.component';
import EditUser from './components/edit-user.component';
import UserInfo from './components/user-info.component';
import Music from './components/Subject/Music/Music';
import Math from './components/Subject/Math/Math';
import Science from './components/Subject/Science/Science';
import Writing from './components/Subject/Writing/Writing';
import Art from './components/Subject/Art/Art';
import logIn from "./components/auth/logIn";
import registration from "./components/auth/registration";

function App() {
  return (
    <div className='wrap'>
      <Router>
        <div className='container'>
          <Navbar />
          <Route path='/' exact component={logIn} />
          <Route path='/profile' component={Profile} />
          <Route path='/about' component={About} />
          <Route path='/project' component={CreateProject} />
          <Route path='/edit/:id' component={EditProject} />
          <Route path='/user' component={CreateUser} />
          <Route path='/editUser/:id' component={EditUser} />
          <Route path='/information' component={UserInfo} />
          <Route path='/music' component={Music} />
          <Route path='/math' component={Math} />
          <Route path='/science' component={Science} />
          <Route path='/writing' component={Writing} />
          <Route path='/art' component={Art} />
          <Route path='/registration' component={registration} />
        </div>
      </Router>
    </div>
  );
}

export default App;
