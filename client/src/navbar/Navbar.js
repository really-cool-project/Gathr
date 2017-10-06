import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import { logout } from "../redux/actions/index.js";

class Navbar extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
            <div className = "navbar">
                <Link to="/"><span className = "logo">Logo</span></Link>
                <ul className = "navbar-link-container">
                    <li className = "host"><Link to = "/host">Host a Supper</Link></li>
                    {this.props.isAuthenticated ? 
                        null :
                        <li className = "sign-up"><Link to = "/signup">Sign Up</Link></li>}
                    {this.props.isAuthenticated ? 
                        null :
                        <Link to = "/login"><li className = "login">Log In</li></Link>}
                    {!this.props.isAuthenticated ? 
                        null :
                        <li>
                            <Link to="/dashboard">Profile</Link>
                            <ul className = "hidden">
                                <li><Link to="/dashboard"><span className = "hidden-li" >Profile</span></Link></li>
                                <li><a className = "hidden-li" href="">Hearted Suppers</a></li>
                                <li><a className = "hidden-li" href="">RSVPs</a></li>
                                <li><button onClick={this.props.logout}><a className = "hidden-li" href="#">Logout</a></button></li>
                            </ul>
                        </li>}
                </ul>
            </div>
            
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return state;
}

export default connect(mapStateToProps, { logout }) (Navbar);