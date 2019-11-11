import React from 'react';
import ReactDOM from 'react-dom';
import Container from 'react-bootstrap/Container';
import ContactForm from '../contacts/ContactForm';

const ContactPage = () => (
  <Container>
    <ContactForm endpoint="api/contact/" />
  </Container>
);

export default ContactPage;
