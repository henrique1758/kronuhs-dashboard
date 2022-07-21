import type { AppProps } from 'next/app';
import { Toaster } from 'react-hot-toast';
import { ThemeProvider } from 'styled-components';
import { Providers } from '../contexts/Providers';
import { GlobalStyle } from '../styles/global';
import { theme } from '../styles/theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Providers>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
        <Toaster />

        <GlobalStyle />
      </ThemeProvider>
    </Providers>
  );
}

export default MyApp
