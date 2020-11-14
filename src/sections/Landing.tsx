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
    <Section.Container id="home" Background={Background}>
      <Heading
        textAlign="left"
        as="h1"
        color="primary"
        fontSize={[6, 7]}
        mb={[3, 4, 5]}
      >
        {`Hello, I'm ${name}`}
      </Heading>

      <Heading
        as="h3"
        color="secondary"
        fontSize={[3, 4]}
        mb={[3, 5]}
        textAlign="left"
        // style={centerHorizontally}
      >
        {description}
        {/* <TextLoop interval={5000}>
          {roles
            .sort(() => (deterministic ? 1 : Math.random() - 0.5))
            .map((text) => (
              <Text width={[300, 500]} key={text}>
                {text}
              </Text>
            ))}
        </TextLoop> */}
      </Heading>

      <Flex alignItems="left" justifyContent="left" flexWrap="wrap">
        {socialLinks.map((sl) => (
          <Box mx={3} fontSize={[5, 6, 6]} key={sl.name}>
            <SocialLink {...sl} />
          </Box>
        ))}
      </Flex>

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
