import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';

import SupperContainer from "./supper/SupperContainer.js";
import ApplyContainer from "./apply/ApplyContainer.js";
import CheckboxContainer from './checkbox/CheckboxContainer.js'
import ListContainer from "./landing/ListContainer.js";
import NavbarContainer from './navbar/NavbarContainer.js';
import SupperDashboardContainer from './supper-dashboard/SupperDashboardContainer.js';
import LoginContainer from './login/LoginContainer.js';
import SignUpContainer from './signup/SignUpContainer.js'
import Thank from "./thank/Thank.js";

import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import mainReducer from './redux/reducers/index.js';
import "./styles/thank.css";
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

let store = createStore(mainReducer, applyMiddleware(thunk))


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
                    <Route path = "/signup" component = {SignUpContainer}></Route>
                    <Route path = "/login" component = {LoginContainer}></Route>
                    <Route path = "/supper" component = {SupperContainer}></Route>
                    <Route path = "/dashboard" component = {SupperDashboardContainer}></Route>
                    <Route exact path = "/host" component = {CheckboxContainer}></Route>
                    <Route exact path = "/host/apply" component = {ApplyContainer}></Route>
                    <Route path = "/host/apply/thank" component = {Thank}></Route>
                </Switch>
    
            </div>
        );
    }
}

store.subscribe(() => {
    console.log(store.getState());
})

export default App;

ReactDOM.render( 
   <Provider store = {store}><Router><App /></Router></Provider>,
    document.getElementById('root')
)