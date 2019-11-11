import React, { Component, useState } from 'react';
import useForm from 'react-hook-form';
import Form from 'react-bootstrap/Form';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import './Contact.css';

const Button = styled.button`
  background-image: linear-gradient(90deg, SeaGreen, DeepSkyBlue);
  color: white;
  width: 200px;
  height: 150px;
  font-size: 24px;
  border: 7px solid DarkTurquoise;
  border-radius: 100px;
`;

function getCookie(name) {
    var cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var cookie = cookies[i].trim();
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}

const ContactForm = (props) => {
    const { register, errors, handleSubmit } = useForm({
      defaultValues: {
          name: "",
          email: "",
          messageinput: ""
      }
    });

    const onSubmit = ( values, e ) => {
      e.preventDefault()
      console.log("The following is values: ", values);
      console.log("The following is values stringified: ", JSON.stringify(values));
      // const { name, email, messageinput } = this.state;
      // const contact = { name, email, messageinput };
      const csrftoken = getCookie('csrftoken');
      const conf = {
        method: "POST",
        mode: 'same-origin',
        body: JSON.stringify(values),
        headers: new Headers({
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'X-CSRFToken': csrftoken
        })
      };
      fetch(props.endpoint, conf).then(response => console.log(response));
      props.history.push('/confirmation'); // moves to confirmation page when submitted
      };


    return (
      <Jumbotron className="jumbotron-contact">
        <h3>To contact the maker of this site, fill out and submit the form below.</h3>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group>
            <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                ref={register({
                  required: "This is a required field.",
                  pattern: {
                    value: /^[a-zA-Z -.]{2,30}$/,
                    message: "Wait! At least 2 letters, less than 30 letters, and letters, hyphens, periods, and spaces only please."
                  }
                })}
          />
          <p style={{color: "palegreen"}}>{errors.name && errors.name.message}</p>
          <br />
          </Form.Group>
          <Form.Group>
            <Form.Label>Email</Form.Label>
              <Form.Control
                type="text"
                name="email"
                ref={register({
                    required: "This is a required field.",
                    pattern: {
                        value: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                        message: "Email submitted in an email pattern."
                    }
                })}
            />
            <p style={{color: "palegreen"}}>{errors.email && errors.email.message}</p>
            <br />
          </Form.Group>
          <Form.Group>
            <Form.Label>Message</Form.Label>
              <Form.Control
                type="textarea"
                name="messageinput"
                as="textarea"
                rows="5"
                ref={register({
                    required: true,
                    validate: {
                        greaterOne: value => value.length > 1,
                        lessFivethousand: value => value.length < 5001
                    }
                })}
            />
            {errors.messageinput && errors.messageinput.type === "greaterOne" && (
            <p style={{color: "palegreen"}}>At least two letters please.</p>
            )}
            {errors.messageinput && errors.name.messageinput === "lessFivethousand" && (
            <p style={{color: "palegreen"}}>Please less than 5000 characters.</p>
            )}
            <br />
          </Form.Group>
      <hr color="white" weight="2px" />
        <Row className="show grid text-center">
          <Container className="container-custom">
            <Button type="submit">
              Submit Message
            </Button>
          </Container>
        </Row>
        </Form>
      </Jumbotron>
    );
 }

export default withRouter(ContactForm);
