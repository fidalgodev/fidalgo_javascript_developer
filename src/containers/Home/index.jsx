import * as React from 'react';

import { StaticImage } from 'gatsby-plugin-image';

import { Container, Wrapper, SocialsWrapper, List } from './style';
import { SubHeading, Heading } from '../../styles/typography';
import config from '../../../config/website';

export const HomePage = () => {
  return (
    <Container>
      <StaticImage
        className="background__image"
        src="../../../static/images/bckg.jpg"
        objectPosition="left top"
      />
      <Wrapper>
        <SubHeading>About me</SubHeading>
        <Heading>Hi, I&#39;m Fidalgo.</Heading>
        <p>
          I&#39;m Fidalgo, a 25 years old self-taught Javascript Developer,
          currently living in Leicester.
        </p>
        <p>
          In October 2018 I decided it was time for a change, so I started to
          wake up at 6am to study Javascript before going into work. I quickly
          started to love Javascript and in January 2019 I decided to take the
          risk and quit my job. I then studied Javascript until July 2019, where
          I landed my first job at Mindera UK. I quickly improved my Javascript
          skills here and transitioned to a Full Stack position.
        </p>
        <p>
          I always want to learn moreand do more. I&#39;m also a firm believer
          that we should never settle. I&#39;m hard working, super curious,
          passionate, committed and a fast learner!
        </p>
        <SocialsWrapper>
          <SubHeading>Socials</SubHeading>
          <List>
            <li>
              <a href={config.github} target="_blank" rel="noreferrer">
                github
              </a>
            </li>
            <li>
              <a href={config.instagram} target="_blank" rel="noreferrer">
                instagram
              </a>
            </li>
            <li>
              <a href={config.youtube} target="_blank" rel="noreferrer">
                youtube
              </a>
            </li>
            <li>
              <a href={config.twitter} target="_blank" rel="noreferrer">
                twitter
              </a>
            </li>
            <li>
              <a href={config.linkedin} target="_blank" rel="noreferrer">
                linkedin
              </a>
            </li>
            <li>
              <a
                href={`mailto:${config.email}`}
                target="_blank"
                rel="noreferrer"
              >
                {config.email}
              </a>
            </li>
          </List>
        </SocialsWrapper>
      </Wrapper>
    </Container>
  );
};
