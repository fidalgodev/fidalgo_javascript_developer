import React from 'react';
import { ThemeProvider } from 'styled-components';

import SEO from '../components/SEO';
import GlobalStyles from '../styles/global';
import theme from '../../config/theme';
// import Navbar from './Navigation/Navbar';

export const Layout = ({ children, noNav = false }) => {
  return (
    <ThemeProvider theme={theme}>
      <SEO />
      {/* {!noNav && <Navbar />} */}
      <main>{children}</main>
      <GlobalStyles />
    </ThemeProvider>
  );
};
