import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import { NavLink } from './NavLink';
import { Header, HeaderContainer, Logo } from './style';

const Navbar = () => {
  return (
    <Header>
      <HeaderContainer>
        <Logo to="/">
          <StaticImage
            alt="Logo"
            title="Logo"
            src="../../../static/images/logo.jpeg"
            width="50"
            height="50"
            imgClassName="logo"
            className="logoWrapper"
            placeholder="blurred"
          />
          fidalgo.dev
        </Logo>
        <nav>
          <NavLink to="/">about</NavLink>
        </nav>
      </HeaderContainer>
    </Header>
  );
};

export default Navbar;
