import React from 'react';
import { style } from 'next/css';
import Head from 'next/head';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Creator from '../../components/Creator';
import Global from '../../styles/global.js';

export default class extends React.Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
  }
  render() {
    return (
      <div>
        <Head>
          <style>{globalStyle}</style>
        </Head>
        <Header />
        <Creator />
        <Footer />
        <script src='https://use.typekit.net/fkk3wrp.js' async='true' />
        <script>{'try{Typekit.load({ async: true });}catch(e){}'}</script>
      </div>
    );
  }
}

const globalStyle = Global;
