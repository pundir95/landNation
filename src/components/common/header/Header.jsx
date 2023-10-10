// import React from 'react'
import React, { Component } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import logoImg from "../../../assets/images/LandNation.svg";
import closeIcon from "../../../assets/images/close-btn.svg";
import { HEADER_MENU } from "./utils";
import { useLocation,Link} from "react-router-dom";

const Header = ({ scrolled }) => {
  let location = useLocation();
  
  return (
    <>
      <Navbar
        expand="lg"
        className={
          scrolled
            ? "header-custom fixed-top scrolled"
            : "header-custom fixed-top active-header"
        }
      >
        <Container>
          <Navbar.Brand className="header-logo" href="/">
            <img src={logoImg} />
          </Navbar.Brand>
          <Navbar.Toggle
            className="header-toggle"
            aria-controls="basic-navbar-nav"
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <button className="close-btn-icon">
              <img src={closeIcon} />
            </button>
            <Nav className="ms-auto header-listing">
              {HEADER_MENU?.map((item) => {
                return (
                  <>
                    <Link
                      to={item.link}
                      className={`header-link ${
                        location.pathname == item.link ? "active" : ""
                      }`}
                    >
                      {item.name}
                    </Link>
                  </>
                );
              })}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
