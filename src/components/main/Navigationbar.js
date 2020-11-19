import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
.navbar{
    background-color: black;
    border-bottom: 1px solid white;
}
.navbar-toggler-icon{
    background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='green' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 8h24M4 16h24M4 24h24'/%3E%3C/svg%3E");
}
.toggleNav{
    border: 1px solid green;
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
    
`;

const Navigationbar = () => (
  <Styles>
    <Navbar expand='lg'>
      <Navbar.Brand as={Link} to='/'>
        WEB DEV
      </Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' className='toggleNav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='ml-auto mr-auto'>
          <Nav.Link as={NavLink} to='/' exact activeStyle={{ color: 'blue' }}>
            Home
          </Nav.Link>
          <Nav.Link
            as={NavLink}
            to='/developers'
            exact
            activeStyle={{ color: 'blue' }}
          >
            Developer
          </Nav.Link>
          <Nav.Link
            as={NavLink}
            to='/fullstack'
            exact
            activeStyle={{ color: 'blue' }}
          >
            Full Stacks
          </Nav.Link>
          <Nav.Link as={NavLink} to='/javascript' exact activeStyle={{ color:'blue'}}>JavaScript</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles>
);

export default Navigationbar;
