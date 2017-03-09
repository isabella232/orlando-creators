/**
 * @module Footer
 */

import React, { Component } from 'react';
import styled from 'styled-components';

import { color } from '../styles/style-utils';

/**
 * @section Styles
 */

const Footer = styled.footer`
  background-color: ${color.black};
  left: 0;
  position: absolute;
  top: 100vh;
  width: 100%;
`;

const Colophon = styled.div`
  color: white;
  font-size: 14px;
  font-weight: 900;
  letter-spacing: 0.0625em;
  line-height: 2;
  padding-bottom: 1em;
  padding-top: 1em;
  position: relative;
  text-align: center;
  text-transform: uppercase;
  z-index: 10;
`;

export default class extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Footer innerRef={(footer) => { this.footer = footer }}>
        <Colophon>
          Made with 🍊  by <a href="http://madewithenvy.com/" rel="noopener" target="_blank">Envy</a> and <a href="http://macbethstudio.com/" target="_blank">Macbeth Studio</a>
        </Colophon>
      </Footer>
    );
  }
}
