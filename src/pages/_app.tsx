import type { AppProps } from 'next/app';
import Head from 'next/head';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

import { theme } from '../theme/theme';

export default function GscoreApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@500&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@700&family=Inter:wght@500&display=swap"
          rel="stylesheet"
        />
        <title>Gscrore</title>
      </Head>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: 'THICCCBOI';
    src: url("/public/fonts/THICCCBOI-Medium") format("woff2");
    font-display: fallback;
}
html {
  background: ${theme.colors.backgroundMain};
  font-family: 'THICCCBOI';
  font-size: 18px;
}
`;
