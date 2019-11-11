import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import styled, { css, keyframes } from 'styled-components';

import Fortune_Cuttlefish from '../static/Fortune_Cuttlefish.png';
import "./HomePage.css";


const ContactConfirmation = () => {

    const rotate = keyframes`
        0% {
            transform: rotate(1deg) translate(.3vmin, .8vmin);
        }
        20% {
            transform: rotate(-0.8deg) translate(-.1vmin, -.9vmin);
        }
        55% {
            transform: rotate(0.8deg) translate(.3vmin, -.6vmin);
        }
        70% {
            transform: rotate(1deg) translate(-.2vmin, .9vmin);
        }
        100% {
            transform: rotate(-1deg) translate(.4vmin, -.5vmin);
        }
    `;

    const rotateRule = css`
    ${rotate} 6s ease-in infinite alternate;
    `;

    const Rotate = styled.div`
    display: inline-block;
    animation: ${rotateRule};
    `;

    return (
        <div>
        <Jumbotron className="jumbotron-home">
          <Jumbotron className="jumbotron-pink">
            <h3>Your message has been sent.</h3>
          </Jumbotron>
        <Rotate>
            <Container className="container-cuttlefish" fluid>
            <Image
                src={Fortune_Cuttlefish}
                alt="Cuttlefish that is animated and is also the one that gives the fortune"
                fluid
                />
                </Container>
        </Rotate>
        </Jumbotron>
        </div>
    );
}

export default ContactConfirmation;
