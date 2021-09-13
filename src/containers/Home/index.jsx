import * as React from 'react';

import { StaticImage } from 'gatsby-plugin-image';

import { Container, Wrapper, Grid, List } from './style';
import { SubHeading, Heading } from '../../styles/typography';

export const HomePage = () => {
  return (
    <Container>
      <StaticImage
        className="background__image"
        src="../../images/bckg.jpg"
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
        <Grid>
          <SubHeading>Skills</SubHeading>
          <List>
            <li>html</li>
            <li>css</li>
            <li>javascript</li>
            <li>react js</li>
            <li>node</li>
            <li>aws</li>
          </List>
          <SubHeading>Socials</SubHeading>
          <List>
            <li>
              <a
                href="https://www.instagram.com/fidalgo.dev"
                target="_blank"
                rel="noreferrer"
              >
                instagram
              </a>
            </li>
            <li>
              <a
                href="https://youtube.com/c/fidalgodev"
                target="_blank"
                rel="noreferrer"
              >
                youtube
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/fidalgodev"
                target="_blank"
                rel="noreferrer"
              >
                twitter
              </a>
            </li>
            <li>
              <a
                href="mailto:hello@fidalgo.dev"
                target="_blank"
                rel="noreferrer"
              >
                hello@fidalgo.dev
              </a>
            </li>
          </List>
        </Grid>
      </Wrapper>
    </Container>
  );
};
