import React, { Component } from 'react';
import ListComponent from "./ListComponent.js";

class ListContainer extends Component {
    render() {
        console.log(this.props)
        return (
                <ListComponent supperList={this.props.supperList}/>
        );
    }
}

export default ListContainer;