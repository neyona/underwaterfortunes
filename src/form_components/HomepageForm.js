// src/form_components/HomepageForm.js
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { getNameAura } from '../actions/fortuneActions';

import './HomepageForm.css';

class HomepageForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      nameError: '',
      auraColor: "auraOne"
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  // The target is set up as a key value for onChange. It had been writing
  // itself over before because the onChange event was set up wrong.
  onChange(e, key) {
    this.setState({
      [key]: e.target.value
    });
  }

  validate = () => {
    let isError = false;
    const errors = {
      nameError: ""
    };

    if (this.state.name.length < 3) {
      isError = true;
      errors.nameError = "Hey, longer than two letters, hyphens, or spaces please.";
    }

    if (this.state.name.length > 31) {
      isError = true;
      errors.nameError = "Thirty letters, hyphens, or spaces or less please!";
    }

    if (this.state.name.typeof !== "undefined") {
      if (!this.state.name.match(/^[a-zA-Z -]+$/)){
        isError = true;
        errors.nameError = "Only. Letters. And. Hypens. And. Spaces.";
      }
    }

    this.setState({
      ...this.state,
      ...errors
    });
    return isError;
  };

  onSubmit(e) {
    e.preventDefault();
    const err = this.validate();
    // I do not want to clear the form when there is no error. I want to let it submit.
    if (!err) {
      // Call Action here
      this.props.getNameAura(this.state);
      this.props.history.push('/fortune');
    }
  }

  render() {
    return (
      <Container>
        <Row className="show grid text-center">
        <form
          onSubmit={this.onSubmit}>
          <Row className="show-grid text-center">
          <Col xs={12} sm={4} className="person-wrapper">
            <label className="legend">A Name, a Totally Real Name<br />
              <input
                type="text"
                name="name"
                component="input"
                id="aName"
                onChange={(e) => this.onChange(e, 'name')}
                value={this.state.name}
              />
            <br />
            <p style={{color: "pink"}}>{this.state.nameError}</p>
            </label>
          </Col>


          <Col xs={12} sm={4} className="person-wrapper">
              <label as="legend" className="legend">
                Current Aura Color:
                  </label>
                  <fieldset>
                    <Row className="show grid text-center">
                    <Col xs={12} sm={4} className="person-wrapper">
                    <label className="auraOne">
                    <input
                      type="radio"
                      name="auraColor"
                      checked={this.state.auraColor === "auraOne"}
                      defaultChecked
                      id="auraOne"
                      onChange={(e) => this.onChange(e, 'auraColor')}
                      value="auraOne"
                    />
                  ABCD
                  </label>

                  <label className="auraTwo">
                  <input
                      type="radio"
                      name="auraColor"
                      checked={this.state.auraColor === "auraTwo"}
                      id="auraTwo"
                      onChange={(e) => this.onChange(e, 'auraColor')}
                      value="auraTwo"
                    />
                  ABCD
                </label>

                  <label className="auraThree">
                  <input
                      type="radio"
                      name="auraColor"
                      checked={this.state.auraColor === "auraThree"}
                      id="auraThree"
                      onChange={(e) => this.onChange(e, 'auraColor')}
                      value="auraThree"
                    />
                  ABCD
                </label>

                  <label className="auraFour">
                  <input
                      type="radio"
                      name="auraColor"
                      checked={this.state.auraColor === "auraFour"}
                      id="auraFour"
                      onChange={(e) => this.onChange(e, 'auraColor')}
                      value="auraFour"
                    />
                  ABCD
                </label>

                  <label className="auraFive">
                    <input
                      type="radio"
                      name="auraColor"
                      checked={this.state.auraColor === "auraFive"}
                      id="auraFive"
                      onChange={(e) => this.onChange(e, 'auraColor')}
                      value="auraFive"
                    />
                  ABCD
                  </label>
                  </Col>


                <Col xs={12} sm={4} className="person-wrapper">
                <label className="auraSix">
                    <input
                      type="radio"
                      name="auraColor"
                      id="auraSix"
                      checked={this.state.auraColor === "auraSix"}
                      onChange={(e) => this.onChange(e, 'auraColor')}
                      value="auraSix"
                    />
                  {' '}What Aura?
                </label>

                <label className="auraTwelve">
                  <input
                    type="radio"
                    name="auraColor"
                    id="auraTwelve"
                    checked={this.state.auraColor === "auraTwelve"}
                    className="auraTwelve"
                    onChange={(e) => this.onChange(e, 'auraColor')}
                    value="auraTwelve"
                  />
                  ABCD
                </label>

                <label className="auraThirteen">
                  <input
                    type="radio"
                    name="auraColor"
                    id="auraThirteen"
                    checked={this.state.auraColor === "auraThirteen"}
                    className="auraThirteen"
                    onChange={(e) => this.onChange(e, 'auraColor')}
                    value="auraThirteen"
                  />
                  ABCD
                </label>
              </Col>

                <Col xs={12} sm={4} className="person-wrapper">
                <label className="auraSeven">
                    <input
                      type="radio"
                      name="auraColor"
                      id="auraSeven"
                      checked={this.state.auraColor === "auraSeven"}
                      className="auraSeven"
                      onChange={(e) => this.onChange(e, 'auraColor')}
                      value="auraSeven"
                    />
                  ABCD
                </label>

                <label className="auraEight">
                    <input
                      type="radio"
                      name="auraColor"
                      id="auraEight"
                      checked={this.state.auraColor === "auraEight"}
                      className="auraEight"
                      onChange={(e) => this.onChange(e, 'auraColor')}
                      value="auraEight"
                    />
                    ABCD
                  </label>

                  <label className="auraNine">
                    <input
                      type="radio"
                      name="auraColor"
                      id="auraNine"
                      checked={this.state.auraColor === "auraNine"}
                      className="auraNine"
                      onChange={(e) => this.onChange(e, 'auraColor')}
                      value="auraNine"
                    />
                    ABCD
                  </label>

                  <label className="auraTen">
                    <input
                      type="radio"
                      name="auraColor"
                      id="auraTen"
                      checked={this.state.auraColor === "auraTen"}
                      className="auraTen"
                      onChange={(e) => this.onChange(e, 'auraColor')}
                      value="auraTen"
                    />
                    ABCD
                  </label>

                  <label className="auraEleven">
                    <input
                      type="radio"
                      name="auraColor"
                      id="auraEleven"
                      checked={this.state.auraColor === "auraEleven"}
                      className="auraEleven"
                      onChange={(e) => this.onChange(e, 'auraColor')}
                      value="auraEleven"
                    />
                    ABCD
                  </label>
                  </Col>
                </Row>
                </fieldset>
            </Col>

            <Col xs={12} sm={4} className="person-wrapper">
              <button
                type="submit"
                className="btn btn-circle btn-xl"
                >
                Fortune Now!
              </button>
            </Col>
          </Row>
        </form>
      </Row>
      </Container>
    )
  }
}

HomepageForm.propTypes = {
  getNameAura: PropTypes.func.isRequired,
}

export default connect(null, { getNameAura })(withRouter(HomepageForm));
