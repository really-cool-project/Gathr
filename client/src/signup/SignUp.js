import React, { Component } from 'react';
import { Link } from "react-router-dom";

class SignUp extends Component {
    render() {
        return (
            <div>
                <form className="signup-wrapper" onSubmit = {this.props.handleSubmit}>
                    <p>Join the Underground.</p>
                    <input className="signup-inputs" name="username" value={this.props.username} type="text" placeholder="@Username" onChange = {this.props.handleChange} />
                    <input className="signup-inputs" name="email" value={this.props.email} type="email"placeholder="Email" onChange = {this.props.handleChange}/>
                    <input className="signup-inputs" name="password" value={this.props.password} type="password" placeholder="#" onChange = {this.props.handleChange} />
                    <button className="signup-btn" type="submit">Create</button>
                    <p>{this.props.authError}</p>
                </form>
                
                <p className="already-a-member">Already a member? <Link to="/login"><a href="">Log In.</a></Link></p>
            </div>
        );
    }
}

export default SignUp;