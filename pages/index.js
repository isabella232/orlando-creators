import React from 'react';
import { style } from 'next/css';
import Head from 'next/head';

import Header from '../components/Header';
import Footer from '../components/Footer';
import CreatorsList from '../containers/CreatorsList';
import Global from '../styles/global.js';

export default class extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Head>
          <style>{globalStyle}</style>
        </Head>
        <Header />
        <CreatorsList />
        <Footer />
      </div>
    );
  }
}

const globalStyle = Global;
