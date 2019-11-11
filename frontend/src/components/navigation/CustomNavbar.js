import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import styled from 'styled-components';
import favicon from '../static/favicon.png';

const Styles = styled.div`
.navbar {
  background-color: black;
  font-weight: bold;
  color: cyan !important;
}
.nav {
  color: palegreen;
}
.nav-link {
  color: palegreen;
}
button.navbar-toggler {
  background: None;
  border-color: cyan;
  border-weight: 2px;
}
span.navbar-toggler-icon {
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(0,255,255, 0.9)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 8h24M4 16h24M4 24h24'/%3E%3C/svg%3E");
}
`;


const CustomNavbar = () => (
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
        {'    Underwater Fortune Teller'}
      </Navbar.Brand>
      <Navbar.Toggle className="ml-auto"/>
        <Navbar.Collapse className="ml-auto">
          <Nav>
            <Nav.Link className="ml-auto" href="/">Home</Nav.Link>
            <Nav.Link className="ml-auto" href="/about">About</Nav.Link>
            <Nav.Link className="ml-auto" href="/merch">Merch</Nav.Link>
            <Nav.Link className="ml-auto" href="/contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
  </Styles>
);

export default CustomNavbar;
