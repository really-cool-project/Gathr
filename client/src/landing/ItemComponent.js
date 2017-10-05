import React, { Component } from 'react';
import { Link } from "react-router-dom";

class ItemComponent extends Component {
    render() {
        return (
            <div className="gallery-wrapper">
                    <img className="supper-image" src={this.props.photo} alt=""/>
                    <div className="supper-wrapper">
                        <p className="supper-title"> {this.props.title} </p>
                        <p className="supper-date"> {this.props.date} </p>
                        <p className="supper-price"> {this.props.price} </p>
                        <p className="supper-spots"> {this.props.spots} </p>
                    </div>
            </div>
        );
    }
}

                        {/* <p className="supper-title"> {this.props.title} </p>
                        <p className="supper-date"> {this.props.date} </p>
                        <p className="supper-price"> {this.props.price} </p>
                        <p className="supper-spots"> {this.props.spots} </p> */}

export default ItemComponent;