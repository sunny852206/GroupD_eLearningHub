import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Home.css';

const User = (props) => (
  <tr>
    <td>{props.users.accountType}</td>
    <td>{props.users.name}</td>
    <td>{props.users.username}</td>
    <td>{props.users.email}</td>
    <td>
      <Link to={'/editUser/' + props.users._id}>edit</Link> |{' '}
      <a
        href='/information'
        onClick={() => {
          props.deleteUser(props.users._id);
        }}
      >
        delete
            </a>
    </td>
  </tr>

);

export default class UserInfo extends Component {
  constructor(props) {
    super(props);

    this.deleteUser = this.deleteUser.bind(this);

    this.state = { users: [] };
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/users/')
      .then((response) => {
        this.setState({ users: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  deleteUser(id) {
    axios.delete('http://localhost:5000/users/' + id).then((response) => {
      console.log(response.data);
    });

    this.setState({
      users: this.state.users.filter((el) => el._id !== id),
    });
  }

  userInfo() {
    return this.state.users.map((currentuser) => {
      return (
        <User
          users={currentuser}
          deleteUser={this.deleteUser}
          key={currentuser._id}
        />
      );
    });
  }

  render() {
    return (
      <div>
        <div>
          <h3>User Information</h3>
          <table className='table'>
            <thead className='thead-light'>
              <tr>
                <th>Account Type</th>
                <th>Name</th>
                <th>User name</th>
                <th>Email</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>{this.userInfo()}</tbody>
          </table>
        </div>
      </div>
    );
  }
}
