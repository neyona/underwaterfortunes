import React, { Component } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import './HomePage.css';

export default class ErrorPage extends Component {
    render() {
        return (
            <div>
                <Jumbotron className="jumbotron-error">
                  <h1>HOW DID YOU GET HERE!</h1>
                  <h1>404 ERROR</h1>
                  <h2>This is not the page you are looking for. There is no fortune here.</h2>
                </Jumbotron>
            </div>
        )
    }
}
