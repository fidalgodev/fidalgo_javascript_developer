import styled from 'styled-components';
import { Link } from 'gatsby';
import { Contained } from '../../styles/elements';

export const Header = styled.header`
  background-color: var(--navbarbckg);
  height: 9rem;
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
`;

export const HeaderContainer = styled.div`
  ${Contained}
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

  & .logoWrapper {
    margin-right: 1.5rem;
  }

  & .logo {
    border-radius: 50%;
  }
`;

export const StyledLink = styled(Link)`
  font-size: 1.8rem;
  padding: 2rem;
  font-weight: 600;
  color: var(--navbartext);

  &:hover,
  &.active {
    color: var(--text);
    text-decoration: underline;
    transition: all 200ms linear;
  }

  &:not(:last-child) {
    margin-right: 3rem;
  }
`;
