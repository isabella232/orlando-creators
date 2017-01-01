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

import { animation, color } from '../styles/style-utils';

/**
 * @section Data
 */

const people = [
  {
    image: 'ayana.jpg',
    name: 'Ayana Campbell',
    title: 'Animation + Design',
    url: 'https://twitter.com/_ayanacampbell',
  },
  {
    image: 'drew.jpg',
    name: 'Drew Powers',
    title: 'Code + Design',
    url: 'https://twitter.com/an_ennui',
  },
  {
    image: 'macbeth-studio.svg',
    name: 'Macbeth Studio',
    title: 'Videography',
    url: 'http://macbethstudio.com',
  },
];

/**
 * @section Styles
 */

const Description = styled.div`
  padding-bottom: 2em;
  padding-top: 2em;
  text-align: center;
`;

const Blurb = styled.p`
  color: ${color.blue};
  font-size: 28px;
  font-weight: 200;
  line-height: 1.5;
  margin-top: 0.5em;
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
  height: 128px;
  width: 128px;
`;

const Person = styled.a`
  flex: 1;
  line-height: 1;
  text-align: center;
  img {
    borderRadius: 32px;
    boxShadow: 0 16px 32px rgba(0,80,102,0);
    height: 128px;
    transition: box-shadow 200ms,transform 200ms ${animation.standard};
    width: 128px;
  }
  h4 {
    color: ${color.blue};
    font-size: 1.125em;
    margin-top: 0.5em;
    marginBottom: 0;
  }
  h5 {
    color: ${color.blueSS};
    font-size: 0.825em;
    margin-top: 0.25em;
    marginBottom: 0;
  }
  &:focus img,
  &:hover img {
    boxShadow: 0 16px 32px rgba(0,80,102,0.5);
    transform: translateY(-20%);
  }
`;

const PersonContainer = styled.div`
  display: flex;
  padding-bottom: 10em;
  width: 100%;
`;

const Summary = styled.p`
  font-weight: 300;
  line-height: 1.5;
  marginLeft: auto;
  marginRight: auto;
  maxWidth: 30em;
  text-align: left;
`;

export default class extends React.Component {
  render() {
    return (
      <Parallax>
        <Head><title>Orlando Creators 🌴 </title></Head>
        <main rel="main">
          <Header />
          <Cell>
            <Description>
              <Flamingo src="/static/assets/flamingo.svg" alt="flamingo with sunglasses" />
              <Blurb>
                Orlando Creators is an interview series showcasing the
                designers and visual artists that call this fair city “home.”
              </Blurb>
              <Summary>
                Some attribute it to the subtropical climate of Florida; others
                to the rich history of hospitality our city has become known for. Whatever
                the reason, it’s true that warm hands have led to warm hearts. And it’s
                these same warm, sweaty, swampy mitts that have crafted some pretty neat
                things down in the deep, deep South.
              </Summary>
            </Description>
            <div>
              <CreditTitle>Made with 🍊 by</CreditTitle>
              <PersonContainer>
                {people.map((person, key) => (
                  <Person id={key} href={person.url} rel="noopener" target="_blank">
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
