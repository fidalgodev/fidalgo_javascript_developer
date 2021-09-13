import * as React from 'react';

import { SubHeading, Heading } from '../styles/typography';
import { ContainedWrapper } from '../styles/elements';
import { NavLink } from '../components/Navigation/NavLink';

const NotFoundPage = () => {
  return (
    <ContainedWrapper>
      <SubHeading>Upps!</SubHeading>
      <Heading>Sorry, this page doesn&#39;t exist.</Heading>
      <NavLink to="/">Go Back home</NavLink>
    </ContainedWrapper>
  );
};

export default NotFoundPage;
