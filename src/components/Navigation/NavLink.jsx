import React from 'react';
import { NavLink as StyledNavLink } from './style';

export const NavLink = ({ children, ...rest }) => {
  return (
    <StyledNavLink activeClassName="active" {...rest}>
      {children}
    </StyledNavLink>
  );
};
