/**
 * Individual creator page
 */

import React, { Component } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styled from 'styled-components';

import ArtworkList from './ArtworkList';
import Cell from './Cell';
import Social from './Social';
import Video from './Video';
import { color, media, space } from '../styles/style-utils';

/**
 * @section Styles
 */

const Card = styled.div`
  background-color: white;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  box-shadow: 0 8px 48px rgba(0, 80, 102, 0.2);
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 4em;
  padding-bottom: ${space()};
  padding-top: ${space()};
  padding-left: ${space()};
  padding-right: ${space()};

  h1 {
    margin-bottom: 1em;
    margin-left: ${space()}
    text-align: center;
    width: 100%;
    ${media.s`
      margin-left: 0;
    `}
  }

  ${media.s`
    padding: ${space(2)};
  `}
`;

const Back = styled.div`
  color: ${color.blueSS};
  font-size: 0.75em;
  font-weight: 700;
  letter-spacing: 0.125em;
  margin-top: 4em;
  opacity: 0.5;
  text-transform: uppercase;
`;

const ArtworkContainer = styled.div`
  width: 100%;

  ${media.s`
    width: 50%;
  `}
`;

const Transcript = styled.div`
  width: 100%;

  ${media.s`
    width: 50%;
  `}

  h2 {
    color: ${color.blueS};
    font-size: 0.75em;
    margin-bottom: 0.5em;

    + p {
      margin-top: 0;
    }
  }

  p {
    font-size: 14px;
  }
`;

const SocialContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const Footer = styled.div`
  text-align: center;
  width: 100%;

  h5 {
    color: ${color.blue};
    font-weight: 400;
    letter-spacing: 0.125em;
    text-transform: uppercase;
  }
`;

/**
 * @section Template
 */

export default class extends Component {
  constructor(props) {
    super(props);
  }
  setTranscript() {
    return { __html: this.props.transcript };
  }
  render() {
    return (
      <div>
        <Head>
          <meta type="og:image" content={`/static/assets/${this.props.creator.slug}-preview.jpg`} />
          <meta type="twitter:image" content={`/static/assets/${this.props.creator.slug}-preview.jpg`} />
        </Head>
        <Cell large>
          <Video src={`https://www.youtube.com/embed/${this.props.creator.videoID}`} />
        </Cell>
        <Cell>
          <Card>
            <h1>{this.props.creator.name}</h1>
            <ArtworkContainer>
              <ArtworkList artworks={this.props.artworks} />
            </ArtworkContainer>
            <Transcript dangerouslySetInnerHTML={this.setTranscript()} />
            <Footer>
              <h5>{`Connect with ${this.props.creator.name}`}</h5>
              <SocialContainer>
                {this.props.creator.social.map((social, key) => (
                  <Social key={key} type={social.type} url={social.url} />
                ))}
              </SocialContainer>
              <Link href="/">
                <Back>See other creators</Back>
              </Link>
            </Footer>
          </Card>
        </Cell>
      </div>
    );
  }
}
