import React, { Component } from 'react';
import { Link } from "react-router-dom";

class ItemComponent extends Component {
    render() {
        return (
            <div class="masonry">
                <div class="item">
                    <img className="supper-img" src={this.props.photo} alt=""/>
                    <div className="supper-wrapper">
                        <p className="supper-title"> {this.props.title} </p>
                        <p className="supper-date"> {this.props.date} </p>
                        <p className="supper-price"> {this.props.price} </p>
                        <p className="supper-spots"> {this.props.spots} </p>
                    </div>
            </div>
                    

     </div>
        );
    }
}

export default ItemComponent;