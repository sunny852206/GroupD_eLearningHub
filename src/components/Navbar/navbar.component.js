import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./navbar.component.css";

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <div className="NavBar">
          <div className="Logo">
            <Link to="/profile">
              <span>eLearning Hub</span>
            </Link>
          </div>
          <div className="MiddleNav">
            <Link to="/about">
              <span>About</span>
            </Link>
            <Link to="/profile">
              <span>Blog</span>
            </Link>
            <Link to="/profile">
              <span>Contact Us</span>
            </Link>
          </div>

          <div className="RightNav">
            <Link to="/UserProfile">
              <span>Profile </span>
            </Link>
            <Link to="/">
              <span>Login</span>
            </Link>
          </div>
        </div>
        <hr
          style={{
            color: "#edebeb",
            backgroundColor: "#edebeb",
            width: 1390,
            height: 0.5,
          }}
        />
      </div>
    );
  }
}
