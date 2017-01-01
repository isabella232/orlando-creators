/**
 * Individual creator page
 */

import React, { Component } from 'react';
import Link from 'next/link';
import styled from 'styled-components';

import ArtworkList from './ArtworkList';
import Cell from './Cell';
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
    width: 100%;
    ${media.s`
      margin-left: 0;
    `}
  }

  ${media.s`
    padding: ${space(2)};
  `}
`;

const Button = styled.a`
  background-color: ${color.blue};
  border-radius: 2em;
  color: white;
  display: inline-block;
  font-size: 0.875em;
  font-weight: 700;
  letter-spacing: 0.125em;
  margin-top: 2em;
  padding-bottom: 0.75em;
  padding-left: 2em;
  padding-right: 2em;
  padding-top: 0.75em;
  text-transform: uppercase;
  transition: background-color 200ms;

  &:focus,
  &:hover {
    background-color: ${color.blueT};
  }
`;

const Back = styled.div`
  color: ${color.blueSS};
  font-size: 0.75em;
  font-weight: 700;
  letter-spacing: 0.125em;
  margin-top: 2em;
  opacity: 0.5;
  text-transform: uppercase;
`;

const ArtworkContainer = styled.div`
  width: 100%;

  ${media.s`
    flex: 1;
  `}
`;

const Transcript = styled.div`
  width: 100%;

  ${media.s`
    flex: 1;
  `}

  h2 {
    text-transform: uppercase;
    font-size: 0.75em;
    letter-spacing: 0.125em;
    margin-bottom: 1em;

    + p {
      margin-top: 0;
    }
  }

  p {
    font-size: 14px;
  }
`;

const Footer = styled.div`
  text-align: center;
  width: 100%;
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
              <Button href="http://justinmezzell.com">Visit Justin’s Site</Button>
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
