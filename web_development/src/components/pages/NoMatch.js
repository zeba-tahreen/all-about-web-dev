import React, { Fragment } from "react";
import { Link } from 'react-router-dom';
import { Nav, Card } from 'react-bootstrap';
import styled from 'styled-components';
import devpic from '../../assets/devpic.png';

const Styles = styled.div`
.navbar{
  height: 50px;
  background-color: black;
  border-bottom: 1px solid white;
}`

const NoMatch = () => (

  <Fragment>
    <Styles>
      <Nav className="navbar" />
    </Styles>
    <Card className="bg-dark text-white">
      <Card.Img src={`/${devpic}`} alt="Web dev" />
      <Card.ImgOverlay>
        <Card.Title>Card title</Card.Title>
        <Card.Text>
          This is a wider card with supporting text below as a natural lead-in to
          additional content. This content is a little bit longer.
        </Card.Text>
        <Card.Text>Last updated 3 mins ago</Card.Text>
      </Card.ImgOverlay>
    </Card>
  </Fragment>
);

export default NoMatch;
