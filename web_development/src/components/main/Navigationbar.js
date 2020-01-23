import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
.navbar{
    background-color: black;
    border-bottom: 1px solid white;
}
.navbar-brand, .navbar-nav .nav-link{
    color:#bbb;


    &:hover {
        color:white;
        -webkit-text-fill-color: black; /* Will override color (regardless of order) */
        -webkit-text-stroke-width: 1px;
        -webkit-text-stroke-color: green;
    }
}
@media (min-width: 1024px){
    .navbar-brand {
        display: none;
    }
`

const Navigationbar = () => (
    <Styles>
        <Navbar expand="lg">
            <Navbar.Brand href="/">WEB DEV</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto mr-auto">
                    <Nav.Item className="span">
                        <Nav.Link>
                            <Link to="/">Home</Link>
                        </Nav.Link>
                    </Nav.Item >
                    <Nav.Item>
                        <Nav.Link>
                            <Link to="/developers">Developer</Link>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link>
                            <Link to="/fullstack">Full Stacks</Link>
                        </Nav.Link>
                    </Nav.Item >
                    {/* <Nav.Item >
                        <Nav.Link>
                            <Link to="/contact">Contact</Link>
                        </Nav.Link>
                    </Nav.Item> */}
                    </Nav>
            </Navbar.Collapse>
        </Navbar>
    </Styles>
)


export default Navigationbar;