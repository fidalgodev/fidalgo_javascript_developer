import React from 'react';
import { ThemeProvider } from 'styled-components';
import '@fontsource/roboto';
import '@fontsource/roboto-mono';

import GlobalStyles from '../styles/global';
import theme from '../styles/theme';
import Navbar from './Navigation/Navbar';

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      {children}
      <GlobalStyles />
    </ThemeProvider>
  );
};

export default Layout;
