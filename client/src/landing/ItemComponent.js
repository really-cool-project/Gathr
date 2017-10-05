import React, { Component } from 'react';
import { Link } from "react-router-dom";

class ItemComponent extends Component {
    render() {
        return (
            <div className="supper-wrapper">
                <Link to="/supper"><div></div></Link>
            </div>
        );
    }
}

export default ItemComponent;