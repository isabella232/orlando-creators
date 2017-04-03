/**
 * About Page
 *
 * More info about this ish
 */

import React from 'react';
import Head from 'next/head';
import styled from 'styled-components';

import Cell from '../components/Cell';
import Header from '../components/Header';
import Parallax from '../components/Parallax';

import { animation, color, media, space } from '../styles/style-utils';

/**
 * @section Data
 */

const people = [
  {
    image: 'envy.svg',
    name: 'Envy',
    title: 'Concept + Website',
    url: 'http://madewithenvy.com',
  },
  {
    image: 'macbeth-studio.svg',
    name: 'Macbeth Studio',
    title: 'Videography',
    url: 'http://macbethstudio.com',
  },
  {
    image: 'ayana.jpg',
    name: 'Ayana Campbell',
    title: 'Animation + Design',
    url: 'http://ayanacampbell.com',
  },
  {
    image: 'morgan.jpg',
    name: 'Morgan Walker',
    title: 'Director',
    url: 'https://vimeo.com/morganwalker',
  },
  {
    image: 'drew.jpg',
    name: 'Drew Powers',
    title: 'Code + Design',
    url: 'https://twitter.com/an_ennui',
  },
];

/**
 * @section Styles
 */

const Description = styled.div`
  padding-bottom: 2em;
  padding-left: ${space()};
  padding-right: ${space()};
  padding-top: 2em;
  text-align: center;

  ${media.s`
    padding-left: 0;
    padding-right: 0;
  `}
`;

const Blurb = styled.p`
  color: ${color.blue};
  font-size: 22px;
  font-weight: 200;
  line-height: 1.375;
  margin-top: 0.5em;
  ${media.s`
    font-size: 28px;
    line-height: 1.5;
  `}
`;

const CreditTitle = styled.h3`
  color: ${color.blueSS};
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.125em;
  margin-bottom: 2em;
  text-align: center;
  text-transform: uppercase;
`;

const Flamingo = styled.img`
  height: 100px;
  width: 100px;
`;

const Person = styled.a`
  line-height: 1;
  text-align: center;
  margin-bottom: ${space()};
  width: 50%;

  ${media.s`
    width: 33.3333%;
  `}
  ${media.l`
    width: 20%;
  `}

  img {
    border-radius: 50%;
    box-shadow: 0 16px 32px rgba(0,80,102,0);
    height: 96px;
    transition: box-shadow 200ms,transform 200ms ${animation.standard};
    width: 96px;
    ${media.s`
      height: 96px;
      width: 96px;
    `}
  }
  h4 {
    color: ${color.blue};
    font-size: 1.125em;
    margin-bottom: 0;
    margin-top: 0.5em;
  }
  h5 {
    color: ${color.blueSS};
    font-size: 0.825em;
    margin-bottom: 0;
    margin-top: 0.25em;
  }
  &:focus img,
  &:hover img {
    box-shadow: 0 16px 32px rgba(0,80,102,0.5);
    transform: translateY(-20%);
  }
`;

const PersonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-left: ${space()};
  padding-right: ${space()};
  width: 100%;

  ${media.s`
    padding-left: 0;
    padding-right: 0;
    padding-bottom: 10em;
  `}
`;

const Summary = styled.p`
  font-weight: 300;
  line-height: 1.5;
  marginLeft: auto;
  marginRight: auto;
  maxWidth: 30em;
  text-align: left;
`;

const pageTitle = 'Orlando Creators 🌴';

export default class extends React.Component {
  render() {
    return (
      <Parallax>
        <Head>
          <title>{pageTitle}</title>
          <meta property="og:title" content={pageTitle} />
          <meta property="og:url" content="http://www.orlandocreators.com/about" />
          <meta property="og:image" content="/static/assets/orlando-creators.jpg" />
          <meta property="twitter:image" content="/static/assets/orlando-creators.jpg" />
        </Head>
        <main rel="main">
          <Header />
          <Cell>
            <Description>
              <Flamingo src="/static/assets/flamingo.svg" alt="flamingo with sunglasses" />
              <Blurb>
                Orlando Creators is an interview series showcasing the
                designers and visual&nbsp;artists that call this fair city&nbsp;“home.”
              </Blurb>
              <Summary>
                Some attribute it to the subtropical climate of Florida; others
                to the hospitality our city is famous for. Whatever
                the reason, it’s true that warm hands have led to warm hearts. And it’s
                these same warm, sweaty, swampy mitts that have crafted some pretty neat
                things down in the deep, deep South.
              </Summary>
            </Description>
            <div>
              <CreditTitle>Made with 🍊 by</CreditTitle>
              <PersonContainer>
                {people.map((person, key) => (
                  <Person key={key} href={person.url} rel="noopener" target="_blank">
                    <img src={`/static/assets/${person.image}`} alt={person.name} />
                    <h4>{person.name}</h4>
                    <h5>{person.title}</h5>
                  </Person>
                ))}
              </PersonContainer>
            </div>
          </Cell>
        </main>
      </Parallax>
    );
  }
}
