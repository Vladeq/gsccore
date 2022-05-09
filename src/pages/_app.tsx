import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

import { persistor, store } from '../store';
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
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ThemeProvider theme={theme}>
            <Component {...pageProps} />
          </ThemeProvider>
        </PersistGate>
      </Provider>
    </>
  );
}

const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: 'THICCCBOI';
    src: url("/fonts/THICCCBOI-Bold.woff2") format("woff2");
    font-display: fallback;
    font-weight: bold;
}
@font-face {
  font-family: 'THICCCBOI';
  src: url("/fonts/THICCCBOI-Medium.woff2") format("woff2");
  font-display: fallback;
  font-weight: medium;
}
@font-face {
  font-family: 'THICCCBOI';
  src: url("/fonts/THICCCBOI-Regular.woff2") format("woff2");
  font-display: fallback;
  font-weight: regular;
}
html {
  background: ${theme.colors.backgroundMain};
  font-family: 'THICCCBOI';
  font-size: 18px;
}
body {
  margin: 0;
}
`;
