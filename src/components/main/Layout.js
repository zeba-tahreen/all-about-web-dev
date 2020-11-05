import React from 'react';
import { Container } from 'react-bootstrap';
import styled from 'styled-components';

const WrapperLayout = styled.div`
  .containerLayout {
    box-shadow: 0 0 5px green;
    padding: 30px;
    margin-bottom: 5%;
  }
`;
const Layout = ({ Children }) => (
  <WrapperLayout>
    <Container className='containerLayout'>{Children}</Container>
  </WrapperLayout>
);

export default Layout;
