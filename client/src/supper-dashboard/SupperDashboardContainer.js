import React, { Component } from 'react';
import SupperDashboard from './SupperDashboard.js';
import { connect } from 'react-redux';
import { loadUserSuppers } from '../redux/actions/index.js'

class SupperDashboardContainer extends Component {
    componentDidMount() {
        this.props.loadUserSuppers();
        console.log(this.props)
    }
    render() {
        return (
            <div>
                <SupperDashboard />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return state
}

export default connect (mapStateToProps, {loadUserSuppers})(SupperDashboardContainer);