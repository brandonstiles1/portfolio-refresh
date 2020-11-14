import preset, { Theme } from '@rebass/preset';
import 'styled-components';

declare module 'styled-components' {
  // eslint-disable-next-line
  export interface DefaultTheme extends Theme {}
}

const BASE_THEME = preset as Theme;

const theme: Theme = {
  ...BASE_THEME,
  colors: {
    background: '#F8F9FA',
    muted: '#CED4DA',
    gray: '#6C757D',
    text: '#343A40',

    primary: '#212529',
    secondary: '#6C757D',
    highlight: '#ADB5BD',
  },
  queries: {
    xs: '@media screen and (max-width: 40em)',
    sm: '@media screen and (min-width: 40em) and (max-width: 52em)',
    md: '@media screen and (min-width: 52em) and (max-width: 64em)',
    lg: '@media screen and (min-width: 64em)',
  },
  buttons: {
    empty: {
      p: 0,
      border: 0,
      m: 0,
      background: 'transparent',
    },
  },
  fonts: {
    body: 'Helvetica, sans-serif',
    heading: 'inherit',
    monospace: 'monospace',
  },
};

export default theme;
