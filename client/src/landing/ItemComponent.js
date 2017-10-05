import React, { Component } from 'react';
import { Link } from "react-router-dom";

class ItemComponent extends Component {
    render() {
        return (
            <div className="supper-wrapper" style={{ backgroundImage: `url(${this.props.photo})` }}>
                <div className="supper-content" >
                    <p className="supper-title"> {this.props.title} </p>
                    <p className="supper-date"> {this.props.date} </p>
                    <p className="supper-price"> {this.props.price} </p>
                    <p className="supper-spots"> {this.props.spots} </p>
                </div>
            </div>
        );
    }
}

export default ItemComponent;