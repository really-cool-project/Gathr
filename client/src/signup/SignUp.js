import React, { Component } from 'react';
import { Link } from "react-router-dom";

class SignUp extends Component {
    render() {
        return (
            <div>
                <form className="signup-wrapper">
                    <p>Join the Underground.</p>
                    <input className="signup-inputs" name="username" type="text" placeholder="@Username" />
                    <input className="signup-inputs" name="email"type="email"placeholder="Email"/>
                    <input className="signup-inputs" name="password" type="password" placeholder="#" />
                    <button className="signup-btn" type="submit">Create</button>
                </form>
                <p className="already-a-member">Already a member? <Link to="/login"><a href="">Log In.</a></Link></p>
            </div>
        );
    }
}

export default SignUp;