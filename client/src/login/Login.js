import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Login extends Component {
    render() {
        return (
            <div>
                <form className="login-wrapper">
                    <p>Welcome.</p>
                    <input 
                        className = "login-inputs" 
                        name="username" 
                        type="text" 
                        placeholder="@Username" 
                        onChange = {this.props.handleChange} 
                        value = {this.props.username}/>
                    <input 
                        className = "login-inputs" 
                        name="password" 
                        type="password" 
                        placeholder="#" 
                        onChange = {this.props.handleChange} 
                        value = {this.props.password} />
                    <button 
                        className="log-in-btn" 
                        type="submit">Log In</button>
                </form>
                <p className = "not-a-member">Not a member? <Link to="/signup"><a href="">Create an account.</a></Link></p>
            </div>
        );
    }
}

export default Login;