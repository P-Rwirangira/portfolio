import Preloader from '../components/Preloader';
import ThemeSwitcher from '../components/ThemeSwitcher';
import { Fragment } from 'react';

import '../styles/globals.css';

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
      <ThemeSwitcher />
      <Component {...pageProps} />
          </Fragment>
  );
};

export default App;