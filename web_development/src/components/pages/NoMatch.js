import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import { Nav, Card, Jumbotron } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
  .jumbomatch {
    box-shadow: 0 0 5px green;
    padding: 30px;
    margin-bottom: 5%;
    background-color: white;
  }
  .imagedisplay {
    height: 400px;
    width: auto;
  }
  .cardstyle {
    text-align: center;
    color: white;
  }
  .navlink {
    text-decoration: none;
    color: blue;
    font-weight: 1000px;
  }
`;

const NoMatch = () => (
  <Fragment>
    <Styles>
      <Jumbotron className='jumbomatch'>
        <Card>
          <Card.Img
            className='imagedisplay'
            src={require('../../assets/devpic.png')}
            alt='Web dev'
          />
          <Card.ImgOverlay>
            <Card.Text className='cardstyle'>
              <Card.Title
                className='cardstyle'
                style={{ color: 'green', fontSize: '24px' }}
              >
                Page Not Found
              </Card.Title>
              The page you are looking for no longer exists. Perhaps you can
              return back to the site’s homepage and see if you can find what
              you are looking for
            </Card.Text>
            <Card.Text className='cardstyle'>
              Go back
              <NavLink to='/' className='navlink'>
                {' '}
                Home
              </NavLink>
            </Card.Text>
          </Card.ImgOverlay>
        </Card>
      </Jumbotron>
    </Styles>
  </Fragment>
);

export default NoMatch;
