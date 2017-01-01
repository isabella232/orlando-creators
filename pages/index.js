import React from 'react';
import Head from 'next/head';

import CreatorsList from '../containers/CreatorsList';
import Header from '../components/Header';
import Parallax from '../components/Parallax';

const pageTitle = 'Orlando Creators 🌴 an interview series featuring Orlando-based designers and artists';

export default () => (
  <Parallax>
    <Head>
      <title>{ pageTitle }</title>
      <meta type="og:image" content="/static/assets/orlando-creators.jpg" />
      <meta type="twitter:image" content="/static/assets/orlando-creators.jpg" />
    </Head>
    <main rel="main">
      <Header />
      <CreatorsList />
    </main>
  </Parallax>
);
