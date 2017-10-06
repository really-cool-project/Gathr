import React, { Component } from 'react';
import Create from './Create.js';
import { connect } from 'react-redux';
import { editSupper }  from '../redux/actions/index.js';

class CreateContainer extends Component {
    constructor() {
        super();
        this.state = {
            inputs: {
                title: "",
                date: "",
                time: "",
                price: "",
                description: "",
                photo: "",
                spots: "",
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
                title: "",
                date: "",
                time: "",
                price: "",
                description: "",
                photo: "",
                spots: "",
            }
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addSupper(this.state.inputs);
        this.clearInputs();
    }
    render() {
        return (
            <div>
                <Create
                handleSubmit = {this.handleSubmit}
                handleChange = {this.handleChange}
                 />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return state
}

export default connect (mapStateToProps, {editSupper}) (EditContainer);