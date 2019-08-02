// src/pages/Home.js
import React, { Component } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Figure from 'react-bootstrap/Figure';
import HomepageForm from '../form_components/HomepageForm';

import First_Page_CuttleFish from '../static/First_Page_Cuttlefish.jpg';
import './Home.css';


export default class Home extends Component {
  render() {
      return (
        <div>
              <Jumbotron>
                <Container>
                  <Row>
                    <Col xs={12} sm={5} className="person-wrapper">
                      <Figure>
                        <Figure.Image
                          width={400}
                          height={300}
                          alt="200x300"
                          src={First_Page_CuttleFish}
                          className="img"
                        />
                      <Figure.Caption align="center" className="figure-caption">
                          It's me, the Fortune Giver
                        </Figure.Caption>
                      </Figure>
                    </Col>
                    <Col xs={12} sm={7} className="person-wrapper">
                      <h2>Hello I am the Underwater Fortune Giver. Would you like some guidance by way of a fortune . . . </h2>
                    </Col>
                  </Row>
                  <Row>
                      <p>. . . Are you feeling brave? If you would like your fortune, please enter your name or a fake name
                       of your choosing (letters, spaces, and hyphens only please), and choose the CURRENT color of your aura.</p>
                   </Row>
                   <Row>
                     <Container className="container">
                      <h3 className="special-title">THEN PUSH THE BUTTON!</h3>
                    </Container>
                  </Row>
                  </Container>
                    <HomepageForm />
                  <Container>
                  </Container>
              </Jumbotron>
     </div>
    )
  }
}
