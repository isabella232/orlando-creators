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
    line-height: 1;
    margin-bottom: ${space()};
    text-align: center;
    width: 100%;
    ${media.s`
      margin-bottom: ${space()};
    `}
  }

  ${media.s`
    padding: ${space(2)};
  `}
`;

const Quote = styled.blockquote`
  border-bottom: 2px dotted ${color.grayT};
  font-weight: 400;
  font-style: italic;
  font-size: 1.25em;
  margin-bottom: ${space(2)};
  margin-left: 0;
  margin-right: 0;
  margin-top: ${space(0.5)};
  padding-bottom: ${space(1.5)};
  padding-left: ${space(2)};
  padding-right: ${space(2)};
  text-align: center;
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
    color: ${color.blueSS};
    font-size: 0.75em;
    margin-bottom: 0.5em;
    ${media.s`
      font-size: 0.875em;
    `}

    + p {
      margin-top: 0;
    }
  }

  p {
    color: ${color.gray};
    font-size: 15px;
    font-weight: 400;
  }
`;

const SocialContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-top: ${space(0.25)};
  padding-bottom: ${space(0.5)};
`;

const Footer = styled.div`
  border-top: 2px dotted ${color.grayT};
  margin-top: ${space(2)};
  padding-top: ${space()};
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
          <Video src={`https://www.youtube.com/embed/${this.props.creator.videoID}?rel=0&color=white&modestbranding=1`} />
        </Cell>
        <Cell>
          <Card>
            <h1>{this.props.creator.name}</h1>
            <Quote>
              Don’t wait for an invitation. … Figure out how to get involved.
              We need more young people to feel like they deserve a seat at&nbsp;the&nbsp;table.
            </Quote>
            <ArtworkContainer>
              <ArtworkList creator={this.props.creator.name} artworks={this.props.artworks} />
            </ArtworkContainer>
            <Transcript dangerouslySetInnerHTML={this.setTranscript()} />
            <Footer>
              <h5>{`Connect with ${this.props.creator.name}`}</h5>
              <SocialContainer>
                {this.props.creator.social.map((social, key) => (
                  <Social
                    key={key}
                    name={this.props.creator.name}
                    type={social.type}
                    url={social.url}
                  />
                ))}
              </SocialContainer>
            </Footer>
          </Card>
        </Cell>
      </div>
    );
  }
}
