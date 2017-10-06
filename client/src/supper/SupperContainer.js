import React, { Component } from 'react';
import Supper from "./Supper.js";
import { connect } from 'react-redux';
import { loadSupperById } from '../redux/actions/index.js';


class SupperContainer extends Component {
    componentDidMount() {
        this.props.loadSupperById(this.props.match.params.id);
    }
    render() {
        return (
            <Supper {...this.props.currentSupper}/>
        );
    }
}



export default connect (state => state, {loadSupperById}) (SupperContainer);