import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import FortuneJumbotron from '../other/FortuneJumbotron';


export default class FortunePage extends Component {
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
