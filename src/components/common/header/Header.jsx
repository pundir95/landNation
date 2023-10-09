// import React from 'react'
import React, { Component } from 'react';
import { Navbar , Container , Nav } from 'react-bootstrap';
import logoImg from '../../../assets/images/LandNation.svg'
import closeIcon from '../../../assets/images/close-btn.svg'


const Header = ({scrolled}) => {
    
  return (
        <>
        <Navbar expand="lg" className={scrolled ? "header-custom fixed-top scrolled" : "header-custom fixed-top"}>
            <Container>
                <Navbar.Brand className='header-logo' href="/">
                    <img src={logoImg} />
                </Navbar.Brand>
                <Navbar.Toggle className='header-toggle' aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <button className='close-btn-icon'><img src={closeIcon}/></button>
                    <Nav className="ms-auto header-listing">
                        <Nav.Link className="header-link active" href="#">Explore Land</Nav.Link>
                        <Nav.Link className="header-link" href="#">Search By State</Nav.Link>
                        <Nav.Link className="header-link" href="#">Add a Listing</Nav.Link>
                        <Nav.Link className="header-link" href="#">Buyer Sign Up</Nav.Link>
                        <Nav.Link className="header-link" href="#">Login</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </>
  )
}

export default Header