import React from 'react';
import Head from 'next/head';

import CreatorsList from '../containers/CreatorsList';
import Header from '../components/Header';
import Parallax from '../components/Parallax';

const pageTitle = 'Orlando Creators 🌴 an interview series featuring Orlando-based designers and artists';

export default () => (
  <Parallax>
    <Head>
      <title>{pageTitle}</title>
      <meta property="og:title" content={pageTitle} />
      <meta property="og:url" content="http://www.orlandocreators.com" />
      <meta property="og:image" content="/static/assets/orlando-creators.jpg" />
      <meta property="twitter:image" content="/static/assets/orlando-creators.jpg" />
      <meta property="twitter:site_name" content="http://www.orlandocreators.com" />
      <meta property="twitter:site" content="@orlandocreators" />
      <meta property="twitter:card" content="summary" />
      <meta property="twitter:description" content="An interview series celebrating the designers and visual artists that call the City Beautiful “home.”" />
    </Head>
    <main rel="main">
      <Header />
      <CreatorsList />
    </main>
  </Parallax>
);
