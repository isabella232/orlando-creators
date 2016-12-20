import React from 'react';
import reset from 'glamor/reset';
import Head from 'next/head';

import Header from '../components/Header';
import CreatorsList from '../containers/CreatorsList';
import Footer from '../components/Footer';
import Parallax from '../components/Parallax';
import Global from '../styles/global';
import colors from '../styles/colors';

export default class extends React.Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
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
            <CreatorsList />
          </main>
          <Footer />
        </Parallax>
        <script src="https://use.typekit.net/fkk3wrp.js" async="true" />
        <script>{'try{Typekit.load({ async: true });}catch(e){}'}</script>
      </div>
    );
  }
}
