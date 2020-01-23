import React from 'react';
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';
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

.header{
    color: green;
}
`;

const Jumbotron = () => (
        <Styles>
            <Jumbo fluid className="jumbo">
                <div className="overlay">
                    <Container>
                        <h1 className=" header mt-5">
                        All About Web Development
                        </h1>
                        <p>
                        A beginner's guide...
                        </p>
                    </Container>
                </div>
            </Jumbo>
        </Styles>
);

export default Jumbotron; 