import React, { Component } from 'react';
import ItemContainer from "./ItemContainer.js";

class ListComponent extends Component {
    genSuppers() {
        return this.props.suppers.map((supper, index) => {
            return <ItemContainer 
                    {...supper}
                    key = {supper._id}
             />;
        })
    }
    render() {
        return (
            <div className = "masonry">
               {this.genSuppers()}
            </div>
        );
    }
}

export default ListComponent;