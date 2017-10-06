import React, { Component } from 'react';
import Supper from "./Supper.js";
import { connect } from 'react-redux';
import { loadSupperById } from '../redux/actions/index.js';


class SupperContainer extends Component {
    componentDidMount() {
        this.props.loadSupperById(this.props.match.params.id);
    }
    render() {
        console.log(this.props.match.params.id)
        return (
            <Supper />
        );
    }
}

export default connect (null, {loadSupperById}) (SupperContainer);