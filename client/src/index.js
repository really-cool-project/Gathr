import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import SupperContainer from "./supper/SupperContainer.js";
import ApplyContainer from "./apply/ApplyContainer.js";
import CheckboxContainer from './checkbox/CheckboxContainer.js'
import ListContainer from "./landing/ListContainer.js";
import { Link, Switch, Route } from 'react-router-dom';
import NavbarContainer from './navbar/NavbarContainer.js';
import SupperDashboardContainer from './supper-dashboard/SupperDashboardContainer.js';
import LoginContainer from './login/LoginContainer.js';
import SignUpContainer from './signup/SignUpContainer.js'
import './styles/modal.css';
import "./styles/landing.css";
import './styles/Navbar.css';
import './styles/CheckboxPage.css';
import './styles/typography.css';
import "./styles/apply.css";
import './styles/CreatePage.css';
import './styles/supperdash.css';
import './styles/login.css';
import './styles/signup.css';
import "./styles/supper.css";

class App extends Component {
    constructor() {
        super();
        this.state = {
            supperList: [0,1,2,3,4,5,6,7,8]
        }
    }
    render() {
        return (
            <div>
                <NavbarContainer />
                <Switch>
                    <Route exact path = "/" component = {ListContainer}></Route>
                    <Route exact path = "/host" component = {CheckboxContainer}></Route>
                    <Route path = "/supper" component = {SupperContainer}></Route>
                    <Route path = "/host/apply" component = {ApplyContainer}></Route>
                </Switch>
    
            </div>
        );
    }
}

export default App;

ReactDOM.render( 
   <Router><App /></Router>,
    document.getElementById('root')
)