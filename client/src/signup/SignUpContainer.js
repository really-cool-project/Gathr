import React, { Component } from 'react';
import SignUp from './SignUp.js';
import { connect } from 'react-redux';
import { signup } from '../redux/actions/index.js';
import { Redirect } from 'react-router-dom';

class SignUpContainer extends Component {
    constructor() {
        super();
        this.state = {
            inputs: {
                username: "",
                email: "",
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
                email: "",
                password: ""
            }
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.signup(this.state.inputs);
        this.clearInputs();
    }
    render() {
        return (
            this.props.isAuthenticated ?
            <Redirect to="/dashboard" /> :
            <SignUp 
                handleChange = {this.handleChange}
                handleSubmit = {this.handleSubmit}
                {...this.state.inputs}
                authError = {this.props.authError.signup}/>
        );
    }
}


export default connect (state => state, { signup }) (SignUpContainer);