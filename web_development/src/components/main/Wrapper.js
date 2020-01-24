import React from 'react';
import { Container } from 'react-bootstrap';


const Wrapper = (props) => (

  <Container className=" mb-20 main">
  {props.children}
  </Container>

);

export default Wrapper;
