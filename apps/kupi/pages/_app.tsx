import { AppProps } from 'next/app';
import Head from 'next/head';
import { Fragment } from 'react';

import '../styles/global.scss';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <Head>
        <title>Welcome to Kupi!</title>
        <meta property="og:title" content="Welcome to Kupi!" key="title" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      </Head>
      <main className="app">
        <Component {...pageProps} />
      </main>
    </Fragment>
  );
}

export default CustomApp;
