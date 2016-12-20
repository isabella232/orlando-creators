import React from 'react';
import Head from 'next/head';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Creator from '../../components/Creator';
import Parallax from '../../components/Parallax';
import Global from '../../styles/global.js';
import creators from '../../data/creators.json';

const creator = creators.find(item => (item.slug === 'justin-mezzell'));

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = { creator };
  }
  render() {
    return (
      <div>
        <Parallax>
          <main rel="main">
            <Head>
              <style>{Global}</style>
              <link rel="shortcut icon" href="/static/favicon.ico" />
            </Head>
            <Header />
            <Creator creator={this.state.creator} />
            <Footer />
          </main>
        </Parallax>
        <script src="https://use.typekit.net/fkk3wrp.js" async="true" />
        <script>{'try{Typekit.load({ async: true });}catch(e){}'}</script>
      </div>
    );
  }
}
