import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import NavbarContainer from './navbar/NavbarContainer.js';
<<<<<<< HEAD
import CheckboxContainer from './checkbox/CheckboxContainer.js';
import ApplyContainer from "./apply/ApplyContainer.js";
import CreateContainer from './create-page/CreateContainer.js'
=======
import ListContainer from "./landing/ListContainer.js";
import "./styles/landing.css";
>>>>>>> landing
import './styles/Navbar.css';
import './styles/CheckboxPage.css';
import './styles/typography.css';
import "./styles/apply.css";
import './styles/CreatePage.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
            supperList: [0,1,2,3,4,5,6,7,8]
        }
    }
    render() {
        return (
            <div>
<<<<<<< HEAD
                <NavbarContainer />
                <CreateContainer />
=======
                <NavbarContainer 
                    supperList = {this.state.supperList}/>
>>>>>>> landing
            </div>
        );
    }
}

export default App;

ReactDOM.render( 
   <Router><App /></Router>,
    document.getElementById('root')
)