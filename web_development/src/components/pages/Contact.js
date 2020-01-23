import React from 'react';
import { Container, } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
.main-div{
  box-shadow: 0 0 5px green;
  padding: 30px;
  margin-bottom:5%;
}


`;

const Contact = () => (
  <Styles>
    <Container className=" mb-20 main">
    <Container className="main-div">
      <div className="contact-main">

      </div>
    </Container>

    </Container>

  </Styles>
);

export default Contact;
