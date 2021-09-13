import { css } from 'styled-components';

// Contained wrapper
export const Contained = css`
  max-width: 170rem;
  margin: 0 auto;
  padding: 0 80px;

  @media ${({ theme }) => theme.mediaQueries.medium} {
    padding: 0 60px;
  }

  @media ${({ theme }) => theme.mediaQueries.small} {
    padding: 0 20px;
  }
`;
