import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class SupperDashboard extends Component {
    render() {
        return (
            <div className="dashboard-wrapper">
                <div className = "welcome-line">
                    <p>Welcome Back, {this.props.user.username}.</p>
                    <Link to = "/create"><button className="supper-btn">New Supper</button></Link>
                </div>
                <div className="my-supper">
                    <p>Supper Title</p>
                    <p>Supper Subtitle</p>
                    <p>Supper description</p>
                    <button className = "edit-my-supper">Edit</button>
                </div>

            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return state
}

export default connect (mapStateToProps, null) (SupperDashboard);