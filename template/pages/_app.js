import Preloader from '@/src/components/Preloader';
import { Fragment } from 'react';

import '@/styles/globals.css';
import '../public/css/skins/yellow.css';
import Head from 'next/head';

const App = ({ Component, pageProps }) => {
  return (
    <Fragment>
      <Head>
        {/* Basic meta tags */}
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      </Head>
      <Preloader />
      <Component {...pageProps} />
    </Fragment>
  );
};

export default App;