/**
 * Social media link
 */

import React, { Component } from 'react';

import { animation } from '../styles/style-utils';

/**
 * @section Styles
 */

import styled from 'styled-components';

const Social = styled.a`
  display: block;
  height: 48px;
  margin-left: 1em;
  margin-right: 1em;
  user-select: none;
  width: 48px;

  &:focus img,
  &:hover img {
    box-shadow: 0 16px 32px rgba(0,170,201,0.25);
    transform: translateY(-20%);
  }

  img {
    border-radius: 50%;
    display: block;
    height: 48px;
    transition: box-shadow 200ms, transform 200ms ${animation.default};
    width: 48px;
  }
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
      <Social href={this.props.url} title={this.props.type} target="_blank" rel="noopener">
        <img src={`/static/assets/${this.props.type}.svg`} alt={`Connect with ${this.props.name} on ${this.props.type}`} />
      </Social>
    );
  }
}
