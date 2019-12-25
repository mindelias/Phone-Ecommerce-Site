import React, { Component } from "react";
import { Link } from "react-router-dom";
import Logo from "../images/web_services_logo-2.png";
import ButtonCont from './Button'
import styled from "styled-components"

export default class Navbar extends Component {
  render() {
    return (
      <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
        <Link to="/">
          <img
            src={Logo}
            alt="logo-img"
            width="70rem"
            className="navbar-brand mt-2"
          />
        </Link>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item ml-5">
            <Link to="/" className="nav-link text-white">
              products
            </Link>
          </li>
        </ul>
        <Link to = "/cart" className = "ml-auto mt-2">
        <ButtonCont>
            <i className = 'fas fa-cart-plus'/>
            my cart
        </ButtonCont>
        </Link>
      </NavWrapper>
    );
  }
}
const NavWrapper = styled.nav`
background:var(--mainBlue);
.nav-link{
    color:var(--mainWhite)!important;
    font-size:1.4rem;
    text-transform:capitalize;
}

`