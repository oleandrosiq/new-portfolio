import React from 'react';
import { AppProps } from 'next/app';

import { GlobalStyles } from '../styles/GlobalStyles';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <React.Fragment>
      <Component {...pageProps} />
      {GlobalStyles()}
    </React.Fragment>
  );
}