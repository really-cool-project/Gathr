import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SupperDashboard extends Component {
    render() {
        console.log(this.props)
        return (
            <div className="masonry">
                <div className="welcome-line">
                    <p className="welcome">Welcome Back.</p>
                    <Link to="/create"><button className="supper-btn">New Supper</button></Link>
                </div>
                    <div className="dashboard-wrapper">
                    <div className="item">
                        <div className="my-supper">
                            <img src="https://eb-blog-rally.s3.amazonaws.com/wp-content/uploads/rally/2015/05/rsz_cutting_board_unsplash_022.jpg" alt=""/>
                            <p>Supper Title</p>
                            <p>Supper Subtitle</p>
                            <p>Supper description</p>
                            <button className = "edit-my-supper">Edit</button>
                        </div>
                    </div>
                    <div className="item">
                        <div className="my-supper">
                            <img src="http://static1.squarespace.com/static/55a439fae4b0790093826e9c/55a44b2ce4b0daf995feea00/582b4a4e3e00bed078ab95aa/1496444589948/photo-1449792893722-936641bb3309.jpeg?format=1000w" alt=""/>
                            <p>Supper Title</p>
                            <p>Supper Subtitle</p>
                            <p>Supper description</p>
                            <button className = "edit-my-supper">Edit</button>
                        </div>
                    </div>
                    <div className="item">
                        <div className="my-supper">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOWFCxVufJKPmTuGsBfgA6PG7wYyLdWjAawkyWlUwh5otlvmf9LQ" alt=""/>
                            <p>Supper Title</p>
                            <p>Supper Subtitle</p>
                            <p>Supper description</p>
                            <button className = "edit-my-supper">Edit</button>
                        </div>
                    </div>
                    <div className="item">
                        <div className="my-supper">
                            <img src="http://img1.wsimg.com/isteam/stock/a2899eb6e37ec0dcb19a4ecffcd542c14cf70521bbd6a8cf34e760d9df8d6e5d" alt=""/>
                            <p>Supper Title</p>
                            <p>Supper Subtitle</p>
                            <p>Supper description</p>
                            <button className = "edit-my-supper">Edit</button>
                        </div>
                    </div>
                    <div className="item">
                        <div className="my-supper">
                            <img src="http://images.unsplash.com/photo-1500816558239-6b91f4256ead?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&s=b51e2e19d60b5c46801d1c436adff9d4" alt=""/>
                            <p>Supper Title</p>
                            <p>Supper Subtitle</p>
                            <p>Supper description</p>
                            <button className = "edit-my-supper">Edit</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SupperDashboard;