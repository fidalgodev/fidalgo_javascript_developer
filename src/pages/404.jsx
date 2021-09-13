import * as React from 'react';
import styled from 'styled-components';

import { SubHeading, Heading } from '../styles/typography';

import { NavLink } from '../components/Navigation/NavLink';
import { Layout } from '../components/Layout';
import { ContainedStyles } from '../styles/elements';

const PageWrapper = styled.div`
  ${ContainedStyles}
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
`;

const NotFoundPage = () => {
  return (
    <Layout noNav>
      <PageWrapper>
        <SubHeading>Oops!</SubHeading>
        <Heading>This page does not exist.</Heading>
        <NavLink to="/">go back home</NavLink>
      </PageWrapper>
    </Layout>
  );
};

export default NotFoundPage;
