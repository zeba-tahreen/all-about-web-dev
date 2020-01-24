import React from 'react';
import { Jumbotron, Container } from 'react-bootstrap';
import styled from 'styled-components';
import devpic from '../../assets/devpic.png';

const Styles = styled.div `
.jumbo{
    background: url(${devpic}) no-repeat fixed bottom;
    background-size: cover;
    color: whitesmoke;
    border-bottom: 2px solid blue;
    height: 200px;
    position: relative;
    z-index: -2;
}
.overlay{
    background-color: #000;
    opacity:0.6;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
}
.header-main{
    width:auto;
    height:100px;
}
.header{
    color: green;
}
h4{
    color:blue;
}
`;

const Jumbo = () => (
        <Styles>
            <Jumbotron fluid className="jumbo">
                <div className="overlay">
                    <Container>
                        <div className="header-main">
                        <h2 className="mt-5 header">All About Web Development</h2>
                        <p className="journey-intro">My Journey to Become a Web Developer</p>
                        <h4 className="text-right">Enjoy each and every step !!</h4>
                        </div>
                    </Container>
                </div>
            </Jumbotron>
        </Styles>
);

export default Jumbo; 