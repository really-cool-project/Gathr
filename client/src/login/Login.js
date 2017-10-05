import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Login extends Component {
    render() {
        return (
            <div className="login-wrapper">
                <form onSubmit={this.props.handleSubmit}>
                    <p>Welcome.</p>
                    <input className = "login-inputs" name="username" type="text" placeholder="@Username" />
                    <input className = "login-inputs" name="password" type="password" placeholder="#" />
                    <button className="log-in-btn" type="submit">Log In</button>
                    <p>{this.props.errMsg}</p>
                </form>
                <p className = "not-a-member">Not a member? <Link to="/signup"><a href="">Create an account.</a></Link></p>
            </div>
        );
    }
}

export default Login;