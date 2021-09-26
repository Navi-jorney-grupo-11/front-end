import Head from 'next/head'
import { ThemeProvider } from 'styled-components';

import { theme } from '../styles/theme';
import GlobalStyle from '../styles/global';

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Head>
        <title>Happy Hours</title>
        <meta	name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
