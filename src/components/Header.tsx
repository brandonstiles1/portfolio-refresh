import React from 'react';
import Headroom from 'react-headroom';
import { Box, Button, Flex, Image } from 'rebass/styled-components';
import styled from 'styled-components';
import Link from './Link';
import Logo from '../assets/Logo.svg';
import { capitalize } from '../utils/string';
import { useHelmetQuery } from '../queries/useHelmetQuery';

const Header = () => {
  return(
    <HeaderContainer>
      <Image
        src={Logo}
        height={['60px', '60px']}
        width={['60px', '60px']}
        alt="Portfolio Logo"
        p={2}
        css={{ 
          borderRadius: '0px 0px 20px 20px', 
          cursor: 'pointer', 
          position: 'fixed', 
          top: '-10px' 
        }}
        />
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
  position: absolute;
  top: 0;
  width: 80vw;
  margin: auto;
  left: 0;
  right: 0;
`;

export default Header;
