export const breakpoints = {
  mobileS: 320,
  mobileM: 375,
  mobileL: 425,
  tabletXS: 500,
  tabletS: 600,
  tablet: 768,
  laptop: 1024,
  laptopM: 1280,
  laptopL: 1440,
};

export const display = Object.entries(breakpoints).reduce((accum, current) => {
  const [breakpoint, size] = current;
  accum[breakpoint] = `${size}px`;
  return accum;
}, {} as Record<string, string>);
