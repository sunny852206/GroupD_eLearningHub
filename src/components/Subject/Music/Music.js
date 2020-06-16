import React, { Component } from 'react';
import axios from 'axios';
const Project = (props) => (
  <tr>

  </tr>
);



export default class Music extends Component {
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
      <div className='subject'>
        <h3>Music</h3>
        <div>

          <table className='table'>
            {this.state.projects.filter(function (project) {
              return project.subject.includes('Music')

            }).map(function (Project) {
              return <thead className='thead-light' key={Project.name}>
                <td><b>Name</b><br></br><br></br>{Project.name}</td>
                <td><b>Subject</b><br></br><br></br>{Project.subject}</td>
                <td><b>Description</b> <br></br><br></br>{Project.description}</td>
                <td> <b>Date</b> <br></br><br></br>{Project.date.substring(0, 10)}</td>
              </thead>
            })}


          </table>


        </div>

      </div>
    );
  }
}


