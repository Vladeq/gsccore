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
  },
  fonts: {
    secondary: 'Inter',
    number: 'DM Sans',
  },
  sizes: {
    extraSmall: '0.8',
    small: '1',
    medium: '1.5',
    title: '2.4',
    big: '3',
  },
  devices,
  display,
};
