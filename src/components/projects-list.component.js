import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Home.css';

const Project = (props) => (
  <tr>
    <td>{props.project.name}</td>
    <td>{props.project.subject}</td>
    <td>{props.project.description}</td>
    <td>{props.project.date.substring(0, 10)}</td>
    <td>
      <Link to={'/edit/' + props.project._id}><img class="icon_location" src='https://cdn1.iconfinder.com/data/icons/basic-ui-elements-2-5-filled-outline-44-expand/512/Basic_UI_Elements_2.5_-_Filled_Outline_-_44_-_Expand-03-512.png' alt='' /> </Link>
      <a href='/profile' onClick={() => { props.deleteProject(props.project._id); }}><img class="icon_location" src='https://cdn2.iconfinder.com/data/icons/e-business-helper/240/627102-delete3-512.png' alt='' /></a>
    </td>
  </tr>
);

export default class ProjectsList extends Component {
  constructor(props) {
    super(props);

    this.deleteProject = this.deleteProject.bind(this);

    this.state = { projects: [] };
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/projects/')
      .then((response) => {
        this.setState({ projects: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  deleteProject(id) {
    axios.delete('http://localhost:5000/projects/' + id).then((response) => {
      console.log(response.data);
    });

    this.setState({
      projects: this.state.projects.filter((el) => el._id !== id),
    });
  }

  projectList() {
    return this.state.projects.map((currentproject) => {
      return (
        <Project
          project={currentproject}
          deleteProject={this.deleteProject}
          key={currentproject._id}
        />
      );
    });
  }



  render() {

    return (
      <div>
        <div className='projectPanel'>


          <div className='row'>

            <div className='col-md col6 text-left'><h3>Projects</h3></div>
            <div className='col-md col-3 col-md offset-7 text-center'> <div className="form-group">
              <Link to='/project'><input
                type="submit"
                value="Create Project"
                className="btn btn-primary"
              /></Link>
            </div></div>
          </div>

          <table className='table'>
            <thead className='thead-light'>
              <tr>
                <th>Name</th>
                <th>Subject</th>
                <th>Description</th>
                <th>Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>{this.projectList()}</tbody>
          </table>
        </div>
      </div>
    );
  }
}
