import styled, { css } from 'styled-components';

export const ContainedStyles = css`
  max-width: 170rem;
  margin: 0 auto;
  padding: 0 80px;

  @media ${({ theme }) => theme.breakpoints.m} {
    padding: 0 60px;
  }

  @media ${({ theme }) => theme.breakpoints.s} {
    padding: 0 20px;
  }
`;

export const ContainedWrapper = styled.div`
  ${ContainedStyles}
  margin-top: 8rem;

  @media ${({ theme }) => theme.breakpoints.s} {
    margin-top: 6rem;
  }
`;
