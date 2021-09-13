import React from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyles from '../styles/global';
import theme from '../styles/theme';
import Navbar from './Navigation/Navbar';

export const Layout = ({ children, noNav = false }) => {
  return (
    <ThemeProvider theme={theme}>
      {!noNav && <Navbar />}
      <main>{children}</main>
      <GlobalStyles />
    </ThemeProvider>
  );
};
