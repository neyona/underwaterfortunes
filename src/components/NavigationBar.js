// src/components/NavigationBar.js
import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import styled from 'styled-components';
import favicon from '../static/favicon.png';

const Styles = styled.div`
  .navbar {
    background-color: black;
  }
  a, .navbar-brand, .navbar-nav .nav-link {
    color: white;
    &:hover {
      color: white;
    }
  }
`;

export const NavigationBar = () => (
  <Styles>
    <Navbar fixed="top" expand="lg" variant="dark">
      <Navbar.Brand href="/">
        <img
          alt=""
          src={favicon}
          width="30"
          height="30"
          className="d-inline-block align-top"
        />
        {'   Underwater Fortune Teller'}
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/about">About</Nav.Link>
        <Nav.Link href="/merch">Merch</Nav.Link>
      </Nav>
    </Navbar.Collapse>
    </Navbar>
    </Styles>
)
