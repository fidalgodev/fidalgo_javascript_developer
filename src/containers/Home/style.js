import styled from 'styled-components';

import { Contained } from '../../styles/elements';

export const Container = styled.div`
  ${Contained}
  margin-top: 8rem;

  @media ${({ theme }) => theme.mediaQueries.small} {
    margin-top: 4rem;
  }

  & .background__image {
    position: absolute;
    right: 0;
    top: 0;
    width: 42.5%;
    height: 100vh;
    z-index: -1;
    clip-path: polygon(30% 0%, 100% 0%, 100% 100%, 0% 100%);

    @media ${({ theme }) => theme.mediaQueries.large} {
      display: none;
    }
  }
`;

export const Wrapper = styled.div`
  width: 62.5%;

  @media ${({ theme }) => theme.mediaQueries.large} {
    width: 100%;
  }
`;

export const Grid = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-top: 7rem;

  @media ${({ theme }) => theme.mediaQueries.smaller} {
    flex-direction: column;
    margin-top: 6rem;
    margin-bottom: 2rem;

    & h2:last-of-type {
      margin-top: 4rem;
    }
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-top: 0;
  list-style: none;

  & li {
    line-height: 1;
    color: var(--heading);
    font-weight: 500;
    font-size: 2rem;

    & a {
      color: inherit;
    }

    &:not(:last-child) {
      margin-bottom: 2rem;
    }
  }

  @media ${({ theme }) => theme.mediaQueries.smaller} {
    padding: 0;

    & li:first-child {
      margin-top: 1rem;
    }
  }
`;
