import React, { Component } from 'react';

class Create extends Component {
    render() {
        return (
            <div>
                <div className="create-supper">
                    <p className = "create-supertitle">Create Your Supper Club</p>
                    <p className = "create-subtitle">Please consider the standards as you create your supperclub.</p>
                    <p className = "create-titles">Supperclub Title</p>
                    <textarea name="textarea" className = "create-text-area"
                        rows="10" cols="100" placeholder="Write your title here!"></textarea>
                    <p className = "create-titles">Chef bio</p>
                    <p className = "create-subtitle">Tell us your story. How did you get into cooking? What cuisine influences you the most? Where did you learn?</p>
                    <textarea name="textarea" className = "create-text-area"
                        rows="10" cols="100" placeholder="Tell us your story here!"></textarea>
                    <p className = "create-titles">Supperclub description</p>
                    <p className = "create-subtitle">Tell us what you plan to serve and how you plan to present it. You can put a menu here, or just a small description of your offerings.</p>
                    <textarea name="textarea" className = "create-text-area"
                        rows="10" cols="100" placeholder="Tell us about your culinary offerings here!"></textarea>
                    <p className = "create-titles">Date and Time</p>
                    <p className = "create-subtitle">Tell us the time and date you plan to hold your supperclub.</p>
                    <p className = "create-titles">Photos</p>
                    <p className = "create-subtitle">Give us some visual stimulation! You can supply photos of your own food, or some photos that influenced your offerings</p>
                    <input type="text" placeholder="Image 1" />
                    <input type="text" placeholder="Image 2" />
                    <input type="text" placeholder="Image 3" />
                </div>
            </div>
        );
    }
}

export default Create;