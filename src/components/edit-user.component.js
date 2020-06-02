import React, { Component } from 'react';
import axios from 'axios';

export default class EditUser extends Component {
  constructor(props) {
    super(props);

    this.onChangeUserName = this.onChangeUserName.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: '',
      email: '',
      users:[],
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/users/' + this.props.match.params.id)
      .then((response) => {
        this.setState({
          username: response.data.username,
          email: response.data.email,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  onChangeUserName(e) {
    this.setState({
      username: e.target.value,
    });
  }

  onChangeEmail(e) {
      this.setState({
          email: e.target.value,
      })
  }

  onSubmit(e) {
    e.preventDefault();

    const users = {
      username: this.state.username,
      email: this.state.email,
    };

    console.log(users);

    axios
      .post('http://localhost:5000/users/update/'+ this.props.match.params.id, users)
      .then((res) => console.log(res.data));

    window.location = '/information';
  }

  render() {
    return (
      <div>
        <h3>Edit User</h3>
        <form onSubmit={this.onSubmit}>
          <div className='form-group'>
            <label>Username: </label>
            <input
              type='text'
              required
              className='form-control'
              value={this.state.username}
              onChange={this.onChangeUserName}
            />
          </div>

          <div className='form-group'>
            <label>Email: </label>
            <input
              type='text'
              required
              className='form-control'
              value={this.state.email}
              onChange={this.onChangeEmail}
            />
          </div>

          <div className='form-group'>
            <input
              type='submit'
              value='Edit Username'
              className='btn btn-primary'
            />
          </div>
        </form>
      </div>
    );
  }
}
