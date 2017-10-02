import React, { Component } from 'react';
import SupperContainer from "./SupperContainer.js";

class ListComponent extends Component {
    // genSuppers() {
    //     console.log(this.props)
    //     return this.props.supperList.map((item, index) => {
    //         return <SupperContainer 
    //             key={index}
    //             index={index}     
    //             /* suppers={item} */ />;
    //     })
    // }
    render() {
        return (
            <div className="gallery-wrapper">
                <SupperContainer />
                <SupperContainer />
                <SupperContainer />
                <SupperContainer />
                <SupperContainer />
                <SupperContainer />
                <SupperContainer />
                <SupperContainer />
                <SupperContainer />
                <SupperContainer />
                <SupperContainer />
                <SupperContainer />
                <SupperContainer />
                <SupperContainer />
                <SupperContainer />
                {/* {this.genSuppers()}; */}
            </div>
        );
    }
}

export default ListComponent;