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

const DeepCopy = () => {
  const { name, roles, description, socialLinks, deterministic } = useSiteQuery();
  const aboutSection = useScrollSection('about');

  return (
    <div style={{backgroundColor: '#343A40', width: '100%', height: '100%'}}>
      <Section.Container id="DeepCopySection">
          <Heading
            textAlign="left"
            as="h1"
            color="white"
            fontSize={6}
            mb={4}
            fontWeight={400}
            >
            {`Deep Copy App`}
          </Heading>

          <Heading
            as="h3"
            color="white"
            fontSize={[3, 4]}
            mb={3}
            textAlign="left"
            fontWeight={400}
            width='40vw'
            lineHeight='2.2rem'
          >
            {description}
          </Heading>

        </Section.Container>
      </div>
  );
};

export default DeepCopy;
