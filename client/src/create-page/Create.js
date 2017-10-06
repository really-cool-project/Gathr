import React, { Component } from 'react';

class Create extends Component {
    render() {
        return (
            <div>
                <div className="create-supper">
                    <p className="create-supertitle">Create Your Supper Club</p>
                    <p className="create-subtitle">Please consider the standards as you create your supperclub.</p>
                    <p className="create-titles">Supperclub Title</p>
                    <textarea onChange = {this.props.handleChange} name="title" className="create-text-area"
                        rows="10" cols="100" placeholder="Write your title here!"></textarea>
                    <p className="create-titles">Supperclub description</p>
                    <p className="create-subtitle">Tell us what you plan to serve and how you plan to present it. You can put a menu here, or just a small description of your offerings.</p>
                    <textarea onChange = {this.props.handleChange} name="description" className="create-text-area"
                        rows="10" cols="100" placeholder="Tell us about your culinary offerings here!"></textarea>
                    <p className="create-titles">Date and Time</p>
                    <p className="create-subtitle">Tell us the time and date you plan to hold your supperclub.</p>
                    <input onChange = {this.props.handleChange} className="img-text-box" type="text" placeholder="Month X, 20XX" name="date" />
                    <input  onChange = {this.props.handleChange} className="img-text-box" type="text" placeholder="Example: 11:00pm - 2:00am" name="time"/>
                    <p className="create-titles">Spots</p>
                    <p className="create-subtitle">Tell us how many spots you've got!</p>
                    <input onChange = {this.props.handleChange} className="img-text-box" type="text" placeholder="Spots" name="spots"/>
                    <p className="create-titles">Price</p>
                    <p className="create-subtitle">Tell us how much it will cost for one person to attend.</p>
                    <input onChange = {this.props.handleChange} className="img-text-box" type="text" placeholder="$XX" name="price"/>
                    <p className="create-titles">Photos</p>
                    <p className="create-subtitle">Give us some visual stimulation! You can supply photos of your own food, or some photos that influenced your offerings</p>
                    <div className="create-img-container">
                        <input onChange = {this.props.handleChange} className="img-text-box" type="text" placeholder="Image" name="photo"/>
                    </div>
                    <button className="submit-btn" onClick = {this.props.handleSubmit}>Submit</button>

                </div>
            </div>
        );
    }
}

export default Create;