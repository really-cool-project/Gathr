import React, { Component } from 'react';
import ListComponent from "./ListComponent.js";

import { connect } from 'react-redux';
import { loadUserSuppers } from '../redux/actions/index.js'

class ListContainer extends Component {
    componentDidMount = () => {
        this.props.loadUserSuppers();
    }
    render() {
        return (
                <ListComponent suppers = {this.props.suppers}/>
        );
    }
}
const mapStateToProps = (state) => {
    return state
}

export default connect (mapStateToProps, {loadUserSuppers}) (ListContainer);