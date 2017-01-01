import React from 'react';
import Head from 'next/head';

import Header from '../../components/Header';
import Creator from '../../components/Creator';
import Parallax from '../../components/Parallax';

import artworks from '../../artworks/justin-mezzell';
import transcript from '../../transcripts/justin-mezzell';
import creators from '../../data/creators.json';

const creator = creators.find(item => (item.slug === 'justin-mezzell'));

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
            <title>Justin Mezzell 🌴 Orlando Creators</title>
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
