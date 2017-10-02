import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import ApplyContainer from "../apply/ApplyContainer.js";

class CheckboxPage extends Component {
    render() {
        return (
            <div>
                <div className="hosting-standards">
                    <p>Welcome guest!</p>
                    <p>To become a host, you must be able to hold our supper club standards. Your food must be a product of experience, deep knowledge and passion, and your space must also reflect those values.</p>
                    <input className ="checkbox" type="checkbox"/><label className = "checkbox-label">I agree</label>
                    <Link to="/apply"><button className = "checkbox-btn">Continue</button></Link>
                </div>
                <Switch>
                    <Route path = "/apply" component = {ApplyContainer}></Route>
                </Switch>
            </div>
        );
    }
}

export default CheckboxPage;