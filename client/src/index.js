import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import NavbarContainer from './navbar/NavbarContainer.js';
import CheckboxContainer from './checkbox/CheckboxContainer.js';
import './styles/Navbar.css';
import './styles/CheckboxPage.css';
import './styles/typography.css';

class App extends Component {
    render() {
        return (
            <div>
                <NavbarContainer />
                <CheckboxContainer />
            </div>
        );
    }
}

export default App;

ReactDOM.render( 
    <App />,
    document.getElementById('root')
)