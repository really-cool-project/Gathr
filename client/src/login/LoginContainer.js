import React, { Component } from 'react';
import Login from './Login.js';

import { connect } from 'react-redux';
import { login } from '../redux/actions/index.js';
import { Redirect } from 'react-router-dom'

class LoginContainer extends Component {
    constructor() {
        super();
        this.state = {
            inputs: {
                username: "",
                password: ""
            }
        }
    }
    handleChange = (e) => {
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
    clearInputs = () => {
        this.setState({
            inputs: {
                username: "",
                password: ""
            }
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.login(this.state.inputs);
        this.clearInputs();
    }
    render() {
        return (
            this.props.isAuthenticated ?
            <Redirect to="/profile" /> :
            <Login 
                handleChange = {this.handleChange}
                handleSubmit = {this.handleSubmit}
                authError = {this.props.authError.login}/>
        );
    }
}

const mapStateToProps = (state) => {
    return state;
}

export default connect (mapStateToProps, { login })(LoginContainer);