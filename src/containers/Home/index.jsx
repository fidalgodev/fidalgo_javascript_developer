import * as React from 'react';

import { StaticImage } from 'gatsby-plugin-image';

import { Container, Wrapper, SocialsWrapper, List } from './style';
import { SubHeading, Heading } from '../../styles/typography';
import config from '../../../config/website';
import { getAge } from '../../utils';

export const HomePage = () => {
  return (
    <Container>
      <StaticImage
        alt="Background Image"
        className="background__image"
        src="../../images/background.jpg"
        objectPosition="55% center"
      />
      <Wrapper>
        <SubHeading>About me</SubHeading>
        <Heading>Hi, I&#39;m Fidalgo.</Heading>
        <p>
          Meet Fidalgo, a {getAge()}-year-old self-taught Software Developer
          from Leicester, currently working at Prolific as a Software Engineer.
        </p>
        <p>
          Back in October 2018, I felt the urge for change, so I began learning
          JavaScript before my regular work hours. It didn&apos;t take long for
          JavaScript to capture my interest, leading me to take a leap of faith
          in January 2019 by quitting my job to focus on it full-time. By July
          2019, I landed my first job in the UK and swiftly progressed to a Full
          Stack position, improving my JavaScript skills along the way.
        </p>
        <p>
          I love learning and growing. I believe in pushing myself and never
          settling. I&apos;m hardworking, curious, and always eager to learn
          more!
        </p>
        <SocialsWrapper>
          <SubHeading>Links</SubHeading>
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
              <a href="./curriculum.pdf" target="_blank" rel="noreferrer">
                curriculum vitae
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
