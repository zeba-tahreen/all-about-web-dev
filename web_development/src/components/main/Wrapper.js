import React from 'react'
import { Container } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
.main-div{
  border: 2px solid green;

}


`;

const Wrapper = () => (
  <Styles>
    <Container className="main-div">
      <div>
        
      </div>
    </Container>

  </Styles>
);

export default Wrapper;
