import styled, { css } from 'styled-components';
import { Link } from 'gatsby';
import { ContainedStyles } from '../../styles/elements';

export const Header = styled.header`
  background-color: var(--navbackground);
  height: 8rem;
  padding: 2rem 0;
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
`;

export const HeaderContainer = styled.div`
  ${ContainedStyles}
  display: flex;
  align-items: center;
  height: 100%;
`;

export const Logo = styled(Link)`
  font-family: 'Roboto Mono', sans-serif;
  text-decoration: line-through;
  font-size: 2.4rem;
  font-weight: 700;
  margin-right: auto;
  display: flex;
  align-items: center;
  color: var(--heading);

  & .logoWrapper {
    margin-right: 1.5rem;
  }

  & .gatsby-image-wrapper {
    border-radius: 50%;
  }

  &:hover {
    text-decoration: line-through;
  }
`;

export const LinkStyles = css`
  font-size: 1.8rem;
  padding: 2rem;
  font-weight: 600;
  color: var(--subheading);

  &:hover,
  &.active {
    color: var(--heading);
    text-decoration: underline;
    transition: ${({ theme }) => theme.transition.ease};
  }
`;

export const NavLink = styled(Link)`
  ${LinkStyles}

  &:not(:last-child) {
    margin-right: 3rem;
  }
`;
