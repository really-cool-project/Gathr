import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router'

class ProtectedRoute extends Component {
    //needs the component that is protected
    //needs the path
    //needs state to know whether we are logged in or not

    //we're either going to render the component or we're going to redirect to our login page
    render() {
        //we're goign to pass down a component to our protected route and a path
        let Component = this.props.component
        let path = this.props.path
        return (
            //here, we're goign to return a route that will render a component conditionally
            <Route path={path} render={(props) => {
                return this.props.isAuthenticated ?
                    <Component {...props} /> :
                    <Redirect to="/login" />
            }} />
        );
    }
}

const mapStateToProps = (state) => {
    return state
}

export default connect(mapStateToProps, {})(ProtectedRoute);