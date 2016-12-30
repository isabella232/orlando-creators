/**
 * Cell
 *
 * Width-limiting containers
 */

import React, { Component } from 'react';
import styled from 'styled-components';

import { media } from '../styles/style-utils';

/**
 * @section Style
 */

const Cell = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: ${props => props.large ? '1080px' : '800px'};
  ${media.s `
    ${props => props.large ? 'max-width: 1200px;' : ''}
  `}
`;

export default class extends Component {
  render() {
    return <Cell>{this.props.children}</Cell>;
  }
}
