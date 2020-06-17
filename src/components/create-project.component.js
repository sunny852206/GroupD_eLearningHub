import React, { Component } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default class CreateProject extends Component {
  constructor(props) {
    super(props);

    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeSubject = this.onChangeSubject.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      name: "",
      subject: "",
      description: "",
      date: new Date(),
      projects: [],
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/projects/")
      .then((response) => {
        if (response.data.length > 0) {
          this.setState({
            projects: response.data.map((project) => project.subject),
            subject: response.data[0].subject,
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  onChangeName(e) {
    this.setState({
      name: e.target.value,
    });
  }

  onChangeSubject(e) {
    this.setState({
      subject: e.target.value,
    });
  }

  onChangeDescription(e) {
    this.setState({
      description: e.target.value,
    });
  }

  onChangeDate(date) {
    this.setState({
      date: date,
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const project = {
      name: this.state.name,
      subject: this.state.subject,
      description: this.state.description,
      date: this.state.date,
    };

    console.log(project);

    axios
      .post("http://localhost:5000/projects/add", project)
      .then((res) => console.log(res.data));

    window.location = "/profile";
  }

  render() {
    return (
      <div className='projectPanel'>
        <h3>Create New Project</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Project: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.name}
              onChange={this.onChangeName}
            />
          </div>
          <div className="form-group">
            <label>Subject </label>
            <select
              ref="userInput"
              required
              className="form-control"
              onChange={this.onChangeSubject}
            >
              <option value=""></option>
              <option value="Art">Art</option>
              <option value="Math">Math</option>
              <option value="Music">Music</option>
              <option value="Science">Science</option>
              <option value="Writing">Writing</option>
            </select>
          </div>
          <div className="form-group">
            <label>Description: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.description}
              onChange={this.onChangeDescription}
            />
          </div>
          <form action='/upload' method="post" enctype="multipart/form-data">
            <input type='file' name='image' id='input-files' />
          </form>
          <div className="form-group">
            <label>Date: </label>
            <div>
              <DatePicker
                selected={this.state.date}
                onChange={this.onChangeDate}
              />
            </div>
          </div>

          <div className="form-group">
            <input
              type="submit"
              value="Create Project"
              className="btn btn-primary"
            />
          </div>

        </form>
      </div>
    );
  }
}
