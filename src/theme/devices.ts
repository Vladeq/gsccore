import { display } from './display';

export const devices = Object.entries(display).reduce((accum, current) => {
  const [breakpoint, size] = current;
  accum[breakpoint] = `screen and (max-width: ${size})`;
  return accum;
}, {} as Record<string, string>);
