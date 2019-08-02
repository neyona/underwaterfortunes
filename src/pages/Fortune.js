// src/page_component/Fortune.js
import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import FortuneJumbotron from '../components/FortuneJumbotron';


export default class Fortune extends Component {
  render() {
    return (
        <div>
          <Container>
              <FortuneJumbotron />
          </Container>
      </div>
    )
  }
}
