import { devices } from './devices';
import { display } from './display';

export const theme = {
  colors: {
    backgroundMain: '#181818',
    backgroundBlock: '#272727',
    backgroundActiveElem: '#FC5842',
    textPrimary: '#FFFFFF',
    textSecondary: '#C7C7C7',
  },
  fonts: {
    secondary: 'Inter',
    number: 'DM Sans',
  },
  sizes: {
    small: '1',
    medium: '1.5',
    title: '2.4',
    big: '3',
  },
  devices,
  display,
};
