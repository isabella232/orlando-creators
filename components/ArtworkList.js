/**
 * Displays list of artworks on creator page
 */

import React, { Component } from 'react';
import styled from 'styled-components';

import { color, media, space } from '../styles/style-utils';

/**
 * @section Styles
 */

const Artwork = styled.div`
  margin-bottom: 2em;
  text-align: center;
  ${media.s`
    padding-right: ${space()};
  `}
  ${media.m`
    padding-right: 0;
    transform: translateX(-${space(4)});
    width: calc(100% + ${space(2)});
  `}

  img {
    border-radius: 8px;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
  }
`;

const ImageContainer = styled.div`
  background-color: ${color.blueTT};
  border-radius: 8px;
  height: 0;
  margin-bottom: ${space(0.5)};
  padding-top: 75%;
  position: relative;
`;

const Title = styled.h3`
  font-size: 0.75em;
  letter-spacing: 0.0625em;
  margin: 0;
`;

const Year = styled.small`
  display: block;
  font-size: 0.75em;
  letter-spacing: 0.0625em;
`;

/**
 * @section Template
 */

export default class extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        {this.props.artworks.map((artwork, key) => (
          <Artwork key={key}>
            <ImageContainer>
              <img src={artwork.image} alt={artwork.title} />
            </ImageContainer>
            <Title>{artwork.title}</Title>
            <Year>{artwork.year}</Year>
          </Artwork>
        ))}
      </div>
    );
  }
}
