/**
 * Displays list of artworks on creator page
 */

import React, { Component } from 'react';

/**
 * @section Styles
 */

import styled from 'styled-components';
import { animation, color, media, space } from '../styles/style-utils';

const zoomedOutTransition = `transform 350ms ${animation.standard}, z-index 0ms 350ms`;
const zoomedInTransition = `transform 350ms ${animation.standard}`;

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
  margin-bottom: ${space(0.5)};

  img {
    border-radius: 8px;
    box-shadow: 0 ${space(0.25)} ${space()} rgba(0, 167, 201, 0.3);
    transition: ${zoomedOutTransition};
    width: 100%;
    position: relative;
    will-change: transform, z-index;

    ${media.m`
      transform-origin: 0 50%;
    `}
  }
`;

const Layout = styled.div`
  display: flex;
  flex-direction: column;
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
      <Layout>
        {this.props.artworks.map((artwork, key) => (
          <Artwork key={key}>
            <ImageContainer onClick={() => this.zoom(key)}>
              <img
                src={artwork.image}
                alt={`${artwork.title} © ${this.props.creator} ${artwork.year}`}
                style={{
                  cursor: `zoom-${this.state.zoomed === key ? 'out' : 'in'}`,
                  transform: `scale(${this.state.zoomed === key ? 2 : 1})`,
                  transition: this.state.zoomed === key ? zoomedInTransition : zoomedOutTransition,
                  zIndex: this.state.zoomed === key ? 50 : 1,
                }}
              />
            </ImageContainer>
            <Title>{artwork.title}</Title>
            <Year>{artwork.year}</Year>
          </Artwork>
        ))}
      </Layout>
    );
  }
}
