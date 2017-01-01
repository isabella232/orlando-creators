/**
 * Displays list of artworks on creator page
 */

import React, { Component } from 'react';

/**
 * @section Styles
 */

import styled from 'styled-components';
import { animation, color, media, space } from '../styles/style-utils';

const Artwork = styled.div`
  margin-bottom: 2em;
  text-align: center;
  ${media.s`
    padding-right: ${space()};
  `}
  ${media.m`
    margin-left: -${space(4)};
    padding-right: 0;
    width: calc(100% + ${space(2)});
  `}
`;

const ImageContainer = styled.div`
  background-color: ${color.blueTT};
  border-radius: 8px;
  cursor: zoom-in;
  height: 0;
  margin-bottom: ${space(0.5)};
  padding-top: 75%;
  position: relative;

  img {
    border-radius: 8px;
    box-shadow: 0 ${space(0.25)} ${space()} rgba(0, 167, 201, 0.3);
    left: 0;
    position: absolute;
    top: 0;
    transition: transform 350ms ${animation.standard}, z-index 0ms 150ms;
    width: 100%;
    will-change: transform, z-index;
    z-index: 50;

    ${media.m`
      transform-origin: 0 50%;
    `}
  }
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
    this.zoom = this.zoom.bind(this);

    this.state = { zoomed: -1 };
  }
  zoom(key) {
    if(key == this.state.zoomed) {
      this.setState({ zoomed: -1 });
    }
    else {
      this.setState({ zoomed: key });
    }
  }
  render() {
    return (
      <div>
        {this.props.artworks.map((artwork, key) => (
          <Artwork key={key}>
            <ImageContainer
              onClick={() => this.zoom(key)}
              style={{ zIndex: this.state.zoomed === key ? 100 : 0 }}
            >
              <img
                src={artwork.image}
                alt={artwork.title}
                style={{
                  cursor: `zoom-${this.state.zoomed === key ? 'out' : 'in'}`,
                  transform: `scale(${this.state.zoomed === key ? 2 : 1})`,
                }}
              />
            </ImageContainer>
            <Title>{artwork.title}</Title>
            <Year>{artwork.year}</Year>
          </Artwork>
        ))}
      </div>
    );
  }
}
