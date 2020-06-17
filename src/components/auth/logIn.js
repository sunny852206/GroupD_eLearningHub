import React, { Component } from "react";
import { Link } from 'react-router-dom';
import '../Home.css';
import axios from "axios";

export default class logIn extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
            loginErrors: ""
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit(event) {
        const { email, password } = this.state;

        axios
            .post(
                "http://localhost:3001/sessions",
                {
                    user: {
                        email: email,
                        password: password
                    }
                },
                { withCredentials: true }
            )
            .then(response => {
                if (response.data.logged_in) {
                    this.props.handleSuccessfulAuth(response.data);
                }
            })
            .catch(error => {
                console.log("login error", error);
            });
        event.preventDefault();
    }

    render() {
        return (
            <div className='loginPanel'>

                <div className='row'>
                    <div className='col-6 text-center'>
                        <form onSubmit={this.handleSubmit}>
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                value={this.state.email}
                                onChange={this.handleChange}
                                required
                            />&nbsp;

                        <input
                                type="password"
                                name="password"
                                placeholder="Password"
                                value={this.state.password}
                                onChange={this.handleChange}
                                required
                            />&nbsp;

                        <button type="submit">Login</button>
                        </form>
                    </div>
                    <div className='col-6 text-center'>
                        <div className='row'>

                            <Link to='/registration'>
                                <h5>Registration&nbsp;|</h5>
                            </Link>
                            <Link to='/user'>
                                <h5>&nbsp;Create Account</h5>
                            </Link>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}