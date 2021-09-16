import React from 'react';
import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';

import SEO from '../components/SEO';
import GlobalStyles from '../styles/global';
import theme from '../../config/theme';
import Navbar from './Navigation/Navbar';

const MainWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const Layout = ({ children, noNav = false }) => {
  return (
    <ThemeProvider theme={theme}>
      <SEO />
      <MainWrapper>
        {!noNav && <Navbar />}
        <main>{children}</main>
      </MainWrapper>
      <GlobalStyles />
    </ThemeProvider>
  );
};
