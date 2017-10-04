import React, { Component } from 'react';

class Supper extends Component {
    render() {
        return (
            <div className="supper-page-wrapper">
                <div className="sup-image-wrapper">
                    <img className="supper-image" src="https://eb-blog-rally.s3.amazonaws.com/wp-content/uploads/rally/2015/05/rsz_cutting_board_unsplash_022.jpg" alt="" />
                </div>
                <div className="supper-info">
                    <div>
                        <p className="supper-title">Supper Title</p>
                        <p className="chef-name">chef name</p>
                        <p className="supper-date">date</p>
                        <p className="supper-time">time</p>
                        <p className="supper-price">$100</p>
                    </div>
                    <div className="supper-description">
                        <p className="description">description</p>
                        <p className="describe-supper">here you will write a short description of your supper club here you will write a short description of your supper club here you will write a short description of your supper club here you will write a short description of your supper club</p>
                    </div>
                    <div>
                        <p className="menu">menu</p>
                            <p className="menu-items">menu item</p>
                            <p className="menu-items">menu item</p>
                            <p className="menu-items">menu item</p>
                            <p className="menu-items">menu item</p>
                            <p className="menu-items">menu item</p>
                    </div>
                    <div>
                        <p className="availability">spots left: 25</p>
                        <button className="rsvp">RSVP</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Supper;