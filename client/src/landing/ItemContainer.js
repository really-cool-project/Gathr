import React, { Component } from 'react';
import ItemComponent from "./ItemComponent.js";

class ItemContainer extends Component {
    render() {
        return (
            <ItemComponent 
            {...this.props}
            />
        );
    }
}

export default ItemContainer;