import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import NavbarContainer from './navbar/NavbarContainer.js';
import CheckboxContainer from './checkbox/CheckboxContainer.js';
import ApplyContainer from "./apply/ApplyContainer.js";
import './styles/Navbar.css';
import './styles/CheckboxPage.css';
import './styles/typography.css';
import "./styles/apply.css";

class App extends Component {
    render() {
        return (
            <div>
                <NavbarContainer />
            </div>
        );
    }
}

export default App;

ReactDOM.render( 
   <Router><App /></Router>,
    document.getElementById('root')
)