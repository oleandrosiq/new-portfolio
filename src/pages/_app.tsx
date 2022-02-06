import React from 'react';
import { AppProps } from 'next/app';
import { Toaster } from 'react-hot-toast';

import { GlobalStyles } from '../styles/GlobalStyles';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <React.Fragment>
      <Component {...pageProps} />
      {GlobalStyles()}
      <Toaster 
        position='top-center'
        reverseOrder={false}
      />
    </React.Fragment>
  );
}