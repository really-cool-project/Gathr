import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import ListContainer from "./ListContainer.js";

class SupperDashboard extends Component {
    render() {
        return (
            <div className = "masonry">
                <div className="welcome-line">
                    <p className="welcome">Welcome Back, {this.props.user.username}.</p>
                    <Link to="/create"><button className="supper-btn">New Supper</button></Link>
                </div>
                <ListContainer />
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return state
}

export default connect (mapStateToProps, null) (SupperDashboard);