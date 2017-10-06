import React, { Component } from 'react';
import { Link } from "react-router-dom";

class ItemComponent extends Component {
    render() {
        return (
            <div class="masonry">
                <div class="item">
                    <img className="supper-img" src={this.props.photo} alt=""/>
                    <div className="my-supper">
                        <p className="supper-title"> {this.props.title} </p>
                        <p className="supper-date"> {this.props.date} </p>
                        <p className="supper-time">{this.props.time}</p>
                        <p className="supper-price"> {this.props.price} </p>
                        <p className="supper-spots"> {this.props.spots} </p>
                        <button className = "edit-my-supper">Edit</button>
                    </div>
            </div>
                    

     </div>
        );
    }
}

export default ItemComponent;