import React, { Component } from 'react';
import { Link } from "react-router-dom";

class ItemComponent extends Component {
    render() {
        return (
            <div>
                <div class="item">
                    <img className="supper-img" src={this.props.photo} alt=""/>
                    <div className="my-supper">
                        <p className="dash-title"> {this.props.title} </p>
                        <p className="dash-date"> {this.props.date} </p>
                        <p className="dash-time">{this.props.time}</p>
                        <p className="dash-price"> {this.props.price} </p>
                        <p className="dash-spots"> Spots: {this.props.spots} </p>
                        <button className = "edit-my-supper">Edit</button>
                    </div>
            </div>
                    

     </div>
        );
    }
}

export default ItemComponent;