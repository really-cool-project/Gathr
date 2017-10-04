import React, { Component } from 'react';

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
                <p className="already-a-member">Already a member? <a href="">Log In.</a></p>
            </div>
        );
    }
}

export default SignUp;