// src/components/RandomFortune.js
import React, { Component } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import { connect } from 'react-redux';
import { compose } from 'redux';
import PropTypes from 'prop-types';
import OneFortune from './OneFortune';
import { withRouter } from 'react-router-dom';

import Fortune_Cuttlefish from '../static/Fortune_Cuttlefish.png';
import "./CustomJumbotron.css";

class FortuneJumbotron extends Component {
  render () {

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

    return (
      <div>
        <Jumbotron className={currentJumbotronValue}>
        {nameGet}
          <OneFortune />
          <br />
          <Container className="container-cuttlefish" fluid>
            <Image src={Fortune_Cuttlefish} fluid />
          </Container>
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
