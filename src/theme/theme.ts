import { devices } from './devices';
import { display } from './display';

export const theme = {
  colors: {
    backgroundMain: '#181818',
    backgroundBlock: '#272727',
    backgroundActiveElem: '#FC5842',
    textPrimary: '#FFFFFF',
    textSecondary: '#C7C7C7',
    neutral: '#393939',
    hoverButton: '#DC2B2B',
    valid: '#05C168',
    filled: '#969696',
    error: '#FF5A65',
    status: {
      ACTIVE: '#05C168',
      INACTIVE: '#FF5A65',
      HOLD: '#FF9E2C',
    },
    active: {
      primary: '#FC5842',
      secondary: '#969696',
      main: '#393939',
    },
    inactive: {
      primary: '#393939',
      secondary: '#FFFFFF',
      main: '#FC5842',
    },
    primary: {
      initial: '#FC5842',
      hover: '#DC2B2B',
      hoverText: '#FFFFFF',
      text: '#FFFFFF',
    },
    secondary: {
      initial: '#FFFFFF',
      hover: '#FFFFFF',
      hoverText: '#DC2B2B',
      text: '#FC5842',
    },
  },
  fonts: {
    secondary: 'Inter',
    number: 'DM Sans',
  },
  sizes: {
    extraSmall: '0.8',
    small: '1',
    normal: '1.2',
    medium: '1.5',
    title: '2.4',
    big: '3',
  },
  devices,
  display,
};
