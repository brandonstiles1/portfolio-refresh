import React from 'react';
import { Heading, Flex, Box, Text } from 'rebass/styled-components';
import TextLoop from 'react-text-loop';
import Section from '../components/Section';
import SocialLink from '../components/SocialLink';
import { useScrollSection } from 'react-scroll-section';
import MouseIcon from '../components/ScrollIcon';
import Triangle from '../components/Triangle';
import { useSiteQuery } from '../queries/useSiteQuery';

const centerHorizontally = { marginRight: 'auto', marginLeft: 'auto' };

const LandingPage = () => {
  const { name, roles, description, socialLinks, deterministic } = useSiteQuery();
  const aboutSection = useScrollSection('about');

  return (
    <Section.Container id="home">
      <Heading
        textAlign="left"
        as="h1"
        color="primary"
        fontSize={[6, 7]}
        mb={4}
        fontWeight={400}
        >
        {`Hello, I'm ${name}`}
      </Heading>

      <Heading
        as="h3"
        color="secondary"
        fontSize={[3, 4]}
        mb={3}
        textAlign="left"
        fontWeight={400}
      >
        {description}
      </Heading>

      <MouseIcon onClick={aboutSection.onClick} />
    </Section.Container>
  );
};

const Background = () => (
  <>
    <Triangle
      color="muted"
      height={['20vh', '20vh']}
      width={['100vw', '100vw']}
      position="bottom-right"
    />
  </>
);

export default LandingPage;
