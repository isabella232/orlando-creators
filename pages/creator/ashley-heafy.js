import React from 'react';
import Head from 'next/head';

import Header from '../../components/Header';
import Creator from '../../components/Creator';
import Parallax from '../../components/Parallax';

import artworks from '../../artworks/ashley-heafy';
import transcript from '../../transcripts/ashley-heafy';
import creators from '../../data/creators.json';

const creator = creators.find(item => (item.slug === 'ashley-heafy'));
const pageTitle = 'Ashley Heafy 🌴 Orlando Creators';

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      artworks,
      creator,
      transcript,
    };
  }
  render() {
    return (
      <Parallax>
        <main rel="main">
          <Head>
            <title>{pageTitle}</title>
            <meta property="og:title" content={pageTitle} />
            <meta property="og:url" content={`http://www.orlandocreators.com/creator/${creator.slug}`} />
            <meta property="og:image" content={`/static/assets/${creator.slug}-preview.jpg`} />
            <meta property="twitter:image" content={`/static/assets/${creator.slug}-preview.jpg`} />
            <meta property="twitter:site_name" content="http://www.orlandocreators.com" />
            <meta property="twitter:site" content="@orlandocreators" />
            <meta property="twitter:card" content="summary" />
            <meta property="twitter:description" content={creator.description} />
          </Head>
          <Header />
          <Creator
            creator={this.state.creator}
            transcript={this.state.transcript}
            artworks={this.state.artworks}
          />
        </main>
      </Parallax>
    );
  }
}
