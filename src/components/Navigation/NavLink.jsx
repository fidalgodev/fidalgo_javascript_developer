import React from 'react';
import { StyledLink } from './style';

const NavLink = ({ children, ...rest }) => {
  return (
    <StyledLink activeClassName="active" {...rest}>
      {children}
    </StyledLink>
  );
};

export default NavLink;
