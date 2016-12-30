import React, { Component } from 'react';

import CreatorsList from '../containers/CreatorsList';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Parallax from '../components/Parallax';

export default class extends Component {
  render() {
    return (
      <Parallax>
        <main rel="main">
          <Header />
          <CreatorsList />
        </main>
        <Footer />
      </Parallax>
    );
  }
}
