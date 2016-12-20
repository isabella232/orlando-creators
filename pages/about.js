import React from 'react';
import Head from 'next/head';

import Cell from '../components/Cell';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PeopleList from '../containers/PeopleList';
import Global from '../styles/global';

const style = {};

export default class extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <main rel="main">
          <Head>
            <style>{Global}</style>
          </Head>
          <Header />
          <Cell>
            <div>
              <img src="/static/assets/flamingo.svg" alt="flamingo with sunglasses" />
              <p>
                Orlando Creators is a monthly interview series showcasing the designers and visual artists that call this fair city “home.”
              </p>
              <p>
                Some attribute it to the subtropical climate of Florida; others to the rich history of hospitality our city has become known for—whatever the reason, it’s true that warm hands have led to warm hearts. And it’s these same warm, sweaty, swampy mitts that have crafted some pretty neat things down in the deep South.
              </p>
            </div>
            <PeopleList />
          </Cell>
          <Footer />
        </main>
        <script src="https://use.typekit.net/fkk3wrp.js" async="true" />
        <script>{'try{Typekit.load({ async: true });}catch(e){}'}</script>
      </div>
    );
  }
}
