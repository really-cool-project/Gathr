import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import Login from './Login.js';

import { connect } from "react-redux";
import { login } from "../redux/actions/index.js"

class LoginContainer extends Component {
    constructor() {
        super();
        this.state= {
            inputs: {
                username: "",
                password: ""
            }
        }
    }
    handleChange(e) {
        e.persist();
        this.setState((prevState) => {
            return {
                inputs: {
                    ...prevState.inputs,
                    [e.target.name]: e.target.value
                }
            }
        })
    }
    handleSubmit(e) {
        e.preventDefault();
        this.props.login(this.state.inputs);
    }
    render() {
        return (
            this.props.isAuthenticated ?
            <Redirect to="/profile" /> :
            <Login 
                handleChange={this.handleChange.bind(this)}
                handleSubmit={this.handleSubmit.bind(this)}
                errMsg={this.props.authError.login}
                {...this.state.inputs}/>
        );
    }
}

const mapStateToProps = (state) => {
    return state;
}

export default connect(mapStateToProps, { login })(LoginContainer);