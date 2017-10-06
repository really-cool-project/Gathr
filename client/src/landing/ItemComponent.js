import React, { Component } from 'react';
import { Link } from "react-router-dom";

class ItemComponent extends Component {
    render() {
        
        return (
            <div>
                <div className="item">
                    <img className="supper-img" src={this.props.photo} alt=""/>
                    <div className="supper-wrapper">
                        <Link className = "link-to-supper" to = {`/supper/${this.props._id}`} ><p className="supper-title"> {this.props.title} </p></Link>
                        <p className="supper-date"> {this.props.date} </p>
                        <p className="supper-price"> {this.props.price} </p>
                        <p className="supper-description"> {this.props.description} </p> 
                    </div>
            </div>
     </div>
        );
    }
}

export default ItemComponent;