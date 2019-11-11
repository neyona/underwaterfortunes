import React from "react";
import useForm from "react-hook-form";
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { connect } from 'react-redux';
import { getNameAura } from '../actions/fortuneActions';

import './HomePageForm.css';

const HomePageForm = (props) => {
    const { register, handleSubmit, errors } = useForm({
        defaultValues: {
            name: "",
            auraColor: "auraOne",
        }
    });

    const onSubmit = (values, e) => {
        e.preventDefault()
        // JSON.stringify(values);
        console.log("The following is values: ", values);
        console.log("The following is values stringified: ", JSON.stringify(values));
        // console.log("The following is data: ", data);
        props.getNameAura(values);
        props.history.push('/fortune');
    };

    return (
      <Container>
        <Row className="show grid text-center">
        <form
          onSubmit={handleSubmit(onSubmit)}>
          <Row className="show-grid text-center">
          <Col xs={12} sm={4} className="person-wrapper">
            <label className="legend">A Name, a Totally Real Name</label>
              <input
                type="text"
                name="name"
                ref={register({
                    required: "This is a required field (but you can input a fake name)",
                    pattern: {
                      value: /^[a-zA-Z -.]{2,30}$/,
                      message: "Wait! At least 2 letters, less than 30 letters, and letters, hyphens, periods, and spaces only please."
                    }
                })}
            />
            <br />
            <p style={{color: "pink"}}>{errors.name && errors.name.message}</p>
            <br />
          </Col>


          <Col xs={12} sm={4} className="person-wrapper">
              <label as="legend" className="legend">
                Current Aura Color:
                  </label>
                  <fieldset>
                    <Row className="show grid text-center">
                    <Col xs={12} sm={4} className="person-wrapper">
                    <label className="auraOne">
                      <input name="auraColor" type="radio" value="auraOne" ref={register({ required: true })}/>
                      ABCD
                    </label>

                    <label className="auraTwo">
                      <input name="auraColor" type="radio" value="auraTwo" ref={register({ required: true })}/>
                      ABCD
                    </label>

                    <label className="auraThree">
                      <input name="auraColor" type="radio" value="auraThree" ref={register({ required: true })}/>
                      ABCD
                    </label>

                    <label className="auraFour">
                      <input name="auraColor" type="radio" value="auraFour" ref={register({ required: true })}/>
                      ABCD
                    </label>

                    <label className="auraFive">
                      <input name="auraColor" type="radio" value="auraFive" ref={register({ required: true })}/>
                      ABCD
                    </label>
                  </Col>

                  <Col xs={12} sm={4} className="person-wrapper">
                    <label className="auraSix">
                      <input name="auraColor" type="radio" value="auraSix" ref={register({ required: true })}/>
                        {' '}What Aura?
                    </label>

                    <label className="auraTwelve">
                      <input name="auraColor" type="radio" value="auraTwelve" ref={register({ required: true })}/>
                        ABCD
                    </label>

                    <label className="auraThirteen">
                      <input name="auraColor" type="radio" value="auraThirteen" ref={register({ required: true })}/>
                      ABCD
                    </label>
                  </Col>

                  <Col xs={12} sm={4} className="person-wrapper">
                    <label className="auraSeven">
                      <input name="auraColor" type="radio" value="auraSeven" ref={register({ required: true })}/>
                        ABCD
                    </label>

                    <label className="auraEight">
                      <input name="auraColor" type="radio" value="auraEight" ref={register({ required: true })}/>
                        ABCD
                    </label>

                    <label className="auraNine">
                      <input name="auraColor" type="radio" value="auraNine" ref={register({ required: true })}/>
                        ABCD
                    </label>

                    <label className="auraTen">
                      <input name="auraColor" type="radio" value="auraTen" ref={register({ required: true })}/>
                        ABCD
                    </label>

                    <label className="auraEleven">
                      <input name="auraColor" type="radio" value="auraEleven" ref={register({ required: true })}/>
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
  );
}

HomePageForm.propTypes = {
  getNameAura: PropTypes.func.isRequired,
}

export default connect(null, { getNameAura })(withRouter(HomePageForm));
