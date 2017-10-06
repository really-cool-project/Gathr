import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SupperDashboard extends Component {
    render() {
        console.log(this.props)
        return (
            <div className="dashboard-wrapper">
                <div className = "welcome-line">
                    <p>Welcome Back.</p>
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

export default SupperDashboard;