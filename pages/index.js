import React from 'react';
import Head from 'next/head';

import CreatorsList from '../containers/CreatorsList';
import Header from '../components/Header';
import Parallax from '../components/Parallax';

const pageTitle = 'Orlando Creators | a short interview series featuring local designers and artists';

export default () => (
  <Parallax>
    <Head><title>{ pageTitle }</title></Head>
    <main rel="main">
      <Header />
      <CreatorsList />
    </main>
  </Parallax>
);
