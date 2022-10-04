import { AppProps } from 'next/app';
import Head from 'next/head';
import { Fragment } from 'react';

import '../styles/global.scss';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <Head>
        <title>Welcome to kupi!</title>
        <link rel="icon" type="image/x-icon" href="favicon.ico" />
      </Head>
      <main className="app">
        <Component {...pageProps} />
      </main>
    </Fragment>
  );
}

export default CustomApp;
