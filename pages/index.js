import React from 'react';
import { style } from 'next/css';
import Head from 'next/head';

import Header from '../components/Header';
import Footer from '../components/Footer';
import CreatorsList from '../containers/CreatorsList';
import Global from '../styles/global';

export default class extends React.Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
  }
  render() {
    return (
      <div>
        <main rel="main">
          <Head>
            <style>{Global}</style>
          </Head>
          <Header />
          <CreatorsList />
          <Footer />
        </main>
        <script src="https://use.typekit.net/fkk3wrp.js" async="true" />
        <script>{'try{Typekit.load({ async: true });}catch(e){}'}</script>
      </div>
    );
  }
}
