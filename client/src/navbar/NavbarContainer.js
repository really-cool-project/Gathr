import React, { Component } from 'react';
import Navbar from './Navbar.js';

class NavbarContainer extends Component {
    render() {
        return (
            <Navbar supperList = {this.props.supperList}/>
        );
    }
}

export default NavbarContainer;