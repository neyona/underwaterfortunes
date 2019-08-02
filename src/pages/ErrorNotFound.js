// src/pages/ErrorNotFound.js
import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';

import './Home.css';

export default class ErrorNotFound extends Component {
    render() {
        return (
            <Container>
                <Jumbotron className="jumbotron-error">
                  <h1>HOW DID YOU GET HERE!</h1>
                  <h1>404 ERROR</h1>
                  <h2>This is not the page you are looking for. There is no fortune here.</h2>
                </Jumbotron>
            </Container>
        );
    }
}
