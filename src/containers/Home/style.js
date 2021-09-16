import styled from 'styled-components';

import { ContainedWrapper } from '../../styles/elements';

export const Container = styled(ContainedWrapper)`
  & .background__image {
    position: absolute;
    right: 0;
    top: 0;
    width: 42.5%;
    height: 100%;
    z-index: -1;
    clip-path: polygon(30% 0%, 100% 0%, 100% 100%, 0% 100%);

    @media ${({ theme }) => theme.breakpoints.l} {
      display: none;
    }
  }
`;

export const Wrapper = styled.div`
  width: 62.5%;

  @media ${({ theme }) => theme.breakpoints.l} {
    width: 100%;
  }
`;

export const SocialsWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-top: 7rem;
  margin-bottom: 2rem;

  @media ${({ theme }) => theme.breakpoints.xs} {
    margin-top: 6rem;
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
    font-size: 1.8rem;

    & a {
      color: inherit;
    }

    &:not(:last-child) {
      margin-bottom: 2rem;
    }
  }
`;
