import React, { Component } from 'react';
import CheckboxContainer from '../checkbox/CheckboxContainer.js'
import ListContainer from "../landing/ListContainer.js";
import { Link, Switch, Route } from 'react-router-dom';

class Navbar extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
            <div className = "navbar">
                <Link to="/"><a href="" className = "logo">Logo</a></Link>
                <ul className = "navbar-link-container">
                    <li className = "host"><Link to = "/host"><a href="">Host a Supper</a></Link></li>
                    <li className = "sign-up"><a href="">Sign Up</a></li>
                    <li className = "login"><a href="">Log In</a></li>
                    <li>
                        <a href="">Profile</a>
                        <ul className = "hidden">
                            <li><a className = "hidden-li" href="">Profile</a></li>
                            <li><a className = "hidden-li" href="">Hearted Suppers</a></li>
                            <li><a className = "hidden-li" href="">RSVPs</a></li>
                            <li><a className = "hidden-li" href="">Logout</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
            
            </div>
        );
    }
}

export default Navbar;