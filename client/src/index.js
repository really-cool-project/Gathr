import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute.js';

import SupperContainer from "./supper/SupperContainer.js";
import ApplyContainer from "./apply/ApplyContainer.js";
import CheckboxContainer from './checkbox/CheckboxContainer.js'
import ListContainer from "./landing/ListContainer.js";
import NavbarContainer from './navbar/NavbarContainer.js';
import SupperDashboardContainer from './supper-dashboard/SupperDashboardContainer.js';
import LoginContainer from './login/LoginContainer.js';
import SignUpContainer from './signup/SignUpContainer.js'
import Thank from "./thank/Thank.js";
import CreateContainer from './create-page/CreateContainer.js'


import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import mainReducer from './redux/reducers/index.js';

import { verifyToken } from './redux/actions/index.js';
import {connect} from "react-redux";

import { withRouter } from "react-router-dom";

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
    componentDidMount() {
        this.props.verifyToken();
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
                    <ProtectedRoute path = "/dashboard" component = {SupperDashboardContainer} />
                    <ProtectedRoute exact path = "/host" component = {CheckboxContainer}/>
                    <Route exact path = "/host/apply" component = {ApplyContainer}></Route>
                    <Route path = "/host/apply/thank" component = {Thank}></Route>
                    <Route path = "/create" component = {CreateContainer} />
                </Switch>
            </div>
        );
    }
}

store.subscribe(() => {
    console.log(store.getState());
})

App = withRouter(connect (null, {verifyToken})(App));

ReactDOM.render( 
   <Provider store = {store}><Router><App /></Router></Provider>,
    document.getElementById('root')
)