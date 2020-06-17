import React, { Component } from 'react';
import axios from 'axios';

export default class CreateUser extends Component {
  constructor(props) {
    super(props);
    this.onChangeAccountType = this.onChangeAccountType.bind(this);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      accountType: '',
      name: 'Enter your name',
      username: 'Enter a username',
      email: 'Enter your email',
    }
  }

  onChangeAccountType(e) {
    this.setState({
      accountType: e.target.value
    })
  }

  onChangeName(e) {
    this.setState({
      name: e.target.value
    })
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    })
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value,
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const users = {
      name: this.state.name,
      accountType: this.state.accountType,
      username: this.state.username,
      email: this.state.email,

    }

    console.log(users);

    axios.post('http://localhost:5000/users/add', users)
      .then(res => console.log(res.data));

    this.setState({
      username: ''
    })

    window.location = '/information';
  }

  render() {
    return (
      <div>
        <h3>Create New User</h3>
        <form onSubmit={this.onSubmit}>

          <div className="form-group">
            <label>Account Type: </label>
            <select
              value={this.state.accountType}
              onChange={this.onChangeAccountType}
            >
              <option value="Student">Student</option>
              <option value="Teacher">Teacher</option>
            </select>
          </div>

          <div className="form-group">
            <label>Name: </label>
            <input type="text"
              required
              className="form-control"
              value={this.state.name}
              onChange={this.onChangeName}
            />
          </div>
          <div className="form-group">
            <label>Username: </label>
            <input type="text"
              required
              className="form-control"
              value={this.state.username}
              onChange={this.onChangeUsername}
            />
          </div>
          <div className="form-group">
            <label>Email: </label>
            <input type="text"
              required
              className="form-control"
              value={this.state.email}
              onChange={this.onChangeEmail}
            />
          </div>
          <div className="form-group">
            <input type="submit"
              value="Create User"
              className="btn btn-primary" />
          </div>
        </form>
      </div>
    )
  }
}