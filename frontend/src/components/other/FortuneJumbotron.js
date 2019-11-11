import React, { Component } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import OneFortune from './OneFortune';
import { withRouter } from 'react-router-dom';
import styled, { css, keyframes } from 'styled-components';

import Fortune_Cuttlefish from '../static/Fortune_Cuttlefish.png';
import "./FortuneJumbotron.css";

class FortuneJumbotron extends Component {
  render() {

    const nameGet = this.props.nameAuraItems.map(justName => (
        <span>{justName.name}</span>
    ));

    const auraGet = String(this.props.nameAuraItems.map(justAura => justAura.auraColor));

    console.log("the current aura is " + auraGet)

    console.log("Array check: " + Array.isArray(nameGet));
    console.log("Array length: " + nameGet.length);

    function renderProperJumbotron(val) {
      switch(val) {
        case val = 'auraOne':
          return "jumbotron-auraOne";
        case val = 'auraTwo':
          return "jumbotron-auraTwo";
        case val = 'auraThree':
          return "jumbotron-auraThree";
        case val = 'auraFour':
          return "jumbotron-auraFour";
        case val = 'auraFive':
          return "jumbotron-auraFive";
        case val = 'auraSix':
          return "jumbotron-auraSix";
        case val = 'auraSeven':
          return "jumbotron-auraSeven";
        case val = 'auraEight':
          return "jumbotron-auraEight";
        case val = 'auraNine':
          return "jumbotron-auraNine";
        case val = 'auraTen':
          return "jumbotron-auraTen";
        case val = 'auraEleven':
          return "jumbotron-auraEleven";
        case val = 'auraTwelve':
          return "jumbotron-auraTwelve";
        case val = 'auraThirteen':
          return "jumbotron-auraThirteen";
        default:
          return "jumbotron-default";
      }
    }

    const currentJumbotronValue = renderProperJumbotron(auraGet);

    const reRouteAuraValue = nameGet.length;
    console.log("Array length: " + reRouteAuraValue);

    if (reRouteAuraValue === 0) {
      this.props.history.push('/');
    }

    // The following will animate the Fortune Cuttlefish on the fortune page
    // using styled components.

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
        <Jumbotron className={currentJumbotronValue}>
        {nameGet}
          <OneFortune />
          <br />
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
}

FortuneJumbotron.propTypes = {
  auraGet: PropTypes.string,
  jumbotronClass: PropTypes.string
}

const mapStateToProps = state => ({
  nameAuraItems: state.nameAura.nameAuraItems
});

export default connect(mapStateToProps)(withRouter(FortuneJumbotron));
