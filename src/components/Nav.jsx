import React from "react";
import {NavLink} from 'react-router-dom';
import logo from '../images/logo.svg'
import styled from "styled-components";

const Nav = () => {
    return (
        <Navbar>
          <img src={logo} alt="logo"
          width={174}
          height={66}
          />
        </Navbar>
    );
}
const Navbar = styled.nav`
margin: 0 0 7%;
display: flex;
justify-content: center;
`;
export default Nav;