import React, { Component } from 'react';

class SupperDashboard extends Component {
    render() {
        return (
            <div className="dashboard-wrapper">
                <div className = "welcome-line">
                    <p>Welcome Back.</p>
                    <button className="supper-btn">New Supper</button>
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